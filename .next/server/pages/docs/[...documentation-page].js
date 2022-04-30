module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/docs/[...documentation-page]": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/docs/[...documentation-page].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./assets/images/game-ci-brand-logo-wordmark.svg":
/*!*******************************************************!*\
  !*** ./assets/images/game-ci-brand-logo-wordmark.svg ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgGameCiBrandLogoWordmark(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1024mm",
    height: "1024mm",
    viewBox: "0 0 1024 1024"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
    style: {
      mixBlendMode: "normal"
    }
  }, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M243.263 675.414a16.1 16.1 0 01-11.421-4.732l-37.372-37.371c-6.31-6.307-6.31-16.532 0-22.842 6.31-6.306 16.532-6.306 22.842 0l25.95 25.951 63.323-63.319c6.313-6.307 16.535-6.303 22.841 0 6.31 6.303 6.31 16.532 0 22.841l-74.743 74.74a16.105 16.105 0 01-11.42 4.732M260.04 441.61h-92.722c-24.53 0-42.73-4.9-54.6-14.715-11.875-9.81-17.808-24.921-17.808-45.331v-91.837c0-20.406 5.933-35.517 17.808-45.328 11.87-9.811 30.07-14.721 54.6-14.721h73.589c3.724 0 6.425.84 8.091 2.503 1.67 1.67 2.504 4.371 2.504 8.095v35.618c0 3.727-.834 6.426-2.504 8.095-1.666 1.666-4.367 2.5-8.091 2.5h-61.224c-6.087 0-10.598 1.227-13.541 3.678-2.943 2.46-4.415 6.134-4.415 11.038v70.35c0 4.907 1.126 8.537 3.386 10.894 2.252 2.353 5.638 3.532 10.153 3.532h28.551v-45.92c0-3.728.835-6.427 2.504-8.096 1.663-1.666 4.365-2.5 8.095-2.5h45.623c3.725 0 6.426.834 8.095 2.5 1.663 1.67 2.5 4.368 2.5 8.095v90.955c0 3.73-.837 6.429-2.5 8.092-1.669 1.669-4.37 2.503-8.095 2.503M383.37 291.492l-13.834 44.741h46.21l-13.834-44.741c-.787-1.763-1.616-3.04-2.504-3.828-.88-.78-1.91-1.177-3.087-1.177h-7.36c-1.177 0-2.206.396-3.091 1.177-.881.787-1.72 2.065-2.5 3.828m-16.78 139.524c0 3.727-.835 6.429-2.504 8.092-1.666 1.669-4.364 2.504-8.092 2.504h-43.27c-3.727 0-6.426-.835-8.095-2.504-1.67-1.663-2.5-4.365-2.5-8.092v-77.711c0-5.886.928-12.657 2.795-20.306 1.864-7.656 4.757-16.586 8.685-26.789l25.609-66.814c1.176-3.339 2.99-5.789 5.443-7.36 2.45-1.57 5.638-2.357 9.567-2.357h79.18c3.726 0 6.817.787 9.27 2.356 2.454 1.572 4.27 4.022 5.447 7.36l25.61 66.815c3.921 10.203 6.817 19.133 8.68 26.789 1.864 7.649 2.8 14.42 2.8 20.306v77.711c0 3.727-.841 6.429-2.504 8.092-1.67 1.669-4.368 2.504-8.095 2.504h-44.447c-3.928 0-6.82-.835-8.685-2.504-1.863-1.663-2.792-4.365-2.792-8.092v-41.212H366.59zm209.283 10.594h-43.86c-3.728 0-6.429-.834-8.095-2.503-1.67-1.663-2.498-4.362-2.498-8.092V240.276c0-3.724.828-6.425 2.498-8.095 1.666-1.663 4.367-2.503 8.095-2.503h47.393c3.134 0 5.738.693 7.796 2.061 2.065 1.377 3.976 3.636 5.742 6.77l26.494 47.98c.976 1.767 1.81 3.044 2.5 3.825.684.787 1.616 1.177 2.796 1.177h2.648c1.18 0 2.108-.389 2.799-1.177.684-.78 1.515-2.058 2.5-3.825l26.196-47.98c1.77-3.134 3.68-5.393 5.742-6.77 2.058-1.368 4.659-2.061 7.8-2.061h47.684c3.724 0 6.426.84 8.095 2.503 1.663 1.67 2.504 4.371 2.504 8.095v190.739c0 3.73-.84 6.429-2.504 8.092-1.669 1.669-4.37 2.503-8.095 2.503h-45.331c-3.728 0-6.426-.834-8.095-2.503-1.67-1.663-2.498-4.362-2.498-8.092V327.403l-17.37 32.085c-1.766 3.338-3.877 5.738-6.328 7.21-2.453 1.475-5.547 2.209-9.271 2.209h-11.772c-3.734 0-6.821-.734-9.275-2.209-2.457-1.472-4.562-3.872-6.328-7.21l-17.367-32.085v103.612c0 3.73-.838 6.429-2.5 8.092-1.67 1.669-4.371 2.503-8.095 2.503m342.622 0H781.917c-3.73 0-6.432-.834-8.095-2.503-1.672-1.663-2.5-4.362-2.5-8.092V240.276c0-3.724.827-6.425 2.5-8.095 1.663-1.663 4.364-2.503 8.095-2.503h136.578c3.724 0 6.426.84 8.092 2.503 1.666 1.67 2.503 4.371 2.503 8.095v34.441c0 3.728-.837 6.426-2.503 8.092-1.666 1.67-4.368 2.504-8.092 2.504H837.25v22.662h57.398c3.728 0 6.426.838 8.095 2.504 1.666 1.666 2.504 4.37 2.504 8.092v31.495c0 3.734-.838 6.432-2.504 8.095-1.669 1.672-4.367 2.504-8.095 2.504H837.25v25.316h81.244c3.724 0 6.426.835 8.092 2.498 1.666 1.672 2.503 4.37 2.503 8.095v34.44c0 3.731-.837 6.43-2.503 8.093-1.666 1.669-4.368 2.503-8.092 2.503",
    fill: "#3dc094"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M130.313 707.664h263.269V532.723h-263.27zm279.421 32.3h-295.57c-8.92 0-16.153-7.231-16.153-16.151V516.57c0-8.917 7.232-16.15 16.153-16.15h295.57c8.92 0 16.152 7.233 16.152 16.15v207.242c0 8.92-7.232 16.152-16.152 16.152m-79.838 54.358H194c-8.92 0-16.149-7.232-16.149-16.149 0-8.92 7.229-16.155 16.149-16.155h135.897c8.92 0 16.152 7.235 16.152 16.155 0 8.917-7.232 16.15-16.152 16.15m344.04-4.735h-98.344c-33.59 0-58.512-6.714-74.765-20.152-16.262-13.432-24.385-34.121-24.385-62.067V582.02c0-27.946 8.123-48.704 24.385-62.271 16.253-13.564 41.174-20.357 74.765-20.357h98.344c5.101 0 8.798 1.149 11.082 3.43 2.28 2.284 3.429 5.98 3.429 11.082v48.77c0 5.105-1.148 8.8-3.43 11.085-2.283 2.28-5.98 3.423-11.081 3.423h-81.012c-8.333 0-14.508 1.682-18.54 5.036-4.035 3.366-6.046 8.402-6.046 15.117v95.924c0 6.72 2.011 11.625 6.046 14.712 4.032 3.094 10.207 4.634 18.54 4.634h81.012c5.101 0 8.798 1.149 11.082 3.43 2.28 2.284 3.429 5.98 3.429 11.082v47.963c0 5.105-1.148 8.804-3.43 11.08-2.283 2.29-5.98 3.428-11.081 3.428m68.113 0c-5.105 0-8.807-1.138-11.085-3.429-2.287-2.275-3.423-5.974-3.423-11.079v-47.963c0-5.102 1.136-8.798 3.423-11.082 2.278-2.281 5.98-3.43 11.085-3.43h39.9V577.182h-39.9c-5.105 0-8.807-1.142-11.085-3.423-2.287-2.284-3.423-5.98-3.423-11.085v-48.77c0-5.102 1.136-8.798 3.423-11.082 2.278-2.281 5.98-3.43 11.085-3.43h171.7c5.102 0 8.795 1.149 11.085 3.43 2.275 2.284 3.423 5.98 3.423 11.082v48.77c0 5.105-1.148 8.8-3.423 11.085-2.29 2.28-5.983 3.423-11.085 3.423h-39.094v135.423h39.094c5.102 0 8.795 1.149 11.085 3.43 2.275 2.284 3.423 5.98 3.423 11.082v47.963c0 5.105-1.148 8.804-3.423 11.08-2.29 2.29-5.983 3.428-11.085 3.428z",
    fill: "#fff"
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (SvgGameCiBrandLogoWordmark);

/***/ }),

/***/ "./components/context/page-context.ts":
/*!********************************************!*\
  !*** ./components/context/page-context.ts ***!
  \********************************************/
/*! exports provided: PageContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContext", function() { return PageContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PageContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  permalinkPath: '',
  absolutePath: ''
});

/***/ }),

/***/ "./components/layout/base-layout.tsx":
/*!*******************************************!*\
  !*** ./components/layout/base-layout.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_nav_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/nav-bar */ "./components/layout/header/nav-bar.tsx");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer */ "./components/layout/footer/footer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\layout\\base-layout.tsx";




const {
  Content
} = antd__WEBPACK_IMPORTED_MODULE_0__["Layout"];

const BaseLayout = ({
  children,
  showSearch,
  stickyHeader
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Layout"], {
  style: {
    minHeight: '100vh'
  },
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_header_nav_bar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    showSearch: showSearch,
    stickyHeader: stickyHeader
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Content, {
    style: {
      paddingTop: stickyHeader ? '64px' : 0
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_footer_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 15,
  columnNumber: 3
}, undefined);

BaseLayout.defaultProps = {
  showSearch: true,
  stickyHeader: false
};
/* harmony default export */ __webpack_exports__["default"] = (BaseLayout);

/***/ }),

/***/ "./components/layout/footer/footer.js":
/*!********************************************!*\
  !*** ./components/layout/footer/footer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/all */ "react-icons/all");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_all__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\layout\\footer\\footer.js";



const {
  Footer
} = antd__WEBPACK_IMPORTED_MODULE_0__["Layout"];

const FooterWrapper = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Footer, {
  style: {
    textAlign: 'center',
    zIndex: 5
  },
  children: ["Made with \u2764 by open source contributors and powered by", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
    href: "https://vercel.com?utm_source=game-ci",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_1__["IoLogoVercel"], {
      alt: "Vercel",
      size: 20,
      style: {
        margin: '0 4px -2px',
        color: 'black'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (FooterWrapper);

/***/ }),

/***/ "./components/layout/header/nav-bar.module.scss":
/*!******************************************************!*\
  !*** ./components/layout/header/nav-bar.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"navBar": "_2CZfterzVQ5L7veJCmXsJc",
	"sticky": "_3m_SFEJ3eN9gizfrkAgMTX",
	"brand": "_3ICpOw7P1bpE5Gjm1psBiq",
	"menu": "UNFxLwlTptBSx4l2GxLgA"
};

/***/ }),

/***/ "./components/layout/header/nav-bar.tsx":
/*!**********************************************!*\
  !*** ./components/layout/header/nav-bar.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_layout_header_search_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/layout/header/search-bar */ "./components/layout/header/search-bar.tsx");
/* harmony import */ var _components_layout_header_source_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout/header/source-links */ "./components/layout/header/source-links.tsx");
/* harmony import */ var _core_hooks_use_top_level_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/hooks/use-top-level-route */ "./core/hooks/use-top-level-route.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/all */ "react-icons/all");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_all__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_game_ci_brand_logo_wordmark_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/images/game-ci-brand-logo-wordmark.svg */ "./assets/images/game-ci-brand-logo-wordmark.svg");
/* harmony import */ var _nav_bar_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav-bar.module.scss */ "./components/layout/header/nav-bar.module.scss");
/* harmony import */ var _nav_bar_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nav_bar_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\layout\\header\\nav-bar.tsx";











const {
  Header
} = antd__WEBPACK_IMPORTED_MODULE_3__["Layout"];
const {
  Item
} = antd__WEBPACK_IMPORTED_MODULE_3__["Menu"];

const NavBar = ({
  showSearch,
  stickyHeader
}) => {
  const defaultSelectedKey = Object(_core_hooks_use_top_level_route__WEBPACK_IMPORTED_MODULE_2__["useTopLevelRoute"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Header, {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(_nav_bar_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.navBar, {
      [_nav_bar_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.sticky]: stickyHeader
    }),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
      className: _nav_bar_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.brand,
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_assets_images_game_ci_brand_logo_wordmark_svg__WEBPACK_IMPORTED_MODULE_8__["default"], {
        height: 64,
        width: 64
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
      theme: "dark",
      mode: "horizontal",
      className: _nav_bar_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.menu,
      defaultSelectedKeys: [defaultSelectedKey],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)
      }, "/", false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/docs",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
            children: "Docs"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)
      }, "/docs", false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), showSearch ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_layout_header_search_bar__WEBPACK_IMPORTED_MODULE_0__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 23
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        style: {
          flex: 1
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 39
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_layout_header_source_links__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/discord",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_6__["IoLogoDiscord"], {
              size: 24,
              style: {
                marginBottom: -5
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, undefined), "Discord"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)
      }, "/discord", false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

NavBar.defaultProps = {
  showSearch: false,
  stickyHeader: false
};
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./components/layout/header/search-bar.module.scss":
/*!*********************************************************!*\
  !*** ./components/layout/header/search-bar.module.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"searchBar": "_21TIS6hspwFd86UPzsNgBB",
	"searchBox": "_1AqGBdM_0dRl6vwUnT4U4L"
};

/***/ }),

/***/ "./components/layout/header/search-bar.tsx":
/*!*************************************************!*\
  !*** ./components/layout/header/search-bar.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/all */ "react-icons/all");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_all__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-instantsearch-dom */ "react-instantsearch-dom");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_search_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/search/configuration */ "./components/search/configuration.tsx");
/* harmony import */ var _components_search_results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/search/results */ "./components/search/results.tsx");
/* harmony import */ var _components_search_stats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/search/stats */ "./components/search/stats.tsx");
/* harmony import */ var _search_bar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-bar.module.scss */ "./components/layout/header/search-bar.module.scss");
/* harmony import */ var _search_bar_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_search_bar_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\layout\\header\\search-bar.tsx";









const SearchBar = () => {
  const {
    0: searchFocused,
    1: setFocus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: searchHovered,
    1: setSearchHovered
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: resultsHovered,
    1: setResultsHovered
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const active = searchFocused || searchHovered || resultsHovered;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    onMouseEnter: () => setSearchHovered(true),
    onMouseLeave: () => setSearchHovered(false),
    className: _search_bar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.searchBar,
    style: {
      flex: 1,
      padding: '0 10%',
      position: 'relative',
      backgroundColor: active ? '#373445' : 'transparent'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_search_configuration__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__["SearchBox"], {
      className: _search_bar_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.searchBox,
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "ais-results-panel",
      onMouseEnter: () => setResultsHovered(true),
      onMouseLeave: () => setResultsHovered(false),
      style: {
        display: active ? 'block' : 'none'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        style: {
          paddingTop: 8
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_search_results__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "ais-meta-information",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_search_stats__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
          children: ["Powered by", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
            href: "http://algolia.com/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_1__["SiAlgolia"], {
              size: 24,
              style: {
                marginLeft: 8
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./components/layout/header/source-links.tsx":
/*!***************************************************!*\
  !*** ./components/layout/header/source-links.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/all */ "react-icons/all");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_all__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\layout\\header\\source-links.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  Item,
  ItemGroup,
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"]; // eslint-disable-next-line unicorn/prevent-abbreviations

const SourceLinks = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(SubMenu, _objectSpread(_objectSpread({}, props), {}, {
  selectable: false,
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_1__["AiOutlineGithub"], {
    size: 24,
    style: {
      marginBottom: -5
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 11
  }, undefined),
  title: "Source code",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ItemGroup, {
    title: "Projects",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Item, {
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_1__["AiOutlineGithub"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 19
      }, undefined),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
        target: "_blank",
        rel: "noreferrer",
        href: "https://github.com/game-ci/documentation",
        children: "This Website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, "source:game-ci:documentation", false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Item, {
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_1__["AiOutlineGithub"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 19
      }, undefined),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
        target: "_blank",
        rel: "noreferrer",
        href: "https://github.com/game-ci/versioning-backend",
        children: "Versioning Backend"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, "source:game-ci:versioning-backend", false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ItemGroup, {
    title: "Docker",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Item, {
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_1__["AiOutlineGithub"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 19
      }, undefined),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
        target: "_blank",
        rel: "noreferrer",
        href: "https://github.com/game-ci/docker",
        children: "Docker images for Unity"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, "external:game-ci:docker", false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ItemGroup, {
    title: "Gitlab",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Item, {
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_1__["AiOutlineGitlab"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 19
      }, undefined),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
        target: "_blank",
        rel: "noreferrer",
        href: "https://gitlab.com/game-ci/unity3d-gitlab-ci-example",
        children: "gitlab-ci unity3d example project"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined)
    }, "external:game-ci:unity3d-gitlab-ci-example", false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ItemGroup, {
    title: "GitHub Actions",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Item, {
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_1__["AiOutlineGithub"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }, undefined),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
        target: "_blank",
        rel: "noreferrer",
        href: "https://github.com/game-ci/unity-actions",
        children: "Unity Actions"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, "external:game-ci:unity-actions", false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Item, {
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_1__["AiOutlineGithub"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }, undefined),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
        target: "_blank",
        rel: "noreferrer",
        href: "https://github.com/game-ci/unity-request-activation-file",
        children: "Unity Request Activation"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined)
    }, "external:game-ci:unity-request-activation-file", false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Item, {
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_1__["AiOutlineGithub"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 19
      }, undefined),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
        target: "_blank",
        rel: "noreferrer",
        href: "https://github.com/game-ci/unity-activate",
        children: "Unity Activate"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined)
    }, "external:game-ci:unity-activate", false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Item, {
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_1__["AiOutlineGithub"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 19
      }, undefined),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
        target: "_blank",
        rel: "noreferrer",
        href: "https://github.com/game-ci/unity-test-runner",
        children: "Unity Test Runner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined)
    }, "external:game-ci:unity-test-runner", false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Item, {
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_1__["AiOutlineGithub"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 19
      }, undefined),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
        target: "_blank",
        rel: "noreferrer",
        href: "https://github.com/game-ci/unity-builder",
        children: "Unity Builder"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined)
    }, "external:game-ci:unity-builder", false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Item, {
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_1__["AiOutlineGithub"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 19
      }, undefined),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
        target: "_blank",
        rel: "noreferrer",
        href: "https://github.com/game-ci/unity-return-license",
        children: "Unity Return License"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined)
    }, "external:game-ci:unity-return-license", false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Item, {
      icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_1__["AiOutlineGithub"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 19
      }, undefined),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
        target: "_blank",
        rel: "noreferrer",
        href: "https://github.com/game-ci/steam-deploy",
        children: "Steam Deploy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined)
    }, "external:game-ci:steam-deploy", false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, undefined)]
}), void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (SourceLinks);

/***/ }),

/***/ "./components/layout/main/breadcrumb.js":
/*!**********************************************!*\
  !*** ./components/layout/main/breadcrumb.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools_menu_menu_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tools/menu/menu-node */ "./tools/menu/menu-node.ts");
/* harmony import */ var _tools_menu_menu_segment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/tools/menu/menu-segment */ "./tools/menu/menu-segment.ts");
/* harmony import */ var _tools_menu_menu_structure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/tools/menu/menu-structure */ "./tools/menu/menu-structure.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/all */ "react-icons/all");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_all__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_routing_use_path_segments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/core/routing/use-path-segments */ "./core/routing/use-path-segments.js");
/* harmony import */ var _pages_docs_menu_menu_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/docs/menu/menu-context */ "./components/pages/docs/menu/menu-context.ts");
/* harmony import */ var _breadcrumb_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./breadcrumb.module.scss */ "./components/layout/main/breadcrumb.module.scss");
/* harmony import */ var _breadcrumb_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_breadcrumb_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\layout\\main\\breadcrumb.js";











const {
  Item
} = antd__WEBPACK_IMPORTED_MODULE_5__["Breadcrumb"];

const BreadcrumbWrapper = () => {
  const segments = Object(_core_routing_use_path_segments__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_6__["AiOutlineHome"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 36
  }, undefined));
  const {
    menuStructure
  } = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_pages_docs_menu_menu_context__WEBPACK_IMPORTED_MODULE_8__["default"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Breadcrumb"], {
    className: _breadcrumb_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.breadCrumb,
    children: segments.map(({
      url,
      name
    }) => {
      if (_tools_menu_menu_segment__WEBPACK_IMPORTED_MODULE_2__["MenuSegment"].isVersion(name)) return null; // "/" is a segment too

      if (typeof name !== 'string') return null; // If segment matches folder in generated menu-structure, determine its first page

      const menuNode = _tools_menu_menu_structure__WEBPACK_IMPORTED_MODULE_3__["MenuStructure"].getNodeByUrl(menuStructure, url);
      const nearestUrl = _tools_menu_menu_node__WEBPACK_IMPORTED_MODULE_1__["MenuNode"].findFirstPage(menuNode);
      const href = nearestUrl ? `/docs/${nearestUrl}` : url;
      const capitalisedName = name.charAt(0).toUpperCase() + name.slice(1);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: href,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
            children: capitalisedName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, undefined)
      }, href, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (BreadcrumbWrapper);

/***/ }),

/***/ "./components/layout/main/breadcrumb.module.scss":
/*!*******************************************************!*\
  !*** ./components/layout/main/breadcrumb.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"breadCrumb": "_5UckR8xjCVEYVmEwU-T21"
};

/***/ }),

/***/ "./components/markdown/components/anchor-item.tsx":
/*!********************************************************!*\
  !*** ./components/markdown/components/anchor-item.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_search_utils_extract_sections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/tools/search/utils/extract-sections */ "./tools/search/utils/extract-sections.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\markdown\\components\\anchor-item.tsx";




const {
  Link
} = antd__WEBPACK_IMPORTED_MODULE_1__["Anchor"];

const AnchorItem = ({
  level,
  children
}) => {
  if (level >= 6) {
    return null;
  }

  const value = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(children)[0];
  const anchorId = Object(_tools_search_utils_extract_sections__WEBPACK_IMPORTED_MODULE_2__["extractAnchorId"])(value); // styles

  const paddingLeft = level * 8 - 8;
  const fontSize = `${120 - level * 10}%`;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    style: {
      paddingLeft,
      fontSize
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Link, {
      href: `#${anchorId}`,
      title: value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AnchorItem);

/***/ }),

/***/ "./components/markdown/components/anchor-view.module.scss":
/*!****************************************************************!*\
  !*** ./components/markdown/components/anchor-view.module.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"anchorWrapper": "_2lbO5zE0GEBFWr8hCa4uLx",
	"topSpacer": "-JVWo_LhNMcV8oBW1flG4"
};

/***/ }),

/***/ "./components/markdown/components/anchor-view.tsx":
/*!********************************************************!*\
  !*** ./components/markdown/components/anchor-view.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _anchor_view_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anchor-view.module.scss */ "./components/markdown/components/anchor-view.module.scss");
/* harmony import */ var _anchor_view_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_anchor_view_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\markdown\\components\\anchor-view.tsx";





const AnchorView = ({
  children
}) => {
  const {
    0: targetOffset,
    1: setTargetOffset
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: windowHeight,
    1: setWindowHeight
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(); // Update offset based on window size

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const eightPercentOfScreenHeight = Math.floor(window.innerHeight / 12.5);
    const maxDistance = 24; // This will need to be higher if there's a sticky menu bar

    const offset = Math.min(eightPercentOfScreenHeight, maxDistance);
    setTargetOffset(offset);
  }, [windowHeight]); // Update window size on resize

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const onResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Anchor"], {
    className: _anchor_view_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.anchorWrapper,
    targetOffset: targetOffset,
    affix: true,
    showInkInFixed: true,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: _anchor_view_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.topSpacer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AnchorView);

/***/ }),

/***/ "./components/markdown/components/article.tsx":
/*!****************************************************!*\
  !*** ./components/markdown/components/article.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown-components.module.scss */ "./components/markdown/components/markdown-components.module.scss");
/* harmony import */ var _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\markdown\\components\\article.tsx";




const Article = ({
  children
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("article", {
  className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ant-typography', _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.markdown),
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./components/markdown/components/blockquote.tsx":
/*!*******************************************************!*\
  !*** ./components/markdown/components/blockquote.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown-components.module.scss */ "./components/markdown/components/markdown-components.module.scss");
/* harmony import */ var _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\markdown\\components\\blockquote.tsx";




const Blockquote = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("blockquote", {
    className: _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.blockquote,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Blockquote);

/***/ }),

/***/ "./components/markdown/components/code-block.js":
/*!******************************************************!*\
  !*** ./components/markdown/components/code-block.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/core */ "highlight.js/lib/core");
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/all */ "react-icons/all");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_all__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_hooks_use_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/hooks/use-notification */ "./core/hooks/use-notification.tsx");
/* harmony import */ var _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./markdown-components.module.scss */ "./components/markdown/components/markdown-components.module.scss");
/* harmony import */ var _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\markdown\\components\\code-block.js";



 // Icon for Copy Button





highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_2__["registerLanguage"]('yaml', __webpack_require__(/*! highlight.js/lib/languages/yaml */ "highlight.js/lib/languages/yaml"));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_2__["registerLanguage"]('csharp', __webpack_require__(/*! highlight.js/lib/languages/csharp */ "highlight.js/lib/languages/csharp"));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_2__["registerLanguage"]('javascript', __webpack_require__(/*! highlight.js/lib/languages/javascript */ "highlight.js/lib/languages/javascript"));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_2__["registerLanguage"]('typescript', __webpack_require__(/*! highlight.js/lib/languages/typescript */ "highlight.js/lib/languages/typescript"));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_2__["registerLanguage"]('bash', __webpack_require__(/*! highlight.js/lib/languages/bash */ "highlight.js/lib/languages/bash"));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_2__["registerLanguage"]('ruby', __webpack_require__(/*! highlight.js/lib/languages/ruby */ "highlight.js/lib/languages/ruby"));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_2__["registerLanguage"]('powershell', __webpack_require__(/*! highlight.js/lib/languages/powershell */ "highlight.js/lib/languages/powershell"));

class CodeBlock extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(properties) {
    super(properties);
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  setRef(element) {
    this.codeEl = element;
  }

  highlightCode() {
    highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_2__["highlightBlock"](this.codeEl);
  }

  render() {
    const {
      children,
      language
    } = this.props; // Add Styling to button here.
    // TODO decide if the button should be left or right aligned.

    const CopyButton = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: {
        position: 'absolute',
        top: 8,
        right: 8
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: () => {
          navigator.clipboard.writeText(children[0]);
          Object(_core_hooks_use_notification__WEBPACK_IMPORTED_MODULE_5__["useNotification"])().info({
            message: 'Code Copied Successfully'
          });
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_4__["GrCopy"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this);

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("pre", {
      className: _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.codeBlock,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(CopyButton, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        ref: this.setRef,
        className: `language-${language}`,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this);
  }

}

CodeBlock.defaultProps = {
  language: ''
};
CodeBlock.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  language: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (CodeBlock);

/***/ }),

/***/ "./components/markdown/components/embedded-link-or-paragraph.tsx":
/*!***********************************************************************!*\
  !*** ./components/markdown/components/embedded-link-or-paragraph.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\markdown\\components\\embedded-link-or-paragraph.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/prop-types */


const {
  Paragraph
} = antd__WEBPACK_IMPORTED_MODULE_0__["Typography"];

class EmbeddedLink {
  static fromChildren(children) {
    if (children.length === 1) {
      const potentialLink = children[0];

      if (typeof potentialLink === 'string' && potentialLink.startsWith('https://')) {
        return potentialLink;
      }
    }

    return null;
  }

  static isYoutubeLink(link) {
    // Starts with youtube
    if (/^https:\/\/www\.youtube(-nocookie)?\.com/.test(link)) {
      // Url as expected
      if (!/^https:\/\/www\.youtube-nocookie\.com\/embed\/.+$/.test(link)) {
        throw new Error(`Found youtube link, but it is malformed.
        expected format: "https://www.youtube-nocookie.com/embed/XXXXXXXXXX"
        but received: "${link}"`);
      }

      return true;
    }

    return false;
  }

}

const EmbeddedLinkOrParagraph = (_ref) => {
  let {
    node,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["node", "children"]);

  const regularParagraph = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Paragraph, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 28
  }, undefined);

  const link = EmbeddedLink.fromChildren(children);
  if (!link) return regularParagraph;

  if (EmbeddedLink.isYoutubeLink(link)) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("iframe", {
      width: "560",
      height: "315",
      src: link,
      title: "YouTube video player",
      frameBorder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined);
  }

  return regularParagraph;
};

/* harmony default export */ __webpack_exports__["default"] = (EmbeddedLinkOrParagraph);

/***/ }),

/***/ "./components/markdown/components/heading-with-anchor.tsx":
/*!****************************************************************!*\
  !*** ./components/markdown/components/heading-with-anchor.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_markdown_components_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/markdown/components/heading */ "./components/markdown/components/heading.tsx");
/* harmony import */ var _tools_search_utils_extract_sections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/tools/search/utils/extract-sections */ "./tools/search/utils/extract-sections.ts");
/* harmony import */ var _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markdown-components.module.scss */ "./components/markdown/components/markdown-components.module.scss");
/* harmony import */ var _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\markdown\\components\\heading-with-anchor.tsx";







const copyUrlToClipboard = (hash, onSuccess = () => {}, onError = () => {}) => {
  const {
    href
  } = window.location;
  const hashIndex = href.indexOf('#');
  const baseUrl = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const link = `${baseUrl}#${hash}`;
  navigator.clipboard.writeText(link).then(onSuccess, onError);
};

const onSuccessfullyCopied = () => {
  antd__WEBPACK_IMPORTED_MODULE_1__["notification"].info({
    message: `Link was copied to clipboard.`
  });
};

const HeadingWithAnchor = ({
  level,
  children
}) => {
  const value = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(children)[0];
  const anchorId = Object(_tools_search_utils_extract_sections__WEBPACK_IMPORTED_MODULE_3__["extractAnchorId"])(value);

  const onClick = () => {
    copyUrlToClipboard(anchorId, onSuccessfullyCopied);
  };

  const onKeyPress = event => {
    if (event.keyCode === 13) {
      copyUrlToClipboard(anchorId, onSuccessfullyCopied);
    }
  };

  const anchor = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
    onClick: onClick,
    className: _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.anchor,
    role: "button",
    tabIndex: 0,
    onKeyPress: onKeyPress,
    children: "#"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, undefined);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_markdown_components_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    level: level,
    id: anchorId,
    children: [children, level >= 2 && anchor]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HeadingWithAnchor);

/***/ }),

/***/ "./components/markdown/components/heading.tsx":
/*!****************************************************!*\
  !*** ./components/markdown/components/heading.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdown-components.module.scss */ "./components/markdown/components/markdown-components.module.scss");
/* harmony import */ var _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\markdown\\components\\heading.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const {
  Title
} = antd__WEBPACK_IMPORTED_MODULE_1__["Typography"];

const Heading = (_ref) => {
  let {
    level,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["level", "children"]);

  switch (level) {
    case 1:
    case 2:
    case 3:
    case 4:
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Title, _objectSpread(_objectSpread({}, props), {}, {
        level: level,
        className: _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heading,
        children: children
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined);

    case 5:
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h5", _objectSpread(_objectSpread({}, props), {}, {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ant-typography', _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heading),
        children: children
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined);

    case 6:
    default:
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h6", _objectSpread(_objectSpread({}, props), {}, {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ant-typography', _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.heading),
        children: children
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined);
  }
};

Heading.defaultProps = {
  id: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./components/markdown/components/list.tsx":
/*!*************************************************!*\
  !*** ./components/markdown/components/list.tsx ***!
  \*************************************************/
/*! exports provided: List, ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markdown-components.module.scss */ "./components/markdown/components/markdown-components.module.scss");
/* harmony import */ var _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\markdown\\components\\list.tsx";




const List = props => {
  const {
    ordered,
    children
  } = props;

  if (ordered) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ol", {
      className: _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.list,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
    className: _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.list,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 10
  }, undefined);
};

List.defaultProps = {
  ordered: false
};

const ListItem = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('ant-typography', _markdown_components_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.listItem),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 10
  }, undefined);
};



/***/ }),

/***/ "./components/markdown/components/markdown-components.module.scss":
/*!************************************************************************!*\
  !*** ./components/markdown/components/markdown-components.module.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"markdown": "iKfHR0OeuEIU24XJ5c5SL",
	"blockquote": "_16PC679HsrPry65ldRQ19b",
	"codeBlock": "_1vKKfcqAMcrLwVkVuKRaMG",
	"heading": "_1aPOqy6BTJlkEjnY3QjsEm",
	"anchor": "ZZIpGHAfsz0AmluKgQjON"
};

/***/ }),

/***/ "./components/markdown/markdown-components.js":
/*!****************************************************!*\
  !*** ./components/markdown/markdown-components.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_blockquote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/blockquote */ "./components/markdown/components/blockquote.tsx");
/* harmony import */ var _components_code_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/code-block */ "./components/markdown/components/code-block.js");
/* harmony import */ var _components_embedded_link_or_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/embedded-link-or-paragraph */ "./components/markdown/components/embedded-link-or-paragraph.tsx");
/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/list */ "./components/markdown/components/list.tsx");
/* harmony import */ var _components_heading_with_anchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/heading-with-anchor */ "./components/markdown/components/heading-with-anchor.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\markdown\\markdown-components.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/prop-types */







/* harmony default export */ __webpack_exports__["default"] = ({
  h1: (_ref) => {
    let {
      node,
      children
    } = _ref,
        props = _objectWithoutProperties(_ref, ["node", "children"]);

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_heading_with_anchor__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({
      level: 1
    }, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, undefined);
  },
  h2: (_ref2) => {
    let {
      node,
      children
    } = _ref2,
        props = _objectWithoutProperties(_ref2, ["node", "children"]);

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_heading_with_anchor__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({
      level: 2
    }, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, undefined);
  },
  h3: (_ref3) => {
    let {
      node,
      children
    } = _ref3,
        props = _objectWithoutProperties(_ref3, ["node", "children"]);

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_heading_with_anchor__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({
      level: 3
    }, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }, undefined);
  },
  h4: (_ref4) => {
    let {
      node,
      children
    } = _ref4,
        props = _objectWithoutProperties(_ref4, ["node", "children"]);

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_heading_with_anchor__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({
      level: 4
    }, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }, undefined);
  },
  h5: (_ref5) => {
    let {
      node,
      children
    } = _ref5,
        props = _objectWithoutProperties(_ref5, ["node", "children"]);

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_heading_with_anchor__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({
      level: 5
    }, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }, undefined);
  },
  h6: (_ref6) => {
    let {
      node,
      children
    } = _ref6,
        props = _objectWithoutProperties(_ref6, ["node", "children"]);

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_heading_with_anchor__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({
      level: 6
    }, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }, undefined);
  },
  p: _components_embedded_link_or_paragraph__WEBPACK_IMPORTED_MODULE_3__["default"],
  hr: antd__WEBPACK_IMPORTED_MODULE_0__["Divider"],
  ol: (_ref7) => {
    let {
      node,
      children
    } = _ref7,
        props = _objectWithoutProperties(_ref7, ["node", "children"]);

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_list__WEBPACK_IMPORTED_MODULE_4__["List"], _objectSpread(_objectSpread({}, props), {}, {
      ordered: true,
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }, undefined);
  },
  ul: (_ref8) => {
    let {
      node,
      children
    } = _ref8,
        props = _objectWithoutProperties(_ref8, ["node", "children"]);

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_list__WEBPACK_IMPORTED_MODULE_4__["List"], _objectSpread(_objectSpread({}, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 41
    }, undefined);
  },
  li: _components_list__WEBPACK_IMPORTED_MODULE_4__["ListItem"],
  code: (_ref9) => {
    let {
      node,
      inline,
      children
    } = _ref9,
        props = _objectWithoutProperties(_ref9, ["node", "inline", "children"]);

    return inline ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("code", _objectSpread(_objectSpread({}, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 14
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_code_block__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 51
    }, undefined);
  },
  // Created a custom pre element which checks if code element is embedded or not.
  pre: ({
    node,
    children
  }) => {
    var _node$children;

    if (((_node$children = node.children) === null || _node$children === void 0 ? void 0 : _node$children.length) === 1 && node.children[0].tagName === 'code') {
      return children;
    }

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("pre", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 12
    }, undefined);
  },
  blockquote: _components_blockquote__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./components/markdown/markdown-renderer.tsx":
/*!***************************************************!*\
  !*** ./components/markdown/markdown-renderer.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_markdown_components_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/markdown/components/article */ "./components/markdown/components/article.tsx");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _markdown_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdown-components */ "./components/markdown/markdown-components.js");
/* harmony import */ var _pages_docs_edit_on_github_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/docs/edit-on-github-link */ "./components/pages/docs/edit-on-github-link.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\markdown\\markdown-renderer.tsx";






const propTypes = {
  document: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    date: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }).isRequired
};

