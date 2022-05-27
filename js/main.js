

// parallax HeroBody
document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".object").forEach(function (move) {

        let moving_value = move.getAttribute("data-value");
        let x = (e.clientX * moving_value) / 250;
        let y = (e.clientY * moving_value) / 250;

        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}
// ScrollToTop
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    let Top = document.getElementById("btnTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        Top.style.display = "block";
        Top.style.visibility = "visible";
        Top.style.opacity = 1;
    } else {
        Top.style.display = "none";
        Top.style.visibility = "hidden";
        Top.style.opacity = 0;
    }
    Top.addEventListener("click", BackToTop)
}
function BackToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// irAform
// let btnIr = document.getElementById("abrirFormulario");
// function AbrirHtml() {
//     window.open('../html/formulario.html', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
//     // window.location.href = '../html/formulario.html';
// }
// btnIr.addEventListener("click", AbrirHtml);


// carousel
!(function (e) {
    var t = {};
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var o in e)
                    n.d(
                        r,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return r;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                        return e.default;
                    }
                    : function () {
                        return e;
                    };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 0));
})([
    function (e, t, n) {
        "use strict";
        n.r(t);
        n(1);
        document.addEventListener("DOMContentLoaded", () => {
            const e = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
            e.length > 0 &&
                e.forEach((e) => {
                    e.addEventListener("click", () => {
                        const t = e.dataset.target,
                            n = document.getElementById(t);
                        e.classList.toggle("is-active"), n.classList.toggle("is-active");
                    });
                }),
                document.querySelectorAll(".accordion a").forEach((e) => {
                    e.addEventListener("click", (t) => {
                        e.parentElement.classList.toggle("open");
                    });
                });
        });
    },
    function (e, t) { },
]);


