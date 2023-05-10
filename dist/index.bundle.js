"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/verticle-menu.png */ "./src/assets/verticle-menu.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/delete.png */ "./src/assets/delete.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/reset-icon.png */ "./src/assets/reset-icon.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/return-icon.png */ "./src/assets/return-icon.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: serif, monospace;\r\n}\r\n\r\ninput {\r\n  padding: 0.5rem;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  margin: auto;\r\n  width: 40%;\r\n  min-width: 500px;\r\n  min-height: 500px;\r\n  background-color: #fff;\r\n  box-shadow: 0 0 20px #666;\r\n  border-radius: 2px;\r\n  position: absolute;\r\n  top: 20vh;\r\n  left: 30vw;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/* header */\r\n\r\n.heading {\r\n  padding: 15px 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.heading p {\r\n  font-size: 1.25rem;\r\n  color: #444;\r\n  text-shadow: -1px 0 5px #d1cece;\r\n}\r\n\r\n.add-item {\r\n  padding: 15px 10px;\r\n  border-bottom: 1px solid #ddd;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.add-item input {\r\n  border: none;\r\n  cursor: default;\r\n  font-size: 1.2rem;\r\n  font-style: italic;\r\n  flex: 1;\r\n}\r\n\r\n.task input {\r\n  font-family: sans-serif, monospace;\r\n  border: none;\r\n  cursor: default;\r\n  text-shadow: -1px 0 5px #d1cece;\r\n}\r\n\r\n/* list */\r\n.to-do-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.list-item {\r\n  padding: 15px 10px;\r\n  font-size: 1.1rem;\r\n  color: #444;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.list-item .cross {\r\n  display: block;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center/cover;\r\n  height: 21px;\r\n  width: 21px;\r\n  filter: invert(0.5);\r\n  cursor: move;\r\n}\r\n\r\n.field-focus {\r\n  background-color: #f5ffe9;\r\n}\r\n\r\n.list-item .del-btn {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center/cover;\r\n  height: 21px;\r\n  width: 21px;\r\n  filter: invert(0.5);\r\n  cursor: pointer;\r\n}\r\n\r\n.del-btn:hover {\r\n  filter: invert(0.3);\r\n}\r\n\r\n.reset-i {\r\n  display: block;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center center/cover;\r\n  height: 21px;\r\n  width: 21px;\r\n  cursor: pointer;\r\n}\r\n\r\n.return-i {\r\n  display: block;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat center center/cover;\r\n  height: 10px;\r\n  width: 10px;\r\n  filter: invert(0.5);\r\n  cursor: move;\r\n}\r\n\r\n.task {\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.task-description {\r\n  flex: 1;\r\n}\r\n\r\n.completed .task-description {\r\n  text-decoration: line-through;\r\n  color: #666;\r\n}\r\n\r\n/* footer */\r\n\r\n.footer {\r\n  padding: 15px 10px;\r\n  text-align: center;\r\n  background-color: #f6f6f6;\r\n}\r\n\r\n.footer a {\r\n  text-decoration: none;\r\n  color: #777;\r\n}\r\n\r\n.footer a:hover {\r\n  color: #444;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,YAAY;EACZ,UAAU;EACV,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA,WAAW;;AAEX;EACE,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;EAClB,6BAA6B;EAC7B,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,OAAO;AACT;;AAEA;EACE,kCAAkC;EAClC,YAAY;EACZ,eAAe;EACf,+BAA+B;AACjC;;AAEA,SAAS;AACT;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;AAC/B;;AAEA;EACE,cAAc;EACd,iFAAyE;EACzE,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,iFAAkE;EAClE,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,iFAAsE;EACtE,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,iFAAuE;EACvE,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA,WAAW;;AAEX;EACE,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,WAAW;AACb","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: serif, monospace;\r\n}\r\n\r\ninput {\r\n  padding: 0.5rem;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  margin: auto;\r\n  width: 40%;\r\n  min-width: 500px;\r\n  min-height: 500px;\r\n  background-color: #fff;\r\n  box-shadow: 0 0 20px #666;\r\n  border-radius: 2px;\r\n  position: absolute;\r\n  top: 20vh;\r\n  left: 30vw;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/* header */\r\n\r\n.heading {\r\n  padding: 15px 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.heading p {\r\n  font-size: 1.25rem;\r\n  color: #444;\r\n  text-shadow: -1px 0 5px #d1cece;\r\n}\r\n\r\n.add-item {\r\n  padding: 15px 10px;\r\n  border-bottom: 1px solid #ddd;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.add-item input {\r\n  border: none;\r\n  cursor: default;\r\n  font-size: 1.2rem;\r\n  font-style: italic;\r\n  flex: 1;\r\n}\r\n\r\n.task input {\r\n  font-family: sans-serif, monospace;\r\n  border: none;\r\n  cursor: default;\r\n  text-shadow: -1px 0 5px #d1cece;\r\n}\r\n\r\n/* list */\r\n.to-do-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.list-item {\r\n  padding: 15px 10px;\r\n  font-size: 1.1rem;\r\n  color: #444;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.list-item .cross {\r\n  display: block;\r\n  background: url(./assets/verticle-menu.png) no-repeat center center/cover;\r\n  height: 21px;\r\n  width: 21px;\r\n  filter: invert(0.5);\r\n  cursor: move;\r\n}\r\n\r\n.field-focus {\r\n  background-color: #f5ffe9;\r\n}\r\n\r\n.list-item .del-btn {\r\n  background: url(./assets/delete.png) no-repeat center center/cover;\r\n  height: 21px;\r\n  width: 21px;\r\n  filter: invert(0.5);\r\n  cursor: pointer;\r\n}\r\n\r\n.del-btn:hover {\r\n  filter: invert(0.3);\r\n}\r\n\r\n.reset-i {\r\n  display: block;\r\n  background: url(./assets/reset-icon.png) no-repeat center center/cover;\r\n  height: 21px;\r\n  width: 21px;\r\n  cursor: pointer;\r\n}\r\n\r\n.return-i {\r\n  display: block;\r\n  background: url(./assets/return-icon.png) no-repeat center center/cover;\r\n  height: 10px;\r\n  width: 10px;\r\n  filter: invert(0.5);\r\n  cursor: move;\r\n}\r\n\r\n.task {\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.task-description {\r\n  flex: 1;\r\n}\r\n\r\n.completed .task-description {\r\n  text-decoration: line-through;\r\n  color: #666;\r\n}\r\n\r\n/* footer */\r\n\r\n.footer {\r\n  padding: 15px 10px;\r\n  text-align: center;\r\n  background-color: #f6f6f6;\r\n}\r\n\r\n.footer a {\r\n  text-decoration: none;\r\n  color: #777;\r\n}\r\n\r\n.footer a:hover {\r\n  color: #444;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/main.js */ "./src/modules/main.js");




