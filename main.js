/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.roboto-regular {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 10fr;
  font-family: "Roboto";
  background-color: rgb(225, 204, 244);
}

header {
  display: flex;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: flex-start;
  padding: 0em 1em;
  font-size: 2em;
}

.header-container {
  display: flex;
  justify-content: space-between;
  gap: 0.5em;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-container {
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
}

.button-container, .random-placement-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  background-color: #0056b3;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

button:active {
  background-color: #004080;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: translateY(2px);
}

.grid-container {
  display: flex;
  justify-content: space-between;
  gap: 1em;
  max-width: 100%;
  max-height: 100%;
  padding: 0em 15em;
}

.player-grid,
.computer-grid {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  max-height: 500px;
  background-color: white;
  outline: 2px solid #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.player-grid.disabled,
.computer-grid.disabled {
  opacity: 0.5; 
  cursor: not-allowed;
}

.player-grid.disabled .squares,
.computer-grid.disabled .squares {
  pointer-events: none;
  background-color: #f0f0f0; 
}

.rows {
  display: flex;
  flex-direction: row;
}

.squares {
  border: 1px solid black;
}

.ship-highlight {
    background-color: #3498db; /* Change to desired ship color */
}

.squares.hit {
    background-color: red; /* Example hit color */
}

.squares.miss {
    background-color: lightgray; /* Example miss color */
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iCAAiC;EACjC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,4BAA4B;EAC5B,qBAAqB;EACrB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,2BAA2B;EAC3B,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,wCAAwC;EACxC,eAAe;EACf,eAAe;EACf,4DAA4D;AAC9D;;AAEA;EACE,yBAAyB;EACzB,wCAAwC;AAC1C;;AAEA;EACE,yBAAyB;EACzB,wCAAwC;EACxC,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,QAAQ;EACR,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB;EACvB,uBAAuB;EACvB,uCAAuC;AACzC;;AAEA;;EAEE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;IACI,yBAAyB,EAAE,iCAAiC;AAChE;;AAEA;IACI,qBAAqB,EAAE,sBAAsB;AACjD;;AAEA;IACI,2BAA2B,EAAE,uBAAuB;AACxD","sourcesContent":[".roboto-regular {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 10fr;\n  font-family: \"Roboto\";\n  background-color: rgb(225, 204, 244);\n}\n\nheader {\n  display: flex;\n  background-color: black;\n  color: white;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0em 1em;\n  font-size: 2em;\n}\n\n.header-container {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.5em;\n}\n\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-container {\n  display: grid;\n  grid-template-rows: 1fr 6fr 1fr;\n}\n\n.button-container, .random-placement-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2em;\n}\n\nbutton {\n  background-color: #007bff;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s ease, box-shadow 0.3s ease;\n}\n\nbutton:hover {\n  background-color: #0056b3;\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);\n}\n\nbutton:active {\n  background-color: #004080;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transform: translateY(2px);\n}\n\n.grid-container {\n  display: flex;\n  justify-content: space-between;\n  gap: 1em;\n  max-width: 100%;\n  max-height: 100%;\n  padding: 0em 15em;\n}\n\n.player-grid,\n.computer-grid {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 500px;\n  max-height: 500px;\n  background-color: white;\n  outline: 2px solid #333;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n}\n\n.player-grid.disabled,\n.computer-grid.disabled {\n  opacity: 0.5; \n  cursor: not-allowed;\n}\n\n.player-grid.disabled .squares,\n.computer-grid.disabled .squares {\n  pointer-events: none;\n  background-color: #f0f0f0; \n}\n\n.rows {\n  display: flex;\n  flex-direction: row;\n}\n\n.squares {\n  border: 1px solid black;\n}\n\n.ship-highlight {\n    background-color: #3498db; /* Change to desired ship color */\n}\n\n.squares.hit {\n    background-color: red; /* Example hit color */\n}\n\n.squares.miss {\n    background-color: lightgray; /* Example miss color */\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



const randomPlacementButton = document.querySelector(".random-placement");
const computerGridContainer = document.querySelector(".computer-grid");
const playerGridContainer = document.querySelector(".player-grid");

function startGame(highlightShipCallback) {
  const player = new _player__WEBPACK_IMPORTED_MODULE_0__.Player("Player 1", false);
  const computer = new _player__WEBPACK_IMPORTED_MODULE_0__.Player("Computer", true);

  let playerShip1 = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3);
  let playerShip2 = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(4);
  let playerShip3 = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(2);

  let computerShip1 = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3);
  let computerShip2 = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3);
  let computerShip3 = new _ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3);

  // Add the ships to the player's gameboard
  player.gameboard.ships = [playerShip1, playerShip2, playerShip3];

  // Place the player's ships and highlight them on the grid
  player.gameboard.placeShip(playerShip1, [0, 0], "horizontal");
  highlightShipCallback([0, 0], 3, "horizontal");

  player.gameboard.placeShip(playerShip2, [3, 0], "horizontal");
  highlightShipCallback([3, 0], 4, "horizontal");

  player.gameboard.placeShip(playerShip3, [5, 0], "vertical");
  highlightShipCallback([5, 0], 2, "vertical");

  // Add the ships to the computer's gameboard
  computer.gameboard.ships = [computerShip1, computerShip2, computerShip3];
  computer.gameboard.placeShip(computerShip1, [0, 0], "horizontal");
  computer.gameboard.placeShip(computerShip2, [3, 0], "horizontal");
  computer.gameboard.placeShip(computerShip3, [5, 0], "horizontal");

  randomPlacementButton.addEventListener("click", () => {
    clearPlayerGrid();
    
    player.gameboard.ships = [playerShip1, playerShip2, playerShip3];
    player.gameboard.ships.forEach((ship) => {
        let placed = false; // Track if the ship is placed
        while (!placed) {
          let randomStartCoord = player.generateRandomCoord();
          const newRandomValidCoord = player.gameboard.placeShip(ship, randomStartCoord, "horizontal");
          
          if (newRandomValidCoord) { // If placeShip returns coordinates, it was successful
            highlightShipCallback(newRandomValidCoord[0], ship.length, "horizontal");
            placed = true; // Mark the ship as placed successfully
            console.log(randomStartCoord);
          } else {
            console.error("Failed to place ship at", randomStartCoord, "trying again...");
          }
        }
      });
      
  });

  function clearPlayerGrid() {
    player.gameboard.ships = [];
    const cells = document.querySelectorAll(".squares");
    cells.forEach((cell) => {
      cell.classList.remove("ship-highlight", "hit", "miss");
    });
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return async function processAttack(coord) {
    const result = computer.gameboard.receiveAttack(coord);
    updateUI(result, coord, "computer");
    if (computer.gameboard.allShipsSunk()) {
      await delay(0); // Ensures UI updates first
      alert("You Won! Computer Lost!");
      return;
    }
    const compAttackCoord = computer.randomAttack(player);
    const compAttackResult = player.gameboard.receiveAttack(compAttackCoord);
    updateUI(compAttackResult, compAttackCoord, "player");
    if (player.gameboard.allShipsSunk()) {
      await delay(0); // Ensures UI updates first
      alert("Computer Won! You Lost!");

      return;
    }
  };
}

function updateUI(result, coord, board) {
  const gridContainer =
    board === "computer" ? computerGridContainer : playerGridContainer;
  const cell = gridContainer.querySelector(
    `[data-x="${coord[0]}"][data-y="${coord[1]}"]`
  );
  if (cell) {
    if (result === "hit") {
      cell.classList.add("hit"); // Add a class to indicate a hit
    } else if (result === "miss") {
      cell.classList.add("miss"); // Add a class to indicate a miss
    }
  }
}


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
class Gameboard {
  constructor() {
    this.boardSize = 10;
    this.ships = [];
    this.missedAttacks = [];
  }
  //   placeShip(ship, startCoord, direction) {
  //     const newShipCoordinates = this.generateShipCoordinates(
  //       startCoord,
  //       ship.length,
  //       direction
  //     );

  //     while (this.areCoordinatesOccupied(newShipCoordinates)) {
  //     //   throw new Error(
  //     //     "Ship cannot be placed here, overlapping with another ship"
  //     //   );
  //     this.placeShip(ship, this.generateRandomCoord(), direction)
  //     }
  //     ship.coordinates = newShipCoordinates;
  //     this.ships.push(ship);
  //     return newShipCoordinates;
  //   }

  placeShip(ship, startCoord, direction) {
    const newShipCoordinates = this.generateShipCoordinates(
      startCoord,
      ship.length,
      direction
    );
    console.log(this.isWithinGrid(newShipCoordinates));
    // Check if the new coordinates overlap with existing ships
    if (this.areCoordinatesOccupied(newShipCoordinates) || !this.isWithinGrid(newShipCoordinates)) {
      // Return false if the ship could not be placed
      return false;
    }

    // Place the ship if no overlap
    ship.coordinates = newShipCoordinates;
    this.ships.push(ship);
    return newShipCoordinates; // Return the coordinates if placed successfully
  }

  isWithinGrid(coordinates) {
    return coordinates.every(([x, y]) =>
      x >= 0 && x < this.boardSize && y >= 0 && y < this.boardSize
    );
  }

  generateRandomCoord() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    return [x, y];
  }
  areCoordinatesOccupied(coordinates) {
    return coordinates.some((coord) =>
      this.ships.some((ship) =>
        ship.coordinates.some((c) => this.isSameCoordinate(c, coord))
      )
    );
  }
  isOccupied(startCoord) {
    return this.ships.some((ship) =>
      ship.coordinates.some((c) => this.isSameCoordinate(c, startCoord))
    );
  }
  isSameCoordinate(c1, c2) {
    return c1[0] === c2[0] && c1[1] === c2[1];
  }
  generateShipCoordinates(startCoord, shipLength, direction) {
    const coords = [];
    const [x, y] = startCoord;

    for (let i = 0; i < shipLength; i++) {
      const coord = direction === "horizontal" ? [x, y + i] : [x + i, y];
      coords.push(coord);
    }
    return coords;
  }
  receiveAttack(coord) {
    const ship = this.ships.find((ship) =>
      ship.coordinates.some((c) => this.isSameCoordinate(c, coord))
    );
    if (ship) {
      const index = ship.coordinates.findIndex((c) =>
        this.isSameCoordinate(c, coord)
      );
      ship.hit(index);
      return "hit";
    } else {
      this.missedAttacks.push(coord);
      return "miss";
    }
  }
  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


class Player {
  constructor(name, isComputer = false) {
    this.name = name;
    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
    this.isComputer = isComputer;
  }
  attack(opponent, coord) {
    if (this.hasAlreadyAttacked(opponent, coord)) {
      throw new Error("You have already attacked this coordinate");
    }
    if (opponent.gameboard) {
      return opponent.gameboard.receiveAttack(coord);
    }
  }
  randomAttack(opponent) {
    if (!this.isComputer) {
      return;
    }
    let coord;
    do {
      coord = this.generateRandomCoord();
    } while (this.hasAlreadyAttacked(opponent, coord));

    this.attack(opponent, coord); 
  return coord; 
  }
  generateRandomCoord() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    return [x, y];
  }
  hasAlreadyAttacked(opponent, coord) {
    const allAttacks = [
      ...opponent.gameboard.missedAttacks,
      ...this.getAllHitCoords(opponent),
    ];
    return allAttacks.some((attackCoord) =>
      this.gameboard.isSameCoordinate(attackCoord, coord)
    );
  }
  getAllHitCoords(opponent) {
    return opponent.gameboard.ships.flatMap((ship) =>
      ship.coordinates.filter((coord, idx) => ship.hitPositions[idx] === true)
    );
  }
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length, hitsTaken = 0) {
    this.length = length;
    this.hitsTaken = hitsTaken;
    this.hitPositions = new Array(length).fill(false); // Track hits at specific positions
    this.coordinates = [];
  }
  // Accept an index to mark that specific position as hit
  hit(index) {
    if (!this.hitPositions[index]) {
      // Avoid double hits at the same position
      this.hitPositions[index] = true;
      this.hitsTaken++;
    }
  }
  isSunk() {
    return this.hitsTaken >= this.length;
  }
}


