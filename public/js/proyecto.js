// esversion: 2018
const close_popup = document.querySelectorAll('.close_popup');

const slidesContent = [
   {
      title: 'Calidad',
      type: 'Tipo A',
      mts: '100',
      small: 'calidad.jpg',
      large: 'calidad-XL.jpg',
      content: 'Exclusivos departamentos que te transportan a vivir San Miguel de Allende, equipados con la más alta gama de materiales de calidad para darte a ti, ese espacio único. '
   },
   {
      title: 'Acabados',
      type: 'Tipo B',
      mts: '65',
      small: 'acabados.jpg',
      large: 'acabados-XL.jpg',
      content: 'Espectaculares acabados en muros de tabique de barro aparente, aplanado, con detalles en pórfido sangre de pichón.'
   },
   {
      title: 'color',
      type: 'Tipo B',
      mts: '65',
      small: 'color.jpg',
      large: 'color-XL.jpg',
      content: 'Ambos modelos cuentan con acabados de estuco finamente trabajados, en una paleta de colores bombilla, pinole, infusión y camelado, que ofrece al tacto, la sensación de fina seda y frescura.'
   },
   {
      title: 'sustentable',
      type: 'Tipo B',
      mts: '65',
      small: 'sustentable.jpg',
      large: 'sustentable-XL.jpg',
      content: 'Los departamentos están equipados con cocinas integrales que cuentan con tecnología sustentable haciendo de tu espacio, un lugar seguro y eficiente.'
   },
   {
      title: 'relajante',
      type: 'Tipo B',
      mts: '65',
      small: 'relajante.jpg',
      large: 'relajante-XL.jpg',
      content: 'Baños que incitan a vivir una sensación relajante gracias a sus amplios espacios que cuentan con gabinetes de madera con cubiertas de mármol Santo Tomás, mezcladoras de lujo y piso porcelánico.'
   },
];

const chevron_left = document.querySelector('.chevron_left');
const chevron_right = document.querySelector('.chevron_right');
const slider_container = document.querySelector('.slider_container');

const slides_container = document.querySelector('.slides_container');
const slide = document.querySelector('.slide');

// const slide = document.querySelector('.slide');

// IDEA:
// multiplicar el ancho por el index del array para recorrer el slider
let slideN = 0;
slides_container.setAttribute('style', `grid-template-columns: repeat(${slidesContent.length}, 100%);`);
slidesContent.forEach((i, ï, ä) => {
   slides_container.innerHTML += `
      <div class="slide">
         <img class="slide_img swipe" src="../media/slider-proyecto/${window.innerWidth >= 600 ? i.large : i.small}" alt="${i.title}">
         <article class="detalles_box">
            <p class="detalles_title">${i.title}</p>
            <p class="detalles_content">${i.content}</p>
         </article>
      </div>
   `;
});


const detalles_box = document.querySelector('.detalles_box');
if (window.innerWidth >= 1200) {
   chevron_left.setAttribute('style', 'left: 25px; top:334px');
   chevron_right.setAttribute('style', `right: ${(detalles_box.clientWidth + 25)}px; top:334px`);
}
/********************************************/
// go left
chevron_left.addEventListener('click', go_left);
function go_left() {   
   slideN--
   if (slideN < 0) {
      slideN = slidesContent.length - 1;
   }
   if (window.innerWidth >= 1200) {
      let width = document.querySelector('.slider_container').clientWidth;
      slides_container.style.transform = `translate(-${width * slideN}px)`;
   } else {
      slides_container.style.transform = `translate(-${window.innerWidth * slideN}px)`;
   }

} // go_left


// go right
chevron_right.addEventListener('click', go_right);
function go_right() {
   slideN++
   if (slideN > slidesContent.length - 1) {
      slideN = 0;
   }
   if (window.innerWidth >= 1200) {
      let width = document.querySelector('.slider_container').clientWidth;
      slides_container.style.transform = `translate(-${width * slideN}px)`;
   } else {
      slides_container.style.transform = `translate(-${window.innerWidth * slideN}px)`;
   }
}
let initialCoordsX = 0;
let finalCoordsX = 0;