/***/ }),

/***/ "./src/modules/crud.js":
/*!*****************************!*\
  !*** ./src/modules/crud.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTask)
/* harmony export */ });
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "./src/modules/list.js");
/* harmony import */ var _saveTasksToLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveTasksToLocalStorage.js */ "./src/modules/saveTasksToLocalStorage.js");
/* harmony import */ var _dragDrop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragDrop.js */ "./src/modules/dragDrop.js");




function addTask(taskItem, index, complete) {
  if (!taskItem) return;

  const refreshBtn = document.querySelector('.reset-i');
  const listWrapper = document.querySelector('.to-do-list');
  const taskWrapper = document.createElement('div');
  taskWrapper.classList.add('list-item');
  taskWrapper.setAttribute('id', index);
  taskWrapper.setAttribute('draggable', true);

  const task = document.createElement('div');
  task.classList.add('task');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  if (complete) {
    checkbox.checked = true;
    taskWrapper.classList.toggle('completed');
  }
  const btnWrapper = document.createElement('div');
  const dragBtn = document.createElement('i');
  dragBtn.classList.add('cross');
  const delBtn = document.createElement('i');
  delBtn.classList.add('del-btn');
  const description = document.createElement('input');
  description.type = 'text';
  description.classList.add('task-description');
  description.value = taskItem;
  description.addEventListener('focus', () => {
    taskWrapper.classList.toggle('field-focus');
    delBtn.style.display = 'block';
    dragBtn.style.display = 'none';
  });
  description.addEventListener('blur', () => {
    taskWrapper.classList.toggle('field-focus');
  });
  description.addEventListener('input', () => {
    const index = +taskWrapper.getAttribute('id') - 1;
    _list_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[index].updateTask(description.value);
    (0,_saveTasksToLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  delBtn.addEventListener('click', () => {
    const theTask = delBtn.parentElement.parentElement;
    _list_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTask(+theTask.getAttribute('id'));
    theTask.remove();
    const listItems = document.querySelectorAll('.list-item');
    for (let i = 0; i < listItems.length; i += 1) {
      listItems[i].setAttribute('id', i + 1);
    }
    (0,_saveTasksToLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
  refreshBtn.addEventListener('click', () => {
    delBtn.style.display = 'none';
    dragBtn.style.display = 'block';
  });
  dragBtn.addEventListener('click', () => {
    (0,_dragDrop_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
  const toggleCompleted = (e) => {
    const checkParent = e.target.parentElement.parentElement;
    const index = +checkParent.getAttribute('id') - 1;
    _list_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList[index].toggleCompleted();
    checkParent.classList.toggle('completed');
    (0,_saveTasksToLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  };

  checkbox.addEventListener('change', toggleCompleted);
  btnWrapper.appendChild(delBtn);
  task.appendChild(checkbox);
  task.appendChild(description);
  task.appendChild(dragBtn);
  taskWrapper.appendChild(task);
  taskWrapper.appendChild(btnWrapper);
  listWrapper.appendChild(taskWrapper);
}


/***/ }),

/***/ "./src/modules/dragDrop.js":
/*!*********************************!*\
  !*** ./src/modules/dragDrop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const task = document.querySelector('.list-item');

  const dragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
      e.target.classList.add('hide');
    }, 0);
  };

  const dragEnter = (e) => {
    e.preventDefault();
    e.target.classList.add('drag-over');
  };

  const dragOver = (e) => {
    e.preventDefault();
    e.target.classList.add('drag-over');
  };

  const dragLeave = (e) => {
    e.target.classList.remove('drag-over');
  };

  const drop = (e) => {
    e.target.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    const list = e.target.closest('.to-do-list');
    list.appendChild(draggable);
    draggable.classList.remove('hide');
  };

  task.addEventListener('dragstart', dragStart);
  const lists = document.querySelectorAll('.to-do-list');
  lists.forEach((list) => {
    list.addEventListener('dragenter', dragEnter);
    list.addEventListener('dragover', dragOver);
    list.addEventListener('dragleave', dragLeave);
    list.addEventListener('drop', drop);
  });
});


/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class List {
  constructor(task, index, complete) {
    this.task = task;
    this.index = index;
    this.isCompleted = complete;
  }

  static taskList = [];

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }

  updateTask(text) {
    this.task = text;
  }

  static reindex() {
    List.taskList.forEach((task, i) => {
      task.index = i + 1;
    });
  }

  static deleteTask(i) {
    List.taskList = List.taskList.filter((each) => each.index !== i);
    List.reindex();
  }

  static deleteCompleted() {
    List.taskList = List.taskList.filter((each) => !each.isCompleted);
    List.reindex();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);


/***/ }),

/***/ "./src/modules/main.js":
/*!*****************************!*\
  !*** ./src/modules/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "./src/modules/list.js");
/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud.js */ "./src/modules/crud.js");
/* harmony import */ var _saveTasksToLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveTasksToLocalStorage.js */ "./src/modules/saveTasksToLocalStorage.js");




const addInput = document.querySelector('.add-item input');
const returnBtn = document.querySelector('.return-i');
const createTaskInput = document.querySelector('#create-task');
const clearAll = document.getElementById('clearCompleted');

if (localStorage.tasks) {
  const storedTasks = JSON.parse(localStorage.tasks);
  storedTasks.forEach((item) => {
    _list_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.push(new _list_js__WEBPACK_IMPORTED_MODULE_0__["default"](item.task, item.index, item.isCompleted));
    (0,_crud_js__WEBPACK_IMPORTED_MODULE_1__["default"])(item.task, item.index, item.isCompleted);
  });
}

const updateTaskArray = (task) => {
  _list_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.push(new _list_js__WEBPACK_IMPORTED_MODULE_0__["default"](task, _list_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.length + 1, false));
};

returnBtn.addEventListener('click', () => {
  (0,_crud_js__WEBPACK_IMPORTED_MODULE_1__["default"])(addInput.value, _list_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.length + 1, false);
  updateTaskArray(addInput.value);
  (0,_saveTasksToLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  addInput.value = '';
});

createTaskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    (0,_crud_js__WEBPACK_IMPORTED_MODULE_1__["default"])(addInput.value, _list_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.length + 1, false);
    updateTaskArray(addInput.value);
    (0,_saveTasksToLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    addInput.value = '';
  }
});
clearAll.addEventListener('click', (e) => {
  e.preventDefault();
  const allTasks = document.querySelectorAll('.list-item');
  allTasks.forEach((item) => {
    if (item.classList.value.includes('completed')) {
      item.remove();
      _list_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteCompleted();
    }
  });
  (0,_saveTasksToLocalStorage_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const listItems = document.querySelectorAll('.list-item');
  listItems.forEach((listItem, index) => {
    listItem.setAttribute('id', index + 1);
  });
});


/***/ }),

/***/ "./src/modules/saveTasksToLocalStorage.js":
/*!************************************************!*\
  !*** ./src/modules/saveTasksToLocalStorage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "./src/modules/list.js");


const saveTasksToLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(_list_js__WEBPACK_IMPORTED_MODULE_0__["default"].taskList));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveTasksToLocalStorage);


/***/ }),

