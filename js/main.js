!function (e) { var t = {}; function n(r) { if (t[r]) return t[r].exports; var o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports } n.m = e, n.c = t, n.d = function (e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) { return e[t] }.bind(null, o)); return r }, n.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return n.d(t, "a", t), t }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 0)}([function (e, t, n) { "use strict"; n.r(t); n(1); document.addEventListener("DOMContentLoaded", () => { const e = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0); e.length > 0 && e.forEach(e => { e.addEventListener("click", () => { const t = e.dataset.target, n = document.getElementById(t); e.classList.toggle("is-active"), n.classList.toggle("is-active") }) }), document.querySelectorAll(".accordion a").forEach(e => { e.addEventListener("click", t => { e.parentElement.classList.toggle("open") }) }) }) }, function (e, t) { }]);

// Carousel de partners
bulmaCarousel.attach('#carousel-partners', {
	autoplay: false,
	initialSlide: 0,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseonhover: true,
	slidesToShow: 3,
	infinite: true,
	pagination: false,
	navigationSwipe: true
});