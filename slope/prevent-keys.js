!function() {
    if (window.self !== window.top) {
        var o = {
            Space: !0,
            ArrowUp: !0,
            ArrowDown: !0,
            ArrowLeft: !0,
            ArrowRight: !0
        };
        window.addEventListener("keydown", (function(n) {
            o[n.code] && n.preventDefault()
        }
        ), !1)
    }
}();
