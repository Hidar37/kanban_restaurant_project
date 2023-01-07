/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  font-family: cursive;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  background-color: #ffe200;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 1rem 2rem;\\r\\n  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;\\r\\n}\\r\\n\\r\\n.nav .logo i {\\r\\n  font-size: 3rem;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.nav .navbar-nav {\\r\\n  display: flex;\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n.navbar-nav .nav-item {\\r\\n  margin: auto 2rem;\\r\\n  font-size: 1.3rem;\\r\\n  color: #fff;\\r\\n  border-bottom: 2px solid #fff;\\r\\n}\\r\\n\\r\\n/* Card Section */\\r\\n.card-wrapper {\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.card-wrapper .card {\\r\\n  background-color: #ffe200;\\r\\n  width: 25%;\\r\\n  margin: 3rem;\\r\\n  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;\\r\\n  border-radius: 1rem;\\r\\n  color: #fff;\\r\\n  transition: all 0.5s;\\r\\n}\\r\\n\\r\\n.card-wrapper .card:hover {\\r\\n  scale: 1.01;\\r\\n}\\r\\n\\r\\n.card-wrapper .card-header img {\\r\\n  width: 100%;\\r\\n  height: 300px;\\r\\n  object-fit: cover;\\r\\n  border-radius: 1rem 1rem 0 0;\\r\\n}\\r\\n\\r\\n.card-header .meal-name {\\r\\n  font-size: 1.5rem;\\r\\n  text-decoration: underline;\\r\\n  margin-bottom: 0.5rem;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.card-footer {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.card-footer .button-wrapper {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.card-footer .button-wrapper > p {\\r\\n  margin-left: 1rem;\\r\\n}\\r\\n\\r\\n.card-footer p i.btn {\\r\\n  color: #f00;\\r\\n  font-size: 1.8rem;\\r\\n  transition: all 0.5s;\\r\\n}\\r\\n\\r\\n.card-footer p i.btn:hover {\\r\\n  cursor: pointer;\\r\\n  scale: 1.1;\\r\\n}\\r\\n\\r\\n.card-footer p i.btn:active {\\r\\n  color: #f30;\\r\\n}\\r\\n\\r\\n.like-total-box {\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.like-total-box #like-total {\\r\\n  font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  display: flex;\\r\\n  flex-flow: row wrap;\\r\\n  padding: 30px 30px 20px 30px;\\r\\n  color: #2f2f2f;\\r\\n  background-color: #fff;\\r\\n  border-top: 1px solid #e5e5e5;\\r\\n}\\r\\n\\r\\n.footer > * {\\r\\n  flex: 1 100%;\\r\\n}\\r\\n\\r\\n.footer__addr {\\r\\n  margin-right: 1.25em;\\r\\n  margin-bottom: 2em;\\r\\n}\\r\\n\\r\\n.footer__logo {\\r\\n  font-family: 'Pacifico', cursive;\\r\\n  font-weight: 400;\\r\\n  text-transform: lowercase;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.footer__addr h2 {\\r\\n  margin-top: 1.3em;\\r\\n  font-size: 15px;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n.nav__title {\\r\\n  font-weight: 400;\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.footer address {\\r\\n  font-style: normal;\\r\\n  color: #999;\\r\\n}\\r\\n\\r\\n.footer__btn {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  height: 36px;\\r\\n  max-width: max-content;\\r\\n  background-color: rgb(33, 33, 33, 0.07);\\r\\n  border-radius: 100px;\\r\\n  color: #2f2f2f;\\r\\n  line-height: 0;\\r\\n  margin: 0.6em 0;\\r\\n  font-size: 1rem;\\r\\n  padding: 0 1.3em;\\r\\n}\\r\\n\\r\\n.footer ul {\\r\\n  list-style: none;\\r\\n  padding-left: 0;\\r\\n}\\r\\n\\r\\n.footer li {\\r\\n  line-height: 2em;\\r\\n}\\r\\n\\r\\n.footer a {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.footer__nav {\\r\\n  display: flex;\\r\\n  flex-flow: row wrap;\\r\\n}\\r\\n\\r\\n.footer__nav > * {\\r\\n  flex: 1 50%;\\r\\n  margin-right: 1.25em;\\r\\n}\\r\\n\\r\\n.nav__ul a {\\r\\n  color: #999;\\r\\n}\\r\\n\\r\\n.nav__ul--extra {\\r\\n  column-count: 2;\\r\\n  column-gap: 1.25em;\\r\\n}\\r\\n\\r\\n.legal {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  color: #999;\\r\\n}\\r\\n\\r\\n.legal__links {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.heart {\\r\\n  color: #2f2f2f;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 24.375em) {\\r\\n  .legal .legal__links {\\r\\n    margin-left: auto;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 40.375em) {\\r\\n  .footer__nav > * {\\r\\n    flex: 1;\\r\\n  }\\r\\n\\r\\n  .nav__item--extra {\\r\\n    flex-grow: 2;\\r\\n  }\\r\\n\\r\\n  .footer__addr {\\r\\n    flex: 1 0;\\r\\n  }\\r\\n\\r\\n  .footer__nav {\\r\\n    flex: 2 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  position: absolute;\\r\\n  left: 30%;\\r\\n  gap: 0.4rem;\\r\\n  width: 450px;\\r\\n  padding: 1.3rem;\\r\\n  min-height: 200px;\\r\\n  z-index: 2;\\r\\n  top: 1%;\\r\\n  background-color: white;\\r\\n  border: 1px solid #ddd;\\r\\n  border-radius: 15px;\\r\\n}\\r\\n\\r\\n.modal .flex {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.modal input {\\r\\n  padding: 0.7rem 1rem;\\r\\n  border: 1px solid #ddd;\\r\\n  border-radius: 5px;\\r\\n  font-size: 0.9em;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  cursor: pointer;\\r\\n  border: none;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  display: inline-block;\\r\\n  padding: 0.8rem 1.4rem;\\r\\n  font-weight: 700;\\r\\n  background-color: black;\\r\\n  color: white;\\r\\n  border-radius: 5px;\\r\\n  text-align: center;\\r\\n  font-size: 1em;\\r\\n}\\r\\n\\r\\n.btn-open {\\r\\n  position: absolute;\\r\\n  bottom: 150px;\\r\\n}\\r\\n\\r\\n.btn-close {\\r\\n  transform: translate(10px, -20px);\\r\\n  padding: 0.5rem 0.7rem;\\r\\n  background: #eee;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n.overlay {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background: rgba(0, 0, 0, 0.5);\\r\\n  backdrop-filter: blur(3px);\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/API_module/itemCounter.js":
/*!***************************************!*\
  !*** ./src/API_module/itemCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ItemCounter)\n/* harmony export */ });\nclass ItemCounter {\n  constructor() {\n    this.gameName = 'Restaurant Game';\n  }\n\n  // Count Page Item\n  countItem = () => {\n    const card = document.querySelectorAll('.card');\n    return card.length;\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./src/API_module/itemCounter.js?");

/***/ }),