const MarkdownRenderer = ({
  document,
  meta
}) => {
  const {
    title = '',
    date = ''
  } = meta;
  const metaInformation = `${date} - ${title}`.replace(/(^\s-\s)|(\s-\s$)/, '');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("sub", {
      children: metaInformation
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_markdown_components_article__WEBPACK_IMPORTED_MODULE_0__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
        components: _markdown_components__WEBPACK_IMPORTED_MODULE_3__["default"],
        children: document
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_pages_docs_edit_on_github_link__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

MarkdownRenderer.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (MarkdownRenderer);

/***/ }),

/***/ "./components/markdown/markdown-to-anchors-mapping.js":
/*!************************************************************!*\
  !*** ./components/markdown/markdown-to-anchors-mapping.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_markdown_components_anchor_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/markdown/components/anchor-item */ "./components/markdown/components/anchor-item.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\markdown\\markdown-to-anchors-mapping.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/prop-types */



const nothing = () => null;

/* harmony default export */ __webpack_exports__["default"] = ({
  h1: (_ref) => {
    let {
      node,
      children
    } = _ref,
        props = _objectWithoutProperties(_ref, ["node", "children"]);

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_markdown_components_anchor_item__WEBPACK_IMPORTED_MODULE_0__["default"], _objectSpread(_objectSpread({
      level: 1
    }, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, undefined);
  },
  h2: (_ref2) => {
    let {
      node,
      children
    } = _ref2,
        props = _objectWithoutProperties(_ref2, ["node", "children"]);

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_markdown_components_anchor_item__WEBPACK_IMPORTED_MODULE_0__["default"], _objectSpread(_objectSpread({
      level: 2
    }, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, undefined);
  },
  h3: (_ref3) => {
    let {
      node,
      children
    } = _ref3,
        props = _objectWithoutProperties(_ref3, ["node", "children"]);

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_markdown_components_anchor_item__WEBPACK_IMPORTED_MODULE_0__["default"], _objectSpread(_objectSpread({
      level: 3
    }, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, undefined);
  },
  h4: (_ref4) => {
    let {
      node,
      children
    } = _ref4,
        props = _objectWithoutProperties(_ref4, ["node", "children"]);

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_markdown_components_anchor_item__WEBPACK_IMPORTED_MODULE_0__["default"], _objectSpread(_objectSpread({
      level: 4
    }, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }, undefined);
  },
  h5: (_ref5) => {
    let {
      node,
      children
    } = _ref5,
        props = _objectWithoutProperties(_ref5, ["node", "children"]);

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_markdown_components_anchor_item__WEBPACK_IMPORTED_MODULE_0__["default"], _objectSpread(_objectSpread({
      level: 5
    }, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }, undefined);
  },
  h6: (_ref6) => {
    let {
      node,
      children
    } = _ref6,
        props = _objectWithoutProperties(_ref6, ["node", "children"]);

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_markdown_components_anchor_item__WEBPACK_IMPORTED_MODULE_0__["default"], _objectSpread(_objectSpread({
      level: 6
    }, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }, undefined);
  },

  /* rest is not rendered */
  br: nothing,
  del: nothing,
  em: nothing,
  p: nothing,
  ul: nothing,
  ol: nothing,
  li: nothing,
  code: nothing,
  inlineCode: nothing,
  blockquote: nothing,
  a: nothing,
  img: nothing
});

/***/ }),

/***/ "./components/pages/docs/documentation-layout.tsx":
/*!********************************************************!*\
  !*** ./components/pages/docs/documentation-layout.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_layout_base_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/layout/base-layout */ "./components/layout/base-layout.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_main_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/main/breadcrumb */ "./components/layout/main/breadcrumb.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\pages\\docs\\documentation-layout.tsx";





const DocumentationLayout = ({
  children,
  showSearch
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_layout_base_layout__WEBPACK_IMPORTED_MODULE_0__["default"], {
  showSearch: showSearch,
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_layout_main_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    hasSider: true,
    className: "site-layout-background",
    style: {
      padding: '12px 0',
      flexDirection: 'row'
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 12,
  columnNumber: 3
}, undefined);

DocumentationLayout.defaultProps = {
  showSearch: true
};
/* harmony default export */ __webpack_exports__["default"] = (DocumentationLayout);

/***/ }),

/***/ "./components/pages/docs/documentation-page.module.scss":
/*!**************************************************************!*\
  !*** ./components/pages/docs/documentation-page.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"documentationContent": "RxsCn5oBnBy4uNgUfHyvk"
};

/***/ }),

/***/ "./components/pages/docs/documentation-page.tsx":
/*!******************************************************!*\
  !*** ./components/pages/docs/documentation-page.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_markdown_markdown_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/markdown/markdown-renderer */ "./components/markdown/markdown-renderer.tsx");
/* harmony import */ var _components_context_page_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/context/page-context */ "./components/context/page-context.ts");
/* harmony import */ var _documentation_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./documentation-layout */ "./components/pages/docs/documentation-layout.tsx");
/* harmony import */ var _sidebars_menu_structure_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebars/menu-structure-sidebar */ "./components/pages/docs/sidebars/menu-structure-sidebar.js");
/* harmony import */ var _sidebars_anchors_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebars/anchors-sidebar */ "./components/pages/docs/sidebars/anchors-sidebar.tsx");
/* harmony import */ var _documentation_page_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./documentation-page.module.scss */ "./components/pages/docs/documentation-page.module.scss");
/* harmony import */ var _documentation_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_documentation_page_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\pages\\docs\\documentation-page.tsx";








const {
  Content
} = antd__WEBPACK_IMPORTED_MODULE_0__["Layout"];

const DocumentationPage = ({
  content,
  data,
  meta,
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_context_page_context__WEBPACK_IMPORTED_MODULE_2__["PageContext"].Provider, {
    value: meta,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_documentation_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_sidebars_menu_structure_sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Layout"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Content, {
          className: _documentation_page_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.documentationContent,
          children: [content && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_markdown_markdown_renderer__WEBPACK_IMPORTED_MODULE_1__["default"], {
            meta: data,
            document: content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, undefined), children]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), content && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_sidebars_anchors_sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        document: content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

DocumentationPage.defaultProps = {
  content: undefined,
  data: {
    title: '',
    date: ''
  },
  children: null,
  meta: null
};
/* harmony default export */ __webpack_exports__["default"] = (DocumentationPage);

/***/ }),

/***/ "./components/pages/docs/edit-on-github-link.module.scss":
/*!***************************************************************!*\
  !*** ./components/pages/docs/edit-on-github-link.module.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"editOnGitHubLink": "_2wfFwCjU6INcFU3zL0Jalu"
};

/***/ }),

/***/ "./components/pages/docs/edit-on-github-link.tsx":
/*!*******************************************************!*\
  !*** ./components/pages/docs/edit-on-github-link.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_context_page_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/context/page-context */ "./components/context/page-context.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/all */ "react-icons/all");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_all__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit_on_github_link_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-on-github-link.module.scss */ "./components/pages/docs/edit-on-github-link.module.scss");
/* harmony import */ var _edit_on_github_link_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_edit_on_github_link_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\pages\\docs\\edit-on-github-link.tsx";







const EditOnGithubLink = () => {
  const {
    absolutePath
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_components_context_page_context__WEBPACK_IMPORTED_MODULE_0__["PageContext"]);
  const repoPath = 'https://github.com/game-ci/documentation';
  const editPath = 'edit/main';
  const filePath = `docs/${absolutePath}`;
  const href = absolutePath ? `${repoPath}/${editPath}/${filePath}` : `${repoPath}`;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: _edit_on_github_link_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.editOnGitHubLink,
    type: "primary",
    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["AiOutlineGithub"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined),
    href: href,
    children: "Edit on GitHub"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EditOnGithubLink);

/***/ }),

/***/ "./components/pages/docs/menu/menu-context.ts":
/*!****************************************************!*\
  !*** ./components/pages/docs/menu/menu-context.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_menu_structure_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/menu-structure.json */ "./core/menu-structure.json");
var _core_menu_structure_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/core/menu-structure.json */ "./core/menu-structure.json", 1);


const defaultContext = {
  menuStructure: _core_menu_structure_json__WEBPACK_IMPORTED_MODULE_1__
};
const MenuContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(defaultContext);
MenuContext.displayName = 'MenuContext';
/* harmony default export */ __webpack_exports__["default"] = (MenuContext);

/***/ }),

/***/ "./components/pages/docs/menu/versioned-sub-menu.tsx":
/*!***********************************************************!*\
  !*** ./components/pages/docs/menu/versioned-sub-menu.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_menu_menu_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tools/menu/menu-node */ "./tools/menu/menu-node.ts");
/* harmony import */ var _tools_menu_menu_segment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tools/menu/menu-segment */ "./tools/menu/menu-segment.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_pages_docs_menu_versioned_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/pages/docs/menu/versioned-title */ "./components/pages/docs/menu/versioned-title.tsx");
/* harmony import */ var _components_pages_docs_menu_menu_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/pages/docs/menu/menu-context */ "./components/pages/docs/menu/menu-context.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _logic_versions_selected_version_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/logic/versions/selected-version-slice */ "./logic/versions/selected-version-slice.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\pages\\docs\\menu\\versioned-sub-menu.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const {
  SubMenu,
  Item
} = antd__WEBPACK_IMPORTED_MODULE_3__["Menu"];

const populateMenuRecursively = (collection, selections) => {
  // Todo sorting by item.meta.order
  return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["map"])(Object.entries(collection), ([segment, node]) => {
    if (_tools_menu_menu_segment__WEBPACK_IMPORTED_MODULE_1__["MenuSegment"].isMeta(segment)) {
      return null;
    }

    if (_tools_menu_menu_node__WEBPACK_IMPORTED_MODULE_0__["MenuNode"].isPage(node)) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/docs/[...documentation-page]",
          as: `/docs/${node.meta.path}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("a", {
            children: node.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, `/docs/${node.meta.path}`, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined);
    }

    if (_tools_menu_menu_segment__WEBPACK_IMPORTED_MODULE_1__["MenuSegment"].isVersionContainer(segment)) {
      const {
        meta
      } = node,
            versions = _objectWithoutProperties(node, ["meta"]);

      const selectedVersion = selections[meta.path];
      return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["map"])(Object.entries(versions), ([versionSegment, versionNode]) => {
        // Todo - take hardcoded selected version from globally selected version for meta.section
        return versionSegment === selectedVersion ? populateMenuRecursively(versionNode, selections) : [];
      });
    } // container with menu items


    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(SubMenu, {
      title: _tools_menu_menu_segment__WEBPACK_IMPORTED_MODULE_1__["MenuSegment"].toTitle(segment),
      children: populateMenuRecursively(node, selections)
    }, node.meta.path, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined);
  });
};

const VersionedSubMenu = (_ref) => {
  let {
    section,
    title,
    icon,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["section", "title", "icon", "children"]);

  const selectedVersions = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(_logic_versions_selected_version_slice__WEBPACK_IMPORTED_MODULE_9__["selectedVersionsSelector"]);
  const {
    menuStructure
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_pages_docs_menu_menu_context__WEBPACK_IMPORTED_MODULE_7__["default"]);
  const {
    docs
  } = menuStructure;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(SubMenu, _objectSpread(_objectSpread({}, props), {}, {
    icon: icon,
    title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_pages_docs_menu_versioned_title__WEBPACK_IMPORTED_MODULE_6__["default"], {
      section: section,
      title: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 44
    }, undefined),
    children: [populateMenuRecursively(docs[section], selectedVersions), children]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, undefined);
};

VersionedSubMenu.defaultProps = {
  children: null
};
/* harmony default export */ __webpack_exports__["default"] = (VersionedSubMenu);

/***/ }),

/***/ "./components/pages/docs/menu/versioned-title.module.scss":
/*!****************************************************************!*\
  !*** ./components/pages/docs/menu/versioned-title.module.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"versionSelect": "_1w71W8pt3wDGh0ZRu7g6zN"
};

/***/ }),

/***/ "./components/pages/docs/menu/versioned-title.tsx":
/*!********************************************************!*\
  !*** ./components/pages/docs/menu/versioned-title.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_menu_menu_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tools/menu/menu-node */ "./tools/menu/menu-node.ts");
/* harmony import */ var _tools_menu_menu_segment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tools/menu/menu-segment */ "./tools/menu/menu-segment.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_pages_docs_menu_menu_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/pages/docs/menu/menu-context */ "./components/pages/docs/menu/menu-context.ts");
/* harmony import */ var _logic_versions_selected_version_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/logic/versions/selected-version-slice */ "./logic/versions/selected-version-slice.ts");
/* harmony import */ var _versioned_title_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./versioned-title.module.scss */ "./components/pages/docs/menu/versioned-title.module.scss");
/* harmony import */ var _versioned_title_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_versioned_title_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\pages\\docs\\menu\\versioned-title.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const mapVersions = (section, collection, selectedOption) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  const onChange = event => dispatch(Object(_logic_versions_selected_version_slice__WEBPACK_IMPORTED_MODULE_6__["updateSelection"])({
    section,
    selection: event.target.value
  }));

  const noPropagation = event => event.stopPropagation();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    style: {
      display: 'inline-block',
      float: 'right',
      paddingRight: 4
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("select", {
      value: selectedOption,
      className: _versioned_title_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.versionSelect,
      onChange: onChange,
      onClick: noPropagation,
      children: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["map"])(Object.entries(collection), ([segment, node]) => {
        if (!_tools_menu_menu_segment__WEBPACK_IMPORTED_MODULE_1__["MenuSegment"].isVersionContainer(segment)) return null;

        const {
          meta
        } = node,
              versions = _objectWithoutProperties(node, ["meta"]);

        return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["map"])(Object.entries(versions), ([version]) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("option", {
            value: version,
            label: version
          }, version, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 20
          }, undefined);
        });
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

const VersionedTitle = ({
  section,
  title
}) => {
  const {
    menuStructure
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_pages_docs_menu_menu_context__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const selected = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_logic_versions_selected_version_slice__WEBPACK_IMPORTED_MODULE_6__["selectedVersionsSelector"]);
  const {
    docs
  } = menuStructure;

  if (!_tools_menu_menu_node__WEBPACK_IMPORTED_MODULE_0__["MenuNode"].hasVersionContainer(docs[section])) {
    return title;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("span", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("span", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined), mapVersions(section, docs[section], selected[section])]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (VersionedTitle);

/***/ }),

/***/ "./components/pages/docs/sidebars/anchors-sidebar.tsx":
/*!************************************************************!*\
  !*** ./components/pages/docs/sidebars/anchors-sidebar.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_markdown_components_anchor_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/markdown/components/anchor-view */ "./components/markdown/components/anchor-view.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _markdown_markdown_to_anchors_mapping__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../markdown/markdown-to-anchors-mapping */ "./components/markdown/markdown-to-anchors-mapping.js");
/* harmony import */ var _sidebars_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebars.module.scss */ "./components/pages/docs/sidebars/sidebars.module.scss");
/* harmony import */ var _sidebars_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sidebars_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\pages\\docs\\sidebars\\anchors-sidebar.tsx";







const {
  Sider
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];

const AnchorsSidebar = ({
  document
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Sider, {
    className: _sidebars_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.sidebar,
    width: 200,
    breakpoint: "xl",
    collapsedWidth: "0",
    reverseArrow: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_markdown_components_anchor_view__WEBPACK_IMPORTED_MODULE_0__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
        components: _markdown_markdown_to_anchors_mapping__WEBPACK_IMPORTED_MODULE_4__["default"],
        children: document
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (AnchorsSidebar);

/***/ }),

/***/ "./components/pages/docs/sidebars/menu-structure-sidebar.js":
/*!******************************************************************!*\
  !*** ./components/pages/docs/sidebars/menu-structure-sidebar.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/all */ "react-icons/all");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_all__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _menu_versioned_sub_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/versioned-sub-menu */ "./components/pages/docs/menu/versioned-sub-menu.tsx");
/* harmony import */ var _sidebars_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebars.module.scss */ "./components/pages/docs/sidebars/sidebars.module.scss");
/* harmony import */ var _sidebars_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sidebars_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\pages\\docs\\sidebars\\menu-structure-sidebar.js";








const {
  Sider
} = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"];
const {
  Item
} = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];

const MenuStructureSidebar = () => {
  const {
    asPath: currentKey
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const main = 'main';
  const current = currentKey.split('/')[2] || main;
  const openSections = [current];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Sider, {
    className: _sidebars_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.sidebar,
    width: 200,
    breakpoint: "lg",
    collapsedWidth: "0",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      mode: "inline",
      defaultSelectedKeys: [currentKey],
      defaultOpenKeys: openSections,
      subMenuOpenDelay: 1,
      className: _sidebars_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.menuStructure,
      style: {
        height: '100%',
        marginBottom: '-70px'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_menu_versioned_sub_menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
        section: "introduction",
        title: "Introduction",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_4__["AiOutlineInfoCircle"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 17
        }, undefined)
      }, "introduction", false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_menu_versioned_sub_menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
        section: "docker",
        title: "Docker",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_4__["SiDocker"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 78
        }, undefined),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/docs/docker/versions",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
              children: "Version statuses"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, undefined)
        }, "/docs/docker/versions", false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined)
      }, "docker", false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_menu_versioned_sub_menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
        section: "github",
        title: "GitHub",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_4__["SiGithubactions"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 78
        }, undefined)
      }, "github", false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_menu_versioned_sub_menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
        section: "gitlab",
        title: "GitLab",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_4__["SiGitlab"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 78
        }, undefined)
      }, "gitlab", false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_menu_versioned_sub_menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
        section: "troubleshooting",
        title: "Troubleshooting",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_4__["AiOutlineQuestionCircle"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }, undefined)
      }, "troubleshooting", false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_menu_versioned_sub_menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
        section: "cloud-runner",
        title: "Cloud Runner",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_4__["AiOutlineQuestionCircle"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 17
        }, undefined)
      }, "cloud-runner", false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MenuStructureSidebar);

/***/ }),

/***/ "./components/pages/docs/sidebars/sidebars.module.scss":
/*!*************************************************************!*\
  !*** ./components/pages/docs/sidebars/sidebars.module.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"sidebar": "_2Xs52T05fzDQRcURJahaZk",
	"menuStructure": "dMcSVrvFSoFHOEMfZccaY"
};

/***/ }),

/***/ "./components/search/configuration.tsx":
/*!*********************************************!*\
  !*** ./components/search/configuration.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "react-instantsearch-dom");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/config */ "./core/config.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\search\\configuration.tsx";





const Configuration = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["Configure"], {
  hitsPerPage: _core_config__WEBPACK_IMPORTED_MODULE_2__["default"].search.hitsPerPage,
  attributesToSnippet: ['content:14'],
  snippetEllipsisText: " [...]"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Configuration);

/***/ }),

/***/ "./components/search/result.tsx":
/*!**************************************!*\
  !*** ./components/search/result.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-instantsearch-dom */ "react-instantsearch-dom");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/config */ "./core/config.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\search\\result.tsx";







const Result = ({
  hit
}) => {
  const {
    docsPath
  } = _core_config__WEBPACK_IMPORTED_MODULE_4__["default"];
  const {
    path,
    version,
    anchorId
  } = hit;
  const permalink = `${docsPath}/${path}#${anchorId}`;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("article", {
    style: {
      padding: 8
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
      href: permalink,
      style: {
        display: 'flex',
        alignItems: 'center'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
        style: {
          flex: 1
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_3__["Highlight"], {
          attribute: "title",
          hit: hit,
          tagName: "em"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), version && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Tag"], {
        style: {
          lineHeight: '120%',
          fontSize: '80%'
        },
        children: version
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

Result.propTypes = {
  hit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    anchorId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    version: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    summary: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Result);

/***/ }),

/***/ "./components/search/results.tsx":
/*!***************************************!*\
  !*** ./components/search/results.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "react-instantsearch-dom");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_instantsearch_connectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-instantsearch/connectors */ "react-instantsearch/connectors");
/* harmony import */ var react_instantsearch_connectors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_connectors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./result */ "./components/search/result.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\search\\results.tsx";






const SearchResults = ({
  searchState,
  searchResults
}) => searchResults && searchResults.nbHits !== 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["Hits"], {
  hitComponent: _result__WEBPACK_IMPORTED_MODULE_3__["default"]
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 5
}, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
  style: {
    width: '100%',
    textAlign: 'center'
  },
  children: ["No results found for ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("strong", {
    children: searchState.query
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 28
  }, undefined), "."]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 11,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_instantsearch_connectors__WEBPACK_IMPORTED_MODULE_2__["connectStateResults"])(SearchResults));

/***/ }),

/***/ "./components/search/stats.tsx":
/*!*************************************!*\
  !*** ./components/search/stats.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-instantsearch-dom */ "react-instantsearch-dom");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\search\\stats.tsx";





const Stats = ({
  searchResults
}) => {
  if (searchResults === null || searchResults.nbHits === 0) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 68
  }, undefined);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "ais-Stats",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
      role: "img",
      "aria-label": "emoji",
      children: "\u26A1\uFE0F"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("strong", {
      children: ` ${searchResults.nbHits} `
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), "results found", searchResults.query !== '' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      children: ["for", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("strong", {
        children: ` "${searchResults.query}" `
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), "in", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("strong", {
      children: ` ${searchResults.processingTimeMS}ms`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_1__["connectStateResults"])(Stats));

/***/ }),

/***/ "./core/config.ts":
/*!************************!*\
  !*** ./core/config.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_utils_get_isomorphic_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tools/utils/get-isomorphic-value */ "./tools/utils/get-isomorphic-value.ts");

/* harmony default export */ __webpack_exports__["default"] = ({
  baseUrl: 'https://game.ci',
  docsPath: '/docs',
  firebase: {
    apiKey: 'AIzaSyCz60Pmbrb4v2nqd8TGrm1Vo0Ylb6daKWQ',
    authDomain: 'unity-ci-versions.firebaseapp.com',
    databaseURL: 'https://unity-ci-versions.firebaseio.com',
    projectId: 'unity-ci-versions',
    storageBucket: 'unity-ci-versions.appspot.com',
    messagingSenderId: '841479186623',
    appId: '1:841479186623:web:c20350191e962a8a71fe0a',
    measurementId: 'G-1BGVS7HDW8'
  },
  backendUrl: 'https://europe-west3-unity-ci-versions.cloudfunctions.net',
  search: {
    applicationId: 'W4X62KM9QE',
    index: Object(_tools_utils_get_isomorphic_value__WEBPACK_IMPORTED_MODULE_0__["getIsomorphicValue"])('SEARCH_INDEX'),
    publicApiKey: '4a06011ed8a467811866c27ca4c1a367',
    hitsPerPage: 12,
    settings: {
      // Select the attributes you want to search in
      searchableAttributes: ['title', 'summary', 'body', 'version', 'categories', 'filename'],
      // Define business metrics for ranking and sorting
      customRanking: ['asc(level)', 'desc(title)'],
      // Set up some attributes to filter results on
      attributesForFaceting: ['filename'],
      // Define the attribute we want to distinct on
      attributeForDistinct: 'ObjectID'
    }
  }
});

/***/ }),

/***/ "./core/fs/read-directory-recursively.ts":
/*!***********************************************!*\
  !*** ./core/fs/read-directory-recursively.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return readDirectoryRecursively; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);


function readDirectoryRecursively(directory, fileNames = [], currentDirectory = '') {
  const directoryEntries = Object(fs__WEBPACK_IMPORTED_MODULE_1__["readdirSync"])(directory, {
    withFileTypes: true
  });

  for (const entry of directoryEntries) {
    const {
      name
    } = entry;

    if (entry.isDirectory()) {
      readDirectoryRecursively(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(directory, name), fileNames, `${currentDirectory}${name}/`);
      continue;
    }

    if (entry.isFile()) {
      fileNames.push(`${currentDirectory}${name}`);
    }
  }

  return fileNames;
}

/***/ }),

/***/ "./core/fs/read-file.ts":
/*!******************************!*\
  !*** ./core/fs/read-file.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return readFile; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

function readFile(pathToFile) {
  const entry = Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])(pathToFile);
  return entry.toString();
}

/***/ }),

/***/ "./core/hooks/use-notification.tsx":
/*!*****************************************!*\
  !*** ./core/hooks/use-notification.tsx ***!
  \*****************************************/
/*! exports provided: useNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNotification", function() { return useNotification; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);

function useNotification() {
  const notify = (type, {
    message,
    description
  }) => {
    antd__WEBPACK_IMPORTED_MODULE_0__["notification"][type]({
      message,
      description
    });
  };

  return {
    success: props => notify('success', props),
    info: props => notify('info', props),
    warning: props => notify('warning', props),
    error: props => notify('error', props)
  };
}

/***/ }),

/***/ "./core/hooks/use-top-level-route.tsx":
/*!********************************************!*\
  !*** ./core/hooks/use-top-level-route.tsx ***!
  \********************************************/
/*! exports provided: useTopLevelRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTopLevelRoute", function() { return useTopLevelRoute; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

function useTopLevelRoute() {
  const {
    asPath
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const parts = asPath.replace(/^\//, '').split('/');
  return `/${parts[0]}`;
}

/***/ }),

/***/ "./core/menu-structure.json":
/*!**********************************!*\
  !*** ./core/menu-structure.json ***!
  \**********************************/
/*! exports provided: docs, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"docs\":{\"cloud-runner\":{\"meta\":{\"path\":\"cloud-runner\",\"order\":99,\"type\":\"folder\"},\"<versions>\":{\"meta\":{\"currentVersion\":\"v0\",\"path\":\"cloud-runner\",\"type\":\"identifier\"},\"v0\":{\"meta\":{\"path\":\"cloud-runner\",\"order\":99,\"type\":\"version\"},\"introduction\":{\"name\":\"Introduction\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/01-introduction.md\",\"permalinkPath\":\"cloud-runner/v0/introduction\",\"path\":\"cloud-runner/introduction\",\"order\":1,\"type\":\"file\"}},\"getting-started\":{\"meta\":{\"path\":\"cloud-runner/getting-started\",\"order\":2,\"type\":\"folder\"},\"aws\":{\"name\":\"Aws\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/02-getting-started/aws.md\",\"permalinkPath\":\"cloud-runner/v0/getting-started/aws\",\"path\":\"cloud-runner/getting-started/aws\",\"order\":99,\"type\":\"file\"}},\"kuberentes\":{\"name\":\"Kuberentes\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/02-getting-started/kuberentes.md\",\"permalinkPath\":\"cloud-runner/v0/getting-started/kuberentes\",\"path\":\"cloud-runner/getting-started/kuberentes\",\"order\":99,\"type\":\"file\"}}},\"configuration\":{\"name\":\"Configuration\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/03-configuration.md\",\"permalinkPath\":\"cloud-runner/v0/configuration\",\"path\":\"cloud-runner/configuration\",\"order\":3,\"type\":\"file\"}},\"command-line\":{\"name\":\"Command line\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/04-command-line.md\",\"permalinkPath\":\"cloud-runner/v0/command-line\",\"path\":\"cloud-runner/command-line\",\"order\":4,\"type\":\"file\"}},\"advanced-topics\":{\"meta\":{\"path\":\"cloud-runner/advanced-topics\",\"order\":5,\"type\":\"folder\"},\"caching\":{\"name\":\"Caching\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/01-caching.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/caching\",\"path\":\"cloud-runner/advanced-topics/caching\",\"order\":1,\"type\":\"file\"}},\"performance\":{\"name\":\"Performance\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/02-performance.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/performance\",\"path\":\"cloud-runner/advanced-topics/performance\",\"order\":2,\"type\":\"file\"}},\"hooks\":{\"name\":\"Hooks\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/03-hooks.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/hooks\",\"path\":\"cloud-runner/advanced-topics/hooks\",\"order\":3,\"type\":\"file\"}},\"custom-steps\":{\"name\":\"Custom steps\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/04-custom-steps.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/custom-steps\",\"path\":\"cloud-runner/advanced-topics/custom-steps\",\"order\":4,\"type\":\"file\"}},\"input-override\":{\"name\":\"Input override\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/05-input-override.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/input-override\",\"path\":\"cloud-runner/advanced-topics/input-override\",\"order\":5,\"type\":\"file\"}},\"garbage-collection\":{\"name\":\"Garbage collection\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/06-garbage-collection.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/garbage-collection\",\"path\":\"cloud-runner/advanced-topics/garbage-collection\",\"order\":6,\"type\":\"file\"}},\"logging\":{\"name\":\"Logging\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/08-logging.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/logging\",\"path\":\"cloud-runner/advanced-topics/logging\",\"order\":8,\"type\":\"file\"}},\"secrets\":{\"name\":\"Secrets\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/08-secrets.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/secrets\",\"path\":\"cloud-runner/advanced-topics/secrets\",\"order\":8,\"type\":\"file\"}},\"github-ephemeral-runners\":{\"name\":\"Github ephemeral runners\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/09-github-ephemeral-runners.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/github-ephemeral-runners\",\"path\":\"cloud-runner/advanced-topics/github-ephemeral-runners\",\"order\":9,\"type\":\"file\"}}},\"development\":{\"name\":\"Development\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/06-development.md\",\"permalinkPath\":\"cloud-runner/v0/development\",\"path\":\"cloud-runner/development\",\"order\":6,\"type\":\"file\"}}}}},\"docker\":{\"meta\":{\"path\":\"docker\",\"order\":99,\"type\":\"folder\"},\"docker-images\":{\"name\":\"Docker images\",\"meta\":{\"version\":null,\"absolutePath\":\"docker/01-docker-images.md\",\"permalinkPath\":\"docker/docker-images\",\"path\":\"docker/docker-images\",\"order\":1,\"type\":\"file\"}},\"windows-docker-images\":{\"name\":\"Windows docker images\",\"meta\":{\"version\":null,\"absolutePath\":\"docker/02-windows-docker-images.md\",\"permalinkPath\":\"docker/windows-docker-images\",\"path\":\"docker/windows-docker-images\",\"order\":2,\"type\":\"file\"}},\"customize-docker-images\":{\"name\":\"Customize docker images\",\"meta\":{\"version\":null,\"absolutePath\":\"docker/03-customize-docker-images.md\",\"permalinkPath\":\"docker/customize-docker-images\",\"path\":\"docker/customize-docker-images\",\"order\":3,\"type\":\"file\"}}},\"github\":{\"meta\":{\"path\":\"github\",\"order\":99,\"type\":\"folder\"},\"<versions>\":{\"meta\":{\"currentVersion\":\"v2\",\"path\":\"github\",\"type\":\"identifier\"},\"v1\":{\"meta\":{\"path\":\"github/v1\",\"order\":99,\"type\":\"version\"},\"getting-started\":{\"name\":\"Getting started\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/01-getting-started.md\",\"permalinkPath\":\"github/v1/getting-started\",\"path\":\"github/v1/getting-started\",\"order\":1,\"type\":\"file\"}},\"activation\":{\"name\":\"Activation\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/02-activation.md\",\"permalinkPath\":\"github/v1/activation\",\"path\":\"github/v1/activation\",\"order\":2,\"type\":\"file\"}},\"test-runner\":{\"name\":\"Test runner\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/03-test-runner.md\",\"permalinkPath\":\"github/v1/test-runner\",\"path\":\"github/v1/test-runner\",\"order\":3,\"type\":\"file\"}},\"builder\":{\"name\":\"Builder\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/04-builder.md\",\"permalinkPath\":\"github/v1/builder\",\"path\":\"github/v1/builder\",\"order\":4,\"type\":\"file\"}},\"returning-a-license\":{\"name\":\"Returning a license\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/05-returning-a-license.md\",\"permalinkPath\":\"github/v1/returning-a-license\",\"path\":\"github/v1/returning-a-license\",\"order\":5,\"type\":\"file\"}},\"deployment\":{\"meta\":{\"path\":\"github/v1/deployment\",\"order\":6,\"type\":\"folder\"},\"android\":{\"name\":\"Android\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/06-deployment/android.md\",\"permalinkPath\":\"github/v1/deployment/android\",\"path\":\"github/v1/deployment/android\",\"order\":99,\"type\":\"file\"}},\"ios\":{\"name\":\"iOS\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/06-deployment/ios.md\",\"permalinkPath\":\"github/v1/deployment/ios\",\"path\":\"github/v1/deployment/ios\",\"order\":99,\"type\":\"file\"}}}},\"v2\":{\"meta\":{\"path\":\"github\",\"order\":99,\"type\":\"version\"},\"getting-started\":{\"name\":\"Getting started\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/01-getting-started.md\",\"permalinkPath\":\"github/v2/getting-started\",\"path\":\"github/getting-started\",\"order\":1,\"type\":\"file\"}},\"activation\":{\"name\":\"Activation\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/02-activation.md\",\"permalinkPath\":\"github/v2/activation\",\"path\":\"github/activation\",\"order\":2,\"type\":\"file\"}},\"test-runner\":{\"name\":\"Test runner\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/03-test-runner.md\",\"permalinkPath\":\"github/v2/test-runner\",\"path\":\"github/test-runner\",\"order\":3,\"type\":\"file\"}},\"builder\":{\"name\":\"Builder\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/04-builder.md\",\"permalinkPath\":\"github/v2/builder\",\"path\":\"github/builder\",\"order\":4,\"type\":\"file\"}},\"returning-a-license\":{\"name\":\"Returning a license\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/05-returning-a-license.md\",\"permalinkPath\":\"github/v2/returning-a-license\",\"path\":\"github/returning-a-license\",\"order\":5,\"type\":\"file\"}},\"deployment\":{\"meta\":{\"path\":\"github/deployment\",\"order\":15,\"type\":\"folder\"},\"android\":{\"name\":\"Android\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/15-deployment/android.md\",\"permalinkPath\":\"github/v2/deployment/android\",\"path\":\"github/deployment/android\",\"order\":99,\"type\":\"file\"}},\"ios\":{\"name\":\"iOS\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/15-deployment/ios.md\",\"permalinkPath\":\"github/v2/deployment/ios\",\"path\":\"github/deployment/ios\",\"order\":99,\"type\":\"file\"}},\"steam\":{\"name\":\"Steam\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/15-deployment/steam.md\",\"permalinkPath\":\"github/v2/deployment/steam\",\"path\":\"github/deployment/steam\",\"order\":99,\"type\":\"file\"}}}}}},\"gitlab\":{\"meta\":{\"path\":\"gitlab\",\"order\":99,\"type\":\"folder\"},\"getting-started\":{\"name\":\"Getting started\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/01-getting-started.md\",\"permalinkPath\":\"gitlab/getting-started\",\"path\":\"gitlab/getting-started\",\"order\":1,\"type\":\"file\"}},\"activation\":{\"name\":\"Activation\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/02-activation.md\",\"permalinkPath\":\"gitlab/activation\",\"path\":\"gitlab/activation\",\"order\":2,\"type\":\"file\"}},\"example-project\":{\"name\":\"Example project\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/03-example-project.md\",\"permalinkPath\":\"gitlab/example-project\",\"path\":\"gitlab/example-project\",\"order\":3,\"type\":\"file\"}},\"custom-build-options\":{\"name\":\"Custom build options\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/custom-build-options.md\",\"permalinkPath\":\"gitlab/custom-build-options\",\"path\":\"gitlab/custom-build-options\",\"order\":99,\"type\":\"file\"}},\"deployment\":{\"meta\":{\"path\":\"gitlab/deployment\",\"order\":99,\"type\":\"folder\"},\"android\":{\"name\":\"Android\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/deployment/android.md\",\"permalinkPath\":\"gitlab/deployment/android\",\"path\":\"gitlab/deployment/android\",\"order\":99,\"type\":\"file\"}},\"ios\":{\"name\":\"iOS\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/deployment/ios.md\",\"permalinkPath\":\"gitlab/deployment/ios\",\"path\":\"gitlab/deployment/ios\",\"order\":99,\"type\":\"file\"}}},\"tests\":{\"name\":\"Tests\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/tests.md\",\"permalinkPath\":\"gitlab/tests\",\"path\":\"gitlab/tests\",\"order\":99,\"type\":\"file\"}}},\"introduction\":{\"meta\":{\"path\":\"introduction\",\"order\":99,\"type\":\"folder\"},\"getting-started\":{\"name\":\"Getting started\",\"meta\":{\"version\":null,\"absolutePath\":\"introduction/getting-started.md\",\"permalinkPath\":\"introduction/getting-started\",\"path\":\"introduction/getting-started\",\"order\":99,\"type\":\"file\"}}},\"troubleshooting\":{\"meta\":{\"path\":\"troubleshooting\",\"order\":99,\"type\":\"folder\"},\"common-issues\":{\"name\":\"Common issues\",\"meta\":{\"version\":null,\"absolutePath\":\"troubleshooting/common-issues.md\",\"permalinkPath\":\"troubleshooting/common-issues\",\"path\":\"troubleshooting/common-issues\",\"order\":99,\"type\":\"file\"}}}}}");

/***/ }),

/***/ "./core/routing/use-path-segments.js":
/*!*******************************************!*\
  !*** ./core/routing/use-path-segments.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);


const usePathSegments = nameOfRootSegment => {
  const {
    asPath
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const segments = asPath.slice(1).split('#')[0].split('/');
  let url = '';
  const pathSegments = segments.map(segment => {
    url += `/${segment}`;
    const name = segment.replace(/-/g, ' ');
    return {
      url,
      name
    };
  });

  if (nameOfRootSegment !== undefined) {
    pathSegments.unshift({
      url: '/',
      name: nameOfRootSegment
    });
  }

  return pathSegments;
};

/* harmony default export */ __webpack_exports__["default"] = (usePathSegments);

/***/ }),

