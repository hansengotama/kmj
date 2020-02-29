(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/page/user/form/verification.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/page/user/form/verification.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helper/request */ "./resources/helper/request.js");
/* harmony import */ var vue_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-cookies */ "./node_modules/vue-cookies/vue-cookies.js");
/* harmony import */ var vue_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_cookies__WEBPACK_IMPORTED_MODULE_1__);
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
    return {};
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/views/page/user/form/verification.vue?vue&type=style&index=0&id=768952ce&lang=stylus&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/page/user/form/verification.vue?vue&type=style&index=0&id=768952ce&lang=stylus&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (max-width: 800px) {\n.table-title[data-v-768952ce] {\n    width: 94%;\n    left: 3%;\n    right: 3%;\n}\n.content-place[data-v-768952ce] {\n    padding-left: 3%;\n    padding-right: 3%;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/views/page/user/form/verification.vue?vue&type=style&index=0&id=768952ce&lang=stylus&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/page/user/form/verification.vue?vue&type=style&index=0&id=768952ce&lang=stylus&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/stylus-loader!../../../../../node_modules/vue-loader/lib??vue-loader-options!./verification.vue?vue&type=style&index=0&id=768952ce&lang=stylus&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/views/page/user/form/verification.vue?vue&type=style&index=0&id=768952ce&lang=stylus&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-cookies/vue-cookies.js":
/*!*************************************************!*\
  !*** ./node_modules/vue-cookies/vue-cookies.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Vue Cookies v1.7.0
 * https://github.com/cmp-cc/vue-cookies
 *
 * Copyright 2016, cmp-cc
 * Released under the MIT license
 */

(function() {

    var defaultConfig = {
        expires : '1d',
        path : '; path=/',
        domain:'',
        secure:'',
        sameSite:''
    }

    var VueCookies = {
        // install of Vue
        install: function(Vue) {
            Vue.prototype.$cookies = this
            Vue.$cookies = this
        },
        config : function(expireTimes,path,domain,secure,sameSite) {
            defaultConfig.expires = expireTimes ? expireTimes : '1d';
            defaultConfig.path = path ? '; path=' + path : '; path=/';
            defaultConfig.domain = domain ? '; domain=' + domain : '';
            defaultConfig.secure = secure ? '; Secure' : '';
            defaultConfig.sameSite = sameSite ? '; SameSite=' + sameSite : '';
        },
        get: function(key) {
            var value = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null

            if(value && value.substring(0,1) === "{" && value.substring(value.length-1,value.length) === "}") {
                try {
                    value = JSON.parse(value)
                }catch (e) {
                    return value;
                }
            }
            return value;
        },
        set: function(key, value, expireTimes, path, domain, secure, sameSite) {
            if (!key) {
                throw new Error("Cookie name is not find in first argument.")
            }else if(/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(key)){
                throw new Error("Cookie key name illegality, Cannot be set to ['expires','max-age','path','domain','secure','SameSite']\t current key name: " + key);
            }
            // support json object
            if(value && value.constructor === Object) {
                value = JSON.stringify(value);
            }
            var _expires = "";
            expireTimes = expireTimes === undefined ? defaultConfig.expires : expireTimes;
            if (expireTimes && expireTimes != 0) {
                switch (expireTimes.constructor) {
                    case Number:
                        if(expireTimes === Infinity || expireTimes === -1) _expires = "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
                        else _expires = "; max-age=" + expireTimes;
                        break;
                    case String:
                        if (/^(?:\d{1,}(y|m|d|h|min|s))$/i.test(expireTimes)) {
                            // get capture number group
                            var _expireTime = expireTimes.replace(/^(\d{1,})(?:y|m|d|h|min|s)$/i, "$1");
                            // get capture type group , to lower case
                            switch (expireTimes.replace(/^(?:\d{1,})(y|m|d|h|min|s)$/i, "$1").toLowerCase()) {
                                // Frequency sorting
                                case 'm':  _expires = "; max-age=" + +_expireTime * 2592000; break; // 60 * 60 * 24 * 30
                                case 'd':  _expires = "; max-age=" + +_expireTime * 86400; break; // 60 * 60 * 24
                                case 'h': _expires = "; max-age=" + +_expireTime * 3600; break; // 60 * 60
                                case 'min':  _expires = "; max-age=" + +_expireTime * 60; break; // 60
                                case 's': _expires = "; max-age=" + _expireTime; break;
                                case 'y': _expires = "; max-age=" + +_expireTime * 31104000; break; // 60 * 60 * 24 * 30 * 12
                                default: new Error("unknown exception of 'set operation'");
                            }
                        } else {
                            _expires = "; expires=" + expireTimes;
                        }
                        break;
                    case Date:
                        _expires = "; expires=" + expireTimes.toUTCString();
                        break;
                }
            }
            document.cookie =
                encodeURIComponent(key) + "=" + encodeURIComponent(value) +
                _expires +
                (domain ? "; domain=" + domain : defaultConfig.domain) +
                (path ? "; path=" + path : defaultConfig.path) +
                (secure === undefined ? defaultConfig.secure : secure ? "; Secure" : "") +
                (sameSite === undefined ? defaultConfig.sameSite : (sameSite ? "; SameSite=" + sameSite : ""));
            return this;
        },
        remove: function(key, path, domain) {
            if (!key || !this.isKey(key)) {
                return false;
            }
            document.cookie = encodeURIComponent(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (domain ? "; domain=" + domain : defaultConfig.domain) + (path ? "; path=" + path : defaultConfig.path);
            return this;
        },
        isKey: function(key) {
            return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
        },
        keys:  function() {
            if(!document.cookie) return [];
            var _keys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
            for (var _index = 0; _index < _keys.length; _index++) {
                _keys[_index] = decodeURIComponent(_keys[_index]);
            }
            return _keys;
        }
    }

    if (true) {
        module.exports = VueCookies;
    } else {}
    // vue-cookies can exist independently,no dependencies library
    if(typeof window!=="undefined"){
        window.$cookies = VueCookies;
    }

})()


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/page/user/form/verification.vue?vue&type=template&id=768952ce&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/page/user/form/verification.vue?vue&type=template&id=768952ce&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticStyle: { background: "#eaeaea", height: "100%" } },
      [
        _c("div", { staticStyle: { margin: "0 20px" } }, [
          _c("div", {
            staticStyle: { "padding-top": "3em", position: "relative" }
          })
        ])
      ]
    )
  }
]
render._withStripped = true



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