/***/ "./src/assets/delete.png":
/*!*******************************!*\
  !*** ./src/assets/delete.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "adc38f9229d4e1221b10.png";

/***/ }),

/***/ "./src/assets/reset-icon.png":
/*!***********************************!*\
  !*** ./src/assets/reset-icon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3f95cd01e203ac67f1b.png";

/***/ }),

/***/ "./src/assets/return-icon.png":
/*!************************************!*\
  !*** ./src/assets/return-icon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa544f635765db738d2e.png";

/***/ }),

/***/ "./src/assets/verticle-menu.png":
/*!**************************************!*\
  !*** ./src/assets/verticle-menu.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5503806f9a9cffbe0dae.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQixnRUFBcUI7QUFDM0M7QUFDQSxFQUFFLHVFQUFPO0FBQ1Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLG9EQUFHLGlCQUFpQixnRUFBcUI7QUFDN0M7QUFDQSxJQUFJLHVFQUFPO0FBQ1g7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdFQUFxQjtBQUMzQjtBQUNBLEdBQUc7QUFDSCxFQUFFLHVFQUFPO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRDRCOztBQUU3QjtBQUNBLCtDQUErQyx5REFBYTtBQUM1RDs7QUFFQSxpRUFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvY3J1ZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZHJhZ0Ryb3AuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3NhdmVUYXNrc1RvTG9jYWxTdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy92ZXJ0aWNsZS1tZW51LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2RlbGV0ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9yZXNldC1pY29uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL3JldHVybi1pY29uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogc2VyaWYsIG1vbm9zcGFjZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAjNjY2O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyMHZoO1xcclxcbiAgbGVmdDogMzB2dztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogaGVhZGVyICovXFxyXFxuXFxyXFxuLmhlYWRpbmcge1xcclxcbiAgcGFkZGluZzogMTVweCAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmcgcCB7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBjb2xvcjogIzQ0NDtcXHJcXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgNXB4ICNkMWNlY2U7XFxyXFxufVxcclxcblxcclxcbi5hZGQtaXRlbSB7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWl0ZW0gaW5wdXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpbnB1dCB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCA1cHggI2QxY2VjZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbGlzdCAqL1xcclxcbi50by1kby1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgY29sb3I6ICM0NDQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0gLmNyb3NzIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcXHJcXG4gIGhlaWdodDogMjFweDtcXHJcXG4gIHdpZHRoOiAyMXB4O1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoMC41KTtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpZWxkLWZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWZmZTk7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0gLmRlbC1idG4ge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcXHJcXG4gIGhlaWdodDogMjFweDtcXHJcXG4gIHdpZHRoOiAyMXB4O1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoMC41KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbC1idG46aG92ZXIge1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0LWkge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xcclxcbiAgaGVpZ2h0OiAyMXB4O1xcclxcbiAgd2lkdGg6IDIxcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXR1cm4taSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDAuNSk7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZCAudGFzay1kZXNjcmlwdGlvbiB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGNvbG9yOiAjNjY2O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb290ZXIgKi9cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzc3NztcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsT0FBTztBQUNUOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixlQUFlO0VBQ2YsK0JBQStCO0FBQ2pDOztBQUVBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpRkFBeUU7RUFDekUsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUZBQWtFO0VBQ2xFLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUZBQXNFO0VBQ3RFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpRkFBdUU7RUFDdkUsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQSxXQUFXOztBQUVYO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogc2VyaWYsIG1vbm9zcGFjZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAjNjY2O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyMHZoO1xcclxcbiAgbGVmdDogMzB2dztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLyogaGVhZGVyICovXFxyXFxuXFxyXFxuLmhlYWRpbmcge1xcclxcbiAgcGFkZGluZzogMTVweCAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmcgcCB7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBjb2xvcjogIzQ0NDtcXHJcXG4gIHRleHQtc2hhZG93OiAtMXB4IDAgNXB4ICNkMWNlY2U7XFxyXFxufVxcclxcblxcclxcbi5hZGQtaXRlbSB7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWl0ZW0gaW5wdXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpbnB1dCB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZiwgbW9ub3NwYWNlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCA1cHggI2QxY2VjZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbGlzdCAqL1xcclxcbi50by1kby1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pdGVtIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgY29sb3I6ICM0NDQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0gLmNyb3NzIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4vYXNzZXRzL3ZlcnRpY2xlLW1lbnUucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcXHJcXG4gIGhlaWdodDogMjFweDtcXHJcXG4gIHdpZHRoOiAyMXB4O1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoMC41KTtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpZWxkLWZvY3VzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWZmZTk7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW0gLmRlbC1idG4ge1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4vYXNzZXRzL2RlbGV0ZS5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xcclxcbiAgaGVpZ2h0OiAyMXB4O1xcclxcbiAgd2lkdGg6IDIxcHg7XFxyXFxuICBmaWx0ZXI6IGludmVydCgwLjUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsLWJ0bjpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IGludmVydCgwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQtaSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguL2Fzc2V0cy9yZXNldC1pY29uLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XFxyXFxuICBoZWlnaHQ6IDIxcHg7XFxyXFxuICB3aWR0aDogMjFweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJldHVybi1pIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKC4vYXNzZXRzL3JldHVybi1pY29uLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XFxyXFxuICBoZWlnaHQ6IDEwcHg7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG4gIGZpbHRlcjogaW52ZXJ0KDAuNSk7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlZCAudGFzay1kZXNjcmlwdGlvbiB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGNvbG9yOiAjNjY2O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb290ZXIgKi9cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIHBhZGRpbmc6IDE1cHggMTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogIzc3NztcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL21vZHVsZXMvbWFpbi5qc1wiO1xuIiwiaW1wb3J0IHRhc2tzIGZyb20gJy4vbGlzdC5qcyc7XG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuL3NhdmVUYXNrc1RvTG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCBkcmFnRHJvcCBmcm9tICcuL2RyYWdEcm9wLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVGFzayh0YXNrSXRlbSwgaW5kZXgsIGNvbXBsZXRlKSB7XG4gIGlmICghdGFza0l0ZW0pIHJldHVybjtcblxuICBjb25zdCByZWZyZXNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LWknKTtcbiAgY29uc3QgbGlzdFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG8tbGlzdCcpO1xuICBjb25zdCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YXNrV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0nKTtcbiAgdGFza1dyYXBwZXIuc2V0QXR0cmlidXRlKCdpZCcsIGluZGV4KTtcbiAgdGFza1dyYXBwZXIuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKTtcblxuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gIGlmIChjb21wbGV0ZSkge1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIHRhc2tXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xuICB9XG4gIGNvbnN0IGJ0bldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZHJhZ0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgZHJhZ0J0bi5jbGFzc0xpc3QuYWRkKCdjcm9zcycpO1xuICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWwtYnRuJyk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGVzY3JpcHRpb24udHlwZSA9ICd0ZXh0JztcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpO1xuICBkZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2tJdGVtO1xuICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICB0YXNrV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdmaWVsZC1mb2N1cycpO1xuICAgIGRlbEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkcmFnQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgIHRhc2tXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2ZpZWxkLWZvY3VzJyk7XG4gIH0pO1xuICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBjb25zdCBpbmRleCA9ICt0YXNrV3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2lkJykgLSAxO1xuICAgIHRhc2tzLnRhc2tMaXN0W2luZGV4XS51cGRhdGVUYXNrKGRlc2NyaXB0aW9uLnZhbHVlKTtcbiAgICBzdG9yYWdlKCk7XG4gIH0pO1xuXG4gIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB0aGVUYXNrID0gZGVsQnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB0YXNrcy5kZWxldGVUYXNrKCt0aGVUYXNrLmdldEF0dHJpYnV0ZSgnaWQnKSk7XG4gICAgdGhlVGFzay5yZW1vdmUoKTtcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1pdGVtJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0SXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGxpc3RJdGVtc1tpXS5zZXRBdHRyaWJ1dGUoJ2lkJywgaSArIDEpO1xuICAgIH1cbiAgICBzdG9yYWdlKCk7XG4gIH0pO1xuICByZWZyZXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRlbEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRyYWdCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0pO1xuICBkcmFnQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRyYWdEcm9wKCk7XG4gIH0pO1xuICBjb25zdCB0b2dnbGVDb21wbGV0ZWQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGNoZWNrUGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IGluZGV4ID0gK2NoZWNrUGFyZW50LmdldEF0dHJpYnV0ZSgnaWQnKSAtIDE7XG4gICAgdGFza3MudGFza0xpc3RbaW5kZXhdLnRvZ2dsZUNvbXBsZXRlZCgpO1xuICAgIGNoZWNrUGFyZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xuICAgIHN0b3JhZ2UoKTtcbiAgfTtcblxuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0b2dnbGVDb21wbGV0ZWQpO1xuICBidG5XcmFwcGVyLmFwcGVuZENoaWxkKGRlbEJ0bik7XG4gIHRhc2suYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICB0YXNrLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgdGFzay5hcHBlbmRDaGlsZChkcmFnQnRuKTtcbiAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFzayk7XG4gIHRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKGJ0bldyYXBwZXIpO1xuICBsaXN0V3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrV3JhcHBlcik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1pdGVtJyk7XG5cbiAgY29uc3QgZHJhZ1N0YXJ0ID0gKGUpID0+IHtcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZS50YXJnZXQuaWQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH0sIDApO1xuICB9O1xuXG4gIGNvbnN0IGRyYWdFbnRlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWctb3ZlcicpO1xuICB9O1xuXG4gIGNvbnN0IGRyYWdPdmVyID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZy1vdmVyJyk7XG4gIH07XG5cbiAgY29uc3QgZHJhZ0xlYXZlID0gKGUpID0+IHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLW92ZXInKTtcbiAgfTtcblxuICBjb25zdCBkcm9wID0gKGUpID0+IHtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLW92ZXInKTtcbiAgICBjb25zdCBpZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcbiAgICBjb25zdCBkcmFnZ2FibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgY29uc3QgbGlzdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50by1kby1saXN0Jyk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChkcmFnZ2FibGUpO1xuICAgIGRyYWdnYWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH07XG5cbiAgdGFzay5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnQpO1xuICBjb25zdCBsaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kby1saXN0Jyk7XG4gIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcCk7XG4gIH0pO1xufTtcbiIsImNsYXNzIExpc3Qge1xuICBjb25zdHJ1Y3Rvcih0YXNrLCBpbmRleCwgY29tcGxldGUpIHtcbiAgICB0aGlzLnRhc2sgPSB0YXNrO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gY29tcGxldGU7XG4gIH1cblxuICBzdGF0aWMgdGFza0xpc3QgPSBbXTtcblxuICB0b2dnbGVDb21wbGV0ZWQoKSB7XG4gICAgdGhpcy5pc0NvbXBsZXRlZCA9ICF0aGlzLmlzQ29tcGxldGVkO1xuICB9XG5cbiAgdXBkYXRlVGFzayh0ZXh0KSB7XG4gICAgdGhpcy50YXNrID0gdGV4dDtcbiAgfVxuXG4gIHN0YXRpYyByZWluZGV4KCkge1xuICAgIExpc3QudGFza0xpc3QuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xuICAgICAgdGFzay5pbmRleCA9IGkgKyAxO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlbGV0ZVRhc2soaSkge1xuICAgIExpc3QudGFza0xpc3QgPSBMaXN0LnRhc2tMaXN0LmZpbHRlcigoZWFjaCkgPT4gZWFjaC5pbmRleCAhPT0gaSk7XG4gICAgTGlzdC5yZWluZGV4KCk7XG4gIH1cblxuICBzdGF0aWMgZGVsZXRlQ29tcGxldGVkKCkge1xuICAgIExpc3QudGFza0xpc3QgPSBMaXN0LnRhc2tMaXN0LmZpbHRlcigoZWFjaCkgPT4gIWVhY2guaXNDb21wbGV0ZWQpO1xuICAgIExpc3QucmVpbmRleCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iLCJpbXBvcnQgVGFza3MgZnJvbSAnLi9saXN0LmpzJztcbmltcG9ydCBhZGQgZnJvbSAnLi9jcnVkLmpzJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UuanMnO1xuXG5jb25zdCBhZGRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbSBpbnB1dCcpO1xuY29uc3QgcmV0dXJuQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldHVybi1pJyk7XG5jb25zdCBjcmVhdGVUYXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRhc2snKTtcbmNvbnN0IGNsZWFyQWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyQ29tcGxldGVkJyk7XG5cbmlmIChsb2NhbFN0b3JhZ2UudGFza3MpIHtcbiAgY29uc3Qgc3RvcmVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrcyk7XG4gIHN0b3JlZFRhc2tzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBUYXNrcy50YXNrTGlzdC5wdXNoKG5ldyBUYXNrcyhpdGVtLnRhc2ssIGl0ZW0uaW5kZXgsIGl0ZW0uaXNDb21wbGV0ZWQpKTtcbiAgICBhZGQoaXRlbS50YXNrLCBpdGVtLmluZGV4LCBpdGVtLmlzQ29tcGxldGVkKTtcbiAgfSk7XG59XG5cbmNvbnN0IHVwZGF0ZVRhc2tBcnJheSA9ICh0YXNrKSA9PiB7XG4gIFRhc2tzLnRhc2tMaXN0LnB1c2gobmV3IFRhc2tzKHRhc2ssIFRhc2tzLnRhc2tMaXN0Lmxlbmd0aCArIDEsIGZhbHNlKSk7XG59O1xuXG5yZXR1cm5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGFkZChhZGRJbnB1dC52YWx1ZSwgVGFza3MudGFza0xpc3QubGVuZ3RoICsgMSwgZmFsc2UpO1xuICB1cGRhdGVUYXNrQXJyYXkoYWRkSW5wdXQudmFsdWUpO1xuICBzdG9yYWdlKCk7XG4gIGFkZElucHV0LnZhbHVlID0gJyc7XG59KTtcblxuY3JlYXRlVGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgYWRkKGFkZElucHV0LnZhbHVlLCBUYXNrcy50YXNrTGlzdC5sZW5ndGggKyAxLCBmYWxzZSk7XG4gICAgdXBkYXRlVGFza0FycmF5KGFkZElucHV0LnZhbHVlKTtcbiAgICBzdG9yYWdlKCk7XG4gICAgYWRkSW5wdXQudmFsdWUgPSAnJztcbiAgfVxufSk7XG5jbGVhckFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1pdGVtJyk7XG4gIGFsbFRhc2tzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ2NvbXBsZXRlZCcpKSB7XG4gICAgICBpdGVtLnJlbW92ZSgpO1xuICAgICAgVGFza3MuZGVsZXRlQ29tcGxldGVkKCk7XG4gICAgfVxuICB9KTtcbiAgc3RvcmFnZSgpO1xuICBjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1pdGVtJyk7XG4gIGxpc3RJdGVtcy5mb3JFYWNoKChsaXN0SXRlbSwgaW5kZXgpID0+IHtcbiAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgaW5kZXggKyAxKTtcbiAgfSk7XG59KTtcbiIsImltcG9ydCBMaXN0IGZyb20gJy4vbGlzdC5qcyc7XG5cbmNvbnN0IHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShMaXN0LnRhc2tMaXN0KSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==