/***/ "./docs lazy recursive ^\\.\\/.*$":
/*!*********************************************!*\
  !*** ./docs lazy ^\.\/.*$ namespace object ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./cloud-runner/v0/01-introduction.md": [
		"./docs/cloud-runner/v0/01-introduction.md",
		0
	],
	"./cloud-runner/v0/02-getting-started/aws.md": [
		"./docs/cloud-runner/v0/02-getting-started/aws.md",
		1
	],
	"./cloud-runner/v0/02-getting-started/kuberentes.md": [
		"./docs/cloud-runner/v0/02-getting-started/kuberentes.md",
		2
	],
	"./cloud-runner/v0/03-configuration.md": [
		"./docs/cloud-runner/v0/03-configuration.md",
		3
	],
	"./cloud-runner/v0/04-command-line.md": [
		"./docs/cloud-runner/v0/04-command-line.md",
		4
	],
	"./cloud-runner/v0/05-advanced-topics/01-caching.md": [
		"./docs/cloud-runner/v0/05-advanced-topics/01-caching.md",
		5
	],
	"./cloud-runner/v0/05-advanced-topics/02-performance.md": [
		"./docs/cloud-runner/v0/05-advanced-topics/02-performance.md",
		6
	],
	"./cloud-runner/v0/05-advanced-topics/03-hooks.md": [
		"./docs/cloud-runner/v0/05-advanced-topics/03-hooks.md",
		7
	],
	"./cloud-runner/v0/05-advanced-topics/04-custom-steps.md": [
		"./docs/cloud-runner/v0/05-advanced-topics/04-custom-steps.md",
		8
	],
	"./cloud-runner/v0/05-advanced-topics/05-input-override.md": [
		"./docs/cloud-runner/v0/05-advanced-topics/05-input-override.md",
		9
	],
	"./cloud-runner/v0/05-advanced-topics/06-garbage-collection.md": [
		"./docs/cloud-runner/v0/05-advanced-topics/06-garbage-collection.md",
		10
	],
	"./cloud-runner/v0/05-advanced-topics/08-logging.md": [
		"./docs/cloud-runner/v0/05-advanced-topics/08-logging.md",
		11
	],
	"./cloud-runner/v0/05-advanced-topics/08-secrets.md": [
		"./docs/cloud-runner/v0/05-advanced-topics/08-secrets.md",
		12
	],
	"./cloud-runner/v0/05-advanced-topics/09-github-ephemeral-runners.md": [
		"./docs/cloud-runner/v0/05-advanced-topics/09-github-ephemeral-runners.md",
		13
	],
	"./cloud-runner/v0/06-development.md": [
		"./docs/cloud-runner/v0/06-development.md",
		41
	],
	"./docker/01-docker-images.md": [
		"./docs/docker/01-docker-images.md",
		14
	],
	"./docker/02-windows-docker-images.md": [
		"./docs/docker/02-windows-docker-images.md",
		15
	],
	"./docker/03-customize-docker-images.md": [
		"./docs/docker/03-customize-docker-images.md",
		16
	],
	"./github/v1/01-getting-started.md": [
		"./docs/github/v1/01-getting-started.md",
		17
	],
	"./github/v1/02-activation.md": [
		"./docs/github/v1/02-activation.md",
		18
	],
	"./github/v1/03-test-runner.md": [
		"./docs/github/v1/03-test-runner.md",
		19
	],
	"./github/v1/04-builder.md": [
		"./docs/github/v1/04-builder.md",
		20
	],
	"./github/v1/05-returning-a-license.md": [
		"./docs/github/v1/05-returning-a-license.md",
		21
	],
	"./github/v1/06-deployment/android.md": [
		"./docs/github/v1/06-deployment/android.md",
		22
	],
	"./github/v1/06-deployment/ios.md": [
		"./docs/github/v1/06-deployment/ios.md",
		23
	],
	"./github/v2/01-getting-started.md": [
		"./docs/github/v2/01-getting-started.md",
		24
	],
	"./github/v2/02-activation.md": [
		"./docs/github/v2/02-activation.md",
		25
	],
	"./github/v2/03-test-runner.md": [
		"./docs/github/v2/03-test-runner.md",
		26
	],
	"./github/v2/04-builder.md": [
		"./docs/github/v2/04-builder.md",
		27
	],
	"./github/v2/05-returning-a-license.md": [
		"./docs/github/v2/05-returning-a-license.md",
		28
	],
	"./github/v2/15-deployment/android.md": [
		"./docs/github/v2/15-deployment/android.md",
		29
	],
	"./github/v2/15-deployment/ios.md": [
		"./docs/github/v2/15-deployment/ios.md",
		30
	],
	"./github/v2/15-deployment/steam.md": [
		"./docs/github/v2/15-deployment/steam.md",
		31
	],
	"./gitlab/01-getting-started.md": [
		"./docs/gitlab/01-getting-started.md",
		32
	],
	"./gitlab/02-activation.md": [
		"./docs/gitlab/02-activation.md",
		33
	],
	"./gitlab/03-example-project.md": [
		"./docs/gitlab/03-example-project.md",
		34
	],
	"./gitlab/custom-build-options.md": [
		"./docs/gitlab/custom-build-options.md",
		35
	],
	"./gitlab/deployment/android.md": [
		"./docs/gitlab/deployment/android.md",
		36
	],
	"./gitlab/deployment/ios.md": [
		"./docs/gitlab/deployment/ios.md",
		37
	],
	"./gitlab/tests.md": [
		"./docs/gitlab/tests.md",
		38
	],
	"./introduction/getting-started.md": [
		"./docs/introduction/getting-started.md",
		39
	],
	"./troubleshooting/common-issues.md": [
		"./docs/troubleshooting/common-issues.md",
		40
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./docs lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./logic/versions/selected-version-slice.ts":
/*!**************************************************!*\
  !*** ./logic/versions/selected-version-slice.ts ***!
  \**************************************************/
/*! exports provided: selectedVersionSlice, selectedVersionsSelector, updateSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedVersionSlice", function() { return selectedVersionSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedVersionsSelector", function() { return selectedVersionsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSelection", function() { return updateSelection; });
/* harmony import */ var _tools_menu_menu_structure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tools/menu/menu-structure */ "./tools/menu/menu-structure.ts");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_menu_structure_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/menu-structure.json */ "./core/menu-structure.json");
var _core_menu_structure_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/core/menu-structure.json */ "./core/menu-structure.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const selectedVersionSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__["createSlice"])({
  name: 'version',
  initialState: _objectSpread({}, _tools_menu_menu_structure__WEBPACK_IMPORTED_MODULE_0__["MenuStructure"].getCurrentVersions(_core_menu_structure_json__WEBPACK_IMPORTED_MODULE_2__)),
  reducers: {
    updateSelection: (state, action) => {
      const {
        section,
        selection
      } = action.payload;
      state[section] = selection;
    }
  }
});
const selectedVersionsSelector = state => state.versions.selected;
const {
  updateSelection
} = selectedVersionSlice.actions;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;

  const cleanup = _react.default.useRef();

  const setRef = _react.default.useCallback(el => {
    // cleanup previous event handlers
    if (cleanup.current) {
      cleanup.current();
      cleanup.current = undefined;
    }

    if (p && IntersectionObserver && el && el.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        cleanup.current = listenToIntersections(el, () => {
          prefetch(router, href, as, {
            locale: typeof locale !== 'undefined' ? locale : router && router.locale
          });
        });
      }
    }

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [p, childRef, href, as, router, locale]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (false) {}

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, options.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change(method, destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, options.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, typeof options.locale !== 'undefined' ? options.locale : this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  delete query.__nextLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/docs/[...documentation-page].tsx":
/*!************************************************!*\
  !*** ./pages/docs/[...documentation-page].tsx ***!
  \************************************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var _tools_menu_menu_structure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tools/menu/menu-structure */ "./tools/menu/menu-structure.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_pages_docs_documentation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/pages/docs/documentation-page */ "./components/pages/docs/documentation-page.tsx");
/* harmony import */ var _core_fs_read_directory_recursively__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/fs/read-directory-recursively */ "./core/fs/read-directory-recursively.ts");
/* harmony import */ var _tools_search_generate_definitions_from_files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/tools/search/generate-definitions-from-files */ "./tools/search/generate-definitions-from-files.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\pages\\docs\\[...documentation-page].tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









// Represents all the markdown documentation pages
const Documentation = ({
  content,
  data,
  meta
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_pages_docs_documentation_page__WEBPACK_IMPORTED_MODULE_3__["default"], {
  content: content,
  data: data,
  meta: meta
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 17,
  columnNumber: 3
}, undefined); // Build time: Determines which pages are generated


const getStaticPaths = async () => {
  const filePaths = await Object(_core_fs_read_directory_recursively__WEBPACK_IMPORTED_MODULE_4__["default"])(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve('docs/'));
  const structure = await _tools_menu_menu_structure__WEBPACK_IMPORTED_MODULE_0__["MenuStructure"].generateFromFiles(filePaths);
  const fileMetas = await _tools_menu_menu_structure__WEBPACK_IMPORTED_MODULE_0__["MenuStructure"].getFileMetas(structure);
  if (process.env.CI) Object(_tools_search_generate_definitions_from_files__WEBPACK_IMPORTED_MODULE_5__["default"])(fileMetas);
  const paths = fileMetas.map(file => ({
    params: {
      'documentation-page': file.meta.path.split('/')
    }
  }));
  return {
    paths,
    fallback: false
  };
};
// Build time: Generate JSON for each generated page
const getStaticProps = async ({
  params
}) => {
  const {
    'documentation-page': parts
  } = params;
  const structure = await _tools_menu_menu_structure__WEBPACK_IMPORTED_MODULE_0__["MenuStructure"].load();
  const fileMetas = await _tools_menu_menu_structure__WEBPACK_IMPORTED_MODULE_0__["MenuStructure"].getFileMetas(structure);
  const seoPath = parts.join('/');
  const {
    meta
  } = fileMetas.find(file => file.meta.path === seoPath);
  const content = await __webpack_require__("./docs lazy recursive ^\\.\\/.*$")(`./${meta.absolutePath}`);

  const _matter = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(content.default),
        {
    orig
  } = _matter,
        data = _objectWithoutProperties(_matter, ["orig"]);

  return {
    props: _objectSpread(_objectSpread({}, data), {}, {
      meta
    })
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Documentation);

/***/ }),

/***/ "./tools/menu/menu-node.ts":
/*!*********************************!*\
  !*** ./tools/menu/menu-node.ts ***!
  \*********************************/
/*! exports provided: MenuNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuNode", function() { return MenuNode; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tools_menu_menu_segment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tools/menu/menu-segment */ "./tools/menu/menu-segment.ts");


class MenuNode {
  static isFile(node) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(node, 'meta.type') === 'file';
  }

  static isFolder(node) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(node, 'meta.type') === 'folder';
  }

  static isPage(node) {
    return this.isFile(node);
  }

  static isVersion(node) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(node, 'meta.type') === 'version';
  }

  static hasChildren(node) {
    return typeof node === 'object';
  }

  static hasVersionContainer(node) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["has"])(node, _tools_menu_menu_segment__WEBPACK_IMPORTED_MODULE_1__["MenuSegment"].versionContainerIdentifier);
  }

  static getCurrentVersion(versionContainerNode) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(versionContainerNode, 'meta.currentVersion');
  }

  static findFirstPage(menuNode) {
    if (menuNode && MenuNode.isFolder(menuNode)) {
      var _page$meta;

      const page = MenuNode.findFirstPageInFolder(menuNode);
      return (page === null || page === void 0 ? void 0 : (_page$meta = page.meta) === null || _page$meta === void 0 ? void 0 : _page$meta.path) || null;
    }

    return null;
  }

  static findFirstPageInFolder(menuNode) {
    const fileMetas = [];
    const containers = [];

    for (const [segment, node] of Object.entries(menuNode)) {
      if (_tools_menu_menu_segment__WEBPACK_IMPORTED_MODULE_1__["MenuSegment"].isMeta(segment)) continue;

      if (MenuNode.isFile(node)) {
        fileMetas.push(node);
      }

      if (_tools_menu_menu_segment__WEBPACK_IMPORTED_MODULE_1__["MenuSegment"].isVersionContainer(segment)) {
        const currentVersion = this.getCurrentVersion(node);
        containers.push(node[currentVersion]);
      }

      if (MenuNode.isFolder(node) || MenuNode.isVersion(node)) {
        containers.push(node);
      }
    } // Todo sort by fileMeta.meta.order asc


    if (fileMetas.length > 0) {
      return fileMetas[0];
    }

    for (const container of containers) {
      const result = this.findFirstPageInFolder(container);

      if (result) {
        return result;
      }
    }

    return null;
  }

}

/***/ }),

/***/ "./tools/menu/menu-segment.ts":
/*!************************************!*\
  !*** ./tools/menu/menu-segment.ts ***!
  \************************************/
/*! exports provided: MenuSegment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSegment", function() { return MenuSegment; });
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tools/utils */ "./tools/utils/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class MenuSegment {
  static isMeta(segment) {
    return segment === 'meta';
  }

  static isVersionContainer(segment) {
    return segment === this.versionContainerIdentifier;
  }

  static isVersion(segment) {
    return /^v?\d+(\.\d+)*$/.test(segment);
  }

  static toTitle(segment) {
    return Object(_tools_utils__WEBPACK_IMPORTED_MODULE_0__["normaliseTitle"])(segment);
  }

}

_defineProperty(MenuSegment, "versionContainerIdentifier", '<versions>');

/***/ }),

/***/ "./tools/menu/menu-structure-generator.ts":
/*!************************************************!*\
  !*** ./tools/menu/menu-structure-generator.ts ***!
  \************************************************/
/*! exports provided: MenuStructureGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuStructureGenerator", function() { return MenuStructureGenerator; });
/* harmony import */ var _tools_menu_menu_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tools/menu/menu-node */ "./tools/menu/menu-node.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tools/utils */ "./tools/utils/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu_segment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-segment */ "./tools/menu/menu-segment.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class MenuStructureGenerator {
  constructor() {
    _defineProperty(this, "structure", {});

    _defineProperty(this, "fileName", void 0);

    _defineProperty(this, "segments", void 0);

    _defineProperty(this, "segment", void 0);

    _defineProperty(this, "keyArray", void 0);

    _defineProperty(this, "permalinkPathArray", void 0);

    _defineProperty(this, "seoFriendlyPathArray", void 0);

    _defineProperty(this, "versionOfCurrentPath", void 0);

    _defineProperty(this, "addSegmentToKey", segment => this.keyArray.push(segment));

    _defineProperty(this, "addSegmentToPermalinkPath", segment => this.permalinkPathArray.push(segment));

    _defineProperty(this, "addSegmentToSeoFriendlyPath", segment => this.seoFriendlyPathArray.push(segment));

    _defineProperty(this, "setVersionOfCurrentPath", segment => {
      this.versionOfCurrentPath = segment;
    });
  }

  get key() {
    return this.keyArray.join('.');
  }

  get permalinkPath() {
    return this.permalinkPathArray.join('/');
  }

  get seoFriendlyPath() {
    return this.seoFriendlyPathArray.join('/');
  }

  reset() {
    this.versionOfCurrentPath = null;
    this.keyArray = [];
    this.permalinkPathArray = [];
    this.seoFriendlyPathArray = [];
  }

  static async generateMenuStructure(fileNames) {
    // eslint-disable-next-line no-console
    console.log('event - generating menu structure');
    const structure = new this();

    for (const fileName of fileNames) {
      structure.addFromFile(fileName);
    }

    structure.stripVersionNumbersFromLatestVersionInSeoFriendlyPath();
    structure.cleanup();
    return structure.toObject();
  }

  toString() {
    return JSON.stringify(this.structure, null, 2);
  }

  toObject() {
    return this.structure;
  }

  addFromFile(fileName) {
    this.reset();
    this.fileName = fileName;
    this.segments = this.fileName.replace(/\.md$/, '').split('/');
    this.addStructureFromSegments();
    this.addMetaForFileNode();
  }

  addStructureFromSegments() {
    for (this.segment of this.segments) {
      const {
        order,
        segment
      } = this.extractInfoFromSegment(); // Make version parts identifiable

      if (_menu_segment__WEBPACK_IMPORTED_MODULE_3__["MenuSegment"].isVersion(segment)) {
        this.addSegmentToKey(_menu_segment__WEBPACK_IMPORTED_MODULE_3__["MenuSegment"].versionContainerIdentifier);
        this.setNodeType('identifier');
        this.setNodePath(this.permalinkPath);
        this.setVersionOfCurrentPath(segment);
        this.setNodeCurrentVersion(segment);
      } // Update pointers


      this.addSegmentToKey(segment);
      this.addSegmentToPermalinkPath(segment);
      if (!_menu_segment__WEBPACK_IMPORTED_MODULE_3__["MenuSegment"].isVersion(segment)) this.addSegmentToSeoFriendlyPath(segment); // Add meta for every part

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["has"])(this.structure, this.key)) {
        this.setNodeType(_menu_segment__WEBPACK_IMPORTED_MODULE_3__["MenuSegment"].isVersion(segment) ? 'version' : 'folder');
        this.setNodeOrder(order);
        this.setNodePath(this.permalinkPath);
        this.setNodeSeoFriendlyPath(this.seoFriendlyPath);
      }
    }
  }

  addMetaForFileNode() {
    const {
      order,
      segment
    } = this.extractInfoFromSegment();
    this.setNodeName(Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__["normaliseTitle"])(segment));
    this.setNodeType('file');
    this.setNodeOrder(order);
    this.setNodePath(this.permalinkPath);
    this.setNodePermalinkPath(this.permalinkPath);
    this.setNodeSeoFriendlyPath(this.seoFriendlyPath);
    this.setNodeAbsolutePath(this.fileName);
    this.setNodeVersion(this.versionOfCurrentPath);
  }

  extractInfoFromSegment() {
    const sortOrderNumberRegex = /^\d{2}-/;

    const extractSortOrderNumber = part => {
      var _part$match, _part$match$;

      return Number(((_part$match = part.match(sortOrderNumberRegex)) === null || _part$match === void 0 ? void 0 : (_part$match$ = _part$match[0]) === null || _part$match$ === void 0 ? void 0 : _part$match$.replace(/-$/, '')) || 99);
    };

    const stripSortOrderNumber = part => {
      return part.replace(sortOrderNumberRegex, '');
    };

    const removeForbiddenCharacters = part => {
      return Object(_tools_utils__WEBPACK_IMPORTED_MODULE_1__["replaceAll"])(part, '.', '-');
    };

    const sanitiseSegment = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["flow"])(stripSortOrderNumber, removeForbiddenCharacters);
    return {
      order: extractSortOrderNumber(this.segment),
      segment: sanitiseSegment(this.segment)
    };
  }

  setNodeName(name) {
    Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(this.structure, this.key, {
      name
    });
  }
  /**
   * Add meta to currently selected key.
   *
   * New properties overwrite existing properties recursively.
   *
   * Example:
   *   Before:     { a: 1, b: 2 }
   *   Add:        { a: 3, c: 4 }
   *   Results in: { a: 3, b: 2, c: 4 }
   */


  addNodeMeta(meta) {
    const previousMeta = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(this.structure, `${this.key}.meta`, {});
    Object(lodash__WEBPACK_IMPORTED_MODULE_2__["defaultsDeep"])(meta, previousMeta);
    Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(this.structure, `${this.key}.meta`, meta);
  }
  /**
   * Type of part, to indicate its structure
   */


  setNodeType(type) {
    this.addNodeMeta({
      type
    });
  }
  /**
   * Order in which to appear in the menu
   */


  setNodeOrder(order) {
    this.addNodeMeta({
      order
    });
  }
  /**
   * For routing
   */


  setNodePath(path) {
    this.addNodeMeta({
      path
    });
  }
  /**
   * For linking back to the file in the repo
   */


  setNodeAbsolutePath(absolutePath) {
    this.addNodeMeta({
      absolutePath
    });
  }
  /**
   * For linking to a section for a specific version using an anchor
   */


  setNodePermalinkPath(permalinkPath) {
    this.addNodeMeta({
      permalinkPath
    });
  }
  /**
   * For overwriting `path` in case for latest version path
   *
   * Example: to overwrite `path` github/v2/doc with `seoFriendlyPath` github/doc if v2 is current.
   */


  setNodeSeoFriendlyPath(seoFriendlyPath) {
    this.addNodeMeta({
      seoFriendlyPath
    });
  }
  /**
   * Version of parent or self
   */


  setNodeVersion(version) {
    this.addNodeMeta({
      version
    });
  }
  /**
   * To overwrite currentVersion in meta every time a newer version is found
   */


  setNodeCurrentVersion(currentVersion) {
    if (!_menu_segment__WEBPACK_IMPORTED_MODULE_3__["MenuSegment"].isVersion(currentVersion)) {
      throw new Error('expected version to match a version part');
    }

    this.addNodeMeta({
      currentVersion
    });
  }

  stripVersionNumbersFromLatestVersionInSeoFriendlyPath() {
    const updateSeoPathsRecursively = (collection, replacePath = null, withPath = null) => {
      for (const [segment, node] of Object.entries(collection)) {
        if (_menu_segment__WEBPACK_IMPORTED_MODULE_3__["MenuSegment"].isMeta(segment)) continue; // Example: Recursively replace /github/v[latest]/something with /github/something.

        if (replacePath && withPath && Object(lodash__WEBPACK_IMPORTED_MODULE_2__["has"])(node, 'meta.path')) {
          Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(collection, `${segment}.meta.path`, node.meta.path.replace(replacePath, withPath));
        }

        if (!_tools_menu_menu_node__WEBPACK_IMPORTED_MODULE_0__["MenuNode"].hasChildren(node)) {
          continue;
        }

        if (_menu_segment__WEBPACK_IMPORTED_MODULE_3__["MenuSegment"].isVersionContainer(segment)) {
          const {
            currentVersion
          } = node.meta;
          const {
            seoFriendlyPath
          } = node[currentVersion].meta;
          const replace = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["get"])(collection, `${segment}.${currentVersion}.meta.path`);
          Object(lodash__WEBPACK_IMPORTED_MODULE_2__["set"])(collection, `${segment}.${currentVersion}.meta.path`, seoFriendlyPath);
          updateSeoPathsRecursively(node, replace, seoFriendlyPath);
          continue;
        }

        updateSeoPathsRecursively(node, replacePath, withPath);
      }
    };

    updateSeoPathsRecursively(this.structure);
  }

  cleanup() {
    const cleanupRecursively = collection => {
      for (const [segment, node] of Object.entries(collection)) {
        if (_menu_segment__WEBPACK_IMPORTED_MODULE_3__["MenuSegment"].isMeta(segment)) continue;
        Object(lodash__WEBPACK_IMPORTED_MODULE_2__["unset"])(collection, `${segment}.meta.seoFriendlyPath`);

        if (_tools_menu_menu_node__WEBPACK_IMPORTED_MODULE_0__["MenuNode"].hasChildren(node)) {
          cleanupRecursively(node);
        }
      }
    };

    cleanupRecursively(this.structure);
  }

}

/***/ }),

/***/ "./tools/menu/menu-structure-parser.ts":
/*!*********************************************!*\
  !*** ./tools/menu/menu-structure-parser.ts ***!
  \*********************************************/
/*! exports provided: MenuStructureParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuStructureParser", function() { return MenuStructureParser; });
/* harmony import */ var _tools_menu_menu_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tools/menu/menu-node */ "./tools/menu/menu-node.ts");
/* harmony import */ var _tools_menu_menu_segment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tools/menu/menu-segment */ "./tools/menu/menu-segment.ts");


class MenuStructureParser {
  static getFileMetas(menuStructure, fileMetas = []) {
    for (const [segment, node] of Object.entries(menuStructure)) {
      if (_tools_menu_menu_segment__WEBPACK_IMPORTED_MODULE_1__["MenuSegment"].isMeta(segment)) continue;

      if (_tools_menu_menu_node__WEBPACK_IMPORTED_MODULE_0__["MenuNode"].isFile(node)) {
        fileMetas.push(node);
      }

      if (_tools_menu_menu_node__WEBPACK_IMPORTED_MODULE_0__["MenuNode"].hasChildren(node)) {
        this.getFileMetas(node, fileMetas);
      }
    }

    return fileMetas;
  }

}

/***/ }),

/***/ "./tools/menu/menu-structure.ts":
/*!**************************************!*\
  !*** ./tools/menu/menu-structure.ts ***!
  \**************************************/
/*! exports provided: MenuStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuStructure", function() { return MenuStructure; });
/* harmony import */ var _tools_menu_menu_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tools/menu/menu-node */ "./tools/menu/menu-node.ts");
/* harmony import */ var _tools_menu_menu_segment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tools/menu/menu-segment */ "./tools/menu/menu-segment.ts");
/* harmony import */ var _tools_menu_menu_structure_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/tools/menu/menu-structure-generator */ "./tools/menu/menu-structure-generator.ts");
/* harmony import */ var _tools_menu_menu_structure_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/tools/menu/menu-structure-parser */ "./tools/menu/menu-structure-parser.ts");
/* harmony import */ var _tools_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/tools/utils */ "./tools/utils/index.js");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class MenuStructure {
  static async generateFromFiles(filePaths) {
    const menuStructure = await _tools_menu_menu_structure_generator__WEBPACK_IMPORTED_MODULE_2__["MenuStructureGenerator"].generateMenuStructure(filePaths);
    await this.save(menuStructure);
    return menuStructure;
  }

  static async getFileMetas(structure) {
    return _tools_menu_menu_structure_parser__WEBPACK_IMPORTED_MODULE_3__["MenuStructureParser"].getFileMetas(structure);
  }

  static async load() {
    const asJson = Object(fs__WEBPACK_IMPORTED_MODULE_5__["readFileSync"])(path__WEBPACK_IMPORTED_MODULE_7___default.a.resolve(this.saveFile), {
      encoding: 'utf8'
    });
    return JSON.parse(asJson);
  }

  static async save(menuStructure) {
    const asJson = `${JSON.stringify({
      docs: menuStructure
    }, null, 2)}\n`;
    Object(fs__WEBPACK_IMPORTED_MODULE_5__["writeFileSync"])(path__WEBPACK_IMPORTED_MODULE_7___default.a.resolve(this.saveFile), asJson, {
      encoding: 'utf8'
    });
    await Object(_tools_utils__WEBPACK_IMPORTED_MODULE_4__["sleep"])(250); // Allow for windows filesystem to catch up.
  }

  static getCurrentVersions(collection, sections = {}) {
    for (const [segment, node] of Object.entries(collection)) {
      if (_tools_menu_menu_segment__WEBPACK_IMPORTED_MODULE_1__["MenuSegment"].isMeta(segment)) continue;

      if (_tools_menu_menu_segment__WEBPACK_IMPORTED_MODULE_1__["MenuSegment"].isVersionContainer(segment)) {
        const {
          path,
          currentVersion
        } = node.meta;
        Object(lodash__WEBPACK_IMPORTED_MODULE_6__["set"])(sections, `${path}`, currentVersion);
      }

      if (_tools_menu_menu_node__WEBPACK_IMPORTED_MODULE_0__["MenuNode"].hasChildren(node)) {
        this.getCurrentVersions(node, sections);
      }
    }

    return sections;
  }

  static getNodeByUrl(menuStructure, urlPath) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_6__["get"])(menuStructure, urlPath.replace(/^\/+/, '').split('/').join('.'));
  }

}

_defineProperty(MenuStructure, "saveFile", 'core/menu-structure.json');

/***/ }),

/***/ "./tools/search/generate-definitions-from-files.ts":
/*!*********************************************************!*\
  !*** ./tools/search/generate-definitions-from-files.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generateSearchDefinitionsFromFiles; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_fs_read_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/fs/read-file */ "./core/fs/read-file.ts");
/* harmony import */ var _utils_extract_sections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/extract-sections */ "./tools/search/utils/extract-sections.ts");




function generateSearchDefinitionsFromFiles(files) {
  // eslint-disable-next-line no-console
  console.log('event - generating search cache');
  const cache = [];

  for (const file of files) {
    const {
      meta
    } = file;
    const contents = Object(_core_fs_read_file__WEBPACK_IMPORTED_MODULE_2__["default"])(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('docs/', meta.absolutePath));
    const sections = Object(_utils_extract_sections__WEBPACK_IMPORTED_MODULE_3__["default"])(meta, contents);
    cache.push(...sections);
  }

  Object(fs__WEBPACK_IMPORTED_MODULE_1__["writeFileSync"])(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('.search/sections.json'), JSON.stringify(cache), {
    encoding: 'utf8'
  });
}

/***/ }),

/***/ "./tools/search/utils/extract-sections.ts":
/*!************************************************!*\
  !*** ./tools/search/utils/extract-sections.ts ***!
  \************************************************/
/*! exports provided: extractAnchorId, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractAnchorId", function() { return extractAnchorId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return extractSections; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


const determineLevel = line => {
  for (let level = 0; level <= 5; level += 1) {
    const char = line[level];

    if (char !== '#') {
      return level;
    }
  }

  return null;
};

const extractTitle = line => {
  if (!line) {
    // eslint-disable-next-line no-console
    console.log('\u001B[33m%s\u001B[0m  - %s', 'warn', 'Unable to extract title from', line);
    return '';
  }

  if (typeof line !== 'string') {
    // eslint-disable-next-line no-console
    console.error(`Expected heading to consist of a string. That way we can easily use them as anchors.
      The following does not adhere to this rule: "${JSON.stringify(line, null, 2)}"`);
  }

  return line.replace(/^[\s#]*/, '').trim();
};

const extractAnchorId = line => {
  return extractTitle(line).toLowerCase().split(' ').join('-');
};

const forceSingleLine = content => {
  // One space for each newline
  return content.replace(/\n/, ' ');
};

const extractSummary = (rawContent, maxLength = 100) => {
  const content = forceSingleLine(rawContent);

  if (content.length <= maxLength) {
    return content;
  }

  return `${content.slice(0, Math.min(content.length, maxLength - 3))}...`;
};

const isHeading = line => {
  return line.startsWith('#');
};

const parseLine = line => {
  return line;
};

const finalisePreviousSection = section => {
  const content = section.content.trimLeft('\n').trimRight('\n');
  const finalisedSection = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(section);
  finalisedSection.content = content || '(empty)';
  finalisedSection.summary = extractSummary(content);
  return finalisedSection;
};

const createSectionCreator = meta => {
  return line => {
    const {
      path,
      version
    } = meta;
    return {
      title: extractTitle(line),
      level: determineLevel(line),
      path,
      version,
      anchorId: extractAnchorId(line),
      content: ''
    };
  };
};

function extractSections(meta, contents) {
  const createNewSectionFromLine = createSectionCreator(meta);
  const lines = contents.split('\n');
  const sections = [];
  let section;
  let skippedLines = 0;

  for (const line of lines) {
    if (isHeading(line)) {
      if (section) {
        sections.push(finalisePreviousSection(section));
      }

      section = createNewSectionFromLine(line);
      continue;
    }

    if (section) {
      section.content += `\n${parseLine(line)}`;
      continue;
    }

    skippedLines += 1;
  }

  if (section) {
    sections.push(finalisePreviousSection(section));
  }

  if (skippedLines >= 1) {
    // eslint-disable-next-line no-console
    console.log(`Skipped ${skippedLines} lines that occurred before any title`);
  }

  return sections;
}

/***/ }),

/***/ "./tools/utils/get-isomorphic-value.ts":
/*!*********************************************!*\
  !*** ./tools/utils/get-isomorphic-value.ts ***!
  \*********************************************/
/*! exports provided: getIsomorphicValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsomorphicValue", function() { return getIsomorphicValue; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Returns an environment variable that is set during build time,
 * both on the server and in the browser.
 *
 * For a variable to show up in the browser, it needs to be defined in next.config.js under
 * the property `publicRuntimeConfig`.
 *
 * Notes:
 *   - This is a low level method, that should only be used in specific cases where the store has
 *     not yet been initialised, but the value is still required.
 *   - An empty string is only expected if this function is executed in the code path of a custom
 *     script outside of NextJS, thus not using next.config.js configuration.
 */

const getIsomorphicValue = variableName => {
  const config = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
  return config ? config.publicRuntimeConfig[variableName] : '';
};

/***/ }),

/***/ "./tools/utils/index.js":
/*!******************************!*\
  !*** ./tools/utils/index.js ***!
  \******************************/
/*! exports provided: sleep, capitalizeFirstLetter, replaceAll, normaliseTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sleep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sleep */ "./tools/utils/sleep.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return _sleep__WEBPACK_IMPORTED_MODULE_0__["sleep"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string */ "./tools/utils/string.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return _string__WEBPACK_IMPORTED_MODULE_1__["capitalizeFirstLetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceAll", function() { return _string__WEBPACK_IMPORTED_MODULE_1__["replaceAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normaliseTitle", function() { return _string__WEBPACK_IMPORTED_MODULE_1__["normaliseTitle"]; });




/***/ }),

/***/ "./tools/utils/sleep.ts":
/*!******************************!*\
  !*** ./tools/utils/sleep.ts ***!
  \******************************/
/*! exports provided: sleep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
const sleep = async ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/***/ }),

/***/ "./tools/utils/string.ts":
/*!*******************************!*\
  !*** ./tools/utils/string.ts ***!
  \*******************************/
/*! exports provided: capitalizeFirstLetter, replaceAll, normaliseTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceAll", function() { return replaceAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normaliseTitle", function() { return normaliseTitle; });
const capitalizeFirstLetter = ([first, ...rest], locale = 'en') => {
  try {
    return first.toLocaleUpperCase(locale) + rest.join('');
  } catch {
    return first.toLocaleUpperCase(locale) + rest;
  }
};
const replaceAll = (input, searchValue, replaceValue) => {
  return input.split(searchValue).join(replaceValue);
};
const normaliseTitle = rawFileName => {
  const fileName = replaceAll(rawFileName, '-', ' '); // For now this is the only exception, this could be made smarter later

  if (fileName === 'ios') {
    return 'iOS';
  }

  return capitalizeFirstLetter(fileName);
};

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "highlight.js/lib/core":
/*!****************************************!*\
  !*** external "highlight.js/lib/core" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/core");

/***/ }),

/***/ "highlight.js/lib/languages/bash":
/*!**************************************************!*\
  !*** external "highlight.js/lib/languages/bash" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/bash");

/***/ }),

/***/ "highlight.js/lib/languages/csharp":
/*!****************************************************!*\
  !*** external "highlight.js/lib/languages/csharp" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/csharp");

/***/ }),

/***/ "highlight.js/lib/languages/javascript":
/*!********************************************************!*\
  !*** external "highlight.js/lib/languages/javascript" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/javascript");

/***/ }),

/***/ "highlight.js/lib/languages/powershell":
/*!********************************************************!*\
  !*** external "highlight.js/lib/languages/powershell" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/powershell");

/***/ }),

/***/ "highlight.js/lib/languages/ruby":
/*!**************************************************!*\
  !*** external "highlight.js/lib/languages/ruby" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/ruby");

/***/ }),

/***/ "highlight.js/lib/languages/typescript":
/*!********************************************************!*\
  !*** external "highlight.js/lib/languages/typescript" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/typescript");

/***/ }),

/***/ "highlight.js/lib/languages/yaml":
/*!**************************************************!*\
  !*** external "highlight.js/lib/languages/yaml" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/yaml");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/all":
/*!**********************************!*\
  !*** external "react-icons/all" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/all");

/***/ }),

/***/ "react-instantsearch-dom":
/*!******************************************!*\
  !*** external "react-instantsearch-dom" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-instantsearch-dom");

/***/ }),