/***/ "./resources/views/page/user/form/verification.vue":
/*!*********************************************************!*\
  !*** ./resources/views/page/user/form/verification.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _verification_vue_vue_type_template_id_768952ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification.vue?vue&type=template&id=768952ce&scoped=true& */ "./resources/views/page/user/form/verification.vue?vue&type=template&id=768952ce&scoped=true&");
/* harmony import */ var _verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification.vue?vue&type=script&lang=js& */ "./resources/views/page/user/form/verification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _verification_vue_vue_type_style_index_0_id_768952ce_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verification.vue?vue&type=style&index=0&id=768952ce&lang=stylus&scoped=true& */ "./resources/views/page/user/form/verification.vue?vue&type=style&index=0&id=768952ce&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _verification_vue_vue_type_template_id_768952ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _verification_vue_vue_type_template_id_768952ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "768952ce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/page/user/form/verification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/page/user/form/verification.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/views/page/user/form/verification.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./verification.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/page/user/form/verification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/page/user/form/verification.vue?vue&type=style&index=0&id=768952ce&lang=stylus&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/views/page/user/form/verification.vue?vue&type=style&index=0&id=768952ce&lang=stylus&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_style_index_0_id_768952ce_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/stylus-loader!../../../../../node_modules/vue-loader/lib??vue-loader-options!./verification.vue?vue&type=style&index=0&id=768952ce&lang=stylus&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/views/page/user/form/verification.vue?vue&type=style&index=0&id=768952ce&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_style_index_0_id_768952ce_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_style_index_0_id_768952ce_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_style_index_0_id_768952ce_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_style_index_0_id_768952ce_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_style_index_0_id_768952ce_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/views/page/user/form/verification.vue?vue&type=template&id=768952ce&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/views/page/user/form/verification.vue?vue&type=template&id=768952ce&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_template_id_768952ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./verification.vue?vue&type=template&id=768952ce&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/page/user/form/verification.vue?vue&type=template&id=768952ce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_template_id_768952ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_verification_vue_vue_type_template_id_768952ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);