let initialCoordsY = 0;
let finalCoordsY = 0;

document.addEventListener('touchstart', function (e) {
   clearInterval(slideInterval);
   e.preventDefault();
   document.querySelectorAll('.slide_header_txt').forEach((i, ï, ä) => {
      i.innerText = 'Y:' + Math.floor(e.touches[0].clientY) + ' X:' + Math.floor(e.touches[0].clientX);
   });
   if (e.target.classList.contains('swipe')) {
      e.stopPropagation();
      initialCoordsX = e.touches[0].clientX;
      initialCoordsY = e.touches[0].clientY;
   }

   // console.log(initialCoordsX);
});

document.addEventListener('touchmove', function (e) {
   document.querySelectorAll('.slide_header_txt').forEach((i, ï, ä) => {
      i.innerText = 'Y:' + Math.floor(e.touches[0].clientY) + ' X:' + Math.floor(e.touches[0].clientX);
   });
   if (e.target.classList.contains('swipe')) {
      e.stopPropagation();
      finalCoordsX = e.touches[0].clientX;
      finalCoordsY = e.touches[0].clientY;
      // console.log(finalCoordsX);
   }
});

document.addEventListener('touchend', function (e) {
   clearInterval(slideInterval);
   if ((finalCoordsX < initialCoordsX - 30) && (finalCoordsY > initialCoordsY - 30)) {
      go_right();
   }
   if ((finalCoordsX > initialCoordsX + 30) && (finalCoordsY < initialCoordsY + 30)) {
      go_left();
   }
});

document.body.addEventListener('touchmove', function (event) {
   event.preventDefault();
}, false);


/************ drift *********/
(function (__wpcc) {
   __wpcc.d = __wpcc.d || {}; __wpcc.d.scope = {}; __wpcc.d.createTemplateTagFirstArg = function (a) { return a.raw = a }; __wpcc.d.createTemplateTagFirstArgWithRaw = function (a, b) { a.raw = b; return a }; __wpcc.d.getGlobal = function (a) { a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global]; for (var b = 0; b < a.length; ++b) { var c = a[b]; if (c && c.Math == Math) return c } throw Error("Cannot find global object"); }; __wpcc.d.global = __wpcc.d.getGlobal(this); var g;
   "undefined" === typeof g && (g = function () { }); g.p = "";
}).call(this || window, (window.__wpcc = window.__wpcc || {}));

