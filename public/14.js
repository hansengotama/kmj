(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/page/admin/vihara/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/page/admin/vihara/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helper/request */ "./resources/helper/request.js");
/* harmony import */ var _helper_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../helper/alert */ "./resources/helper/alert.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      vihara: {
        data: []
      }
    };
  },
  mounted: function mounted() {
    this.getVihara();
  },
  methods: {
    getVihara: function getVihara() {
      var _this = this;

      _helper_request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/vihara").then(function (response) {
        _this.vihara = response.data;
      });
    },
    addVihara: function addVihara() {
      this.$router.push({
        name: "Add Vihara"
      });
    },
    editVihara: function editVihara(data) {
      this.$router.push({
        name: "Edit Vihara",
        params: data
      });
    },
    deleteVihara: function deleteVihara(id) {
      var _this2 = this;

      _helper_alert__WEBPACK_IMPORTED_MODULE_1__["default"].loading();
      _helper_request__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/vihara/delete/" + id).then(function (response) {
        _this2.getVihara();

        _helper_alert__WEBPACK_IMPORTED_MODULE_1__["default"].success();
      })["catch"](function (error) {
        _helper_alert__WEBPACK_IMPORTED_MODULE_1__["default"].error();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/page/admin/vihara/index.vue?vue&type=template&id=40f02675&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/page/admin/vihara/index.vue?vue&type=template&id=40f02675&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticStyle: { color: "#555", "font-weight": "lighter" } }, [
      _vm._v("\n            Kelola Vihara\n        ")
    ]),
    _vm._v(" "),
    _c("div", { staticStyle: { "padding-top": "3em", position: "relative" } }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "content-container" }, [
        _c("div", { staticClass: "content-place" }, [
          _c(
            "div",
            {
              staticClass: "additional-container",
              staticStyle: { float: "right" }
            },
            [
              _c("div", { staticClass: "add-button" }, [
                _c(
                  "button",
                  {
                    on: {
                      click: function($event) {
                        return _vm.addVihara()
                      }
                    }
                  },
                  [_vm._v("Tambah Vihara")]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "table-container" }, [
            _c(
              "table",
              [
                _vm._m(1),
                _vm._v(" "),
                _vm.vihara.data.length <= 0
                  ? _c("tr", [
                      _c(
                        "td",
                        {
                          staticStyle: { "text-align": "center" },
                          attrs: { colspan: "5" }
                        },
                        [_vm._v("Data Kosong")]
                      )
                    ])
                  : _vm._l(_vm.vihara.data, function(vihara, index) {
                      return _c("tr", [
                        _c("td", [_vm._v(_vm._s(index + 1))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(vihara.name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(vihara.limit))]),
                        _vm._v(" "),
                        _c("td", [
                          vihara.is_active
                            ? _c("i", {
                                staticClass: "fa fa-check",
                                staticStyle: { color: "green" }
                              })
                            : _c("i", {
                                staticClass: "fa fa-times",
                                staticStyle: { color: "red" }
                              })
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c("span", [
                            _c("i", {
                              staticClass: "fa fa-edit",
                              on: {
                                click: function($event) {
                                  return _vm.editVihara(vihara)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "fa fa-trash",
                              on: {
                                click: function($event) {
                                  return _vm.deleteVihara(vihara.id)
                                }
                              }
                            })
                          ])
                        ])
                      ])
                    })
              ],
              2
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-title" }, [
      _c("div", { staticStyle: { padding: "15px" } }, [_vm._v("Data Vihara")]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticStyle: {
            "font-size": "12px",
            color: "hsla(0,0%,100%,.62)",
            padding: "0 15px 15px 15px"
          }
        },
        [_vm._v("Vihara lombok yang akan dibantu")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("No")]),
      _vm._v(" "),
      _c("th", [_vm._v("Nama")]),
      _vm._v(" "),
      _c("th", [_vm._v("Limit Donasi")]),
      _vm._v(" "),
      _c("th", [_vm._v("Aktif")]),
      _vm._v(" "),
      _c("th", [_vm._v("Aksi")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/helper/alert.js":
/*!***********************************!*\
  !*** ./resources/helper/alert.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  loading: function loading() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.showLoading();
    $('.swal2-html-container').show();
    $('.swal2-html-container').text('Mohon Tunggu');
  },
  success: function success() {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
      title: 'Success!',
      icon: 'success',
      confirmButtonText: 'Ok',
      allowOutsideClick: false
    });
  },
  error: function error() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
      title: 'Error!',
      icon: 'error',
      text: message,
      confirmButtonText: 'Ok'
    });
  },
  confirmation: function confirmation(title, confirmText, cancelText) {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
      title: title,
      icon: 'warning',
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      showCancelButton: true,
      showCloseButton: true
    });
  }
});

/***/ }),

/***/ "./resources/helper/request.js":
/*!*************************************!*\
  !*** ./resources/helper/request.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  getBaseUrl: function getBaseUrl() {
    return this.url = window.location.origin;
  },
  get: function get(url) {
    var _this = this;

    return new Promise(function (resolve) {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_this.getBaseUrl() + url, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        resolve(response);
      })["catch"](function (error) {
        resolve(error);
      });
    });
  },
  post: function post(url, data) {
    var _this2 = this;

    return new Promise(function (resolve) {
      var headers = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_this2.getBaseUrl() + url, data, headers).then(function (response) {
        resolve(response);
      })["catch"](function (error) {
        resolve(error);
      });
    });
  }
});

/***/ }),

/***/ "./resources/views/page/admin/vihara/index.vue":
/*!*****************************************************!*\
  !*** ./resources/views/page/admin/vihara/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_40f02675_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=40f02675&scoped=true& */ "./resources/views/page/admin/vihara/index.vue?vue&type=template&id=40f02675&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/views/page/admin/vihara/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_40f02675_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_40f02675_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "40f02675",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/page/admin/vihara/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/page/admin/vihara/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/views/page/admin/vihara/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/page/admin/vihara/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/page/admin/vihara/index.vue?vue&type=template&id=40f02675&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/views/page/admin/vihara/index.vue?vue&type=template&id=40f02675&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_40f02675_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=40f02675&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/page/admin/vihara/index.vue?vue&type=template&id=40f02675&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_40f02675_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_40f02675_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);