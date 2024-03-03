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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --grid-size: 450px;\r\n  --container-size: ;\r\n  --matte-black: #28282b;\r\n  --matte-red: #b22222;\r\n  --white: #f2f3f4;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  color: var(--matte-black);\r\n}\r\n\r\n#app {\r\n  height: 100dvh;\r\n  min-width: 1000px;\r\n  border: 1px solid black;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n  padding: 30px;\r\n  position: relative;\r\n  background-color: var(--white);\r\n}\r\n\r\n#get-name {\r\n  width: 300px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: var(--white);\r\n  border: 5px solid var(--matte-black);\r\n  border-radius: 5px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 30px;\r\n  gap: 10px;\r\n}\r\n\r\n#get-name > input,\r\n#get-name > button {\r\n  padding: 10px 20px;\r\n  font-size: 1.2rem;\r\n  border: none;\r\n  border-radius: 5px;\r\n  border: 2px solid var(--matte-black);\r\n  background-color: transparent;\r\n  color: var(--matte-black);\r\n  text-align: center;\r\n  font-weight: bolder;\r\n}\r\n\r\n.human-container,\r\n.bot-container {\r\n  min-width: 500px;\r\n  height: 90%;\r\n  flex-grow: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.human-name,\r\n.bot-name {\r\n  text-align: center;\r\n}\r\n\r\n.human-board,\r\n.bot-board {\r\n  width: var(--grid-size);\r\n  height: var(--grid-size);\r\n  border: 5px solid var(--matte-black);\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n}\r\n\r\n.winner-div {\r\n  position: absolute;\r\n  z-index: 2;\r\n  width: 400px;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border: 2px solid black;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 20px;\r\n  gap: 10px;\r\n  font-size: 1.5rem;\r\n  background-color: var(--matte-black);\r\n}\r\n\r\n.winner-div > p,\r\n.winner-div > button {\r\n  color: var(--white);\r\n  font-weight: bolder;\r\n  text-align: center;\r\n}\r\n\r\n.winner-div > button {\r\n  padding: 10px;\r\n  border: 2px solid var(--white);\r\n  border-radius: 5px;\r\n  background-color: transparent;\r\n}\r\n\r\n.cells {\r\n  border: 1px solid var(--matte-black);\r\n}\r\n\r\n.ship {\r\n  background-color: var(--matte-black);\r\n}\r\n\r\n.temp-ship {\r\n  background-color: darkslategrey;\r\n}\r\n\r\n.hit {\r\n  background-color: var(--matte-red);\r\n  border: 1px solid var(--matte-red);\r\n}\r\n\r\n.missed {\r\n  background-color: gray;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship-odin/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship-odin/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship-odin/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship-odin/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship-odin/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship-odin/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship-odin/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship-odin/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship-odin/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship-odin/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCells: () => (/* binding */ createCells),\n/* harmony export */   deactivateCell: () => (/* binding */ deactivateCell),\n/* harmony export */   getPlayerName: () => (/* binding */ getPlayerName),\n/* harmony export */   showBotBoard: () => (/* binding */ showBotBoard),\n/* harmony export */   showPlayerBoard: () => (/* binding */ showPlayerBoard),\n/* harmony export */   showShipAxis: () => (/* binding */ showShipAxis),\n/* harmony export */   showWinner: () => (/* binding */ showWinner),\n/* harmony export */   updateBoard: () => (/* binding */ updateBoard),\n/* harmony export */   updateCell: () => (/* binding */ updateCell)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\r\n\r\nconst BOT_BOARD = document.querySelector(\".bot-board\");\r\nconst PLAYER_BOARD = document.querySelector(\".human-board\");\r\n\r\nconst createCells = (container, x, y, owner) => {\r\n  const cellDiv = document.createElement(\"div\");\r\n  cellDiv.dataset.x = x;\r\n  cellDiv.dataset.y = y;\r\n  cellDiv.dataset.owner = owner;\r\n  cellDiv.dataset.active = \"Y\";\r\n  cellDiv.classList.add(\"cells\");\r\n  container.append(cellDiv);\r\n  return cellDiv;\r\n};\r\n\r\nconst updateCell = (x, y, owner, mark) => {\r\n  const cell = document.querySelector(`[data-x=\"${x}\"][data-y=\"${y}\"][data-owner=\"${owner}\"]`);\r\n  cell.classList.add(`${mark}`);\r\n};\r\n\r\nconst deactivateCell = (c) => (c.dataset.active = \"N\");\r\n\r\nfunction getPlayerName() {\r\n  const form = document.querySelector(\"#get-name\");\r\n  let name = document.querySelector(\"#name\");\r\n  return new Promise((res, rej) => {\r\n    form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n      name = name.value;\r\n      e.target.setAttribute(\"style\", \"display: none\");\r\n      res(name);\r\n    });\r\n  });\r\n}\r\n\r\nfunction updateBoard(board, mark, x, y, bot) {\r\n  updateCell(x, y, board.owner, mark);\r\n  if (mark === \"hit\") {\r\n    const ship = board.grid[x][y];\r\n    const cells = ship.sunk ? ship.neighborCells : board.getCornerCells(x, y);\r\n    for (const [cx, cy] of cells) {\r\n      const c = document.querySelector(\r\n        `[data-x=\"${cx}\"][data-y=\"${cy}\"][data-owner=\"${board.owner}\"]`\r\n      );\r\n      deactivateCell(c);\r\n      updateCell(cx, cy, board.owner, \"missed\");\r\n      if (board.owner === \"human\") bot.prevAtks.push(`${cx},${cy}`);\r\n    }\r\n  }\r\n}\r\n\r\nfunction showWinner(win) {\r\n  const winnerDiv = document.createElement(\"div\");\r\n  winnerDiv.classList.add(\"winner-div\");\r\n\r\n  const winMsg = document.createElement(\"p\");\r\n  const playerName = document.querySelector(\".human-name\").innerText;\r\n  const winningText = `Congratulations ${playerName}! You've sunk all of your opponent's ships and won the game of Battleship!`;\r\n  const losingText = `Game over ${playerName}! Unfortunately, all of your ships have been sunk by your opponent. Better luck next time!`;\r\n  winMsg.innerHTML = win ? winningText : losingText;\r\n\r\n  const playAgainBtn = document.createElement(\"button\");\r\n  playAgainBtn.innerText = `Play again?`;\r\n  playAgainBtn.addEventListener(\"click\", () => window.location.reload());\r\n\r\n  winnerDiv.append(winMsg, playAgainBtn);\r\n\r\n  document.body.append(winnerDiv);\r\n  document.querySelector(\"#app\").style.filter = \"blur(5px)\";\r\n}\r\n\r\nfunction showPlayerBoard(name) {\r\n  const board = document.querySelector(\".human-container\");\r\n  const nameTag = document.querySelector(\".human-name\");\r\n  nameTag.innerText = name;\r\n  board.removeAttribute(\"style\");\r\n}\r\n\r\nfunction showBotBoard() {\r\n  const board = document.querySelector(\".bot-container\");\r\n  board.removeAttribute(\"style\");\r\n}\r\n\r\nfunction showShipAxis(show = true) {\r\n  const axisDiv = document.querySelector(\".ship-axis\");\r\n  const axis = document.querySelector(\"#axis\");\r\n  if (show) {\r\n    axisDiv.removeAttribute(\"style\");\r\n    axisDiv.addEventListener(\"click\", () => {\r\n      const text = axis.innerText === \"Horizontal\" ? \"Vertical\" : \"Horizontal\";\r\n      axis.innerText = text;\r\n    });\r\n  } else {\r\n    axisDiv.setAttribute(\"style\", \"display:none\");\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship-odin/./src/dom.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n\r\n\r\nfunction Gameboard(name) {\r\n  const gridSize = 10;\r\n  const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(null));\r\n  const shipArray = [];\r\n  const cellsArray = [];\r\n  const owner = name;\r\n\r\n  const isWithinBoard = (x, y) => x >= 0 && x <= 9 && y >= 0 && y <= 9;\r\n  const isValidCell = (x, y) => isWithinBoard(x, y) && grid[x][y] === null;\r\n  const allShipsSunk = () => shipArray.every((x) => x.sunk === true);\r\n\r\n  const getNeighborCells = (x, y) => {\r\n    const neighborCells = [\r\n      [x - 1, y],\r\n      [x + 1, y],\r\n      [x, y - 1],\r\n      [x, y + 1],\r\n      [x - 1, y - 1],\r\n      [x - 1, y + 1],\r\n      [x + 1, y + 1],\r\n      [x + 1, y - 1],\r\n    ];\r\n    return neighborCells\r\n      .filter(([x, y]) => isWithinBoard(x, y))\r\n      .filter(([x, y]) => !(grid[x][y] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship))\r\n      .sort();\r\n  };\r\n\r\n  const getCornerCells = (x, y) => {\r\n    const cornerCells = [\r\n      [x - 1, y - 1],\r\n      [x - 1, y + 1],\r\n      [x + 1, y + 1],\r\n      [x + 1, y - 1],\r\n    ];\r\n    return cornerCells.filter(([x, y]) => isWithinBoard(x, y)).sort();\r\n  };\r\n\r\n  return {\r\n    grid,\r\n    owner,\r\n    cellsArray,\r\n    shipArray,\r\n    isValidCell,\r\n    allShipsSunk,\r\n    getCornerCells,\r\n\r\n    placeShip: (ship, x, y, horizontal = true) => {\r\n      // set ship's coordinates\r\n      ship.coordinates = [];\r\n      for (let i = 0; i < ship.length; i++) {\r\n        const newX = horizontal ? x + i : x;\r\n        const newY = horizontal ? y : y + i;\r\n        ship.coordinates.push([newX, newY]);\r\n      }\r\n      // check if all cells in coordinate are valid\r\n      if (!ship.coordinates.every(([x, y]) => isValidCell(x, y))) {\r\n        ship.coordinates = [];\r\n        return false;\r\n      }\r\n      // store in shipArray\r\n      shipArray.push(ship);\r\n      // Put ship on every cell\r\n      ship.coordinates.map(([x, y]) => (grid[x][y] = ship));\r\n      // store neighbor cells\r\n      ship.neighborCells = [\r\n        ...new Set(\r\n          [...ship.coordinates.map(([x, y]) => getNeighborCells(x, y))].flat(1).map(JSON.stringify)\r\n        ),\r\n      ].map(JSON.parse);\r\n      ship.neighborCells.forEach(([x, y]) => (grid[x][y] = \"N/A\"));\r\n      return true;\r\n    },\r\n\r\n    receiveAttack: (x, y) => {\r\n      if (!(grid[x][y] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship)) {\r\n        return false;\r\n      }\r\n      grid[x][y].hit();\r\n      return true;\r\n    },\r\n\r\n    render: () => {\r\n      const container = document.querySelector(`.${owner}-board`);\r\n      container.innerHTML = \"\";\r\n      grid.forEach((column, y) => {\r\n        column.forEach((row, x) => {\r\n          const cell = _dom__WEBPACK_IMPORTED_MODULE_1__.createCells(container, x, y, owner);\r\n          if (grid[x][y] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship && owner !== \"bot\") _dom__WEBPACK_IMPORTED_MODULE_1__.updateCell(x, y, owner, \"ship\");\r\n        });\r\n      });\r\n    },\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://battleship-odin/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst BOT_BOARD = document.querySelector(\".bot-board\");\r\nconst PLAYER_BOARD = document.querySelector(\".human-board\");\r\nconst SHIPS = [new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(5), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(4), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(3), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(3), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(2)];\r\n\r\nasync function init() {\r\n  const human = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"human\");\r\n  const bot = (0,_player__WEBPACK_IMPORTED_MODULE_3__.Bot)();\r\n  const playerName = `Admiral ${await _dom__WEBPACK_IMPORTED_MODULE_4__.getPlayerName()}`;\r\n  _dom__WEBPACK_IMPORTED_MODULE_4__.showPlayerBoard(playerName);\r\n\r\n  // Place these ships on board\r\n  const ships = [new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(5), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(4), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(3), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(3), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(2)];\r\n  human.render();\r\n  _dom__WEBPACK_IMPORTED_MODULE_4__.showShipAxis();\r\n  while (ships.length > 0) {\r\n    await placeShipOnBoard(human, ships.shift());\r\n  }\r\n  _dom__WEBPACK_IMPORTED_MODULE_4__.showShipAxis(false);\r\n\r\n  const startGame = document.querySelector(\"#start-game\");\r\n  startGame.removeAttribute(\"style\");\r\n  startGame.addEventListener(\r\n    \"click\",\r\n    (e) => {\r\n      runGame(human, bot);\r\n      startGame.setAttribute(\"style\", \"display:none\");\r\n    },\r\n    { once: true }\r\n  );\r\n}\r\n\r\nasync function runGame(human, bot) {\r\n  console.log(\"game!!\");\r\n\r\n  const botShips = [new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(5), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(4), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(3), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(3), new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(2)];\r\n  // show bot board\r\n  bot.board.render();\r\n  while (botShips.length > 0) {\r\n    placeBotShips(bot, botShips.shift());\r\n  }\r\n  _dom__WEBPACK_IMPORTED_MODULE_4__.showBotBoard();\r\n\r\n  let isGameOver = false;\r\n  let playerWin;\r\n\r\n  while (!isGameOver) {\r\n    // enable clicks on bot board\r\n    BOT_BOARD.style.pointerEvents = \"all\";\r\n    // get player attack coordinate\r\n    const [x, y] = await playerTurn();\r\n    // disable click on bot board\r\n    BOT_BOARD.style.pointerEvents = \"none\";\r\n    // bot receive attack, if hit disable corner cells as well\r\n    const mark = bot.board.receiveAttack(x, y) ? \"hit\" : \"missed\";\r\n    _dom__WEBPACK_IMPORTED_MODULE_4__.updateBoard(bot.board, mark, x, y);\r\n\r\n    if (bot.board.allShipsSunk()) {\r\n      isGameOver = true;\r\n      playerWin = true;\r\n      break;\r\n    }\r\n\r\n    // Bot turn\r\n    const [bX, bY] = await bot.getXY(); // 0.1 sec delay before bot attack\r\n    const botMark = human.receiveAttack(bX, bY) ? \"hit\" : \"missed\";\r\n    _dom__WEBPACK_IMPORTED_MODULE_4__.updateBoard(human, botMark, bX, bY, bot);\r\n    if (human.allShipsSunk()) {\r\n      isGameOver = true;\r\n      playerWin = false;\r\n    }\r\n  }\r\n\r\n  console.log(\"END!!!\");\r\n  _dom__WEBPACK_IMPORTED_MODULE_4__.showWinner(playerWin);\r\n}\r\n\r\nfunction placeBotShips(bot, ship) {\r\n  const shipAxis = Math.random() < 0.5;\r\n  let x, y;\r\n  do {\r\n    x = Math.floor(Math.random() * 10);\r\n    y = Math.floor(Math.random() * 10);\r\n  } while (!bot.board.placeShip(ship, x, y, shipAxis));\r\n  bot.board.render();\r\n}\r\n\r\nfunction placeShipOnBoard(board, ship) {\r\n  // array of Ships, get one, get cell x,y on mousehover, get ship coordinates,\r\n  // check if all coordinates are null in board, place ships, render board, get another ship repeat\r\n  return new Promise((resolve) => {\r\n    const cells = Array.from(PLAYER_BOARD.children);\r\n    const axis = document.querySelector(\"#axis\");\r\n    for (const c of cells) {\r\n      c.addEventListener(\"mouseover\", highlightShip);\r\n      c.addEventListener(\"mouseout\", removeHighlight);\r\n      c.addEventListener(\"click\", confirmPlacement);\r\n    }\r\n\r\n    function confirmPlacement(e) {\r\n      const c = e.target;\r\n      const x = parseInt(c.dataset.x);\r\n      const y = parseInt(c.dataset.y);\r\n      const a = axis.innerText === \"Horizontal\" ? true : false;\r\n      if (board.placeShip(ship, x, y, a)) {\r\n        board.render();\r\n        resolve(\"good\");\r\n      }\r\n    }\r\n\r\n    function removeHighlight(e) {\r\n      for (const c of cells) {\r\n        c.classList.remove(\"temp-ship\");\r\n      }\r\n    }\r\n\r\n    function highlightShip(e) {\r\n      const c = e.target;\r\n      let x = parseInt(c.dataset.x);\r\n      let y = parseInt(c.dataset.y);\r\n      ship.coordinates = [];\r\n      for (let i = 0; i < ship.length; i++) {\r\n        const newX = axis.innerText === \"Horizontal\" ? x + i : x;\r\n        const newY = axis.innerText === \"Vertical\" ? y + i : y;\r\n        ship.coordinates.push([newX, newY]);\r\n      }\r\n      if (ship.coordinates.every(([x, y]) => board.isValidCell(x, y))) {\r\n        for (const [x, y] of ship.coordinates) {\r\n          const tempC = document.querySelector(`[data-x=\"${x}\"][data-y=\"${y}\"]`);\r\n          tempC.classList.add(\"temp-ship\");\r\n        }\r\n      }\r\n    }\r\n  });\r\n}\r\n\r\nfunction playerTurn() {\r\n  const cells = Array.from(BOT_BOARD.children).filter((c) => c.dataset.active === \"Y\");\r\n  console.log(cells.length);\r\n  return new Promise((res) => {\r\n    cells.forEach((c) =>\r\n      c.addEventListener(\r\n        \"click\",\r\n        () => {\r\n          _dom__WEBPACK_IMPORTED_MODULE_4__.deactivateCell(c);\r\n          res([parseInt(c.dataset.x), parseInt(c.dataset.y)]);\r\n        },\r\n        { once: true }\r\n      )\r\n    );\r\n  });\r\n}\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://battleship-odin/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Bot: () => (/* binding */ Bot),\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\r\n\r\nfunction Player(playerName = \"Jack Sparrow\") {\r\n  const name = playerName;\r\n  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n  return {\r\n    name,\r\n    gameboard,\r\n\r\n    attack: (x, y, board) => {\r\n      board.receiveAttack(x, y);\r\n    },\r\n\r\n    // addListener: (board) => {\r\n    //   gameboard.cellsArray\r\n    //     .filter((c) => c.active === true)\r\n    //     .forEach((c) => c.element.addEventLister(\"click\", clickHandler));\r\n    // },\r\n  };\r\n}\r\n\r\nfunction Bot(botName = \"Admiral AI\") {\r\n  const name = botName;\r\n  const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"bot\");\r\n  const prevAtks = [];\r\n  const attackTime = 500;\r\n\r\n  return {\r\n    name,\r\n    board,\r\n    prevAtks,\r\n\r\n    pushToPrevAtks: (x, y) => prevAtks.push(`${x},${y}`),\r\n\r\n    getXY: () => {\r\n      let x, y;\r\n      do {\r\n        x = Math.floor(Math.random() * 10);\r\n        y = Math.floor(Math.random() * 10);\r\n      } while (prevAtks.includes(`${x},${y}`));\r\n      prevAtks.push(`${x},${y}`);\r\n      return new Promise((res) => setTimeout(() => res([x, y]), attackTime));\r\n    },\r\n  };\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship-odin/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\r\n  constructor(length) {\r\n    this.length = length;\r\n    this.hits = 0;\r\n    this.sunk = false;\r\n    this.coordinates = [];\r\n    this.neighborCells = [];\r\n  }\r\n\r\n  hit = () => {\r\n    this.hits++;\r\n    if (this.isSunk()) this.sunk = true;\r\n  };\r\n  isSunk = () => this.hits >= this.length;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship-odin/./src/ship.js?");

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