(function (__wpcc) {
   var r = function (a) { return h ? a instanceof HTMLElement : a && "object" === typeof a && null !== a && 1 === a.nodeType && "string" === typeof a.nodeName }, t = function (a, b) { b.forEach(function (c) { a.classList.add(c) }) }, u = function (a, b) { b.forEach(function (c) { a.classList.remove(c) }) }, x = function () { throw Error("Missing parameter"); }, y = function (a) {
      this.isShowing = !1; var b = void 0 === a.namespace ? null : a.namespace, c = void 0 === a.zoomFactor ? x() : a.zoomFactor; a = void 0 === a.containerEl ? x() : a.containerEl; this.settings = {
         namespace: b, zoomFactor: c,
         containerEl: a
      }; this.openClasses = this._buildClasses("open"); this._buildElement()
   }, z = function (a) {
      a = void 0 === a ? {} : a; this._show = this._show.bind(this); this._hide = this._hide.bind(this); this._handleEntry = this._handleEntry.bind(this); this._handleMovement = this._handleMovement.bind(this); var b = a; a = void 0 === b.el ? x() : b.el; var c = void 0 === b.zoomPane ? x() : b.zoomPane, e = void 0 === b.sourceAttribute ? x() : b.sourceAttribute, f = void 0 === b.handleTouch ? x() : b.handleTouch, q = void 0 === b.onShow ? null : b.onShow, k = void 0 === b.onHide ?
         null : b.onHide, v = void 0 === b.hoverDelay ? 0 : b.hoverDelay, w = void 0 === b.touchDelay ? 0 : b.touchDelay, l = void 0 === b.hoverBoundingBox ? x() : b.hoverBoundingBox, m = void 0 === b.touchBoundingBox ? x() : b.touchBoundingBox, n = void 0 === b.namespace ? null : b.namespace, p = void 0 === b.zoomFactor ? x() : b.zoomFactor; b = void 0 === b.boundingBoxContainer ? x() : b.boundingBoxContainer; this.settings = {
            el: a, zoomPane: c, sourceAttribute: e, handleTouch: f, onShow: q, onHide: k, hoverDelay: v, touchDelay: w, hoverBoundingBox: l, touchBoundingBox: m, namespace: n, zoomFactor: p,
            boundingBoxContainer: b
         }; if (this.settings.hoverBoundingBox || this.settings.touchBoundingBox) this.boundingBox = new y({ namespace: this.settings.namespace, zoomFactor: this.settings.zoomFactor, containerEl: this.settings.boundingBoxContainer }); this.enabled = !0; this._bindEvents()
   }, A = function (a) {
      a = void 0 === a ? {} : a; this._completeShow = this._completeShow.bind(this); this._completeHide = this._completeHide.bind(this); this._handleLoad = this._handleLoad.bind(this); this.isShowing = !1; var b = void 0 === a.container ? null : a.container,
         c = void 0 === a.zoomFactor ? x() : a.zoomFactor, e = void 0 === a.inline ? x() : a.inline, f = void 0 === a.namespace ? null : a.namespace, q = void 0 === a.showWhitespaceAtEdges ? x() : a.showWhitespaceAtEdges, k = void 0 === a.containInline ? x() : a.containInline; this.settings = { container: b, zoomFactor: c, inline: e, namespace: f, showWhitespaceAtEdges: q, containInline: k, inlineOffsetX: void 0 === a.inlineOffsetX ? 0 : a.inlineOffsetX, inlineOffsetY: void 0 === a.inlineOffsetY ? 0 : a.inlineOffsetY, inlineContainer: void 0 === a.inlineContainer ? document.body : a.inlineContainer };
      this.openClasses = this._buildClasses("open"); this.openingClasses = this._buildClasses("opening"); this.closingClasses = this._buildClasses("closing"); this.inlineClasses = this._buildClasses("inline"); this.loadingClasses = this._buildClasses("loading"); this._buildElement()
   }, B = function (a, b) {
      b = void 0 === b ? {} : b; this.VERSION = "1.4.3"; this.triggerEl = a; this.destroy = this.destroy.bind(this); if (!r(this.triggerEl)) throw new TypeError("`new Drift` requires a DOM element as its first argument."); a = b.namespace || null; var c =
         b.showWhitespaceAtEdges || !1, e = b.containInline || !1, f = b.inlineOffsetX || 0, q = b.inlineOffsetY || 0, k = b.inlineContainer || document.body, v = b.sourceAttribute || "data-zoom", w = b.zoomFactor || 3, l = void 0 === b.paneContainer ? document.body : b.paneContainer, m = b.inlinePane || 375, n = "handleTouch" in b ? !!b.handleTouch : !0, p = b.onShow || null, E = b.onHide || null, F = "injectBaseStyles" in b ? !!b.injectBaseStyles : !0, G = b.hoverDelay || 0, H = b.touchDelay || 0, I = b.hoverBoundingBox || !1, J = b.touchBoundingBox || !1; b = b.boundingBoxContainer || document.body;
      if (!0 !== m && !r(l)) throw new TypeError("`paneContainer` must be a DOM element when `inlinePane !== true`"); if (!r(k)) throw new TypeError("`inlineContainer` must be a DOM element"); this.settings = { namespace: a, showWhitespaceAtEdges: c, containInline: e, inlineOffsetX: f, inlineOffsetY: q, inlineContainer: k, sourceAttribute: v, zoomFactor: w, paneContainer: l, inlinePane: m, handleTouch: n, onShow: p, onHide: E, injectBaseStyles: F, hoverDelay: G, touchDelay: H, hoverBoundingBox: I, touchBoundingBox: J, boundingBoxContainer: b }; this.settings.injectBaseStyles &&
         !document.querySelector(".drift-base-styles") && (b = document.createElement("style"), b.type = "text/css", b.classList.add("drift-base-styles"), b.appendChild(document.createTextNode(".drift-bounding-box,.drift-zoom-pane{position:absolute;pointer-events:none}@keyframes noop{0%{zoom:1}}@-webkit-keyframes noop{0%{zoom:1}}.drift-zoom-pane.drift-open{display:block}.drift-zoom-pane.drift-closing,.drift-zoom-pane.drift-opening{animation:noop 1ms;-webkit-animation:noop 1ms}.drift-zoom-pane{overflow:hidden;width:100%;height:100%;top:0;left:0}.drift-zoom-pane-loader{display:none}.drift-zoom-pane img{position:absolute;display:block;max-width:none;max-height:none}")),
            a = document.head, a.insertBefore(b, a.firstChild)); this._buildZoomPane(); this._buildTrigger()
   }, h = "object" === typeof HTMLElement; y.prototype._buildClasses = function (a) { var b = ["drift-" + a], c = this.settings.namespace; c && b.push(c + "-" + a); return b }; y.prototype._buildElement = function () { this.el = document.createElement("div"); t(this.el, this._buildClasses("bounding-box")) }; y.prototype.show = function (a, b) { this.isShowing = !0; this.settings.containerEl.appendChild(this.el); var c = this.el.style; c.width = Math.round(a / this.settings.zoomFactor) + "px"; c.height = Math.round(b / this.settings.zoomFactor) + "px"; t(this.el, this.openClasses) };
   y.prototype.hide = function () { this.isShowing && this.settings.containerEl.removeChild(this.el); this.isShowing = !1; u(this.el, this.openClasses) };
   y.prototype.setPosition = function (a, b, c) { var e = window.pageXOffset, f = window.pageYOffset; a = c.left + a * c.width - this.el.clientWidth / 2 + e; b = c.top + b * c.height - this.el.clientHeight / 2 + f; a < c.left + e ? a = c.left + e : a + this.el.clientWidth > c.left + c.width + e && (a = c.left + c.width - this.el.clientWidth + e); b < c.top + f ? b = c.top + f : b + this.el.clientHeight > c.top + c.height + f && (b = c.top + c.height - this.el.clientHeight + f); this.el.style.left = a + "px"; this.el.style.top = b + "px" }; z.prototype._preventDefault = function (a) { a.preventDefault() }; z.prototype._preventDefaultAllowTouchScroll = function (a) { this.settings.touchDelay && this._isTouchEvent(a) && !this.isShowing || a.preventDefault() }; z.prototype._isTouchEvent = function (a) { return !!a.touches };
   z.prototype._bindEvents = function () {
      this.settings.el.addEventListener("mouseenter", this._handleEntry, !1); this.settings.el.addEventListener("mouseleave", this._hide, !1); this.settings.el.addEventListener("mousemove", this._handleMovement, !1); this.settings.handleTouch ? (this.settings.el.addEventListener("touchstart", this._handleEntry, !1), this.settings.el.addEventListener("touchend", this._hide, !1), this.settings.el.addEventListener("touchmove", this._handleMovement, !1)) : (this.settings.el.addEventListener("touchstart",
         this._preventDefault, !1), this.settings.el.addEventListener("touchend", this._preventDefault, !1), this.settings.el.addEventListener("touchmove", this._preventDefault, !1))
   };
   z.prototype._unbindEvents = function () {
      this.settings.el.removeEventListener("mouseenter", this._handleEntry, !1); this.settings.el.removeEventListener("mouseleave", this._hide, !1); this.settings.el.removeEventListener("mousemove", this._handleMovement, !1); this.settings.handleTouch ? (this.settings.el.removeEventListener("touchstart", this._handleEntry, !1), this.settings.el.removeEventListener("touchend", this._hide, !1), this.settings.el.removeEventListener("touchmove", this._handleMovement, !1)) : (this.settings.el.removeEventListener("touchstart",
         this._preventDefault, !1), this.settings.el.removeEventListener("touchend", this._preventDefault, !1), this.settings.el.removeEventListener("touchmove", this._preventDefault, !1))
   }; z.prototype._handleEntry = function (a) { this._preventDefaultAllowTouchScroll(a); this._lastMovement = a; "mouseenter" == a.type && this.settings.hoverDelay ? this.entryTimeout = setTimeout(this._show, this.settings.hoverDelay) : this.settings.touchDelay ? this.entryTimeout = setTimeout(this._show, this.settings.touchDelay) : this._show() };
   z.prototype._show = function () { if (this.enabled) { var a = this.settings.onShow; a && "function" === typeof a && a(); this.settings.zoomPane.show(this.settings.el.getAttribute(this.settings.sourceAttribute), this.settings.el.clientWidth, this.settings.el.clientHeight); this._lastMovement && ((a = this._lastMovement.touches) && this.settings.touchBoundingBox || !a && this.settings.hoverBoundingBox) && this.boundingBox.show(this.settings.zoomPane.el.clientWidth, this.settings.zoomPane.el.clientHeight); this._handleMovement() } };
   z.prototype._hide = function (a) { a && this._preventDefaultAllowTouchScroll(a); this._lastMovement = null; this.entryTimeout && clearTimeout(this.entryTimeout); this.boundingBox && this.boundingBox.hide(); (a = this.settings.onHide) && "function" === typeof a && a(); this.settings.zoomPane.hide() };
   z.prototype._handleMovement = function (a) { if (a) this._preventDefaultAllowTouchScroll(a), this._lastMovement = a; else if (this._lastMovement) a = this._lastMovement; else return; if (a.touches) { a = a.touches[0]; var b = a.clientX; var c = a.clientY } else b = a.clientX, c = a.clientY; a = this.settings.el.getBoundingClientRect(); b = (b - a.left) / this.settings.el.clientWidth; c = (c - a.top) / this.settings.el.clientHeight; this.boundingBox && this.boundingBox.setPosition(b, c, a); this.settings.zoomPane.setPosition(b, c, a) };
   __wpcc.d.global.Object.defineProperties(z.prototype, { isShowing: { configurable: !0, enumerable: !0, get: function () { return this.settings.zoomPane.isShowing } } }); var C = document.createElement("div").style, D = "undefined" === typeof document ? !1 : "animation" in C || "webkitAnimation" in C; A.prototype._buildClasses = function (a) { var b = ["drift-" + a], c = this.settings.namespace; c && b.push(c + "-" + a); return b }; A.prototype._buildElement = function () { this.el = document.createElement("div"); t(this.el, this._buildClasses("zoom-pane")); var a = document.createElement("div"); t(a, this._buildClasses("zoom-pane-loader")); this.el.appendChild(a); this.imgEl = document.createElement("img"); this.el.appendChild(this.imgEl) };
   A.prototype._setImageURL = function (a) { this.imgEl.setAttribute("src", a) }; A.prototype._setImageSize = function (a, b) { this.imgEl.style.width = a * this.settings.zoomFactor + "px"; this.imgEl.style.height = b * this.settings.zoomFactor + "px" };
   A.prototype.setPosition = function (a, b, c) {
      var e = this.imgEl.offsetWidth, f = this.imgEl.offsetHeight, q = this.el.offsetWidth, k = this.el.offsetHeight, v = q / 2 - e * a, w = k / 2 - f * b, l = q - e, m = k - f, n = 0 < l, p = 0 < m; f = n ? l / 2 : 0; e = p ? m / 2 : 0; l = n ? l / 2 : l; m = p ? m / 2 : m; this.el.parentElement === this.settings.inlineContainer && (p = window.pageXOffset, n = window.pageYOffset, a = c.left + a * c.width - q / 2 + this.settings.inlineOffsetX + p, b = c.top + b * c.height - k / 2 + this.settings.inlineOffsetY + n, this.settings.containInline && (a < c.left + p ? a = c.left + p : a + q > c.left + c.width + p &&
         (a = c.left + c.width - q + p), b < c.top + n ? b = c.top + n : b + k > c.top + c.height + n && (b = c.top + c.height - k + n)), this.el.style.left = a + "px", this.el.style.top = b + "px"); this.settings.showWhitespaceAtEdges || (v > f ? v = f : v < l && (v = l), w > e ? w = e : w < m && (w = m)); this.imgEl.style.transform = "translate(" + v + "px, " + w + "px)"; this.imgEl.style.webkitTransform = "translate(" + v + "px, " + w + "px)"
   };
   A.prototype._removeListenersAndResetClasses = function () { this.el.removeEventListener("animationend", this._completeShow, !1); this.el.removeEventListener("animationend", this._completeHide, !1); this.el.removeEventListener("webkitAnimationEnd", this._completeShow, !1); this.el.removeEventListener("webkitAnimationEnd", this._completeHide, !1); u(this.el, this.openClasses); u(this.el, this.closingClasses) };
   A.prototype.show = function (a, b, c) { this._removeListenersAndResetClasses(); this.isShowing = !0; t(this.el, this.openClasses); this.imgEl.getAttribute("src") != a && (t(this.el, this.loadingClasses), this.imgEl.addEventListener("load", this._handleLoad, !1), this._setImageURL(a)); this._setImageSize(b, c); this._isInline ? this._showInline() : this._showInContainer(); D && (this.el.addEventListener("animationend", this._completeShow, !1), this.el.addEventListener("webkitAnimationEnd", this._completeShow, !1), t(this.el, this.openingClasses)) };
   A.prototype._showInline = function () { this.settings.inlineContainer.appendChild(this.el); t(this.el, this.inlineClasses) }; A.prototype._showInContainer = function () { this.settings.container.appendChild(this.el) }; A.prototype.hide = function () { this._removeListenersAndResetClasses(); this.isShowing = !1; D ? (this.el.addEventListener("animationend", this._completeHide, !1), this.el.addEventListener("webkitAnimationEnd", this._completeHide, !1), t(this.el, this.closingClasses)) : (u(this.el, this.openClasses), u(this.el, this.inlineClasses)) };
   A.prototype._completeShow = function () { this.el.removeEventListener("animationend", this._completeShow, !1); this.el.removeEventListener("webkitAnimationEnd", this._completeShow, !1); u(this.el, this.openingClasses) };
   A.prototype._completeHide = function () { this.el.removeEventListener("animationend", this._completeHide, !1); this.el.removeEventListener("webkitAnimationEnd", this._completeHide, !1); u(this.el, this.openClasses); u(this.el, this.closingClasses); u(this.el, this.inlineClasses); this.el.style = ""; this.el.parentElement === this.settings.container ? this.settings.container.removeChild(this.el) : this.el.parentElement === this.settings.inlineContainer && this.settings.inlineContainer.removeChild(this.el) };
   A.prototype._handleLoad = function () { this.imgEl.removeEventListener("load", this._handleLoad, !1); u(this.el, this.loadingClasses) }; __wpcc.d.global.Object.defineProperties(A.prototype, { _isInline: { configurable: !0, enumerable: !0, get: function () { var a = this.settings.inline; return !0 === a || "number" === typeof a && window.innerWidth <= a } } }); B.prototype._buildZoomPane = function () { this.zoomPane = new A({ container: this.settings.paneContainer, zoomFactor: this.settings.zoomFactor, showWhitespaceAtEdges: this.settings.showWhitespaceAtEdges, containInline: this.settings.containInline, inline: this.settings.inlinePane, namespace: this.settings.namespace, inlineOffsetX: this.settings.inlineOffsetX, inlineOffsetY: this.settings.inlineOffsetY, inlineContainer: this.settings.inlineContainer }) };
   B.prototype._buildTrigger = function () { this.trigger = new z({ el: this.triggerEl, zoomPane: this.zoomPane, handleTouch: this.settings.handleTouch, onShow: this.settings.onShow, onHide: this.settings.onHide, sourceAttribute: this.settings.sourceAttribute, hoverDelay: this.settings.hoverDelay, touchDelay: this.settings.touchDelay, hoverBoundingBox: this.settings.hoverBoundingBox, touchBoundingBox: this.settings.touchBoundingBox, namespace: this.settings.namespace, zoomFactor: this.settings.zoomFactor, boundingBoxContainer: this.settings.boundingBoxContainer }) };
   B.prototype.setZoomImageURL = function (a) { this.zoomPane._setImageURL(a) }; B.prototype.disable = function () { this.trigger.enabled = !1 }; B.prototype.enable = function () { this.trigger.enabled = !0 }; B.prototype.destroy = function () { this.trigger._hide(); this.trigger._unbindEvents() };
   __wpcc.d.global.Object.defineProperties(B.prototype, { isShowing: { configurable: !0, enumerable: !0, get: function () { return this.zoomPane.isShowing } }, zoomFactor: { configurable: !0, enumerable: !0, get: function () { return this.settings.zoomFactor }, set: function (a) { this.settings.zoomFactor = a; this.zoomPane.settings.zoomFactor = a; this.trigger.settings.zoomFactor = a; this.boundingBox.settings.zoomFactor = a } } }); Object.defineProperty(B.prototype, "isShowing", { get: function () { return this.isShowing } });
   Object.defineProperty(B.prototype, "zoomFactor", { get: function () { return this.zoomFactor }, set: function (a) { this.zoomFactor = a } }); B.prototype.setZoomImageURL = B.prototype.setZoomImageURL; B.prototype.disable = B.prototype.disable; B.prototype.enable = B.prototype.enable; B.prototype.destroy = B.prototype.destroy; window.Drift = B;
}).call(this || window, (window.__wpcc = window.__wpcc || {}));