/***/ "./src/API_module/mealDB_API.js":
/*!**************************************!*\
  !*** ./src/API_module/mealDB_API.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MealDbApi)\n/* harmony export */ });\nclass MealDbApi {\n  constructor() {\n    this.gameName = 'Restaurant Game';\n  }\n\n  // Display all items in the home page\n  fetchItems = async () => {\n    const items = await fetch(\n      'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',\n    );\n    const jsonItems = await items.json();\n    return jsonItems;\n  }\n\n  // **************************** Involvement API\n  // Display all like (count)\n  countLikes = async () => {\n    const items = await fetch(\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WRV6w2hffKlaWDzIZ2ed/likes',\n    );\n    const jsonItems = await items.json();\n    return jsonItems;\n  }\n\n  // Like Item\n  likeItem = async (likedItemID) => {\n    const like = await fetch(\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WRV6w2hffKlaWDzIZ2ed/likes',\n      {\n        method: 'POST',\n        body: JSON.stringify({\n          item_id: `${likedItemID}`,\n        }),\n        headers: {\n          'Content-type': 'application/json; charset=UTF-8',\n        },\n      },\n    );\n    return like;\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/API_module/mealDB_API.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _API_module_mealDB_API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API_module/mealDB_API.js */ \"./src/API_module/mealDB_API.js\");\n/* harmony import */ var _API_module_itemCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API_module/itemCounter.js */ \"./src/API_module/itemCounter.js\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n\n\n\n\nconst mealDB = new _API_module_mealDB_API_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst itemCounter = new _API_module_itemCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nconst modal = document.querySelector('.modal');\nconst overlay = document.querySelector('.overlay');\nconst closeModalBtn = document.querySelector('.btn-close');\nconst urlDataId = 'Lg1NwTSFJSG37nTmEN8x';\nconst urlDataGetLikes = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${urlDataId}/likes/?item_id=`;\nconst urlDataPostComments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${urlDataId}/comments/`;\nconst urlDataGetComments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${urlDataId}/comments?item_id=`;\nconst itemCountLocation = document.getElementById('item_count');\n\n// close modal function\nconst closeModal = function () {\n  modal.classList.add('hidden');\n  overlay.classList.add('hidden');\n};\n\nconst postDataComments = async (id, user, usercomment) => {\n  const comment = await fetch(urlDataPostComments, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: id,\n      username: user,\n      comment: usercomment,\n    }),\n    headers: {\n      'Content-Type': 'application/json;charset=utf-8',\n    },\n  });\n  const data = await comment.json();\n  return data;\n};\n\nconst countComments = (commentsObj) => {\n  const counter2 = document.querySelector('.cmnc');\n  let commentsCounter = 0;\n  commentsObj.forEach((element) => {\n    commentsCounter += 1;\n    console.log(element);\n  });\n  counter2.innerHTML = `Number of comments: ${commentsCounter}`;\n};\n\nconst injetcCaptureComments = (commentsObj, id) => {\n  commentsObj.forEach((element) => {\n    const date = element.creation_date;\n    const user = element.username;\n    const usercomment = element.comment;\n\n    const comments = document.querySelector('.comments');\n    comments.innerHTML += `${date}----${user}----${usercomment}<br>`;\n  });\n  const submit = document.querySelector('.btn-pst');\n  submit.addEventListener('click', () => {\n    const username = document.getElementById('name_');\n    const usernameValue = username.value;\n    const usercomment = document.getElementById('comment_');\n    const userCommentValue = usercomment.value;\n    if (usernameValue !== null && userCommentValue !== null) {\n      postDataComments(id, usernameValue, userCommentValue);\n\n      const comments = document.querySelector('.comments');\n      const d = new Date();\n      const year = d.getFullYear();\n      const month = d.getMonth() + 1;\n      const day = d.getDay() + 3;\n\n      comments.innerHTML += `${year}-${month}-${day}----${usernameValue}----${userCommentValue}<br>`;\n      username.value = '';\n      usercomment.value = '';\n    } else {\n      const error = document.querySelector('.errormessage');\n      const errormessage = document.createElement('h4');\n      errormessage.innerHTML = 'Please, type your name and your comment. Thank you.';\n      error.appendChild(errormessage);\n    }\n  });\n};\n\nconst getDataComments = async (id) => {\n  const results3 = await fetch(`${urlDataGetComments}${id}`);\n  const commentsObj = await results3.json();\n  injetcCaptureComments(commentsObj, id);\n  countComments(commentsObj);\n  return commentsObj;\n};\n\n// close the modal when the close button and overlay is clicked\ncloseModalBtn.addEventListener('click', closeModal);\noverlay.addEventListener('click', closeModal);\n\n// close modal when the Esc key is pressed\ndocument.addEventListener('keydown', (e) => {\n  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {\n    closeModal();\n  }\n});\n\nconst getDataLikes = async (id) => {\n  const results3 = await fetch(`${urlDataGetLikes}${id}`);\n  const commentsObj = await results3.json();\n  commentsObj.forEach((element) => {\n    if (id === element.item_id) {\n      document.getElementById(`l${id}`).textContent = element.likes;\n    }\n  });\n  return commentsObj;\n};\n\n// open modal function\nconst openModal = function () {\n  modal.classList.remove('hidden');\n  overlay.classList.remove('hidden');\n};\n// mealDB.fetchItems();\n// Porgarmm Starts form here:\n// =============================\nconst displayItems = () => {\n  mealDB.fetchItems().then((itemPromis) => {\n    itemPromis.meals.forEach((arrayElement, index) => {\n      const showAllDiv = document.getElementById('card-wrapper');\n      // card wrapper\n      const cardDiv = document.createElement('div');\n      cardDiv.setAttribute('class', 'card');\n      // Card Header\n      const cardHeader = document.createElement('div');\n      cardHeader.setAttribute('class', 'card-header');\n      const cardHeaderImg = document.createElement('img');\n      cardHeaderImg.setAttribute('class', 'meal-img');\n      cardHeaderImg.setAttribute('src', `${arrayElement.strMealThumb}`);\n      const cardHeadertext = document.createElement('p');\n      cardHeadertext.setAttribute('class', 'meal-name');\n      cardHeadertext.textContent = arrayElement.strMeal;\n      // Card Footer\n      const cardFooter = document.createElement('div');\n      cardFooter.setAttribute('class', 'card-footer');\n      const cardFooterBtnWrapper = document.createElement('div');\n      cardFooterBtnWrapper.setAttribute('class', 'button-wrapper');\n      // like\n      const likeBox = document.createElement('p');\n      likeBox.setAttribute('class', 'like-box');\n      const likeBtn = document.createElement('i');\n      likeBtn.setAttribute('id', `${arrayElement.idMeal}l`);\n      likeBtn.setAttribute('class', 'fa-solid');\n      likeBtn.classList.add('fa-heart', 'btn');\n      likeBtn.addEventListener('click', (e) => {\n        mealDB.likeItem(e.target.id).then((res) => {\n          console.log(res.status);\n          window.location.reload();\n        });\n      });\n      // comment\n      const commentBox = document.createElement('p');\n      likeBox.setAttribute('class', 'comment-box');\n      const commentBtn = document.createElement('i');\n      commentBtn.setAttribute('id', `${arrayElement.idMeal}c`);\n      commentBtn.setAttribute('class', 'fa-solid');\n      commentBtn.classList.add('fa-comment', 'btn');\n      // Add Event for(comment) btn\n      commentBtn.addEventListener('click', (e) => {\n        const ids = e.target.id;\n        openModal();\n        const cmnc = document.querySelector('.cmnc');\n        cmnc.innerHTML = '';\n        const comments = document.querySelector('.comments');\n        comments.innerHTML = '';\n\n        const img = document.querySelector('.imgs');\n        img.setAttribute('src', `${arrayElement.strMealThumb}`);\n\n        getDataComments(e.target.id);\n        document.getElementById('ftt').innerHTML = arrayElement.strMeal;\n        document.getElementById('hdvals').value = ids;\n      });\n      // Like Count\n      const divLikeTotal = document.createElement('div');\n      const likeTotalBox = document.createElement('p');\n      likeTotalBox.setAttribute('class', 'like-total-box');\n      likeTotalBox.textContent = 'Likes ';\n      const likeTotal = document.createElement('span');\n      likeTotal.setAttribute('id', `l${arrayElement.idMeal}l`);\n      mealDB.countLikes().then((res) => {\n        likeTotal.textContent = `${res[index].likes}`;\n      });\n      getDataLikes(arrayElement.idMeal);\n      // Adding Created Elements in the page\n      showAllDiv.appendChild(cardDiv);\n      cardDiv.append(cardHeader, cardFooter);\n      // card Header append child\n      cardHeader.append(cardHeaderImg, cardHeadertext);\n      // card Footer append child\n      cardFooter.append(cardFooterBtnWrapper, divLikeTotal);\n      // append child to button wrapper\n      cardFooterBtnWrapper.append(likeBox, commentBox);\n      // append child to likeBox and CommentBox\n      likeBox.appendChild(likeBtn);\n      commentBox.appendChild(commentBtn);\n      // Append liks count\n      divLikeTotal.appendChild(likeTotalBox);\n      likeTotalBox.appendChild(likeTotal);\n    });\n    // Count DIV element in the page.\n    const jan = itemCounter.countItem();\n    itemCountLocation.textContent = jan;\n  });\n};\n\n// Main Body\ndisplayItems();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;