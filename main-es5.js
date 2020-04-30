function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/aboutus/aboutus.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/aboutus/aboutus.component.ts ***!
    \**********************************************/

  /*! exports provided: AboutusComponent */

  /***/
  function srcAppAboutusAboutusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusComponent", function () {
      return AboutusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AboutusComponent = /*#__PURE__*/function () {
      function AboutusComponent() {
        _classCallCheck(this, AboutusComponent);
      }

      _createClass(AboutusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutusComponent;
    }();

    AboutusComponent.ɵfac = function AboutusComponent_Factory(t) {
      return new (t || AboutusComponent)();
    };

    AboutusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutusComponent,
      selectors: [["app-aboutus"]],
      decls: 42,
      vars: 0,
      consts: [[1, "jumbotron-about", "jumbotron-img-2", "mb-0", 2, "background-image", "url('./assets/images/henry-co-3coKbdfnAFg-unsplash.jpg')", "background-color", "black"], [1, "container"], [1, "row", "justify-content-center"], [1, "col", "col-md-auto", "who_we_are"], [1, "mb-5"], [1, "col", "col-md-auto", "provide_service"], [1, "row", "justify-content-start"], [1, "col-12", "col-md-6", "order-first"], ["src", "../../assets/images/etienne-girardet-sgYamIzhAhg-unsplash.jpg", "alt", "", 1, "fit-img"], [1, "col", "img-content", "order-last", "img-content-left"], [2, "color", "rgb(231, 157, 157)"], [1, "col-12", "col-md-6", "order-last"], ["src", "../../assets/images/let's-chat.PNG", "alt", "", 1, "fit-img"], [1, "col", "img-content", "order-first", "img-content-right"], [2, "color", "rgb(92, 128, 70)"], ["src", "../../assets/images/precondo-ca-OHS6jMpuUnM-unsplash.jpg", "alt", "", 1, "fit-img"], [2, "color", "rgb(133, 70, 214)"]],
      template: function AboutusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Who we are");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "GetartConsult is a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Providing Service to...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Artisans");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Delivering service with GetartCounsult, you get flexibility and finanical stability. Get with us for a living or a goal. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Customers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "with your favorite artisan at your fingertips, GetartConsult satisfies your cravings and connects you with possibilities ~ more time and energy for yourself and those you love. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Large Contruction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "GetartConsult innovative large-contruction solutions enhance your success by transforming your business with the beast team. Open your project to an entire city and see your reach and revenue grow. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-footer");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: [".jumbotron-about[_ngcontent-%COMP%] {\n  min-height: 58vh;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  color: floralwhite;\n}\n\n.fit-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80vh;\n}\n\n.who_we_are[_ngcontent-%COMP%] {\n  margin-top: 90px;\n  margin-bottom: 70px;\n}\n\n.who_we_are[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 40px;\n  padding-bottom: 20px;\n  text-align: center;\n  font-family: sans-serif;\n  font-weight: bolder;\n}\n\n.who_we_are[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: normal;\n  font-size: 20px;\n  color: #979696;\n  text-align: center;\n}\n\n.provide_service[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 40px;\n  padding-bottom: 20px;\n  text-align: center;\n  padding-bottom: 40px;\n  font-family: sans-serif;\n  font-weight: bolder;\n}\n\n.img-content[_ngcontent-%COMP%] {\n  padding-top: 10%;\n  text-align: center;\n  display: block;\n}\n\n.img-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding-bottom: 20px;\n  text-align: justify;\n}\n\n.img-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: normal;\n  font-size: 20px;\n  color: #979696;\n  text-align: justify;\n}\n\n.img-content-left[_ngcontent-%COMP%] {\n  padding-left: 90px !important;\n}\n\n.img-content-right[_ngcontent-%COMP%] {\n  padding-right: 90px !important;\n  word-spacing: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXR1cy9DOlxcd2FtcHNlcnZlclxcd3d3XFxnZXRhcnQtcmVwby9zcmNcXGFwcFxcYWJvdXR1c1xcYWJvdXR1cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQ0N0Qjs7QURFQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0FDQ2hCOztBREVBO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQ0N2Qjs7QURIQTtFQUlRLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHVCQUF3QjtFQUN4QixtQkFBbUI7QUNHM0I7O0FEWEE7RUFZUSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FDRzFCOztBREFBO0VBRVEsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHVCQUF3QjtFQUN4QixtQkFBbUI7QUNFM0I7O0FESUE7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUNEbEI7O0FERkE7RUFNUSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQ0EzQjs7QURSQTtFQVdRLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7QUNDM0I7O0FERUE7RUFDSSw2QkFBNkI7QUNDakM7O0FEQ0E7RUFDSSw4QkFBOEI7RUFDOUIsa0JBQWtCO0FDRXRCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbi1hYm91dCB7XHJcbiAgICBtaW4taGVpZ2h0OiA1OHZoO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBjb2xvcjogZmxvcmFsd2hpdGU7XHJcbn1cclxuXHJcbi5maXQtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG59XHJcblxyXG4ud2hvX3dlX2FyZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICM5Nzk2OTY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbi5wcm92aWRlX3NlcnZpY2Uge1xyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLmltZy1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICM5Nzk2OTY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxufVxyXG4uaW1nLWNvbnRlbnQtbGVmdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDkwcHggIWltcG9ydGFudDtcclxufVxyXG4uaW1nLWNvbnRlbnQtcmlnaHQge1xyXG4gICAgcGFkZGluZy1yaWdodDogOTBweCAhaW1wb3J0YW50O1xyXG4gICAgd29yZC1zcGFjaW5nOiAtMnB4O1xyXG59IiwiLmp1bWJvdHJvbi1hYm91dCB7XG4gIG1pbi1oZWlnaHQ6IDU4dmg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY29sb3I6IGZsb3JhbHdoaXRlO1xufVxuXG4uZml0LWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwdmg7XG59XG5cbi53aG9fd2VfYXJlIHtcbiAgbWFyZ2luLXRvcDogOTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cblxuLndob193ZV9hcmUgaDMge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4ud2hvX3dlX2FyZSBwIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjOTc5Njk2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm92aWRlX3NlcnZpY2UgaDMge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmltZy1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmltZy1jb250ZW50IGgzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmltZy1jb250ZW50IHAge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM5Nzk2OTY7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5pbWctY29udGVudC1sZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiA5MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbWctY29udGVudC1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDkwcHggIWltcG9ydGFudDtcbiAgd29yZC1zcGFjaW5nOiAtMnB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-aboutus',
          templateUrl: './aboutus.component.html',
          styleUrls: ['./aboutus.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/animations/app.animation.ts":
  /*!*********************************************!*\
    !*** ./src/app/animations/app.animation.ts ***!
    \*********************************************/

  /*! exports provided: visibility, flyInOut, expand */

  /***/
  function srcAppAnimationsAppAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "visibility", function () {
      return visibility;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "flyInOut", function () {
      return flyInOut;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "expand", function () {
      return expand;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    function visibility() {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('visibility', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1.0)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(0.5)',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s ease-in-out'))]);
    }

    function flyInOut() {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translateX(0)'
      }))]);
    }

    function expand() {
      return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('expand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translateX(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateY(-50%)',
        opacity: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'translateX(0)'
      }))])]);
    }
    /***/

  },

  /***/
  "./src/app/app-routing/app-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/app-routing/app-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./routes */
    "./src/app/app-routing/routes.ts");

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing/routes.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing/routes.ts ***!
    \***************************************/

  /*! exports provided: routes */

  /***/
  function srcAppAppRoutingRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../landing/landing.component */
    "./src/app/landing/landing.component.ts");
    /* harmony import */


    var _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../signin/signin.component */
    "./src/app/signin/signin.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../aboutus/aboutus.component */
    "./src/app/aboutus/aboutus.component.ts");
    /* harmony import */


    var _help_help_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../help/help.component */
    "./src/app/help/help.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/landing',
      pathMatch: 'full'
    }, {
      path: 'signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
    }, {
      path: 'signin',
      component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__["SigninComponent"]
    }, {
      path: 'landing',
      component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_0__["LandingComponent"]
    }, {
      path: 'search',
      component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
    }, {
      path: 'aboutus',
      component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_4__["AboutusComponent"]
    }, {
      path: 'help',
      component: _help_help_component__WEBPACK_IMPORTED_MODULE_5__["HelpComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'getart-repo';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing/app-routing.module */
    "./src/app/app-routing/app-routing.module.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./landing/landing.component */
    "./src/app/landing/landing.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./signin/signin.component */
    "./src/app/signin/signin.component.ts");
    /* harmony import */


    var _signheader_signheader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./signheader/signheader.component */
    "./src/app/signheader/signheader.component.ts");
    /* harmony import */


    var _signfooter_signfooter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./signfooter/signfooter.component */
    "./src/app/signfooter/signfooter.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./aboutus/aboutus.component */
    "./src/app/aboutus/aboutus.component.ts");
    /* harmony import */


    var _help_help_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./help/help.component */
    "./src/app/help/help.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
      }), _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"], _signheader_signheader_component__WEBPACK_IMPORTED_MODULE_12__["SignheaderComponent"], _signfooter_signfooter_component__WEBPACK_IMPORTED_MODULE_13__["SignfooterComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_16__["AboutusComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_17__["HelpComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"], _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"], _signheader_signheader_component__WEBPACK_IMPORTED_MODULE_12__["SignheaderComponent"], _signfooter_signfooter_component__WEBPACK_IMPORTED_MODULE_13__["SignfooterComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_16__["AboutusComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_17__["HelpComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
          }), _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return [""];
    };

    var _c1 = function _c1() {
      return ["/"];
    };

    var _c2 = function _c2() {
      return ["/aboutus"];
    };

    var _c3 = function _c3() {
      return ["/search"];
    };

    var _c4 = function _c4() {
      return ["/help"];
    };

    var _c5 = function _c5() {
      return ["/blog"];
    };

    var _c6 = function _c6() {
      return ["/career"];
    };

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"];
        this.faPhoneAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhoneAlt"];
        this.faMobileAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMobileAlt"];
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 77,
      vars: 22,
      consts: [[1, "footer"], [1, "container-fluid"], ["routerLinkActive", "router-link-active", 1, "logo-links", 3, "routerLink"], ["src", "assets/images/slack-getart-logo.png", "height", "22px", "width", "200px", "alt", "GetartConsult", 2, "margin-top", "-50px"], [1, "container"], [1, "row", "footer-content"], [1, "col-4", "offset", "col-sm-2"], [1, "list-unstyled", "navigate"], ["routerLinkActive", "router-link-active", 3, "routerLink"], [1, "col-7", "col-md-4"], [1, "text-break"], [1, "fa", "fa-envelope"], ["href", "mailto:customercare@getartconsult.com"], [1, "list-unstyled", "licenses"], [3, "routerLink"], [1, "col-12", "col-sm-2"], [2, "text-align", "center"], [1, "text-center", "social-icon-color"], ["href", "http://google.com/+", 1, "btn", "btn-social-icon", "btn-google"], [1, "fab", "fa-google-plus"], ["href", "http://www.facebook.com/profile.php?id=", 1, "btn", "btn-social-icon", "btn-facebook"], [1, "fab", "fa-facebook-square"], ["href", "http://www.linkedin.com/in/", 1, "btn", "btn-social-icon", "btn-linkedin"], [1, "fab", "fa-instagram"], ["href", "http://twitter.com/", 1, "btn", "btn-social-icon", "btn-twitter"], [1, "fab", "fa-twitter-square"], ["href", "http://youtube.com/", 1, "btn", "btn-social-icon", "btn-google"], [1, "fab", "fa-youtube"], ["href", "mailto:", 1, "btn", "btn-social-icon"], [1, "row", "justify-content-center", "copyright-content"], [1, "col-auto"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Navigate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact/Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Careers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Find Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "address", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " 121, Clear Water Bay Road Clear Water Bay, Ikorodu LAGOS NIGERIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " +234 1234 5678");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "customercare@getartconsult.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Licenses ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Terms & Condition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Legal Stuff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Social Platform ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\xA9 Copyright 2020 GetartConsult");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #282727;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 0px;\n  padding-right: 0px;\n  margin-top: 0px;\n  color: #F0F5F9;\n}\n\n.footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%] {\n  margin-bottom: 8vh !important;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]   .social-icon-color[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #F0F5F9 !important;\n}\n\n.footer[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: floralwhite;\n}\n\n.footer[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.footer[_ngcontent-%COMP%]   .navigate[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: floralwhite;\n}\n\n.footer[_ngcontent-%COMP%]   .navigate[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.footer[_ngcontent-%COMP%]   .licenses[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: floralwhite;\n}\n\n.footer[_ngcontent-%COMP%]   .licenses[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.footer[_ngcontent-%COMP%]   .logo-links[_ngcontent-%COMP%] {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  text-transform: lowercase;\n  font-weight: lighter;\n  color: #4c8bf5;\n  margin-bottom: 10vh !important;\n  display: block;\n  margin-top: 5vh !important;\n}\n\n.footer[_ngcontent-%COMP%]   .logo-links[_ngcontent-%COMP%]:hover {\n  color: #4c8bf5;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  transition: all 1.0s;\n}\n\n.footer[_ngcontent-%COMP%]   .copyright-content[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFx3YW1wc2VydmVyXFx3d3dcXGdldGFydC1yZXBvL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUtJLHlCQVZxQjtFQVdyQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBZHNCO0FDSzFCOztBREZBO0VBZVEsZUFBZTtBQ1R2Qjs7QUROQTtFQW1CUSw2QkFBNkI7QUNUckM7O0FEVkE7RUFzQlkseUJBQW1DO0FDUi9DOztBRGRBO0VBMkJZLHFCQUFxQjtFQUNyQixrQkFBa0I7QUNUOUI7O0FEbkJBO0VBK0JZLDBCQUEwQjtBQ1J0Qzs7QUR2QkE7RUFxQ1kscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQ1Y5Qjs7QUQ1QkE7RUF5Q1ksMEJBQTBCO0FDVHRDOztBRGhDQTtFQStDWSxxQkFBcUI7RUFDckIsa0JBQWtCO0FDWDlCOztBRHJDQTtFQW1EWSwwQkFBMEI7QUNWdEM7O0FEekNBO0VBd0RRLDREQUE0RDtFQUU1RCx5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLGNBOURpQjtFQStEakIsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCwwQkFBMEI7QUNabEM7O0FEbkRBO0VBb0VRLGNBdEVpQjtFQXVFakIsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUkxQixvQkFBb0I7QUNiNUI7O0FENURBO0VBZ0ZRLFdBQVc7RUFDWCxrQkFBa0I7QUNoQjFCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsdC1ncmF5OiAjZGRkO1xyXG4kYmFja2dyb3VuZC1kYXJrOiAjMjgyNzI3O1xyXG4kYmFja2dyb3VuZC1kYXJrLXRyYW5zOiAjMjgyNzI3NzQ7XHJcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjRjBGNUY5O1xyXG4kYmFja2dyb3VuZC1wYWxlOiAjNGM4YmY1O1xyXG4kYmFja2dyb3VuZC1sdC1kYXJrOiAjNmM2YjZiO1xyXG4uZm9vdGVyIHtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1nL2p1bWJvMi5wbmcnKTtcclxuICAgIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtZGFyazsgICAvLyAjZjhmOWZhXHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBjb2xvcjogJGJhY2tncm91bmQtbGlnaHQ7XHJcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHZoICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIC5zb2NpYWwtaWNvbi1jb2xvciBhe1xyXG4gICAgICAgICAgICBjb2xvcjogJGJhY2tncm91bmQtbGlnaHQgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhZGRyZXNzIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogZmxvcmFsd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmlnYXRlIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogZmxvcmFsd2hpdGU7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxpY2Vuc2VzIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogZmxvcmFsd2hpdGU7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG9nby1saW5rcyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIC8vIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgIGNvbG9yOiAkYmFja2dyb3VuZC1wYWxlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwdmggIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tdG9wOiA1dmggIWltcG9ydGFudDtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBmbG9yYWx3aGl0ZTtcclxuICAgICAgICAvLyB0ZXh0LWRlY29yYXRpb24tbGluZTogbGluZS10aHJvdWdoO1xyXG4gICAgfVxyXG4gICAgLmxvZ28tbGlua3M6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkYmFja2dyb3VuZC1wYWxlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEuMHM7XHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDEuMHM7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMS4wcztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMS4wcztcclxuICAgIH1cclxuXHJcbiAgICAuY29weXJpZ2h0LWNvbnRlbnQge1xyXG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvLyBib3R0b206IDA7XHJcbiAgICAgICAgLy8gbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMjJ2aDtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBmbG9yYWx3aGl0ZTtcclxuICAgIH1cclxufSIsIi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyNzI3O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgY29sb3I6ICNGMEY1Rjk7XG59XG5cbi5mb290ZXIgLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmZvb3RlciAuZm9vdGVyLWNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiA4dmggIWltcG9ydGFudDtcbn1cblxuLmZvb3RlciAuZm9vdGVyLWNvbnRlbnQgLnNvY2lhbC1pY29uLWNvbG9yIGEge1xuICBjb2xvcjogI0YwRjVGOSAhaW1wb3J0YW50O1xufVxuXG4uZm9vdGVyIGFkZHJlc3MgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGZsb3JhbHdoaXRlO1xufVxuXG4uZm9vdGVyIGFkZHJlc3MgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZm9vdGVyIC5uYXZpZ2F0ZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogZmxvcmFsd2hpdGU7XG59XG5cbi5mb290ZXIgLm5hdmlnYXRlIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmZvb3RlciAubGljZW5zZXMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGZsb3JhbHdoaXRlO1xufVxuXG4uZm9vdGVyIC5saWNlbnNlcyBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5mb290ZXIgLmxvZ28tbGlua3Mge1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBjb2xvcjogIzRjOGJmNTtcbiAgbWFyZ2luLWJvdHRvbTogMTB2aCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNXZoICFpbXBvcnRhbnQ7XG59XG5cbi5mb290ZXIgLmxvZ28tbGlua3M6aG92ZXIge1xuICBjb2xvcjogIzRjOGJmNTtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEuMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAxLjBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAxLjBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMS4wcztcbn1cblxuLmZvb3RlciAuY29weXJpZ2h0LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/search"];
    };

    var _c1 = function _c1() {
      return ["/signup"];
    };

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router) {
        _classCallCheck(this, HeaderComponent);

        // router.events.forEach((event) => {
        //   if (event instanceof NavigationStart) {
        //     // this.showNav = false;
        //     // alert(event['url'] && this.showNav);
        //     if (event['url'] == '/aboutus' || event['url'] == '/help') {
        //       alert(event['url'] );
        //       this.showNav = true;
        this.router = router; //     } else {
        //       // console.log("NU")
        //       // alert(event['url'] && this.showNav);
        //       // return this.showNav = false;
        //     }
        //   }
        // });
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // on route change to '/login', set the variable showHead to false
          this.shownav = true;
          this.router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              // alert(event['url']);
              if (event['url'] == '/aboutus' || event['url'] == '/help') {
                _this.shownav = false; // alert(event['url']);
              } else {
                // console.log("NU")
                _this.shownav = true; //alert(event['url']);
              }
            }
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 19,
      vars: 5,
      consts: [[1, "scrolled", "navbar", "navbar-dark", "navbar-expand-sm", "fixed-top"], [1, "container"], ["routerLink", "/", 1, "navbar-brand", "mr-auto", "logo-links"], ["src", "assets/images/slack-getart-logo.png", "height", "22px", "width", "200px", "alt", "GetartConsult"], ["type", "button", "data-toggle", "collapse", "data-target", "#Navbar", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "Navbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", 3, "hidden"], ["routerLinkActive", "router-link-active", 1, "nav-link", 3, "routerLink"], [1, "navbar-text"], ["routerLink", "/signin", 1, "nav-link", "color-me"], ["mat-button", "", "routerLinkActive", "on", "id", "login", 1, "btn", "btn-md", "btn-pale", 3, "routerLink"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.shownav);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/help/help.component.ts":
  /*!****************************************!*\
    !*** ./src/app/help/help.component.ts ***!
    \****************************************/

  /*! exports provided: HelpComponent */

  /***/
  function srcAppHelpHelpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpComponent", function () {
      return HelpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var _c0 = function _c0() {
      return ["/"];
    };

    var HelpComponent = /*#__PURE__*/function () {
      function HelpComponent() {
        _classCallCheck(this, HelpComponent);
      }

      _createClass(HelpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HelpComponent;
    }();

    HelpComponent.ɵfac = function HelpComponent_Factory(t) {
      return new (t || HelpComponent)();
    };

    HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HelpComponent,
      selectors: [["app-help"]],
      decls: 41,
      vars: 12,
      consts: [[1, "container-fluid", "mt-5"], ["src", "../../assets/images/slack-getart-logo.png", "alt", "", 1, "img-logo"], [1, "txt-blue"], [1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-3"], [1, "card", "mb-3"], [1, "card-body", "text-center"], [1, "card-title"], ["src", "../../assets/images/icons8-work-100.png", "alt", ""], ["routerLinkActive", "router-link-active", 1, "card-footer", "text-center", "color-blue", 3, "routerLink"], ["routerLinkActive", "router-link-active", 1, "card-footer", "text-center", "link-color-faq", 3, "routerLink"], ["src", "../../assets/images/icons8-treasure-map-100.png", "alt", ""], [1, "card", "mb-5"], ["src", "../../assets/images/icons8-hand-tools-100.png", "alt", ""]],
      template: function HelpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "GetartConsult Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "How can we help?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "I'm an Artisan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Artisan Customer Chat ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Artisan FAQs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "I'm a Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " User Customer Chat ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " User FAQs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "I'm a large Contruction Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Contructor Customer Chat ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Contructor FAQs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: [".img-logo[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 25%;\n}\n\n.color-blue[_ngcontent-%COMP%] {\n  background-color: #4c8bf5;\n  color: floralwhite;\n  font-weight: bolder;\n  text-decoration: none;\n}\n\n.color-blue[_ngcontent-%COMP%]:hover {\n  background-color: #0b5eee;\n}\n\n.link-color-faq[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  text-decoration: none;\n  color: #6c6b6b;\n}\n\n.link-color-faq[_ngcontent-%COMP%]:hover {\n  color: #282727;\n}\n\n.txt-blue[_ngcontent-%COMP%] {\n  color: #4c8bf5;\n  margin-top: -10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9DOlxcd2FtcHNlcnZlclxcd3d3XFxnZXRhcnQtcmVwby9zcmNcXGFwcFxcaGVscFxcaGVscC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0ksWUFBWTtFQUNaLFdBQVc7QUNOZjs7QURTQTtFQUNJLHlCQVRxQjtFQVVyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQ056Qjs7QURRQTtFQUNJLHlCQUF5QjtBQ0w3Qjs7QURRQTtFQUNJLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsY0FwQndCO0FDZTVCOztBRE9BO0VBQ0ksY0EzQnFCO0FDdUJ6Qjs7QURNQTtFQUNJLGNBQWM7RUFDZCw0QkFBNEI7QUNIaEMiLCJmaWxlIjoic3JjL2FwcC9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbHQtZ3JheTogI2RkZDtcclxuJGJhY2tncm91bmQtZGFyazogIzI4MjcyNztcclxuJGJhY2tncm91bmQtZGFyay10cmFuczogIzI4MjcyNzc0O1xyXG4kYmFja2dyb3VuZC1saWdodDogI0YwRjVGOTtcclxuJGJhY2tncm91bmQtcGFsZTogIzRjOGJmNTtcclxuJGJhY2tncm91bmQtbHQtZGFyazogIzZjNmI2YjtcclxuXHJcbi5pbWctbG9nbyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxufVxyXG5cclxuLmNvbG9yLWJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtcGFsZTtcclxuICAgIGNvbG9yOiBmbG9yYWx3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmNvbG9yLWJsdWU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiNWVlZTtcclxufVxyXG5cclxuLmxpbmstY29sb3ItZmFxIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogJGJhY2tncm91bmQtbHQtZGFyaztcclxufVxyXG4ubGluay1jb2xvci1mYXE6aG92ZXIge1xyXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWRhcms7XHJcbn1cclxuLnR4dC1ibHVlIHtcclxuICAgIGNvbG9yOiAjNGM4YmY1O1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHggIWltcG9ydGFudDtcclxufSIsIi5pbWctbG9nbyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyNSU7XG59XG5cbi5jb2xvci1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjOGJmNTtcbiAgY29sb3I6IGZsb3JhbHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb2xvci1ibHVlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiNWVlZTtcbn1cblxuLmxpbmstY29sb3ItZmFxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzZjNmI2Yjtcbn1cblxuLmxpbmstY29sb3ItZmFxOmhvdmVyIHtcbiAgY29sb3I6ICMyODI3Mjc7XG59XG5cbi50eHQtYmx1ZSB7XG4gIGNvbG9yOiAjNGM4YmY1O1xuICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-help',
          templateUrl: './help.component.html',
          styleUrls: ['./help.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing/landing.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/landing/landing.component.ts ***!
    \**********************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var LandingComponent = /*#__PURE__*/function () {
      function LandingComponent() {
        _classCallCheck(this, LandingComponent);
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandingComponent;
    }();

    LandingComponent.ɵfac = function LandingComponent_Factory(t) {
      return new (t || LandingComponent)();
    };

    LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingComponent,
      selectors: [["app-landing"]],
      decls: 144,
      vars: 0,
      consts: [[1, "jumbotron", "jumbotron-img-2", "mb-0", 2, "background-image", "url('./assets/images/henry-co-3coKbdfnAFg-unsplash.jpg')", "background-color", "black"], [1, "container"], [1, "row", "row-header"], [1, "col-12", "col-sm-8", "header-size", "heades-1"], [1, "ift-div"], [1, "jumbo-header"], [1, "jumbo-content"], ["novalidate", "", "action", "", 1, "container"], [1, "form-group", "row"], [1, "col-12", "col-md-6"], ["type", "text", "name", "search", "placeholder", "I'm looking for..", "required", "", 1, "form-control", "form-control-sign"], [1, "col-12", "col-md-4"], ["name", "cities", "placeholder", "", "id", "", "required", "", 1, "form-control", "form-control-sign"], ["value", ""], ["value", "", "disabled", ""], [1, "col", "div-center"], ["type", "submit", 1, "btn", "btn-lg", "search-btn"], ["id", "mood-2", 1, "col-12", "col-sm", "align-self-center"], [1, "content-doc"], [1, "heading"], [1, "row"], [1, "txt-big", "col-md-6", "offset-md-3"], [1, "txt-small"], [1, "row", "bottom-spacer"], [1, "col-12", "col-md-6", "order-first"], ["src", "../../assets/images/etienne-girardet-sgYamIzhAhg-unsplash.jpg", "alt", "", 1, "fit-img"], [1, "col", "img-content", "order-last"], [1, ""], [1, "col-12", "col-md-6", "order-last"], ["src", "../../assets/images/let's-chat.PNG", "alt", "", 1, "fit-img"], [1, "col", "img-content", "order-first"], ["src", "../../assets/images/precondo-ca-OHS6jMpuUnM-unsplash.jpg", "alt", "", 1, "fit-img"], [1, "col-12", "col-md-4", "mi-list"], ["src", "../../assets/images/icons8-potter's-wheel-96.png", "height", "100px", "alt", ""], ["href", ""], ["src", "../../assets/images/icons8-house-100.png", "height", "100px", "alt", ""], ["src", "../../assets/images/g-mockup.png", "height", "100px", "alt", ""], [1, "", 2, "background-color", "rgb(221, 221, 221)", "padding-top", "70px"], [1, "row", "justify-content-center"], [1, "col-md-6", "rechout"], ["id", "no-icon-slide", "data-ride", "carousel", 1, "carousel", "slide", "carousel-fade", "container-fluid"], ["role", "listbox", 1, "carousel-inner"], [1, "carousel-item", "active"], [1, "container", "text-left", "weight-space"], [1, "row", 2, "background-color", "transparent !important"], [1, "weight-comment-body"], [1, "weight-comment-img", "justify-content-end", "row"], ["src", "../../assets/images/02.jpg", "alt", "", "height", "130", "width", "130", "srcset", "", 1, "col-6", "col-md-2"], [1, "blockquote", "col-4", "col-md-2", "pt-5"], [1, "mb-0", "weight-comment-name", "text-truncate"], [1, "blockquote-footer", "text-truncate"], [1, "carousel-item"], ["src", "../../assets/images/01.jpg", "alt", "", "height", "130", "width", "130", "srcset", "", 1, "col-6", "col-md-2"], ["src", "../../assets/images/josue-isai-ramos-figueroa-qvBYnMuNJ9A-unsplash.jpg", "alt", "", "height", "130", "width", "130", "srcset", "", 1, "col-6", "col-md-2"], [1, "container-fluid", "jumbotron-small", "semi-footer"], [1, "col-md-6", "offset-md-3", "mb-2", "row"], [1, "col-auto", "mr-auto", "pt-2", "semi-footer-text"], [1, "col-auto"], ["href", "", 1, "btn", "btn-lg", "btn-dark"]],
      template: function LandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Building you a great connection with your right Artisan ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "search for who is best for your job and we will fetch your desire");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pick City..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "... Lagos ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " the documentation modal ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " As a Client, you think of how to pick artisan or loan. Yes we know ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Getart Consult team as made it easy. We believe this is the most natural way to get you to meet your needs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Do you have any work so hard to fix ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Rich and expressive way that filter the location of what you want to rander ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Save your time with quick access ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Reach more people with Getart and connect with the best of your connect ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Housing Loan For You ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Rich and expressive way that filter the location of what you want to rander ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Become an Artisan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "As an artisan, we will make a reliable price - connecting with us anywhere, anytime.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Let's get started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Become a Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "As an artisan, we will make a reliable price - connecting with us anywhere, anytime.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Sign Up Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Let's Chat Artisan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "As an artisan, we will make a reliable price - connecting with us anywhere, anytime.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " start Chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "section", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Outcomes From Our Artisans");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " \u201CI own several icon sets but the one that I return to over and over is the copious Icooicons pack, which almost always seems to have just the pictogram I need when I dig into its catalog.\u201D ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "blockquote", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Mr. Edwin okoro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "footer", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Computer Networking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " \u201CI own several icon sets but the one that I return to over and over is the copious Icooicons pack, which almost always seems to have just the pictogram I need when I dig into its catalog.\u201D ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "blockquote", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Miss. Adewale Adeife");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "footer", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Freelancer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " \u201CI own several icon sets but the one that I return to over and over is the copious Icooicons pack, which almost always seems to have just the pictogram I need when I dig into its catalog.\u201D ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "blockquote", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Mr. Ayonimi Dele");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "footer", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "contractor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "section", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Are you Ready to Get Started?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Let's Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "app-footer");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: [".ift-div[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 20%;\n}\n\n.jumbo-header[_ngcontent-%COMP%] {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  text-align: center;\n  font-size: 45px;\n  padding-bottom: 0.5em;\n}\n\n.jumbo-content[_ngcontent-%COMP%] {\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  text-align: center;\n  font-size: 20px;\n  font-weight: lighter;\n  margin-bottom: 50px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border-color: none !important;\n  box-shadow: none !important;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  min-height: 45px;\n}\n\n.form-control[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]:hover {\n  border-left: 6px solid #4c8bf5 !important;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-weight: lighter;\n  text-transform: capitalize;\n  font-style: italic;\n  font-size: 15px;\n}\n\ninput[_ngcontent-%COMP%]::-moz-placeholder {\n  font-weight: lighter;\n  text-transform: capitalize;\n  font-style: italic;\n  font-size: 15px;\n}\n\ninput[_ngcontent-%COMP%]::-ms-input-placeholder {\n  font-weight: lighter;\n  text-transform: capitalize;\n  font-style: italic;\n  font-size: 15px;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  font-weight: lighter;\n  text-transform: capitalize;\n  font-style: italic;\n  font-size: 15px;\n}\n\nselect[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  text-transform: capitalize;\n  font-style: italic !important;\n}\n\n.search-btn[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  width: 95%;\n  background-color: #4c8bf5;\n  color: floralwhite;\n  font-weight: 500;\n  font-style: italic;\n}\n\n.search-btn[_ngcontent-%COMP%]:hover {\n  background-color: #6c6b6b;\n  transform: 1.0s;\n}\n\n.fit-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50vh;\n}\n\n.ift-div[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.img-content[_ngcontent-%COMP%] {\n  padding-top: 10%;\n  text-align: center;\n  display: block;\n}\n\n.img-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: lighter;\n  font-size: 20px;\n}\n\n.img-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 700 !important;\n  font-style: italic;\n  font-size: 18px !important;\n}\n\n.img-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: 2px solid #4c8bf5;\n  width: 20px;\n}\n\n.content-doc[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  text-align: center !important;\n}\n\n.content-doc[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n.content-doc[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: 2px solid #4c8bf5;\n  width: 30px;\n}\n\n.content-doc[_ngcontent-%COMP%]   .txt-big[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\n.content-doc[_ngcontent-%COMP%]   .txt-small[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n.bottom-spacer[_ngcontent-%COMP%] {\n  margin-bottom: 20vh;\n}\n\n.mi-list[_ngcontent-%COMP%] {\n  text-align: center !important;\n  height: 60vh;\n  padding-top: 10%;\n  box-shadow: 100px;\n  margin-bottom: 10vh;\n}\n\n.mi-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 19px;\n  padding-top: 30px;\n  font-weight: bolder;\n}\n\n.mi-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.mi-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  font-size: 16px;\n}\n\n.mi-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.semi-footer[_ngcontent-%COMP%] {\n  padding-top: 8vh;\n  font-family: sans-serif, Tahoma, Geneva, Verdana, 'Segoe UI' !important;\n}\n\n.semi-footer-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.weight-comment-img[_ngcontent-%COMP%] {\n  float: left !important;\n}\n\n.rechout[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n.weight-comment-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-style: oblique;\n  font-weight: 900;\n  padding-bottom: 0vh;\n  padding-top: 50px;\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\n.weight-comment-name[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n  text-transform: uppercase;\n  font-size: 15px !important;\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  margin-bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9DOlxcd2FtcHNlcnZlclxcd3d3XFxnZXRhcnQtcmVwby9zcmNcXGFwcFxcbGFuZGluZ1xcbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0VBRUksY0FBYztFQUNkLGVBQWU7QUNabkI7O0FEY0E7RUFDSSw0REFBNEQ7RUFDNUQsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7QUNYekI7O0FEYUE7RUFDSSw0REFBNEQ7RUFDNUQsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsbUJBQW1CO0FDVnZCOztBRGFBO0VBQ0ksNkJBQTZCO0VBRTdCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQ1ZwQjs7QURhQTtFQUVJLHlDQUFrRDtBQ1h0RDs7QURhQTtFQUNJLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGVBQWU7QUNWbkI7O0FETUE7RUFDSSxvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixlQUFlO0FDVm5COztBRE1BO0VBQ0ksb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZUFBZTtBQ1ZuQjs7QURNQTtFQUNJLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGVBQWU7QUNWbkI7O0FEYUE7RUFDSSxvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLDZCQUE2QjtBQ1ZqQzs7QURhQTtFQUNJLGVBQWU7RUFDZixVQUFVO0VBQ1YseUJBeERxQjtFQXlEckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUNWdEI7O0FEY0E7RUFDSSx5QkEvRHdCO0VBZ0V4QixlQUFlO0FDWG5COztBRGNBO0VBQ0ksV0FBVztFQUNYLFlBQVk7QUNYaEI7O0FEYUE7RUFDSSxjQUFjO0FDVmxCOztBRGFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0FDVmxCOztBRE9BO0VBTVEsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlO0FDVHZCOztBRENBO0VBVVkseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsMEJBQTBCO0FDUHRDOztBRE5BO0VBZ0JnQix5QkE1RlM7RUE2RlQsV0FBVztBQ04zQjs7QURZQTtFQUNJLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUNUakM7O0FET0E7RUFLUSx5QkFBeUI7RUFDekIsaUJBQWlCO0FDUnpCOztBREVBO0VBU1kseUJBNUdhO0VBNkdiLFdBQVc7QUNQdkI7O0FESEE7RUFjUSxlQUFlO0FDUHZCOztBRFBBO0VBaUJRLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FDTjFCOztBRFVBO0VBQ0ksbUJBQW1CO0FDUHZCOztBRFVBO0VBQ0ksNkJBQTZCO0VBRTdCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQ1J2Qjs7QURFQTtFQVNRLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0FDUDNCOztBREpBO0VBZVEsZUFBZTtBQ1B2Qjs7QURSQTtFQW1CUSxtQkFBbUI7RUFDbkIsZUFBZTtBQ1B2Qjs7QURiQTtFQXdCUSxxQkFBcUI7QUNQN0I7O0FEV0E7RUFDSSxnQkFBZ0I7RUFDaEIsdUVBQXVFO0FDUjNFOztBRFVBO0VBQ0ksZUFBZTtBQ1BuQjs7QURVQTtFQUNJLHNCQUFzQjtBQ1AxQjs7QURZQTtFQUdRLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQ1gxQjs7QURlQTtFQUVRLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQ2IxQjs7QURpQkE7RUFDSSw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLDZCQUE2QjtBQ2RqQyIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsdC1ncmF5OiAjZGRkO1xyXG4kYmFja2dyb3VuZC1kYXJrOiAjMjgyNzI3O1xyXG4kYmFja2dyb3VuZC1kYXJrLXRyYW5zOiAjMjgyNzI3NzQ7XHJcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjRjBGNUY5O1xyXG4kYmFja2dyb3VuZC1wYWxlOiAjNGM4YmY1O1xyXG4kYmFja2dyb3VuZC1sdC1kYXJrOiAjNmM2YjZiO1xyXG5cclxuQG1peGluIG1hcmdpbigkbXQtdXAsJG1iLWRuLCRtbC1sZWZ0LCRtci1yaWdodCkge1xyXG4gICAgbWFyZ2luOiAkbXQtdXAgJG1iLWRuICRtbC1sZWZ0ICRtci1yaWdodDtcclxufVxyXG5cclxuXHJcbi5pZnQtZGl2IHtcclxuICAgIFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbn1cclxuLmp1bWJvLWhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbn1cclxuLmp1bWJvLWNvbnRlbnQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlci1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzLC5mb3JtLWNvbnRyb2w6aG92ZXIge1xyXG4gICAgXHJcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRiYWNrZ3JvdW5kLXBhbGUgIWltcG9ydGFudDtcclxufVxyXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlYXJjaC1idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXBhbGU7XHJcbiAgICBjb2xvcjogZmxvcmFsd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxufVxyXG5cclxuLnNlYXJjaC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtbHQtZGFyaztcclxuICAgIHRyYW5zZm9ybTogMS4wcztcclxufVxyXG5cclxuLmZpdC1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbn1cclxuLmlmdC1kaXYge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5pbWctY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGJhY2tncm91bmQtcGFsZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGVudC1kb2Mge1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbiAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkYmFja2dyb3VuZC1wYWxlO1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudHh0LWJpZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgfVxyXG4gICAgLnR4dC1zbWFsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmJvdHRvbS1zcGFjZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjB2aDtcclxufVxyXG5cclxuLm1pLWxpc3Qge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgIGJveC1zaGFkb3c6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGE6aG92ZXIge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLnNlbWktZm9vdGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiA4dmg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsICdTZWdvZSBVSScgIWltcG9ydGFudDtcclxufVxyXG4uc2VtaS1mb290ZXItdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi53ZWlnaHQtY29tbWVudC1pbWcge1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDsgXHJcbiAgICAvLyBAaW5jbHVkZSBtYXJnaW4oLTcwcHgsIC0xNi41cHgsIC0xNnB4LCAwcHgpO1xyXG5cclxufVxyXG5cclxuLnJlY2hvdXQge1xyXG4gICAgXHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ud2VpZ2h0LWNvbW1lbnQtYm9keSB7XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwdmg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblxyXG4gICAgfVxyXG59XHJcbi53ZWlnaHQtY29tbWVudC1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufSIsIi5pZnQtZGl2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwJTtcbn1cblxuLmp1bWJvLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQ1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbn1cblxuLmp1bWJvLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtaW4taGVpZ2h0OiA0NXB4O1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzLCAuZm9ybS1jb250cm9sOmhvdmVyIHtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjNGM4YmY1ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbnNlbGVjdCB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zdHlsZTogaXRhbGljICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtYnRuIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB3aWR0aDogOTUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM4YmY1O1xuICBjb2xvcjogZmxvcmFsd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnNlYXJjaC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM2YjZiO1xuICB0cmFuc2Zvcm06IDEuMHM7XG59XG5cbi5maXQtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTB2aDtcbn1cblxuLmlmdC1kaXYge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmltZy1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmltZy1jb250ZW50IHAge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pbWctY29udGVudCBwIHNwYW4ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbWctY29udGVudCBwIHNwYW4gaHIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNGM4YmY1O1xuICB3aWR0aDogMjBweDtcbn1cblxuLmNvbnRlbnQtZG9jIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC1kb2MgLmhlYWRpbmcge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRlbnQtZG9jIC5oZWFkaW5nIGhyIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzRjOGJmNTtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5jb250ZW50LWRvYyAudHh0LWJpZyB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmNvbnRlbnQtZG9jIC50eHQtc21hbGwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG59XG5cbi5ib3R0b20tc3BhY2VyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjB2aDtcbn1cblxuLm1pLWxpc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA2MHZoO1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICBib3gtc2hhZG93OiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbn1cblxuLm1pLWxpc3QgaDMge1xuICBmb250LXNpemU6IDE5cHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4ubWktbGlzdCBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubWktbGlzdCBhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubWktbGlzdCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc2VtaS1mb290ZXIge1xuICBwYWRkaW5nLXRvcDogOHZoO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsICdTZWdvZSBVSScgIWltcG9ydGFudDtcbn1cblxuLnNlbWktZm9vdGVyLXRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi53ZWlnaHQtY29tbWVudC1pbWcge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4ucmVjaG91dCBoMyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlaWdodC1jb21tZW50LWJvZHkgcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgcGFkZGluZy1ib3R0b206IDB2aDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLndlaWdodC1jb21tZW50LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-landing',
          templateUrl: './landing.component.html',
          styleUrls: ['./landing.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent() {
        _classCallCheck(this, SearchComponent);
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)();
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 139,
      vars: 0,
      consts: [[1, ""], [1, "jumbotron-search", 2, "background-image", "url('./assets/images/01.jpg')", "background-color", "black"], [1, "container", "center"], [1, "search-box"], ["novalidate", "", "action", "", 1, "container"], [1, "form-group", "row"], [1, "col-12", "col-md-6"], ["type", "text", "name", "search", "placeholder", "I'm looking for..", "required", "", 1, "form-control", "form-control-sign"], [1, "col-12", "col-md-4"], ["name", "cities", "placeholder", "", "id", "", "required", "", 1, "form-control", "form-control-sign"], ["value", ""], ["value", "", "disabled", ""], [1, "col", "div-center"], ["type", "submit", 1, "btn", "btn-lg", "search-btn"], [1, "container", "search"], [1, "search-block", "container"], [1, "search-title"], [1, "row"], [1, "col-12", "col-md-3", "content-container"], [1, "search-card", "container", 2, "background-image", "url('./assets/images/02.jpg')", "background-color", "black"], [1, "bod", "row", "pt-3"], [1, "col-8"], [1, "search-name"], [1, "search-job"], [1, "search-address"], [1, "col-4"], ["src", "../../assets/images/steve-johnson-WVUrbhWtRNM-unsplash.jpg", "alt", "", 1, "search-img", "mr-1"], [1, "row", "search-footer", "footer"], [1, "col-5"], [1, "search-area"], [1, "search-cities"], [1, "col-7", 2, "border", "1px soild floralwhite"], ["type", "submit", 1, "btn", "btn-lg", "search-btn-more"], [1, "search-card", "container", 2, "background-image", "url('./assets/images/sean-benesh-CCgWUJqouec-unsplash.jpg')", "background-color", "black"], [1, "row", "search-footer"], [1, "search-card", "container", 2, "background-image", "url('./assets/images/sincerely-media-dGxOgeXAXm8-unsplash.jpg')", "background-color", "black"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Who do you want to see?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Pick City..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "... Lagos ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Top Artisans");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Mr. Ekundayo Olumide ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "[ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "contractor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " ] ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " 26, Ring road, Abaranje Ikotun Lagos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Area ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Ikotun ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "View more..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Mr. Ekundayo Olumide ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "[ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "contractor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " ] ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " 26, Ring road, Abaranje Ikotun Lagos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Area ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Ikotun ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "View more..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Mr. Ekundayo Olumide ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "[ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "contractor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " ] ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " 26, Ring road, Abaranje Ikotun Lagos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Area ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Ikotun ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "View more..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Mr. Ekundayo Olumide ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "[ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "contractor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " ] ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " 26, Ring road, Abaranje Ikotun Lagos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Area ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Ikotun ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "View more..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "app-footer");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: [".jumbotron-search[_ngcontent-%COMP%] {\n  min-height: 58vh;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  opacity: 100%;\n  color: floralwhite;\n}\n\n.search[_ngcontent-%COMP%] {\n  min-height: 20vh;\n}\n\n.center[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n.center[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: Geneva, Verdana, sans-serif, \"Segoe UI\", Tahoma;\n  font-weight: bolder;\n  font-size: 25px;\n  padding-bottom: 30px;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  margin-top: 0vh !important;\n  min-height: 20vh;\n  background-color: rgba(26, 20, 13, 0.653);\n  background-blend-mode: darken !important;\n}\n\n.search-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n\n.search-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-color: none !important;\n  box-shadow: none !important;\n  margin-bottom: 10px;\n  border-radius: 10px;\n  min-height: 45px;\n}\n\n.search-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .search-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:hover {\n  border-left: 6px solid #4c8bf5 !important;\n}\n\n.search-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-weight: lighter;\n  text-transform: capitalize;\n  font-style: italic;\n  font-size: 15px;\n}\n\n.search-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-weight: lighter;\n  text-transform: capitalize;\n  font-style: italic;\n  font-size: 15px;\n}\n\n.search-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  font-weight: lighter;\n  text-transform: capitalize;\n  font-style: italic;\n  font-size: 15px;\n}\n\n.search-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-weight: lighter;\n  text-transform: capitalize;\n  font-style: italic;\n  font-size: 15px;\n}\n\n.search-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  text-transform: capitalize;\n  font-style: italic !important;\n}\n\n.search-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  width: 95%;\n  background-color: #4c8bf5;\n  color: floralwhite;\n  font-weight: 500;\n  font-style: italic;\n}\n\n.search-box[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]:hover {\n  background-color: #6c6b6b;\n  transform: 1.0s;\n}\n\n.div-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 30px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  min-height: 37px;\n  margin-bottom: 10px;\n}\n\n.form-control[_ngcontent-%COMP%]:hover {\n  border-color: #6c6b6b !important;\n  box-shadow: none !important;\n}\n\n.search-img[_ngcontent-%COMP%] {\n  display: block;\n  height: 60px;\n  width: 95%;\n  background-color: transparent;\n}\n\n.search-link[_ngcontent-%COMP%] {\n  margin-top: 7%;\n}\n\n.search-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #6c6b6b;\n  font-weight: bold;\n}\n\n.search-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #282727;\n  font-weight: bolder;\n}\n\n.search-text[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.search-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: #6c6b6b;\n  font-weight: bold;\n  color: floralwhite;\n  padding: 5px;\n  text-align: center;\n  margin-top: 10px;\n  margin-right: 5px;\n}\n\n.search-content[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.search-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  font-size: 14px;\n  color: #6c6b6b;\n}\n\n.search-content-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  height: auto;\n}\n\n.search-card[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 30px;\n  height: 200px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.search-footer[_ngcontent-%COMP%] {\n  margin-top: 5vh;\n}\n\n.search-title[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  color: #6c6b6b;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  font-size: 25px;\n  font-weight: bolder;\n}\n\n.search-name[_ngcontent-%COMP%] {\n  color: floralwhite;\n  text-transform: capitalize;\n}\n\n.search-job[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.search-address[_ngcontent-%COMP%] {\n  color: floralwhite;\n  font-size: 16px;\n  font-weight: bold;\n  text-transform: capitalize;\n}\n\n.search-area[_ngcontent-%COMP%] {\n  color: floralwhite;\n  text-transform: capitalize;\n}\n\n.search-cities[_ngcontent-%COMP%] {\n  color: floralwhite;\n  text-transform: capitalize;\n}\n\n.search-btn-more[_ngcontent-%COMP%] {\n  width: 95%;\n  background-color: #4c8bf5;\n  color: floralwhite;\n  font-style: italic;\n  font-size: 13px !important;\n  text-transform: lowercase;\n}\n\n.search-btn-more[_ngcontent-%COMP%]:hover {\n  background-color: #6c6b6b;\n  transform: 1.0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0M6XFx3YW1wc2VydmVyXFx3d3dcXGdldGFydC1yZXBvL3NyY1xcYXBwXFxzZWFyY2hcXHNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixhQUFhO0VBSWIsa0JBQWtCO0FDVnRCOztBRGNBO0VBQ0ksZ0JBQWdCO0FDWHBCOztBRGVBO0VBQ0ksa0JBQWtCO0FDWnRCOztBRFdBO0VBSVEsNERBQTREO0VBQzVELG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysb0JBQW9CO0FDWDVCOztBRGdCQTtFQUNJLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFFaEIseUNBQXlDO0VBQ3pDLHdDQUF3QztBQ2Q1Qzs7QURTQTtFQVFRLGlCQUFpQjtBQ2J6Qjs7QURLQTtFQVdZLDZCQUE2QjtFQUU3QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUNaNUI7O0FESkE7RUFxQlkseUNBQWtEO0FDYjlEOztBRFJBO0VBd0JZLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGVBQWU7QUNaM0I7O0FEZkE7RUF3Qlksb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZUFBZTtBQ1ozQjs7QURmQTtFQXdCWSxvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixlQUFlO0FDWjNCOztBRGZBO0VBd0JZLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGVBQWU7QUNaM0I7O0FEZkE7RUErQlksb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUNaekM7O0FEckJBO0VBcUNZLGVBQWU7RUFDZixVQUFVO0VBQ1YseUJBeEVhO0VBeUViLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FDWjlCOztBRDlCQTtFQStDWSx5QkEvRWdCO0VBZ0ZoQixlQUFlO0FDYjNCOztBRGtCQTtFQUNJLGFBQWE7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtBQ2Z6Qjs7QURrQkE7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FDZnZCOztBRGtCQTtFQUNJLGdDQUE0QztFQUU1QywyQkFBMkI7QUNmL0I7O0FEa0JBO0VBQ0ksY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBRVYsNkJBQTZCO0FDaEJqQzs7QURvQkE7RUFFSSxjQUFjO0FDbEJsQjs7QURnQkE7RUFNWSxxQkFBcUI7RUFDckIsY0F2SGdCO0VBd0hoQixpQkFBaUI7QUNsQjdCOztBRFVBO0VBV1kscUJBQXFCO0VBQ3JCLGNBaElhO0VBaUliLG1CQUFtQjtBQ2pCL0I7O0FEc0JBO0VBQ0ksZ0JBQWdCO0FDbkJwQjs7QURrQkE7RUFNWSxtQkFBbUI7RUFDbkIseUJBeklnQjtFQTBJaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUNwQjdCOztBRHlCQTtFQUNJLGdCQUFnQjtBQ3RCcEI7O0FEcUJBO0VBSVEsMkJBQTJCO0VBQzNCLDREQUE0RDtFQUM1RCxlQUFlO0VBQ2YsY0EzSm9CO0FDc0k1Qjs7QUR5QkE7RUFDSSxhQUFhO0VBQ2IsWUFBWTtBQ3RCaEI7O0FEd0JBO0VBQ0ksY0FBYztFQUNkLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixzQkFBc0I7QUNyQjFCOztBRDZCQTtFQUNJLGVBQWU7QUMxQm5COztBRDZCQTtFQUNJLDBCQUEwQjtFQUMxQixjQXZMd0I7RUF3THhCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLG1CQUFtQjtBQzFCdkI7O0FEOEJBO0VBQ0ksa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQzNCOUI7O0FENkJBO0VBQ0ksMEJBQTBCO0FDMUI5Qjs7QUQ0QkE7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUN6QjlCOztBRDJCQTtFQUNJLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUN4QjlCOztBRDBCQTtFQUNJLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUN2QjlCOztBRHlCQTtFQUNJLFVBQVU7RUFDVix5QkF2TnFCO0VBd05yQixrQkFBa0I7RUFFbEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQix5QkFBeUI7QUN2QjdCOztBRDJCQTtFQUNJLHlCQWhPd0I7RUFpT3hCLGVBQWU7QUN4Qm5CIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQGltcG9ydCAnLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5jc3MnO1xyXG4kbHQtZ3JheTogI2RkZDtcclxuJGJhY2tncm91bmQtZGFyazogIzI4MjcyNztcclxuJGJhY2tncm91bmQtZGFyay10cmFuczogIzI4MjcyNzc0O1xyXG4kYmFja2dyb3VuZC1saWdodDogI0YwRjVGOTtcclxuJGJhY2tncm91bmQtcGFsZTogIzRjOGJmNTtcclxuJGJhY2tncm91bmQtbHQtZGFyazogIzZjNmI2YjtcclxuXHJcbi5qdW1ib3Ryb24tc2VhcmNoIHtcclxuICAgIG1pbi1oZWlnaHQ6IDU4dmg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICAvLyBAaW5jbHVkZSBwYWRkaW5nKDcwcHgsIDcwcHgsIDMwcHgsIDMwcHgpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogJGJhY2tncm91bmQtbHQtZGFyayAhaW1wb3J0YW50O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG4gICAgY29sb3I6IGZsb3JhbHdoaXRlO1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig2OCwgNjcsIDY3KTtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMHZoO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZiwgJ1NlZ29lIFVJJywgVGFob21hLCA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLnNlYXJjaC1ib3gge1xyXG4gICAgbWFyZ2luLXRvcDogMHZoICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAyMHZoO1xyXG4gICAgLy8gb3BhY2l0eTogMC41O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMjAsIDEzLCAwLjY1Myk7XHJcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbiAhaW1wb3J0YW50O1xyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG5cclxuICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybS1jb250cm9sOmZvY3VzLC5mb3JtLWNvbnRyb2w6aG92ZXIge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAkYmFja2dyb3VuZC1wYWxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zZWFyY2gtYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1wYWxlO1xyXG4gICAgICAgICAgICBjb2xvcjogZmxvcmFsd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnNlYXJjaC1idG46aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1sdC1kYXJrO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IDEuMHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZGl2LWNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgbWluLWhlaWdodDogMzdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYmFja2dyb3VuZC1sdC1kYXJrICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlYXJjaC1pbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAwdmg7XHJcbn1cclxuXHJcbi5zZWFyY2gtbGluayB7XHJcbiAgICAvL21hcmdpbi10b3A6IDcwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDclO1xyXG4gICAgXHJcbiAgICBwIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogJGJhY2tncm91bmQtbHQtZGFyaztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmFja2dyb3VuZC1kYXJrO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNlYXJjaC10ZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWx0LWRhcms7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogZmxvcmFsd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAkYmFja2dyb3VuZC1sdC1kYXJrO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87ICAgIFxyXG59XHJcbi5zZWFyY2gtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gICAgLy8gLmJvZCB7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDIwMjVlO1xyXG4gICAgLy8gICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9vdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxufVxyXG5cclxuLnNlYXJjaC10aXRsZSB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAkYmFja2dyb3VuZC1sdC1kYXJrO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBcclxufVxyXG5cclxuLnNlYXJjaC1uYW1lIHtcclxuICAgIGNvbG9yOiBmbG9yYWx3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5zZWFyY2gtam9iIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5zZWFyY2gtYWRkcmVzcyB7XHJcbiAgICBjb2xvcjogZmxvcmFsd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5zZWFyY2gtYXJlYSB7XHJcbiAgICBjb2xvcjogZmxvcmFsd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uc2VhcmNoLWNpdGllcyB7XHJcbiAgICBjb2xvcjogZmxvcmFsd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uc2VhcmNoLWJ0bi1tb3JlIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1wYWxlO1xyXG4gICAgY29sb3I6IGZsb3JhbHdoaXRlO1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuXHJcbn1cclxuXHJcbi5zZWFyY2gtYnRuLW1vcmU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtbHQtZGFyaztcclxuICAgIHRyYW5zZm9ybTogMS4wcztcclxufSIsIi5qdW1ib3Ryb24tc2VhcmNoIHtcbiAgbWluLWhlaWdodDogNTh2aDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvcGFjaXR5OiAxMDAlO1xuICBjb2xvcjogZmxvcmFsd2hpdGU7XG59XG5cbi5zZWFyY2gge1xuICBtaW4taGVpZ2h0OiAyMHZoO1xufVxuXG4uY2VudGVyIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG4uY2VudGVyIGg0IHtcbiAgZm9udC1mYW1pbHk6IEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZiwgXCJTZWdvZSBVSVwiLCBUYWhvbWE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5zZWFyY2gtYm94IHtcbiAgbWFyZ2luLXRvcDogMHZoICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDIwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDIwLCAxMywgMC42NTMpO1xuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRhcmtlbiAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoLWJveCBmb3JtIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5zZWFyY2gtYm94IGZvcm0gLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1jb2xvcjogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtaW4taGVpZ2h0OiA0NXB4O1xufVxuXG4uc2VhcmNoLWJveCBmb3JtIC5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5zZWFyY2gtYm94IGZvcm0gLmZvcm0tY29udHJvbDpob3ZlciB7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzRjOGJmNSAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoLWJveCBmb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5zZWFyY2gtYm94IGZvcm0gc2VsZWN0IHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXN0eWxlOiBpdGFsaWMgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC1ib3ggZm9ybSAuc2VhcmNoLWJ0biB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgd2lkdGg6IDk1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjOGJmNTtcbiAgY29sb3I6IGZsb3JhbHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5zZWFyY2gtYm94IGZvcm0gLnNlYXJjaC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM2YjZiO1xuICB0cmFuc2Zvcm06IDEuMHM7XG59XG5cbi5kaXYtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgbWluLWhlaWdodDogMzdweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvcm0tY29udHJvbDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzZjNmI2YiAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoLWltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2VhcmNoLWxpbmsge1xuICBtYXJnaW4tdG9wOiA3JTtcbn1cblxuLnNlYXJjaC1saW5rIHAgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM2YzZiNmI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2VhcmNoLWxpbmsgcCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzI4MjcyNztcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLnNlYXJjaC10ZXh0IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnNlYXJjaC10ZXh0IHAgc3BhbiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YzZiNmI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZmxvcmFsd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnNlYXJjaC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnNlYXJjaC1jb250ZW50IHAge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzZjNmI2Yjtcbn1cblxuLnNlYXJjaC1jb250ZW50LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnNlYXJjaC1jYXJkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnNlYXJjaC1mb290ZXIge1xuICBtYXJnaW4tdG9wOiA1dmg7XG59XG5cbi5zZWFyY2gtdGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICM2YzZiNmI7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uc2VhcmNoLW5hbWUge1xuICBjb2xvcjogZmxvcmFsd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uc2VhcmNoLWpvYiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uc2VhcmNoLWFkZHJlc3Mge1xuICBjb2xvcjogZmxvcmFsd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uc2VhcmNoLWFyZWEge1xuICBjb2xvcjogZmxvcmFsd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uc2VhcmNoLWNpdGllcyB7XG4gIGNvbG9yOiBmbG9yYWx3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5zZWFyY2gtYnRuLW1vcmUge1xuICB3aWR0aDogOTUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM4YmY1O1xuICBjb2xvcjogZmxvcmFsd2hpdGU7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG5cbi5zZWFyY2gtYnRuLW1vcmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM2YjZiO1xuICB0cmFuc2Zvcm06IDEuMHM7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signfooter/signfooter.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/signfooter/signfooter.component.ts ***!
    \****************************************************/

  /*! exports provided: SignfooterComponent */

  /***/
  function srcAppSignfooterSignfooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignfooterComponent", function () {
      return SignfooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var SignfooterComponent = /*#__PURE__*/function () {
      function SignfooterComponent() {
        _classCallCheck(this, SignfooterComponent);
      }

      _createClass(SignfooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignfooterComponent;
    }();

    SignfooterComponent.ɵfac = function SignfooterComponent_Factory(t) {
      return new (t || SignfooterComponent)();
    };

    SignfooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignfooterComponent,
      selectors: [["app-signfooter"]],
      decls: 20,
      vars: 6,
      consts: [[1, ""], ["routerLinkActive", "router-link-active", 3, "routerLink"]],
      template: function SignfooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Terms of Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Privacy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Artisans Locatins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\xA9 2020 GetartConsult");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["footer[_ngcontent-%COMP%] {\n  padding: 0 1.875rem 1.25rem;\n  display: block !important;\n}\n\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  font-size: 12px;\n}\n\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #4c8bf5;\n  font-weight: normal;\n  display: flex;\n}\n\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c6b6b;\n  font-weight: bolder;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmZvb3Rlci9DOlxcd2FtcHNlcnZlclxcd3d3XFxnZXRhcnQtcmVwby9zcmNcXGFwcFxcc2lnbmZvb3Rlclxcc2lnbmZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbmZvb3Rlci9zaWduZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksMkJBQTJCO0VBQzNCLHlCQUF5QjtBQ0Y3Qjs7QURBQTtFQU1RLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLDREQUE0RDtBQ0ZwRTs7QURQQTtFQWFZLG1CQUFtQjtFQUVuQixlQUFlO0FDSDNCOztBRFpBO0VBa0JnQixxQkFBcUI7RUFDckIsY0FyQlM7RUFzQlQsbUJBQW1CO0VBQ25CLGFBQWE7QUNGN0I7O0FEbkJBO0VBd0JnQixxQkFBcUI7QUNEckM7O0FEdkJBO0VBNEJnQixjQTdCWTtFQThCWixtQkFBbUI7RUFDbkIsYUFBYTtBQ0Q3QiIsImZpbGUiOiJzcmMvYXBwL3NpZ25mb290ZXIvc2lnbmZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4kYmFja2dyb3VuZC1wYWxlOiAjNGM4YmY1O1xyXG4kYmFja2dyb3VuZC1sdC1kYXJrOiAjNmM2YjZiO1xyXG5mb290ZXIge1xyXG4gICAgcGFkZGluZzogMCAxLjg3NXJlbSAxLjI1cmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgdWwge1xyXG4gICAgICAgIC8vIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbjogMCw1cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJhY2tncm91bmQtcGFsZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGJhY2tncm91bmQtbHQtZGFyaztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZm9vdGVyIHtcbiAgcGFkZGluZzogMCAxLjg3NXJlbSAxLjI1cmVtO1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG5mb290ZXIgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG5mb290ZXIgdWwgbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbmZvb3RlciB1bCBsaSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzRjOGJmNTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuZm9vdGVyIHVsIGxpIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmZvb3RlciB1bCBsaSBwIHtcbiAgY29sb3I6ICM2YzZiNmI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignfooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signfooter',
          templateUrl: './signfooter.component.html',
          styleUrls: ['./signfooter.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signheader/signheader.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/signheader/signheader.component.ts ***!
    \****************************************************/

  /*! exports provided: SignheaderComponent */

  /***/
  function srcAppSignheaderSignheaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignheaderComponent", function () {
      return SignheaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SignheaderComponent = /*#__PURE__*/function () {
      function SignheaderComponent() {
        _classCallCheck(this, SignheaderComponent);
      }

      _createClass(SignheaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignheaderComponent;
    }();

    SignheaderComponent.ɵfac = function SignheaderComponent_Factory(t) {
      return new (t || SignheaderComponent)();
    };

    SignheaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignheaderComponent,
      selectors: [["app-signheader"]],
      decls: 5,
      vars: 0,
      consts: [[1, "scrolled", "navbar", "navbar-transparent", "navbar-expand-sm"], [1, "container-fluid"], ["routerLink", "/landing", 1, "navbar-brand", "mr-auto", "logo-links"], ["src", "assets/images/slack-getart-logo.png", "height", "22px", "width", "200px", "alt", "GetartConsult"], ["id", "Navbar", 1, "navbar"]],
      template: function SignheaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".navbar-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n  width: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmhlYWRlci9DOlxcd2FtcHNlcnZlclxcd3d3XFxnZXRhcnQtcmVwby9zcmNcXGFwcFxcc2lnbmhlYWRlclxcc2lnbmhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbmhlYWRlci9zaWduaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQTZCO0VBQzdCLHNCQUFzQjtBQ0MxQiIsImZpbGUiOiJzcmMvYXBwL3NpZ25oZWFkZXIvc2lnbmhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItdHJhbnNwYXJlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG59IiwiLm5hdmJhci10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignheaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signheader',
          templateUrl: './signheader.component.html',
          styleUrls: ['./signheader.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signin/signin.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signin/signin.component.ts ***!
    \********************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animations_app_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../animations/app.animation */
    "./src/app/animations/app.animation.ts");
    /* harmony import */


    var _signheader_signheader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../signheader/signheader.component */
    "./src/app/signheader/signheader.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _signfooter_signfooter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../signfooter/signfooter.component */
    "./src/app/signfooter/signfooter.component.ts");

    var _c0 = function _c0() {
      return ["/signup"];
    };

    var SigninComponent = /*#__PURE__*/function () {
      function SigninComponent() {
        _classCallCheck(this, SigninComponent);

        this.visibility = 'shown';
      }

      _createClass(SigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.visibility = 'hidden';
          this.loader = false;
          this.page = true;
          setTimeout(function () {
            _this2.removeLoader();

            _this2.visibility = 'shown';
          }, 5000);
        }
      }, {
        key: "removeLoader",
        value: function removeLoader() {
          this.loader = true;
          this.page = false;
        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ɵfac = function SigninComponent_Factory(t) {
      return new (t || SigninComponent)();
    };

    SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SigninComponent,
      selectors: [["app-signin"]],
      hostAttrs: [2, "display", "block"],
      hostVars: 1,
      hostBindings: function SigninComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵupdateSyntheticHostBinding"]("@flyInOut", true);
        }
      },
      decls: 35,
      vars: 5,
      consts: [[3, "hidden"], [1, "container"], ["id", "", 1, "row", "row-content"], [1, "col-12", "col-md-4", "offset-md-4"], [1, "card", "sign-card"], [1, "card-body"], [1, "header-txt"], [1, "header-span-txt"], ["routerLinkActive", "router-link-active", 3, "routerLink"], ["novalidate", "", "action", ""], [1, "form-group"], [1, "col-12", "col-md-12"], ["type", "text", "name", "email", "placeholder", "Email Address", "required", "", 1, "form-control", "form-control-sign"], [1, "errors"], ["type", "password", "name", "password", "placeholder", "Password", "required", "", 1, "form-control", "form-control-sign"], [1, "col-md-12", "offset-1", "offset-sm-1"], ["type", "submit", 1, "btn", "signin-btn"], ["id", "loadingDiv", 3, "hidden"], [1, "loader"]],
      template: function SigninComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-signheader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Sign In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " New to GetartConsult? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Sign Up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "errors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "errors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Sign In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-signfooter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@visibility", ctx.visibility)("hidden", ctx.page);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loader);
        }
      },
      directives: [_signheader_signheader_component__WEBPACK_IMPORTED_MODULE_2__["SignheaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _signfooter_signfooter_component__WEBPACK_IMPORTED_MODULE_4__["SignfooterComponent"]],
      styles: [".sign-card[_ngcontent-%COMP%] {\n  margin-top: 25%;\n  margin-bottom: 20%;\n}\n\n.header-txt[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.header-txt[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  margin-top: 10px;\n  color: #6c6b6b;\n}\n\n.header-span-txt[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  color: #6c6b6b;\n  font-size: 12px;\n}\n\n.header-span-txt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #4c8bf5;\n  font-weight: bold;\n}\n\n.header-span-txt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #6c6b6b;\n  text-decoration: none;\n}\n\n.errors[_ngcontent-%COMP%] {\n  color: #fa0909;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.signin-btn[_ngcontent-%COMP%] {\n  width: 75%;\n  border-radius: 15px;\n  background-color: #4c8bf5;\n  color: floralwhite;\n  font-weight: bolder;\n}\n\n.signin-btn[_ngcontent-%COMP%]:hover {\n  background-color: #6c6b6b;\n  color: floralwhite;\n}\n\n.form-control-sign[_ngcontent-%COMP%]:focus {\n  border-color: #6c6b6b !important;\n  border-left-color: #4c8bf5 !important;\n  border-left: 7px solid;\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL0M6XFx3YW1wc2VydmVyXFx3d3dcXGdldGFydC1yZXBvL3NyY1xcYXBwXFxzaWduaW5cXHNpZ25pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNJLGVBQWU7RUFDZixrQkFBa0I7QUNSdEI7O0FEV0E7RUFDSSw2QkFBNkI7QUNSakM7O0FET0E7RUFHUSw2QkFBNkI7RUFDN0IsNERBQTREO0VBQzVELGdCQUFnQjtFQUNoQixjQWZvQjtBQ1M1Qjs7QURVQTtFQUNJLDZCQUE2QjtFQUM3Qiw0REFBNEQ7RUFDNUQsY0F0QndCO0VBdUJ4QixlQUFlO0FDUG5COztBREdBO0VBT1EscUJBQXFCO0VBQ3JCLGNBNUJpQjtFQTZCakIsaUJBQWlCO0FDTnpCOztBREhBO0VBWVEsY0EvQm9CO0VBZ0NwQixxQkFBcUI7QUNMN0I7O0FEUUE7RUFDSSxjQW5DOEI7RUFvQzlCLDREQUE0RDtBQ0xoRTs7QURRQTtFQUNJLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIseUJBNUNxQjtFQTZDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQ0x2Qjs7QURPQTtFQUNJLHlCQWhEd0I7RUFpRHhCLGtCQUFrQjtBQ0p0Qjs7QURPQTtFQUNJLGdDQUE0QztFQUM1QyxxQ0FBOEM7RUFDOUMsc0JBQXVCO0VBRXZCLDJCQUEyQjtBQ0ovQiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbHQtZ3JheTogI2RkZDtcclxuJGJhY2tncm91bmQtZGFyazogIzI4MjcyNztcclxuJGJhY2tncm91bmQtZGFyay10cmFuczogIzI4MjcyNzc0O1xyXG4kYmFja2dyb3VuZC1saWdodDogI0YwRjVGOTtcclxuJGJhY2tncm91bmQtcGFsZTogIzRjOGJmNTtcclxuJGJhY2tncm91bmQtbHQtZGFyazogIzZjNmI2YjtcclxuJGJhY2tncm91bmQtZXJyb3JzOiByZ2IoMjUwLCA5LCA5KTtcclxuXHJcblxyXG4uc2lnbi1jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDI1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwJTtcclxufVxyXG5cclxuLmhlYWRlci10eHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBzdHJvbmcge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAkYmFja2dyb3VuZC1sdC1kYXJrO1xyXG4gICAgfVxyXG5cclxufVxyXG4uaGVhZGVyLXNwYW4tdHh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWx0LWRhcms7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAkYmFja2dyb3VuZC1wYWxlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICRiYWNrZ3JvdW5kLWx0LWRhcms7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG59XHJcbi5lcnJvcnMge1xyXG4gICAgY29sb3I6ICRiYWNrZ3JvdW5kLWVycm9ycztcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNpZ25pbi1idG4ge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1wYWxlO1xyXG4gICAgY29sb3I6IGZsb3JhbHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uc2lnbmluLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1sdC1kYXJrO1xyXG4gICAgY29sb3I6IGZsb3JhbHdoaXRlO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXNpZ246Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkYmFja2dyb3VuZC1sdC1kYXJrICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogJGJhY2tncm91bmQtcGFsZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCA7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufSIsIi5zaWduLWNhcmQge1xuICBtYXJnaW4tdG9wOiAyNSU7XG4gIG1hcmdpbi1ib3R0b206IDIwJTtcbn1cblxuLmhlYWRlci10eHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci10eHQgc3Ryb25nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICM2YzZiNmI7XG59XG5cbi5oZWFkZXItc3Bhbi10eHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzZjNmI2YjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaGVhZGVyLXNwYW4tdHh0IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNGM4YmY1O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhlYWRlci1zcGFuLXR4dCBhOmhvdmVyIHtcbiAgY29sb3I6ICM2YzZiNmI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmVycm9ycyB7XG4gIGNvbG9yOiAjZmEwOTA5O1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbi5zaWduaW4tYnRuIHtcbiAgd2lkdGg6IDc1JTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjOGJmNTtcbiAgY29sb3I6IGZsb3JhbHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uc2lnbmluLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YzZiNmI7XG4gIGNvbG9yOiBmbG9yYWx3aGl0ZTtcbn1cblxuLmZvcm0tY29udHJvbC1zaWduOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNmM2YjZiICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjNGM4YmY1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4iXX0= */"],
      data: {
        animation: [Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_1__["visibility"])(), Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_1__["flyInOut"])()]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signin',
          templateUrl: './signin.component.html',
          styleUrls: ['./signin.component.scss'],
          host: {
            '[@flyInOut]': 'true',
            'style': 'display: block;'
          },
          animations: [Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_1__["visibility"])(), Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_1__["flyInOut"])()]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animations_app_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../animations/app.animation */
    "./src/app/animations/app.animation.ts");
    /* harmony import */


    var _signheader_signheader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../signheader/signheader.component */
    "./src/app/signheader/signheader.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _signfooter_signfooter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../signfooter/signfooter.component */
    "./src/app/signfooter/signfooter.component.ts");

    var _c0 = function _c0() {
      return ["/signin"];
    };

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent() {
        _classCallCheck(this, SignupComponent);

        this.visibility = 'shown';
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.visibility = 'hidden';
          this.loader = false;
          this.page = true;
          setTimeout(function () {
            _this3.removeLoader();

            _this3.visibility = 'shown';
          }, 5000);
        }
      }, {
        key: "removeLoader",
        value: function removeLoader() {
          this.loader = true;
          this.page = false;
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)();
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      hostAttrs: [2, "display", "block"],
      hostVars: 1,
      hostBindings: function SignupComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵupdateSyntheticHostBinding"]("@flyInOut", true);
        }
      },
      decls: 58,
      vars: 5,
      consts: [[2, "width", "95%", 3, "hidden"], [1, "container-fluid"], ["id", "", 1, "row"], [1, "col-12", "col-md-4", "offset-md-4"], [1, "card", "sign-card"], [1, "card-body"], [1, "header-txt"], [1, "header-span-txt"], ["routerLinkActive", "router-link-active", 3, "routerLink"], ["novalidate", "", "action", ""], [1, "container"], [1, "form-group", "row"], [1, "col-12", "col-md-12"], ["type", "email", "name", "email", "placeholder", "Email Address", "required", "", 1, "form-control", "form-control-sign"], [1, "errors"], [1, "col-6", "col-md-6"], ["type", "text", "name", "firstname", "placeholder", "First Name", "required", "", 1, "form-control", "form-control-sign"], ["type", "text", "name", "lastname", "placeholder", "Last Name", "required", "", 1, "form-control", "form-control-sign"], [1, "col-5", "col-md-5"], [1, "align-items-center"], ["name", "userType", "id", "", "required", "", 1, "form-control", "form-control-sign"], ["value", ""], ["value", "0"], ["value", "1"], ["type", "password", "name", "password", "placeholder", "Password", "required", "", 1, "form-control", "form-control-sign"], [1, "col-md-12", "offset-1", "offset-sm-1"], ["type", "submit", 1, "btn", "signup-btn"], ["id", "loadingDiv", 3, "hidden"], [1, "loader"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-signheader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Sign Up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Already have an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Sign In ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "errors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "errors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "errors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Want to be ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "None");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Artisan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Client");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "errors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "small", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "errors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Sign Up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-signfooter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@visibility", ctx.visibility)("hidden", ctx.page);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.loader);
        }
      },
      directives: [_signheader_signheader_component__WEBPACK_IMPORTED_MODULE_2__["SignheaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _signfooter_signfooter_component__WEBPACK_IMPORTED_MODULE_4__["SignfooterComponent"]],
      styles: [".navbar-transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n.sign-card[_ngcontent-%COMP%] {\n  margin-top: 25%;\n  margin-bottom: 20%;\n}\n\n.header-txt[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.header-txt[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  margin-top: 10px;\n  color: #6c6b6b;\n}\n\n.header-span-txt[_ngcontent-%COMP%] {\n  text-align: center !important;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n  color: #6c6b6b;\n  font-size: 12px;\n}\n\n.header-span-txt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #4c8bf5;\n  font-weight: bold;\n}\n\n.header-span-txt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #6c6b6b;\n  text-decoration: none;\n}\n\n.errors[_ngcontent-%COMP%] {\n  color: #fa0909;\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.signup-btn[_ngcontent-%COMP%] {\n  width: 75%;\n  border-radius: 15px;\n  background-color: #4c8bf5;\n  color: floralwhite;\n  font-weight: bolder;\n}\n\n.signup-btn[_ngcontent-%COMP%]:hover {\n  background-color: #6c6b6b;\n  color: floralwhite;\n}\n\n.form-control-sign[_ngcontent-%COMP%]:focus {\n  border-color: #6c6b6b !important;\n  border-left-color: #4c8bf5 !important;\n  border-left: 7px solid;\n  box-shadow: none !important;\n}\n\n.quest[_ngcontent-%COMP%] {\n  padding-top: 57px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFx3YW1wc2VydmVyXFx3d3dcXGdldGFydC1yZXBvL3NyY1xcYXBwXFxzaWdudXBcXHNpZ251cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLDZCQUE2QjtBQ1BqQzs7QURTQTtFQUNJLGVBQWU7RUFDZixrQkFBa0I7QUNOdEI7O0FEU0E7RUFDSSw2QkFBNkI7QUNOakM7O0FES0E7RUFHUSw2QkFBNkI7RUFDN0IsNERBQTREO0VBQzVELGdCQUFnQjtFQUNoQixjQWpCb0I7QUNhNUI7O0FEUUE7RUFDSSw2QkFBNkI7RUFDN0IsNERBQTREO0VBQzVELGNBeEJ3QjtFQXlCeEIsZUFBZTtBQ0xuQjs7QURDQTtFQU9RLHFCQUFxQjtFQUNyQixjQTlCaUI7RUErQmpCLGlCQUFpQjtBQ0p6Qjs7QURMQTtFQVlRLGNBakNvQjtFQWtDcEIscUJBQXFCO0FDSDdCOztBRE1BO0VBQ0ksY0FyQzhCO0VBc0M5Qiw0REFBNEQ7QUNIaEU7O0FETUE7RUFDSSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHlCQTlDcUI7RUErQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUNIdkI7O0FES0E7RUFDSSx5QkFsRHdCO0VBbUR4QixrQkFBa0I7QUNGdEI7O0FES0E7RUFDSSxnQ0FBNEM7RUFDNUMscUNBQThDO0VBQzlDLHNCQUF1QjtFQUV2QiwyQkFBMkI7QUNGL0I7O0FESUE7RUFDSSw0QkFBNEI7QUNEaEMiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGx0LWdyYXk6ICNkZGQ7XHJcbiRiYWNrZ3JvdW5kLWRhcms6ICMyODI3Mjc7XHJcbiRiYWNrZ3JvdW5kLWRhcmstdHJhbnM6ICMyODI3Mjc3NDtcclxuJGJhY2tncm91bmQtbGlnaHQ6ICNGMEY1Rjk7XHJcbiRiYWNrZ3JvdW5kLXBhbGU6ICM0YzhiZjU7XHJcbiRiYWNrZ3JvdW5kLWx0LWRhcms6ICM2YzZiNmI7XHJcbiRiYWNrZ3JvdW5kLWVycm9yczogcmdiKDI1MCwgOSwgOSk7XHJcblxyXG4ubmF2YmFyLXRyYW5zcGFyZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5zaWduLWNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMjUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjAlO1xyXG59XHJcblxyXG4uaGVhZGVyLXR4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIHN0cm9uZyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICRiYWNrZ3JvdW5kLWx0LWRhcms7XHJcbiAgICB9XHJcblxyXG59XHJcbi5oZWFkZXItc3Bhbi10eHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogJGJhY2tncm91bmQtbHQtZGFyaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICRiYWNrZ3JvdW5kLXBhbGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGJhY2tncm91bmQtbHQtZGFyaztcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuLmVycm9ycyB7XHJcbiAgICBjb2xvcjogJGJhY2tncm91bmQtZXJyb3JzO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2lnbnVwLWJ0biB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXBhbGU7XHJcbiAgICBjb2xvcjogZmxvcmFsd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi5zaWdudXAtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWx0LWRhcms7XHJcbiAgICBjb2xvcjogZmxvcmFsd2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtc2lnbjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICRiYWNrZ3JvdW5kLWx0LWRhcmsgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkYmFja2dyb3VuZC1wYWxlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5xdWVzdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTdweCAhaW1wb3J0YW50O1xyXG59IiwiLm5hdmJhci10cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2lnbi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMjUlO1xuICBtYXJnaW4tYm90dG9tOiAyMCU7XG59XG5cbi5oZWFkZXItdHh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItdHh0IHN0cm9uZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjNmM2YjZiO1xufVxuXG4uaGVhZGVyLXNwYW4tdHh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM2YzZiNmI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmhlYWRlci1zcGFuLXR4dCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzRjOGJmNTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oZWFkZXItc3Bhbi10eHQgYTpob3ZlciB7XG4gIGNvbG9yOiAjNmM2YjZiO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5lcnJvcnMge1xuICBjb2xvcjogI2ZhMDkwOTtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG4uc2lnbnVwLWJ0biB7XG4gIHdpZHRoOiA3NSU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YzhiZjU7XG4gIGNvbG9yOiBmbG9yYWx3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLnNpZ251cC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM2YjZiO1xuICBjb2xvcjogZmxvcmFsd2hpdGU7XG59XG5cbi5mb3JtLWNvbnRyb2wtc2lnbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzZjNmI2YiAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdC1jb2xvcjogIzRjOGJmNSAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogN3B4IHNvbGlkO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucXVlc3Qge1xuICBwYWRkaW5nLXRvcDogNTdweCAhaW1wb3J0YW50O1xufVxuIl19 */"],
      data: {
        animation: [Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_1__["visibility"])(), Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_1__["flyInOut"])()]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.scss'],
          host: {
            '[@flyInOut]': 'true',
            'style': 'display: block;'
          },
          animations: [Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_1__["visibility"])(), Object(_animations_app_animation__WEBPACK_IMPORTED_MODULE_1__["flyInOut"])()]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\wampserver\www\getart-repo\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map