//# sourceMappingURL=Drift.min.js.map
/************ drift *********/


/************* Open popup ********************/

document.addEventListener('click', function (e) {
   if (e.target.classList.contains('allende')) {
      e.stopPropagation();
      e.preventDefault();
      document.getElementById('allende').classList.remove('display_none');
   }
   if (e.target.classList.contains('morelos')) {
      e.stopPropagation();
      e.preventDefault();
      document.getElementById('morelos').classList.remove('display_none');
      // new Drift(document.querySelector('.modelos_img_render'), {
      //    // paneContainer: document.querySelector('.modelos_img'),
      //    inlinePane: true,
      // });
   }
 
});

close_popup.forEach((i, ï, ä) => {
   i.addEventListener('click', () => {
      document.getElementById('morelos').classList.add('display_none');
      document.getElementById('allende').classList.add('display_none');
   });
});

// document.querySelectorAll('.modelos_img_render').forEach((i, ï, ä) => {
//    new Drift(i, {
//       // paneContainer: document.querySelector('.modelos_img'),
//       inlinePane: true,
//    });
// });

// modelos_img_render



////// auto slide
function autoSlide() {
   go_right();
}

let slideInterval;

window.addEventListener('load', () => {
   console.log('loaded');
});

const stopSlide = [chevron_left, chevron_right, document.querySelector('.slide_img'), document.querySelector('.detalles_box')];
stopSlide.forEach((i, ï, ä)=>{
   console.log(i);
   i.addEventListener('click', ()=>{
      clearInterval(slideInterval);
   });
});



//// si esta visible 


var isInViewport = function (elem) {
   var distance = elem.getBoundingClientRect();
   return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
};

var findMe = document.querySelector('.slider_container');
let on_off = false;

window.addEventListener('scroll', function (event) {
   if (isInViewport(findMe)) {
      // console.log('In viewport!');
      if ((window.matchMedia("(pointer: coarse)").matches && on_off == false)) {
         slideInterval = setInterval(autoSlide, 3200);
         on_off = true;
         // touchscreen
         // console.log('touchscreen');
         // touchscreen
         let img = document.createElement('img');
         img.setAttribute('src', '../media/dedo.svg');
         slider_container.prepend(img);
         img.classList.add('touch_anim');
         setTimeout(() => {
            img.classList.add('finger_fadeout');
         }, 3200);
      }
   } else if ((window.innerWidth >= 1200 && on_off == false)){
      on_off = true;
      slideInterval = setInterval(autoSlide, 3200);
   }
}, false);
