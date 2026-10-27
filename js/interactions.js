// 互動效果：姓名逐字彈跳、捲動進場
(function () {
    document.documentElement.classList.add('js');

    // 姓名拆字（只包 span，不改文字內容）
    var name = document.querySelector('#about h1 .text-primary');
    if (name) {
        var text = name.textContent.trim();
        name.textContent = '';
        for (var i = 0; i < text.length; i++) {
            var span = document.createElement('span');
            span.className = 'char-bounce';
            span.textContent = text[i];
            name.appendChild(span);
        }
    }

    // 首頁圖案：點擊翻轉、再點復原
    document.querySelectorAll('.shape-play .shape').forEach(function (el) {
        el.addEventListener('click', function () { el.classList.toggle('is-spun'); });
    });

    // 捲動進場
    var targets = document.querySelectorAll('.resume-section-content > *');
    targets.forEach(function (el) { el.classList.add('reveal'); });
    if (!('IntersectionObserver' in window)) {
        targets.forEach(function (el) { el.classList.add('is-visible'); });
        return;
    }
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
        });
    }, { threshold: 0.12 });
    targets.forEach(function (el) { io.observe(el); });
})();