/***/ }),

/***/ "./src/ship-icon.png":
/*!***************************!*\
  !*** ./src/ship-icon.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "496d544c15b0b53fc139.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _ship_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship-icon.png */ "./src/ship-icon.png");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ "./src/game.js");


 // Import startGame

document.querySelector(".ship-icon img").src = _ship_icon_png__WEBPACK_IMPORTED_MODULE_1__;

const startButton = document.querySelector(".start");
const restartButton = document.querySelector(".restart");
const playerGridContainer = document.querySelector(".player-grid");
const computerGridContainer = document.querySelector(".computer-grid");

document.addEventListener("DOMContentLoaded", function () {
  let rows = 10;
  let columns = 10;

  function createGrid(grid, rows, columns) {
    // Clear the grid first
    grid.innerHTML = "";

    const squareSize = Math.floor(500 / rows);

    for (let i = 0; i < rows; i++) {
      const row = document.createElement("div");
      row.classList.add("rows");
      grid.appendChild(row);

      for (let j = 0; j < columns; j++) {
        const sqr = document.createElement("div");
        sqr.classList.add("squares");
        sqr.style.width = `${squareSize}px`;
        sqr.style.height = `${squareSize}px`;

        // Add data attributes to identify position
        sqr.setAttribute("data-x", i);
        sqr.setAttribute("data-y", j);

        row.appendChild(sqr);
      }
    }
  }

  // Initialize grids with disabled state
  playerGridContainer.classList.add("disabled");
  computerGridContainer.classList.add("disabled");

  createGrid(playerGridContainer, rows, columns);
  createGrid(computerGridContainer, rows, columns);

  let processAttack;

  startButton.addEventListener("click", () => {
    // Enable the grids when the start button is clicked
    playerGridContainer.classList.remove("disabled");
    computerGridContainer.classList.remove("disabled");

    // Pass the highlight function to startGame
    processAttack = (0,_game_js__WEBPACK_IMPORTED_MODULE_2__.startGame)(highlightPlayerShip); // Start the game logic

    computerGridContainer.addEventListener("click", handleAttack);
  });

  restartButton.addEventListener("click", () => {
    createGrid(playerGridContainer, rows, columns);
    createGrid(computerGridContainer, rows, columns);

    processAttack = (0,_game_js__WEBPACK_IMPORTED_MODULE_2__.startGame)(highlightPlayerShip); // Start the game logic

    computerGridContainer.addEventListener("click", handleAttack);
  });

  // Function to highlight player ship on the grid
  function highlightPlayerShip(startPosition, length, orientation) {
    const [startX, startY] = startPosition;
    for (let i = 0; i < length; i++) {
      const x = orientation === "horizontal" ? startX : startX + i;
      const y = orientation === "horizontal" ? startY + i : startY;
      const cell = playerGridContainer.querySelector(
        `[data-x="${x}"][data-y="${y}"]`
      );
      if (cell) {
        cell.classList.add("ship-highlight"); // Add class to highlight the cell
      }
    }
  }

  function handleAttack(event) {
    const target = event.target;
    if (target.classList.contains("squares")) {
      const x = parseInt(target.getAttribute("data-x"));
      const y = parseInt(target.getAttribute("data-y"));

      // Call the function to process the attack
      if (processAttack) processAttack([x, y]);
    }
  }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNrQjtBQUNELENBQUM7O0FBRXZDLCtDQUErQywyQ0FBUTs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBLDZCQUE2QixXQUFXO0FBQ3hDLDhCQUE4QixXQUFXOztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsbURBQVMsdUJBQXVCOztBQUVwRDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixtREFBUyx1QkFBdUI7O0FBRXBEO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsRUFBRSxhQUFhLEVBQUU7QUFDckM7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5yb2JvdG8tcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyMDQsIDI0NCk7XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMGVtIDFlbTtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDAuNWVtO1xufVxuXG4udGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyIDFmcjtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIsIC5yYW5kb20tcGxhY2VtZW50LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJlbTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xufVxuXG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xuICBib3gtc2hhZG93OiAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDA4MDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxZW07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMGVtIDE1ZW07XG59XG5cbi5wbGF5ZXItZ3JpZCxcbi5jb21wdXRlci1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogMnB4IHNvbGlkICMzMzM7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLnBsYXllci1ncmlkLmRpc2FibGVkLFxuLmNvbXB1dGVyLWdyaWQuZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7IFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4ucGxheWVyLWdyaWQuZGlzYWJsZWQgLnNxdWFyZXMsXG4uY29tcHV0ZXItZ3JpZC5kaXNhYmxlZCAuc3F1YXJlcyB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwOyBcbn1cblxuLnJvd3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uc3F1YXJlcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uc2hpcC1oaWdobGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7IC8qIENoYW5nZSB0byBkZXNpcmVkIHNoaXAgY29sb3IgKi9cbn1cblxuLnNxdWFyZXMuaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IC8qIEV4YW1wbGUgaGl0IGNvbG9yICovXG59XG5cbi5zcXVhcmVzLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTsgLyogRXhhbXBsZSBtaXNzIGNvbG9yICovXG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZixlQUFlO0VBQ2YsNERBQTREO0FBQzlEOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix3Q0FBd0M7RUFDeEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixRQUFRO0VBQ1IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVDQUF1QztBQUN6Qzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCLEVBQUUsaUNBQWlDO0FBQ2hFOztBQUVBO0lBQ0kscUJBQXFCLEVBQUUsc0JBQXNCO0FBQ2pEOztBQUVBO0lBQ0ksMkJBQTJCLEVBQUUsdUJBQXVCO0FBQ3hEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5yb2JvdG8tcmVndWxhciB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjUsIDIwNCwgMjQ0KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAwZW0gMWVtO1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDAuNWVtO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnIgMWZyO1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciwgLnJhbmRvbS1wbGFjZW1lbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDA4MDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBnYXA6IDFlbTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwZW0gMTVlbTtcXG59XFxuXFxuLnBsYXllci1ncmlkLFxcbi5jb21wdXRlci1ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjMzMzO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4ucGxheWVyLWdyaWQuZGlzYWJsZWQsXFxuLmNvbXB1dGVyLWdyaWQuZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC41OyBcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5wbGF5ZXItZ3JpZC5kaXNhYmxlZCAuc3F1YXJlcyxcXG4uY29tcHV0ZXItZ3JpZC5kaXNhYmxlZCAuc3F1YXJlcyB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7IFxcbn1cXG5cXG4ucm93cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnNxdWFyZXMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zaGlwLWhpZ2hsaWdodCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7IC8qIENoYW5nZSB0byBkZXNpcmVkIHNoaXAgY29sb3IgKi9cXG59XFxuXFxuLnNxdWFyZXMuaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkOyAvKiBFeGFtcGxlIGhpdCBjb2xvciAqL1xcbn1cXG5cXG4uc3F1YXJlcy5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5OyAvKiBFeGFtcGxlIG1pc3MgY29sb3IgKi9cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmNvbnN0IHJhbmRvbVBsYWNlbWVudEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFuZG9tLXBsYWNlbWVudFwiKTtcbmNvbnN0IGNvbXB1dGVyR3JpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItZ3JpZFwiKTtcbmNvbnN0IHBsYXllckdyaWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ncmlkXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKGhpZ2hsaWdodFNoaXBDYWxsYmFjaykge1xuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKFwiUGxheWVyIDFcIiwgZmFsc2UpO1xuICBjb25zdCBjb21wdXRlciA9IG5ldyBQbGF5ZXIoXCJDb21wdXRlclwiLCB0cnVlKTtcblxuICBsZXQgcGxheWVyU2hpcDEgPSBuZXcgU2hpcCgzKTtcbiAgbGV0IHBsYXllclNoaXAyID0gbmV3IFNoaXAoNCk7XG4gIGxldCBwbGF5ZXJTaGlwMyA9IG5ldyBTaGlwKDIpO1xuXG4gIGxldCBjb21wdXRlclNoaXAxID0gbmV3IFNoaXAoMyk7XG4gIGxldCBjb21wdXRlclNoaXAyID0gbmV3IFNoaXAoMyk7XG4gIGxldCBjb21wdXRlclNoaXAzID0gbmV3IFNoaXAoMyk7XG5cbiAgLy8gQWRkIHRoZSBzaGlwcyB0byB0aGUgcGxheWVyJ3MgZ2FtZWJvYXJkXG4gIHBsYXllci5nYW1lYm9hcmQuc2hpcHMgPSBbcGxheWVyU2hpcDEsIHBsYXllclNoaXAyLCBwbGF5ZXJTaGlwM107XG5cbiAgLy8gUGxhY2UgdGhlIHBsYXllcidzIHNoaXBzIGFuZCBoaWdobGlnaHQgdGhlbSBvbiB0aGUgZ3JpZFxuICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChwbGF5ZXJTaGlwMSwgWzAsIDBdLCBcImhvcml6b250YWxcIik7XG4gIGhpZ2hsaWdodFNoaXBDYWxsYmFjayhbMCwgMF0sIDMsIFwiaG9yaXpvbnRhbFwiKTtcblxuICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChwbGF5ZXJTaGlwMiwgWzMsIDBdLCBcImhvcml6b250YWxcIik7XG4gIGhpZ2hsaWdodFNoaXBDYWxsYmFjayhbMywgMF0sIDQsIFwiaG9yaXpvbnRhbFwiKTtcblxuICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChwbGF5ZXJTaGlwMywgWzUsIDBdLCBcInZlcnRpY2FsXCIpO1xuICBoaWdobGlnaHRTaGlwQ2FsbGJhY2soWzUsIDBdLCAyLCBcInZlcnRpY2FsXCIpO1xuXG4gIC8vIEFkZCB0aGUgc2hpcHMgdG8gdGhlIGNvbXB1dGVyJ3MgZ2FtZWJvYXJkXG4gIGNvbXB1dGVyLmdhbWVib2FyZC5zaGlwcyA9IFtjb21wdXRlclNoaXAxLCBjb21wdXRlclNoaXAyLCBjb21wdXRlclNoaXAzXTtcbiAgY29tcHV0ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChjb21wdXRlclNoaXAxLCBbMCwgMF0sIFwiaG9yaXpvbnRhbFwiKTtcbiAgY29tcHV0ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChjb21wdXRlclNoaXAyLCBbMywgMF0sIFwiaG9yaXpvbnRhbFwiKTtcbiAgY29tcHV0ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChjb21wdXRlclNoaXAzLCBbNSwgMF0sIFwiaG9yaXpvbnRhbFwiKTtcblxuICByYW5kb21QbGFjZW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhclBsYXllckdyaWQoKTtcbiAgICBcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzID0gW3BsYXllclNoaXAxLCBwbGF5ZXJTaGlwMiwgcGxheWVyU2hpcDNdO1xuICAgIHBsYXllci5nYW1lYm9hcmQuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBsZXQgcGxhY2VkID0gZmFsc2U7IC8vIFRyYWNrIGlmIHRoZSBzaGlwIGlzIHBsYWNlZFxuICAgICAgICB3aGlsZSAoIXBsYWNlZCkge1xuICAgICAgICAgIGxldCByYW5kb21TdGFydENvb3JkID0gcGxheWVyLmdlbmVyYXRlUmFuZG9tQ29vcmQoKTtcbiAgICAgICAgICBjb25zdCBuZXdSYW5kb21WYWxpZENvb3JkID0gcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCwgcmFuZG9tU3RhcnRDb29yZCwgXCJob3Jpem9udGFsXCIpO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmIChuZXdSYW5kb21WYWxpZENvb3JkKSB7IC8vIElmIHBsYWNlU2hpcCByZXR1cm5zIGNvb3JkaW5hdGVzLCBpdCB3YXMgc3VjY2Vzc2Z1bFxuICAgICAgICAgICAgaGlnaGxpZ2h0U2hpcENhbGxiYWNrKG5ld1JhbmRvbVZhbGlkQ29vcmRbMF0sIHNoaXAubGVuZ3RoLCBcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICBwbGFjZWQgPSB0cnVlOyAvLyBNYXJrIHRoZSBzaGlwIGFzIHBsYWNlZCBzdWNjZXNzZnVsbHlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJhbmRvbVN0YXJ0Q29vcmQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHBsYWNlIHNoaXAgYXRcIiwgcmFuZG9tU3RhcnRDb29yZCwgXCJ0cnlpbmcgYWdhaW4uLi5cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICB9KTtcblxuICBmdW5jdGlvbiBjbGVhclBsYXllckdyaWQoKSB7XG4gICAgcGxheWVyLmdhbWVib2FyZC5zaGlwcyA9IFtdO1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zcXVhcmVzXCIpO1xuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcInNoaXAtaGlnaGxpZ2h0XCIsIFwiaGl0XCIsIFwibWlzc1wiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGF5KG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4gIH1cblxuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0F0dGFjayhjb29yZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNvbXB1dGVyLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgICB1cGRhdGVVSShyZXN1bHQsIGNvb3JkLCBcImNvbXB1dGVyXCIpO1xuICAgIGlmIChjb21wdXRlci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIGF3YWl0IGRlbGF5KDApOyAvLyBFbnN1cmVzIFVJIHVwZGF0ZXMgZmlyc3RcbiAgICAgIGFsZXJ0KFwiWW91IFdvbiEgQ29tcHV0ZXIgTG9zdCFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbXBBdHRhY2tDb29yZCA9IGNvbXB1dGVyLnJhbmRvbUF0dGFjayhwbGF5ZXIpO1xuICAgIGNvbnN0IGNvbXBBdHRhY2tSZXN1bHQgPSBwbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29tcEF0dGFja0Nvb3JkKTtcbiAgICB1cGRhdGVVSShjb21wQXR0YWNrUmVzdWx0LCBjb21wQXR0YWNrQ29vcmQsIFwicGxheWVyXCIpO1xuICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBhd2FpdCBkZWxheSgwKTsgLy8gRW5zdXJlcyBVSSB1cGRhdGVzIGZpcnN0XG4gICAgICBhbGVydChcIkNvbXB1dGVyIFdvbiEgWW91IExvc3QhXCIpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVVSShyZXN1bHQsIGNvb3JkLCBib2FyZCkge1xuICBjb25zdCBncmlkQ29udGFpbmVyID1cbiAgICBib2FyZCA9PT0gXCJjb21wdXRlclwiID8gY29tcHV0ZXJHcmlkQ29udGFpbmVyIDogcGxheWVyR3JpZENvbnRhaW5lcjtcbiAgY29uc3QgY2VsbCA9IGdyaWRDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICBgW2RhdGEteD1cIiR7Y29vcmRbMF19XCJdW2RhdGEteT1cIiR7Y29vcmRbMV19XCJdYFxuICApO1xuICBpZiAoY2VsbCkge1xuICAgIGlmIChyZXN1bHQgPT09IFwiaGl0XCIpIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImhpdFwiKTsgLy8gQWRkIGEgY2xhc3MgdG8gaW5kaWNhdGUgYSBoaXRcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJtaXNzXCIpIHtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7IC8vIEFkZCBhIGNsYXNzIHRvIGluZGljYXRlIGEgbWlzc1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmRTaXplID0gMTA7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgIHRoaXMubWlzc2VkQXR0YWNrcyA9IFtdO1xuICB9XG4gIC8vICAgcGxhY2VTaGlwKHNoaXAsIHN0YXJ0Q29vcmQsIGRpcmVjdGlvbikge1xuICAvLyAgICAgY29uc3QgbmV3U2hpcENvb3JkaW5hdGVzID0gdGhpcy5nZW5lcmF0ZVNoaXBDb29yZGluYXRlcyhcbiAgLy8gICAgICAgc3RhcnRDb29yZCxcbiAgLy8gICAgICAgc2hpcC5sZW5ndGgsXG4gIC8vICAgICAgIGRpcmVjdGlvblxuICAvLyAgICAgKTtcblxuICAvLyAgICAgd2hpbGUgKHRoaXMuYXJlQ29vcmRpbmF0ZXNPY2N1cGllZChuZXdTaGlwQ29vcmRpbmF0ZXMpKSB7XG4gIC8vICAgICAvLyAgIHRocm93IG5ldyBFcnJvcihcbiAgLy8gICAgIC8vICAgICBcIlNoaXAgY2Fubm90IGJlIHBsYWNlZCBoZXJlLCBvdmVybGFwcGluZyB3aXRoIGFub3RoZXIgc2hpcFwiXG4gIC8vICAgICAvLyAgICk7XG4gIC8vICAgICB0aGlzLnBsYWNlU2hpcChzaGlwLCB0aGlzLmdlbmVyYXRlUmFuZG9tQ29vcmQoKSwgZGlyZWN0aW9uKVxuICAvLyAgICAgfVxuICAvLyAgICAgc2hpcC5jb29yZGluYXRlcyA9IG5ld1NoaXBDb29yZGluYXRlcztcbiAgLy8gICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgLy8gICAgIHJldHVybiBuZXdTaGlwQ29vcmRpbmF0ZXM7XG4gIC8vICAgfVxuXG4gIHBsYWNlU2hpcChzaGlwLCBzdGFydENvb3JkLCBkaXJlY3Rpb24pIHtcbiAgICBjb25zdCBuZXdTaGlwQ29vcmRpbmF0ZXMgPSB0aGlzLmdlbmVyYXRlU2hpcENvb3JkaW5hdGVzKFxuICAgICAgc3RhcnRDb29yZCxcbiAgICAgIHNoaXAubGVuZ3RoLFxuICAgICAgZGlyZWN0aW9uXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlzV2l0aGluR3JpZChuZXdTaGlwQ29vcmRpbmF0ZXMpKTtcbiAgICAvLyBDaGVjayBpZiB0aGUgbmV3IGNvb3JkaW5hdGVzIG92ZXJsYXAgd2l0aCBleGlzdGluZyBzaGlwc1xuICAgIGlmICh0aGlzLmFyZUNvb3JkaW5hdGVzT2NjdXBpZWQobmV3U2hpcENvb3JkaW5hdGVzKSB8fCAhdGhpcy5pc1dpdGhpbkdyaWQobmV3U2hpcENvb3JkaW5hdGVzKSkge1xuICAgICAgLy8gUmV0dXJuIGZhbHNlIGlmIHRoZSBzaGlwIGNvdWxkIG5vdCBiZSBwbGFjZWRcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBQbGFjZSB0aGUgc2hpcCBpZiBubyBvdmVybGFwXG4gICAgc2hpcC5jb29yZGluYXRlcyA9IG5ld1NoaXBDb29yZGluYXRlcztcbiAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgcmV0dXJuIG5ld1NoaXBDb29yZGluYXRlczsgLy8gUmV0dXJuIHRoZSBjb29yZGluYXRlcyBpZiBwbGFjZWQgc3VjY2Vzc2Z1bGx5XG4gIH1cblxuICBpc1dpdGhpbkdyaWQoY29vcmRpbmF0ZXMpIHtcbiAgICByZXR1cm4gY29vcmRpbmF0ZXMuZXZlcnkoKFt4LCB5XSkgPT5cbiAgICAgIHggPj0gMCAmJiB4IDwgdGhpcy5ib2FyZFNpemUgJiYgeSA+PSAwICYmIHkgPCB0aGlzLmJvYXJkU2l6ZVxuICAgICk7XG4gIH1cblxuICBnZW5lcmF0ZVJhbmRvbUNvb3JkKCkge1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgIHJldHVybiBbeCwgeV07XG4gIH1cbiAgYXJlQ29vcmRpbmF0ZXNPY2N1cGllZChjb29yZGluYXRlcykge1xuICAgIHJldHVybiBjb29yZGluYXRlcy5zb21lKChjb29yZCkgPT5cbiAgICAgIHRoaXMuc2hpcHMuc29tZSgoc2hpcCkgPT5cbiAgICAgICAgc2hpcC5jb29yZGluYXRlcy5zb21lKChjKSA9PiB0aGlzLmlzU2FtZUNvb3JkaW5hdGUoYywgY29vcmQpKVxuICAgICAgKVxuICAgICk7XG4gIH1cbiAgaXNPY2N1cGllZChzdGFydENvb3JkKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuc29tZSgoc2hpcCkgPT5cbiAgICAgIHNoaXAuY29vcmRpbmF0ZXMuc29tZSgoYykgPT4gdGhpcy5pc1NhbWVDb29yZGluYXRlKGMsIHN0YXJ0Q29vcmQpKVxuICAgICk7XG4gIH1cbiAgaXNTYW1lQ29vcmRpbmF0ZShjMSwgYzIpIHtcbiAgICByZXR1cm4gYzFbMF0gPT09IGMyWzBdICYmIGMxWzFdID09PSBjMlsxXTtcbiAgfVxuICBnZW5lcmF0ZVNoaXBDb29yZGluYXRlcyhzdGFydENvb3JkLCBzaGlwTGVuZ3RoLCBkaXJlY3Rpb24pIHtcbiAgICBjb25zdCBjb29yZHMgPSBbXTtcbiAgICBjb25zdCBbeCwgeV0gPSBzdGFydENvb3JkO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvb3JkID0gZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIiA/IFt4LCB5ICsgaV0gOiBbeCArIGksIHldO1xuICAgICAgY29vcmRzLnB1c2goY29vcmQpO1xuICAgIH1cbiAgICByZXR1cm4gY29vcmRzO1xuICB9XG4gIHJlY2VpdmVBdHRhY2soY29vcmQpIHtcbiAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwcy5maW5kKChzaGlwKSA9PlxuICAgICAgc2hpcC5jb29yZGluYXRlcy5zb21lKChjKSA9PiB0aGlzLmlzU2FtZUNvb3JkaW5hdGUoYywgY29vcmQpKVxuICAgICk7XG4gICAgaWYgKHNoaXApIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc2hpcC5jb29yZGluYXRlcy5maW5kSW5kZXgoKGMpID0+XG4gICAgICAgIHRoaXMuaXNTYW1lQ29vcmRpbmF0ZShjLCBjb29yZClcbiAgICAgICk7XG4gICAgICBzaGlwLmhpdChpbmRleCk7XG4gICAgICByZXR1cm4gXCJoaXRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5taXNzZWRBdHRhY2tzLnB1c2goY29vcmQpO1xuICAgICAgcmV0dXJuIFwibWlzc1wiO1xuICAgIH1cbiAgfVxuICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGlzQ29tcHV0ZXIgPSBmYWxzZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5pc0NvbXB1dGVyID0gaXNDb21wdXRlcjtcbiAgfVxuICBhdHRhY2sob3Bwb25lbnQsIGNvb3JkKSB7XG4gICAgaWYgKHRoaXMuaGFzQWxyZWFkeUF0dGFja2VkKG9wcG9uZW50LCBjb29yZCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBoYXZlIGFscmVhZHkgYXR0YWNrZWQgdGhpcyBjb29yZGluYXRlXCIpO1xuICAgIH1cbiAgICBpZiAob3Bwb25lbnQuZ2FtZWJvYXJkKSB7XG4gICAgICByZXR1cm4gb3Bwb25lbnQuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICAgIH1cbiAgfVxuICByYW5kb21BdHRhY2sob3Bwb25lbnQpIHtcbiAgICBpZiAoIXRoaXMuaXNDb21wdXRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgY29vcmQ7XG4gICAgZG8ge1xuICAgICAgY29vcmQgPSB0aGlzLmdlbmVyYXRlUmFuZG9tQ29vcmQoKTtcbiAgICB9IHdoaWxlICh0aGlzLmhhc0FscmVhZHlBdHRhY2tlZChvcHBvbmVudCwgY29vcmQpKTtcblxuICAgIHRoaXMuYXR0YWNrKG9wcG9uZW50LCBjb29yZCk7IFxuICByZXR1cm4gY29vcmQ7IFxuICB9XG4gIGdlbmVyYXRlUmFuZG9tQ29vcmQoKSB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfVxuICBoYXNBbHJlYWR5QXR0YWNrZWQob3Bwb25lbnQsIGNvb3JkKSB7XG4gICAgY29uc3QgYWxsQXR0YWNrcyA9IFtcbiAgICAgIC4uLm9wcG9uZW50LmdhbWVib2FyZC5taXNzZWRBdHRhY2tzLFxuICAgICAgLi4udGhpcy5nZXRBbGxIaXRDb29yZHMob3Bwb25lbnQpLFxuICAgIF07XG4gICAgcmV0dXJuIGFsbEF0dGFja3Muc29tZSgoYXR0YWNrQ29vcmQpID0+XG4gICAgICB0aGlzLmdhbWVib2FyZC5pc1NhbWVDb29yZGluYXRlKGF0dGFja0Nvb3JkLCBjb29yZClcbiAgICApO1xuICB9XG4gIGdldEFsbEhpdENvb3JkcyhvcHBvbmVudCkge1xuICAgIHJldHVybiBvcHBvbmVudC5nYW1lYm9hcmQuc2hpcHMuZmxhdE1hcCgoc2hpcCkgPT5cbiAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZmlsdGVyKChjb29yZCwgaWR4KSA9PiBzaGlwLmhpdFBvc2l0aW9uc1tpZHhdID09PSB0cnVlKVxuICAgICk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCBoaXRzVGFrZW4gPSAwKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzVGFrZW4gPSBoaXRzVGFrZW47XG4gICAgdGhpcy5oaXRQb3NpdGlvbnMgPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKGZhbHNlKTsgLy8gVHJhY2sgaGl0cyBhdCBzcGVjaWZpYyBwb3NpdGlvbnNcbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gW107XG4gIH1cbiAgLy8gQWNjZXB0IGFuIGluZGV4IHRvIG1hcmsgdGhhdCBzcGVjaWZpYyBwb3NpdGlvbiBhcyBoaXRcbiAgaGl0KGluZGV4KSB7XG4gICAgaWYgKCF0aGlzLmhpdFBvc2l0aW9uc1tpbmRleF0pIHtcbiAgICAgIC8vIEF2b2lkIGRvdWJsZSBoaXRzIGF0IHRoZSBzYW1lIHBvc2l0aW9uXG4gICAgICB0aGlzLmhpdFBvc2l0aW9uc1tpbmRleF0gPSB0cnVlO1xuICAgICAgdGhpcy5oaXRzVGFrZW4rKztcbiAgICB9XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhpdHNUYWtlbiA+PSB0aGlzLmxlbmd0aDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgc2hpcEljb24gZnJvbSBcIi4vc2hpcC1pY29uLnBuZ1wiO1xuaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSBcIi4vZ2FtZS5qc1wiOyAvLyBJbXBvcnQgc3RhcnRHYW1lXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1pY29uIGltZ1wiKS5zcmMgPSBzaGlwSWNvbjtcblxuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0XCIpO1xuY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGFydFwiKTtcbmNvbnN0IHBsYXllckdyaWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ncmlkXCIpO1xuY29uc3QgY29tcHV0ZXJHcmlkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ncmlkXCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGxldCByb3dzID0gMTA7XG4gIGxldCBjb2x1bW5zID0gMTA7XG5cbiAgZnVuY3Rpb24gY3JlYXRlR3JpZChncmlkLCByb3dzLCBjb2x1bW5zKSB7XG4gICAgLy8gQ2xlYXIgdGhlIGdyaWQgZmlyc3RcbiAgICBncmlkLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCBzcXVhcmVTaXplID0gTWF0aC5mbG9vcig1MDAgLyByb3dzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJyb3dzXCIpO1xuICAgICAgZ3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgICBjb25zdCBzcXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcXIuY2xhc3NMaXN0LmFkZChcInNxdWFyZXNcIik7XG4gICAgICAgIHNxci5zdHlsZS53aWR0aCA9IGAke3NxdWFyZVNpemV9cHhgO1xuICAgICAgICBzcXIuc3R5bGUuaGVpZ2h0ID0gYCR7c3F1YXJlU2l6ZX1weGA7XG5cbiAgICAgICAgLy8gQWRkIGRhdGEgYXR0cmlidXRlcyB0byBpZGVudGlmeSBwb3NpdGlvblxuICAgICAgICBzcXIuc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIGkpO1xuICAgICAgICBzcXIuc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsIGopO1xuXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChzcXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEluaXRpYWxpemUgZ3JpZHMgd2l0aCBkaXNhYmxlZCBzdGF0ZVxuICBwbGF5ZXJHcmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgY29tcHV0ZXJHcmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcblxuICBjcmVhdGVHcmlkKHBsYXllckdyaWRDb250YWluZXIsIHJvd3MsIGNvbHVtbnMpO1xuICBjcmVhdGVHcmlkKGNvbXB1dGVyR3JpZENvbnRhaW5lciwgcm93cywgY29sdW1ucyk7XG5cbiAgbGV0IHByb2Nlc3NBdHRhY2s7XG5cbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBFbmFibGUgdGhlIGdyaWRzIHdoZW4gdGhlIHN0YXJ0IGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgcGxheWVyR3JpZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYWJsZWRcIik7XG4gICAgY29tcHV0ZXJHcmlkQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcblxuICAgIC8vIFBhc3MgdGhlIGhpZ2hsaWdodCBmdW5jdGlvbiB0byBzdGFydEdhbWVcbiAgICBwcm9jZXNzQXR0YWNrID0gc3RhcnRHYW1lKGhpZ2hsaWdodFBsYXllclNoaXApOyAvLyBTdGFydCB0aGUgZ2FtZSBsb2dpY1xuXG4gICAgY29tcHV0ZXJHcmlkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVBdHRhY2spO1xuICB9KTtcblxuICByZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY3JlYXRlR3JpZChwbGF5ZXJHcmlkQ29udGFpbmVyLCByb3dzLCBjb2x1bW5zKTtcbiAgICBjcmVhdGVHcmlkKGNvbXB1dGVyR3JpZENvbnRhaW5lciwgcm93cywgY29sdW1ucyk7XG5cbiAgICBwcm9jZXNzQXR0YWNrID0gc3RhcnRHYW1lKGhpZ2hsaWdodFBsYXllclNoaXApOyAvLyBTdGFydCB0aGUgZ2FtZSBsb2dpY1xuXG4gICAgY29tcHV0ZXJHcmlkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVBdHRhY2spO1xuICB9KTtcblxuICAvLyBGdW5jdGlvbiB0byBoaWdobGlnaHQgcGxheWVyIHNoaXAgb24gdGhlIGdyaWRcbiAgZnVuY3Rpb24gaGlnaGxpZ2h0UGxheWVyU2hpcChzdGFydFBvc2l0aW9uLCBsZW5ndGgsIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3QgW3N0YXJ0WCwgc3RhcnRZXSA9IHN0YXJ0UG9zaXRpb247XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeCA9IG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IHN0YXJ0WCA6IHN0YXJ0WCArIGk7XG4gICAgICBjb25zdCB5ID0gb3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiID8gc3RhcnRZICsgaSA6IHN0YXJ0WTtcbiAgICAgIGNvbnN0IGNlbGwgPSBwbGF5ZXJHcmlkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYFxuICAgICAgKTtcbiAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXAtaGlnaGxpZ2h0XCIpOyAvLyBBZGQgY2xhc3MgdG8gaGlnaGxpZ2h0IHRoZSBjZWxsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQXR0YWNrKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3F1YXJlc1wiKSkge1xuICAgICAgY29uc3QgeCA9IHBhcnNlSW50KHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIikpO1xuICAgICAgY29uc3QgeSA9IHBhcnNlSW50KHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIikpO1xuXG4gICAgICAvLyBDYWxsIHRoZSBmdW5jdGlvbiB0byBwcm9jZXNzIHRoZSBhdHRhY2tcbiAgICAgIGlmIChwcm9jZXNzQXR0YWNrKSBwcm9jZXNzQXR0YWNrKFt4LCB5XSk7XG4gICAgfVxuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==