/***/ "react-instantsearch/connectors":
/*!*************************************************!*\
  !*** external "react-instantsearch/connectors" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-instantsearch/connectors");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FtZS1jaS1icmFuZC1sb2dvLXdvcmRtYXJrLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRleHQvcGFnZS1jb250ZXh0LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2Jhc2UtbGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9uYXYtYmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9uYXYtYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvc2VhcmNoLWJhci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvc2VhcmNoLWJhci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL3NvdXJjZS1saW5rcy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbWFpbi9icmVhZGNydW1iLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L21haW4vYnJlYWRjcnVtYi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcmtkb3duL2NvbXBvbmVudHMvYW5jaG9yLWl0ZW0udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFya2Rvd24vY29tcG9uZW50cy9hbmNob3Itdmlldy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcmtkb3duL2NvbXBvbmVudHMvYW5jaG9yLXZpZXcudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFya2Rvd24vY29tcG9uZW50cy9hcnRpY2xlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcmtkb3duL2NvbXBvbmVudHMvYmxvY2txdW90ZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXJrZG93bi9jb21wb25lbnRzL2NvZGUtYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXJrZG93bi9jb21wb25lbnRzL2VtYmVkZGVkLWxpbmstb3ItcGFyYWdyYXBoLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcmtkb3duL2NvbXBvbmVudHMvaGVhZGluZy13aXRoLWFuY2hvci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXJrZG93bi9jb21wb25lbnRzL2hlYWRpbmcudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFya2Rvd24vY29tcG9uZW50cy9saXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcmtkb3duL2NvbXBvbmVudHMvbWFya2Rvd24tY29tcG9uZW50cy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcmtkb3duL21hcmtkb3duLWNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXJrZG93bi9tYXJrZG93bi1yZW5kZXJlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXJrZG93bi9tYXJrZG93bi10by1hbmNob3JzLW1hcHBpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9kb2NzL2RvY3VtZW50YXRpb24tbGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2RvY3MvZG9jdW1lbnRhdGlvbi1wYWdlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZG9jcy9kb2N1bWVudGF0aW9uLXBhZ2UudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZG9jcy9lZGl0LW9uLWdpdGh1Yi1saW5rLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZG9jcy9lZGl0LW9uLWdpdGh1Yi1saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2RvY3MvbWVudS9tZW51LWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9kb2NzL21lbnUvdmVyc2lvbmVkLXN1Yi1tZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2RvY3MvbWVudS92ZXJzaW9uZWQtdGl0bGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9kb2NzL21lbnUvdmVyc2lvbmVkLXRpdGxlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2RvY3Mvc2lkZWJhcnMvYW5jaG9ycy1zaWRlYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2RvY3Mvc2lkZWJhcnMvbWVudS1zdHJ1Y3R1cmUtc2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2RvY3Mvc2lkZWJhcnMvc2lkZWJhcnMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWFyY2gvY29uZmlndXJhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWFyY2gvcmVzdWx0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlYXJjaC9yZXN1bHRzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlYXJjaC9zdGF0cy50c3giLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9mcy9yZWFkLWRpcmVjdG9yeS1yZWN1cnNpdmVseS50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2ZzL3JlYWQtZmlsZS50cyIsIndlYnBhY2s6Ly8vLi9jb3JlL2hvb2tzL3VzZS1ub3RpZmljYXRpb24udHN4Iiwid2VicGFjazovLy8uL2NvcmUvaG9va3MvdXNlLXRvcC1sZXZlbC1yb3V0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29yZS9yb3V0aW5nL3VzZS1wYXRoLXNlZ21lbnRzLmpzIiwid2VicGFjazovLy8uL2RvY3MgbGF6eSBeXFwuXFwvLiokIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vbG9naWMvdmVyc2lvbnMvc2VsZWN0ZWQtdmVyc2lvbi1zbGljZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kb2NzL1suLi5kb2N1bWVudGF0aW9uLXBhZ2VdLnRzeCIsIndlYnBhY2s6Ly8vLi90b29scy9tZW51L21lbnUtbm9kZS50cyIsIndlYnBhY2s6Ly8vLi90b29scy9tZW51L21lbnUtc2VnbWVudC50cyIsIndlYnBhY2s6Ly8vLi90b29scy9tZW51L21lbnUtc3RydWN0dXJlLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi90b29scy9tZW51L21lbnUtc3RydWN0dXJlLXBhcnNlci50cyIsIndlYnBhY2s6Ly8vLi90b29scy9tZW51L21lbnUtc3RydWN0dXJlLnRzIiwid2VicGFjazovLy8uL3Rvb2xzL3NlYXJjaC9nZW5lcmF0ZS1kZWZpbml0aW9ucy1mcm9tLWZpbGVzLnRzIiwid2VicGFjazovLy8uL3Rvb2xzL3NlYXJjaC91dGlscy9leHRyYWN0LXNlY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3Rvb2xzL3V0aWxzL2dldC1pc29tb3JwaGljLXZhbHVlLnRzIiwid2VicGFjazovLy8uL3Rvb2xzL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Rvb2xzL3V0aWxzL3NsZWVwLnRzIiwid2VicGFjazovLy8uL3Rvb2xzL3V0aWxzL3N0cmluZy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXktbWF0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlnaGxpZ2h0LmpzL2xpYi9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYmFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NzaGFycFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmFzY3JpcHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9wb3dlcnNoZWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcnVieVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3R5cGVzY3JpcHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy95YW1sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9hbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbnN0YW50c2VhcmNoLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWluc3RhbnRzZWFyY2gvY29ubmVjdG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbWFya2Rvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlBhZ2VDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwicGVybWFsaW5rUGF0aCIsImFic29sdXRlUGF0aCIsIkNvbnRlbnQiLCJMYXlvdXQiLCJCYXNlTGF5b3V0IiwiY2hpbGRyZW4iLCJzaG93U2VhcmNoIiwic3RpY2t5SGVhZGVyIiwibWluSGVpZ2h0IiwicGFkZGluZ1RvcCIsImRlZmF1bHRQcm9wcyIsIkZvb3RlciIsIkZvb3RlcldyYXBwZXIiLCJ0ZXh0QWxpZ24iLCJ6SW5kZXgiLCJtYXJnaW4iLCJjb2xvciIsIkhlYWRlciIsIkl0ZW0iLCJNZW51IiwiTmF2QmFyIiwiZGVmYXVsdFNlbGVjdGVkS2V5IiwidXNlVG9wTGV2ZWxSb3V0ZSIsImN4Iiwic3R5bGVzIiwibmF2QmFyIiwic3RpY2t5IiwiYnJhbmQiLCJtZW51IiwiZmxleCIsIm1hcmdpbkJvdHRvbSIsIlNlYXJjaEJhciIsInNlYXJjaEZvY3VzZWQiLCJzZXRGb2N1cyIsInVzZVN0YXRlIiwic2VhcmNoSG92ZXJlZCIsInNldFNlYXJjaEhvdmVyZWQiLCJyZXN1bHRzSG92ZXJlZCIsInNldFJlc3VsdHNIb3ZlcmVkIiwiYWN0aXZlIiwic2VhcmNoQmFyIiwicGFkZGluZyIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwic2VhcmNoQm94IiwiZGlzcGxheSIsIm1hcmdpbkxlZnQiLCJJdGVtR3JvdXAiLCJTdWJNZW51IiwiU291cmNlTGlua3MiLCJwcm9wcyIsIkJyZWFkY3J1bWIiLCJCcmVhZGNydW1iV3JhcHBlciIsInNlZ21lbnRzIiwidXNlUGF0aFNlZ21lbnRzIiwibWVudVN0cnVjdHVyZSIsInVzZUNvbnRleHQiLCJNZW51Q29udGV4dCIsImJyZWFkQ3J1bWIiLCJtYXAiLCJ1cmwiLCJuYW1lIiwiTWVudVNlZ21lbnQiLCJpc1ZlcnNpb24iLCJtZW51Tm9kZSIsIk1lbnVTdHJ1Y3R1cmUiLCJnZXROb2RlQnlVcmwiLCJuZWFyZXN0VXJsIiwiTWVudU5vZGUiLCJmaW5kRmlyc3RQYWdlIiwiaHJlZiIsImNhcGl0YWxpc2VkTmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJMaW5rIiwiQW5jaG9yIiwiQW5jaG9ySXRlbSIsImxldmVsIiwidmFsdWUiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJhbmNob3JJZCIsImV4dHJhY3RBbmNob3JJZCIsInBhZGRpbmdMZWZ0IiwiZm9udFNpemUiLCJBbmNob3JWaWV3IiwidGFyZ2V0T2Zmc2V0Iiwic2V0VGFyZ2V0T2Zmc2V0Iiwid2luZG93SGVpZ2h0Iiwic2V0V2luZG93SGVpZ2h0IiwidXNlRWZmZWN0IiwiZWlnaHRQZXJjZW50T2ZTY3JlZW5IZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIm1heERpc3RhbmNlIiwib2Zmc2V0IiwibWluIiwib25SZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFuY2hvcldyYXBwZXIiLCJ0b3BTcGFjZXIiLCJBcnRpY2xlIiwibWFya2Rvd24iLCJCbG9ja3F1b3RlIiwiYmxvY2txdW90ZSIsImhsanMiLCJyZXF1aXJlIiwiQ29kZUJsb2NrIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsInNldFJlZiIsImJpbmQiLCJjb21wb25lbnREaWRNb3VudCIsImhpZ2hsaWdodENvZGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJlbGVtZW50IiwiY29kZUVsIiwicmVuZGVyIiwibGFuZ3VhZ2UiLCJDb3B5QnV0dG9uIiwidG9wIiwicmlnaHQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ1c2VOb3RpZmljYXRpb24iLCJpbmZvIiwibWVzc2FnZSIsImNvZGVCbG9jayIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJQYXJhZ3JhcGgiLCJUeXBvZ3JhcGh5IiwiRW1iZWRkZWRMaW5rIiwiZnJvbUNoaWxkcmVuIiwibGVuZ3RoIiwicG90ZW50aWFsTGluayIsInN0YXJ0c1dpdGgiLCJpc1lvdXR1YmVMaW5rIiwibGluayIsInRlc3QiLCJFcnJvciIsIkVtYmVkZGVkTGlua09yUGFyYWdyYXBoIiwibm9kZSIsInJlZ3VsYXJQYXJhZ3JhcGgiLCJjb3B5VXJsVG9DbGlwYm9hcmQiLCJoYXNoIiwib25TdWNjZXNzIiwib25FcnJvciIsImxvY2F0aW9uIiwiaGFzaEluZGV4IiwiaW5kZXhPZiIsImJhc2VVcmwiLCJ0aGVuIiwib25TdWNjZXNzZnVsbHlDb3BpZWQiLCJub3RpZmljYXRpb24iLCJIZWFkaW5nV2l0aEFuY2hvciIsIm9uQ2xpY2siLCJvbktleVByZXNzIiwiZXZlbnQiLCJrZXlDb2RlIiwiYW5jaG9yIiwiVGl0bGUiLCJIZWFkaW5nIiwiaGVhZGluZyIsImlkIiwidW5kZWZpbmVkIiwiTGlzdCIsIm9yZGVyZWQiLCJsaXN0IiwiTGlzdEl0ZW0iLCJsaXN0SXRlbSIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsInAiLCJociIsIkRpdmlkZXIiLCJvbCIsInVsIiwibGkiLCJjb2RlIiwiaW5saW5lIiwicHJlIiwidGFnTmFtZSIsImRvY3VtZW50IiwibWV0YSIsInNoYXBlIiwidGl0bGUiLCJkYXRlIiwiTWFya2Rvd25SZW5kZXJlciIsIm1ldGFJbmZvcm1hdGlvbiIsInJlcGxhY2UiLCJjb21wb25lbnRzIiwibm90aGluZyIsImJyIiwiZGVsIiwiZW0iLCJpbmxpbmVDb2RlIiwiYSIsImltZyIsIkRvY3VtZW50YXRpb25MYXlvdXQiLCJmbGV4RGlyZWN0aW9uIiwiRG9jdW1lbnRhdGlvblBhZ2UiLCJjb250ZW50IiwiZGF0YSIsImRvY3VtZW50YXRpb25Db250ZW50IiwiRWRpdE9uR2l0aHViTGluayIsInJlcG9QYXRoIiwiZWRpdFBhdGgiLCJmaWxlUGF0aCIsImVkaXRPbkdpdEh1YkxpbmsiLCJkZWZhdWx0Q29udGV4dCIsImRpc3BsYXlOYW1lIiwicG9wdWxhdGVNZW51UmVjdXJzaXZlbHkiLCJjb2xsZWN0aW9uIiwic2VsZWN0aW9ucyIsIk9iamVjdCIsImVudHJpZXMiLCJzZWdtZW50IiwiaXNNZXRhIiwiaXNQYWdlIiwicGF0aCIsImlzVmVyc2lvbkNvbnRhaW5lciIsInZlcnNpb25zIiwic2VsZWN0ZWRWZXJzaW9uIiwidmVyc2lvblNlZ21lbnQiLCJ2ZXJzaW9uTm9kZSIsInRvVGl0bGUiLCJWZXJzaW9uZWRTdWJNZW51Iiwic2VjdGlvbiIsImljb24iLCJzZWxlY3RlZFZlcnNpb25zIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RlZFZlcnNpb25zU2VsZWN0b3IiLCJkb2NzIiwibWFwVmVyc2lvbnMiLCJzZWxlY3RlZE9wdGlvbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvbkNoYW5nZSIsInVwZGF0ZVNlbGVjdGlvbiIsInNlbGVjdGlvbiIsInRhcmdldCIsIm5vUHJvcGFnYXRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJmbG9hdCIsInBhZGRpbmdSaWdodCIsInZlcnNpb25TZWxlY3QiLCJ2ZXJzaW9uIiwiVmVyc2lvbmVkVGl0bGUiLCJzZWxlY3RlZCIsImhhc1ZlcnNpb25Db250YWluZXIiLCJTaWRlciIsIkFuY2hvcnNTaWRlYmFyIiwic2lkZWJhciIsIm1hcmtkb3duVG9BbmNob3JzTWFwcGluZyIsIk1lbnVTdHJ1Y3R1cmVTaWRlYmFyIiwiYXNQYXRoIiwiY3VycmVudEtleSIsInVzZVJvdXRlciIsIm1haW4iLCJjdXJyZW50Iiwic3BsaXQiLCJvcGVuU2VjdGlvbnMiLCJoZWlnaHQiLCJDb25maWd1cmF0aW9uIiwiY29uZmlnIiwic2VhcmNoIiwiaGl0c1BlclBhZ2UiLCJSZXN1bHQiLCJoaXQiLCJkb2NzUGF0aCIsInBlcm1hbGluayIsImFsaWduSXRlbXMiLCJsaW5lSGVpZ2h0Iiwic3VtbWFyeSIsIlNlYXJjaFJlc3VsdHMiLCJzZWFyY2hTdGF0ZSIsInNlYXJjaFJlc3VsdHMiLCJuYkhpdHMiLCJ3aWR0aCIsInF1ZXJ5IiwiY29ubmVjdFN0YXRlUmVzdWx0cyIsIlN0YXRzIiwicHJvY2Vzc2luZ1RpbWVNUyIsImZpcmViYXNlIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYmFja2VuZFVybCIsImFwcGxpY2F0aW9uSWQiLCJpbmRleCIsImdldElzb21vcnBoaWNWYWx1ZSIsInB1YmxpY0FwaUtleSIsInNldHRpbmdzIiwic2VhcmNoYWJsZUF0dHJpYnV0ZXMiLCJjdXN0b21SYW5raW5nIiwiYXR0cmlidXRlc0ZvckZhY2V0aW5nIiwiYXR0cmlidXRlRm9yRGlzdGluY3QiLCJyZWFkRGlyZWN0b3J5UmVjdXJzaXZlbHkiLCJkaXJlY3RvcnkiLCJmaWxlTmFtZXMiLCJjdXJyZW50RGlyZWN0b3J5IiwiZGlyZWN0b3J5RW50cmllcyIsInJlYWRkaXJTeW5jIiwid2l0aEZpbGVUeXBlcyIsImVudHJ5IiwiaXNEaXJlY3RvcnkiLCJyZXNvbHZlIiwiaXNGaWxlIiwicHVzaCIsInJlYWRGaWxlIiwicGF0aFRvRmlsZSIsInJlYWRGaWxlU3luYyIsInRvU3RyaW5nIiwibm90aWZ5IiwidHlwZSIsImRlc2NyaXB0aW9uIiwic3VjY2VzcyIsIndhcm5pbmciLCJlcnJvciIsInBhcnRzIiwibmFtZU9mUm9vdFNlZ21lbnQiLCJwYXRoU2VnbWVudHMiLCJ1bnNoaWZ0Iiwic2VsZWN0ZWRWZXJzaW9uU2xpY2UiLCJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImdldEN1cnJlbnRWZXJzaW9ucyIsInJlZHVjZXJzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiY2hpbGRSZWYiLCJjbGVhbnVwIiwiZWwiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJyb3V0ZSIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwic3NnNDA0IiwicGFnZSIsIm1vZCIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiRG9jdW1lbnRhdGlvbiIsImdldFN0YXRpY1BhdGhzIiwiZmlsZVBhdGhzIiwic3RydWN0dXJlIiwiZ2VuZXJhdGVGcm9tRmlsZXMiLCJmaWxlTWV0YXMiLCJnZXRGaWxlTWV0YXMiLCJlbnYiLCJDSSIsImdlbmVyYXRlU2VhcmNoRGVmaW5pdGlvbnNGcm9tRmlsZXMiLCJwYXRocyIsImZpbGUiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwibG9hZCIsInNlb1BhdGgiLCJqb2luIiwiZmluZCIsIm1hdHRlciIsImRlZmF1bHQiLCJvcmlnIiwiaXNGb2xkZXIiLCJoYXNDaGlsZHJlbiIsImhhcyIsInZlcnNpb25Db250YWluZXJJZGVudGlmaWVyIiwiZ2V0Q3VycmVudFZlcnNpb24iLCJ2ZXJzaW9uQ29udGFpbmVyTm9kZSIsImZpbmRGaXJzdFBhZ2VJbkZvbGRlciIsImNvbnRhaW5lcnMiLCJjdXJyZW50VmVyc2lvbiIsImNvbnRhaW5lciIsIm5vcm1hbGlzZVRpdGxlIiwiTWVudVN0cnVjdHVyZUdlbmVyYXRvciIsImtleUFycmF5IiwicGVybWFsaW5rUGF0aEFycmF5Iiwic2VvRnJpZW5kbHlQYXRoQXJyYXkiLCJ2ZXJzaW9uT2ZDdXJyZW50UGF0aCIsInNlb0ZyaWVuZGx5UGF0aCIsInJlc2V0IiwiZ2VuZXJhdGVNZW51U3RydWN0dXJlIiwibG9nIiwiZmlsZU5hbWUiLCJhZGRGcm9tRmlsZSIsInN0cmlwVmVyc2lvbk51bWJlcnNGcm9tTGF0ZXN0VmVyc2lvbkluU2VvRnJpZW5kbHlQYXRoIiwidG9PYmplY3QiLCJKU09OIiwic3RyaW5naWZ5IiwiYWRkU3RydWN0dXJlRnJvbVNlZ21lbnRzIiwiYWRkTWV0YUZvckZpbGVOb2RlIiwib3JkZXIiLCJleHRyYWN0SW5mb0Zyb21TZWdtZW50IiwiYWRkU2VnbWVudFRvS2V5Iiwic2V0Tm9kZVR5cGUiLCJzZXROb2RlUGF0aCIsInNldFZlcnNpb25PZkN1cnJlbnRQYXRoIiwic2V0Tm9kZUN1cnJlbnRWZXJzaW9uIiwiYWRkU2VnbWVudFRvUGVybWFsaW5rUGF0aCIsImFkZFNlZ21lbnRUb1Nlb0ZyaWVuZGx5UGF0aCIsInNldE5vZGVPcmRlciIsInNldE5vZGVTZW9GcmllbmRseVBhdGgiLCJzZXROb2RlTmFtZSIsInNldE5vZGVQZXJtYWxpbmtQYXRoIiwic2V0Tm9kZUFic29sdXRlUGF0aCIsInNldE5vZGVWZXJzaW9uIiwic29ydE9yZGVyTnVtYmVyUmVnZXgiLCJleHRyYWN0U29ydE9yZGVyTnVtYmVyIiwicGFydCIsIk51bWJlciIsIm1hdGNoIiwic3RyaXBTb3J0T3JkZXJOdW1iZXIiLCJyZW1vdmVGb3JiaWRkZW5DaGFyYWN0ZXJzIiwicmVwbGFjZUFsbCIsInNhbml0aXNlU2VnbWVudCIsImZsb3ciLCJhZGROb2RlTWV0YSIsInByZXZpb3VzTWV0YSIsImRlZmF1bHRzRGVlcCIsInVwZGF0ZVNlb1BhdGhzUmVjdXJzaXZlbHkiLCJyZXBsYWNlUGF0aCIsIndpdGhQYXRoIiwiY2xlYW51cFJlY3Vyc2l2ZWx5IiwidW5zZXQiLCJNZW51U3RydWN0dXJlUGFyc2VyIiwic2F2ZSIsImFzSnNvbiIsImZzUGF0aCIsInNhdmVGaWxlIiwiZW5jb2RpbmciLCJwYXJzZSIsIndyaXRlRmlsZVN5bmMiLCJzbGVlcCIsInNlY3Rpb25zIiwidXJsUGF0aCIsImZpbGVzIiwiY2FjaGUiLCJjb250ZW50cyIsImV4dHJhY3RTZWN0aW9ucyIsImRldGVybWluZUxldmVsIiwibGluZSIsImV4dHJhY3RUaXRsZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsImZvcmNlU2luZ2xlTGluZSIsImV4dHJhY3RTdW1tYXJ5IiwicmF3Q29udGVudCIsIm1heExlbmd0aCIsImlzSGVhZGluZyIsInBhcnNlTGluZSIsImZpbmFsaXNlUHJldmlvdXNTZWN0aW9uIiwidHJpbUxlZnQiLCJ0cmltUmlnaHQiLCJmaW5hbGlzZWRTZWN0aW9uIiwiY2xvbmVEZWVwIiwiY3JlYXRlU2VjdGlvbkNyZWF0b3IiLCJjcmVhdGVOZXdTZWN0aW9uRnJvbUxpbmUiLCJsaW5lcyIsInNraXBwZWRMaW5lcyIsInZhcmlhYmxlTmFtZSIsImdldENvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJtcyIsInNldFRpbWVvdXQiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJmaXJzdCIsInJlc3QiLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsImlucHV0Iiwic2VhcmNoVmFsdWUiLCJyZXBsYWNlVmFsdWUiLCJyYXdGaWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FB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LElBQXpCLENBQThCZ0gsWUFBOUIsQ0FBUDtBQUNELENBRk07QUFJQSxNQUFNakcsY0FBYyxHQUFJa0csV0FBRCxJQUFpQjtBQUM3QyxRQUFNeEYsUUFBUSxHQUFHOEIsVUFBVSxDQUFDMEQsV0FBRCxFQUFjLEdBQWQsRUFBbUIsR0FBbkIsQ0FBM0IsQ0FENkMsQ0FHN0M7O0FBQ0EsTUFBSXhGLFFBQVEsS0FBSyxLQUFqQixFQUF3QjtBQUN0QixXQUFPLEtBQVA7QUFDRDs7QUFFRCxTQUFPaUYscUJBQXFCLENBQUNqRixRQUFELENBQTVCO0FBQ0QsQ0FUTSxDOzs7Ozs7Ozs7OztBQ1pQLDZDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2RvY3MvWy4uLmRvY3VtZW50YXRpb24tcGFnZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9kb2NzL1suLi5kb2N1bWVudGF0aW9uLXBhZ2VdXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi8uLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2RvY3MvWy4uLmRvY3VtZW50YXRpb24tcGFnZV0udHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJ2YXIgX3BhdGgsIF9wYXRoMjtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFN2Z0dhbWVDaUJyYW5kTG9nb1dvcmRtYXJrKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICB3aWR0aDogXCIxMDI0bW1cIixcbiAgICBoZWlnaHQ6IFwiMTAyNG1tXCIsXG4gICAgdmlld0JveDogXCIwIDAgMTAyNCAxMDI0XCJcbiAgfSwgcHJvcHMpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIHN0eWxlOiB7XG4gICAgICBtaXhCbGVuZE1vZGU6IFwibm9ybWFsXCJcbiAgICB9XG4gIH0sIF9wYXRoIHx8IChfcGF0aCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMjQzLjI2MyA2NzUuNDE0YTE2LjEgMTYuMSAwIDAxLTExLjQyMS00LjczMmwtMzcuMzcyLTM3LjM3MWMtNi4zMS02LjMwNy02LjMxLTE2LjUzMiAwLTIyLjg0MiA2LjMxLTYuMzA2IDE2LjUzMi02LjMwNiAyMi44NDIgMGwyNS45NSAyNS45NTEgNjMuMzIzLTYzLjMxOWM2LjMxMy02LjMwNyAxNi41MzUtNi4zMDMgMjIuODQxIDAgNi4zMSA2LjMwMyA2LjMxIDE2LjUzMiAwIDIyLjg0MWwtNzQuNzQzIDc0Ljc0YTE2LjEwNSAxNi4xMDUgMCAwMS0xMS40MiA0LjczMk0yNjAuMDQgNDQxLjYxaC05Mi43MjJjLTI0LjUzIDAtNDIuNzMtNC45LTU0LjYtMTQuNzE1LTExLjg3NS05LjgxLTE3LjgwOC0yNC45MjEtMTcuODA4LTQ1LjMzMXYtOTEuODM3YzAtMjAuNDA2IDUuOTMzLTM1LjUxNyAxNy44MDgtNDUuMzI4IDExLjg3LTkuODExIDMwLjA3LTE0LjcyMSA1NC42LTE0LjcyMWg3My41ODljMy43MjQgMCA2LjQyNS44NCA4LjA5MSAyLjUwMyAxLjY3IDEuNjcgMi41MDQgNC4zNzEgMi41MDQgOC4wOTV2MzUuNjE4YzAgMy43MjctLjgzNCA2LjQyNi0yLjUwNCA4LjA5NS0xLjY2NiAxLjY2Ni00LjM2NyAyLjUtOC4wOTEgMi41aC02MS4yMjRjLTYuMDg3IDAtMTAuNTk4IDEuMjI3LTEzLjU0MSAzLjY3OC0yLjk0MyAyLjQ2LTQuNDE1IDYuMTM0LTQuNDE1IDExLjAzOHY3MC4zNWMwIDQuOTA3IDEuMTI2IDguNTM3IDMuMzg2IDEwLjg5NCAyLjI1MiAyLjM1MyA1LjYzOCAzLjUzMiAxMC4xNTMgMy41MzJoMjguNTUxdi00NS45MmMwLTMuNzI4LjgzNS02LjQyNyAyLjUwNC04LjA5NiAxLjY2My0xLjY2NiA0LjM2NS0yLjUgOC4wOTUtMi41aDQ1LjYyM2MzLjcyNSAwIDYuNDI2LjgzNCA4LjA5NSAyLjUgMS42NjMgMS42NyAyLjUgNC4zNjggMi41IDguMDk1djkwLjk1NWMwIDMuNzMtLjgzNyA2LjQyOS0yLjUgOC4wOTItMS42NjkgMS42NjktNC4zNyAyLjUwMy04LjA5NSAyLjUwM00zODMuMzcgMjkxLjQ5MmwtMTMuODM0IDQ0Ljc0MWg0Ni4yMWwtMTMuODM0LTQ0Ljc0MWMtLjc4Ny0xLjc2My0xLjYxNi0zLjA0LTIuNTA0LTMuODI4LS44OC0uNzgtMS45MS0xLjE3Ny0zLjA4Ny0xLjE3N2gtNy4zNmMtMS4xNzcgMC0yLjIwNi4zOTYtMy4wOTEgMS4xNzctLjg4MS43ODctMS43MiAyLjA2NS0yLjUgMy44MjhtLTE2Ljc4IDEzOS41MjRjMCAzLjcyNy0uODM1IDYuNDI5LTIuNTA0IDguMDkyLTEuNjY2IDEuNjY5LTQuMzY0IDIuNTA0LTguMDkyIDIuNTA0aC00My4yN2MtMy43MjcgMC02LjQyNi0uODM1LTguMDk1LTIuNTA0LTEuNjctMS42NjMtMi41LTQuMzY1LTIuNS04LjA5MnYtNzcuNzExYzAtNS44ODYuOTI4LTEyLjY1NyAyLjc5NS0yMC4zMDYgMS44NjQtNy42NTYgNC43NTctMTYuNTg2IDguNjg1LTI2Ljc4OWwyNS42MDktNjYuODE0YzEuMTc2LTMuMzM5IDIuOTktNS43ODkgNS40NDMtNy4zNiAyLjQ1LTEuNTcgNS42MzgtMi4zNTcgOS41NjctMi4zNTdoNzkuMThjMy43MjYgMCA2LjgxNy43ODcgOS4yNyAyLjM1NiAyLjQ1NCAxLjU3MiA0LjI3IDQuMDIyIDUuNDQ3IDcuMzZsMjUuNjEgNjYuODE1YzMuOTIxIDEwLjIwMyA2LjgxNyAxOS4xMzMgOC42OCAyNi43ODkgMS44NjQgNy42NDkgMi44IDE0LjQyIDIuOCAyMC4zMDZ2NzcuNzExYzAgMy43MjctLjg0MSA2LjQyOS0yLjUwNCA4LjA5Mi0xLjY3IDEuNjY5LTQuMzY4IDIuNTA0LTguMDk1IDIuNTA0aC00NC40NDdjLTMuOTI4IDAtNi44Mi0uODM1LTguNjg1LTIuNTA0LTEuODYzLTEuNjYzLTIuNzkyLTQuMzY1LTIuNzkyLTguMDkydi00MS4yMTJIMzY2LjU5em0yMDkuMjgzIDEwLjU5NGgtNDMuODZjLTMuNzI4IDAtNi40MjktLjgzNC04LjA5NS0yLjUwMy0xLjY3LTEuNjYzLTIuNDk4LTQuMzYyLTIuNDk4LTguMDkyVjI0MC4yNzZjMC0zLjcyNC44MjgtNi40MjUgMi40OTgtOC4wOTUgMS42NjYtMS42NjMgNC4zNjctMi41MDMgOC4wOTUtMi41MDNoNDcuMzkzYzMuMTM0IDAgNS43MzguNjkzIDcuNzk2IDIuMDYxIDIuMDY1IDEuMzc3IDMuOTc2IDMuNjM2IDUuNzQyIDYuNzdsMjYuNDk0IDQ3Ljk4Yy45NzYgMS43NjcgMS44MSAzLjA0NCAyLjUgMy44MjUuNjg0Ljc4NyAxLjYxNiAxLjE3NyAyLjc5NiAxLjE3N2gyLjY0OGMxLjE4IDAgMi4xMDgtLjM4OSAyLjc5OS0xLjE3Ny42ODQtLjc4IDEuNTE1LTIuMDU4IDIuNS0zLjgyNWwyNi4xOTYtNDcuOThjMS43Ny0zLjEzNCAzLjY4LTUuMzkzIDUuNzQyLTYuNzcgMi4wNTgtMS4zNjggNC42NTktMi4wNjEgNy44LTIuMDYxaDQ3LjY4NGMzLjcyNCAwIDYuNDI2Ljg0IDguMDk1IDIuNTAzIDEuNjYzIDEuNjcgMi41MDQgNC4zNzEgMi41MDQgOC4wOTV2MTkwLjczOWMwIDMuNzMtLjg0IDYuNDI5LTIuNTA0IDguMDkyLTEuNjY5IDEuNjY5LTQuMzcgMi41MDMtOC4wOTUgMi41MDNoLTQ1LjMzMWMtMy43MjggMC02LjQyNi0uODM0LTguMDk1LTIuNTAzLTEuNjctMS42NjMtMi40OTgtNC4zNjItMi40OTgtOC4wOTJWMzI3LjQwM2wtMTcuMzcgMzIuMDg1Yy0xLjc2NiAzLjMzOC0zLjg3NyA1LjczOC02LjMyOCA3LjIxLTIuNDUzIDEuNDc1LTUuNTQ3IDIuMjA5LTkuMjcxIDIuMjA5aC0xMS43NzJjLTMuNzM0IDAtNi44MjEtLjczNC05LjI3NS0yLjIwOS0yLjQ1Ny0xLjQ3Mi00LjU2Mi0zLjg3Mi02LjMyOC03LjIxbC0xNy4zNjctMzIuMDg1djEwMy42MTJjMCAzLjczLS44MzggNi40MjktMi41IDguMDkyLTEuNjcgMS42NjktNC4zNzEgMi41MDMtOC4wOTUgMi41MDNtMzQyLjYyMiAwSDc4MS45MTdjLTMuNzMgMC02LjQzMi0uODM0LTguMDk1LTIuNTAzLTEuNjcyLTEuNjYzLTIuNS00LjM2Mi0yLjUtOC4wOTJWMjQwLjI3NmMwLTMuNzI0LjgyNy02LjQyNSAyLjUtOC4wOTUgMS42NjMtMS42NjMgNC4zNjQtMi41MDMgOC4wOTUtMi41MDNoMTM2LjU3OGMzLjcyNCAwIDYuNDI2Ljg0IDguMDkyIDIuNTAzIDEuNjY2IDEuNjcgMi41MDMgNC4zNzEgMi41MDMgOC4wOTV2MzQuNDQxYzAgMy43MjgtLjgzNyA2LjQyNi0yLjUwMyA4LjA5Mi0xLjY2NiAxLjY3LTQuMzY4IDIuNTA0LTguMDkyIDIuNTA0SDgzNy4yNXYyMi42NjJoNTcuMzk4YzMuNzI4IDAgNi40MjYuODM4IDguMDk1IDIuNTA0IDEuNjY2IDEuNjY2IDIuNTA0IDQuMzcgMi41MDQgOC4wOTJ2MzEuNDk1YzAgMy43MzQtLjgzOCA2LjQzMi0yLjUwNCA4LjA5NS0xLjY2OSAxLjY3Mi00LjM2NyAyLjUwNC04LjA5NSAyLjUwNEg4MzcuMjV2MjUuMzE2aDgxLjI0NGMzLjcyNCAwIDYuNDI2LjgzNSA4LjA5MiAyLjQ5OCAxLjY2NiAxLjY3MiAyLjUwMyA0LjM3IDIuNTAzIDguMDk1djM0LjQ0YzAgMy43MzEtLjgzNyA2LjQzLTIuNTAzIDguMDkzLTEuNjY2IDEuNjY5LTQuMzY4IDIuNTAzLTguMDkyIDIuNTAzXCIsXG4gICAgZmlsbDogXCIjM2RjMDk0XCJcbiAgfSkpLCBfcGF0aDIgfHwgKF9wYXRoMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTMwLjMxMyA3MDcuNjY0aDI2My4yNjlWNTMyLjcyM2gtMjYzLjI3em0yNzkuNDIxIDMyLjNoLTI5NS41N2MtOC45MiAwLTE2LjE1My03LjIzMS0xNi4xNTMtMTYuMTUxVjUxNi41N2MwLTguOTE3IDcuMjMyLTE2LjE1IDE2LjE1My0xNi4xNWgyOTUuNTdjOC45MiAwIDE2LjE1MiA3LjIzMyAxNi4xNTIgMTYuMTV2MjA3LjI0MmMwIDguOTItNy4yMzIgMTYuMTUyLTE2LjE1MiAxNi4xNTJtLTc5LjgzOCA1NC4zNThIMTk0Yy04LjkyIDAtMTYuMTQ5LTcuMjMyLTE2LjE0OS0xNi4xNDkgMC04LjkyIDcuMjI5LTE2LjE1NSAxNi4xNDktMTYuMTU1aDEzNS44OTdjOC45MiAwIDE2LjE1MiA3LjIzNSAxNi4xNTIgMTYuMTU1IDAgOC45MTctNy4yMzIgMTYuMTUtMTYuMTUyIDE2LjE1bTM0NC4wNC00LjczNWgtOTguMzQ0Yy0zMy41OSAwLTU4LjUxMi02LjcxNC03NC43NjUtMjAuMTUyLTE2LjI2Mi0xMy40MzItMjQuMzg1LTM0LjEyMS0yNC4zODUtNjIuMDY3VjU4Mi4wMmMwLTI3Ljk0NiA4LjEyMy00OC43MDQgMjQuMzg1LTYyLjI3MSAxNi4yNTMtMTMuNTY0IDQxLjE3NC0yMC4zNTcgNzQuNzY1LTIwLjM1N2g5OC4zNDRjNS4xMDEgMCA4Ljc5OCAxLjE0OSAxMS4wODIgMy40MyAyLjI4IDIuMjg0IDMuNDI5IDUuOTggMy40MjkgMTEuMDgydjQ4Ljc3YzAgNS4xMDUtMS4xNDggOC44LTMuNDMgMTEuMDg1LTIuMjgzIDIuMjgtNS45OCAzLjQyMy0xMS4wODEgMy40MjNoLTgxLjAxMmMtOC4zMzMgMC0xNC41MDggMS42ODItMTguNTQgNS4wMzYtNC4wMzUgMy4zNjYtNi4wNDYgOC40MDItNi4wNDYgMTUuMTE3djk1LjkyNGMwIDYuNzIgMi4wMTEgMTEuNjI1IDYuMDQ2IDE0LjcxMiA0LjAzMiAzLjA5NCAxMC4yMDcgNC42MzQgMTguNTQgNC42MzRoODEuMDEyYzUuMTAxIDAgOC43OTggMS4xNDkgMTEuMDgyIDMuNDMgMi4yOCAyLjI4NCAzLjQyOSA1Ljk4IDMuNDI5IDExLjA4MnY0Ny45NjNjMCA1LjEwNS0xLjE0OCA4LjgwNC0zLjQzIDExLjA4LTIuMjgzIDIuMjktNS45OCAzLjQyOC0xMS4wODEgMy40MjhtNjguMTEzIDBjLTUuMTA1IDAtOC44MDctMS4xMzgtMTEuMDg1LTMuNDI5LTIuMjg3LTIuMjc1LTMuNDIzLTUuOTc0LTMuNDIzLTExLjA3OXYtNDcuOTYzYzAtNS4xMDIgMS4xMzYtOC43OTggMy40MjMtMTEuMDgyIDIuMjc4LTIuMjgxIDUuOTgtMy40MyAxMS4wODUtMy40M2gzOS45VjU3Ny4xODJoLTM5LjljLTUuMTA1IDAtOC44MDctMS4xNDItMTEuMDg1LTMuNDIzLTIuMjg3LTIuMjg0LTMuNDIzLTUuOTgtMy40MjMtMTEuMDg1di00OC43N2MwLTUuMTAyIDEuMTM2LTguNzk4IDMuNDIzLTExLjA4MiAyLjI3OC0yLjI4MSA1Ljk4LTMuNDMgMTEuMDg1LTMuNDNoMTcxLjdjNS4xMDIgMCA4Ljc5NSAxLjE0OSAxMS4wODUgMy40MyAyLjI3NSAyLjI4NCAzLjQyMyA1Ljk4IDMuNDIzIDExLjA4MnY0OC43N2MwIDUuMTA1LTEuMTQ4IDguOC0zLjQyMyAxMS4wODUtMi4yOSAyLjI4LTUuOTgzIDMuNDIzLTExLjA4NSAzLjQyM2gtMzkuMDk0djEzNS40MjNoMzkuMDk0YzUuMTAyIDAgOC43OTUgMS4xNDkgMTEuMDg1IDMuNDMgMi4yNzUgMi4yODQgMy40MjMgNS45OCAzLjQyMyAxMS4wODJ2NDcuOTYzYzAgNS4xMDUtMS4xNDggOC44MDQtMy40MjMgMTEuMDgtMi4yOSAyLjI5LTUuOTgzIDMuNDI4LTExLjA4NSAzLjQyOHpcIixcbiAgICBmaWxsOiBcIiNmZmZcIlxuICB9KSkpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnR2FtZUNpQnJhbmRMb2dvV29yZG1hcms7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xyXG4gIHBlcm1hbGlua1BhdGg6ICcnLFxyXG4gIGFic29sdXRlUGF0aDogJycsXHJcbn0pO1xyXG4iLCJpbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZUxpa2UgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi9oZWFkZXIvbmF2LWJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXIvZm9vdGVyJztcclxuXHJcbmNvbnN0IHsgQ29udGVudCB9ID0gTGF5b3V0O1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlTGlrZTtcclxuICBzaG93U2VhcmNoPzogYm9vbGVhbjtcclxuICBzdGlja3lIZWFkZXI/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBCYXNlTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHNob3dTZWFyY2gsIHN0aWNreUhlYWRlciB9OiBQcm9wcykgPT4gKFxyXG4gIDxMYXlvdXQgc3R5bGU9e3sgbWluSGVpZ2h0OiAnMTAwdmgnIH19PlxyXG4gICAgPE5hdkJhciBzaG93U2VhcmNoPXtzaG93U2VhcmNofSBzdGlja3lIZWFkZXI9e3N0aWNreUhlYWRlcn0gLz5cclxuICAgIDxDb250ZW50IHN0eWxlPXt7IHBhZGRpbmdUb3A6IHN0aWNreUhlYWRlciA/ICc2NHB4JyA6IDAgfX0+e2NoaWxkcmVufTwvQ29udGVudD5cclxuICAgIDxGb290ZXIgLz5cclxuICA8L0xheW91dD5cclxuKTtcclxuXHJcbkJhc2VMYXlvdXQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHNob3dTZWFyY2g6IHRydWUsXHJcbiAgc3RpY2t5SGVhZGVyOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VMYXlvdXQ7XHJcbiIsImltcG9ydCB7IExheW91dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBJb0xvZ29WZXJjZWwgfSBmcm9tICdyZWFjdC1pY29ucy9hbGwnO1xyXG5cclxuY29uc3QgeyBGb290ZXIgfSA9IExheW91dDtcclxuXHJcbmNvbnN0IEZvb3RlcldyYXBwZXIgPSAoKSA9PiAoXHJcbiAgPEZvb3RlciBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCB6SW5kZXg6IDUgfX0+XHJcbiAgICBNYWRlIHdpdGgg4p2kIGJ5IG9wZW4gc291cmNlIGNvbnRyaWJ1dG9ycyBhbmQgcG93ZXJlZCBieVxyXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWdhbWUtY2lcIj5cclxuICAgICAgPElvTG9nb1ZlcmNlbCBhbHQ9XCJWZXJjZWxcIiBzaXplPXsyMH0gc3R5bGU9e3sgbWFyZ2luOiAnMCA0cHggLTJweCcsIGNvbG9yOiAnYmxhY2snIH19IC8+XHJcbiAgICA8L2E+XHJcbiAgPC9Gb290ZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXJXcmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZCYXJcIjogXCJfMkNaZnRlcnpWUTVMN3ZlSkNtWHNKY1wiLFxuXHRcInN0aWNreVwiOiBcIl8zbV9TRkVKM2VOOWdpemZya0FnTVRYXCIsXG5cdFwiYnJhbmRcIjogXCJfM0lDcE93N1AxYnBFNUdqbTFwc0JpcVwiLFxuXHRcIm1lbnVcIjogXCJVTkZ4THdsVHB0QlN4NGwyR3hMZ0FcIlxufTsiLCJpbXBvcnQgU2VhcmNoQmFyIGZyb20gJ0AvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL3NlYXJjaC1iYXInO1xyXG5pbXBvcnQgU291cmNlTGlua3MgZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvc291cmNlLWxpbmtzJztcclxuaW1wb3J0IHsgdXNlVG9wTGV2ZWxSb3V0ZSB9IGZyb20gJ0AvY29yZS9ob29rcy91c2UtdG9wLWxldmVsLXJvdXRlJztcclxuaW1wb3J0IHsgTGF5b3V0LCBNZW51IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElvTG9nb0Rpc2NvcmQgfSBmcm9tICdyZWFjdC1pY29ucy9hbGwnO1xyXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBHYW1lQ2lMb2dvIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2FtZS1jaS1icmFuZC1sb2dvLXdvcmRtYXJrLnN2Zyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmF2LWJhci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCB7IEhlYWRlciB9ID0gTGF5b3V0O1xyXG5jb25zdCB7IEl0ZW0gfSA9IE1lbnU7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHNob3dTZWFyY2g/OiBib29sZWFuO1xyXG4gIHN0aWNreUhlYWRlcj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IE5hdkJhciA9ICh7IHNob3dTZWFyY2gsIHN0aWNreUhlYWRlciB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGRlZmF1bHRTZWxlY3RlZEtleSA9IHVzZVRvcExldmVsUm91dGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkZXIgY2xhc3NOYW1lPXtjeChzdHlsZXMubmF2QmFyLCB7IFtzdHlsZXMuc3RpY2t5XTogc3RpY2t5SGVhZGVyIH0pfT5cclxuICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuYnJhbmR9IGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPEdhbWVDaUxvZ28gaGVpZ2h0PXs2NH0gd2lkdGg9ezY0fSAvPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgdGhlbWU9XCJkYXJrXCJcclxuICAgICAgICBtb2RlPVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVudX1cclxuICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbZGVmYXVsdFNlbGVjdGVkS2V5XX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJdGVtIGtleT1cIi9cIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgIDxJdGVtIGtleT1cIi9kb2NzXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2RvY3NcIj5cclxuICAgICAgICAgICAgPGE+RG9jczwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAge3Nob3dTZWFyY2ggPyA8U2VhcmNoQmFyIC8+IDogPGRpdiBzdHlsZT17eyBmbGV4OiAxIH19IC8+fVxyXG4gICAgICAgIDxTb3VyY2VMaW5rcyAvPlxyXG4gICAgICAgIDxJdGVtIGtleT1cIi9kaXNjb3JkXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2Rpc2NvcmRcIj5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPElvTG9nb0Rpc2NvcmQgc2l6ZT17MjR9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogLTUgfX0gLz5cclxuICAgICAgICAgICAgICBEaXNjb3JkXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0l0ZW0+XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvSGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5OYXZCYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHNob3dTZWFyY2g6IGZhbHNlLFxyXG4gIHN0aWNreUhlYWRlcjogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlYXJjaEJhclwiOiBcIl8yMVRJUzZoc3B3RmQ4NlVQenNOZ0JCXCIsXG5cdFwic2VhcmNoQm94XCI6IFwiXzFBcUdCZE1fMGRSbDZ2d1VuVDRVNExcIlxufTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFNpQWxnb2xpYSB9IGZyb20gJ3JlYWN0LWljb25zL2FsbCc7XHJcbmltcG9ydCB7IFNlYXJjaEJveCwgUGFnaW5hdGlvbiB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gtZG9tJztcclxuaW1wb3J0IENvbmZpZ3VyYXRpb24gZnJvbSAnQC9jb21wb25lbnRzL3NlYXJjaC9jb25maWd1cmF0aW9uJztcclxuaW1wb3J0IFNlYXJjaFJlc3VsdHMgZnJvbSAnQC9jb21wb25lbnRzL3NlYXJjaC9yZXN1bHRzJztcclxuaW1wb3J0IFN0YXRzIGZyb20gJ0AvY29tcG9uZW50cy9zZWFyY2gvc3RhdHMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NlYXJjaC1iYXIubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgU2VhcmNoQmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hGb2N1c2VkLCBzZXRGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlYXJjaEhvdmVyZWQsIHNldFNlYXJjaEhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyZXN1bHRzSG92ZXJlZCwgc2V0UmVzdWx0c0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBhY3RpdmUgPSBzZWFyY2hGb2N1c2VkIHx8IHNlYXJjaEhvdmVyZWQgfHwgcmVzdWx0c0hvdmVyZWQ7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2VhcmNoSG92ZXJlZCh0cnVlKX1cclxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTZWFyY2hIb3ZlcmVkKGZhbHNlKX1cclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQmFyfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgcGFkZGluZzogJzAgMTAlJyxcclxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZSA/ICcjMzczNDQ1JyA6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxDb25maWd1cmF0aW9uIC8+XHJcbiAgICAgIDxTZWFyY2hCb3hcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCb3h9XHJcbiAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0Rm9jdXModHJ1ZSl9XHJcbiAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRGb2N1cyhmYWxzZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJhaXMtcmVzdWx0cy1wYW5lbFwiXHJcbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRSZXN1bHRzSG92ZXJlZCh0cnVlKX1cclxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFJlc3VsdHNIb3ZlcmVkKGZhbHNlKX1cclxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBhY3RpdmUgPyAnYmxvY2snIDogJ25vbmUnIH19XHJcbiAgICAgID5cclxuICAgICAgICA8UGFnaW5hdGlvbiAvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogOCB9fSAvPlxyXG4gICAgICAgIDxTZWFyY2hSZXN1bHRzIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhaXMtbWV0YS1pbmZvcm1hdGlvblwiPlxyXG4gICAgICAgICAgPFN0YXRzIC8+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgUG93ZXJlZCBieVxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL2FsZ29saWEuY29tL1wiPlxyXG4gICAgICAgICAgICAgIDxTaUFsZ29saWEgc2l6ZT17MjR9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0gLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFpT3V0bGluZUdpdGh1YiwgQWlPdXRsaW5lR2l0bGFiIH0gZnJvbSAncmVhY3QtaWNvbnMvYWxsJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgeyBJdGVtLCBJdGVtR3JvdXAsIFN1Yk1lbnUgfSA9IE1lbnU7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmV2ZW50LWFiYnJldmlhdGlvbnNcclxuY29uc3QgU291cmNlTGlua3MgPSAocHJvcHMpID0+IChcclxuICA8U3ViTWVudVxyXG4gICAgey4uLnByb3BzfVxyXG4gICAgc2VsZWN0YWJsZT17ZmFsc2V9XHJcbiAgICBpY29uPXs8QWlPdXRsaW5lR2l0aHViIHNpemU9ezI0fSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IC01IH19IC8+fVxyXG4gICAgdGl0bGU9XCJTb3VyY2UgY29kZVwiXHJcbiAgPlxyXG4gICAgPEl0ZW1Hcm91cCB0aXRsZT1cIlByb2plY3RzXCI+XHJcbiAgICAgIDxJdGVtIGljb249ezxBaU91dGxpbmVHaXRodWIgLz59IGtleT1cInNvdXJjZTpnYW1lLWNpOmRvY3VtZW50YXRpb25cIj5cclxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9nYW1lLWNpL2RvY3VtZW50YXRpb25cIj5cclxuICAgICAgICAgIFRoaXMgV2Vic2l0ZVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9JdGVtPlxyXG4gICAgICA8SXRlbSBpY29uPXs8QWlPdXRsaW5lR2l0aHViIC8+fSBrZXk9XCJzb3VyY2U6Z2FtZS1jaTp2ZXJzaW9uaW5nLWJhY2tlbmRcIj5cclxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9nYW1lLWNpL3ZlcnNpb25pbmctYmFja2VuZFwiPlxyXG4gICAgICAgICAgVmVyc2lvbmluZyBCYWNrZW5kXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0l0ZW0+XHJcbiAgICA8L0l0ZW1Hcm91cD5cclxuICAgIDxJdGVtR3JvdXAgdGl0bGU9XCJEb2NrZXJcIj5cclxuICAgICAgPEl0ZW0gaWNvbj17PEFpT3V0bGluZUdpdGh1YiAvPn0ga2V5PVwiZXh0ZXJuYWw6Z2FtZS1jaTpkb2NrZXJcIj5cclxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9nYW1lLWNpL2RvY2tlclwiPlxyXG4gICAgICAgICAgRG9ja2VyIGltYWdlcyBmb3IgVW5pdHlcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvSXRlbT5cclxuICAgIDwvSXRlbUdyb3VwPlxyXG4gICAgPEl0ZW1Hcm91cCB0aXRsZT1cIkdpdGxhYlwiPlxyXG4gICAgICA8SXRlbSBpY29uPXs8QWlPdXRsaW5lR2l0bGFiIC8+fSBrZXk9XCJleHRlcm5hbDpnYW1lLWNpOnVuaXR5M2QtZ2l0bGFiLWNpLWV4YW1wbGVcIj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0bGFiLmNvbS9nYW1lLWNpL3VuaXR5M2QtZ2l0bGFiLWNpLWV4YW1wbGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIGdpdGxhYi1jaSB1bml0eTNkIGV4YW1wbGUgcHJvamVjdFxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9JdGVtPlxyXG4gICAgPC9JdGVtR3JvdXA+XHJcbiAgICA8SXRlbUdyb3VwIHRpdGxlPVwiR2l0SHViIEFjdGlvbnNcIj5cclxuICAgICAgPEl0ZW0gaWNvbj17PEFpT3V0bGluZUdpdGh1YiAvPn0ga2V5PVwiZXh0ZXJuYWw6Z2FtZS1jaTp1bml0eS1hY3Rpb25zXCI+XHJcbiAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2FtZS1jaS91bml0eS1hY3Rpb25zXCI+XHJcbiAgICAgICAgICBVbml0eSBBY3Rpb25zXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0l0ZW0+XHJcbiAgICAgIDxJdGVtIGljb249ezxBaU91dGxpbmVHaXRodWIgLz59IGtleT1cImV4dGVybmFsOmdhbWUtY2k6dW5pdHktcmVxdWVzdC1hY3RpdmF0aW9uLWZpbGVcIj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9nYW1lLWNpL3VuaXR5LXJlcXVlc3QtYWN0aXZhdGlvbi1maWxlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBVbml0eSBSZXF1ZXN0IEFjdGl2YXRpb25cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvSXRlbT5cclxuICAgICAgPEl0ZW0gaWNvbj17PEFpT3V0bGluZUdpdGh1YiAvPn0ga2V5PVwiZXh0ZXJuYWw6Z2FtZS1jaTp1bml0eS1hY3RpdmF0ZVwiPlxyXG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dhbWUtY2kvdW5pdHktYWN0aXZhdGVcIj5cclxuICAgICAgICAgIFVuaXR5IEFjdGl2YXRlXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0l0ZW0+XHJcbiAgICAgIDxJdGVtIGljb249ezxBaU91dGxpbmVHaXRodWIgLz59IGtleT1cImV4dGVybmFsOmdhbWUtY2k6dW5pdHktdGVzdC1ydW5uZXJcIj5cclxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9nYW1lLWNpL3VuaXR5LXRlc3QtcnVubmVyXCI+XHJcbiAgICAgICAgICBVbml0eSBUZXN0IFJ1bm5lclxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9JdGVtPlxyXG4gICAgICA8SXRlbSBpY29uPXs8QWlPdXRsaW5lR2l0aHViIC8+fSBrZXk9XCJleHRlcm5hbDpnYW1lLWNpOnVuaXR5LWJ1aWxkZXJcIj5cclxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9nYW1lLWNpL3VuaXR5LWJ1aWxkZXJcIj5cclxuICAgICAgICAgIFVuaXR5IEJ1aWxkZXJcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvSXRlbT5cclxuICAgICAgPEl0ZW0gaWNvbj17PEFpT3V0bGluZUdpdGh1YiAvPn0ga2V5PVwiZXh0ZXJuYWw6Z2FtZS1jaTp1bml0eS1yZXR1cm4tbGljZW5zZVwiPlxyXG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dhbWUtY2kvdW5pdHktcmV0dXJuLWxpY2Vuc2VcIj5cclxuICAgICAgICAgIFVuaXR5IFJldHVybiBMaWNlbnNlXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0l0ZW0+XHJcbiAgICAgIDxJdGVtIGljb249ezxBaU91dGxpbmVHaXRodWIgLz59IGtleT1cImV4dGVybmFsOmdhbWUtY2k6c3RlYW0tZGVwbG95XCI+XHJcbiAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2FtZS1jaS9zdGVhbS1kZXBsb3lcIj5cclxuICAgICAgICAgIFN0ZWFtIERlcGxveVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9JdGVtPlxyXG4gICAgPC9JdGVtR3JvdXA+XHJcbiAgPC9TdWJNZW51PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU291cmNlTGlua3M7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnVOb2RlIH0gZnJvbSAnQC90b29scy9tZW51L21lbnUtbm9kZSc7XHJcbmltcG9ydCB7IE1lbnVTZWdtZW50IH0gZnJvbSAnQC90b29scy9tZW51L21lbnUtc2VnbWVudCc7XHJcbmltcG9ydCB7IE1lbnVTdHJ1Y3R1cmUgfSBmcm9tICdAL3Rvb2xzL21lbnUvbWVudS1zdHJ1Y3R1cmUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1iIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IEFpT3V0bGluZUhvbWUgfSBmcm9tICdyZWFjdC1pY29ucy9hbGwnO1xyXG5pbXBvcnQgdXNlUGF0aFNlZ21lbnRzIGZyb20gJ0AvY29yZS9yb3V0aW5nL3VzZS1wYXRoLXNlZ21lbnRzJztcclxuaW1wb3J0IE1lbnVDb250ZXh0IGZyb20gJy4uLy4uL3BhZ2VzL2RvY3MvbWVudS9tZW51LWNvbnRleHQnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2JyZWFkY3J1bWIubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgeyBJdGVtIH0gPSBCcmVhZGNydW1iO1xyXG5cclxuY29uc3QgQnJlYWRjcnVtYldyYXBwZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VnbWVudHMgPSB1c2VQYXRoU2VnbWVudHMoPEFpT3V0bGluZUhvbWUgLz4pO1xyXG4gIGNvbnN0IHsgbWVudVN0cnVjdHVyZSB9ID0gUmVhY3QudXNlQ29udGV4dChNZW51Q29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QnJlYWRjcnVtYiBjbGFzc05hbWU9e3N0eWxlcy5icmVhZENydW1ifT5cclxuICAgICAge3NlZ21lbnRzLm1hcCgoeyB1cmwsIG5hbWUgfSkgPT4ge1xyXG4gICAgICAgIGlmIChNZW51U2VnbWVudC5pc1ZlcnNpb24obmFtZSkpIHJldHVybiBudWxsO1xyXG4gICAgICAgIC8vIFwiL1wiIGlzIGEgc2VnbWVudCB0b29cclxuICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gSWYgc2VnbWVudCBtYXRjaGVzIGZvbGRlciBpbiBnZW5lcmF0ZWQgbWVudS1zdHJ1Y3R1cmUsIGRldGVybWluZSBpdHMgZmlyc3QgcGFnZVxyXG4gICAgICAgIGNvbnN0IG1lbnVOb2RlID0gTWVudVN0cnVjdHVyZS5nZXROb2RlQnlVcmwobWVudVN0cnVjdHVyZSwgdXJsKTtcclxuICAgICAgICBjb25zdCBuZWFyZXN0VXJsID0gTWVudU5vZGUuZmluZEZpcnN0UGFnZShtZW51Tm9kZSk7XHJcbiAgICAgICAgY29uc3QgaHJlZiA9IG5lYXJlc3RVcmwgPyBgL2RvY3MvJHtuZWFyZXN0VXJsfWAgOiB1cmw7XHJcbiAgICAgICAgY29uc3QgY2FwaXRhbGlzZWROYW1lID0gbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8SXRlbSBrZXk9e2hyZWZ9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgICA8YT57Y2FwaXRhbGlzZWROYW1lfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9JdGVtPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9CcmVhZGNydW1iPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCcmVhZGNydW1iV3JhcHBlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnJlYWRDcnVtYlwiOiBcIl81VWNrUjh4akNWRVlWbUV3VS1UMjFcIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSZWFjdE5vZGVMaWtlIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBleHRyYWN0QW5jaG9ySWQgfSBmcm9tICdAL3Rvb2xzL3NlYXJjaC91dGlscy9leHRyYWN0LXNlY3Rpb25zJztcclxuXHJcbmNvbnN0IHsgTGluayB9ID0gQW5jaG9yO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVMaWtlO1xyXG59XHJcblxyXG5jb25zdCBBbmNob3JJdGVtID0gKHsgbGV2ZWwsIGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XHJcbiAgaWYgKGxldmVsID49IDYpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdmFsdWUgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKVswXTtcclxuICBjb25zdCBhbmNob3JJZCA9IGV4dHJhY3RBbmNob3JJZCh2YWx1ZSk7XHJcblxyXG4gIC8vIHN0eWxlc1xyXG4gIGNvbnN0IHBhZGRpbmdMZWZ0ID0gbGV2ZWwgKiA4IC0gODtcclxuICBjb25zdCBmb250U2l6ZSA9IGAkezEyMCAtIGxldmVsICogMTB9JWA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0LCBmb250U2l6ZSB9fT5cclxuICAgICAgPExpbmsgaHJlZj17YCMke2FuY2hvcklkfWB9IHRpdGxlPXt2YWx1ZX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmNob3JJdGVtO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhbmNob3JXcmFwcGVyXCI6IFwiXzJsYk81ekUwR0VCRldyOGhDYTR1THhcIixcblx0XCJ0b3BTcGFjZXJcIjogXCItSlZXb19MaE5NY1Y4b0JXMWZsRzRcIlxufTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFJlYWN0Tm9kZUxpa2UgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9hbmNob3Itdmlldy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVMaWtlO1xyXG59XHJcblxyXG5jb25zdCBBbmNob3JWaWV3ID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcclxuICBjb25zdCBbdGFyZ2V0T2Zmc2V0LCBzZXRUYXJnZXRPZmZzZXRdID0gdXNlU3RhdGU8bnVtYmVyIHwgdW5kZWZpbmVkPigpO1xyXG4gIGNvbnN0IFt3aW5kb3dIZWlnaHQsIHNldFdpbmRvd0hlaWdodF0gPSB1c2VTdGF0ZTxudW1iZXIgfCB1bmRlZmluZWQ+KCk7XHJcblxyXG4gIC8vIFVwZGF0ZSBvZmZzZXQgYmFzZWQgb24gd2luZG93IHNpemVcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZWlnaHRQZXJjZW50T2ZTY3JlZW5IZWlnaHQgPSBNYXRoLmZsb29yKHdpbmRvdy5pbm5lckhlaWdodCAvIDEyLjUpO1xyXG4gICAgY29uc3QgbWF4RGlzdGFuY2UgPSAyNDsgLy8gVGhpcyB3aWxsIG5lZWQgdG8gYmUgaGlnaGVyIGlmIHRoZXJlJ3MgYSBzdGlja3kgbWVudSBiYXJcclxuICAgIGNvbnN0IG9mZnNldCA9IE1hdGgubWluKGVpZ2h0UGVyY2VudE9mU2NyZWVuSGVpZ2h0LCBtYXhEaXN0YW5jZSk7XHJcbiAgICBzZXRUYXJnZXRPZmZzZXQob2Zmc2V0KTtcclxuICB9LCBbd2luZG93SGVpZ2h0XSk7XHJcblxyXG4gIC8vIFVwZGF0ZSB3aW5kb3cgc2l6ZSBvbiByZXNpemVcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb25SZXNpemUgPSAoKSA9PiBzZXRXaW5kb3dIZWlnaHQod2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QW5jaG9yIGNsYXNzTmFtZT17c3R5bGVzLmFuY2hvcldyYXBwZXJ9IHRhcmdldE9mZnNldD17dGFyZ2V0T2Zmc2V0fSBhZmZpeCBzaG93SW5rSW5GaXhlZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BTcGFjZXJ9IC8+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQW5jaG9yPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmNob3JWaWV3O1xyXG4iLCJpbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWFya2Rvd24tY29tcG9uZW50cy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmNvbnN0IEFydGljbGUgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4gKFxyXG4gIDxhcnRpY2xlIGNsYXNzTmFtZT17Y3goJ2FudC10eXBvZ3JhcGh5Jywgc3R5bGVzLm1hcmtkb3duKX0+e2NoaWxkcmVufTwvYXJ0aWNsZT5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGU7XHJcbiIsImltcG9ydCB7IFJlYWN0Tm9kZUxpa2UgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tYXJrZG93bi1jb21wb25lbnRzLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZUxpa2U7XHJcbn1cclxuXHJcbmNvbnN0IEJsb2NrcXVvdGUgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xyXG4gIHJldHVybiA8YmxvY2txdW90ZSBjbGFzc05hbWU9e3N0eWxlcy5ibG9ja3F1b3RlfT57Y2hpbGRyZW59PC9ibG9ja3F1b3RlPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2NrcXVvdGU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAqIGFzIGhsanMgZnJvbSAnaGlnaGxpZ2h0LmpzL2xpYi9jb3JlJztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5cclxuLy8gSWNvbiBmb3IgQ29weSBCdXR0b25cclxuaW1wb3J0IHsgR3JDb3B5IH0gZnJvbSAncmVhY3QtaWNvbnMvYWxsJztcclxuXHJcbmltcG9ydCB7IHVzZU5vdGlmaWNhdGlvbiB9IGZyb20gJ0AvY29yZS9ob29rcy91c2Utbm90aWZpY2F0aW9uJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21hcmtkb3duLWNvbXBvbmVudHMubW9kdWxlLnNjc3MnO1xyXG5cclxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCd5YW1sJywgcmVxdWlyZSgnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMveWFtbCcpKTtcclxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCdjc2hhcnAnLCByZXF1aXJlKCdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jc2hhcnAnKSk7XHJcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgnamF2YXNjcmlwdCcsIHJlcXVpcmUoJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmFzY3JpcHQnKSk7XHJcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgndHlwZXNjcmlwdCcsIHJlcXVpcmUoJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3R5cGVzY3JpcHQnKSk7XHJcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgnYmFzaCcsIHJlcXVpcmUoJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Jhc2gnKSk7XHJcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgncnVieScsIHJlcXVpcmUoJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3J1YnknKSk7XHJcbmhsanMucmVnaXN0ZXJMYW5ndWFnZSgncG93ZXJzaGVsbCcsIHJlcXVpcmUoJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Bvd2Vyc2hlbGwnKSk7XHJcblxyXG5jbGFzcyBDb2RlQmxvY2sgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XHJcbiAgICBzdXBlcihwcm9wZXJ0aWVzKTtcclxuICAgIHRoaXMuc2V0UmVmID0gdGhpcy5zZXRSZWYuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5oaWdobGlnaHRDb2RlKCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICB0aGlzLmhpZ2hsaWdodENvZGUoKTtcclxuICB9XHJcblxyXG4gIHNldFJlZihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmNvZGVFbCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBoaWdobGlnaHRDb2RlKCkge1xyXG4gICAgaGxqcy5oaWdobGlnaHRCbG9jayh0aGlzLmNvZGVFbCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBsYW5ndWFnZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAvLyBBZGQgU3R5bGluZyB0byBidXR0b24gaGVyZS5cclxuICAgIC8vIFRPRE8gZGVjaWRlIGlmIHRoZSBidXR0b24gc2hvdWxkIGJlIGxlZnQgb3IgcmlnaHQgYWxpZ25lZC5cclxuICAgIGNvbnN0IENvcHlCdXR0b24gPSAoKSA9PiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICB0b3A6IDgsXHJcbiAgICAgICAgICByaWdodDogOCxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjaGlsZHJlblswXSk7XHJcbiAgICAgICAgICAgIHVzZU5vdGlmaWNhdGlvbigpLmluZm8oe1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdDb2RlIENvcGllZCBTdWNjZXNzZnVsbHknLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEdyQ29weSAvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHByZSBjbGFzc05hbWU9e3N0eWxlcy5jb2RlQmxvY2t9PlxyXG4gICAgICAgIDxDb3B5QnV0dG9uIC8+XHJcbiAgICAgICAgPGRpdiByZWY9e3RoaXMuc2V0UmVmfSBjbGFzc05hbWU9e2BsYW5ndWFnZS0ke2xhbmd1YWdlfWB9PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3ByZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Db2RlQmxvY2suZGVmYXVsdFByb3BzID0ge1xyXG4gIGxhbmd1YWdlOiAnJyxcclxufTtcclxuXHJcbkNvZGVCbG9jay5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvZGVCbG9jaztcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCB7IFBhcmFncmFwaCB9ID0gVHlwb2dyYXBoeTtcclxuXHJcbmNsYXNzIEVtYmVkZGVkTGluayB7XHJcbiAgc3RhdGljIGZyb21DaGlsZHJlbihjaGlsZHJlbikge1xyXG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICBjb25zdCBwb3RlbnRpYWxMaW5rID0gY2hpbGRyZW5bMF07XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHBvdGVudGlhbExpbmsgPT09ICdzdHJpbmcnICYmIHBvdGVudGlhbExpbmsuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKSkge1xyXG4gICAgICAgIHJldHVybiBwb3RlbnRpYWxMaW5rO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaXNZb3V0dWJlTGluayhsaW5rOiBzdHJpbmcpIHtcclxuICAgIC8vIFN0YXJ0cyB3aXRoIHlvdXR1YmVcclxuICAgIGlmICgvXmh0dHBzOlxcL1xcL3d3d1xcLnlvdXR1YmUoLW5vY29va2llKT9cXC5jb20vLnRlc3QobGluaykpIHtcclxuICAgICAgLy8gVXJsIGFzIGV4cGVjdGVkXHJcbiAgICAgIGlmICghL15odHRwczpcXC9cXC93d3dcXC55b3V0dWJlLW5vY29va2llXFwuY29tXFwvZW1iZWRcXC8uKyQvLnRlc3QobGluaykpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgRm91bmQgeW91dHViZSBsaW5rLCBidXQgaXQgaXMgbWFsZm9ybWVkLlxyXG4gICAgICAgIGV4cGVjdGVkIGZvcm1hdDogXCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC9YWFhYWFhYWFhYXCJcclxuICAgICAgICBidXQgcmVjZWl2ZWQ6IFwiJHtsaW5rfVwiYCxcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBFbWJlZGRlZExpbmtPclBhcmFncmFwaCA9ICh7IG5vZGUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgcmVndWxhclBhcmFncmFwaCA9IDxQYXJhZ3JhcGggey4uLnByb3BzfT57Y2hpbGRyZW59PC9QYXJhZ3JhcGg+O1xyXG5cclxuICBjb25zdCBsaW5rID0gRW1iZWRkZWRMaW5rLmZyb21DaGlsZHJlbihjaGlsZHJlbik7XHJcbiAgaWYgKCFsaW5rKSByZXR1cm4gcmVndWxhclBhcmFncmFwaDtcclxuXHJcbiAgaWYgKEVtYmVkZGVkTGluay5pc1lvdXR1YmVMaW5rKGxpbmspKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8aWZyYW1lXHJcbiAgICAgICAgd2lkdGg9XCI1NjBcIlxyXG4gICAgICAgIGhlaWdodD1cIjMxNVwiXHJcbiAgICAgICAgc3JjPXtsaW5rfVxyXG4gICAgICAgIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIlxyXG4gICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXHJcbiAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcclxuICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVndWxhclBhcmFncmFwaDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtYmVkZGVkTGlua09yUGFyYWdyYXBoO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEhlYWRpbmcgZnJvbSAnQC9jb21wb25lbnRzL21hcmtkb3duL2NvbXBvbmVudHMvaGVhZGluZyc7XHJcbmltcG9ydCB7IGV4dHJhY3RBbmNob3JJZCB9IGZyb20gJ0AvdG9vbHMvc2VhcmNoL3V0aWxzL2V4dHJhY3Qtc2VjdGlvbnMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21hcmtkb3duLWNvbXBvbmVudHMubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmNvbnN0IGNvcHlVcmxUb0NsaXBib2FyZCA9IChoYXNoLCBvblN1Y2Nlc3MgPSAoKSA9PiB7fSwgb25FcnJvciA9ICgpID0+IHt9KSA9PiB7XHJcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb247XHJcblxyXG4gIGNvbnN0IGhhc2hJbmRleCA9IGhyZWYuaW5kZXhPZignIycpO1xyXG4gIGNvbnN0IGJhc2VVcmwgPSBoYXNoSW5kZXggPj0gMCA/IGhyZWYuc2xpY2UoMCwgaGFzaEluZGV4KSA6IGhyZWY7XHJcbiAgY29uc3QgbGluayA9IGAke2Jhc2VVcmx9IyR7aGFzaH1gO1xyXG5cclxuICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChsaW5rKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbn07XHJcblxyXG5jb25zdCBvblN1Y2Nlc3NmdWxseUNvcGllZCA9ICgpID0+IHtcclxuICBub3RpZmljYXRpb24uaW5mbyh7XHJcbiAgICBtZXNzYWdlOiBgTGluayB3YXMgY29waWVkIHRvIGNsaXBib2FyZC5gLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgSGVhZGluZ1dpdGhBbmNob3IgPSAoeyBsZXZlbCwgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pWzBdO1xyXG4gIGNvbnN0IGFuY2hvcklkID0gZXh0cmFjdEFuY2hvcklkKHZhbHVlKTtcclxuXHJcbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcclxuICAgIGNvcHlVcmxUb0NsaXBib2FyZChhbmNob3JJZCwgb25TdWNjZXNzZnVsbHlDb3BpZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uS2V5UHJlc3MgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICBjb3B5VXJsVG9DbGlwYm9hcmQoYW5jaG9ySWQsIG9uU3VjY2Vzc2Z1bGx5Q29waWVkKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBhbmNob3IgPSAoXHJcbiAgICA8c3BhblxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5hbmNob3J9XHJcbiAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICB0YWJJbmRleD17MH1cclxuICAgICAgb25LZXlQcmVzcz17b25LZXlQcmVzc31cclxuICAgID5cclxuICAgICAgI1xyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZGluZyBsZXZlbD17bGV2ZWx9IGlkPXthbmNob3JJZH0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAge2xldmVsID49IDIgJiYgYW5jaG9yfVxyXG4gICAgPC9IZWFkaW5nPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nV2l0aEFuY2hvcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWFya2Rvd24tY29tcG9uZW50cy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCB7IFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEhlYWRpbmcgPSAoeyBsZXZlbCwgY2hpbGRyZW4sIC4uLnByb3BzIH06IFByb3BzKSA9PiB7XHJcbiAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgY2FzZSAxOlxyXG4gICAgY2FzZSAyOlxyXG4gICAgY2FzZSAzOlxyXG4gICAgY2FzZSA0OlxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUaXRsZSB7Li4ucHJvcHN9IGxldmVsPXtsZXZlbH0gY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9UaXRsZT5cclxuICAgICAgKTtcclxuICAgIGNhc2UgNTpcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8aDUgey4uLnByb3BzfSBjbGFzc05hbWU9e2N4KCdhbnQtdHlwb2dyYXBoeScsIHN0eWxlcy5oZWFkaW5nKX0+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9oNT5cclxuICAgICAgKTtcclxuICAgIGNhc2UgNjpcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGg2IHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjeCgnYW50LXR5cG9ncmFwaHknLCBzdHlsZXMuaGVhZGluZyl9PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvaDY+XHJcbiAgICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuSGVhZGluZy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaWQ6IHVuZGVmaW5lZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmc7XHJcbiIsImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21hcmtkb3duLWNvbXBvbmVudHMubW9kdWxlLnNjc3MnO1xuXG5pbnRlcmZhY2UgTGlzdFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgb3JkZXJlZD86IGJvb2xlYW47XG59XG5cbmNvbnN0IExpc3QgPSAocHJvcHM6IExpc3RQcm9wcykgPT4ge1xuICBjb25zdCB7IG9yZGVyZWQsIGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICBpZiAob3JkZXJlZCkge1xuICAgIHJldHVybiA8b2wgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+e2NoaWxkcmVufTwvb2w+O1xuICB9XG5cbiAgcmV0dXJuIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT57Y2hpbGRyZW59PC91bD47XG59O1xuXG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgb3JkZXJlZDogZmFsc2UsXG59O1xuXG5pbnRlcmZhY2UgSXRlbVByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuY29uc3QgTGlzdEl0ZW0gPSAocHJvcHM6IEl0ZW1Qcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICByZXR1cm4gPGxpIGNsYXNzTmFtZT17Y3goJ2FudC10eXBvZ3JhcGh5Jywgc3R5bGVzLmxpc3RJdGVtKX0+e2NoaWxkcmVufTwvbGk+O1xufTtcblxuZXhwb3J0IHsgTGlzdCwgTGlzdEl0ZW0gfTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1hcmtkb3duXCI6IFwiaUtmSFIwT2V1RUlVMjRYSjVjNVNMXCIsXG5cdFwiYmxvY2txdW90ZVwiOiBcIl8xNlBDNjc5SHNyUHJ5NjVsZFJRMTliXCIsXG5cdFwiY29kZUJsb2NrXCI6IFwiXzF2S0tmY3FBTWNyTHdWa1Z1S1JhTUdcIixcblx0XCJoZWFkaW5nXCI6IFwiXzFhUE9xeTZCVEpsa0VqblkzUWpzRW1cIixcblx0XCJhbmNob3JcIjogXCJaWklwR0hBZnN6MEFtbHVLZ1FqT05cIlxufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgQmxvY2txdW90ZSBmcm9tICcuL2NvbXBvbmVudHMvYmxvY2txdW90ZSc7XG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gJy4vY29tcG9uZW50cy9jb2RlLWJsb2NrJztcbmltcG9ydCBFbWJlZGRlZExpbmtPclBhcmFncmFwaCBmcm9tICcuL2NvbXBvbmVudHMvZW1iZWRkZWQtbGluay1vci1wYXJhZ3JhcGgnO1xuaW1wb3J0IHsgTGlzdCwgTGlzdEl0ZW0gfSBmcm9tICcuL2NvbXBvbmVudHMvbGlzdCc7XG5pbXBvcnQgSGVhZGluZ1dpdGhBbmNob3IgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRpbmctd2l0aC1hbmNob3InO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGgxOiAoeyBub2RlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxIZWFkaW5nV2l0aEFuY2hvciBsZXZlbD17MX0gey4uLnByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0hlYWRpbmdXaXRoQW5jaG9yPlxuICApLFxuICBoMjogKHsgbm9kZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgICA8SGVhZGluZ1dpdGhBbmNob3IgbGV2ZWw9ezJ9IHsuLi5wcm9wc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9IZWFkaW5nV2l0aEFuY2hvcj5cbiAgKSxcbiAgaDM6ICh7IG5vZGUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPEhlYWRpbmdXaXRoQW5jaG9yIGxldmVsPXszfSB7Li4ucHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvSGVhZGluZ1dpdGhBbmNob3I+XG4gICksXG4gIGg0OiAoeyBub2RlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxIZWFkaW5nV2l0aEFuY2hvciBsZXZlbD17NH0gey4uLnByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0hlYWRpbmdXaXRoQW5jaG9yPlxuICApLFxuICBoNTogKHsgbm9kZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgICA8SGVhZGluZ1dpdGhBbmNob3IgbGV2ZWw9ezV9IHsuLi5wcm9wc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9IZWFkaW5nV2l0aEFuY2hvcj5cbiAgKSxcbiAgaDY6ICh7IG5vZGUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPEhlYWRpbmdXaXRoQW5jaG9yIGxldmVsPXs2fSB7Li4ucHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvSGVhZGluZ1dpdGhBbmNob3I+XG4gICksXG4gIHA6IEVtYmVkZGVkTGlua09yUGFyYWdyYXBoLFxuICBocjogRGl2aWRlcixcbiAgb2w6ICh7IG5vZGUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPExpc3Qgey4uLnByb3BzfSBvcmRlcmVkPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTGlzdD5cbiAgKSxcbiAgdWw6ICh7IG5vZGUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiA8TGlzdCB7Li4ucHJvcHN9PntjaGlsZHJlbn08L0xpc3Q+LFxuICBsaTogTGlzdEl0ZW0sXG4gIGNvZGU6ICh7IG5vZGUsIGlubGluZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+XG4gICAgaW5saW5lID8gPGNvZGUgey4uLnByb3BzfT57Y2hpbGRyZW59PC9jb2RlPiA6IDxDb2RlQmxvY2sgey4uLnByb3BzfT57Y2hpbGRyZW59PC9Db2RlQmxvY2s+LFxuXG4gIC8vIENyZWF0ZWQgYSBjdXN0b20gcHJlIGVsZW1lbnQgd2hpY2ggY2hlY2tzIGlmIGNvZGUgZWxlbWVudCBpcyBlbWJlZGRlZCBvciBub3QuXG4gIHByZTogKHsgbm9kZSwgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGlmIChub2RlLmNoaWxkcmVuPy5sZW5ndGggPT09IDEgJiYgbm9kZS5jaGlsZHJlblswXS50YWdOYW1lID09PSAnY29kZScpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gPHByZT57Y2hpbGRyZW59PC9wcmU+O1xuICB9LFxuICBibG9ja3F1b3RlOiBCbG9ja3F1b3RlLFxufTtcbiIsImltcG9ydCBBcnRpY2xlIGZyb20gJ0AvY29tcG9uZW50cy9tYXJrZG93bi9jb21wb25lbnRzL2FydGljbGUnO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xuaW1wb3J0IFByb3BUeXBlcywgeyBJbmZlclByb3BzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY29tcG9uZW50cyBmcm9tICcuL21hcmtkb3duLWNvbXBvbmVudHMnO1xuaW1wb3J0IEVkaXRPbkdpdGh1YkxpbmsgZnJvbSAnLi4vcGFnZXMvZG9jcy9lZGl0LW9uLWdpdGh1Yi1saW5rJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBkb2N1bWVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBtZXRhOiBQcm9wVHlwZXMuc2hhcGUoeyB0aXRsZTogUHJvcFR5cGVzLnN0cmluZywgZGF0ZTogUHJvcFR5cGVzLnN0cmluZyB9KS5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgTWFya2Rvd25SZW5kZXJlciA9ICh7IGRvY3VtZW50LCBtZXRhIH06IEluZmVyUHJvcHM8dHlwZW9mIHByb3BUeXBlcz4pID0+IHtcbiAgY29uc3QgeyB0aXRsZSA9ICcnLCBkYXRlID0gJycgfSA9IG1ldGE7XG4gIGNvbnN0IG1ldGFJbmZvcm1hdGlvbiA9IGAke2RhdGV9IC0gJHt0aXRsZX1gLnJlcGxhY2UoLyheXFxzLVxccyl8KFxccy1cXHMkKS8sICcnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3ViPnttZXRhSW5mb3JtYXRpb259PC9zdWI+XG4gICAgICA8QXJ0aWNsZT5cbiAgICAgICAgey8qIEB0cy1pZ25vcmUgLy8gdG9kbyAtIGZpeCB0eXBlIHByb3Blcmx5ICovfVxuICAgICAgICA8UmVhY3RNYXJrZG93biBjb21wb25lbnRzPXtjb21wb25lbnRzfT57ZG9jdW1lbnR9PC9SZWFjdE1hcmtkb3duPlxuICAgICAgPC9BcnRpY2xlPlxuICAgICAgPEVkaXRPbkdpdGh1YkxpbmsgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1hcmtkb3duUmVuZGVyZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBNYXJrZG93blJlbmRlcmVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuaW1wb3J0IEFuY2hvckl0ZW0gZnJvbSAnQC9jb21wb25lbnRzL21hcmtkb3duL2NvbXBvbmVudHMvYW5jaG9yLWl0ZW0nO1xuXG5jb25zdCBub3RoaW5nID0gKCkgPT4gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBoMTogKHsgbm9kZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgICA8QW5jaG9ySXRlbSBsZXZlbD17MX0gey4uLnByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FuY2hvckl0ZW0+XG4gICksXG4gIGgyOiAoeyBub2RlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxBbmNob3JJdGVtIGxldmVsPXsyfSB7Li4ucHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQW5jaG9ySXRlbT5cbiAgKSxcbiAgaDM6ICh7IG5vZGUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPEFuY2hvckl0ZW0gbGV2ZWw9ezN9IHsuLi5wcm9wc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BbmNob3JJdGVtPlxuICApLFxuICBoNDogKHsgbm9kZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgICA8QW5jaG9ySXRlbSBsZXZlbD17NH0gey4uLnByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FuY2hvckl0ZW0+XG4gICksXG4gIGg1OiAoeyBub2RlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxBbmNob3JJdGVtIGxldmVsPXs1fSB7Li4ucHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQW5jaG9ySXRlbT5cbiAgKSxcbiAgaDY6ICh7IG5vZGUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPEFuY2hvckl0ZW0gbGV2ZWw9ezZ9IHsuLi5wcm9wc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BbmNob3JJdGVtPlxuICApLFxuICAvKiByZXN0IGlzIG5vdCByZW5kZXJlZCAqL1xuICBicjogbm90aGluZyxcbiAgZGVsOiBub3RoaW5nLFxuICBlbTogbm90aGluZyxcbiAgcDogbm90aGluZyxcbiAgdWw6IG5vdGhpbmcsXG4gIG9sOiBub3RoaW5nLFxuICBsaTogbm90aGluZyxcbiAgY29kZTogbm90aGluZyxcbiAgaW5saW5lQ29kZTogbm90aGluZyxcbiAgYmxvY2txdW90ZTogbm90aGluZyxcbiAgYTogbm90aGluZyxcbiAgaW1nOiBub3RoaW5nLFxufTtcbiIsImltcG9ydCBCYXNlTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9sYXlvdXQvYmFzZS1sYXlvdXQnO1xyXG5pbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZUxpa2UgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4uLy4uL2xheW91dC9tYWluL2JyZWFkY3J1bWInO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlTGlrZTtcclxuICBzaG93U2VhcmNoPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgRG9jdW1lbnRhdGlvbkxheW91dCA9ICh7IGNoaWxkcmVuLCBzaG93U2VhcmNoIH06IFByb3BzKSA9PiAoXHJcbiAgPEJhc2VMYXlvdXQgc2hvd1NlYXJjaD17c2hvd1NlYXJjaH0+XHJcbiAgICA8QnJlYWRjcnVtYiAvPlxyXG4gICAgPExheW91dFxyXG4gICAgICBoYXNTaWRlclxyXG4gICAgICBjbGFzc05hbWU9XCJzaXRlLWxheW91dC1iYWNrZ3JvdW5kXCJcclxuICAgICAgc3R5bGU9e3sgcGFkZGluZzogJzEycHggMCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGF5b3V0PlxyXG4gIDwvQmFzZUxheW91dD5cclxuKTtcclxuXHJcbkRvY3VtZW50YXRpb25MYXlvdXQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHNob3dTZWFyY2g6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudGF0aW9uTGF5b3V0O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkb2N1bWVudGF0aW9uQ29udGVudFwiOiBcIlJ4c0NuNW9CbkJ5NHVOZ1VmSHl2a1wiXG59OyIsImltcG9ydCB7IExheW91dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTWFya2Rvd25SZW5kZXJlciBmcm9tICdAL2NvbXBvbmVudHMvbWFya2Rvd24vbWFya2Rvd24tcmVuZGVyZXInO1xyXG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJ0AvY29tcG9uZW50cy9jb250ZXh0L3BhZ2UtY29udGV4dCc7XHJcbmltcG9ydCB7IFJlYWN0Tm9kZUxpa2UgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IERvY3VtZW50YXRpb25MYXlvdXQgZnJvbSAnLi9kb2N1bWVudGF0aW9uLWxheW91dCc7XHJcbmltcG9ydCBNZW51U3RydWN0dXJlU2lkZWJhciBmcm9tICcuL3NpZGViYXJzL21lbnUtc3RydWN0dXJlLXNpZGViYXInO1xyXG5pbXBvcnQgQW5jaG9yc1NpZGViYXIgZnJvbSAnLi9zaWRlYmFycy9hbmNob3JzLXNpZGViYXInO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2RvY3VtZW50YXRpb24tcGFnZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCB7IENvbnRlbnQgfSA9IExheW91dDtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY29udGVudD86IHN0cmluZztcclxuICBkYXRhPzogeyB0aXRsZTogc3RyaW5nOyBkYXRlOiBzdHJpbmcgfTtcclxuICBjaGlsZHJlbj86IFJlYWN0Tm9kZUxpa2U7XHJcbiAgbWV0YT86IGFueTtcclxufVxyXG5cclxuY29uc3QgRG9jdW1lbnRhdGlvblBhZ2UgPSAoeyBjb250ZW50LCBkYXRhLCBtZXRhLCBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e21ldGF9PlxyXG4gICAgICA8RG9jdW1lbnRhdGlvbkxheW91dD5cclxuICAgICAgICA8TWVudVN0cnVjdHVyZVNpZGViYXIgLz5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPENvbnRlbnQgY2xhc3NOYW1lPXtzdHlsZXMuZG9jdW1lbnRhdGlvbkNvbnRlbnR9PlxyXG4gICAgICAgICAgICB7Y29udGVudCAmJiA8TWFya2Rvd25SZW5kZXJlciBtZXRhPXtkYXRhfSBkb2N1bWVudD17Y29udGVudH0gLz59XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgICB7Y29udGVudCAmJiA8QW5jaG9yc1NpZGViYXIgZG9jdW1lbnQ9e2NvbnRlbnR9IC8+fVxyXG4gICAgICA8L0RvY3VtZW50YXRpb25MYXlvdXQ+XHJcbiAgICA8L1BhZ2VDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5Eb2N1bWVudGF0aW9uUGFnZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgY29udGVudDogdW5kZWZpbmVkLFxyXG4gIGRhdGE6IHsgdGl0bGU6ICcnLCBkYXRlOiAnJyB9LFxyXG4gIGNoaWxkcmVuOiBudWxsLFxyXG4gIG1ldGE6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudGF0aW9uUGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZWRpdE9uR2l0SHViTGlua1wiOiBcIl8yd2ZGd0NqVTZJTmNGVTN6TDBKYWx1XCJcbn07IiwiaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICdAL2NvbXBvbmVudHMvY29udGV4dC9wYWdlLWNvbnRleHQnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQWlPdXRsaW5lR2l0aHViIH0gZnJvbSAncmVhY3QtaWNvbnMvYWxsJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9lZGl0LW9uLWdpdGh1Yi1saW5rLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IEVkaXRPbkdpdGh1YkxpbmsgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBhYnNvbHV0ZVBhdGggfSA9IHVzZUNvbnRleHQoUGFnZUNvbnRleHQpO1xyXG5cclxuICBjb25zdCByZXBvUGF0aCA9ICdodHRwczovL2dpdGh1Yi5jb20vZ2FtZS1jaS9kb2N1bWVudGF0aW9uJztcclxuICBjb25zdCBlZGl0UGF0aCA9ICdlZGl0L21haW4nO1xyXG4gIGNvbnN0IGZpbGVQYXRoID0gYGRvY3MvJHthYnNvbHV0ZVBhdGh9YDtcclxuXHJcbiAgY29uc3QgaHJlZiA9IGFic29sdXRlUGF0aCA/IGAke3JlcG9QYXRofS8ke2VkaXRQYXRofS8ke2ZpbGVQYXRofWAgOiBgJHtyZXBvUGF0aH1gO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5lZGl0T25HaXRIdWJMaW5rfVxyXG4gICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgIGljb249ezxBaU91dGxpbmVHaXRodWIgLz59XHJcbiAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICA+XHJcbiAgICAgIEVkaXQgb24gR2l0SHViXHJcbiAgICA8L0J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdE9uR2l0aHViTGluaztcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG1lbnVTdHJ1Y3R1cmUgZnJvbSAnQC9jb3JlL21lbnUtc3RydWN0dXJlLmpzb24nO1xyXG5cclxuY29uc3QgZGVmYXVsdENvbnRleHQgPSB7IG1lbnVTdHJ1Y3R1cmUgfTtcclxuXHJcbmNvbnN0IE1lbnVDb250ZXh0ID0gY3JlYXRlQ29udGV4dChkZWZhdWx0Q29udGV4dCk7XHJcbk1lbnVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ01lbnVDb250ZXh0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVDb250ZXh0O1xyXG4iLCJpbXBvcnQgeyBNZW51Tm9kZSB9IGZyb20gJ0AvdG9vbHMvbWVudS9tZW51LW5vZGUnO1xyXG5pbXBvcnQgeyBNZW51U2VnbWVudCB9IGZyb20gJ0AvdG9vbHMvbWVudS9tZW51LXNlZ21lbnQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgVmVyc2lvbmVkVGl0bGUgZnJvbSAnQC9jb21wb25lbnRzL3BhZ2VzL2RvY3MvbWVudS92ZXJzaW9uZWQtdGl0bGUnO1xyXG5pbXBvcnQgTWVudUNvbnRleHQgZnJvbSAnQC9jb21wb25lbnRzL3BhZ2VzL2RvY3MvbWVudS9tZW51LWNvbnRleHQnO1xyXG5pbXBvcnQgeyBSZWFjdE5vZGVMaWtlIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzZWxlY3RlZFZlcnNpb25zU2VsZWN0b3IgfSBmcm9tICdAL2xvZ2ljL3ZlcnNpb25zL3NlbGVjdGVkLXZlcnNpb24tc2xpY2UnO1xyXG5cclxuY29uc3QgeyBTdWJNZW51LCBJdGVtIH0gPSBNZW51O1xyXG5cclxuY29uc3QgcG9wdWxhdGVNZW51UmVjdXJzaXZlbHkgPSAoY29sbGVjdGlvbjogTWVudU5vZGUsIHNlbGVjdGlvbnMpID0+IHtcclxuICAvLyBUb2RvIHNvcnRpbmcgYnkgaXRlbS5tZXRhLm9yZGVyXHJcbiAgcmV0dXJuIG1hcChPYmplY3QuZW50cmllcyhjb2xsZWN0aW9uKSwgKFtzZWdtZW50LCBub2RlXSkgPT4ge1xyXG4gICAgaWYgKE1lbnVTZWdtZW50LmlzTWV0YShzZWdtZW50KSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoTWVudU5vZGUuaXNQYWdlKG5vZGUpKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEl0ZW0ga2V5PXtgL2RvY3MvJHtub2RlLm1ldGEucGF0aH1gfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZG9jcy9bLi4uZG9jdW1lbnRhdGlvbi1wYWdlXVwiIGFzPXtgL2RvY3MvJHtub2RlLm1ldGEucGF0aH1gfT5cclxuICAgICAgICAgICAgPGE+e25vZGUubmFtZX08L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9JdGVtPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChNZW51U2VnbWVudC5pc1ZlcnNpb25Db250YWluZXIoc2VnbWVudCkpIHtcclxuICAgICAgY29uc3QgeyBtZXRhLCAuLi52ZXJzaW9ucyB9ID0gbm9kZTtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRWZXJzaW9uID0gc2VsZWN0aW9uc1ttZXRhLnBhdGhdO1xyXG4gICAgICByZXR1cm4gbWFwKE9iamVjdC5lbnRyaWVzKHZlcnNpb25zKSwgKFt2ZXJzaW9uU2VnbWVudCwgdmVyc2lvbk5vZGVdKSA9PiB7XHJcbiAgICAgICAgLy8gVG9kbyAtIHRha2UgaGFyZGNvZGVkIHNlbGVjdGVkIHZlcnNpb24gZnJvbSBnbG9iYWxseSBzZWxlY3RlZCB2ZXJzaW9uIGZvciBtZXRhLnNlY3Rpb25cclxuICAgICAgICByZXR1cm4gdmVyc2lvblNlZ21lbnQgPT09IHNlbGVjdGVkVmVyc2lvblxyXG4gICAgICAgICAgPyBwb3B1bGF0ZU1lbnVSZWN1cnNpdmVseSh2ZXJzaW9uTm9kZSwgc2VsZWN0aW9ucylcclxuICAgICAgICAgIDogW107XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnRhaW5lciB3aXRoIG1lbnUgaXRlbXNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTdWJNZW51IGtleT17bm9kZS5tZXRhLnBhdGh9IHRpdGxlPXtNZW51U2VnbWVudC50b1RpdGxlKHNlZ21lbnQpfT5cclxuICAgICAgICB7cG9wdWxhdGVNZW51UmVjdXJzaXZlbHkobm9kZSwgc2VsZWN0aW9ucyl9XHJcbiAgICAgIDwvU3ViTWVudT5cclxuICAgICk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHNlY3Rpb246IHN0cmluZztcclxuICB0aXRsZTogUmVhY3ROb2RlTGlrZTtcclxuICBpY29uOiBSZWFjdE5vZGVMaWtlO1xyXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlTGlrZTtcclxufVxyXG5jb25zdCBWZXJzaW9uZWRTdWJNZW51ID0gKHsgc2VjdGlvbiwgdGl0bGUsIGljb24sIGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdGVkVmVyc2lvbnMgPSB1c2VTZWxlY3RvcihzZWxlY3RlZFZlcnNpb25zU2VsZWN0b3IpO1xyXG4gIGNvbnN0IHsgbWVudVN0cnVjdHVyZSB9ID0gdXNlQ29udGV4dChNZW51Q29udGV4dCk7XHJcbiAgY29uc3QgeyBkb2NzIH0gPSBtZW51U3RydWN0dXJlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN1Yk1lbnUgey4uLnByb3BzfSBpY29uPXtpY29ufSB0aXRsZT17PFZlcnNpb25lZFRpdGxlIHNlY3Rpb249e3NlY3Rpb259IHRpdGxlPXt0aXRsZX0gLz59PlxyXG4gICAgICB7cG9wdWxhdGVNZW51UmVjdXJzaXZlbHkoZG9jc1tzZWN0aW9uXSwgc2VsZWN0ZWRWZXJzaW9ucyl9XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU3ViTWVudT5cclxuICApO1xyXG59O1xyXG5cclxuVmVyc2lvbmVkU3ViTWVudS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWZXJzaW9uZWRTdWJNZW51O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ2ZXJzaW9uU2VsZWN0XCI6IFwiXzF3NzFXOHB0M3dER2gwWlJ1N2c2ek5cIlxufTsiLCJpbXBvcnQgeyBNZW51Tm9kZSB9IGZyb20gJ0AvdG9vbHMvbWVudS9tZW51LW5vZGUnO1xuaW1wb3J0IHsgTWVudVNlZ21lbnQgfSBmcm9tICdAL3Rvb2xzL21lbnUvbWVudS1zZWdtZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3ROb2RlTGlrZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBNZW51Q29udGV4dCBmcm9tICdAL2NvbXBvbmVudHMvcGFnZXMvZG9jcy9tZW51L21lbnUtY29udGV4dCc7XG5pbXBvcnQgeyBzZWxlY3RlZFZlcnNpb25zU2VsZWN0b3IsIHVwZGF0ZVNlbGVjdGlvbiB9IGZyb20gJ0AvbG9naWMvdmVyc2lvbnMvc2VsZWN0ZWQtdmVyc2lvbi1zbGljZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi92ZXJzaW9uZWQtdGl0bGUubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBtYXBWZXJzaW9ucyA9IChzZWN0aW9uLCBjb2xsZWN0aW9uOiBNZW51Tm9kZSwgc2VsZWN0ZWRPcHRpb24pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGV2ZW50KSA9PiBkaXNwYXRjaCh1cGRhdGVTZWxlY3Rpb24oeyBzZWN0aW9uLCBzZWxlY3Rpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KSk7XG4gIGNvbnN0IG5vUHJvcGFnYXRpb24gPSAoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgZmxvYXQ6ICdyaWdodCcsIHBhZGRpbmdSaWdodDogNCB9fT5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9ufVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy52ZXJzaW9uU2VsZWN0fVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIG9uQ2xpY2s9e25vUHJvcGFnYXRpb259XG4gICAgICA+XG4gICAgICAgIHttYXAoT2JqZWN0LmVudHJpZXMoY29sbGVjdGlvbiksIChbc2VnbWVudCwgbm9kZV0pID0+IHtcbiAgICAgICAgICBpZiAoIU1lbnVTZWdtZW50LmlzVmVyc2lvbkNvbnRhaW5lcihzZWdtZW50KSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICBjb25zdCB7IG1ldGEsIC4uLnZlcnNpb25zIH0gPSBub2RlO1xuICAgICAgICAgIHJldHVybiBtYXAoT2JqZWN0LmVudHJpZXModmVyc2lvbnMpLCAoW3ZlcnNpb25dKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e3ZlcnNpb259IHZhbHVlPXt2ZXJzaW9ufSBsYWJlbD17dmVyc2lvbn0gLz47XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZWN0aW9uOiBzdHJpbmc7XG4gIHRpdGxlOiBSZWFjdE5vZGVMaWtlO1xufVxuXG5jb25zdCBWZXJzaW9uZWRUaXRsZSA9ICh7IHNlY3Rpb24sIHRpdGxlIH06IFByb3BzKTogYW55ID0+IHtcbiAgY29uc3QgeyBtZW51U3RydWN0dXJlIH0gPSB1c2VDb250ZXh0KE1lbnVDb250ZXh0KTtcbiAgY29uc3Qgc2VsZWN0ZWQgPSB1c2VTZWxlY3RvcihzZWxlY3RlZFZlcnNpb25zU2VsZWN0b3IpO1xuICBjb25zdCB7IGRvY3MgfSA9IG1lbnVTdHJ1Y3R1cmU7XG5cbiAgaWYgKCFNZW51Tm9kZS5oYXNWZXJzaW9uQ29udGFpbmVyKGRvY3Nbc2VjdGlvbl0pKSB7XG4gICAgcmV0dXJuIHRpdGxlO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3Bhbj5cbiAgICAgIDxzcGFuPnt0aXRsZX08L3NwYW4+XG4gICAgICB7bWFwVmVyc2lvbnMoc2VjdGlvbiwgZG9jc1tzZWN0aW9uXSwgc2VsZWN0ZWRbc2VjdGlvbl0pfVxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZlcnNpb25lZFRpdGxlO1xuIiwiaW1wb3J0IEFuY2hvclZpZXcgZnJvbSAnQC9jb21wb25lbnRzL21hcmtkb3duL2NvbXBvbmVudHMvYW5jaG9yLXZpZXcnO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xyXG5pbXBvcnQgbWFya2Rvd25Ub0FuY2hvcnNNYXBwaW5nIGZyb20gJy4uLy4uLy4uL21hcmtkb3duL21hcmtkb3duLXRvLWFuY2hvcnMtbWFwcGluZyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2lkZWJhcnMubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgeyBTaWRlciB9ID0gTGF5b3V0O1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBkb2N1bWVudDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBBbmNob3JzU2lkZWJhciA9ICh7IGRvY3VtZW50IH06IFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTaWRlciBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyfSB3aWR0aD17MjAwfSBicmVha3BvaW50PVwieGxcIiBjb2xsYXBzZWRXaWR0aD1cIjBcIiByZXZlcnNlQXJyb3c+XHJcbiAgICAgIDxBbmNob3JWaWV3PlxyXG4gICAgICAgIDxSZWFjdE1hcmtkb3duIGNvbXBvbmVudHM9e21hcmtkb3duVG9BbmNob3JzTWFwcGluZ30+e2RvY3VtZW50fTwvUmVhY3RNYXJrZG93bj5cclxuICAgICAgPC9BbmNob3JWaWV3PlxyXG4gICAgPC9TaWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5jaG9yc1NpZGViYXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnUsIExheW91dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7XHJcbiAgU2lHaXRodWJhY3Rpb25zLFxyXG4gIFNpR2l0bGFiLFxyXG4gIEFpT3V0bGluZUluZm9DaXJjbGUsXHJcbiAgU2lEb2NrZXIsXHJcbiAgQWlPdXRsaW5lUXVlc3Rpb25DaXJjbGUsXHJcbn0gZnJvbSAncmVhY3QtaWNvbnMvYWxsJztcclxuaW1wb3J0IFZlcnNpb25lZFN1Yk1lbnUgZnJvbSAnLi4vbWVudS92ZXJzaW9uZWQtc3ViLW1lbnUnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NpZGViYXJzLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IHsgU2lkZXIgfSA9IExheW91dDtcclxuY29uc3QgeyBJdGVtIH0gPSBNZW51O1xyXG5cclxuY29uc3QgTWVudVN0cnVjdHVyZVNpZGViYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBhc1BhdGg6IGN1cnJlbnRLZXkgfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBtYWluID0gJ21haW4nO1xyXG4gIGNvbnN0IGN1cnJlbnQgPSBjdXJyZW50S2V5LnNwbGl0KCcvJylbMl0gfHwgbWFpbjtcclxuICBjb25zdCBvcGVuU2VjdGlvbnMgPSBbY3VycmVudF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2lkZXIgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcn0gd2lkdGg9ezIwMH0gYnJlYWtwb2ludD1cImxnXCIgY29sbGFwc2VkV2lkdGg9XCIwXCI+XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgbW9kZT1cImlubGluZVwiXHJcbiAgICAgICAgZGVmYXVsdFNlbGVjdGVkS2V5cz17W2N1cnJlbnRLZXldfVxyXG4gICAgICAgIGRlZmF1bHRPcGVuS2V5cz17b3BlblNlY3Rpb25zfVxyXG4gICAgICAgIHN1Yk1lbnVPcGVuRGVsYXk9ezF9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVudVN0cnVjdHVyZX1cclxuICAgICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgbWFyZ2luQm90dG9tOiAnLTcwcHgnIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VmVyc2lvbmVkU3ViTWVudVxyXG4gICAgICAgICAga2V5PVwiaW50cm9kdWN0aW9uXCJcclxuICAgICAgICAgIHNlY3Rpb249XCJpbnRyb2R1Y3Rpb25cIlxyXG4gICAgICAgICAgdGl0bGU9XCJJbnRyb2R1Y3Rpb25cIlxyXG4gICAgICAgICAgaWNvbj17PEFpT3V0bGluZUluZm9DaXJjbGUgLz59XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VmVyc2lvbmVkU3ViTWVudSBrZXk9XCJkb2NrZXJcIiBzZWN0aW9uPVwiZG9ja2VyXCIgdGl0bGU9XCJEb2NrZXJcIiBpY29uPXs8U2lEb2NrZXIgLz59PlxyXG4gICAgICAgICAgPEl0ZW0ga2V5PVwiL2RvY3MvZG9ja2VyL3ZlcnNpb25zXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZG9jcy9kb2NrZXIvdmVyc2lvbnNcIj5cclxuICAgICAgICAgICAgICA8YT5WZXJzaW9uIHN0YXR1c2VzPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgPC9WZXJzaW9uZWRTdWJNZW51PlxyXG4gICAgICAgIDxWZXJzaW9uZWRTdWJNZW51IGtleT1cImdpdGh1YlwiIHNlY3Rpb249XCJnaXRodWJcIiB0aXRsZT1cIkdpdEh1YlwiIGljb249ezxTaUdpdGh1YmFjdGlvbnMgLz59IC8+XHJcbiAgICAgICAgPFZlcnNpb25lZFN1Yk1lbnUga2V5PVwiZ2l0bGFiXCIgc2VjdGlvbj1cImdpdGxhYlwiIHRpdGxlPVwiR2l0TGFiXCIgaWNvbj17PFNpR2l0bGFiIC8+fSAvPlxyXG4gICAgICAgIDxWZXJzaW9uZWRTdWJNZW51XHJcbiAgICAgICAgICBrZXk9XCJ0cm91Ymxlc2hvb3RpbmdcIlxyXG4gICAgICAgICAgc2VjdGlvbj1cInRyb3VibGVzaG9vdGluZ1wiXHJcbiAgICAgICAgICB0aXRsZT1cIlRyb3VibGVzaG9vdGluZ1wiXHJcbiAgICAgICAgICBpY29uPXs8QWlPdXRsaW5lUXVlc3Rpb25DaXJjbGUgLz59XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VmVyc2lvbmVkU3ViTWVudVxyXG4gICAgICAgICAga2V5PVwiY2xvdWQtcnVubmVyXCJcclxuICAgICAgICAgIHNlY3Rpb249XCJjbG91ZC1ydW5uZXJcIlxyXG4gICAgICAgICAgdGl0bGU9XCJDbG91ZCBSdW5uZXJcIlxyXG4gICAgICAgICAgaWNvbj17PEFpT3V0bGluZVF1ZXN0aW9uQ2lyY2xlIC8+fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvU2lkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVTdHJ1Y3R1cmVTaWRlYmFyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzaWRlYmFyXCI6IFwiXzJYczUyVDA1ZnpEUVJjVVJKYWhhWmtcIixcblx0XCJtZW51U3RydWN0dXJlXCI6IFwiZE1jU1ZydkZTb0ZIT0VNZlpjY2FZXCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29uZmlndXJlIH0gZnJvbSAncmVhY3QtaW5zdGFudHNlYXJjaC1kb20nO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJ0AvY29yZS9jb25maWcnO1xyXG5cclxuY29uc3QgQ29uZmlndXJhdGlvbiA9ICgpID0+IChcclxuICA8Q29uZmlndXJlXHJcbiAgICBoaXRzUGVyUGFnZT17Y29uZmlnLnNlYXJjaC5oaXRzUGVyUGFnZX1cclxuICAgIGF0dHJpYnV0ZXNUb1NuaXBwZXQ9e1snY29udGVudDoxNCddfVxyXG4gICAgc25pcHBldEVsbGlwc2lzVGV4dD1cIiBbLi4uXVwiXHJcbiAgLz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpZ3VyYXRpb247XHJcbiIsImltcG9ydCB7IFRhZyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tICdyZWFjdC1pbnN0YW50c2VhcmNoLWRvbSc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnQC9jb3JlL2NvbmZpZyc7XHJcblxyXG5jb25zdCBSZXN1bHQgPSAoeyBoaXQgfSkgPT4ge1xyXG4gIGNvbnN0IHsgZG9jc1BhdGggfSA9IGNvbmZpZztcclxuICBjb25zdCB7IHBhdGgsIHZlcnNpb24sIGFuY2hvcklkIH0gPSBoaXQ7XHJcbiAgY29uc3QgcGVybWFsaW5rID0gYCR7ZG9jc1BhdGh9LyR7cGF0aH0jJHthbmNob3JJZH1gO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgc3R5bGU9e3sgcGFkZGluZzogOCB9fT5cclxuICAgICAgPGEgaHJlZj17cGVybWFsaW5rfSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGZsZXg6IDEgfX0+XHJcbiAgICAgICAgICA8SGlnaGxpZ2h0IGF0dHJpYnV0ZT1cInRpdGxlXCIgaGl0PXtoaXR9IHRhZ05hbWU9XCJlbVwiIC8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIHt2ZXJzaW9uICYmIDxUYWcgc3R5bGU9e3sgbGluZUhlaWdodDogJzEyMCUnLCBmb250U2l6ZTogJzgwJScgfX0+e3ZlcnNpb259PC9UYWc+fVxyXG4gICAgICA8L2E+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblJlc3VsdC5wcm9wVHlwZXMgPSB7XHJcbiAgaGl0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGFuY2hvcklkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmVyc2lvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHN1bW1hcnk6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGl0cyB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gtZG9tJztcclxuaW1wb3J0IHR5cGUgeyBTdGF0ZVJlc3VsdHNQcm92aWRlZCB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gtZG9tJztcclxuaW1wb3J0IHsgY29ubmVjdFN0YXRlUmVzdWx0cyB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gvY29ubmVjdG9ycyc7XHJcbmltcG9ydCBSZXN1bHQgZnJvbSAnLi9yZXN1bHQnO1xyXG5cclxuY29uc3QgU2VhcmNoUmVzdWx0cyA9ICh7IHNlYXJjaFN0YXRlLCBzZWFyY2hSZXN1bHRzIH06IFN0YXRlUmVzdWx0c1Byb3ZpZGVkKSA9PlxyXG4gIHNlYXJjaFJlc3VsdHMgJiYgc2VhcmNoUmVzdWx0cy5uYkhpdHMgIT09IDAgPyAoXHJcbiAgICA8SGl0cyBoaXRDb21wb25lbnQ9e1Jlc3VsdH0gLz5cclxuICApIDogKFxyXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICBObyByZXN1bHRzIGZvdW5kIGZvciA8c3Ryb25nPntzZWFyY2hTdGF0ZS5xdWVyeX08L3N0cm9uZz4uXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFN0YXRlUmVzdWx0cyhTZWFyY2hSZXN1bHRzKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdFN0YXRlUmVzdWx0cyB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gtZG9tJztcclxuaW1wb3J0IHR5cGUgU3RhdGVSZXN1bHRzUHJvdmlkZWQgZnJvbSAncmVhY3QtaW5zdGFudHNlYXJjaC1kb20nO1xyXG5cclxuY29uc3QgU3RhdHMgPSAoeyBzZWFyY2hSZXN1bHRzIH06IFN0YXRlUmVzdWx0c1Byb3ZpZGVkKSA9PiB7XHJcbiAgaWYgKHNlYXJjaFJlc3VsdHMgPT09IG51bGwgfHwgc2VhcmNoUmVzdWx0cy5uYkhpdHMgPT09IDApIHJldHVybiA8ZGl2IC8+O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFpcy1TdGF0c1wiPlxyXG4gICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImVtb2ppXCI+XHJcbiAgICAgICAg4pqh77iPXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHN0cm9uZz57YCAke3NlYXJjaFJlc3VsdHMubmJIaXRzfSBgfTwvc3Ryb25nPlxyXG4gICAgICByZXN1bHRzIGZvdW5kXHJcbiAgICAgIHtzZWFyY2hSZXN1bHRzLnF1ZXJ5ICE9PSAnJyAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIGZvclxyXG4gICAgICAgICAgPHN0cm9uZz57YCBcIiR7c2VhcmNoUmVzdWx0cy5xdWVyeX1cIiBgfTwvc3Ryb25nPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICBpblxyXG4gICAgICA8c3Ryb25nPntgICR7c2VhcmNoUmVzdWx0cy5wcm9jZXNzaW5nVGltZU1TfW1zYH08L3N0cm9uZz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0U3RhdGVSZXN1bHRzKFN0YXRzKTtcclxuIiwiaW1wb3J0IHsgZ2V0SXNvbW9ycGhpY1ZhbHVlIH0gZnJvbSAnQC90b29scy91dGlscy9nZXQtaXNvbW9ycGhpYy12YWx1ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYmFzZVVybDogJ2h0dHBzOi8vZ2FtZS5jaScsXHJcbiAgZG9jc1BhdGg6ICcvZG9jcycsXHJcbiAgZmlyZWJhc2U6IHtcclxuICAgIGFwaUtleTogJ0FJemFTeUN6NjBQbWJyYjR2Mm5xZDhUR3JtMVZvMFlsYjZkYUtXUScsXHJcbiAgICBhdXRoRG9tYWluOiAndW5pdHktY2ktdmVyc2lvbnMuZmlyZWJhc2VhcHAuY29tJyxcclxuICAgIGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly91bml0eS1jaS12ZXJzaW9ucy5maXJlYmFzZWlvLmNvbScsXHJcbiAgICBwcm9qZWN0SWQ6ICd1bml0eS1jaS12ZXJzaW9ucycsXHJcbiAgICBzdG9yYWdlQnVja2V0OiAndW5pdHktY2ktdmVyc2lvbnMuYXBwc3BvdC5jb20nLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6ICc4NDE0NzkxODY2MjMnLFxyXG4gICAgYXBwSWQ6ICcxOjg0MTQ3OTE4NjYyMzp3ZWI6YzIwMzUwMTkxZTk2MmE4YTcxZmUwYScsXHJcbiAgICBtZWFzdXJlbWVudElkOiAnRy0xQkdWUzdIRFc4JyxcclxuICB9LFxyXG4gIGJhY2tlbmRVcmw6ICdodHRwczovL2V1cm9wZS13ZXN0My11bml0eS1jaS12ZXJzaW9ucy5jbG91ZGZ1bmN0aW9ucy5uZXQnLFxyXG4gIHNlYXJjaDoge1xyXG4gICAgYXBwbGljYXRpb25JZDogJ1c0WDYyS005UUUnLFxyXG4gICAgaW5kZXg6IGdldElzb21vcnBoaWNWYWx1ZSgnU0VBUkNIX0lOREVYJyksXHJcbiAgICBwdWJsaWNBcGlLZXk6ICc0YTA2MDExZWQ4YTQ2NzgxMTg2NmMyN2NhNGMxYTM2NycsXHJcbiAgICBoaXRzUGVyUGFnZTogMTIsXHJcbiAgICBzZXR0aW5nczoge1xyXG4gICAgICAvLyBTZWxlY3QgdGhlIGF0dHJpYnV0ZXMgeW91IHdhbnQgdG8gc2VhcmNoIGluXHJcbiAgICAgIHNlYXJjaGFibGVBdHRyaWJ1dGVzOiBbJ3RpdGxlJywgJ3N1bW1hcnknLCAnYm9keScsICd2ZXJzaW9uJywgJ2NhdGVnb3JpZXMnLCAnZmlsZW5hbWUnXSxcclxuICAgICAgLy8gRGVmaW5lIGJ1c2luZXNzIG1ldHJpY3MgZm9yIHJhbmtpbmcgYW5kIHNvcnRpbmdcclxuICAgICAgY3VzdG9tUmFua2luZzogWydhc2MobGV2ZWwpJywgJ2Rlc2ModGl0bGUpJ10sXHJcbiAgICAgIC8vIFNldCB1cCBzb21lIGF0dHJpYnV0ZXMgdG8gZmlsdGVyIHJlc3VsdHMgb25cclxuICAgICAgYXR0cmlidXRlc0ZvckZhY2V0aW5nOiBbJ2ZpbGVuYW1lJ10sXHJcbiAgICAgIC8vIERlZmluZSB0aGUgYXR0cmlidXRlIHdlIHdhbnQgdG8gZGlzdGluY3Qgb25cclxuICAgICAgYXR0cmlidXRlRm9yRGlzdGluY3Q6ICdPYmplY3RJRCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyByZWFkZGlyU3luYyB9IGZyb20gJ2ZzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlYWREaXJlY3RvcnlSZWN1cnNpdmVseShkaXJlY3RvcnksIGZpbGVOYW1lcyA9IFtdLCBjdXJyZW50RGlyZWN0b3J5ID0gJycpIHtcclxuICBjb25zdCBkaXJlY3RvcnlFbnRyaWVzID0gcmVhZGRpclN5bmMoZGlyZWN0b3J5LCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSk7XHJcblxyXG4gIGZvciAoY29uc3QgZW50cnkgb2YgZGlyZWN0b3J5RW50cmllcykge1xyXG4gICAgY29uc3QgeyBuYW1lIH0gPSBlbnRyeTtcclxuICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSgpKSB7XHJcbiAgICAgIHJlYWREaXJlY3RvcnlSZWN1cnNpdmVseShcclxuICAgICAgICBwYXRoLnJlc29sdmUoZGlyZWN0b3J5LCBuYW1lKSxcclxuICAgICAgICBmaWxlTmFtZXMsXHJcbiAgICAgICAgYCR7Y3VycmVudERpcmVjdG9yeX0ke25hbWV9L2AsXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbnRyeS5pc0ZpbGUoKSkge1xyXG4gICAgICBmaWxlTmFtZXMucHVzaChgJHtjdXJyZW50RGlyZWN0b3J5fSR7bmFtZX1gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmaWxlTmFtZXM7XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVhZEZpbGUocGF0aFRvRmlsZSkge1xyXG4gIGNvbnN0IGVudHJ5ID0gcmVhZEZpbGVTeW5jKHBhdGhUb0ZpbGUpO1xyXG5cclxuICByZXR1cm4gZW50cnkudG9TdHJpbmcoKTtcclxufVxyXG4iLCJpbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VOb3RpZmljYXRpb24oKSB7XHJcbiAgY29uc3Qgbm90aWZ5ID0gKHR5cGUsIHsgbWVzc2FnZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xyXG4gICAgbm90aWZpY2F0aW9uW3R5cGVdKHtcclxuICAgICAgbWVzc2FnZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3VjY2VzczogKHByb3BzKSA9PiBub3RpZnkoJ3N1Y2Nlc3MnLCBwcm9wcyksXHJcbiAgICBpbmZvOiAocHJvcHMpID0+IG5vdGlmeSgnaW5mbycsIHByb3BzKSxcclxuICAgIHdhcm5pbmc6IChwcm9wcykgPT4gbm90aWZ5KCd3YXJuaW5nJywgcHJvcHMpLFxyXG4gICAgZXJyb3I6IChwcm9wcykgPT4gbm90aWZ5KCdlcnJvcicsIHByb3BzKSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUb3BMZXZlbFJvdXRlKCkge1xyXG4gIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgcGFydHMgPSBhc1BhdGgucmVwbGFjZSgvXlxcLy8sICcnKS5zcGxpdCgnLycpO1xyXG5cclxuICByZXR1cm4gYC8ke3BhcnRzWzBdfWA7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgdXNlUGF0aFNlZ21lbnRzID0gKG5hbWVPZlJvb3RTZWdtZW50KSA9PiB7XHJcbiAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHNlZ21lbnRzID0gYXNQYXRoLnNsaWNlKDEpLnNwbGl0KCcjJylbMF0uc3BsaXQoJy8nKTtcclxuXHJcbiAgbGV0IHVybCA9ICcnO1xyXG4gIGNvbnN0IHBhdGhTZWdtZW50cyA9IHNlZ21lbnRzLm1hcCgoc2VnbWVudCkgPT4ge1xyXG4gICAgdXJsICs9IGAvJHtzZWdtZW50fWA7XHJcbiAgICBjb25zdCBuYW1lID0gc2VnbWVudC5yZXBsYWNlKC8tL2csICcgJyk7XHJcblxyXG4gICAgcmV0dXJuIHsgdXJsLCBuYW1lIH07XHJcbiAgfSk7XHJcblxyXG4gIGlmIChuYW1lT2ZSb290U2VnbWVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBwYXRoU2VnbWVudHMudW5zaGlmdCh7IHVybDogJy8nLCBuYW1lOiBuYW1lT2ZSb290U2VnbWVudCB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwYXRoU2VnbWVudHM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VQYXRoU2VnbWVudHM7XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9jbG91ZC1ydW5uZXIvdjAvMDEtaW50cm9kdWN0aW9uLm1kXCI6IFtcblx0XHRcIi4vZG9jcy9jbG91ZC1ydW5uZXIvdjAvMDEtaW50cm9kdWN0aW9uLm1kXCIsXG5cdFx0MFxuXHRdLFxuXHRcIi4vY2xvdWQtcnVubmVyL3YwLzAyLWdldHRpbmctc3RhcnRlZC9hd3MubWRcIjogW1xuXHRcdFwiLi9kb2NzL2Nsb3VkLXJ1bm5lci92MC8wMi1nZXR0aW5nLXN0YXJ0ZWQvYXdzLm1kXCIsXG5cdFx0MVxuXHRdLFxuXHRcIi4vY2xvdWQtcnVubmVyL3YwLzAyLWdldHRpbmctc3RhcnRlZC9rdWJlcmVudGVzLm1kXCI6IFtcblx0XHRcIi4vZG9jcy9jbG91ZC1ydW5uZXIvdjAvMDItZ2V0dGluZy1zdGFydGVkL2t1YmVyZW50ZXMubWRcIixcblx0XHQyXG5cdF0sXG5cdFwiLi9jbG91ZC1ydW5uZXIvdjAvMDMtY29uZmlndXJhdGlvbi5tZFwiOiBbXG5cdFx0XCIuL2RvY3MvY2xvdWQtcnVubmVyL3YwLzAzLWNvbmZpZ3VyYXRpb24ubWRcIixcblx0XHQzXG5cdF0sXG5cdFwiLi9jbG91ZC1ydW5uZXIvdjAvMDQtY29tbWFuZC1saW5lLm1kXCI6IFtcblx0XHRcIi4vZG9jcy9jbG91ZC1ydW5uZXIvdjAvMDQtY29tbWFuZC1saW5lLm1kXCIsXG5cdFx0NFxuXHRdLFxuXHRcIi4vY2xvdWQtcnVubmVyL3YwLzA1LWFkdmFuY2VkLXRvcGljcy8wMS1jYWNoaW5nLm1kXCI6IFtcblx0XHRcIi4vZG9jcy9jbG91ZC1ydW5uZXIvdjAvMDUtYWR2YW5jZWQtdG9waWNzLzAxLWNhY2hpbmcubWRcIixcblx0XHQ1XG5cdF0sXG5cdFwiLi9jbG91ZC1ydW5uZXIvdjAvMDUtYWR2YW5jZWQtdG9waWNzLzAyLXBlcmZvcm1hbmNlLm1kXCI6IFtcblx0XHRcIi4vZG9jcy9jbG91ZC1ydW5uZXIvdjAvMDUtYWR2YW5jZWQtdG9waWNzLzAyLXBlcmZvcm1hbmNlLm1kXCIsXG5cdFx0NlxuXHRdLFxuXHRcIi4vY2xvdWQtcnVubmVyL3YwLzA1LWFkdmFuY2VkLXRvcGljcy8wMy1ob29rcy5tZFwiOiBbXG5cdFx0XCIuL2RvY3MvY2xvdWQtcnVubmVyL3YwLzA1LWFkdmFuY2VkLXRvcGljcy8wMy1ob29rcy5tZFwiLFxuXHRcdDdcblx0XSxcblx0XCIuL2Nsb3VkLXJ1bm5lci92MC8wNS1hZHZhbmNlZC10b3BpY3MvMDQtY3VzdG9tLXN0ZXBzLm1kXCI6IFtcblx0XHRcIi4vZG9jcy9jbG91ZC1ydW5uZXIvdjAvMDUtYWR2YW5jZWQtdG9waWNzLzA0LWN1c3RvbS1zdGVwcy5tZFwiLFxuXHRcdDhcblx0XSxcblx0XCIuL2Nsb3VkLXJ1bm5lci92MC8wNS1hZHZhbmNlZC10b3BpY3MvMDUtaW5wdXQtb3ZlcnJpZGUubWRcIjogW1xuXHRcdFwiLi9kb2NzL2Nsb3VkLXJ1bm5lci92MC8wNS1hZHZhbmNlZC10b3BpY3MvMDUtaW5wdXQtb3ZlcnJpZGUubWRcIixcblx0XHQ5XG5cdF0sXG5cdFwiLi9jbG91ZC1ydW5uZXIvdjAvMDUtYWR2YW5jZWQtdG9waWNzLzA2LWdhcmJhZ2UtY29sbGVjdGlvbi5tZFwiOiBbXG5cdFx0XCIuL2RvY3MvY2xvdWQtcnVubmVyL3YwLzA1LWFkdmFuY2VkLXRvcGljcy8wNi1nYXJiYWdlLWNvbGxlY3Rpb24ubWRcIixcblx0XHQxMFxuXHRdLFxuXHRcIi4vY2xvdWQtcnVubmVyL3YwLzA1LWFkdmFuY2VkLXRvcGljcy8wOC1sb2dnaW5nLm1kXCI6IFtcblx0XHRcIi4vZG9jcy9jbG91ZC1ydW5uZXIvdjAvMDUtYWR2YW5jZWQtdG9waWNzLzA4LWxvZ2dpbmcubWRcIixcblx0XHQxMVxuXHRdLFxuXHRcIi4vY2xvdWQtcnVubmVyL3YwLzA1LWFkdmFuY2VkLXRvcGljcy8wOC1zZWNyZXRzLm1kXCI6IFtcblx0XHRcIi4vZG9jcy9jbG91ZC1ydW5uZXIvdjAvMDUtYWR2YW5jZWQtdG9waWNzLzA4LXNlY3JldHMubWRcIixcblx0XHQxMlxuXHRdLFxuXHRcIi4vY2xvdWQtcnVubmVyL3YwLzA1LWFkdmFuY2VkLXRvcGljcy8wOS1naXRodWItZXBoZW1lcmFsLXJ1bm5lcnMubWRcIjogW1xuXHRcdFwiLi9kb2NzL2Nsb3VkLXJ1bm5lci92MC8wNS1hZHZhbmNlZC10b3BpY3MvMDktZ2l0aHViLWVwaGVtZXJhbC1ydW5uZXJzLm1kXCIsXG5cdFx0MTNcblx0XSxcblx0XCIuL2Nsb3VkLXJ1bm5lci92MC8wNi1kZXZlbG9wbWVudC5tZFwiOiBbXG5cdFx0XCIuL2RvY3MvY2xvdWQtcnVubmVyL3YwLzA2LWRldmVsb3BtZW50Lm1kXCIsXG5cdFx0NDFcblx0XSxcblx0XCIuL2RvY2tlci8wMS1kb2NrZXItaW1hZ2VzLm1kXCI6IFtcblx0XHRcIi4vZG9jcy9kb2NrZXIvMDEtZG9ja2VyLWltYWdlcy5tZFwiLFxuXHRcdDE0XG5cdF0sXG5cdFwiLi9kb2NrZXIvMDItd2luZG93cy1kb2NrZXItaW1hZ2VzLm1kXCI6IFtcblx0XHRcIi4vZG9jcy9kb2NrZXIvMDItd2luZG93cy1kb2NrZXItaW1hZ2VzLm1kXCIsXG5cdFx0MTVcblx0XSxcblx0XCIuL2RvY2tlci8wMy1jdXN0b21pemUtZG9ja2VyLWltYWdlcy5tZFwiOiBbXG5cdFx0XCIuL2RvY3MvZG9ja2VyLzAzLWN1c3RvbWl6ZS1kb2NrZXItaW1hZ2VzLm1kXCIsXG5cdFx0MTZcblx0XSxcblx0XCIuL2dpdGh1Yi92MS8wMS1nZXR0aW5nLXN0YXJ0ZWQubWRcIjogW1xuXHRcdFwiLi9kb2NzL2dpdGh1Yi92MS8wMS1nZXR0aW5nLXN0YXJ0ZWQubWRcIixcblx0XHQxN1xuXHRdLFxuXHRcIi4vZ2l0aHViL3YxLzAyLWFjdGl2YXRpb24ubWRcIjogW1xuXHRcdFwiLi9kb2NzL2dpdGh1Yi92MS8wMi1hY3RpdmF0aW9uLm1kXCIsXG5cdFx0MThcblx0XSxcblx0XCIuL2dpdGh1Yi92MS8wMy10ZXN0LXJ1bm5lci5tZFwiOiBbXG5cdFx0XCIuL2RvY3MvZ2l0aHViL3YxLzAzLXRlc3QtcnVubmVyLm1kXCIsXG5cdFx0MTlcblx0XSxcblx0XCIuL2dpdGh1Yi92MS8wNC1idWlsZGVyLm1kXCI6IFtcblx0XHRcIi4vZG9jcy9naXRodWIvdjEvMDQtYnVpbGRlci5tZFwiLFxuXHRcdDIwXG5cdF0sXG5cdFwiLi9naXRodWIvdjEvMDUtcmV0dXJuaW5nLWEtbGljZW5zZS5tZFwiOiBbXG5cdFx0XCIuL2RvY3MvZ2l0aHViL3YxLzA1LXJldHVybmluZy1hLWxpY2Vuc2UubWRcIixcblx0XHQyMVxuXHRdLFxuXHRcIi4vZ2l0aHViL3YxLzA2LWRlcGxveW1lbnQvYW5kcm9pZC5tZFwiOiBbXG5cdFx0XCIuL2RvY3MvZ2l0aHViL3YxLzA2LWRlcGxveW1lbnQvYW5kcm9pZC5tZFwiLFxuXHRcdDIyXG5cdF0sXG5cdFwiLi9naXRodWIvdjEvMDYtZGVwbG95bWVudC9pb3MubWRcIjogW1xuXHRcdFwiLi9kb2NzL2dpdGh1Yi92MS8wNi1kZXBsb3ltZW50L2lvcy5tZFwiLFxuXHRcdDIzXG5cdF0sXG5cdFwiLi9naXRodWIvdjIvMDEtZ2V0dGluZy1zdGFydGVkLm1kXCI6IFtcblx0XHRcIi4vZG9jcy9naXRodWIvdjIvMDEtZ2V0dGluZy1zdGFydGVkLm1kXCIsXG5cdFx0MjRcblx0XSxcblx0XCIuL2dpdGh1Yi92Mi8wMi1hY3RpdmF0aW9uLm1kXCI6IFtcblx0XHRcIi4vZG9jcy9naXRodWIvdjIvMDItYWN0aXZhdGlvbi5tZFwiLFxuXHRcdDI1XG5cdF0sXG5cdFwiLi9naXRodWIvdjIvMDMtdGVzdC1ydW5uZXIubWRcIjogW1xuXHRcdFwiLi9kb2NzL2dpdGh1Yi92Mi8wMy10ZXN0LXJ1bm5lci5tZFwiLFxuXHRcdDI2XG5cdF0sXG5cdFwiLi9naXRodWIvdjIvMDQtYnVpbGRlci5tZFwiOiBbXG5cdFx0XCIuL2RvY3MvZ2l0aHViL3YyLzA0LWJ1aWxkZXIubWRcIixcblx0XHQyN1xuXHRdLFxuXHRcIi4vZ2l0aHViL3YyLzA1LXJldHVybmluZy1hLWxpY2Vuc2UubWRcIjogW1xuXHRcdFwiLi9kb2NzL2dpdGh1Yi92Mi8wNS1yZXR1cm5pbmctYS1saWNlbnNlLm1kXCIsXG5cdFx0Mjhcblx0XSxcblx0XCIuL2dpdGh1Yi92Mi8xNS1kZXBsb3ltZW50L2FuZHJvaWQubWRcIjogW1xuXHRcdFwiLi9kb2NzL2dpdGh1Yi92Mi8xNS1kZXBsb3ltZW50L2FuZHJvaWQubWRcIixcblx0XHQyOVxuXHRdLFxuXHRcIi4vZ2l0aHViL3YyLzE1LWRlcGxveW1lbnQvaW9zLm1kXCI6IFtcblx0XHRcIi4vZG9jcy9naXRodWIvdjIvMTUtZGVwbG95bWVudC9pb3MubWRcIixcblx0XHQzMFxuXHRdLFxuXHRcIi4vZ2l0aHViL3YyLzE1LWRlcGxveW1lbnQvc3RlYW0ubWRcIjogW1xuXHRcdFwiLi9kb2NzL2dpdGh1Yi92Mi8xNS1kZXBsb3ltZW50L3N0ZWFtLm1kXCIsXG5cdFx0MzFcblx0XSxcblx0XCIuL2dpdGxhYi8wMS1nZXR0aW5nLXN0YXJ0ZWQubWRcIjogW1xuXHRcdFwiLi9kb2NzL2dpdGxhYi8wMS1nZXR0aW5nLXN0YXJ0ZWQubWRcIixcblx0XHQzMlxuXHRdLFxuXHRcIi4vZ2l0bGFiLzAyLWFjdGl2YXRpb24ubWRcIjogW1xuXHRcdFwiLi9kb2NzL2dpdGxhYi8wMi1hY3RpdmF0aW9uLm1kXCIsXG5cdFx0MzNcblx0XSxcblx0XCIuL2dpdGxhYi8wMy1leGFtcGxlLXByb2plY3QubWRcIjogW1xuXHRcdFwiLi9kb2NzL2dpdGxhYi8wMy1leGFtcGxlLXByb2plY3QubWRcIixcblx0XHQzNFxuXHRdLFxuXHRcIi4vZ2l0bGFiL2N1c3RvbS1idWlsZC1vcHRpb25zLm1kXCI6IFtcblx0XHRcIi4vZG9jcy9naXRsYWIvY3VzdG9tLWJ1aWxkLW9wdGlvbnMubWRcIixcblx0XHQzNVxuXHRdLFxuXHRcIi4vZ2l0bGFiL2RlcGxveW1lbnQvYW5kcm9pZC5tZFwiOiBbXG5cdFx0XCIuL2RvY3MvZ2l0bGFiL2RlcGxveW1lbnQvYW5kcm9pZC5tZFwiLFxuXHRcdDM2XG5cdF0sXG5cdFwiLi9naXRsYWIvZGVwbG95bWVudC9pb3MubWRcIjogW1xuXHRcdFwiLi9kb2NzL2dpdGxhYi9kZXBsb3ltZW50L2lvcy5tZFwiLFxuXHRcdDM3XG5cdF0sXG5cdFwiLi9naXRsYWIvdGVzdHMubWRcIjogW1xuXHRcdFwiLi9kb2NzL2dpdGxhYi90ZXN0cy5tZFwiLFxuXHRcdDM4XG5cdF0sXG5cdFwiLi9pbnRyb2R1Y3Rpb24vZ2V0dGluZy1zdGFydGVkLm1kXCI6IFtcblx0XHRcIi4vZG9jcy9pbnRyb2R1Y3Rpb24vZ2V0dGluZy1zdGFydGVkLm1kXCIsXG5cdFx0Mzlcblx0XSxcblx0XCIuL3Ryb3VibGVzaG9vdGluZy9jb21tb24taXNzdWVzLm1kXCI6IFtcblx0XHRcIi4vZG9jcy90cm91Ymxlc2hvb3RpbmcvY29tbW9uLWlzc3Vlcy5tZFwiLFxuXHRcdDQwXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9kb2NzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiaW1wb3J0IHsgTWVudVN0cnVjdHVyZSB9IGZyb20gJ0AvdG9vbHMvbWVudS9tZW51LXN0cnVjdHVyZSc7XHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCBtZW51U3RydWN0dXJlIGZyb20gJ0AvY29yZS9tZW51LXN0cnVjdHVyZS5qc29uJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RlZFZlcnNpb25TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAndmVyc2lvbicsXHJcbiAgaW5pdGlhbFN0YXRlOiB7IC4uLk1lbnVTdHJ1Y3R1cmUuZ2V0Q3VycmVudFZlcnNpb25zKG1lbnVTdHJ1Y3R1cmUpIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHVwZGF0ZVNlbGVjdGlvbjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBzZWN0aW9uLCBzZWxlY3Rpb24gfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgc3RhdGVbc2VjdGlvbl0gPSBzZWxlY3Rpb247XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkVmVyc2lvbnNTZWxlY3RvciA9IChzdGF0ZSkgPT4gc3RhdGUudmVyc2lvbnMuc2VsZWN0ZWQ7XHJcblxyXG5leHBvcnQgY29uc3QgeyB1cGRhdGVTZWxlY3Rpb24gfSA9IHNlbGVjdGVkVmVyc2lvblNsaWNlLmFjdGlvbnM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3csIGxvY2FsZSB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IGNsZWFudXAgPSBSZWFjdC51c2VSZWY8KCkgPT4gdm9pZD4oKVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIC8vIGNsZWFudXAgcHJldmlvdXMgZXZlbnQgaGFuZGxlcnNcbiAgICAgIGlmIChjbGVhbnVwLmN1cnJlbnQpIHtcbiAgICAgICAgY2xlYW51cC5jdXJyZW50KClcbiAgICAgICAgY2xlYW51cC5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChwICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIGVsICYmIGVsLnRhZ05hbWUgJiYgaXNMb2NhbFVSTChocmVmKSkge1xuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgbG9jYWxlOlxuICAgICAgICAgICAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IGxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW3AsIGNoaWxkUmVmLCBocmVmLCBhcywgcm91dGVyLCBsb2NhbGVdXG4gIClcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSAmJlxuICAgICAgcGF0aCAhPT0gJy8nICsgbG9jYWxlXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSB8fCBwYXRoID09PSAnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUiA9ICdTU0cgRGF0YSBOT1RfRk9VTkQnXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIHJlbG9hZGluZyBpbiBkZXZlbG9wbWVudCBmcm9tIGZhbGxiYWNrIHJldHVybmluZyAyMDBcbiAgICAgICAgLy8gdG8gb24tZGVtYW5kLWVudHJ5LWhhbmRsZXIgY2F1c2luZyBpdCB0byByZWxvYWQgcGVyaW9kaWNhbGx5XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoLFxuICAgICAgfSA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKVxuXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChhcywgdGhpcy5sb2NhbGVzKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgdXJsID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24sIG9wdGlvbnMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuICAgICAgY29uc3Qgc3NnNDA0ID0gZXJyLm1lc3NhZ2UgPT09IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUlxuXG4gICAgICBpZiAoc3NnNDA0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IG1vZDogYW55XG4gICAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMsIG1vZCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAgICcvNDA0J1xuICAgICAgICAgICkpXG5cbiAgICAgICAgICAvLyBUT0RPOiBzaG91bGQgd2UgdG9sZXJhdGUgdGhlc2UgcHJvcHMgbWlzc2luZyBhbmQgc3RpbGwgcmVuZGVyIHRoZVxuICAgICAgICAgIC8vIHBhZ2UgaW5zdGVhZCBvZiBmYWxsaW5nIGJhY2sgdG8gX2Vycm9yP1xuICAgICAgICAgIGlmIChtb2QgJiYgbW9kLl9fTl9TU0cpIHtcbiAgICAgICAgICAgIHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCcvNDA0JywgJy80MDQnLCB0cnVlLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICAvLyBub24tZmF0YWwgZmFsbGJhY2sgdG8gX2Vycm9yXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICAgIGVycm9yOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJylcbiAgICAgICAgLm5vcm1hbGl6ZUxvY2FsZVBhdGggYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKS5ub3JtYWxpemVMb2NhbGVQYXRoXG5cbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IG9wdGlvbnMubG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIC8vIGNsb25lIHF1ZXJ5IHNvIHdlIGRvbid0IG1vZGlmeSB0aGUgb3JpZ2luYWxcbiAgcXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSlcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dExvY2FsZVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IHsgTWVudVN0cnVjdHVyZSB9IGZyb20gJ0AvdG9vbHMvbWVudS9tZW51LXN0cnVjdHVyZSc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUGF0aHMgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XHJcbmltcG9ydCBEb2N1bWVudGF0aW9uUGFnZSBmcm9tICdAL2NvbXBvbmVudHMvcGFnZXMvZG9jcy9kb2N1bWVudGF0aW9uLXBhZ2UnO1xyXG5pbXBvcnQgcmVhZERpcmVjdG9yeVJlY3Vyc2l2ZWx5IGZyb20gJ0AvY29yZS9mcy9yZWFkLWRpcmVjdG9yeS1yZWN1cnNpdmVseSc7XHJcbmltcG9ydCBnZW5lcmF0ZVNlYXJjaERlZmluaXRpb25zRnJvbUZpbGVzIGZyb20gJ0AvdG9vbHMvc2VhcmNoL2dlbmVyYXRlLWRlZmluaXRpb25zLWZyb20tZmlsZXMnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgZGF0YTogeyB0aXRsZTogc3RyaW5nOyBkYXRlOiBzdHJpbmcgfTtcclxuICBtZXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG59XHJcblxyXG4vLyBSZXByZXNlbnRzIGFsbCB0aGUgbWFya2Rvd24gZG9jdW1lbnRhdGlvbiBwYWdlc1xyXG5jb25zdCBEb2N1bWVudGF0aW9uID0gKHsgY29udGVudCwgZGF0YSwgbWV0YSB9OiBQcm9wcykgPT4gKFxyXG4gIDxEb2N1bWVudGF0aW9uUGFnZSBjb250ZW50PXtjb250ZW50fSBkYXRhPXtkYXRhfSBtZXRhPXttZXRhfSAvPlxyXG4pO1xyXG5cclxuLy8gQnVpbGQgdGltZTogRGV0ZXJtaW5lcyB3aGljaCBwYWdlcyBhcmUgZ2VuZXJhdGVkXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgZmlsZVBhdGhzID0gYXdhaXQgcmVhZERpcmVjdG9yeVJlY3Vyc2l2ZWx5KHBhdGgucmVzb2x2ZSgnZG9jcy8nKSk7XHJcbiAgY29uc3Qgc3RydWN0dXJlID0gYXdhaXQgTWVudVN0cnVjdHVyZS5nZW5lcmF0ZUZyb21GaWxlcyhmaWxlUGF0aHMpO1xyXG4gIGNvbnN0IGZpbGVNZXRhcyA9IGF3YWl0IE1lbnVTdHJ1Y3R1cmUuZ2V0RmlsZU1ldGFzKHN0cnVjdHVyZSk7XHJcblxyXG4gIGlmIChwcm9jZXNzLmVudi5DSSkgZ2VuZXJhdGVTZWFyY2hEZWZpbml0aW9uc0Zyb21GaWxlcyhmaWxlTWV0YXMpO1xyXG5cclxuICBjb25zdCBwYXRocyA9IGZpbGVNZXRhcy5tYXAoKGZpbGUpID0+ICh7XHJcbiAgICBwYXJhbXM6IHsgJ2RvY3VtZW50YXRpb24tcGFnZSc6IGZpbGUubWV0YS5wYXRoLnNwbGl0KCcvJykgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcclxufTtcclxuXHJcbmludGVyZmFjZSBTdGF0aWNQcm9wcyB7XHJcbiAgcGFyYW1zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIH07XHJcbn1cclxuXHJcbi8vIEJ1aWxkIHRpbWU6IEdlbmVyYXRlIEpTT04gZm9yIGVhY2ggZ2VuZXJhdGVkIHBhZ2VcclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9OiBTdGF0aWNQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgJ2RvY3VtZW50YXRpb24tcGFnZSc6IHBhcnRzIH0gPSBwYXJhbXM7XHJcblxyXG4gIGNvbnN0IHN0cnVjdHVyZSA9IGF3YWl0IE1lbnVTdHJ1Y3R1cmUubG9hZCgpO1xyXG4gIGNvbnN0IGZpbGVNZXRhcyA9IGF3YWl0IE1lbnVTdHJ1Y3R1cmUuZ2V0RmlsZU1ldGFzKHN0cnVjdHVyZSk7XHJcblxyXG4gIGNvbnN0IHNlb1BhdGggPSBwYXJ0cy5qb2luKCcvJyk7XHJcbiAgY29uc3QgeyBtZXRhIH0gPSBmaWxlTWV0YXMuZmluZCgoZmlsZSkgPT4gZmlsZS5tZXRhLnBhdGggPT09IHNlb1BhdGgpO1xyXG5cclxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgaW1wb3J0KGAuLi8uLi9kb2NzLyR7bWV0YS5hYnNvbHV0ZVBhdGh9YCk7XHJcbiAgY29uc3QgeyBvcmlnLCAuLi5kYXRhIH0gPSBtYXR0ZXIoY29udGVudC5kZWZhdWx0KTtcclxuXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgLi4uZGF0YSwgbWV0YSB9IH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2N1bWVudGF0aW9uO1xyXG4iLCJpbXBvcnQgeyBnZXQsIGhhcyB9IGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgeyBNZW51U2VnbWVudCB9IGZyb20gJ0AvdG9vbHMvbWVudS9tZW51LXNlZ21lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZW51Tm9kZSB7XHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBNZW51Tm9kZVR5cGUgPSAnZmlsZScgfCAnZm9sZGVyJyB8ICd2ZXJzaW9uJyB8ICdpZGVudGlmaWVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51Tm9kZSB7XHJcbiAgc3RhdGljIGlzRmlsZShub2RlOiBNZW51Tm9kZSkge1xyXG4gICAgcmV0dXJuIGdldChub2RlLCAnbWV0YS50eXBlJykgPT09ICdmaWxlJztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpc0ZvbGRlcihub2RlOiBNZW51Tm9kZSkge1xyXG4gICAgcmV0dXJuIGdldChub2RlLCAnbWV0YS50eXBlJykgPT09ICdmb2xkZXInO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGlzUGFnZShub2RlOiBNZW51Tm9kZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNGaWxlKG5vZGUpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGlzVmVyc2lvbihub2RlOiBNZW51Tm9kZSkge1xyXG4gICAgcmV0dXJuIGdldChub2RlLCAnbWV0YS50eXBlJykgPT09ICd2ZXJzaW9uJztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBoYXNDaGlsZHJlbihub2RlOiBNZW51Tm9kZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBub2RlID09PSAnb2JqZWN0JztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBoYXNWZXJzaW9uQ29udGFpbmVyKG5vZGU6IE1lbnVOb2RlKSB7XHJcbiAgICByZXR1cm4gaGFzKG5vZGUsIE1lbnVTZWdtZW50LnZlcnNpb25Db250YWluZXJJZGVudGlmaWVyKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRDdXJyZW50VmVyc2lvbih2ZXJzaW9uQ29udGFpbmVyTm9kZTogTWVudU5vZGUpIHtcclxuICAgIHJldHVybiBnZXQodmVyc2lvbkNvbnRhaW5lck5vZGUsICdtZXRhLmN1cnJlbnRWZXJzaW9uJyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZmluZEZpcnN0UGFnZShtZW51Tm9kZTogTWVudU5vZGUpIHtcclxuICAgIGlmIChtZW51Tm9kZSAmJiBNZW51Tm9kZS5pc0ZvbGRlcihtZW51Tm9kZSkpIHtcclxuICAgICAgY29uc3QgcGFnZSA9IE1lbnVOb2RlLmZpbmRGaXJzdFBhZ2VJbkZvbGRlcihtZW51Tm9kZSk7XHJcbiAgICAgIHJldHVybiBwYWdlPy5tZXRhPy5wYXRoIHx8IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZmluZEZpcnN0UGFnZUluRm9sZGVyKG1lbnVOb2RlOiBNZW51Tm9kZSkge1xyXG4gICAgY29uc3QgZmlsZU1ldGFzID0gW107XHJcbiAgICBjb25zdCBjb250YWluZXJzID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBbc2VnbWVudCwgbm9kZV0gb2YgT2JqZWN0LmVudHJpZXMobWVudU5vZGUpKSB7XHJcbiAgICAgIGlmIChNZW51U2VnbWVudC5pc01ldGEoc2VnbWVudCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgaWYgKE1lbnVOb2RlLmlzRmlsZShub2RlKSkge1xyXG4gICAgICAgIGZpbGVNZXRhcy5wdXNoKG5vZGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoTWVudVNlZ21lbnQuaXNWZXJzaW9uQ29udGFpbmVyKHNlZ21lbnQpKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFZlcnNpb24gPSB0aGlzLmdldEN1cnJlbnRWZXJzaW9uKG5vZGUpO1xyXG4gICAgICAgIGNvbnRhaW5lcnMucHVzaChub2RlW2N1cnJlbnRWZXJzaW9uXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChNZW51Tm9kZS5pc0ZvbGRlcihub2RlKSB8fCBNZW51Tm9kZS5pc1ZlcnNpb24obm9kZSkpIHtcclxuICAgICAgICBjb250YWluZXJzLnB1c2gobm9kZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUb2RvIHNvcnQgYnkgZmlsZU1ldGEubWV0YS5vcmRlciBhc2NcclxuICAgIGlmIChmaWxlTWV0YXMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gZmlsZU1ldGFzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgY29udGFpbmVyIG9mIGNvbnRhaW5lcnMpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5maW5kRmlyc3RQYWdlSW5Gb2xkZXIoY29udGFpbmVyKTtcclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgbm9ybWFsaXNlVGl0bGUgfSBmcm9tICdAL3Rvb2xzL3V0aWxzJztcclxuXHJcbmV4cG9ydCB0eXBlIFNlZ21lbnQgPSBzdHJpbmc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudVNlZ21lbnQge1xyXG4gIHB1YmxpYyBzdGF0aWMgdmVyc2lvbkNvbnRhaW5lcklkZW50aWZpZXIgPSAnPHZlcnNpb25zPic7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNNZXRhKHNlZ21lbnQ6IFNlZ21lbnQpIHtcclxuICAgIHJldHVybiBzZWdtZW50ID09PSAnbWV0YSc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzVmVyc2lvbkNvbnRhaW5lcihzZWdtZW50OiBTZWdtZW50KSB7XHJcbiAgICByZXR1cm4gc2VnbWVudCA9PT0gdGhpcy52ZXJzaW9uQ29udGFpbmVySWRlbnRpZmllcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgaXNWZXJzaW9uKHNlZ21lbnQ6IFNlZ21lbnQpIHtcclxuICAgIHJldHVybiAvXnY/XFxkKyhcXC5cXGQrKSokLy50ZXN0KHNlZ21lbnQpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHRvVGl0bGUoc2VnbWVudDogU2VnbWVudCkge1xyXG4gICAgcmV0dXJuIG5vcm1hbGlzZVRpdGxlKHNlZ21lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNZW51Tm9kZSwgTWVudU5vZGVUeXBlIH0gZnJvbSAnQC90b29scy9tZW51L21lbnUtbm9kZSc7XHJcbmltcG9ydCB7IG5vcm1hbGlzZVRpdGxlLCByZXBsYWNlQWxsIH0gZnJvbSAnQC90b29scy91dGlscyc7XHJcbmltcG9ydCB7IGRlZmF1bHRzRGVlcCwgZmxvdywgZ2V0LCBoYXMsIHNldCwgdW5zZXQgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBNZW51U2VnbWVudCB9IGZyb20gJy4vbWVudS1zZWdtZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51U3RydWN0dXJlR2VuZXJhdG9yIHtcclxuICBwcml2YXRlIHN0cnVjdHVyZTogTWVudU5vZGUgPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBmaWxlTmFtZTogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIHNlZ21lbnRzOiBzdHJpbmdbXTtcclxuXHJcbiAgcHJpdmF0ZSBzZWdtZW50OiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUga2V5QXJyYXk6IHN0cmluZ1tdO1xyXG5cclxuICBwcml2YXRlIHBlcm1hbGlua1BhdGhBcnJheTogc3RyaW5nW107XHJcblxyXG4gIHByaXZhdGUgc2VvRnJpZW5kbHlQYXRoQXJyYXk6IHN0cmluZ1tdO1xyXG5cclxuICBwcml2YXRlIHZlcnNpb25PZkN1cnJlbnRQYXRoOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgZ2V0IGtleSgpIHtcclxuICAgIHJldHVybiB0aGlzLmtleUFycmF5LmpvaW4oJy4nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IHBlcm1hbGlua1BhdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wZXJtYWxpbmtQYXRoQXJyYXkuam9pbignLycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgc2VvRnJpZW5kbHlQYXRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VvRnJpZW5kbHlQYXRoQXJyYXkuam9pbignLycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldCgpIHtcclxuICAgIHRoaXMudmVyc2lvbk9mQ3VycmVudFBhdGggPSBudWxsO1xyXG4gICAgdGhpcy5rZXlBcnJheSA9IFtdO1xyXG4gICAgdGhpcy5wZXJtYWxpbmtQYXRoQXJyYXkgPSBbXTtcclxuICAgIHRoaXMuc2VvRnJpZW5kbHlQYXRoQXJyYXkgPSBbXTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkU2VnbWVudFRvS2V5ID0gKHNlZ21lbnQpID0+IHRoaXMua2V5QXJyYXkucHVzaChzZWdtZW50KTtcclxuXHJcbiAgcHJpdmF0ZSBhZGRTZWdtZW50VG9QZXJtYWxpbmtQYXRoID0gKHNlZ21lbnQpID0+IHRoaXMucGVybWFsaW5rUGF0aEFycmF5LnB1c2goc2VnbWVudCk7XHJcblxyXG4gIHByaXZhdGUgYWRkU2VnbWVudFRvU2VvRnJpZW5kbHlQYXRoID0gKHNlZ21lbnQpID0+IHRoaXMuc2VvRnJpZW5kbHlQYXRoQXJyYXkucHVzaChzZWdtZW50KTtcclxuXHJcbiAgcHJpdmF0ZSBzZXRWZXJzaW9uT2ZDdXJyZW50UGF0aCA9IChzZWdtZW50KSA9PiB7XHJcbiAgICB0aGlzLnZlcnNpb25PZkN1cnJlbnRQYXRoID0gc2VnbWVudDtcclxuICB9O1xyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2VuZXJhdGVNZW51U3RydWN0dXJlKGZpbGVOYW1lczogc3RyaW5nW10pIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICBjb25zb2xlLmxvZygnZXZlbnQgLSBnZW5lcmF0aW5nIG1lbnUgc3RydWN0dXJlJyk7XHJcblxyXG4gICAgY29uc3Qgc3RydWN0dXJlID0gbmV3IHRoaXMoKTtcclxuICAgIGZvciAoY29uc3QgZmlsZU5hbWUgb2YgZmlsZU5hbWVzKSB7XHJcbiAgICAgIHN0cnVjdHVyZS5hZGRGcm9tRmlsZShmaWxlTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RydWN0dXJlLnN0cmlwVmVyc2lvbk51bWJlcnNGcm9tTGF0ZXN0VmVyc2lvbkluU2VvRnJpZW5kbHlQYXRoKCk7XHJcbiAgICBzdHJ1Y3R1cmUuY2xlYW51cCgpO1xyXG5cclxuICAgIHJldHVybiBzdHJ1Y3R1cmUudG9PYmplY3QoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnN0cnVjdHVyZSwgbnVsbCwgMik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9PYmplY3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdHJ1Y3R1cmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkRnJvbUZpbGUoZmlsZU5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG5cclxuICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcclxuICAgIHRoaXMuc2VnbWVudHMgPSB0aGlzLmZpbGVOYW1lLnJlcGxhY2UoL1xcLm1kJC8sICcnKS5zcGxpdCgnLycpO1xyXG5cclxuICAgIHRoaXMuYWRkU3RydWN0dXJlRnJvbVNlZ21lbnRzKCk7XHJcbiAgICB0aGlzLmFkZE1ldGFGb3JGaWxlTm9kZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRTdHJ1Y3R1cmVGcm9tU2VnbWVudHMoKSB7XHJcbiAgICBmb3IgKHRoaXMuc2VnbWVudCBvZiB0aGlzLnNlZ21lbnRzKSB7XHJcbiAgICAgIGNvbnN0IHsgb3JkZXIsIHNlZ21lbnQgfSA9IHRoaXMuZXh0cmFjdEluZm9Gcm9tU2VnbWVudCgpO1xyXG5cclxuICAgICAgLy8gTWFrZSB2ZXJzaW9uIHBhcnRzIGlkZW50aWZpYWJsZVxyXG4gICAgICBpZiAoTWVudVNlZ21lbnQuaXNWZXJzaW9uKHNlZ21lbnQpKSB7XHJcbiAgICAgICAgdGhpcy5hZGRTZWdtZW50VG9LZXkoTWVudVNlZ21lbnQudmVyc2lvbkNvbnRhaW5lcklkZW50aWZpZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0Tm9kZVR5cGUoJ2lkZW50aWZpZXInKTtcclxuICAgICAgICB0aGlzLnNldE5vZGVQYXRoKHRoaXMucGVybWFsaW5rUGF0aCk7XHJcbiAgICAgICAgdGhpcy5zZXRWZXJzaW9uT2ZDdXJyZW50UGF0aChzZWdtZW50KTtcclxuICAgICAgICB0aGlzLnNldE5vZGVDdXJyZW50VmVyc2lvbihzZWdtZW50KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVXBkYXRlIHBvaW50ZXJzXHJcbiAgICAgIHRoaXMuYWRkU2VnbWVudFRvS2V5KHNlZ21lbnQpO1xyXG4gICAgICB0aGlzLmFkZFNlZ21lbnRUb1Blcm1hbGlua1BhdGgoc2VnbWVudCk7XHJcbiAgICAgIGlmICghTWVudVNlZ21lbnQuaXNWZXJzaW9uKHNlZ21lbnQpKSB0aGlzLmFkZFNlZ21lbnRUb1Nlb0ZyaWVuZGx5UGF0aChzZWdtZW50KTtcclxuXHJcbiAgICAgIC8vIEFkZCBtZXRhIGZvciBldmVyeSBwYXJ0XHJcbiAgICAgIGlmICghaGFzKHRoaXMuc3RydWN0dXJlLCB0aGlzLmtleSkpIHtcclxuICAgICAgICB0aGlzLnNldE5vZGVUeXBlKE1lbnVTZWdtZW50LmlzVmVyc2lvbihzZWdtZW50KSA/ICd2ZXJzaW9uJyA6ICdmb2xkZXInKTtcclxuICAgICAgICB0aGlzLnNldE5vZGVPcmRlcihvcmRlcik7XHJcbiAgICAgICAgdGhpcy5zZXROb2RlUGF0aCh0aGlzLnBlcm1hbGlua1BhdGgpO1xyXG4gICAgICAgIHRoaXMuc2V0Tm9kZVNlb0ZyaWVuZGx5UGF0aCh0aGlzLnNlb0ZyaWVuZGx5UGF0aCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkTWV0YUZvckZpbGVOb2RlKCkge1xyXG4gICAgY29uc3QgeyBvcmRlciwgc2VnbWVudCB9ID0gdGhpcy5leHRyYWN0SW5mb0Zyb21TZWdtZW50KCk7XHJcblxyXG4gICAgdGhpcy5zZXROb2RlTmFtZShub3JtYWxpc2VUaXRsZShzZWdtZW50KSk7XHJcbiAgICB0aGlzLnNldE5vZGVUeXBlKCdmaWxlJyk7XHJcbiAgICB0aGlzLnNldE5vZGVPcmRlcihvcmRlcik7XHJcbiAgICB0aGlzLnNldE5vZGVQYXRoKHRoaXMucGVybWFsaW5rUGF0aCk7XHJcbiAgICB0aGlzLnNldE5vZGVQZXJtYWxpbmtQYXRoKHRoaXMucGVybWFsaW5rUGF0aCk7XHJcbiAgICB0aGlzLnNldE5vZGVTZW9GcmllbmRseVBhdGgodGhpcy5zZW9GcmllbmRseVBhdGgpO1xyXG4gICAgdGhpcy5zZXROb2RlQWJzb2x1dGVQYXRoKHRoaXMuZmlsZU5hbWUpO1xyXG4gICAgdGhpcy5zZXROb2RlVmVyc2lvbih0aGlzLnZlcnNpb25PZkN1cnJlbnRQYXRoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZXh0cmFjdEluZm9Gcm9tU2VnbWVudCgpIHtcclxuICAgIGNvbnN0IHNvcnRPcmRlck51bWJlclJlZ2V4ID0gL15cXGR7Mn0tLztcclxuXHJcbiAgICBjb25zdCBleHRyYWN0U29ydE9yZGVyTnVtYmVyID0gKHBhcnQ6IHN0cmluZyk6IG51bWJlciA9PiB7XHJcbiAgICAgIHJldHVybiBOdW1iZXIocGFydC5tYXRjaChzb3J0T3JkZXJOdW1iZXJSZWdleCk/LlswXT8ucmVwbGFjZSgvLSQvLCAnJykgfHwgOTkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdHJpcFNvcnRPcmRlck51bWJlciA9IChwYXJ0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgICByZXR1cm4gcGFydC5yZXBsYWNlKHNvcnRPcmRlck51bWJlclJlZ2V4LCAnJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZUZvcmJpZGRlbkNoYXJhY3RlcnMgPSAocGFydDogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgICAgcmV0dXJuIHJlcGxhY2VBbGwocGFydCwgJy4nLCAnLScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzYW5pdGlzZVNlZ21lbnQgPSBmbG93KHN0cmlwU29ydE9yZGVyTnVtYmVyLCByZW1vdmVGb3JiaWRkZW5DaGFyYWN0ZXJzKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvcmRlcjogZXh0cmFjdFNvcnRPcmRlck51bWJlcih0aGlzLnNlZ21lbnQpLFxyXG4gICAgICBzZWdtZW50OiBzYW5pdGlzZVNlZ21lbnQodGhpcy5zZWdtZW50KSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldE5vZGVOYW1lKG5hbWUpIHtcclxuICAgIHNldCh0aGlzLnN0cnVjdHVyZSwgdGhpcy5rZXksIHsgbmFtZSB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBtZXRhIHRvIGN1cnJlbnRseSBzZWxlY3RlZCBrZXkuXHJcbiAgICpcclxuICAgKiBOZXcgcHJvcGVydGllcyBvdmVyd3JpdGUgZXhpc3RpbmcgcHJvcGVydGllcyByZWN1cnNpdmVseS5cclxuICAgKlxyXG4gICAqIEV4YW1wbGU6XHJcbiAgICogICBCZWZvcmU6ICAgICB7IGE6IDEsIGI6IDIgfVxyXG4gICAqICAgQWRkOiAgICAgICAgeyBhOiAzLCBjOiA0IH1cclxuICAgKiAgIFJlc3VsdHMgaW46IHsgYTogMywgYjogMiwgYzogNCB9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhZGROb2RlTWV0YShtZXRhKSB7XHJcbiAgICBjb25zdCBwcmV2aW91c01ldGEgPSBnZXQodGhpcy5zdHJ1Y3R1cmUsIGAke3RoaXMua2V5fS5tZXRhYCwge30pO1xyXG4gICAgZGVmYXVsdHNEZWVwKG1ldGEsIHByZXZpb3VzTWV0YSk7XHJcbiAgICBzZXQodGhpcy5zdHJ1Y3R1cmUsIGAke3RoaXMua2V5fS5tZXRhYCwgbWV0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUeXBlIG9mIHBhcnQsIHRvIGluZGljYXRlIGl0cyBzdHJ1Y3R1cmVcclxuICAgKi9cclxuICBwcml2YXRlIHNldE5vZGVUeXBlKHR5cGU6IE1lbnVOb2RlVHlwZSkge1xyXG4gICAgdGhpcy5hZGROb2RlTWV0YSh7IHR5cGUgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcmRlciBpbiB3aGljaCB0byBhcHBlYXIgaW4gdGhlIG1lbnVcclxuICAgKi9cclxuICBwcml2YXRlIHNldE5vZGVPcmRlcihvcmRlcjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmFkZE5vZGVNZXRhKHsgb3JkZXIgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3Igcm91dGluZ1xyXG4gICAqL1xyXG4gIHByaXZhdGUgc2V0Tm9kZVBhdGgocGF0aDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFkZE5vZGVNZXRhKHsgcGF0aCB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciBsaW5raW5nIGJhY2sgdG8gdGhlIGZpbGUgaW4gdGhlIHJlcG9cclxuICAgKi9cclxuICBwcml2YXRlIHNldE5vZGVBYnNvbHV0ZVBhdGgoYWJzb2x1dGVQYXRoOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuYWRkTm9kZU1ldGEoeyBhYnNvbHV0ZVBhdGggfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3IgbGlua2luZyB0byBhIHNlY3Rpb24gZm9yIGEgc3BlY2lmaWMgdmVyc2lvbiB1c2luZyBhbiBhbmNob3JcclxuICAgKi9cclxuICBwcml2YXRlIHNldE5vZGVQZXJtYWxpbmtQYXRoKHBlcm1hbGlua1BhdGg6IHN0cmluZykge1xyXG4gICAgdGhpcy5hZGROb2RlTWV0YSh7IHBlcm1hbGlua1BhdGggfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3Igb3ZlcndyaXRpbmcgYHBhdGhgIGluIGNhc2UgZm9yIGxhdGVzdCB2ZXJzaW9uIHBhdGhcclxuICAgKlxyXG4gICAqIEV4YW1wbGU6IHRvIG92ZXJ3cml0ZSBgcGF0aGAgZ2l0aHViL3YyL2RvYyB3aXRoIGBzZW9GcmllbmRseVBhdGhgIGdpdGh1Yi9kb2MgaWYgdjIgaXMgY3VycmVudC5cclxuICAgKi9cclxuICBwcml2YXRlIHNldE5vZGVTZW9GcmllbmRseVBhdGgoc2VvRnJpZW5kbHlQYXRoOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuYWRkTm9kZU1ldGEoeyBzZW9GcmllbmRseVBhdGggfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWZXJzaW9uIG9mIHBhcmVudCBvciBzZWxmXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXROb2RlVmVyc2lvbih2ZXJzaW9uOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuYWRkTm9kZU1ldGEoeyB2ZXJzaW9uIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVG8gb3ZlcndyaXRlIGN1cnJlbnRWZXJzaW9uIGluIG1ldGEgZXZlcnkgdGltZSBhIG5ld2VyIHZlcnNpb24gaXMgZm91bmRcclxuICAgKi9cclxuICBwcml2YXRlIHNldE5vZGVDdXJyZW50VmVyc2lvbihjdXJyZW50VmVyc2lvbjogc3RyaW5nKSB7XHJcbiAgICBpZiAoIU1lbnVTZWdtZW50LmlzVmVyc2lvbihjdXJyZW50VmVyc2lvbikpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCB2ZXJzaW9uIHRvIG1hdGNoIGEgdmVyc2lvbiBwYXJ0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGROb2RlTWV0YSh7IGN1cnJlbnRWZXJzaW9uIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdHJpcFZlcnNpb25OdW1iZXJzRnJvbUxhdGVzdFZlcnNpb25JblNlb0ZyaWVuZGx5UGF0aCgpIHtcclxuICAgIGNvbnN0IHVwZGF0ZVNlb1BhdGhzUmVjdXJzaXZlbHkgPSAoXHJcbiAgICAgIGNvbGxlY3Rpb246IE1lbnVOb2RlLFxyXG4gICAgICByZXBsYWNlUGF0aCA9IG51bGwsXHJcbiAgICAgIHdpdGhQYXRoID0gbnVsbCxcclxuICAgICkgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IFtzZWdtZW50LCBub2RlXSBvZiBPYmplY3QuZW50cmllcyhjb2xsZWN0aW9uKSkge1xyXG4gICAgICAgIGlmIChNZW51U2VnbWVudC5pc01ldGEoc2VnbWVudCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAvLyBFeGFtcGxlOiBSZWN1cnNpdmVseSByZXBsYWNlIC9naXRodWIvdltsYXRlc3RdL3NvbWV0aGluZyB3aXRoIC9naXRodWIvc29tZXRoaW5nLlxyXG4gICAgICAgIGlmIChyZXBsYWNlUGF0aCAmJiB3aXRoUGF0aCAmJiBoYXMobm9kZSwgJ21ldGEucGF0aCcpKSB7XHJcbiAgICAgICAgICBzZXQoY29sbGVjdGlvbiwgYCR7c2VnbWVudH0ubWV0YS5wYXRoYCwgbm9kZS5tZXRhLnBhdGgucmVwbGFjZShyZXBsYWNlUGF0aCwgd2l0aFBhdGgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghTWVudU5vZGUuaGFzQ2hpbGRyZW4obm9kZSkpIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKE1lbnVTZWdtZW50LmlzVmVyc2lvbkNvbnRhaW5lcihzZWdtZW50KSkge1xyXG4gICAgICAgICAgY29uc3QgeyBjdXJyZW50VmVyc2lvbiB9ID0gbm9kZS5tZXRhO1xyXG4gICAgICAgICAgY29uc3QgeyBzZW9GcmllbmRseVBhdGggfSA9IG5vZGVbY3VycmVudFZlcnNpb25dLm1ldGE7XHJcbiAgICAgICAgICBjb25zdCByZXBsYWNlID0gZ2V0KGNvbGxlY3Rpb24sIGAke3NlZ21lbnR9LiR7Y3VycmVudFZlcnNpb259Lm1ldGEucGF0aGApO1xyXG4gICAgICAgICAgc2V0KGNvbGxlY3Rpb24sIGAke3NlZ21lbnR9LiR7Y3VycmVudFZlcnNpb259Lm1ldGEucGF0aGAsIHNlb0ZyaWVuZGx5UGF0aCk7XHJcbiAgICAgICAgICB1cGRhdGVTZW9QYXRoc1JlY3Vyc2l2ZWx5KG5vZGUsIHJlcGxhY2UsIHNlb0ZyaWVuZGx5UGF0aCk7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZVNlb1BhdGhzUmVjdXJzaXZlbHkobm9kZSwgcmVwbGFjZVBhdGgsIHdpdGhQYXRoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGVTZW9QYXRoc1JlY3Vyc2l2ZWx5KHRoaXMuc3RydWN0dXJlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYW51cCgpIHtcclxuICAgIGNvbnN0IGNsZWFudXBSZWN1cnNpdmVseSA9IChjb2xsZWN0aW9uOiBNZW51Tm9kZSkgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IFtzZWdtZW50LCBub2RlXSBvZiBPYmplY3QuZW50cmllcyhjb2xsZWN0aW9uKSkge1xyXG4gICAgICAgIGlmIChNZW51U2VnbWVudC5pc01ldGEoc2VnbWVudCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICB1bnNldChjb2xsZWN0aW9uLCBgJHtzZWdtZW50fS5tZXRhLnNlb0ZyaWVuZGx5UGF0aGApO1xyXG5cclxuICAgICAgICBpZiAoTWVudU5vZGUuaGFzQ2hpbGRyZW4obm9kZSkpIHtcclxuICAgICAgICAgIGNsZWFudXBSZWN1cnNpdmVseShub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBjbGVhbnVwUmVjdXJzaXZlbHkodGhpcy5zdHJ1Y3R1cmUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNZW51Tm9kZSB9IGZyb20gJ0AvdG9vbHMvbWVudS9tZW51LW5vZGUnO1xyXG5pbXBvcnQgeyBNZW51U2VnbWVudCB9IGZyb20gJ0AvdG9vbHMvbWVudS9tZW51LXNlZ21lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVTdHJ1Y3R1cmVQYXJzZXIge1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RmlsZU1ldGFzKG1lbnVTdHJ1Y3R1cmU6IE1lbnVOb2RlLCBmaWxlTWV0YXMgPSBbXSkge1xyXG4gICAgZm9yIChjb25zdCBbc2VnbWVudCwgbm9kZV0gb2YgT2JqZWN0LmVudHJpZXMobWVudVN0cnVjdHVyZSkpIHtcclxuICAgICAgaWYgKE1lbnVTZWdtZW50LmlzTWV0YShzZWdtZW50KSkgY29udGludWU7XHJcblxyXG4gICAgICBpZiAoTWVudU5vZGUuaXNGaWxlKG5vZGUpKSB7XHJcbiAgICAgICAgZmlsZU1ldGFzLnB1c2gobm9kZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChNZW51Tm9kZS5oYXNDaGlsZHJlbihub2RlKSkge1xyXG4gICAgICAgIHRoaXMuZ2V0RmlsZU1ldGFzKG5vZGUsIGZpbGVNZXRhcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmlsZU1ldGFzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNZW51Tm9kZSB9IGZyb20gJ0AvdG9vbHMvbWVudS9tZW51LW5vZGUnO1xyXG5pbXBvcnQgeyBNZW51U2VnbWVudCB9IGZyb20gJ0AvdG9vbHMvbWVudS9tZW51LXNlZ21lbnQnO1xyXG5pbXBvcnQgeyBNZW51U3RydWN0dXJlR2VuZXJhdG9yIH0gZnJvbSAnQC90b29scy9tZW51L21lbnUtc3RydWN0dXJlLWdlbmVyYXRvcic7XHJcbmltcG9ydCB7IE1lbnVTdHJ1Y3R1cmVQYXJzZXIgfSBmcm9tICdAL3Rvb2xzL21lbnUvbWVudS1zdHJ1Y3R1cmUtcGFyc2VyJztcclxuaW1wb3J0IHsgc2xlZXAgfSBmcm9tICdAL3Rvb2xzL3V0aWxzJztcclxuaW1wb3J0IHsgcmVhZEZpbGVTeW5jLCB3cml0ZUZpbGVTeW5jIH0gZnJvbSAnZnMnO1xyXG5pbXBvcnQgeyBzZXQsIGdldCB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBmc1BhdGggZnJvbSAncGF0aCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudVN0cnVjdHVyZSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgc2F2ZUZpbGUgPSAnY29yZS9tZW51LXN0cnVjdHVyZS5qc29uJztcclxuXHJcbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZW5lcmF0ZUZyb21GaWxlcyhmaWxlUGF0aHM6IHN0cmluZ1tdKSB7XHJcbiAgICBjb25zdCBtZW51U3RydWN0dXJlID0gYXdhaXQgTWVudVN0cnVjdHVyZUdlbmVyYXRvci5nZW5lcmF0ZU1lbnVTdHJ1Y3R1cmUoZmlsZVBhdGhzKTtcclxuICAgIGF3YWl0IHRoaXMuc2F2ZShtZW51U3RydWN0dXJlKTtcclxuXHJcbiAgICByZXR1cm4gbWVudVN0cnVjdHVyZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0RmlsZU1ldGFzKHN0cnVjdHVyZTogTWVudU5vZGUpIHtcclxuICAgIHJldHVybiBNZW51U3RydWN0dXJlUGFyc2VyLmdldEZpbGVNZXRhcyhzdHJ1Y3R1cmUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkKCkge1xyXG4gICAgY29uc3QgYXNKc29uID0gcmVhZEZpbGVTeW5jKGZzUGF0aC5yZXNvbHZlKHRoaXMuc2F2ZUZpbGUpLCB7IGVuY29kaW5nOiAndXRmOCcgfSk7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShhc0pzb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgc2F2ZShtZW51U3RydWN0dXJlKSB7XHJcbiAgICBjb25zdCBhc0pzb24gPSBgJHtKU09OLnN0cmluZ2lmeSh7IGRvY3M6IG1lbnVTdHJ1Y3R1cmUgfSwgbnVsbCwgMil9XFxuYDtcclxuICAgIHdyaXRlRmlsZVN5bmMoZnNQYXRoLnJlc29sdmUodGhpcy5zYXZlRmlsZSksIGFzSnNvbiwgeyBlbmNvZGluZzogJ3V0ZjgnIH0pO1xyXG4gICAgYXdhaXQgc2xlZXAoMjUwKTsgLy8gQWxsb3cgZm9yIHdpbmRvd3MgZmlsZXN5c3RlbSB0byBjYXRjaCB1cC5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0Q3VycmVudFZlcnNpb25zKGNvbGxlY3Rpb246IE1lbnVOb2RlLCBzZWN0aW9ucyA9IHt9KSB7XHJcbiAgICBmb3IgKGNvbnN0IFtzZWdtZW50LCBub2RlXSBvZiBPYmplY3QuZW50cmllcyhjb2xsZWN0aW9uKSkge1xyXG4gICAgICBpZiAoTWVudVNlZ21lbnQuaXNNZXRhKHNlZ21lbnQpKSBjb250aW51ZTtcclxuXHJcbiAgICAgIGlmIChNZW51U2VnbWVudC5pc1ZlcnNpb25Db250YWluZXIoc2VnbWVudCkpIHtcclxuICAgICAgICBjb25zdCB7IHBhdGgsIGN1cnJlbnRWZXJzaW9uIH0gPSBub2RlLm1ldGE7XHJcbiAgICAgICAgc2V0KHNlY3Rpb25zLCBgJHtwYXRofWAsIGN1cnJlbnRWZXJzaW9uKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKE1lbnVOb2RlLmhhc0NoaWxkcmVuKG5vZGUpKSB7XHJcbiAgICAgICAgdGhpcy5nZXRDdXJyZW50VmVyc2lvbnMobm9kZSwgc2VjdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNlY3Rpb25zO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldE5vZGVCeVVybChtZW51U3RydWN0dXJlLCB1cmxQYXRoKSB7XHJcbiAgICByZXR1cm4gZ2V0KG1lbnVTdHJ1Y3R1cmUsIHVybFBhdGgucmVwbGFjZSgvXlxcLysvLCAnJykuc3BsaXQoJy8nKS5qb2luKCcuJykpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNZW51Tm9kZSB9IGZyb20gJ0AvdG9vbHMvbWVudS9tZW51LW5vZGUnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgd3JpdGVGaWxlU3luYyB9IGZyb20gJ2ZzJztcclxuaW1wb3J0IHJlYWRGaWxlIGZyb20gJ0AvY29yZS9mcy9yZWFkLWZpbGUnO1xyXG5pbXBvcnQgZXh0cmFjdFNlY3Rpb25zIGZyb20gJy4vdXRpbHMvZXh0cmFjdC1zZWN0aW9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVNlYXJjaERlZmluaXRpb25zRnJvbUZpbGVzKGZpbGVzOiBNZW51Tm9kZVtdKSB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICBjb25zb2xlLmxvZygnZXZlbnQgLSBnZW5lcmF0aW5nIHNlYXJjaCBjYWNoZScpO1xyXG5cclxuICBjb25zdCBjYWNoZSA9IFtdO1xyXG4gIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xyXG4gICAgY29uc3QgeyBtZXRhIH0gPSBmaWxlO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRzID0gcmVhZEZpbGUocGF0aC5yZXNvbHZlKCdkb2NzLycsIG1ldGEuYWJzb2x1dGVQYXRoKSk7XHJcbiAgICBjb25zdCBzZWN0aW9ucyA9IGV4dHJhY3RTZWN0aW9ucyhtZXRhLCBjb250ZW50cyk7XHJcblxyXG4gICAgY2FjaGUucHVzaCguLi5zZWN0aW9ucyk7XHJcbiAgfVxyXG5cclxuICB3cml0ZUZpbGVTeW5jKHBhdGgucmVzb2x2ZSgnLnNlYXJjaC9zZWN0aW9ucy5qc29uJyksIEpTT04uc3RyaW5naWZ5KGNhY2hlKSwgeyBlbmNvZGluZzogJ3V0ZjgnIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGNsb25lRGVlcCB9IGZyb20gJ2xvZGFzaCc7XHJcblxyXG5jb25zdCBkZXRlcm1pbmVMZXZlbCA9IChsaW5lKSA9PiB7XHJcbiAgZm9yIChsZXQgbGV2ZWwgPSAwOyBsZXZlbCA8PSA1OyBsZXZlbCArPSAxKSB7XHJcbiAgICBjb25zdCBjaGFyID0gbGluZVtsZXZlbF07XHJcbiAgICBpZiAoY2hhciAhPT0gJyMnKSB7XHJcbiAgICAgIHJldHVybiBsZXZlbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuY29uc3QgZXh0cmFjdFRpdGxlID0gKGxpbmUpID0+IHtcclxuICBpZiAoIWxpbmUpIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICBjb25zb2xlLmxvZygnXFx1MDAxQlszM20lc1xcdTAwMUJbMG0gIC0gJXMnLCAnd2FybicsICdVbmFibGUgdG8gZXh0cmFjdCB0aXRsZSBmcm9tJywgbGluZSk7XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIGxpbmUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgYEV4cGVjdGVkIGhlYWRpbmcgdG8gY29uc2lzdCBvZiBhIHN0cmluZy4gVGhhdCB3YXkgd2UgY2FuIGVhc2lseSB1c2UgdGhlbSBhcyBhbmNob3JzLlxyXG4gICAgICBUaGUgZm9sbG93aW5nIGRvZXMgbm90IGFkaGVyZSB0byB0aGlzIHJ1bGU6IFwiJHtKU09OLnN0cmluZ2lmeShsaW5lLCBudWxsLCAyKX1cImAsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGxpbmUucmVwbGFjZSgvXltcXHMjXSovLCAnJykudHJpbSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGV4dHJhY3RBbmNob3JJZCA9IChsaW5lKSA9PiB7XHJcbiAgcmV0dXJuIGV4dHJhY3RUaXRsZShsaW5lKS50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJykuam9pbignLScpO1xyXG59O1xyXG5cclxuY29uc3QgZm9yY2VTaW5nbGVMaW5lID0gKGNvbnRlbnQpID0+IHtcclxuICAvLyBPbmUgc3BhY2UgZm9yIGVhY2ggbmV3bGluZVxyXG4gIHJldHVybiBjb250ZW50LnJlcGxhY2UoL1xcbi8sICcgJyk7XHJcbn07XHJcblxyXG5jb25zdCBleHRyYWN0U3VtbWFyeSA9IChyYXdDb250ZW50LCBtYXhMZW5ndGggPSAxMDApID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gZm9yY2VTaW5nbGVMaW5lKHJhd0NvbnRlbnQpO1xyXG5cclxuICBpZiAoY29udGVudC5sZW5ndGggPD0gbWF4TGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiBgJHtjb250ZW50LnNsaWNlKDAsIE1hdGgubWluKGNvbnRlbnQubGVuZ3RoLCBtYXhMZW5ndGggLSAzKSl9Li4uYDtcclxufTtcclxuXHJcbmNvbnN0IGlzSGVhZGluZyA9IChsaW5lKSA9PiB7XHJcbiAgcmV0dXJuIGxpbmUuc3RhcnRzV2l0aCgnIycpO1xyXG59O1xyXG5cclxuY29uc3QgcGFyc2VMaW5lID0gKGxpbmUpID0+IHtcclxuICByZXR1cm4gbGluZTtcclxufTtcclxuXHJcbmNvbnN0IGZpbmFsaXNlUHJldmlvdXNTZWN0aW9uID0gKHNlY3Rpb24pID0+IHtcclxuICBjb25zdCBjb250ZW50ID0gc2VjdGlvbi5jb250ZW50LnRyaW1MZWZ0KCdcXG4nKS50cmltUmlnaHQoJ1xcbicpO1xyXG5cclxuICBjb25zdCBmaW5hbGlzZWRTZWN0aW9uID0gY2xvbmVEZWVwKHNlY3Rpb24pO1xyXG4gIGZpbmFsaXNlZFNlY3Rpb24uY29udGVudCA9IGNvbnRlbnQgfHwgJyhlbXB0eSknO1xyXG4gIGZpbmFsaXNlZFNlY3Rpb24uc3VtbWFyeSA9IGV4dHJhY3RTdW1tYXJ5KGNvbnRlbnQpO1xyXG5cclxuICByZXR1cm4gZmluYWxpc2VkU2VjdGlvbjtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVNlY3Rpb25DcmVhdG9yID0gKG1ldGEpID0+IHtcclxuICByZXR1cm4gKGxpbmUpID0+IHtcclxuICAgIGNvbnN0IHsgcGF0aCwgdmVyc2lvbiB9ID0gbWV0YTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogZXh0cmFjdFRpdGxlKGxpbmUpLFxyXG4gICAgICBsZXZlbDogZGV0ZXJtaW5lTGV2ZWwobGluZSksXHJcbiAgICAgIHBhdGgsXHJcbiAgICAgIHZlcnNpb24sXHJcbiAgICAgIGFuY2hvcklkOiBleHRyYWN0QW5jaG9ySWQobGluZSksXHJcbiAgICAgIGNvbnRlbnQ6ICcnLFxyXG4gICAgfTtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXh0cmFjdFNlY3Rpb25zKG1ldGEsIGNvbnRlbnRzKSB7XHJcbiAgY29uc3QgY3JlYXRlTmV3U2VjdGlvbkZyb21MaW5lID0gY3JlYXRlU2VjdGlvbkNyZWF0b3IobWV0YSk7XHJcbiAgY29uc3QgbGluZXMgPSBjb250ZW50cy5zcGxpdCgnXFxuJyk7XHJcbiAgY29uc3Qgc2VjdGlvbnMgPSBbXTtcclxuXHJcbiAgbGV0IHNlY3Rpb247XHJcbiAgbGV0IHNraXBwZWRMaW5lcyA9IDA7XHJcbiAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XHJcbiAgICBpZiAoaXNIZWFkaW5nKGxpbmUpKSB7XHJcbiAgICAgIGlmIChzZWN0aW9uKSB7XHJcbiAgICAgICAgc2VjdGlvbnMucHVzaChmaW5hbGlzZVByZXZpb3VzU2VjdGlvbihzZWN0aW9uKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlY3Rpb24gPSBjcmVhdGVOZXdTZWN0aW9uRnJvbUxpbmUobGluZSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWN0aW9uKSB7XHJcbiAgICAgIHNlY3Rpb24uY29udGVudCArPSBgXFxuJHtwYXJzZUxpbmUobGluZSl9YDtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcHBlZExpbmVzICs9IDE7XHJcbiAgfVxyXG5cclxuICBpZiAoc2VjdGlvbikge1xyXG4gICAgc2VjdGlvbnMucHVzaChmaW5hbGlzZVByZXZpb3VzU2VjdGlvbihzZWN0aW9uKSk7XHJcbiAgfVxyXG5cclxuICBpZiAoc2tpcHBlZExpbmVzID49IDEpIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICBjb25zb2xlLmxvZyhgU2tpcHBlZCAke3NraXBwZWRMaW5lc30gbGluZXMgdGhhdCBvY2N1cnJlZCBiZWZvcmUgYW55IHRpdGxlYCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2VjdGlvbnM7XHJcbn1cclxuIiwiaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZyc7XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBlbnZpcm9ubWVudCB2YXJpYWJsZSB0aGF0IGlzIHNldCBkdXJpbmcgYnVpbGQgdGltZSxcclxuICogYm90aCBvbiB0aGUgc2VydmVyIGFuZCBpbiB0aGUgYnJvd3Nlci5cclxuICpcclxuICogRm9yIGEgdmFyaWFibGUgdG8gc2hvdyB1cCBpbiB0aGUgYnJvd3NlciwgaXQgbmVlZHMgdG8gYmUgZGVmaW5lZCBpbiBuZXh0LmNvbmZpZy5qcyB1bmRlclxyXG4gKiB0aGUgcHJvcGVydHkgYHB1YmxpY1J1bnRpbWVDb25maWdgLlxyXG4gKlxyXG4gKiBOb3RlczpcclxuICogICAtIFRoaXMgaXMgYSBsb3cgbGV2ZWwgbWV0aG9kLCB0aGF0IHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gc3BlY2lmaWMgY2FzZXMgd2hlcmUgdGhlIHN0b3JlIGhhc1xyXG4gKiAgICAgbm90IHlldCBiZWVuIGluaXRpYWxpc2VkLCBidXQgdGhlIHZhbHVlIGlzIHN0aWxsIHJlcXVpcmVkLlxyXG4gKiAgIC0gQW4gZW1wdHkgc3RyaW5nIGlzIG9ubHkgZXhwZWN0ZWQgaWYgdGhpcyBmdW5jdGlvbiBpcyBleGVjdXRlZCBpbiB0aGUgY29kZSBwYXRoIG9mIGEgY3VzdG9tXHJcbiAqICAgICBzY3JpcHQgb3V0c2lkZSBvZiBOZXh0SlMsIHRodXMgbm90IHVzaW5nIG5leHQuY29uZmlnLmpzIGNvbmZpZ3VyYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0SXNvbW9ycGhpY1ZhbHVlID0gKHZhcmlhYmxlTmFtZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBjb25maWcgPSBnZXRDb25maWcoKTtcclxuXHJcbiAgcmV0dXJuIGNvbmZpZyA/IGNvbmZpZy5wdWJsaWNSdW50aW1lQ29uZmlnW3ZhcmlhYmxlTmFtZV0gOiAnJztcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9zbGVlcCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3RyaW5nJztcclxuIiwiZXhwb3J0IGNvbnN0IHNsZWVwID0gYXN5bmMgKG1zKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAoW2ZpcnN0LCAuLi5yZXN0XSwgbG9jYWxlID0gJ2VuJykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gZmlyc3QudG9Mb2NhbGVVcHBlckNhc2UobG9jYWxlKSArIHJlc3Quam9pbignJyk7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gZmlyc3QudG9Mb2NhbGVVcHBlckNhc2UobG9jYWxlKSArIHJlc3Q7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcGxhY2VBbGwgPSAoaW5wdXQsIHNlYXJjaFZhbHVlOiBzdHJpbmcsIHJlcGxhY2VWYWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIGlucHV0LnNwbGl0KHNlYXJjaFZhbHVlKS5qb2luKHJlcGxhY2VWYWx1ZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgbm9ybWFsaXNlVGl0bGUgPSAocmF3RmlsZU5hbWUpID0+IHtcclxuICBjb25zdCBmaWxlTmFtZSA9IHJlcGxhY2VBbGwocmF3RmlsZU5hbWUsICctJywgJyAnKTtcclxuXHJcbiAgLy8gRm9yIG5vdyB0aGlzIGlzIHRoZSBvbmx5IGV4Y2VwdGlvbiwgdGhpcyBjb3VsZCBiZSBtYWRlIHNtYXJ0ZXIgbGF0ZXJcclxuICBpZiAoZmlsZU5hbWUgPT09ICdpb3MnKSB7XHJcbiAgICByZXR1cm4gJ2lPUyc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGZpbGVOYW1lKTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JheS1tYXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlnaGxpZ2h0LmpzL2xpYi9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Jhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvY3NoYXJwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmFzY3JpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcG93ZXJzaGVsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9ydWJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3R5cGVzY3JpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMveWFtbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2FsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbnN0YW50c2VhcmNoLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbnN0YW50c2VhcmNoL2Nvbm5lY3RvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFya2Rvd25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=