module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/docs/index.js");
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

/***/ "./components/pages/docs/documentation-index.tsx":
/*!*******************************************************!*\
  !*** ./components/pages/docs/documentation-index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocumentationIndex; });
/* harmony import */ var _components_pages_docs_documentation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/pages/docs/documentation-page */ "./components/pages/docs/documentation-page.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/all */ "react-icons/all");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_all__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_pages_home_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/pages/home/header */ "./components/pages/home/header.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\pages\\docs\\documentation-index.tsx";





function DocumentationIndex() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_pages_docs_documentation_page__WEBPACK_IMPORTED_MODULE_0__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_pages_home_header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("main", {
      className: "ant-typography",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
        children: "Welcome to GameCI"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        children: "This site hosts all documentation for GameCI, and will help you setup Continuous Integration for your game projects."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        children: "Continuous Integration is a widely-used practice where automated pipelines check the latest code changes actually work, before merging them into the main branch. This helps developers stay in the flow and release faster and (ultimately) with more confidence."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
          children: "Follow the development on\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
          href: "https://github.com/game-ci/documentation",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["IoLogoGithub"], {
            title: "GitHub"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("iframe", {
        title: "GameCI discord widget",
        src: "https://discord.com/widget?id=710946343828455455&theme=dark",
        width: "350",
        height: "500",
        frameBorder: "0",
        sandbox: "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
          children: "Join the discussion on\xA0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/discord",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["IoLogoDiscord"], {
              title: "GameCI Discord"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

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

/***/ "./components/pages/home/header.tsx":
/*!******************************************!*\
  !*** ./components/pages/home/header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\components\\pages\\home\\header.tsx";

/* eslint-disable @typescript-eslint/no-unused-vars */




const Header = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
    children: "GameCI"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/icons/apple-touch-icon.png"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/icons/favicon-32x32.png"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/icons/favicon-16x16.png"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
    rel: "manifest",
    href: "/icons/site.webmanifest"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
    rel: "mask-icon",
    href: "/icons/safari-pinned-tab.svg",
    color: "#5bbad5"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
    rel: "shortcut icon",
    href: "/icons/favicon.ico"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("meta", {
    name: "msapplication-TileColor",
    content: "#373445"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("meta", {
    name: "msapplication-config",
    content: "/icons/browserconfig.xml"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("meta", {
    name: "theme-color",
    content: "#ffffff"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Header);

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

module.exports = JSON.parse("{\"docs\":{\"cloud-runner\":{\"meta\":{\"path\":\"cloud-runner\",\"order\":99,\"type\":\"folder\"},\"<versions>\":{\"meta\":{\"currentVersion\":\"v0\",\"path\":\"cloud-runner\",\"type\":\"identifier\"},\"v0\":{\"meta\":{\"path\":\"cloud-runner\",\"order\":99,\"type\":\"version\"},\"introduction\":{\"name\":\"Introduction\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/01-introduction.md\",\"permalinkPath\":\"cloud-runner/v0/introduction\",\"path\":\"cloud-runner/introduction\",\"order\":1,\"type\":\"file\"}},\"getting-started\":{\"meta\":{\"path\":\"cloud-runner/getting-started\",\"order\":2,\"type\":\"folder\"},\"aws\":{\"name\":\"Aws\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/02-getting-started/aws.md\",\"permalinkPath\":\"cloud-runner/v0/getting-started/aws\",\"path\":\"cloud-runner/getting-started/aws\",\"order\":99,\"type\":\"file\"}},\"kuberentes\":{\"name\":\"Kuberentes\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/02-getting-started/kuberentes.md\",\"permalinkPath\":\"cloud-runner/v0/getting-started/kuberentes\",\"path\":\"cloud-runner/getting-started/kuberentes\",\"order\":99,\"type\":\"file\"}}},\"configuration\":{\"name\":\"Configuration\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/03-configuration.md\",\"permalinkPath\":\"cloud-runner/v0/configuration\",\"path\":\"cloud-runner/configuration\",\"order\":3,\"type\":\"file\"}},\"command-line\":{\"name\":\"Command line\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/04-command-line.md\",\"permalinkPath\":\"cloud-runner/v0/command-line\",\"path\":\"cloud-runner/command-line\",\"order\":4,\"type\":\"file\"}},\"advanced-topics\":{\"meta\":{\"path\":\"cloud-runner/advanced-topics\",\"order\":5,\"type\":\"folder\"},\"caching\":{\"name\":\"Caching\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/01-caching.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/caching\",\"path\":\"cloud-runner/advanced-topics/caching\",\"order\":1,\"type\":\"file\"}},\"performance\":{\"name\":\"Performance\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/02-performance.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/performance\",\"path\":\"cloud-runner/advanced-topics/performance\",\"order\":2,\"type\":\"file\"}},\"hooks\":{\"name\":\"Hooks\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/03-hooks.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/hooks\",\"path\":\"cloud-runner/advanced-topics/hooks\",\"order\":3,\"type\":\"file\"}},\"custom-steps\":{\"name\":\"Custom steps\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/04-custom-steps.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/custom-steps\",\"path\":\"cloud-runner/advanced-topics/custom-steps\",\"order\":4,\"type\":\"file\"}},\"input-override\":{\"name\":\"Input override\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/05-input-override.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/input-override\",\"path\":\"cloud-runner/advanced-topics/input-override\",\"order\":5,\"type\":\"file\"}},\"garbage-collection\":{\"name\":\"Garbage collection\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/06-garbage-collection.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/garbage-collection\",\"path\":\"cloud-runner/advanced-topics/garbage-collection\",\"order\":6,\"type\":\"file\"}},\"logging\":{\"name\":\"Logging\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/08-logging.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/logging\",\"path\":\"cloud-runner/advanced-topics/logging\",\"order\":8,\"type\":\"file\"}},\"secrets\":{\"name\":\"Secrets\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/08-secrets.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/secrets\",\"path\":\"cloud-runner/advanced-topics/secrets\",\"order\":8,\"type\":\"file\"}},\"github-ephemeral-runners\":{\"name\":\"Github ephemeral runners\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/09-github-ephemeral-runners.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/github-ephemeral-runners\",\"path\":\"cloud-runner/advanced-topics/github-ephemeral-runners\",\"order\":9,\"type\":\"file\"}}}}}},\"docker\":{\"meta\":{\"path\":\"docker\",\"order\":99,\"type\":\"folder\"},\"docker-images\":{\"name\":\"Docker images\",\"meta\":{\"version\":null,\"absolutePath\":\"docker/01-docker-images.md\",\"permalinkPath\":\"docker/docker-images\",\"path\":\"docker/docker-images\",\"order\":1,\"type\":\"file\"}},\"windows-docker-images\":{\"name\":\"Windows docker images\",\"meta\":{\"version\":null,\"absolutePath\":\"docker/02-windows-docker-images.md\",\"permalinkPath\":\"docker/windows-docker-images\",\"path\":\"docker/windows-docker-images\",\"order\":2,\"type\":\"file\"}},\"customize-docker-images\":{\"name\":\"Customize docker images\",\"meta\":{\"version\":null,\"absolutePath\":\"docker/03-customize-docker-images.md\",\"permalinkPath\":\"docker/customize-docker-images\",\"path\":\"docker/customize-docker-images\",\"order\":3,\"type\":\"file\"}}},\"github\":{\"meta\":{\"path\":\"github\",\"order\":99,\"type\":\"folder\"},\"<versions>\":{\"meta\":{\"currentVersion\":\"v2\",\"path\":\"github\",\"type\":\"identifier\"},\"v1\":{\"meta\":{\"path\":\"github/v1\",\"order\":99,\"type\":\"version\"},\"getting-started\":{\"name\":\"Getting started\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/01-getting-started.md\",\"permalinkPath\":\"github/v1/getting-started\",\"path\":\"github/v1/getting-started\",\"order\":1,\"type\":\"file\"}},\"activation\":{\"name\":\"Activation\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/02-activation.md\",\"permalinkPath\":\"github/v1/activation\",\"path\":\"github/v1/activation\",\"order\":2,\"type\":\"file\"}},\"test-runner\":{\"name\":\"Test runner\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/03-test-runner.md\",\"permalinkPath\":\"github/v1/test-runner\",\"path\":\"github/v1/test-runner\",\"order\":3,\"type\":\"file\"}},\"builder\":{\"name\":\"Builder\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/04-builder.md\",\"permalinkPath\":\"github/v1/builder\",\"path\":\"github/v1/builder\",\"order\":4,\"type\":\"file\"}},\"returning-a-license\":{\"name\":\"Returning a license\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/05-returning-a-license.md\",\"permalinkPath\":\"github/v1/returning-a-license\",\"path\":\"github/v1/returning-a-license\",\"order\":5,\"type\":\"file\"}},\"deployment\":{\"meta\":{\"path\":\"github/v1/deployment\",\"order\":6,\"type\":\"folder\"},\"android\":{\"name\":\"Android\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/06-deployment/android.md\",\"permalinkPath\":\"github/v1/deployment/android\",\"path\":\"github/v1/deployment/android\",\"order\":99,\"type\":\"file\"}},\"ios\":{\"name\":\"iOS\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/06-deployment/ios.md\",\"permalinkPath\":\"github/v1/deployment/ios\",\"path\":\"github/v1/deployment/ios\",\"order\":99,\"type\":\"file\"}}}},\"v2\":{\"meta\":{\"path\":\"github\",\"order\":99,\"type\":\"version\"},\"getting-started\":{\"name\":\"Getting started\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/01-getting-started.md\",\"permalinkPath\":\"github/v2/getting-started\",\"path\":\"github/getting-started\",\"order\":1,\"type\":\"file\"}},\"activation\":{\"name\":\"Activation\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/02-activation.md\",\"permalinkPath\":\"github/v2/activation\",\"path\":\"github/activation\",\"order\":2,\"type\":\"file\"}},\"test-runner\":{\"name\":\"Test runner\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/03-test-runner.md\",\"permalinkPath\":\"github/v2/test-runner\",\"path\":\"github/test-runner\",\"order\":3,\"type\":\"file\"}},\"builder\":{\"name\":\"Builder\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/04-builder.md\",\"permalinkPath\":\"github/v2/builder\",\"path\":\"github/builder\",\"order\":4,\"type\":\"file\"}},\"returning-a-license\":{\"name\":\"Returning a license\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/05-returning-a-license.md\",\"permalinkPath\":\"github/v2/returning-a-license\",\"path\":\"github/returning-a-license\",\"order\":5,\"type\":\"file\"}},\"deployment\":{\"meta\":{\"path\":\"github/deployment\",\"order\":15,\"type\":\"folder\"},\"android\":{\"name\":\"Android\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/15-deployment/android.md\",\"permalinkPath\":\"github/v2/deployment/android\",\"path\":\"github/deployment/android\",\"order\":99,\"type\":\"file\"}},\"ios\":{\"name\":\"iOS\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/15-deployment/ios.md\",\"permalinkPath\":\"github/v2/deployment/ios\",\"path\":\"github/deployment/ios\",\"order\":99,\"type\":\"file\"}},\"steam\":{\"name\":\"Steam\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/15-deployment/steam.md\",\"permalinkPath\":\"github/v2/deployment/steam\",\"path\":\"github/deployment/steam\",\"order\":99,\"type\":\"file\"}}}}}},\"gitlab\":{\"meta\":{\"path\":\"gitlab\",\"order\":99,\"type\":\"folder\"},\"getting-started\":{\"name\":\"Getting started\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/01-getting-started.md\",\"permalinkPath\":\"gitlab/getting-started\",\"path\":\"gitlab/getting-started\",\"order\":1,\"type\":\"file\"}},\"activation\":{\"name\":\"Activation\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/02-activation.md\",\"permalinkPath\":\"gitlab/activation\",\"path\":\"gitlab/activation\",\"order\":2,\"type\":\"file\"}},\"example-project\":{\"name\":\"Example project\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/03-example-project.md\",\"permalinkPath\":\"gitlab/example-project\",\"path\":\"gitlab/example-project\",\"order\":3,\"type\":\"file\"}},\"custom-build-options\":{\"name\":\"Custom build options\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/custom-build-options.md\",\"permalinkPath\":\"gitlab/custom-build-options\",\"path\":\"gitlab/custom-build-options\",\"order\":99,\"type\":\"file\"}},\"deployment\":{\"meta\":{\"path\":\"gitlab/deployment\",\"order\":99,\"type\":\"folder\"},\"android\":{\"name\":\"Android\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/deployment/android.md\",\"permalinkPath\":\"gitlab/deployment/android\",\"path\":\"gitlab/deployment/android\",\"order\":99,\"type\":\"file\"}},\"ios\":{\"name\":\"iOS\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/deployment/ios.md\",\"permalinkPath\":\"gitlab/deployment/ios\",\"path\":\"gitlab/deployment/ios\",\"order\":99,\"type\":\"file\"}}},\"tests\":{\"name\":\"Tests\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/tests.md\",\"permalinkPath\":\"gitlab/tests\",\"path\":\"gitlab/tests\",\"order\":99,\"type\":\"file\"}}},\"introduction\":{\"meta\":{\"path\":\"introduction\",\"order\":99,\"type\":\"folder\"},\"getting-started\":{\"name\":\"Getting started\",\"meta\":{\"version\":null,\"absolutePath\":\"introduction/getting-started.md\",\"permalinkPath\":\"introduction/getting-started\",\"path\":\"introduction/getting-started\",\"order\":99,\"type\":\"file\"}}},\"troubleshooting\":{\"meta\":{\"path\":\"troubleshooting\",\"order\":99,\"type\":\"folder\"},\"common-issues\":{\"name\":\"Common issues\",\"meta\":{\"version\":null,\"absolutePath\":\"troubleshooting/common-issues.md\",\"permalinkPath\":\"troubleshooting/common-issues\",\"path\":\"troubleshooting/common-issues\",\"order\":99,\"type\":\"file\"}}}}}");

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

/***/ "./pages/docs/index.js":
/*!*****************************!*\
  !*** ./pages/docs/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_pages_docs_documentation_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/pages/docs/documentation-index */ "./components/pages/docs/documentation-index.tsx");

/* harmony default export */ __webpack_exports__["default"] = (_components_pages_docs_documentation_index__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvZ2FtZS1jaS1icmFuZC1sb2dvLXdvcmRtYXJrLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRleHQvcGFnZS1jb250ZXh0LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2Jhc2UtbGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9uYXYtYmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9uYXYtYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvc2VhcmNoLWJhci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvc2VhcmNoLWJhci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL3NvdXJjZS1saW5rcy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbWFpbi9icmVhZGNydW1iLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L21haW4vYnJlYWRjcnVtYi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcmtkb3duL2NvbXBvbmVudHMvYW5jaG9yLWl0ZW0udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFya2Rvd24vY29tcG9uZW50cy9hbmNob3Itdmlldy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcmtkb3duL2NvbXBvbmVudHMvYW5jaG9yLXZpZXcudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFya2Rvd24vY29tcG9uZW50cy9hcnRpY2xlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcmtkb3duL2NvbXBvbmVudHMvYmxvY2txdW90ZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXJrZG93bi9jb21wb25lbnRzL2NvZGUtYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXJrZG93bi9jb21wb25lbnRzL2VtYmVkZGVkLWxpbmstb3ItcGFyYWdyYXBoLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcmtkb3duL2NvbXBvbmVudHMvaGVhZGluZy13aXRoLWFuY2hvci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXJrZG93bi9jb21wb25lbnRzL2hlYWRpbmcudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWFya2Rvd24vY29tcG9uZW50cy9saXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcmtkb3duL2NvbXBvbmVudHMvbWFya2Rvd24tY29tcG9uZW50cy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21hcmtkb3duL21hcmtkb3duLWNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXJrZG93bi9tYXJrZG93bi1yZW5kZXJlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tYXJrZG93bi9tYXJrZG93bi10by1hbmNob3JzLW1hcHBpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9kb2NzL2RvY3VtZW50YXRpb24taW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZG9jcy9kb2N1bWVudGF0aW9uLWxheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9kb2NzL2RvY3VtZW50YXRpb24tcGFnZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2RvY3MvZG9jdW1lbnRhdGlvbi1wYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2RvY3MvZWRpdC1vbi1naXRodWItbGluay5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VzL2RvY3MvZWRpdC1vbi1naXRodWItbGluay50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9kb2NzL21lbnUvbWVudS1jb250ZXh0LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZG9jcy9tZW51L3ZlcnNpb25lZC1zdWItbWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9kb2NzL21lbnUvdmVyc2lvbmVkLXRpdGxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvZG9jcy9tZW51L3ZlcnNpb25lZC10aXRsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9kb2NzL3NpZGViYXJzL2FuY2hvcnMtc2lkZWJhci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9kb2NzL3NpZGViYXJzL21lbnUtc3RydWN0dXJlLXNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlcy9kb2NzL3NpZGViYXJzL3NpZGViYXJzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9oZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VhcmNoL2NvbmZpZ3VyYXRpb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VhcmNoL3Jlc3VsdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWFyY2gvcmVzdWx0cy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWFyY2gvc3RhdHMudHN4Iiwid2VicGFjazovLy8uL2NvcmUvY29uZmlnLnRzIiwid2VicGFjazovLy8uL2NvcmUvaG9va3MvdXNlLW5vdGlmaWNhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29yZS9ob29rcy91c2UtdG9wLWxldmVsLXJvdXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb3JlL3JvdXRpbmcvdXNlLXBhdGgtc2VnbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbG9naWMvdmVyc2lvbnMvc2VsZWN0ZWQtdmVyc2lvbi1zbGljZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9kb2NzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Rvb2xzL21lbnUvbWVudS1ub2RlLnRzIiwid2VicGFjazovLy8uL3Rvb2xzL21lbnUvbWVudS1zZWdtZW50LnRzIiwid2VicGFjazovLy8uL3Rvb2xzL21lbnUvbWVudS1zdHJ1Y3R1cmUtZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3Rvb2xzL21lbnUvbWVudS1zdHJ1Y3R1cmUtcGFyc2VyLnRzIiwid2VicGFjazovLy8uL3Rvb2xzL21lbnUvbWVudS1zdHJ1Y3R1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vdG9vbHMvc2VhcmNoL3V0aWxzL2V4dHJhY3Qtc2VjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vdG9vbHMvdXRpbHMvZ2V0LWlzb21vcnBoaWMtdmFsdWUudHMiLCJ3ZWJwYWNrOi8vLy4vdG9vbHMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdG9vbHMvdXRpbHMvc2xlZXAudHMiLCJ3ZWJwYWNrOi8vLy4vdG9vbHMvdXRpbHMvc3RyaW5nLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlnaGxpZ2h0LmpzL2xpYi9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYmFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NzaGFycFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2phdmFzY3JpcHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9wb3dlcnNoZWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcnVieVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3R5cGVzY3JpcHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy95YW1sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9hbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbnN0YW50c2VhcmNoLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWluc3RhbnRzZWFyY2gvY29ubmVjdG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbWFya2Rvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlBhZ2VDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwicGVybWFsaW5rUGF0aCIsImFic29sdXRlUGF0aCIsIkNvbnRlbnQiLCJMYXlvdXQiLCJCYXNlTGF5b3V0IiwiY2hpbGRyZW4iLCJzaG93U2VhcmNoIiwic3RpY2t5SGVhZGVyIiwibWluSGVpZ2h0IiwicGFkZGluZ1RvcCIsImRlZmF1bHRQcm9wcyIsIkZvb3RlciIsIkZvb3RlcldyYXBwZXIiLCJ0ZXh0QWxpZ24iLCJ6SW5kZXgiLCJtYXJnaW4iLCJjb2xvciIsIkhlYWRlciIsIkl0ZW0iLCJNZW51IiwiTmF2QmFyIiwiZGVmYXVsdFNlbGVjdGVkS2V5IiwidXNlVG9wTGV2ZWxSb3V0ZSIsImN4Iiwic3R5bGVzIiwibmF2QmFyIiwic3RpY2t5IiwiYnJhbmQiLCJtZW51IiwiZmxleCIsIm1hcmdpbkJvdHRvbSIsIlNlYXJjaEJhciIsInNlYXJjaEZvY3VzZWQiLCJzZXRGb2N1cyIsInVzZVN0YXRlIiwic2VhcmNoSG92ZXJlZCIsInNldFNlYXJjaEhvdmVyZWQiLCJyZXN1bHRzSG92ZXJlZCIsInNldFJlc3VsdHNIb3ZlcmVkIiwiYWN0aXZlIiwic2VhcmNoQmFyIiwicGFkZGluZyIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwic2VhcmNoQm94IiwiZGlzcGxheSIsIm1hcmdpbkxlZnQiLCJJdGVtR3JvdXAiLCJTdWJNZW51IiwiU291cmNlTGlua3MiLCJwcm9wcyIsIkJyZWFkY3J1bWIiLCJCcmVhZGNydW1iV3JhcHBlciIsInNlZ21lbnRzIiwidXNlUGF0aFNlZ21lbnRzIiwibWVudVN0cnVjdHVyZSIsInVzZUNvbnRleHQiLCJNZW51Q29udGV4dCIsImJyZWFkQ3J1bWIiLCJtYXAiLCJ1cmwiLCJuYW1lIiwiTWVudVNlZ21lbnQiLCJpc1ZlcnNpb24iLCJtZW51Tm9kZSIsIk1lbnVTdHJ1Y3R1cmUiLCJnZXROb2RlQnlVcmwiLCJuZWFyZXN0VXJsIiwiTWVudU5vZGUiLCJmaW5kRmlyc3RQYWdlIiwiaHJlZiIsImNhcGl0YWxpc2VkTmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJMaW5rIiwiQW5jaG9yIiwiQW5jaG9ySXRlbSIsImxldmVsIiwidmFsdWUiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJhbmNob3JJZCIsImV4dHJhY3RBbmNob3JJZCIsInBhZGRpbmdMZWZ0IiwiZm9udFNpemUiLCJBbmNob3JWaWV3IiwidGFyZ2V0T2Zmc2V0Iiwic2V0VGFyZ2V0T2Zmc2V0Iiwid2luZG93SGVpZ2h0Iiwic2V0V2luZG93SGVpZ2h0IiwidXNlRWZmZWN0IiwiZWlnaHRQZXJjZW50T2ZTY3JlZW5IZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIm1heERpc3RhbmNlIiwib2Zmc2V0IiwibWluIiwib25SZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFuY2hvcldyYXBwZXIiLCJ0b3BTcGFjZXIiLCJBcnRpY2xlIiwibWFya2Rvd24iLCJCbG9ja3F1b3RlIiwiYmxvY2txdW90ZSIsImhsanMiLCJyZXF1aXJlIiwiQ29kZUJsb2NrIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsInNldFJlZiIsImJpbmQiLCJjb21wb25lbnREaWRNb3VudCIsImhpZ2hsaWdodENvZGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJlbGVtZW50IiwiY29kZUVsIiwicmVuZGVyIiwibGFuZ3VhZ2UiLCJDb3B5QnV0dG9uIiwidG9wIiwicmlnaHQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ1c2VOb3RpZmljYXRpb24iLCJpbmZvIiwibWVzc2FnZSIsImNvZGVCbG9jayIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJQYXJhZ3JhcGgiLCJUeXBvZ3JhcGh5IiwiRW1iZWRkZWRMaW5rIiwiZnJvbUNoaWxkcmVuIiwibGVuZ3RoIiwicG90ZW50aWFsTGluayIsInN0YXJ0c1dpdGgiLCJpc1lvdXR1YmVMaW5rIiwibGluayIsInRlc3QiLCJFcnJvciIsIkVtYmVkZGVkTGlua09yUGFyYWdyYXBoIiwibm9kZSIsInJlZ3VsYXJQYXJhZ3JhcGgiLCJjb3B5VXJsVG9DbGlwYm9hcmQiLCJoYXNoIiwib25TdWNjZXNzIiwib25FcnJvciIsImxvY2F0aW9uIiwiaGFzaEluZGV4IiwiaW5kZXhPZiIsImJhc2VVcmwiLCJ0aGVuIiwib25TdWNjZXNzZnVsbHlDb3BpZWQiLCJub3RpZmljYXRpb24iLCJIZWFkaW5nV2l0aEFuY2hvciIsIm9uQ2xpY2siLCJvbktleVByZXNzIiwiZXZlbnQiLCJrZXlDb2RlIiwiYW5jaG9yIiwiVGl0bGUiLCJIZWFkaW5nIiwiaGVhZGluZyIsImlkIiwidW5kZWZpbmVkIiwiTGlzdCIsIm9yZGVyZWQiLCJsaXN0IiwiTGlzdEl0ZW0iLCJsaXN0SXRlbSIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsInAiLCJociIsIkRpdmlkZXIiLCJvbCIsInVsIiwibGkiLCJjb2RlIiwiaW5saW5lIiwicHJlIiwidGFnTmFtZSIsImRvY3VtZW50IiwibWV0YSIsInNoYXBlIiwidGl0bGUiLCJkYXRlIiwiTWFya2Rvd25SZW5kZXJlciIsIm1ldGFJbmZvcm1hdGlvbiIsInJlcGxhY2UiLCJjb21wb25lbnRzIiwibm90aGluZyIsImJyIiwiZGVsIiwiZW0iLCJpbmxpbmVDb2RlIiwiYSIsImltZyIsIkRvY3VtZW50YXRpb25JbmRleCIsImFsaWduSXRlbXMiLCJEb2N1bWVudGF0aW9uTGF5b3V0IiwiZmxleERpcmVjdGlvbiIsIkRvY3VtZW50YXRpb25QYWdlIiwiY29udGVudCIsImRhdGEiLCJkb2N1bWVudGF0aW9uQ29udGVudCIsIkVkaXRPbkdpdGh1YkxpbmsiLCJyZXBvUGF0aCIsImVkaXRQYXRoIiwiZmlsZVBhdGgiLCJlZGl0T25HaXRIdWJMaW5rIiwiZGVmYXVsdENvbnRleHQiLCJkaXNwbGF5TmFtZSIsInBvcHVsYXRlTWVudVJlY3Vyc2l2ZWx5IiwiY29sbGVjdGlvbiIsInNlbGVjdGlvbnMiLCJPYmplY3QiLCJlbnRyaWVzIiwic2VnbWVudCIsImlzTWV0YSIsImlzUGFnZSIsInBhdGgiLCJpc1ZlcnNpb25Db250YWluZXIiLCJ2ZXJzaW9ucyIsInNlbGVjdGVkVmVyc2lvbiIsInZlcnNpb25TZWdtZW50IiwidmVyc2lvbk5vZGUiLCJ0b1RpdGxlIiwiVmVyc2lvbmVkU3ViTWVudSIsInNlY3Rpb24iLCJpY29uIiwic2VsZWN0ZWRWZXJzaW9ucyIsInVzZVNlbGVjdG9yIiwic2VsZWN0ZWRWZXJzaW9uc1NlbGVjdG9yIiwiZG9jcyIsIm1hcFZlcnNpb25zIiwic2VsZWN0ZWRPcHRpb24iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25DaGFuZ2UiLCJ1cGRhdGVTZWxlY3Rpb24iLCJzZWxlY3Rpb24iLCJ0YXJnZXQiLCJub1Byb3BhZ2F0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwiZmxvYXQiLCJwYWRkaW5nUmlnaHQiLCJ2ZXJzaW9uU2VsZWN0IiwidmVyc2lvbiIsIlZlcnNpb25lZFRpdGxlIiwic2VsZWN0ZWQiLCJoYXNWZXJzaW9uQ29udGFpbmVyIiwiU2lkZXIiLCJBbmNob3JzU2lkZWJhciIsInNpZGViYXIiLCJtYXJrZG93blRvQW5jaG9yc01hcHBpbmciLCJNZW51U3RydWN0dXJlU2lkZWJhciIsImFzUGF0aCIsImN1cnJlbnRLZXkiLCJ1c2VSb3V0ZXIiLCJtYWluIiwiY3VycmVudCIsInNwbGl0Iiwib3BlblNlY3Rpb25zIiwiaGVpZ2h0IiwiQ29uZmlndXJhdGlvbiIsImNvbmZpZyIsInNlYXJjaCIsImhpdHNQZXJQYWdlIiwiUmVzdWx0IiwiaGl0IiwiZG9jc1BhdGgiLCJwZXJtYWxpbmsiLCJsaW5lSGVpZ2h0Iiwic3VtbWFyeSIsIlNlYXJjaFJlc3VsdHMiLCJzZWFyY2hTdGF0ZSIsInNlYXJjaFJlc3VsdHMiLCJuYkhpdHMiLCJ3aWR0aCIsInF1ZXJ5IiwiY29ubmVjdFN0YXRlUmVzdWx0cyIsIlN0YXRzIiwicHJvY2Vzc2luZ1RpbWVNUyIsImZpcmViYXNlIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYmFja2VuZFVybCIsImFwcGxpY2F0aW9uSWQiLCJpbmRleCIsImdldElzb21vcnBoaWNWYWx1ZSIsInB1YmxpY0FwaUtleSIsInNldHRpbmdzIiwic2VhcmNoYWJsZUF0dHJpYnV0ZXMiLCJjdXN0b21SYW5raW5nIiwiYXR0cmlidXRlc0ZvckZhY2V0aW5nIiwiYXR0cmlidXRlRm9yRGlzdGluY3QiLCJub3RpZnkiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJzdWNjZXNzIiwid2FybmluZyIsImVycm9yIiwicGFydHMiLCJuYW1lT2ZSb290U2VnbWVudCIsInBhdGhTZWdtZW50cyIsInVuc2hpZnQiLCJzZWxlY3RlZFZlcnNpb25TbGljZSIsImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiZ2V0Q3VycmVudFZlcnNpb25zIiwicmVkdWNlcnMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZCIsImNoaWxkUmVmIiwiY2xlYW51cCIsImVsIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORF9FUlJPUiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwicm91dGUiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJjaGFuZ2UiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJzc2c0MDQiLCJwYWdlIiwibW9kIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJpc0ZpbGUiLCJpc0ZvbGRlciIsImhhc0NoaWxkcmVuIiwiaGFzIiwidmVyc2lvbkNvbnRhaW5lcklkZW50aWZpZXIiLCJnZXRDdXJyZW50VmVyc2lvbiIsInZlcnNpb25Db250YWluZXJOb2RlIiwiZmluZEZpcnN0UGFnZUluRm9sZGVyIiwiZmlsZU1ldGFzIiwiY29udGFpbmVycyIsImN1cnJlbnRWZXJzaW9uIiwiY29udGFpbmVyIiwibm9ybWFsaXNlVGl0bGUiLCJNZW51U3RydWN0dXJlR2VuZXJhdG9yIiwia2V5QXJyYXkiLCJwZXJtYWxpbmtQYXRoQXJyYXkiLCJzZW9GcmllbmRseVBhdGhBcnJheSIsInZlcnNpb25PZkN1cnJlbnRQYXRoIiwiam9pbiIsInNlb0ZyaWVuZGx5UGF0aCIsInJlc2V0IiwiZ2VuZXJhdGVNZW51U3RydWN0dXJlIiwiZmlsZU5hbWVzIiwibG9nIiwic3RydWN0dXJlIiwiZmlsZU5hbWUiLCJhZGRGcm9tRmlsZSIsInN0cmlwVmVyc2lvbk51bWJlcnNGcm9tTGF0ZXN0VmVyc2lvbkluU2VvRnJpZW5kbHlQYXRoIiwidG9PYmplY3QiLCJ0b1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJhZGRTdHJ1Y3R1cmVGcm9tU2VnbWVudHMiLCJhZGRNZXRhRm9yRmlsZU5vZGUiLCJvcmRlciIsImV4dHJhY3RJbmZvRnJvbVNlZ21lbnQiLCJhZGRTZWdtZW50VG9LZXkiLCJzZXROb2RlVHlwZSIsInNldE5vZGVQYXRoIiwic2V0VmVyc2lvbk9mQ3VycmVudFBhdGgiLCJzZXROb2RlQ3VycmVudFZlcnNpb24iLCJhZGRTZWdtZW50VG9QZXJtYWxpbmtQYXRoIiwiYWRkU2VnbWVudFRvU2VvRnJpZW5kbHlQYXRoIiwic2V0Tm9kZU9yZGVyIiwic2V0Tm9kZVNlb0ZyaWVuZGx5UGF0aCIsInNldE5vZGVOYW1lIiwic2V0Tm9kZVBlcm1hbGlua1BhdGgiLCJzZXROb2RlQWJzb2x1dGVQYXRoIiwic2V0Tm9kZVZlcnNpb24iLCJzb3J0T3JkZXJOdW1iZXJSZWdleCIsImV4dHJhY3RTb3J0T3JkZXJOdW1iZXIiLCJwYXJ0IiwiTnVtYmVyIiwibWF0Y2giLCJzdHJpcFNvcnRPcmRlck51bWJlciIsInJlbW92ZUZvcmJpZGRlbkNoYXJhY3RlcnMiLCJyZXBsYWNlQWxsIiwic2FuaXRpc2VTZWdtZW50IiwiZmxvdyIsImFkZE5vZGVNZXRhIiwicHJldmlvdXNNZXRhIiwiZGVmYXVsdHNEZWVwIiwidXBkYXRlU2VvUGF0aHNSZWN1cnNpdmVseSIsInJlcGxhY2VQYXRoIiwid2l0aFBhdGgiLCJjbGVhbnVwUmVjdXJzaXZlbHkiLCJ1bnNldCIsIk1lbnVTdHJ1Y3R1cmVQYXJzZXIiLCJnZXRGaWxlTWV0YXMiLCJnZW5lcmF0ZUZyb21GaWxlcyIsImZpbGVQYXRocyIsInNhdmUiLCJsb2FkIiwiYXNKc29uIiwicmVhZEZpbGVTeW5jIiwiZnNQYXRoIiwicmVzb2x2ZSIsInNhdmVGaWxlIiwiZW5jb2RpbmciLCJwYXJzZSIsIndyaXRlRmlsZVN5bmMiLCJzbGVlcCIsInNlY3Rpb25zIiwidXJsUGF0aCIsImRldGVybWluZUxldmVsIiwibGluZSIsImV4dHJhY3RUaXRsZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsImZvcmNlU2luZ2xlTGluZSIsImV4dHJhY3RTdW1tYXJ5IiwicmF3Q29udGVudCIsIm1heExlbmd0aCIsImlzSGVhZGluZyIsInBhcnNlTGluZSIsImZpbmFsaXNlUHJldmlvdXNTZWN0aW9uIiwidHJpbUxlZnQiLCJ0cmltUmlnaHQiLCJmaW5hbGlzZWRTZWN0aW9uIiwiY2xvbmVEZWVwIiwiY3JlYXRlU2VjdGlvbkNyZWF0b3IiLCJleHRyYWN0U2VjdGlvbnMiLCJjb250ZW50cyIsImNyZWF0ZU5ld1NlY3Rpb25Gcm9tTGluZSIsImxpbmVzIiwic2tpcHBlZExpbmVzIiwidmFyaWFibGVOYW1lIiwiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsIm1zIiwic2V0VGltZW91dCIsImNhcGl0YWxpemVGaXJzdExldHRlciIsImZpcnN0IiwicmVzdCIsInRvTG9jYWxlVXBwZXJDYXNlIiwiaW5wdXQiLCJzZWFyY2hWYWx1ZSIsInJlcGxhY2VWYWx1ZSIsInJhd0ZpbGVOYW1lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7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LHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2RvY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2RvY3MvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsInZhciBfcGF0aCwgX3BhdGgyO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3ZnR2FtZUNpQnJhbmRMb2dvV29yZG1hcmsocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIF9leHRlbmRzKHtcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIHdpZHRoOiBcIjEwMjRtbVwiLFxuICAgIGhlaWdodDogXCIxMDI0bW1cIixcbiAgICB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIlxuICB9LCBwcm9wcyksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgc3R5bGU6IHtcbiAgICAgIG1peEJsZW5kTW9kZTogXCJub3JtYWxcIlxuICAgIH1cbiAgfSwgX3BhdGggfHwgKF9wYXRoID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0yNDMuMjYzIDY3NS40MTRhMTYuMSAxNi4xIDAgMDEtMTEuNDIxLTQuNzMybC0zNy4zNzItMzcuMzcxYy02LjMxLTYuMzA3LTYuMzEtMTYuNTMyIDAtMjIuODQyIDYuMzEtNi4zMDYgMTYuNTMyLTYuMzA2IDIyLjg0MiAwbDI1Ljk1IDI1Ljk1MSA2My4zMjMtNjMuMzE5YzYuMzEzLTYuMzA3IDE2LjUzNS02LjMwMyAyMi44NDEgMCA2LjMxIDYuMzAzIDYuMzEgMTYuNTMyIDAgMjIuODQxbC03NC43NDMgNzQuNzRhMTYuMTA1IDE2LjEwNSAwIDAxLTExLjQyIDQuNzMyTTI2MC4wNCA0NDEuNjFoLTkyLjcyMmMtMjQuNTMgMC00Mi43My00LjktNTQuNi0xNC43MTUtMTEuODc1LTkuODEtMTcuODA4LTI0LjkyMS0xNy44MDgtNDUuMzMxdi05MS44MzdjMC0yMC40MDYgNS45MzMtMzUuNTE3IDE3LjgwOC00NS4zMjggMTEuODctOS44MTEgMzAuMDctMTQuNzIxIDU0LjYtMTQuNzIxaDczLjU4OWMzLjcyNCAwIDYuNDI1Ljg0IDguMDkxIDIuNTAzIDEuNjcgMS42NyAyLjUwNCA0LjM3MSAyLjUwNCA4LjA5NXYzNS42MThjMCAzLjcyNy0uODM0IDYuNDI2LTIuNTA0IDguMDk1LTEuNjY2IDEuNjY2LTQuMzY3IDIuNS04LjA5MSAyLjVoLTYxLjIyNGMtNi4wODcgMC0xMC41OTggMS4yMjctMTMuNTQxIDMuNjc4LTIuOTQzIDIuNDYtNC40MTUgNi4xMzQtNC40MTUgMTEuMDM4djcwLjM1YzAgNC45MDcgMS4xMjYgOC41MzcgMy4zODYgMTAuODk0IDIuMjUyIDIuMzUzIDUuNjM4IDMuNTMyIDEwLjE1MyAzLjUzMmgyOC41NTF2LTQ1LjkyYzAtMy43MjguODM1LTYuNDI3IDIuNTA0LTguMDk2IDEuNjYzLTEuNjY2IDQuMzY1LTIuNSA4LjA5NS0yLjVoNDUuNjIzYzMuNzI1IDAgNi40MjYuODM0IDguMDk1IDIuNSAxLjY2MyAxLjY3IDIuNSA0LjM2OCAyLjUgOC4wOTV2OTAuOTU1YzAgMy43My0uODM3IDYuNDI5LTIuNSA4LjA5Mi0xLjY2OSAxLjY2OS00LjM3IDIuNTAzLTguMDk1IDIuNTAzTTM4My4zNyAyOTEuNDkybC0xMy44MzQgNDQuNzQxaDQ2LjIxbC0xMy44MzQtNDQuNzQxYy0uNzg3LTEuNzYzLTEuNjE2LTMuMDQtMi41MDQtMy44MjgtLjg4LS43OC0xLjkxLTEuMTc3LTMuMDg3LTEuMTc3aC03LjM2Yy0xLjE3NyAwLTIuMjA2LjM5Ni0zLjA5MSAxLjE3Ny0uODgxLjc4Ny0xLjcyIDIuMDY1LTIuNSAzLjgyOG0tMTYuNzggMTM5LjUyNGMwIDMuNzI3LS44MzUgNi40MjktMi41MDQgOC4wOTItMS42NjYgMS42NjktNC4zNjQgMi41MDQtOC4wOTIgMi41MDRoLTQzLjI3Yy0zLjcyNyAwLTYuNDI2LS44MzUtOC4wOTUtMi41MDQtMS42Ny0xLjY2My0yLjUtNC4zNjUtMi41LTguMDkydi03Ny43MTFjMC01Ljg4Ni45MjgtMTIuNjU3IDIuNzk1LTIwLjMwNiAxLjg2NC03LjY1NiA0Ljc1Ny0xNi41ODYgOC42ODUtMjYuNzg5bDI1LjYwOS02Ni44MTRjMS4xNzYtMy4zMzkgMi45OS01Ljc4OSA1LjQ0My03LjM2IDIuNDUtMS41NyA1LjYzOC0yLjM1NyA5LjU2Ny0yLjM1N2g3OS4xOGMzLjcyNiAwIDYuODE3Ljc4NyA5LjI3IDIuMzU2IDIuNDU0IDEuNTcyIDQuMjcgNC4wMjIgNS40NDcgNy4zNmwyNS42MSA2Ni44MTVjMy45MjEgMTAuMjAzIDYuODE3IDE5LjEzMyA4LjY4IDI2Ljc4OSAxLjg2NCA3LjY0OSAyLjggMTQuNDIgMi44IDIwLjMwNnY3Ny43MTFjMCAzLjcyNy0uODQxIDYuNDI5LTIuNTA0IDguMDkyLTEuNjcgMS42NjktNC4zNjggMi41MDQtOC4wOTUgMi41MDRoLTQ0LjQ0N2MtMy45MjggMC02LjgyLS44MzUtOC42ODUtMi41MDQtMS44NjMtMS42NjMtMi43OTItNC4zNjUtMi43OTItOC4wOTJ2LTQxLjIxMkgzNjYuNTl6bTIwOS4yODMgMTAuNTk0aC00My44NmMtMy43MjggMC02LjQyOS0uODM0LTguMDk1LTIuNTAzLTEuNjctMS42NjMtMi40OTgtNC4zNjItMi40OTgtOC4wOTJWMjQwLjI3NmMwLTMuNzI0LjgyOC02LjQyNSAyLjQ5OC04LjA5NSAxLjY2Ni0xLjY2MyA0LjM2Ny0yLjUwMyA4LjA5NS0yLjUwM2g0Ny4zOTNjMy4xMzQgMCA1LjczOC42OTMgNy43OTYgMi4wNjEgMi4wNjUgMS4zNzcgMy45NzYgMy42MzYgNS43NDIgNi43N2wyNi40OTQgNDcuOThjLjk3NiAxLjc2NyAxLjgxIDMuMDQ0IDIuNSAzLjgyNS42ODQuNzg3IDEuNjE2IDEuMTc3IDIuNzk2IDEuMTc3aDIuNjQ4YzEuMTggMCAyLjEwOC0uMzg5IDIuNzk5LTEuMTc3LjY4NC0uNzggMS41MTUtMi4wNTggMi41LTMuODI1bDI2LjE5Ni00Ny45OGMxLjc3LTMuMTM0IDMuNjgtNS4zOTMgNS43NDItNi43NyAyLjA1OC0xLjM2OCA0LjY1OS0yLjA2MSA3LjgtMi4wNjFoNDcuNjg0YzMuNzI0IDAgNi40MjYuODQgOC4wOTUgMi41MDMgMS42NjMgMS42NyAyLjUwNCA0LjM3MSAyLjUwNCA4LjA5NXYxOTAuNzM5YzAgMy43My0uODQgNi40MjktMi41MDQgOC4wOTItMS42NjkgMS42NjktNC4zNyAyLjUwMy04LjA5NSAyLjUwM2gtNDUuMzMxYy0zLjcyOCAwLTYuNDI2LS44MzQtOC4wOTUtMi41MDMtMS42Ny0xLjY2My0yLjQ5OC00LjM2Mi0yLjQ5OC04LjA5MlYzMjcuNDAzbC0xNy4zNyAzMi4wODVjLTEuNzY2IDMuMzM4LTMuODc3IDUuNzM4LTYuMzI4IDcuMjEtMi40NTMgMS40NzUtNS41NDcgMi4yMDktOS4yNzEgMi4yMDloLTExLjc3MmMtMy43MzQgMC02LjgyMS0uNzM0LTkuMjc1LTIuMjA5LTIuNDU3LTEuNDcyLTQuNTYyLTMuODcyLTYuMzI4LTcuMjFsLTE3LjM2Ny0zMi4wODV2MTAzLjYxMmMwIDMuNzMtLjgzOCA2LjQyOS0yLjUgOC4wOTItMS42NyAxLjY2OS00LjM3MSAyLjUwMy04LjA5NSAyLjUwM20zNDIuNjIyIDBINzgxLjkxN2MtMy43MyAwLTYuNDMyLS44MzQtOC4wOTUtMi41MDMtMS42NzItMS42NjMtMi41LTQuMzYyLTIuNS04LjA5MlYyNDAuMjc2YzAtMy43MjQuODI3LTYuNDI1IDIuNS04LjA5NSAxLjY2My0xLjY2MyA0LjM2NC0yLjUwMyA4LjA5NS0yLjUwM2gxMzYuNTc4YzMuNzI0IDAgNi40MjYuODQgOC4wOTIgMi41MDMgMS42NjYgMS42NyAyLjUwMyA0LjM3MSAyLjUwMyA4LjA5NXYzNC40NDFjMCAzLjcyOC0uODM3IDYuNDI2LTIuNTAzIDguMDkyLTEuNjY2IDEuNjctNC4zNjggMi41MDQtOC4wOTIgMi41MDRIODM3LjI1djIyLjY2Mmg1Ny4zOThjMy43MjggMCA2LjQyNi44MzggOC4wOTUgMi41MDQgMS42NjYgMS42NjYgMi41MDQgNC4zNyAyLjUwNCA4LjA5MnYzMS40OTVjMCAzLjczNC0uODM4IDYuNDMyLTIuNTA0IDguMDk1LTEuNjY5IDEuNjcyLTQuMzY3IDIuNTA0LTguMDk1IDIuNTA0SDgzNy4yNXYyNS4zMTZoODEuMjQ0YzMuNzI0IDAgNi40MjYuODM1IDguMDkyIDIuNDk4IDEuNjY2IDEuNjcyIDIuNTAzIDQuMzcgMi41MDMgOC4wOTV2MzQuNDRjMCAzLjczMS0uODM3IDYuNDMtMi41MDMgOC4wOTMtMS42NjYgMS42NjktNC4zNjggMi41MDMtOC4wOTIgMi41MDNcIixcbiAgICBmaWxsOiBcIiMzZGMwOTRcIlxuICB9KSksIF9wYXRoMiB8fCAoX3BhdGgyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMzAuMzEzIDcwNy42NjRoMjYzLjI2OVY1MzIuNzIzaC0yNjMuMjd6bTI3OS40MjEgMzIuM2gtMjk1LjU3Yy04LjkyIDAtMTYuMTUzLTcuMjMxLTE2LjE1My0xNi4xNTFWNTE2LjU3YzAtOC45MTcgNy4yMzItMTYuMTUgMTYuMTUzLTE2LjE1aDI5NS41N2M4LjkyIDAgMTYuMTUyIDcuMjMzIDE2LjE1MiAxNi4xNXYyMDcuMjQyYzAgOC45Mi03LjIzMiAxNi4xNTItMTYuMTUyIDE2LjE1Mm0tNzkuODM4IDU0LjM1OEgxOTRjLTguOTIgMC0xNi4xNDktNy4yMzItMTYuMTQ5LTE2LjE0OSAwLTguOTIgNy4yMjktMTYuMTU1IDE2LjE0OS0xNi4xNTVoMTM1Ljg5N2M4LjkyIDAgMTYuMTUyIDcuMjM1IDE2LjE1MiAxNi4xNTUgMCA4LjkxNy03LjIzMiAxNi4xNS0xNi4xNTIgMTYuMTVtMzQ0LjA0LTQuNzM1aC05OC4zNDRjLTMzLjU5IDAtNTguNTEyLTYuNzE0LTc0Ljc2NS0yMC4xNTItMTYuMjYyLTEzLjQzMi0yNC4zODUtMzQuMTIxLTI0LjM4NS02Mi4wNjdWNTgyLjAyYzAtMjcuOTQ2IDguMTIzLTQ4LjcwNCAyNC4zODUtNjIuMjcxIDE2LjI1My0xMy41NjQgNDEuMTc0LTIwLjM1NyA3NC43NjUtMjAuMzU3aDk4LjM0NGM1LjEwMSAwIDguNzk4IDEuMTQ5IDExLjA4MiAzLjQzIDIuMjggMi4yODQgMy40MjkgNS45OCAzLjQyOSAxMS4wODJ2NDguNzdjMCA1LjEwNS0xLjE0OCA4LjgtMy40MyAxMS4wODUtMi4yODMgMi4yOC01Ljk4IDMuNDIzLTExLjA4MSAzLjQyM2gtODEuMDEyYy04LjMzMyAwLTE0LjUwOCAxLjY4Mi0xOC41NCA1LjAzNi00LjAzNSAzLjM2Ni02LjA0NiA4LjQwMi02LjA0NiAxNS4xMTd2OTUuOTI0YzAgNi43MiAyLjAxMSAxMS42MjUgNi4wNDYgMTQuNzEyIDQuMDMyIDMuMDk0IDEwLjIwNyA0LjYzNCAxOC41NCA0LjYzNGg4MS4wMTJjNS4xMDEgMCA4Ljc5OCAxLjE0OSAxMS4wODIgMy40MyAyLjI4IDIuMjg0IDMuNDI5IDUuOTggMy40MjkgMTEuMDgydjQ3Ljk2M2MwIDUuMTA1LTEuMTQ4IDguODA0LTMuNDMgMTEuMDgtMi4yODMgMi4yOS01Ljk4IDMuNDI4LTExLjA4MSAzLjQyOG02OC4xMTMgMGMtNS4xMDUgMC04LjgwNy0xLjEzOC0xMS4wODUtMy40MjktMi4yODctMi4yNzUtMy40MjMtNS45NzQtMy40MjMtMTEuMDc5di00Ny45NjNjMC01LjEwMiAxLjEzNi04Ljc5OCAzLjQyMy0xMS4wODIgMi4yNzgtMi4yODEgNS45OC0zLjQzIDExLjA4NS0zLjQzaDM5LjlWNTc3LjE4MmgtMzkuOWMtNS4xMDUgMC04LjgwNy0xLjE0Mi0xMS4wODUtMy40MjMtMi4yODctMi4yODQtMy40MjMtNS45OC0zLjQyMy0xMS4wODV2LTQ4Ljc3YzAtNS4xMDIgMS4xMzYtOC43OTggMy40MjMtMTEuMDgyIDIuMjc4LTIuMjgxIDUuOTgtMy40MyAxMS4wODUtMy40M2gxNzEuN2M1LjEwMiAwIDguNzk1IDEuMTQ5IDExLjA4NSAzLjQzIDIuMjc1IDIuMjg0IDMuNDIzIDUuOTggMy40MjMgMTEuMDgydjQ4Ljc3YzAgNS4xMDUtMS4xNDggOC44LTMuNDIzIDExLjA4NS0yLjI5IDIuMjgtNS45ODMgMy40MjMtMTEuMDg1IDMuNDIzaC0zOS4wOTR2MTM1LjQyM2gzOS4wOTRjNS4xMDIgMCA4Ljc5NSAxLjE0OSAxMS4wODUgMy40MyAyLjI3NSAyLjI4NCAzLjQyMyA1Ljk4IDMuNDIzIDExLjA4MnY0Ny45NjNjMCA1LjEwNS0xLjE0OCA4LjgwNC0zLjQyMyAxMS4wOC0yLjI5IDIuMjktNS45ODMgMy40MjgtMTEuMDg1IDMuNDI4elwiLFxuICAgIGZpbGw6IFwiI2ZmZlwiXG4gIH0pKSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdmdHYW1lQ2lCcmFuZExvZ29Xb3JkbWFyazsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2VDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XHJcbiAgcGVybWFsaW5rUGF0aDogJycsXHJcbiAgYWJzb2x1dGVQYXRoOiAnJyxcclxufSk7XHJcbiIsImltcG9ydCB0eXBlIHsgUmVhY3ROb2RlTGlrZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IE5hdkJhciBmcm9tICcuL2hlYWRlci9uYXYtYmFyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlci9mb290ZXInO1xyXG5cclxuY29uc3QgeyBDb250ZW50IH0gPSBMYXlvdXQ7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVMaWtlO1xyXG4gIHNob3dTZWFyY2g/OiBib29sZWFuO1xyXG4gIHN0aWNreUhlYWRlcj86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IEJhc2VMYXlvdXQgPSAoeyBjaGlsZHJlbiwgc2hvd1NlYXJjaCwgc3RpY2t5SGVhZGVyIH06IFByb3BzKSA9PiAoXHJcbiAgPExheW91dCBzdHlsZT17eyBtaW5IZWlnaHQ6ICcxMDB2aCcgfX0+XHJcbiAgICA8TmF2QmFyIHNob3dTZWFyY2g9e3Nob3dTZWFyY2h9IHN0aWNreUhlYWRlcj17c3RpY2t5SGVhZGVyfSAvPlxyXG4gICAgPENvbnRlbnQgc3R5bGU9e3sgcGFkZGluZ1RvcDogc3RpY2t5SGVhZGVyID8gJzY0cHgnIDogMCB9fT57Y2hpbGRyZW59PC9Db250ZW50PlxyXG4gICAgPEZvb3RlciAvPlxyXG4gIDwvTGF5b3V0PlxyXG4pO1xyXG5cclxuQmFzZUxheW91dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc2hvd1NlYXJjaDogdHJ1ZSxcclxuICBzdGlja3lIZWFkZXI6IGZhbHNlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZUxheW91dDtcclxuIiwiaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IElvTG9nb1ZlcmNlbCB9IGZyb20gJ3JlYWN0LWljb25zL2FsbCc7XHJcblxyXG5jb25zdCB7IEZvb3RlciB9ID0gTGF5b3V0O1xyXG5cclxuY29uc3QgRm9vdGVyV3JhcHBlciA9ICgpID0+IChcclxuICA8Rm9vdGVyIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIHpJbmRleDogNSB9fT5cclxuICAgIE1hZGUgd2l0aCDinaQgYnkgb3BlbiBzb3VyY2UgY29udHJpYnV0b3JzIGFuZCBwb3dlcmVkIGJ5XHJcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Z2FtZS1jaVwiPlxyXG4gICAgICA8SW9Mb2dvVmVyY2VsIGFsdD1cIlZlcmNlbFwiIHNpemU9ezIwfSBzdHlsZT17eyBtYXJnaW46ICcwIDRweCAtMnB4JywgY29sb3I6ICdibGFjaycgfX0gLz5cclxuICAgIDwvYT5cclxuICA8L0Zvb3Rlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcldyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdkJhclwiOiBcIl8yQ1pmdGVyelZRNUw3dmVKQ21Yc0pjXCIsXG5cdFwic3RpY2t5XCI6IFwiXzNtX1NGRUozZU45Z2l6ZnJrQWdNVFhcIixcblx0XCJicmFuZFwiOiBcIl8zSUNwT3c3UDFicEU1R2ptMXBzQmlxXCIsXG5cdFwibWVudVwiOiBcIlVORnhMd2xUcHRCU3g0bDJHeExnQVwiXG59OyIsImltcG9ydCBTZWFyY2hCYXIgZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvc2VhcmNoLWJhcic7XHJcbmltcG9ydCBTb3VyY2VMaW5rcyBmcm9tICdAL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9zb3VyY2UtbGlua3MnO1xyXG5pbXBvcnQgeyB1c2VUb3BMZXZlbFJvdXRlIH0gZnJvbSAnQC9jb3JlL2hvb2tzL3VzZS10b3AtbGV2ZWwtcm91dGUnO1xyXG5pbXBvcnQgeyBMYXlvdXQsIE1lbnUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW9Mb2dvRGlzY29yZCB9IGZyb20gJ3JlYWN0LWljb25zL2FsbCc7XHJcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IEdhbWVDaUxvZ28gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nYW1lLWNpLWJyYW5kLWxvZ28td29yZG1hcmsuc3ZnJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9uYXYtYmFyLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IHsgSGVhZGVyIH0gPSBMYXlvdXQ7XHJcbmNvbnN0IHsgSXRlbSB9ID0gTWVudTtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgc2hvd1NlYXJjaD86IGJvb2xlYW47XHJcbiAgc3RpY2t5SGVhZGVyPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgTmF2QmFyID0gKHsgc2hvd1NlYXJjaCwgc3RpY2t5SGVhZGVyIH06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgZGVmYXVsdFNlbGVjdGVkS2V5ID0gdXNlVG9wTGV2ZWxSb3V0ZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWRlciBjbGFzc05hbWU9e2N4KHN0eWxlcy5uYXZCYXIsIHsgW3N0eWxlcy5zdGlja3ldOiBzdGlja3lIZWFkZXIgfSl9PlxyXG4gICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5icmFuZH0gaHJlZj1cIi9cIj5cclxuICAgICAgICA8R2FtZUNpTG9nbyBoZWlnaHQ9ezY0fSB3aWR0aD17NjR9IC8+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPE1lbnVcclxuICAgICAgICB0aGVtZT1cImRhcmtcIlxyXG4gICAgICAgIG1vZGU9XCJob3Jpem9udGFsXCJcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW51fVxyXG4gICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1tkZWZhdWx0U2VsZWN0ZWRLZXldfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEl0ZW0ga2V5PVwiL1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgPEl0ZW0ga2V5PVwiL2RvY3NcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZG9jc1wiPlxyXG4gICAgICAgICAgICA8YT5Eb2NzPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvSXRlbT5cclxuICAgICAgICB7c2hvd1NlYXJjaCA/IDxTZWFyY2hCYXIgLz4gOiA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0gLz59XHJcbiAgICAgICAgPFNvdXJjZUxpbmtzIC8+XHJcbiAgICAgICAgPEl0ZW0ga2V5PVwiL2Rpc2NvcmRcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGlzY29yZFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8SW9Mb2dvRGlzY29yZCBzaXplPXsyNH0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAtNSB9fSAvPlxyXG4gICAgICAgICAgICAgIERpc2NvcmRcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvSXRlbT5cclxuICAgICAgPC9NZW51PlxyXG4gICAgPC9IZWFkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbk5hdkJhci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc2hvd1NlYXJjaDogZmFsc2UsXHJcbiAgc3RpY2t5SGVhZGVyOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VhcmNoQmFyXCI6IFwiXzIxVElTNmhzcHdGZDg2VVB6c05nQkJcIixcblx0XCJzZWFyY2hCb3hcIjogXCJfMUFxR0JkTV8wZFJsNnZ3VW5UNFU0TFwiXG59OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU2lBbGdvbGlhIH0gZnJvbSAncmVhY3QtaWNvbnMvYWxsJztcclxuaW1wb3J0IHsgU2VhcmNoQm94LCBQYWdpbmF0aW9uIH0gZnJvbSAncmVhY3QtaW5zdGFudHNlYXJjaC1kb20nO1xyXG5pbXBvcnQgQ29uZmlndXJhdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvc2VhcmNoL2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQgU2VhcmNoUmVzdWx0cyBmcm9tICdAL2NvbXBvbmVudHMvc2VhcmNoL3Jlc3VsdHMnO1xyXG5pbXBvcnQgU3RhdHMgZnJvbSAnQC9jb21wb25lbnRzL3NlYXJjaC9zdGF0cyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2VhcmNoLWJhci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaEZvY3VzZWQsIHNldEZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VhcmNoSG92ZXJlZCwgc2V0U2VhcmNoSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Jlc3VsdHNIb3ZlcmVkLCBzZXRSZXN1bHRzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGFjdGl2ZSA9IHNlYXJjaEZvY3VzZWQgfHwgc2VhcmNoSG92ZXJlZCB8fCByZXN1bHRzSG92ZXJlZDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTZWFyY2hIb3ZlcmVkKHRydWUpfVxyXG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNlYXJjaEhvdmVyZWQoZmFsc2UpfVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCYXJ9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZmxleDogMSxcclxuICAgICAgICBwYWRkaW5nOiAnMCAxMCUnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlID8gJyMzNzM0NDUnIDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPENvbmZpZ3VyYXRpb24gLz5cclxuICAgICAgPFNlYXJjaEJveFxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJveH1cclxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRGb2N1cyh0cnVlKX1cclxuICAgICAgICBvbkJsdXI9eygpID0+IHNldEZvY3VzKGZhbHNlKX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImFpcy1yZXN1bHRzLXBhbmVsXCJcclxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFJlc3VsdHNIb3ZlcmVkKHRydWUpfVxyXG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0UmVzdWx0c0hvdmVyZWQoZmFsc2UpfVxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGFjdGl2ZSA/ICdibG9jaycgOiAnbm9uZScgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxQYWdpbmF0aW9uIC8+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiA4IH19IC8+XHJcbiAgICAgICAgPFNlYXJjaFJlc3VsdHMgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFpcy1tZXRhLWluZm9ybWF0aW9uXCI+XHJcbiAgICAgICAgICA8U3RhdHMgLz5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICBQb3dlcmVkIGJ5XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vYWxnb2xpYS5jb20vXCI+XHJcbiAgICAgICAgICAgICAgPFNpQWxnb2xpYSBzaXplPXsyNH0gc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fSAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWlPdXRsaW5lR2l0aHViLCBBaU91dGxpbmVHaXRsYWIgfSBmcm9tICdyZWFjdC1pY29ucy9hbGwnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCB7IEl0ZW0sIEl0ZW1Hcm91cCwgU3ViTWVudSB9ID0gTWVudTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZXZlbnQtYWJicmV2aWF0aW9uc1xyXG5jb25zdCBTb3VyY2VMaW5rcyA9IChwcm9wcykgPT4gKFxyXG4gIDxTdWJNZW51XHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgICBzZWxlY3RhYmxlPXtmYWxzZX1cclxuICAgIGljb249ezxBaU91dGxpbmVHaXRodWIgc2l6ZT17MjR9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogLTUgfX0gLz59XHJcbiAgICB0aXRsZT1cIlNvdXJjZSBjb2RlXCJcclxuICA+XHJcbiAgICA8SXRlbUdyb3VwIHRpdGxlPVwiUHJvamVjdHNcIj5cclxuICAgICAgPEl0ZW0gaWNvbj17PEFpT3V0bGluZUdpdGh1YiAvPn0ga2V5PVwic291cmNlOmdhbWUtY2k6ZG9jdW1lbnRhdGlvblwiPlxyXG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dhbWUtY2kvZG9jdW1lbnRhdGlvblwiPlxyXG4gICAgICAgICAgVGhpcyBXZWJzaXRlXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0l0ZW0+XHJcbiAgICAgIDxJdGVtIGljb249ezxBaU91dGxpbmVHaXRodWIgLz59IGtleT1cInNvdXJjZTpnYW1lLWNpOnZlcnNpb25pbmctYmFja2VuZFwiPlxyXG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dhbWUtY2kvdmVyc2lvbmluZy1iYWNrZW5kXCI+XHJcbiAgICAgICAgICBWZXJzaW9uaW5nIEJhY2tlbmRcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvSXRlbT5cclxuICAgIDwvSXRlbUdyb3VwPlxyXG4gICAgPEl0ZW1Hcm91cCB0aXRsZT1cIkRvY2tlclwiPlxyXG4gICAgICA8SXRlbSBpY29uPXs8QWlPdXRsaW5lR2l0aHViIC8+fSBrZXk9XCJleHRlcm5hbDpnYW1lLWNpOmRvY2tlclwiPlxyXG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dhbWUtY2kvZG9ja2VyXCI+XHJcbiAgICAgICAgICBEb2NrZXIgaW1hZ2VzIGZvciBVbml0eVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9JdGVtPlxyXG4gICAgPC9JdGVtR3JvdXA+XHJcbiAgICA8SXRlbUdyb3VwIHRpdGxlPVwiR2l0bGFiXCI+XHJcbiAgICAgIDxJdGVtIGljb249ezxBaU91dGxpbmVHaXRsYWIgLz59IGtleT1cImV4dGVybmFsOmdhbWUtY2k6dW5pdHkzZC1naXRsYWItY2ktZXhhbXBsZVwiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRsYWIuY29tL2dhbWUtY2kvdW5pdHkzZC1naXRsYWItY2ktZXhhbXBsZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgZ2l0bGFiLWNpIHVuaXR5M2QgZXhhbXBsZSBwcm9qZWN0XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0l0ZW0+XHJcbiAgICA8L0l0ZW1Hcm91cD5cclxuICAgIDxJdGVtR3JvdXAgdGl0bGU9XCJHaXRIdWIgQWN0aW9uc1wiPlxyXG4gICAgICA8SXRlbSBpY29uPXs8QWlPdXRsaW5lR2l0aHViIC8+fSBrZXk9XCJleHRlcm5hbDpnYW1lLWNpOnVuaXR5LWFjdGlvbnNcIj5cclxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9nYW1lLWNpL3VuaXR5LWFjdGlvbnNcIj5cclxuICAgICAgICAgIFVuaXR5IEFjdGlvbnNcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvSXRlbT5cclxuICAgICAgPEl0ZW0gaWNvbj17PEFpT3V0bGluZUdpdGh1YiAvPn0ga2V5PVwiZXh0ZXJuYWw6Z2FtZS1jaTp1bml0eS1yZXF1ZXN0LWFjdGl2YXRpb24tZmlsZVwiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dhbWUtY2kvdW5pdHktcmVxdWVzdC1hY3RpdmF0aW9uLWZpbGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFVuaXR5IFJlcXVlc3QgQWN0aXZhdGlvblxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9JdGVtPlxyXG4gICAgICA8SXRlbSBpY29uPXs8QWlPdXRsaW5lR2l0aHViIC8+fSBrZXk9XCJleHRlcm5hbDpnYW1lLWNpOnVuaXR5LWFjdGl2YXRlXCI+XHJcbiAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2FtZS1jaS91bml0eS1hY3RpdmF0ZVwiPlxyXG4gICAgICAgICAgVW5pdHkgQWN0aXZhdGVcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvSXRlbT5cclxuICAgICAgPEl0ZW0gaWNvbj17PEFpT3V0bGluZUdpdGh1YiAvPn0ga2V5PVwiZXh0ZXJuYWw6Z2FtZS1jaTp1bml0eS10ZXN0LXJ1bm5lclwiPlxyXG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dhbWUtY2kvdW5pdHktdGVzdC1ydW5uZXJcIj5cclxuICAgICAgICAgIFVuaXR5IFRlc3QgUnVubmVyXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0l0ZW0+XHJcbiAgICAgIDxJdGVtIGljb249ezxBaU91dGxpbmVHaXRodWIgLz59IGtleT1cImV4dGVybmFsOmdhbWUtY2k6dW5pdHktYnVpbGRlclwiPlxyXG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dhbWUtY2kvdW5pdHktYnVpbGRlclwiPlxyXG4gICAgICAgICAgVW5pdHkgQnVpbGRlclxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9JdGVtPlxyXG4gICAgICA8SXRlbSBpY29uPXs8QWlPdXRsaW5lR2l0aHViIC8+fSBrZXk9XCJleHRlcm5hbDpnYW1lLWNpOnVuaXR5LXJldHVybi1saWNlbnNlXCI+XHJcbiAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2FtZS1jaS91bml0eS1yZXR1cm4tbGljZW5zZVwiPlxyXG4gICAgICAgICAgVW5pdHkgUmV0dXJuIExpY2Vuc2VcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvSXRlbT5cclxuICAgICAgPEl0ZW0gaWNvbj17PEFpT3V0bGluZUdpdGh1YiAvPn0ga2V5PVwiZXh0ZXJuYWw6Z2FtZS1jaTpzdGVhbS1kZXBsb3lcIj5cclxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9nYW1lLWNpL3N0ZWFtLWRlcGxveVwiPlxyXG4gICAgICAgICAgU3RlYW0gRGVwbG95XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0l0ZW0+XHJcbiAgICA8L0l0ZW1Hcm91cD5cclxuICA8L1N1Yk1lbnU+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb3VyY2VMaW5rcztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVudU5vZGUgfSBmcm9tICdAL3Rvb2xzL21lbnUvbWVudS1ub2RlJztcclxuaW1wb3J0IHsgTWVudVNlZ21lbnQgfSBmcm9tICdAL3Rvb2xzL21lbnUvbWVudS1zZWdtZW50JztcclxuaW1wb3J0IHsgTWVudVN0cnVjdHVyZSB9IGZyb20gJ0AvdG9vbHMvbWVudS9tZW51LXN0cnVjdHVyZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEJyZWFkY3J1bWIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQWlPdXRsaW5lSG9tZSB9IGZyb20gJ3JlYWN0LWljb25zL2FsbCc7XHJcbmltcG9ydCB1c2VQYXRoU2VnbWVudHMgZnJvbSAnQC9jb3JlL3JvdXRpbmcvdXNlLXBhdGgtc2VnbWVudHMnO1xyXG5pbXBvcnQgTWVudUNvbnRleHQgZnJvbSAnLi4vLi4vcGFnZXMvZG9jcy9tZW51L21lbnUtY29udGV4dCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnJlYWRjcnVtYi5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCB7IEl0ZW0gfSA9IEJyZWFkY3J1bWI7XHJcblxyXG5jb25zdCBCcmVhZGNydW1iV3JhcHBlciA9ICgpID0+IHtcclxuICBjb25zdCBzZWdtZW50cyA9IHVzZVBhdGhTZWdtZW50cyg8QWlPdXRsaW5lSG9tZSAvPik7XHJcbiAgY29uc3QgeyBtZW51U3RydWN0dXJlIH0gPSBSZWFjdC51c2VDb250ZXh0KE1lbnVDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCcmVhZGNydW1iIGNsYXNzTmFtZT17c3R5bGVzLmJyZWFkQ3J1bWJ9PlxyXG4gICAgICB7c2VnbWVudHMubWFwKCh7IHVybCwgbmFtZSB9KSA9PiB7XHJcbiAgICAgICAgaWYgKE1lbnVTZWdtZW50LmlzVmVyc2lvbihuYW1lKSkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgLy8gXCIvXCIgaXMgYSBzZWdtZW50IHRvb1xyXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAvLyBJZiBzZWdtZW50IG1hdGNoZXMgZm9sZGVyIGluIGdlbmVyYXRlZCBtZW51LXN0cnVjdHVyZSwgZGV0ZXJtaW5lIGl0cyBmaXJzdCBwYWdlXHJcbiAgICAgICAgY29uc3QgbWVudU5vZGUgPSBNZW51U3RydWN0dXJlLmdldE5vZGVCeVVybChtZW51U3RydWN0dXJlLCB1cmwpO1xyXG4gICAgICAgIGNvbnN0IG5lYXJlc3RVcmwgPSBNZW51Tm9kZS5maW5kRmlyc3RQYWdlKG1lbnVOb2RlKTtcclxuICAgICAgICBjb25zdCBocmVmID0gbmVhcmVzdFVybCA/IGAvZG9jcy8ke25lYXJlc3RVcmx9YCA6IHVybDtcclxuICAgICAgICBjb25zdCBjYXBpdGFsaXNlZE5hbWUgPSBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxJdGVtIGtleT17aHJlZn0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICAgIDxhPntjYXBpdGFsaXNlZE5hbWV9PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L0JyZWFkY3J1bWI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJyZWFkY3J1bWJXcmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJicmVhZENydW1iXCI6IFwiXzVVY2tSOHhqQ1ZFWVZtRXdVLVQyMVwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJlYWN0Tm9kZUxpa2UgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IGV4dHJhY3RBbmNob3JJZCB9IGZyb20gJ0AvdG9vbHMvc2VhcmNoL3V0aWxzL2V4dHJhY3Qtc2VjdGlvbnMnO1xyXG5cclxuY29uc3QgeyBMaW5rIH0gPSBBbmNob3I7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGxldmVsOiBudW1iZXI7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZUxpa2U7XHJcbn1cclxuXHJcbmNvbnN0IEFuY2hvckl0ZW0gPSAoeyBsZXZlbCwgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcclxuICBpZiAobGV2ZWwgPj0gNikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCB2YWx1ZSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pWzBdO1xyXG4gIGNvbnN0IGFuY2hvcklkID0gZXh0cmFjdEFuY2hvcklkKHZhbHVlKTtcclxuXHJcbiAgLy8gc3R5bGVzXHJcbiAgY29uc3QgcGFkZGluZ0xlZnQgPSBsZXZlbCAqIDggLSA4O1xyXG4gIGNvbnN0IGZvbnRTaXplID0gYCR7MTIwIC0gbGV2ZWwgKiAxMH0lYDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQsIGZvbnRTaXplIH19PlxyXG4gICAgICA8TGluayBocmVmPXtgIyR7YW5jaG9ySWR9YH0gdGl0bGU9e3ZhbHVlfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuY2hvckl0ZW07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFuY2hvcldyYXBwZXJcIjogXCJfMmxiTzV6RTBHRUJGV3I4aENhNHVMeFwiLFxuXHRcInRvcFNwYWNlclwiOiBcIi1KVldvX0xoTk1jVjhvQlcxZmxHNFwiXG59OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgUmVhY3ROb2RlTGlrZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2FuY2hvci12aWV3Lm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZUxpa2U7XHJcbn1cclxuXHJcbmNvbnN0IEFuY2hvclZpZXcgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt0YXJnZXRPZmZzZXQsIHNldFRhcmdldE9mZnNldF0gPSB1c2VTdGF0ZTxudW1iZXIgfCB1bmRlZmluZWQ+KCk7XHJcbiAgY29uc3QgW3dpbmRvd0hlaWdodCwgc2V0V2luZG93SGVpZ2h0XSA9IHVzZVN0YXRlPG51bWJlciB8IHVuZGVmaW5lZD4oKTtcclxuXHJcbiAgLy8gVXBkYXRlIG9mZnNldCBiYXNlZCBvbiB3aW5kb3cgc2l6ZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBlaWdodFBlcmNlbnRPZlNjcmVlbkhlaWdodCA9IE1hdGguZmxvb3Iod2luZG93LmlubmVySGVpZ2h0IC8gMTIuNSk7XHJcbiAgICBjb25zdCBtYXhEaXN0YW5jZSA9IDI0OyAvLyBUaGlzIHdpbGwgbmVlZCB0byBiZSBoaWdoZXIgaWYgdGhlcmUncyBhIHN0aWNreSBtZW51IGJhclxyXG4gICAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5taW4oZWlnaHRQZXJjZW50T2ZTY3JlZW5IZWlnaHQsIG1heERpc3RhbmNlKTtcclxuICAgIHNldFRhcmdldE9mZnNldChvZmZzZXQpO1xyXG4gIH0sIFt3aW5kb3dIZWlnaHRdKTtcclxuXHJcbiAgLy8gVXBkYXRlIHdpbmRvdyBzaXplIG9uIHJlc2l6ZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvblJlc2l6ZSA9ICgpID0+IHNldFdpbmRvd0hlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBbmNob3IgY2xhc3NOYW1lPXtzdHlsZXMuYW5jaG9yV3JhcHBlcn0gdGFyZ2V0T2Zmc2V0PXt0YXJnZXRPZmZzZXR9IGFmZml4IHNob3dJbmtJbkZpeGVkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcFNwYWNlcn0gLz5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BbmNob3I+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuY2hvclZpZXc7XHJcbiIsImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tYXJrZG93bi1jb21wb25lbnRzLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxuY29uc3QgQXJ0aWNsZSA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiAoXHJcbiAgPGFydGljbGUgY2xhc3NOYW1lPXtjeCgnYW50LXR5cG9ncmFwaHknLCBzdHlsZXMubWFya2Rvd24pfT57Y2hpbGRyZW59PC9hcnRpY2xlPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZTtcclxuIiwiaW1wb3J0IHsgUmVhY3ROb2RlTGlrZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21hcmtkb3duLWNvbXBvbmVudHMubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlTGlrZTtcclxufVxyXG5cclxuY29uc3QgQmxvY2txdW90ZSA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIDxibG9ja3F1b3RlIGNsYXNzTmFtZT17c3R5bGVzLmJsb2NrcXVvdGV9PntjaGlsZHJlbn08L2Jsb2NrcXVvdGU+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvY2txdW90ZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0ICogYXMgaGxqcyBmcm9tICdoaWdobGlnaHQuanMvbGliL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcblxyXG4vLyBJY29uIGZvciBDb3B5IEJ1dHRvblxyXG5pbXBvcnQgeyBHckNvcHkgfSBmcm9tICdyZWFjdC1pY29ucy9hbGwnO1xyXG5cclxuaW1wb3J0IHsgdXNlTm90aWZpY2F0aW9uIH0gZnJvbSAnQC9jb3JlL2hvb2tzL3VzZS1ub3RpZmljYXRpb24nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWFya2Rvd24tY29tcG9uZW50cy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ3lhbWwnLCByZXF1aXJlKCdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy95YW1sJykpO1xyXG5obGpzLnJlZ2lzdGVyTGFuZ3VhZ2UoJ2NzaGFycCcsIHJlcXVpcmUoJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NzaGFycCcpKTtcclxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCdqYXZhc2NyaXB0JywgcmVxdWlyZSgnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvamF2YXNjcmlwdCcpKTtcclxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCd0eXBlc2NyaXB0JywgcmVxdWlyZSgnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdHlwZXNjcmlwdCcpKTtcclxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCdiYXNoJywgcmVxdWlyZSgnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYmFzaCcpKTtcclxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCdydWJ5JywgcmVxdWlyZSgnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcnVieScpKTtcclxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCdwb3dlcnNoZWxsJywgcmVxdWlyZSgnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcG93ZXJzaGVsbCcpKTtcclxuXHJcbmNsYXNzIENvZGVCbG9jayBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpIHtcclxuICAgIHN1cGVyKHByb3BlcnRpZXMpO1xyXG4gICAgdGhpcy5zZXRSZWYgPSB0aGlzLnNldFJlZi5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmhpZ2hsaWdodENvZGUoKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIHRoaXMuaGlnaGxpZ2h0Q29kZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0UmVmKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuY29kZUVsID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGhpZ2hsaWdodENvZGUoKSB7XHJcbiAgICBobGpzLmhpZ2hsaWdodEJsb2NrKHRoaXMuY29kZUVsKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGxhbmd1YWdlIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIC8vIEFkZCBTdHlsaW5nIHRvIGJ1dHRvbiBoZXJlLlxyXG4gICAgLy8gVE9ETyBkZWNpZGUgaWYgdGhlIGJ1dHRvbiBzaG91bGQgYmUgbGVmdCBvciByaWdodCBhbGlnbmVkLlxyXG4gICAgY29uc3QgQ29weUJ1dHRvbiA9ICgpID0+IChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgIHRvcDogOCxcclxuICAgICAgICAgIHJpZ2h0OiA4LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNoaWxkcmVuWzBdKTtcclxuICAgICAgICAgICAgdXNlTm90aWZpY2F0aW9uKCkuaW5mbyh7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ0NvZGUgQ29waWVkIFN1Y2Nlc3NmdWxseScsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8R3JDb3B5IC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8cHJlIGNsYXNzTmFtZT17c3R5bGVzLmNvZGVCbG9ja30+XHJcbiAgICAgICAgPENvcHlCdXR0b24gLz5cclxuICAgICAgICA8ZGl2IHJlZj17dGhpcy5zZXRSZWZ9IGNsYXNzTmFtZT17YGxhbmd1YWdlLSR7bGFuZ3VhZ2V9YH0+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvcHJlPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkNvZGVCbG9jay5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGFuZ3VhZ2U6ICcnLFxyXG59O1xyXG5cclxuQ29kZUJsb2NrLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZUJsb2NrO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdhbnRkJztcclxuXHJcbmNvbnN0IHsgUGFyYWdyYXBoIH0gPSBUeXBvZ3JhcGh5O1xyXG5cclxuY2xhc3MgRW1iZWRkZWRMaW5rIHtcclxuICBzdGF0aWMgZnJvbUNoaWxkcmVuKGNoaWxkcmVuKSB7XHJcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIGNvbnN0IHBvdGVudGlhbExpbmsgPSBjaGlsZHJlblswXTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgcG90ZW50aWFsTGluayA9PT0gJ3N0cmluZycgJiYgcG90ZW50aWFsTGluay5zdGFydHNXaXRoKCdodHRwczovLycpKSB7XHJcbiAgICAgICAgcmV0dXJuIHBvdGVudGlhbExpbms7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpc1lvdXR1YmVMaW5rKGxpbms6IHN0cmluZykge1xyXG4gICAgLy8gU3RhcnRzIHdpdGggeW91dHViZVxyXG4gICAgaWYgKC9eaHR0cHM6XFwvXFwvd3d3XFwueW91dHViZSgtbm9jb29raWUpP1xcLmNvbS8udGVzdChsaW5rKSkge1xyXG4gICAgICAvLyBVcmwgYXMgZXhwZWN0ZWRcclxuICAgICAgaWYgKCEvXmh0dHBzOlxcL1xcL3d3d1xcLnlvdXR1YmUtbm9jb29raWVcXC5jb21cXC9lbWJlZFxcLy4rJC8udGVzdChsaW5rKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGBGb3VuZCB5b3V0dWJlIGxpbmssIGJ1dCBpdCBpcyBtYWxmb3JtZWQuXHJcbiAgICAgICAgZXhwZWN0ZWQgZm9ybWF0OiBcImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL1hYWFhYWFhYWFhcIlxyXG4gICAgICAgIGJ1dCByZWNlaXZlZDogXCIke2xpbmt9XCJgLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEVtYmVkZGVkTGlua09yUGFyYWdyYXBoID0gKHsgbm9kZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcclxuICBjb25zdCByZWd1bGFyUGFyYWdyYXBoID0gPFBhcmFncmFwaCB7Li4ucHJvcHN9PntjaGlsZHJlbn08L1BhcmFncmFwaD47XHJcblxyXG4gIGNvbnN0IGxpbmsgPSBFbWJlZGRlZExpbmsuZnJvbUNoaWxkcmVuKGNoaWxkcmVuKTtcclxuICBpZiAoIWxpbmspIHJldHVybiByZWd1bGFyUGFyYWdyYXBoO1xyXG5cclxuICBpZiAoRW1iZWRkZWRMaW5rLmlzWW91dHViZUxpbmsobGluaykpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxpZnJhbWVcclxuICAgICAgICB3aWR0aD1cIjU2MFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMzE1XCJcclxuICAgICAgICBzcmM9e2xpbmt9XHJcbiAgICAgICAgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiXHJcbiAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIlxyXG4gICAgICAgIGFsbG93RnVsbFNjcmVlblxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZWd1bGFyUGFyYWdyYXBoO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1iZWRkZWRMaW5rT3JQYXJhZ3JhcGg7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgSGVhZGluZyBmcm9tICdAL2NvbXBvbmVudHMvbWFya2Rvd24vY29tcG9uZW50cy9oZWFkaW5nJztcclxuaW1wb3J0IHsgZXh0cmFjdEFuY2hvcklkIH0gZnJvbSAnQC90b29scy9zZWFyY2gvdXRpbHMvZXh0cmFjdC1zZWN0aW9ucyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWFya2Rvd24tY29tcG9uZW50cy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGxldmVsOiBudW1iZXI7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxuY29uc3QgY29weVVybFRvQ2xpcGJvYXJkID0gKGhhc2gsIG9uU3VjY2VzcyA9ICgpID0+IHt9LCBvbkVycm9yID0gKCkgPT4ge30pID0+IHtcclxuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcclxuXHJcbiAgY29uc3QgaGFzaEluZGV4ID0gaHJlZi5pbmRleE9mKCcjJyk7XHJcbiAgY29uc3QgYmFzZVVybCA9IGhhc2hJbmRleCA+PSAwID8gaHJlZi5zbGljZSgwLCBoYXNoSW5kZXgpIDogaHJlZjtcclxuICBjb25zdCBsaW5rID0gYCR7YmFzZVVybH0jJHtoYXNofWA7XHJcblxyXG4gIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGxpbmspLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcclxufTtcclxuXHJcbmNvbnN0IG9uU3VjY2Vzc2Z1bGx5Q29waWVkID0gKCkgPT4ge1xyXG4gIG5vdGlmaWNhdGlvbi5pbmZvKHtcclxuICAgIG1lc3NhZ2U6IGBMaW5rIHdhcyBjb3BpZWQgdG8gY2xpcGJvYXJkLmAsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBIZWFkaW5nV2l0aEFuY2hvciA9ICh7IGxldmVsLCBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHZhbHVlID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbilbMF07XHJcbiAgY29uc3QgYW5jaG9ySWQgPSBleHRyYWN0QW5jaG9ySWQodmFsdWUpO1xyXG5cclxuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgY29weVVybFRvQ2xpcGJvYXJkKGFuY2hvcklkLCBvblN1Y2Nlc3NmdWxseUNvcGllZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25LZXlQcmVzcyA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIGNvcHlVcmxUb0NsaXBib2FyZChhbmNob3JJZCwgb25TdWNjZXNzZnVsbHlDb3BpZWQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuY2hvciA9IChcclxuICAgIDxzcGFuXHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFuY2hvcn1cclxuICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgIHRhYkluZGV4PXswfVxyXG4gICAgICBvbktleVByZXNzPXtvbktleVByZXNzfVxyXG4gICAgPlxyXG4gICAgICAjXHJcbiAgICA8L3NwYW4+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkaW5nIGxldmVsPXtsZXZlbH0gaWQ9e2FuY2hvcklkfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICB7bGV2ZWwgPj0gMiAmJiBhbmNob3J9XHJcbiAgICA8L0hlYWRpbmc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmdXaXRoQW5jaG9yO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tYXJrZG93bi1jb21wb25lbnRzLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IHsgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGxldmVsOiBudW1iZXI7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBpZD86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgSGVhZGluZyA9ICh7IGxldmVsLCBjaGlsZHJlbiwgLi4ucHJvcHMgfTogUHJvcHMpID0+IHtcclxuICBzd2l0Y2ggKGxldmVsKSB7XHJcbiAgICBjYXNlIDE6XHJcbiAgICBjYXNlIDI6XHJcbiAgICBjYXNlIDM6XHJcbiAgICBjYXNlIDQ6XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRpdGxlIHsuLi5wcm9wc30gbGV2ZWw9e2xldmVsfSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1RpdGxlPlxyXG4gICAgICApO1xyXG4gICAgY2FzZSA1OlxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoNSB7Li4ucHJvcHN9IGNsYXNzTmFtZT17Y3goJ2FudC10eXBvZ3JhcGh5Jywgc3R5bGVzLmhlYWRpbmcpfT5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2g1PlxyXG4gICAgICApO1xyXG4gICAgY2FzZSA2OlxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8aDYgey4uLnByb3BzfSBjbGFzc05hbWU9e2N4KCdhbnQtdHlwb2dyYXBoeScsIHN0eWxlcy5oZWFkaW5nKX0+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9oNj5cclxuICAgICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5IZWFkaW5nLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpZDogdW5kZWZpbmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcclxuIiwiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWFya2Rvd24tY29tcG9uZW50cy5tb2R1bGUuc2Nzcyc7XG5cbmludGVyZmFjZSBMaXN0UHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBvcmRlcmVkPzogYm9vbGVhbjtcbn1cblxuY29uc3QgTGlzdCA9IChwcm9wczogTGlzdFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb3JkZXJlZCwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gIGlmIChvcmRlcmVkKSB7XG4gICAgcmV0dXJuIDxvbCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT57Y2hpbGRyZW59PC9vbD47XG4gIH1cblxuICByZXR1cm4gPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PntjaGlsZHJlbn08L3VsPjtcbn07XG5cbkxpc3QuZGVmYXVsdFByb3BzID0ge1xuICBvcmRlcmVkOiBmYWxzZSxcbn07XG5cbmludGVyZmFjZSBJdGVtUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5jb25zdCBMaXN0SXRlbSA9IChwcm9wczogSXRlbVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gIHJldHVybiA8bGkgY2xhc3NOYW1lPXtjeCgnYW50LXR5cG9ncmFwaHknLCBzdHlsZXMubGlzdEl0ZW0pfT57Y2hpbGRyZW59PC9saT47XG59O1xuXG5leHBvcnQgeyBMaXN0LCBMaXN0SXRlbSB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFya2Rvd25cIjogXCJpS2ZIUjBPZXVFSVUyNFhKNWM1U0xcIixcblx0XCJibG9ja3F1b3RlXCI6IFwiXzE2UEM2NzlIc3JQcnk2NWxkUlExOWJcIixcblx0XCJjb2RlQmxvY2tcIjogXCJfMXZLS2ZjcUFNY3JMd1ZrVnVLUmFNR1wiLFxuXHRcImhlYWRpbmdcIjogXCJfMWFQT3F5NkJUSmxrRWpuWTNRanNFbVwiLFxuXHRcImFuY2hvclwiOiBcIlpaSXBHSEFmc3owQW1sdUtnUWpPTlwiXG59OyIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCBCbG9ja3F1b3RlIGZyb20gJy4vY29tcG9uZW50cy9ibG9ja3F1b3RlJztcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSAnLi9jb21wb25lbnRzL2NvZGUtYmxvY2snO1xuaW1wb3J0IEVtYmVkZGVkTGlua09yUGFyYWdyYXBoIGZyb20gJy4vY29tcG9uZW50cy9lbWJlZGRlZC1saW5rLW9yLXBhcmFncmFwaCc7XG5pbXBvcnQgeyBMaXN0LCBMaXN0SXRlbSB9IGZyb20gJy4vY29tcG9uZW50cy9saXN0JztcbmltcG9ydCBIZWFkaW5nV2l0aEFuY2hvciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGluZy13aXRoLWFuY2hvcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaDE6ICh7IG5vZGUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPEhlYWRpbmdXaXRoQW5jaG9yIGxldmVsPXsxfSB7Li4ucHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvSGVhZGluZ1dpdGhBbmNob3I+XG4gICksXG4gIGgyOiAoeyBub2RlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxIZWFkaW5nV2l0aEFuY2hvciBsZXZlbD17Mn0gey4uLnByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0hlYWRpbmdXaXRoQW5jaG9yPlxuICApLFxuICBoMzogKHsgbm9kZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgICA8SGVhZGluZ1dpdGhBbmNob3IgbGV2ZWw9ezN9IHsuLi5wcm9wc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9IZWFkaW5nV2l0aEFuY2hvcj5cbiAgKSxcbiAgaDQ6ICh7IG5vZGUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPEhlYWRpbmdXaXRoQW5jaG9yIGxldmVsPXs0fSB7Li4ucHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvSGVhZGluZ1dpdGhBbmNob3I+XG4gICksXG4gIGg1OiAoeyBub2RlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxIZWFkaW5nV2l0aEFuY2hvciBsZXZlbD17NX0gey4uLnByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0hlYWRpbmdXaXRoQW5jaG9yPlxuICApLFxuICBoNjogKHsgbm9kZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgICA8SGVhZGluZ1dpdGhBbmNob3IgbGV2ZWw9ezZ9IHsuLi5wcm9wc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9IZWFkaW5nV2l0aEFuY2hvcj5cbiAgKSxcbiAgcDogRW1iZWRkZWRMaW5rT3JQYXJhZ3JhcGgsXG4gIGhyOiBEaXZpZGVyLFxuICBvbDogKHsgbm9kZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgICA8TGlzdCB7Li4ucHJvcHN9IG9yZGVyZWQ+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9MaXN0PlxuICApLFxuICB1bDogKHsgbm9kZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IDxMaXN0IHsuLi5wcm9wc30+e2NoaWxkcmVufTwvTGlzdD4sXG4gIGxpOiBMaXN0SXRlbSxcbiAgY29kZTogKHsgbm9kZSwgaW5saW5lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT5cbiAgICBpbmxpbmUgPyA8Y29kZSB7Li4ucHJvcHN9PntjaGlsZHJlbn08L2NvZGU+IDogPENvZGVCbG9jayB7Li4ucHJvcHN9PntjaGlsZHJlbn08L0NvZGVCbG9jaz4sXG5cbiAgLy8gQ3JlYXRlZCBhIGN1c3RvbSBwcmUgZWxlbWVudCB3aGljaCBjaGVja3MgaWYgY29kZSBlbGVtZW50IGlzIGVtYmVkZGVkIG9yIG5vdC5cbiAgcHJlOiAoeyBub2RlLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgaWYgKG5vZGUuY2hpbGRyZW4/Lmxlbmd0aCA9PT0gMSAmJiBub2RlLmNoaWxkcmVuWzBdLnRhZ05hbWUgPT09ICdjb2RlJykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgIH1cblxuICAgIHJldHVybiA8cHJlPntjaGlsZHJlbn08L3ByZT47XG4gIH0sXG4gIGJsb2NrcXVvdGU6IEJsb2NrcXVvdGUsXG59O1xuIiwiaW1wb3J0IEFydGljbGUgZnJvbSAnQC9jb21wb25lbnRzL21hcmtkb3duL2NvbXBvbmVudHMvYXJ0aWNsZSc7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5pbXBvcnQgUHJvcFR5cGVzLCB7IEluZmVyUHJvcHMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjb21wb25lbnRzIGZyb20gJy4vbWFya2Rvd24tY29tcG9uZW50cyc7XG5pbXBvcnQgRWRpdE9uR2l0aHViTGluayBmcm9tICcuLi9wYWdlcy9kb2NzL2VkaXQtb24tZ2l0aHViLWxpbmsnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGRvY3VtZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG1ldGE6IFByb3BUeXBlcy5zaGFwZSh7IHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLCBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nIH0pLmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBNYXJrZG93blJlbmRlcmVyID0gKHsgZG9jdW1lbnQsIG1ldGEgfTogSW5mZXJQcm9wczx0eXBlb2YgcHJvcFR5cGVzPikgPT4ge1xuICBjb25zdCB7IHRpdGxlID0gJycsIGRhdGUgPSAnJyB9ID0gbWV0YTtcbiAgY29uc3QgbWV0YUluZm9ybWF0aW9uID0gYCR7ZGF0ZX0gLSAke3RpdGxlfWAucmVwbGFjZSgvKF5cXHMtXFxzKXwoXFxzLVxccyQpLywgJycpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdWI+e21ldGFJbmZvcm1hdGlvbn08L3N1Yj5cbiAgICAgIDxBcnRpY2xlPlxuICAgICAgICB7LyogQHRzLWlnbm9yZSAvLyB0b2RvIC0gZml4IHR5cGUgcHJvcGVybHkgKi99XG4gICAgICAgIDxSZWFjdE1hcmtkb3duIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9Pntkb2N1bWVudH08L1JlYWN0TWFya2Rvd24+XG4gICAgICA8L0FydGljbGU+XG4gICAgICA8RWRpdE9uR2l0aHViTGluayAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTWFya2Rvd25SZW5kZXJlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtkb3duUmVuZGVyZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG5pbXBvcnQgQW5jaG9ySXRlbSBmcm9tICdAL2NvbXBvbmVudHMvbWFya2Rvd24vY29tcG9uZW50cy9hbmNob3ItaXRlbSc7XG5cbmNvbnN0IG5vdGhpbmcgPSAoKSA9PiBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGgxOiAoeyBub2RlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxBbmNob3JJdGVtIGxldmVsPXsxfSB7Li4ucHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQW5jaG9ySXRlbT5cbiAgKSxcbiAgaDI6ICh7IG5vZGUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPEFuY2hvckl0ZW0gbGV2ZWw9ezJ9IHsuLi5wcm9wc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BbmNob3JJdGVtPlxuICApLFxuICBoMzogKHsgbm9kZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgICA8QW5jaG9ySXRlbSBsZXZlbD17M30gey4uLnByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FuY2hvckl0ZW0+XG4gICksXG4gIGg0OiAoeyBub2RlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICAgIDxBbmNob3JJdGVtIGxldmVsPXs0fSB7Li4ucHJvcHN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQW5jaG9ySXRlbT5cbiAgKSxcbiAgaDU6ICh7IG5vZGUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gICAgPEFuY2hvckl0ZW0gbGV2ZWw9ezV9IHsuLi5wcm9wc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BbmNob3JJdGVtPlxuICApLFxuICBoNjogKHsgbm9kZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgICA8QW5jaG9ySXRlbSBsZXZlbD17Nn0gey4uLnByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0FuY2hvckl0ZW0+XG4gICksXG4gIC8qIHJlc3QgaXMgbm90IHJlbmRlcmVkICovXG4gIGJyOiBub3RoaW5nLFxuICBkZWw6IG5vdGhpbmcsXG4gIGVtOiBub3RoaW5nLFxuICBwOiBub3RoaW5nLFxuICB1bDogbm90aGluZyxcbiAgb2w6IG5vdGhpbmcsXG4gIGxpOiBub3RoaW5nLFxuICBjb2RlOiBub3RoaW5nLFxuICBpbmxpbmVDb2RlOiBub3RoaW5nLFxuICBibG9ja3F1b3RlOiBub3RoaW5nLFxuICBhOiBub3RoaW5nLFxuICBpbWc6IG5vdGhpbmcsXG59O1xuIiwiaW1wb3J0IERvY3VtZW50YXRpb25QYWdlIGZyb20gJ0AvY29tcG9uZW50cy9wYWdlcy9kb2NzL2RvY3VtZW50YXRpb24tcGFnZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IElvTG9nb0Rpc2NvcmQsIElvTG9nb0dpdGh1YiB9IGZyb20gJ3JlYWN0LWljb25zL2FsbCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaGVhZGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3VtZW50YXRpb25JbmRleCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERvY3VtZW50YXRpb25QYWdlPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJhbnQtdHlwb2dyYXBoeVwiPlxyXG4gICAgICAgIDxoMT5XZWxjb21lIHRvIEdhbWVDSTwvaDE+XHJcblxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgVGhpcyBzaXRlIGhvc3RzIGFsbCBkb2N1bWVudGF0aW9uIGZvciBHYW1lQ0ksIGFuZCB3aWxsIGhlbHAgeW91IHNldHVwIENvbnRpbnVvdXNcclxuICAgICAgICAgIEludGVncmF0aW9uIGZvciB5b3VyIGdhbWUgcHJvamVjdHMuXHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIENvbnRpbnVvdXMgSW50ZWdyYXRpb24gaXMgYSB3aWRlbHktdXNlZCBwcmFjdGljZSB3aGVyZSBhdXRvbWF0ZWQgcGlwZWxpbmVzIGNoZWNrIHRoZVxyXG4gICAgICAgICAgbGF0ZXN0IGNvZGUgY2hhbmdlcyBhY3R1YWxseSB3b3JrLCBiZWZvcmUgbWVyZ2luZyB0aGVtIGludG8gdGhlIG1haW4gYnJhbmNoLiBUaGlzIGhlbHBzXHJcbiAgICAgICAgICBkZXZlbG9wZXJzIHN0YXkgaW4gdGhlIGZsb3cgYW5kIHJlbGVhc2UgZmFzdGVyIGFuZCAodWx0aW1hdGVseSkgd2l0aCBtb3JlIGNvbmZpZGVuY2UuXHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8cCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgPHNwYW4+Rm9sbG93IHRoZSBkZXZlbG9wbWVudCBvbiZuYnNwOzwvc3Bhbj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2FtZS1jaS9kb2N1bWVudGF0aW9uXCI+XHJcbiAgICAgICAgICAgIDxJb0xvZ29HaXRodWIgdGl0bGU9XCJHaXRIdWJcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgdGl0bGU9XCJHYW1lQ0kgZGlzY29yZCB3aWRnZXRcIlxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9kaXNjb3JkLmNvbS93aWRnZXQ/aWQ9NzEwOTQ2MzQzODI4NDU1NDU1JnRoZW1lPWRhcmtcIlxyXG4gICAgICAgICAgd2lkdGg9XCIzNTBcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiNTAwXCJcclxuICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXHJcbiAgICAgICAgICBzYW5kYm94PVwiYWxsb3ctcG9wdXBzIGFsbG93LXBvcHVwcy10by1lc2NhcGUtc2FuZGJveCBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICA8c3Bhbj5Kb2luIHRoZSBkaXNjdXNzaW9uIG9uJm5ic3A7PC9zcGFuPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9kaXNjb3JkXCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxJb0xvZ29EaXNjb3JkIHRpdGxlPVwiR2FtZUNJIERpc2NvcmRcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L0RvY3VtZW50YXRpb25QYWdlPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IEJhc2VMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9iYXNlLWxheW91dCc7XHJcbmltcG9ydCB0eXBlIHsgUmVhY3ROb2RlTGlrZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSAnLi4vLi4vbGF5b3V0L21haW4vYnJlYWRjcnVtYic7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGVMaWtlO1xyXG4gIHNob3dTZWFyY2g/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBEb2N1bWVudGF0aW9uTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHNob3dTZWFyY2ggfTogUHJvcHMpID0+IChcclxuICA8QmFzZUxheW91dCBzaG93U2VhcmNoPXtzaG93U2VhcmNofT5cclxuICAgIDxCcmVhZGNydW1iIC8+XHJcbiAgICA8TGF5b3V0XHJcbiAgICAgIGhhc1NpZGVyXHJcbiAgICAgIGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0LWJhY2tncm91bmRcIlxyXG4gICAgICBzdHlsZT17eyBwYWRkaW5nOiAnMTJweCAwJywgZmxleERpcmVjdGlvbjogJ3JvdycgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgPC9CYXNlTGF5b3V0PlxyXG4pO1xyXG5cclxuRG9jdW1lbnRhdGlvbkxheW91dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgc2hvd1NlYXJjaDogdHJ1ZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50YXRpb25MYXlvdXQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRvY3VtZW50YXRpb25Db250ZW50XCI6IFwiUnhzQ241b0JuQnk0dU5nVWZIeXZrXCJcbn07IiwiaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBNYXJrZG93blJlbmRlcmVyIGZyb20gJ0AvY29tcG9uZW50cy9tYXJrZG93bi9tYXJrZG93bi1yZW5kZXJlcic7XHJcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbnRleHQvcGFnZS1jb250ZXh0JztcclxuaW1wb3J0IHsgUmVhY3ROb2RlTGlrZSB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgRG9jdW1lbnRhdGlvbkxheW91dCBmcm9tICcuL2RvY3VtZW50YXRpb24tbGF5b3V0JztcclxuaW1wb3J0IE1lbnVTdHJ1Y3R1cmVTaWRlYmFyIGZyb20gJy4vc2lkZWJhcnMvbWVudS1zdHJ1Y3R1cmUtc2lkZWJhcic7XHJcbmltcG9ydCBBbmNob3JzU2lkZWJhciBmcm9tICcuL3NpZGViYXJzL2FuY2hvcnMtc2lkZWJhcic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZG9jdW1lbnRhdGlvbi1wYWdlLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IHsgQ29udGVudCB9ID0gTGF5b3V0O1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjb250ZW50Pzogc3RyaW5nO1xyXG4gIGRhdGE/OiB7IHRpdGxlOiBzdHJpbmc7IGRhdGU6IHN0cmluZyB9O1xyXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlTGlrZTtcclxuICBtZXRhPzogYW55O1xyXG59XHJcblxyXG5jb25zdCBEb2N1bWVudGF0aW9uUGFnZSA9ICh7IGNvbnRlbnQsIGRhdGEsIG1ldGEsIGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bWV0YX0+XHJcbiAgICAgIDxEb2N1bWVudGF0aW9uTGF5b3V0PlxyXG4gICAgICAgIDxNZW51U3RydWN0dXJlU2lkZWJhciAvPlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8Q29udGVudCBjbGFzc05hbWU9e3N0eWxlcy5kb2N1bWVudGF0aW9uQ29udGVudH0+XHJcbiAgICAgICAgICAgIHtjb250ZW50ICYmIDxNYXJrZG93blJlbmRlcmVyIG1ldGE9e2RhdGF9IGRvY3VtZW50PXtjb250ZW50fSAvPn1cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIHtjb250ZW50ICYmIDxBbmNob3JzU2lkZWJhciBkb2N1bWVudD17Y29udGVudH0gLz59XHJcbiAgICAgIDwvRG9jdW1lbnRhdGlvbkxheW91dD5cclxuICAgIDwvUGFnZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkRvY3VtZW50YXRpb25QYWdlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBjb250ZW50OiB1bmRlZmluZWQsXHJcbiAgZGF0YTogeyB0aXRsZTogJycsIGRhdGU6ICcnIH0sXHJcbiAgY2hpbGRyZW46IG51bGwsXHJcbiAgbWV0YTogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50YXRpb25QYWdlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJlZGl0T25HaXRIdWJMaW5rXCI6IFwiXzJ3ZkZ3Q2pVNklOY0ZVM3pMMEphbHVcIlxufTsiLCJpbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJ0AvY29tcG9uZW50cy9jb250ZXh0L3BhZ2UtY29udGV4dCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVHaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy9hbGwnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2VkaXQtb24tZ2l0aHViLWxpbmsubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgRWRpdE9uR2l0aHViTGluayA9ICgpID0+IHtcclxuICBjb25zdCB7IGFic29sdXRlUGF0aCB9ID0gdXNlQ29udGV4dChQYWdlQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHJlcG9QYXRoID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9nYW1lLWNpL2RvY3VtZW50YXRpb24nO1xyXG4gIGNvbnN0IGVkaXRQYXRoID0gJ2VkaXQvbWFpbic7XHJcbiAgY29uc3QgZmlsZVBhdGggPSBgZG9jcy8ke2Fic29sdXRlUGF0aH1gO1xyXG5cclxuICBjb25zdCBocmVmID0gYWJzb2x1dGVQYXRoID8gYCR7cmVwb1BhdGh9LyR7ZWRpdFBhdGh9LyR7ZmlsZVBhdGh9YCA6IGAke3JlcG9QYXRofWA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmVkaXRPbkdpdEh1Ykxpbmt9XHJcbiAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgaWNvbj17PEFpT3V0bGluZUdpdGh1YiAvPn1cclxuICAgICAgaHJlZj17aHJlZn1cclxuICAgID5cclxuICAgICAgRWRpdCBvbiBHaXRIdWJcclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0T25HaXRodWJMaW5rO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbWVudVN0cnVjdHVyZSBmcm9tICdAL2NvcmUvbWVudS1zdHJ1Y3R1cmUuanNvbic7XHJcblxyXG5jb25zdCBkZWZhdWx0Q29udGV4dCA9IHsgbWVudVN0cnVjdHVyZSB9O1xyXG5cclxuY29uc3QgTWVudUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KGRlZmF1bHRDb250ZXh0KTtcclxuTWVudUNvbnRleHQuZGlzcGxheU5hbWUgPSAnTWVudUNvbnRleHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUNvbnRleHQ7XHJcbiIsImltcG9ydCB7IE1lbnVOb2RlIH0gZnJvbSAnQC90b29scy9tZW51L21lbnUtbm9kZSc7XHJcbmltcG9ydCB7IE1lbnVTZWdtZW50IH0gZnJvbSAnQC90b29scy9tZW51L21lbnUtc2VnbWVudCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBWZXJzaW9uZWRUaXRsZSBmcm9tICdAL2NvbXBvbmVudHMvcGFnZXMvZG9jcy9tZW51L3ZlcnNpb25lZC10aXRsZSc7XHJcbmltcG9ydCBNZW51Q29udGV4dCBmcm9tICdAL2NvbXBvbmVudHMvcGFnZXMvZG9jcy9tZW51L21lbnUtY29udGV4dCc7XHJcbmltcG9ydCB7IFJlYWN0Tm9kZUxpa2UgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNlbGVjdGVkVmVyc2lvbnNTZWxlY3RvciB9IGZyb20gJ0AvbG9naWMvdmVyc2lvbnMvc2VsZWN0ZWQtdmVyc2lvbi1zbGljZSc7XHJcblxyXG5jb25zdCB7IFN1Yk1lbnUsIEl0ZW0gfSA9IE1lbnU7XHJcblxyXG5jb25zdCBwb3B1bGF0ZU1lbnVSZWN1cnNpdmVseSA9IChjb2xsZWN0aW9uOiBNZW51Tm9kZSwgc2VsZWN0aW9ucykgPT4ge1xyXG4gIC8vIFRvZG8gc29ydGluZyBieSBpdGVtLm1ldGEub3JkZXJcclxuICByZXR1cm4gbWFwKE9iamVjdC5lbnRyaWVzKGNvbGxlY3Rpb24pLCAoW3NlZ21lbnQsIG5vZGVdKSA9PiB7XHJcbiAgICBpZiAoTWVudVNlZ21lbnQuaXNNZXRhKHNlZ21lbnQpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChNZW51Tm9kZS5pc1BhZ2Uobm9kZSkpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8SXRlbSBrZXk9e2AvZG9jcy8ke25vZGUubWV0YS5wYXRofWB9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9kb2NzL1suLi5kb2N1bWVudGF0aW9uLXBhZ2VdXCIgYXM9e2AvZG9jcy8ke25vZGUubWV0YS5wYXRofWB9PlxyXG4gICAgICAgICAgICA8YT57bm9kZS5uYW1lfTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE1lbnVTZWdtZW50LmlzVmVyc2lvbkNvbnRhaW5lcihzZWdtZW50KSkge1xyXG4gICAgICBjb25zdCB7IG1ldGEsIC4uLnZlcnNpb25zIH0gPSBub2RlO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZFZlcnNpb24gPSBzZWxlY3Rpb25zW21ldGEucGF0aF07XHJcbiAgICAgIHJldHVybiBtYXAoT2JqZWN0LmVudHJpZXModmVyc2lvbnMpLCAoW3ZlcnNpb25TZWdtZW50LCB2ZXJzaW9uTm9kZV0pID0+IHtcclxuICAgICAgICAvLyBUb2RvIC0gdGFrZSBoYXJkY29kZWQgc2VsZWN0ZWQgdmVyc2lvbiBmcm9tIGdsb2JhbGx5IHNlbGVjdGVkIHZlcnNpb24gZm9yIG1ldGEuc2VjdGlvblxyXG4gICAgICAgIHJldHVybiB2ZXJzaW9uU2VnbWVudCA9PT0gc2VsZWN0ZWRWZXJzaW9uXHJcbiAgICAgICAgICA/IHBvcHVsYXRlTWVudVJlY3Vyc2l2ZWx5KHZlcnNpb25Ob2RlLCBzZWxlY3Rpb25zKVxyXG4gICAgICAgICAgOiBbXTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29udGFpbmVyIHdpdGggbWVudSBpdGVtc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN1Yk1lbnUga2V5PXtub2RlLm1ldGEucGF0aH0gdGl0bGU9e01lbnVTZWdtZW50LnRvVGl0bGUoc2VnbWVudCl9PlxyXG4gICAgICAgIHtwb3B1bGF0ZU1lbnVSZWN1cnNpdmVseShub2RlLCBzZWxlY3Rpb25zKX1cclxuICAgICAgPC9TdWJNZW51PlxyXG4gICAgKTtcclxuICB9KTtcclxufTtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgc2VjdGlvbjogc3RyaW5nO1xyXG4gIHRpdGxlOiBSZWFjdE5vZGVMaWtlO1xyXG4gIGljb246IFJlYWN0Tm9kZUxpa2U7XHJcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVMaWtlO1xyXG59XHJcbmNvbnN0IFZlcnNpb25lZFN1Yk1lbnUgPSAoeyBzZWN0aW9uLCB0aXRsZSwgaWNvbiwgY2hpbGRyZW4sIC4uLnByb3BzIH06IFByb3BzKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRWZXJzaW9ucyA9IHVzZVNlbGVjdG9yKHNlbGVjdGVkVmVyc2lvbnNTZWxlY3Rvcik7XHJcbiAgY29uc3QgeyBtZW51U3RydWN0dXJlIH0gPSB1c2VDb250ZXh0KE1lbnVDb250ZXh0KTtcclxuICBjb25zdCB7IGRvY3MgfSA9IG1lbnVTdHJ1Y3R1cmU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3ViTWVudSB7Li4ucHJvcHN9IGljb249e2ljb259IHRpdGxlPXs8VmVyc2lvbmVkVGl0bGUgc2VjdGlvbj17c2VjdGlvbn0gdGl0bGU9e3RpdGxlfSAvPn0+XHJcbiAgICAgIHtwb3B1bGF0ZU1lbnVSZWN1cnNpdmVseShkb2NzW3NlY3Rpb25dLCBzZWxlY3RlZFZlcnNpb25zKX1cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdWJNZW51PlxyXG4gICk7XHJcbn07XHJcblxyXG5WZXJzaW9uZWRTdWJNZW51LmRlZmF1bHRQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlcnNpb25lZFN1Yk1lbnU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInZlcnNpb25TZWxlY3RcIjogXCJfMXc3MVc4cHQzd0RHaDBaUnU3ZzZ6TlwiXG59OyIsImltcG9ydCB7IE1lbnVOb2RlIH0gZnJvbSAnQC90b29scy9tZW51L21lbnUtbm9kZSc7XG5pbXBvcnQgeyBNZW51U2VnbWVudCB9IGZyb20gJ0AvdG9vbHMvbWVudS9tZW51LXNlZ21lbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdE5vZGVMaWtlIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IE1lbnVDb250ZXh0IGZyb20gJ0AvY29tcG9uZW50cy9wYWdlcy9kb2NzL21lbnUvbWVudS1jb250ZXh0JztcbmltcG9ydCB7IHNlbGVjdGVkVmVyc2lvbnNTZWxlY3RvciwgdXBkYXRlU2VsZWN0aW9uIH0gZnJvbSAnQC9sb2dpYy92ZXJzaW9ucy9zZWxlY3RlZC12ZXJzaW9uLXNsaWNlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3ZlcnNpb25lZC10aXRsZS5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IG1hcFZlcnNpb25zID0gKHNlY3Rpb24sIGNvbGxlY3Rpb246IE1lbnVOb2RlLCBzZWxlY3RlZE9wdGlvbikgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSAoZXZlbnQpID0+IGRpc3BhdGNoKHVwZGF0ZVNlbGVjdGlvbih7IHNlY3Rpb24sIHNlbGVjdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pKTtcbiAgY29uc3Qgbm9Qcm9wYWdhdGlvbiA9IChldmVudCkgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBmbG9hdDogJ3JpZ2h0JywgcGFkZGluZ1JpZ2h0OiA0IH19PlxuICAgICAgPHNlbGVjdFxuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb259XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZlcnNpb25TZWxlY3R9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgb25DbGljaz17bm9Qcm9wYWdhdGlvbn1cbiAgICAgID5cbiAgICAgICAge21hcChPYmplY3QuZW50cmllcyhjb2xsZWN0aW9uKSwgKFtzZWdtZW50LCBub2RlXSkgPT4ge1xuICAgICAgICAgIGlmICghTWVudVNlZ21lbnQuaXNWZXJzaW9uQ29udGFpbmVyKHNlZ21lbnQpKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgIGNvbnN0IHsgbWV0YSwgLi4udmVyc2lvbnMgfSA9IG5vZGU7XG4gICAgICAgICAgcmV0dXJuIG1hcChPYmplY3QuZW50cmllcyh2ZXJzaW9ucyksIChbdmVyc2lvbl0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIGtleT17dmVyc2lvbn0gdmFsdWU9e3ZlcnNpb259IGxhYmVsPXt2ZXJzaW9ufSAvPjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSl9XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNlY3Rpb246IHN0cmluZztcbiAgdGl0bGU6IFJlYWN0Tm9kZUxpa2U7XG59XG5cbmNvbnN0IFZlcnNpb25lZFRpdGxlID0gKHsgc2VjdGlvbiwgdGl0bGUgfTogUHJvcHMpOiBhbnkgPT4ge1xuICBjb25zdCB7IG1lbnVTdHJ1Y3R1cmUgfSA9IHVzZUNvbnRleHQoTWVudUNvbnRleHQpO1xuICBjb25zdCBzZWxlY3RlZCA9IHVzZVNlbGVjdG9yKHNlbGVjdGVkVmVyc2lvbnNTZWxlY3Rvcik7XG4gIGNvbnN0IHsgZG9jcyB9ID0gbWVudVN0cnVjdHVyZTtcblxuICBpZiAoIU1lbnVOb2RlLmhhc1ZlcnNpb25Db250YWluZXIoZG9jc1tzZWN0aW9uXSkpIHtcbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzcGFuPlxuICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICAgIHttYXBWZXJzaW9ucyhzZWN0aW9uLCBkb2NzW3NlY3Rpb25dLCBzZWxlY3RlZFtzZWN0aW9uXSl9XG4gICAgPC9zcGFuPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVyc2lvbmVkVGl0bGU7XG4iLCJpbXBvcnQgQW5jaG9yVmlldyBmcm9tICdAL2NvbXBvbmVudHMvbWFya2Rvd24vY29tcG9uZW50cy9hbmNob3Itdmlldyc7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XHJcbmltcG9ydCBtYXJrZG93blRvQW5jaG9yc01hcHBpbmcgZnJvbSAnLi4vLi4vLi4vbWFya2Rvd24vbWFya2Rvd24tdG8tYW5jaG9ycy1tYXBwaW5nJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zaWRlYmFycy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCB7IFNpZGVyIH0gPSBMYXlvdXQ7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGRvY3VtZW50OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEFuY2hvcnNTaWRlYmFyID0gKHsgZG9jdW1lbnQgfTogUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNpZGVyIGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJ9IHdpZHRoPXsyMDB9IGJyZWFrcG9pbnQ9XCJ4bFwiIGNvbGxhcHNlZFdpZHRoPVwiMFwiIHJldmVyc2VBcnJvdz5cclxuICAgICAgPEFuY2hvclZpZXc+XHJcbiAgICAgICAgPFJlYWN0TWFya2Rvd24gY29tcG9uZW50cz17bWFya2Rvd25Ub0FuY2hvcnNNYXBwaW5nfT57ZG9jdW1lbnR9PC9SZWFjdE1hcmtkb3duPlxyXG4gICAgICA8L0FuY2hvclZpZXc+XHJcbiAgICA8L1NpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmNob3JzU2lkZWJhcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWVudSwgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtcclxuICBTaUdpdGh1YmFjdGlvbnMsXHJcbiAgU2lHaXRsYWIsXHJcbiAgQWlPdXRsaW5lSW5mb0NpcmNsZSxcclxuICBTaURvY2tlcixcclxuICBBaU91dGxpbmVRdWVzdGlvbkNpcmNsZSxcclxufSBmcm9tICdyZWFjdC1pY29ucy9hbGwnO1xyXG5pbXBvcnQgVmVyc2lvbmVkU3ViTWVudSBmcm9tICcuLi9tZW51L3ZlcnNpb25lZC1zdWItbWVudSc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2lkZWJhcnMubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgeyBTaWRlciB9ID0gTGF5b3V0O1xyXG5jb25zdCB7IEl0ZW0gfSA9IE1lbnU7XHJcblxyXG5jb25zdCBNZW51U3RydWN0dXJlU2lkZWJhciA9ICgpID0+IHtcclxuICBjb25zdCB7IGFzUGF0aDogY3VycmVudEtleSB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IG1haW4gPSAnbWFpbic7XHJcbiAgY29uc3QgY3VycmVudCA9IGN1cnJlbnRLZXkuc3BsaXQoJy8nKVsyXSB8fCBtYWluO1xyXG4gIGNvbnN0IG9wZW5TZWN0aW9ucyA9IFtjdXJyZW50XTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTaWRlciBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyfSB3aWR0aD17MjAwfSBicmVha3BvaW50PVwibGdcIiBjb2xsYXBzZWRXaWR0aD1cIjBcIj5cclxuICAgICAgPE1lbnVcclxuICAgICAgICBtb2RlPVwiaW5saW5lXCJcclxuICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbY3VycmVudEtleV19XHJcbiAgICAgICAgZGVmYXVsdE9wZW5LZXlzPXtvcGVuU2VjdGlvbnN9XHJcbiAgICAgICAgc3ViTWVudU9wZW5EZWxheT17MX1cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW51U3RydWN0dXJlfVxyXG4gICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBtYXJnaW5Cb3R0b206ICctNzBweCcgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxWZXJzaW9uZWRTdWJNZW51XHJcbiAgICAgICAgICBrZXk9XCJpbnRyb2R1Y3Rpb25cIlxyXG4gICAgICAgICAgc2VjdGlvbj1cImludHJvZHVjdGlvblwiXHJcbiAgICAgICAgICB0aXRsZT1cIkludHJvZHVjdGlvblwiXHJcbiAgICAgICAgICBpY29uPXs8QWlPdXRsaW5lSW5mb0NpcmNsZSAvPn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxWZXJzaW9uZWRTdWJNZW51IGtleT1cImRvY2tlclwiIHNlY3Rpb249XCJkb2NrZXJcIiB0aXRsZT1cIkRvY2tlclwiIGljb249ezxTaURvY2tlciAvPn0+XHJcbiAgICAgICAgICA8SXRlbSBrZXk9XCIvZG9jcy9kb2NrZXIvdmVyc2lvbnNcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kb2NzL2RvY2tlci92ZXJzaW9uc1wiPlxyXG4gICAgICAgICAgICAgIDxhPlZlcnNpb24gc3RhdHVzZXM8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvSXRlbT5cclxuICAgICAgICA8L1ZlcnNpb25lZFN1Yk1lbnU+XHJcbiAgICAgICAgPFZlcnNpb25lZFN1Yk1lbnUga2V5PVwiZ2l0aHViXCIgc2VjdGlvbj1cImdpdGh1YlwiIHRpdGxlPVwiR2l0SHViXCIgaWNvbj17PFNpR2l0aHViYWN0aW9ucyAvPn0gLz5cclxuICAgICAgICA8VmVyc2lvbmVkU3ViTWVudSBrZXk9XCJnaXRsYWJcIiBzZWN0aW9uPVwiZ2l0bGFiXCIgdGl0bGU9XCJHaXRMYWJcIiBpY29uPXs8U2lHaXRsYWIgLz59IC8+XHJcbiAgICAgICAgPFZlcnNpb25lZFN1Yk1lbnVcclxuICAgICAgICAgIGtleT1cInRyb3VibGVzaG9vdGluZ1wiXHJcbiAgICAgICAgICBzZWN0aW9uPVwidHJvdWJsZXNob290aW5nXCJcclxuICAgICAgICAgIHRpdGxlPVwiVHJvdWJsZXNob290aW5nXCJcclxuICAgICAgICAgIGljb249ezxBaU91dGxpbmVRdWVzdGlvbkNpcmNsZSAvPn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxWZXJzaW9uZWRTdWJNZW51XHJcbiAgICAgICAgICBrZXk9XCJjbG91ZC1ydW5uZXJcIlxyXG4gICAgICAgICAgc2VjdGlvbj1cImNsb3VkLXJ1bm5lclwiXHJcbiAgICAgICAgICB0aXRsZT1cIkNsb3VkIFJ1bm5lclwiXHJcbiAgICAgICAgICBpY29uPXs8QWlPdXRsaW5lUXVlc3Rpb25DaXJjbGUgLz59XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9NZW51PlxyXG4gICAgPC9TaWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudVN0cnVjdHVyZVNpZGViYXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNpZGViYXJcIjogXCJfMlhzNTJUMDVmekRRUmNVUkphaGFaa1wiLFxuXHRcIm1lbnVTdHJ1Y3R1cmVcIjogXCJkTWNTVnJ2RlNvRkhPRU1mWmNjYVlcIlxufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICA8SGVhZD5cclxuICAgIDx0aXRsZT5HYW1lQ0k8L3RpdGxlPlxyXG4gICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvaWNvbnMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxyXG4gICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9pY29ucy9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XHJcbiAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiL2ljb25zL2Zhdmljb24tMTZ4MTYucG5nXCIgLz5cclxuICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9pY29ucy9zaXRlLndlYm1hbmlmZXN0XCIgLz5cclxuICAgIDxsaW5rIHJlbD1cIm1hc2staWNvblwiIGhyZWY9XCIvaWNvbnMvc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCIgY29sb3I9XCIjNWJiYWQ1XCIgLz5cclxuICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2ljb25zL2Zhdmljb24uaWNvXCIgLz5cclxuICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjMzczNDQ1XCIgLz5cclxuICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiIGNvbnRlbnQ9XCIvaWNvbnMvYnJvd3NlcmNvbmZpZy54bWxcIiAvPlxyXG4gICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxyXG4gIDwvSGVhZD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29uZmlndXJlIH0gZnJvbSAncmVhY3QtaW5zdGFudHNlYXJjaC1kb20nO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJ0AvY29yZS9jb25maWcnO1xyXG5cclxuY29uc3QgQ29uZmlndXJhdGlvbiA9ICgpID0+IChcclxuICA8Q29uZmlndXJlXHJcbiAgICBoaXRzUGVyUGFnZT17Y29uZmlnLnNlYXJjaC5oaXRzUGVyUGFnZX1cclxuICAgIGF0dHJpYnV0ZXNUb1NuaXBwZXQ9e1snY29udGVudDoxNCddfVxyXG4gICAgc25pcHBldEVsbGlwc2lzVGV4dD1cIiBbLi4uXVwiXHJcbiAgLz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpZ3VyYXRpb247XHJcbiIsImltcG9ydCB7IFRhZyB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tICdyZWFjdC1pbnN0YW50c2VhcmNoLWRvbSc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnQC9jb3JlL2NvbmZpZyc7XHJcblxyXG5jb25zdCBSZXN1bHQgPSAoeyBoaXQgfSkgPT4ge1xyXG4gIGNvbnN0IHsgZG9jc1BhdGggfSA9IGNvbmZpZztcclxuICBjb25zdCB7IHBhdGgsIHZlcnNpb24sIGFuY2hvcklkIH0gPSBoaXQ7XHJcbiAgY29uc3QgcGVybWFsaW5rID0gYCR7ZG9jc1BhdGh9LyR7cGF0aH0jJHthbmNob3JJZH1gO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGUgc3R5bGU9e3sgcGFkZGluZzogOCB9fT5cclxuICAgICAgPGEgaHJlZj17cGVybWFsaW5rfSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IGZsZXg6IDEgfX0+XHJcbiAgICAgICAgICA8SGlnaGxpZ2h0IGF0dHJpYnV0ZT1cInRpdGxlXCIgaGl0PXtoaXR9IHRhZ05hbWU9XCJlbVwiIC8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIHt2ZXJzaW9uICYmIDxUYWcgc3R5bGU9e3sgbGluZUhlaWdodDogJzEyMCUnLCBmb250U2l6ZTogJzgwJScgfX0+e3ZlcnNpb259PC9UYWc+fVxyXG4gICAgICA8L2E+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcblJlc3VsdC5wcm9wVHlwZXMgPSB7XHJcbiAgaGl0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGFuY2hvcklkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdmVyc2lvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHN1bW1hcnk6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGl0cyB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gtZG9tJztcclxuaW1wb3J0IHR5cGUgeyBTdGF0ZVJlc3VsdHNQcm92aWRlZCB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gtZG9tJztcclxuaW1wb3J0IHsgY29ubmVjdFN0YXRlUmVzdWx0cyB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gvY29ubmVjdG9ycyc7XHJcbmltcG9ydCBSZXN1bHQgZnJvbSAnLi9yZXN1bHQnO1xyXG5cclxuY29uc3QgU2VhcmNoUmVzdWx0cyA9ICh7IHNlYXJjaFN0YXRlLCBzZWFyY2hSZXN1bHRzIH06IFN0YXRlUmVzdWx0c1Byb3ZpZGVkKSA9PlxyXG4gIHNlYXJjaFJlc3VsdHMgJiYgc2VhcmNoUmVzdWx0cy5uYkhpdHMgIT09IDAgPyAoXHJcbiAgICA8SGl0cyBoaXRDb21wb25lbnQ9e1Jlc3VsdH0gLz5cclxuICApIDogKFxyXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICBObyByZXN1bHRzIGZvdW5kIGZvciA8c3Ryb25nPntzZWFyY2hTdGF0ZS5xdWVyeX08L3N0cm9uZz4uXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFN0YXRlUmVzdWx0cyhTZWFyY2hSZXN1bHRzKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdFN0YXRlUmVzdWx0cyB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gtZG9tJztcclxuaW1wb3J0IHR5cGUgU3RhdGVSZXN1bHRzUHJvdmlkZWQgZnJvbSAncmVhY3QtaW5zdGFudHNlYXJjaC1kb20nO1xyXG5cclxuY29uc3QgU3RhdHMgPSAoeyBzZWFyY2hSZXN1bHRzIH06IFN0YXRlUmVzdWx0c1Byb3ZpZGVkKSA9PiB7XHJcbiAgaWYgKHNlYXJjaFJlc3VsdHMgPT09IG51bGwgfHwgc2VhcmNoUmVzdWx0cy5uYkhpdHMgPT09IDApIHJldHVybiA8ZGl2IC8+O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFpcy1TdGF0c1wiPlxyXG4gICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImVtb2ppXCI+XHJcbiAgICAgICAg4pqh77iPXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHN0cm9uZz57YCAke3NlYXJjaFJlc3VsdHMubmJIaXRzfSBgfTwvc3Ryb25nPlxyXG4gICAgICByZXN1bHRzIGZvdW5kXHJcbiAgICAgIHtzZWFyY2hSZXN1bHRzLnF1ZXJ5ICE9PSAnJyAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIGZvclxyXG4gICAgICAgICAgPHN0cm9uZz57YCBcIiR7c2VhcmNoUmVzdWx0cy5xdWVyeX1cIiBgfTwvc3Ryb25nPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICBpblxyXG4gICAgICA8c3Ryb25nPntgICR7c2VhcmNoUmVzdWx0cy5wcm9jZXNzaW5nVGltZU1TfW1zYH08L3N0cm9uZz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0U3RhdGVSZXN1bHRzKFN0YXRzKTtcclxuIiwiaW1wb3J0IHsgZ2V0SXNvbW9ycGhpY1ZhbHVlIH0gZnJvbSAnQC90b29scy91dGlscy9nZXQtaXNvbW9ycGhpYy12YWx1ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgYmFzZVVybDogJ2h0dHBzOi8vZ2FtZS5jaScsXHJcbiAgZG9jc1BhdGg6ICcvZG9jcycsXHJcbiAgZmlyZWJhc2U6IHtcclxuICAgIGFwaUtleTogJ0FJemFTeUN6NjBQbWJyYjR2Mm5xZDhUR3JtMVZvMFlsYjZkYUtXUScsXHJcbiAgICBhdXRoRG9tYWluOiAndW5pdHktY2ktdmVyc2lvbnMuZmlyZWJhc2VhcHAuY29tJyxcclxuICAgIGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly91bml0eS1jaS12ZXJzaW9ucy5maXJlYmFzZWlvLmNvbScsXHJcbiAgICBwcm9qZWN0SWQ6ICd1bml0eS1jaS12ZXJzaW9ucycsXHJcbiAgICBzdG9yYWdlQnVja2V0OiAndW5pdHktY2ktdmVyc2lvbnMuYXBwc3BvdC5jb20nLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6ICc4NDE0NzkxODY2MjMnLFxyXG4gICAgYXBwSWQ6ICcxOjg0MTQ3OTE4NjYyMzp3ZWI6YzIwMzUwMTkxZTk2MmE4YTcxZmUwYScsXHJcbiAgICBtZWFzdXJlbWVudElkOiAnRy0xQkdWUzdIRFc4JyxcclxuICB9LFxyXG4gIGJhY2tlbmRVcmw6ICdodHRwczovL2V1cm9wZS13ZXN0My11bml0eS1jaS12ZXJzaW9ucy5jbG91ZGZ1bmN0aW9ucy5uZXQnLFxyXG4gIHNlYXJjaDoge1xyXG4gICAgYXBwbGljYXRpb25JZDogJ1c0WDYyS005UUUnLFxyXG4gICAgaW5kZXg6IGdldElzb21vcnBoaWNWYWx1ZSgnU0VBUkNIX0lOREVYJyksXHJcbiAgICBwdWJsaWNBcGlLZXk6ICc0YTA2MDExZWQ4YTQ2NzgxMTg2NmMyN2NhNGMxYTM2NycsXHJcbiAgICBoaXRzUGVyUGFnZTogMTIsXHJcbiAgICBzZXR0aW5nczoge1xyXG4gICAgICAvLyBTZWxlY3QgdGhlIGF0dHJpYnV0ZXMgeW91IHdhbnQgdG8gc2VhcmNoIGluXHJcbiAgICAgIHNlYXJjaGFibGVBdHRyaWJ1dGVzOiBbJ3RpdGxlJywgJ3N1bW1hcnknLCAnYm9keScsICd2ZXJzaW9uJywgJ2NhdGVnb3JpZXMnLCAnZmlsZW5hbWUnXSxcclxuICAgICAgLy8gRGVmaW5lIGJ1c2luZXNzIG1ldHJpY3MgZm9yIHJhbmtpbmcgYW5kIHNvcnRpbmdcclxuICAgICAgY3VzdG9tUmFua2luZzogWydhc2MobGV2ZWwpJywgJ2Rlc2ModGl0bGUpJ10sXHJcbiAgICAgIC8vIFNldCB1cCBzb21lIGF0dHJpYnV0ZXMgdG8gZmlsdGVyIHJlc3VsdHMgb25cclxuICAgICAgYXR0cmlidXRlc0ZvckZhY2V0aW5nOiBbJ2ZpbGVuYW1lJ10sXHJcbiAgICAgIC8vIERlZmluZSB0aGUgYXR0cmlidXRlIHdlIHdhbnQgdG8gZGlzdGluY3Qgb25cclxuICAgICAgYXR0cmlidXRlRm9yRGlzdGluY3Q6ICdPYmplY3RJRCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU5vdGlmaWNhdGlvbigpIHtcclxuICBjb25zdCBub3RpZnkgPSAodHlwZSwgeyBtZXNzYWdlLCBkZXNjcmlwdGlvbiB9KSA9PiB7XHJcbiAgICBub3RpZmljYXRpb25bdHlwZV0oe1xyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzdWNjZXNzOiAocHJvcHMpID0+IG5vdGlmeSgnc3VjY2VzcycsIHByb3BzKSxcclxuICAgIGluZm86IChwcm9wcykgPT4gbm90aWZ5KCdpbmZvJywgcHJvcHMpLFxyXG4gICAgd2FybmluZzogKHByb3BzKSA9PiBub3RpZnkoJ3dhcm5pbmcnLCBwcm9wcyksXHJcbiAgICBlcnJvcjogKHByb3BzKSA9PiBub3RpZnkoJ2Vycm9yJywgcHJvcHMpLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRvcExldmVsUm91dGUoKSB7XHJcbiAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBwYXJ0cyA9IGFzUGF0aC5yZXBsYWNlKC9eXFwvLywgJycpLnNwbGl0KCcvJyk7XHJcblxyXG4gIHJldHVybiBgLyR7cGFydHNbMF19YDtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCB1c2VQYXRoU2VnbWVudHMgPSAobmFtZU9mUm9vdFNlZ21lbnQpID0+IHtcclxuICBjb25zdCB7IGFzUGF0aCB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgc2VnbWVudHMgPSBhc1BhdGguc2xpY2UoMSkuc3BsaXQoJyMnKVswXS5zcGxpdCgnLycpO1xyXG5cclxuICBsZXQgdXJsID0gJyc7XHJcbiAgY29uc3QgcGF0aFNlZ21lbnRzID0gc2VnbWVudHMubWFwKChzZWdtZW50KSA9PiB7XHJcbiAgICB1cmwgKz0gYC8ke3NlZ21lbnR9YDtcclxuICAgIGNvbnN0IG5hbWUgPSBzZWdtZW50LnJlcGxhY2UoLy0vZywgJyAnKTtcclxuXHJcbiAgICByZXR1cm4geyB1cmwsIG5hbWUgfTtcclxuICB9KTtcclxuXHJcbiAgaWYgKG5hbWVPZlJvb3RTZWdtZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHBhdGhTZWdtZW50cy51bnNoaWZ0KHsgdXJsOiAnLycsIG5hbWU6IG5hbWVPZlJvb3RTZWdtZW50IH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhdGhTZWdtZW50cztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVBhdGhTZWdtZW50cztcclxuIiwiaW1wb3J0IHsgTWVudVN0cnVjdHVyZSB9IGZyb20gJ0AvdG9vbHMvbWVudS9tZW51LXN0cnVjdHVyZSc7XHJcbmltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCBtZW51U3RydWN0dXJlIGZyb20gJ0AvY29yZS9tZW51LXN0cnVjdHVyZS5qc29uJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RlZFZlcnNpb25TbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAndmVyc2lvbicsXHJcbiAgaW5pdGlhbFN0YXRlOiB7IC4uLk1lbnVTdHJ1Y3R1cmUuZ2V0Q3VycmVudFZlcnNpb25zKG1lbnVTdHJ1Y3R1cmUpIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHVwZGF0ZVNlbGVjdGlvbjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgeyBzZWN0aW9uLCBzZWxlY3Rpb24gfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgc3RhdGVbc2VjdGlvbl0gPSBzZWxlY3Rpb247XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkVmVyc2lvbnNTZWxlY3RvciA9IChzdGF0ZSkgPT4gc3RhdGUudmVyc2lvbnMuc2VsZWN0ZWQ7XHJcblxyXG5leHBvcnQgY29uc3QgeyB1cGRhdGVTZWxlY3Rpb24gfSA9IHNlbGVjdGVkVmVyc2lvblNsaWNlLmFjdGlvbnM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3csIGxvY2FsZSB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IGNsZWFudXAgPSBSZWFjdC51c2VSZWY8KCkgPT4gdm9pZD4oKVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIC8vIGNsZWFudXAgcHJldmlvdXMgZXZlbnQgaGFuZGxlcnNcbiAgICAgIGlmIChjbGVhbnVwLmN1cnJlbnQpIHtcbiAgICAgICAgY2xlYW51cC5jdXJyZW50KClcbiAgICAgICAgY2xlYW51cC5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChwICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIGVsICYmIGVsLnRhZ05hbWUgJiYgaXNMb2NhbFVSTChocmVmKSkge1xuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgbG9jYWxlOlxuICAgICAgICAgICAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IGxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW3AsIGNoaWxkUmVmLCBocmVmLCBhcywgcm91dGVyLCBsb2NhbGVdXG4gIClcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSAmJlxuICAgICAgcGF0aCAhPT0gJy8nICsgbG9jYWxlXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSB8fCBwYXRoID09PSAnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUiA9ICdTU0cgRGF0YSBOT1RfRk9VTkQnXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIHJlbG9hZGluZyBpbiBkZXZlbG9wbWVudCBmcm9tIGZhbGxiYWNrIHJldHVybmluZyAyMDBcbiAgICAgICAgLy8gdG8gb24tZGVtYW5kLWVudHJ5LWhhbmRsZXIgY2F1c2luZyBpdCB0byByZWxvYWQgcGVyaW9kaWNhbGx5XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoLFxuICAgICAgfSA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKVxuXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChhcywgdGhpcy5sb2NhbGVzKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgdXJsID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24sIG9wdGlvbnMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuICAgICAgY29uc3Qgc3NnNDA0ID0gZXJyLm1lc3NhZ2UgPT09IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUlxuXG4gICAgICBpZiAoc3NnNDA0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IG1vZDogYW55XG4gICAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMsIG1vZCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAgICcvNDA0J1xuICAgICAgICAgICkpXG5cbiAgICAgICAgICAvLyBUT0RPOiBzaG91bGQgd2UgdG9sZXJhdGUgdGhlc2UgcHJvcHMgbWlzc2luZyBhbmQgc3RpbGwgcmVuZGVyIHRoZVxuICAgICAgICAgIC8vIHBhZ2UgaW5zdGVhZCBvZiBmYWxsaW5nIGJhY2sgdG8gX2Vycm9yP1xuICAgICAgICAgIGlmIChtb2QgJiYgbW9kLl9fTl9TU0cpIHtcbiAgICAgICAgICAgIHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCcvNDA0JywgJy80MDQnLCB0cnVlLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICAvLyBub24tZmF0YWwgZmFsbGJhY2sgdG8gX2Vycm9yXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICAgIGVycm9yOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJylcbiAgICAgICAgLm5vcm1hbGl6ZUxvY2FsZVBhdGggYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKS5ub3JtYWxpemVMb2NhbGVQYXRoXG5cbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IG9wdGlvbnMubG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIC8vIGNsb25lIHF1ZXJ5IHNvIHdlIGRvbid0IG1vZGlmeSB0aGUgb3JpZ2luYWxcbiAgcXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSlcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dExvY2FsZVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IERvY3VtZW50YXRpb25JbmRleCBmcm9tICdAL2NvbXBvbmVudHMvcGFnZXMvZG9jcy9kb2N1bWVudGF0aW9uLWluZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50YXRpb25JbmRleDtcclxuIiwiaW1wb3J0IHsgZ2V0LCBoYXMgfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHsgTWVudVNlZ21lbnQgfSBmcm9tICdAL3Rvb2xzL21lbnUvbWVudS1zZWdtZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVudU5vZGUge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTWVudU5vZGVUeXBlID0gJ2ZpbGUnIHwgJ2ZvbGRlcicgfCAndmVyc2lvbicgfCAnaWRlbnRpZmllcic7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudU5vZGUge1xyXG4gIHN0YXRpYyBpc0ZpbGUobm9kZTogTWVudU5vZGUpIHtcclxuICAgIHJldHVybiBnZXQobm9kZSwgJ21ldGEudHlwZScpID09PSAnZmlsZSc7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaXNGb2xkZXIobm9kZTogTWVudU5vZGUpIHtcclxuICAgIHJldHVybiBnZXQobm9kZSwgJ21ldGEudHlwZScpID09PSAnZm9sZGVyJztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpc1BhZ2Uobm9kZTogTWVudU5vZGUpIHtcclxuICAgIHJldHVybiB0aGlzLmlzRmlsZShub2RlKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpc1ZlcnNpb24obm9kZTogTWVudU5vZGUpIHtcclxuICAgIHJldHVybiBnZXQobm9kZSwgJ21ldGEudHlwZScpID09PSAndmVyc2lvbic7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaGFzQ2hpbGRyZW4obm9kZTogTWVudU5vZGUpIHtcclxuICAgIHJldHVybiB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCc7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaGFzVmVyc2lvbkNvbnRhaW5lcihub2RlOiBNZW51Tm9kZSkge1xyXG4gICAgcmV0dXJuIGhhcyhub2RlLCBNZW51U2VnbWVudC52ZXJzaW9uQ29udGFpbmVySWRlbnRpZmllcik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0Q3VycmVudFZlcnNpb24odmVyc2lvbkNvbnRhaW5lck5vZGU6IE1lbnVOb2RlKSB7XHJcbiAgICByZXR1cm4gZ2V0KHZlcnNpb25Db250YWluZXJOb2RlLCAnbWV0YS5jdXJyZW50VmVyc2lvbicpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZpbmRGaXJzdFBhZ2UobWVudU5vZGU6IE1lbnVOb2RlKSB7XHJcbiAgICBpZiAobWVudU5vZGUgJiYgTWVudU5vZGUuaXNGb2xkZXIobWVudU5vZGUpKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBNZW51Tm9kZS5maW5kRmlyc3RQYWdlSW5Gb2xkZXIobWVudU5vZGUpO1xyXG4gICAgICByZXR1cm4gcGFnZT8ubWV0YT8ucGF0aCB8fCBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZpbmRGaXJzdFBhZ2VJbkZvbGRlcihtZW51Tm9kZTogTWVudU5vZGUpIHtcclxuICAgIGNvbnN0IGZpbGVNZXRhcyA9IFtdO1xyXG4gICAgY29uc3QgY29udGFpbmVycyA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgW3NlZ21lbnQsIG5vZGVdIG9mIE9iamVjdC5lbnRyaWVzKG1lbnVOb2RlKSkge1xyXG4gICAgICBpZiAoTWVudVNlZ21lbnQuaXNNZXRhKHNlZ21lbnQpKSBjb250aW51ZTtcclxuXHJcbiAgICAgIGlmIChNZW51Tm9kZS5pc0ZpbGUobm9kZSkpIHtcclxuICAgICAgICBmaWxlTWV0YXMucHVzaChub2RlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKE1lbnVTZWdtZW50LmlzVmVyc2lvbkNvbnRhaW5lcihzZWdtZW50KSkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWZXJzaW9uID0gdGhpcy5nZXRDdXJyZW50VmVyc2lvbihub2RlKTtcclxuICAgICAgICBjb250YWluZXJzLnB1c2gobm9kZVtjdXJyZW50VmVyc2lvbl0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoTWVudU5vZGUuaXNGb2xkZXIobm9kZSkgfHwgTWVudU5vZGUuaXNWZXJzaW9uKG5vZGUpKSB7XHJcbiAgICAgICAgY29udGFpbmVycy5wdXNoKG5vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVG9kbyBzb3J0IGJ5IGZpbGVNZXRhLm1ldGEub3JkZXIgYXNjXHJcbiAgICBpZiAoZmlsZU1ldGFzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIGZpbGVNZXRhc1swXTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGNvbnRhaW5lciBvZiBjb250YWluZXJzKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZmluZEZpcnN0UGFnZUluRm9sZGVyKGNvbnRhaW5lcik7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IG5vcm1hbGlzZVRpdGxlIH0gZnJvbSAnQC90b29scy91dGlscyc7XHJcblxyXG5leHBvcnQgdHlwZSBTZWdtZW50ID0gc3RyaW5nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVTZWdtZW50IHtcclxuICBwdWJsaWMgc3RhdGljIHZlcnNpb25Db250YWluZXJJZGVudGlmaWVyID0gJzx2ZXJzaW9ucz4nO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzTWV0YShzZWdtZW50OiBTZWdtZW50KSB7XHJcbiAgICByZXR1cm4gc2VnbWVudCA9PT0gJ21ldGEnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpc1ZlcnNpb25Db250YWluZXIoc2VnbWVudDogU2VnbWVudCkge1xyXG4gICAgcmV0dXJuIHNlZ21lbnQgPT09IHRoaXMudmVyc2lvbkNvbnRhaW5lcklkZW50aWZpZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzVmVyc2lvbihzZWdtZW50OiBTZWdtZW50KSB7XHJcbiAgICByZXR1cm4gL152P1xcZCsoXFwuXFxkKykqJC8udGVzdChzZWdtZW50KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0b1RpdGxlKHNlZ21lbnQ6IFNlZ21lbnQpIHtcclxuICAgIHJldHVybiBub3JtYWxpc2VUaXRsZShzZWdtZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWVudU5vZGUsIE1lbnVOb2RlVHlwZSB9IGZyb20gJ0AvdG9vbHMvbWVudS9tZW51LW5vZGUnO1xyXG5pbXBvcnQgeyBub3JtYWxpc2VUaXRsZSwgcmVwbGFjZUFsbCB9IGZyb20gJ0AvdG9vbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBkZWZhdWx0c0RlZXAsIGZsb3csIGdldCwgaGFzLCBzZXQsIHVuc2V0IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgTWVudVNlZ21lbnQgfSBmcm9tICcuL21lbnUtc2VnbWVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudVN0cnVjdHVyZUdlbmVyYXRvciB7XHJcbiAgcHJpdmF0ZSBzdHJ1Y3R1cmU6IE1lbnVOb2RlID0ge307XHJcblxyXG4gIHByaXZhdGUgZmlsZU5hbWU6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBzZWdtZW50czogc3RyaW5nW107XHJcblxyXG4gIHByaXZhdGUgc2VnbWVudDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGtleUFycmF5OiBzdHJpbmdbXTtcclxuXHJcbiAgcHJpdmF0ZSBwZXJtYWxpbmtQYXRoQXJyYXk6IHN0cmluZ1tdO1xyXG5cclxuICBwcml2YXRlIHNlb0ZyaWVuZGx5UGF0aEFycmF5OiBzdHJpbmdbXTtcclxuXHJcbiAgcHJpdmF0ZSB2ZXJzaW9uT2ZDdXJyZW50UGF0aDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGdldCBrZXkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5rZXlBcnJheS5qb2luKCcuJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBwZXJtYWxpbmtQYXRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGVybWFsaW5rUGF0aEFycmF5LmpvaW4oJy8nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IHNlb0ZyaWVuZGx5UGF0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNlb0ZyaWVuZGx5UGF0aEFycmF5LmpvaW4oJy8nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXQoKSB7XHJcbiAgICB0aGlzLnZlcnNpb25PZkN1cnJlbnRQYXRoID0gbnVsbDtcclxuICAgIHRoaXMua2V5QXJyYXkgPSBbXTtcclxuICAgIHRoaXMucGVybWFsaW5rUGF0aEFycmF5ID0gW107XHJcbiAgICB0aGlzLnNlb0ZyaWVuZGx5UGF0aEFycmF5ID0gW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFNlZ21lbnRUb0tleSA9IChzZWdtZW50KSA9PiB0aGlzLmtleUFycmF5LnB1c2goc2VnbWVudCk7XHJcblxyXG4gIHByaXZhdGUgYWRkU2VnbWVudFRvUGVybWFsaW5rUGF0aCA9IChzZWdtZW50KSA9PiB0aGlzLnBlcm1hbGlua1BhdGhBcnJheS5wdXNoKHNlZ21lbnQpO1xyXG5cclxuICBwcml2YXRlIGFkZFNlZ21lbnRUb1Nlb0ZyaWVuZGx5UGF0aCA9IChzZWdtZW50KSA9PiB0aGlzLnNlb0ZyaWVuZGx5UGF0aEFycmF5LnB1c2goc2VnbWVudCk7XHJcblxyXG4gIHByaXZhdGUgc2V0VmVyc2lvbk9mQ3VycmVudFBhdGggPSAoc2VnbWVudCkgPT4ge1xyXG4gICAgdGhpcy52ZXJzaW9uT2ZDdXJyZW50UGF0aCA9IHNlZ21lbnQ7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGFzeW5jIGdlbmVyYXRlTWVudVN0cnVjdHVyZShmaWxlTmFtZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgY29uc29sZS5sb2coJ2V2ZW50IC0gZ2VuZXJhdGluZyBtZW51IHN0cnVjdHVyZScpO1xyXG5cclxuICAgIGNvbnN0IHN0cnVjdHVyZSA9IG5ldyB0aGlzKCk7XHJcbiAgICBmb3IgKGNvbnN0IGZpbGVOYW1lIG9mIGZpbGVOYW1lcykge1xyXG4gICAgICBzdHJ1Y3R1cmUuYWRkRnJvbUZpbGUoZmlsZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0cnVjdHVyZS5zdHJpcFZlcnNpb25OdW1iZXJzRnJvbUxhdGVzdFZlcnNpb25JblNlb0ZyaWVuZGx5UGF0aCgpO1xyXG4gICAgc3RydWN0dXJlLmNsZWFudXAoKTtcclxuXHJcbiAgICByZXR1cm4gc3RydWN0dXJlLnRvT2JqZWN0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5zdHJ1Y3R1cmUsIG51bGwsIDIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvT2JqZWN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RydWN0dXJlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZEZyb21GaWxlKGZpbGVOYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuXHJcbiAgICB0aGlzLmZpbGVOYW1lID0gZmlsZU5hbWU7XHJcbiAgICB0aGlzLnNlZ21lbnRzID0gdGhpcy5maWxlTmFtZS5yZXBsYWNlKC9cXC5tZCQvLCAnJykuc3BsaXQoJy8nKTtcclxuXHJcbiAgICB0aGlzLmFkZFN0cnVjdHVyZUZyb21TZWdtZW50cygpO1xyXG4gICAgdGhpcy5hZGRNZXRhRm9yRmlsZU5vZGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkU3RydWN0dXJlRnJvbVNlZ21lbnRzKCkge1xyXG4gICAgZm9yICh0aGlzLnNlZ21lbnQgb2YgdGhpcy5zZWdtZW50cykge1xyXG4gICAgICBjb25zdCB7IG9yZGVyLCBzZWdtZW50IH0gPSB0aGlzLmV4dHJhY3RJbmZvRnJvbVNlZ21lbnQoKTtcclxuXHJcbiAgICAgIC8vIE1ha2UgdmVyc2lvbiBwYXJ0cyBpZGVudGlmaWFibGVcclxuICAgICAgaWYgKE1lbnVTZWdtZW50LmlzVmVyc2lvbihzZWdtZW50KSkge1xyXG4gICAgICAgIHRoaXMuYWRkU2VnbWVudFRvS2V5KE1lbnVTZWdtZW50LnZlcnNpb25Db250YWluZXJJZGVudGlmaWVyKTtcclxuICAgICAgICB0aGlzLnNldE5vZGVUeXBlKCdpZGVudGlmaWVyJyk7XHJcbiAgICAgICAgdGhpcy5zZXROb2RlUGF0aCh0aGlzLnBlcm1hbGlua1BhdGgpO1xyXG4gICAgICAgIHRoaXMuc2V0VmVyc2lvbk9mQ3VycmVudFBhdGgoc2VnbWVudCk7XHJcbiAgICAgICAgdGhpcy5zZXROb2RlQ3VycmVudFZlcnNpb24oc2VnbWVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFVwZGF0ZSBwb2ludGVyc1xyXG4gICAgICB0aGlzLmFkZFNlZ21lbnRUb0tleShzZWdtZW50KTtcclxuICAgICAgdGhpcy5hZGRTZWdtZW50VG9QZXJtYWxpbmtQYXRoKHNlZ21lbnQpO1xyXG4gICAgICBpZiAoIU1lbnVTZWdtZW50LmlzVmVyc2lvbihzZWdtZW50KSkgdGhpcy5hZGRTZWdtZW50VG9TZW9GcmllbmRseVBhdGgoc2VnbWVudCk7XHJcblxyXG4gICAgICAvLyBBZGQgbWV0YSBmb3IgZXZlcnkgcGFydFxyXG4gICAgICBpZiAoIWhhcyh0aGlzLnN0cnVjdHVyZSwgdGhpcy5rZXkpKSB7XHJcbiAgICAgICAgdGhpcy5zZXROb2RlVHlwZShNZW51U2VnbWVudC5pc1ZlcnNpb24oc2VnbWVudCkgPyAndmVyc2lvbicgOiAnZm9sZGVyJyk7XHJcbiAgICAgICAgdGhpcy5zZXROb2RlT3JkZXIob3JkZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0Tm9kZVBhdGgodGhpcy5wZXJtYWxpbmtQYXRoKTtcclxuICAgICAgICB0aGlzLnNldE5vZGVTZW9GcmllbmRseVBhdGgodGhpcy5zZW9GcmllbmRseVBhdGgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZE1ldGFGb3JGaWxlTm9kZSgpIHtcclxuICAgIGNvbnN0IHsgb3JkZXIsIHNlZ21lbnQgfSA9IHRoaXMuZXh0cmFjdEluZm9Gcm9tU2VnbWVudCgpO1xyXG5cclxuICAgIHRoaXMuc2V0Tm9kZU5hbWUobm9ybWFsaXNlVGl0bGUoc2VnbWVudCkpO1xyXG4gICAgdGhpcy5zZXROb2RlVHlwZSgnZmlsZScpO1xyXG4gICAgdGhpcy5zZXROb2RlT3JkZXIob3JkZXIpO1xyXG4gICAgdGhpcy5zZXROb2RlUGF0aCh0aGlzLnBlcm1hbGlua1BhdGgpO1xyXG4gICAgdGhpcy5zZXROb2RlUGVybWFsaW5rUGF0aCh0aGlzLnBlcm1hbGlua1BhdGgpO1xyXG4gICAgdGhpcy5zZXROb2RlU2VvRnJpZW5kbHlQYXRoKHRoaXMuc2VvRnJpZW5kbHlQYXRoKTtcclxuICAgIHRoaXMuc2V0Tm9kZUFic29sdXRlUGF0aCh0aGlzLmZpbGVOYW1lKTtcclxuICAgIHRoaXMuc2V0Tm9kZVZlcnNpb24odGhpcy52ZXJzaW9uT2ZDdXJyZW50UGF0aCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RJbmZvRnJvbVNlZ21lbnQoKSB7XHJcbiAgICBjb25zdCBzb3J0T3JkZXJOdW1iZXJSZWdleCA9IC9eXFxkezJ9LS87XHJcblxyXG4gICAgY29uc3QgZXh0cmFjdFNvcnRPcmRlck51bWJlciA9IChwYXJ0OiBzdHJpbmcpOiBudW1iZXIgPT4ge1xyXG4gICAgICByZXR1cm4gTnVtYmVyKHBhcnQubWF0Y2goc29ydE9yZGVyTnVtYmVyUmVnZXgpPy5bMF0/LnJlcGxhY2UoLy0kLywgJycpIHx8IDk5KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3RyaXBTb3J0T3JkZXJOdW1iZXIgPSAocGFydDogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgICAgcmV0dXJuIHBhcnQucmVwbGFjZShzb3J0T3JkZXJOdW1iZXJSZWdleCwgJycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVGb3JiaWRkZW5DaGFyYWN0ZXJzID0gKHBhcnQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICAgIHJldHVybiByZXBsYWNlQWxsKHBhcnQsICcuJywgJy0nKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2FuaXRpc2VTZWdtZW50ID0gZmxvdyhzdHJpcFNvcnRPcmRlck51bWJlciwgcmVtb3ZlRm9yYmlkZGVuQ2hhcmFjdGVycyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb3JkZXI6IGV4dHJhY3RTb3J0T3JkZXJOdW1iZXIodGhpcy5zZWdtZW50KSxcclxuICAgICAgc2VnbWVudDogc2FuaXRpc2VTZWdtZW50KHRoaXMuc2VnbWVudCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXROb2RlTmFtZShuYW1lKSB7XHJcbiAgICBzZXQodGhpcy5zdHJ1Y3R1cmUsIHRoaXMua2V5LCB7IG5hbWUgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgbWV0YSB0byBjdXJyZW50bHkgc2VsZWN0ZWQga2V5LlxyXG4gICAqXHJcbiAgICogTmV3IHByb3BlcnRpZXMgb3ZlcndyaXRlIGV4aXN0aW5nIHByb3BlcnRpZXMgcmVjdXJzaXZlbHkuXHJcbiAgICpcclxuICAgKiBFeGFtcGxlOlxyXG4gICAqICAgQmVmb3JlOiAgICAgeyBhOiAxLCBiOiAyIH1cclxuICAgKiAgIEFkZDogICAgICAgIHsgYTogMywgYzogNCB9XHJcbiAgICogICBSZXN1bHRzIGluOiB7IGE6IDMsIGI6IDIsIGM6IDQgfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgYWRkTm9kZU1ldGEobWV0YSkge1xyXG4gICAgY29uc3QgcHJldmlvdXNNZXRhID0gZ2V0KHRoaXMuc3RydWN0dXJlLCBgJHt0aGlzLmtleX0ubWV0YWAsIHt9KTtcclxuICAgIGRlZmF1bHRzRGVlcChtZXRhLCBwcmV2aW91c01ldGEpO1xyXG4gICAgc2V0KHRoaXMuc3RydWN0dXJlLCBgJHt0aGlzLmtleX0ubWV0YWAsIG1ldGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHlwZSBvZiBwYXJ0LCB0byBpbmRpY2F0ZSBpdHMgc3RydWN0dXJlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXROb2RlVHlwZSh0eXBlOiBNZW51Tm9kZVR5cGUpIHtcclxuICAgIHRoaXMuYWRkTm9kZU1ldGEoeyB0eXBlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3JkZXIgaW4gd2hpY2ggdG8gYXBwZWFyIGluIHRoZSBtZW51XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXROb2RlT3JkZXIob3JkZXI6IG51bWJlcikge1xyXG4gICAgdGhpcy5hZGROb2RlTWV0YSh7IG9yZGVyIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIHJvdXRpbmdcclxuICAgKi9cclxuICBwcml2YXRlIHNldE5vZGVQYXRoKHBhdGg6IHN0cmluZykge1xyXG4gICAgdGhpcy5hZGROb2RlTWV0YSh7IHBhdGggfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3IgbGlua2luZyBiYWNrIHRvIHRoZSBmaWxlIGluIHRoZSByZXBvXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXROb2RlQWJzb2x1dGVQYXRoKGFic29sdXRlUGF0aDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFkZE5vZGVNZXRhKHsgYWJzb2x1dGVQYXRoIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGxpbmtpbmcgdG8gYSBzZWN0aW9uIGZvciBhIHNwZWNpZmljIHZlcnNpb24gdXNpbmcgYW4gYW5jaG9yXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXROb2RlUGVybWFsaW5rUGF0aChwZXJtYWxpbmtQYXRoOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuYWRkTm9kZU1ldGEoeyBwZXJtYWxpbmtQYXRoIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIG92ZXJ3cml0aW5nIGBwYXRoYCBpbiBjYXNlIGZvciBsYXRlc3QgdmVyc2lvbiBwYXRoXHJcbiAgICpcclxuICAgKiBFeGFtcGxlOiB0byBvdmVyd3JpdGUgYHBhdGhgIGdpdGh1Yi92Mi9kb2Mgd2l0aCBgc2VvRnJpZW5kbHlQYXRoYCBnaXRodWIvZG9jIGlmIHYyIGlzIGN1cnJlbnQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXROb2RlU2VvRnJpZW5kbHlQYXRoKHNlb0ZyaWVuZGx5UGF0aDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFkZE5vZGVNZXRhKHsgc2VvRnJpZW5kbHlQYXRoIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmVyc2lvbiBvZiBwYXJlbnQgb3Igc2VsZlxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2V0Tm9kZVZlcnNpb24odmVyc2lvbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFkZE5vZGVNZXRhKHsgdmVyc2lvbiB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvIG92ZXJ3cml0ZSBjdXJyZW50VmVyc2lvbiBpbiBtZXRhIGV2ZXJ5IHRpbWUgYSBuZXdlciB2ZXJzaW9uIGlzIGZvdW5kXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXROb2RlQ3VycmVudFZlcnNpb24oY3VycmVudFZlcnNpb246IHN0cmluZykge1xyXG4gICAgaWYgKCFNZW51U2VnbWVudC5pc1ZlcnNpb24oY3VycmVudFZlcnNpb24pKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignZXhwZWN0ZWQgdmVyc2lvbiB0byBtYXRjaCBhIHZlcnNpb24gcGFydCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkTm9kZU1ldGEoeyBjdXJyZW50VmVyc2lvbiB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RyaXBWZXJzaW9uTnVtYmVyc0Zyb21MYXRlc3RWZXJzaW9uSW5TZW9GcmllbmRseVBhdGgoKSB7XHJcbiAgICBjb25zdCB1cGRhdGVTZW9QYXRoc1JlY3Vyc2l2ZWx5ID0gKFxyXG4gICAgICBjb2xsZWN0aW9uOiBNZW51Tm9kZSxcclxuICAgICAgcmVwbGFjZVBhdGggPSBudWxsLFxyXG4gICAgICB3aXRoUGF0aCA9IG51bGwsXHJcbiAgICApID0+IHtcclxuICAgICAgZm9yIChjb25zdCBbc2VnbWVudCwgbm9kZV0gb2YgT2JqZWN0LmVudHJpZXMoY29sbGVjdGlvbikpIHtcclxuICAgICAgICBpZiAoTWVudVNlZ21lbnQuaXNNZXRhKHNlZ21lbnQpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgLy8gRXhhbXBsZTogUmVjdXJzaXZlbHkgcmVwbGFjZSAvZ2l0aHViL3ZbbGF0ZXN0XS9zb21ldGhpbmcgd2l0aCAvZ2l0aHViL3NvbWV0aGluZy5cclxuICAgICAgICBpZiAocmVwbGFjZVBhdGggJiYgd2l0aFBhdGggJiYgaGFzKG5vZGUsICdtZXRhLnBhdGgnKSkge1xyXG4gICAgICAgICAgc2V0KGNvbGxlY3Rpb24sIGAke3NlZ21lbnR9Lm1ldGEucGF0aGAsIG5vZGUubWV0YS5wYXRoLnJlcGxhY2UocmVwbGFjZVBhdGgsIHdpdGhQYXRoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIU1lbnVOb2RlLmhhc0NoaWxkcmVuKG5vZGUpKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChNZW51U2VnbWVudC5pc1ZlcnNpb25Db250YWluZXIoc2VnbWVudCkpIHtcclxuICAgICAgICAgIGNvbnN0IHsgY3VycmVudFZlcnNpb24gfSA9IG5vZGUubWV0YTtcclxuICAgICAgICAgIGNvbnN0IHsgc2VvRnJpZW5kbHlQYXRoIH0gPSBub2RlW2N1cnJlbnRWZXJzaW9uXS5tZXRhO1xyXG4gICAgICAgICAgY29uc3QgcmVwbGFjZSA9IGdldChjb2xsZWN0aW9uLCBgJHtzZWdtZW50fS4ke2N1cnJlbnRWZXJzaW9ufS5tZXRhLnBhdGhgKTtcclxuICAgICAgICAgIHNldChjb2xsZWN0aW9uLCBgJHtzZWdtZW50fS4ke2N1cnJlbnRWZXJzaW9ufS5tZXRhLnBhdGhgLCBzZW9GcmllbmRseVBhdGgpO1xyXG4gICAgICAgICAgdXBkYXRlU2VvUGF0aHNSZWN1cnNpdmVseShub2RlLCByZXBsYWNlLCBzZW9GcmllbmRseVBhdGgpO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGVTZW9QYXRoc1JlY3Vyc2l2ZWx5KG5vZGUsIHJlcGxhY2VQYXRoLCB3aXRoUGF0aCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlU2VvUGF0aHNSZWN1cnNpdmVseSh0aGlzLnN0cnVjdHVyZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFudXAoKSB7XHJcbiAgICBjb25zdCBjbGVhbnVwUmVjdXJzaXZlbHkgPSAoY29sbGVjdGlvbjogTWVudU5vZGUpID0+IHtcclxuICAgICAgZm9yIChjb25zdCBbc2VnbWVudCwgbm9kZV0gb2YgT2JqZWN0LmVudHJpZXMoY29sbGVjdGlvbikpIHtcclxuICAgICAgICBpZiAoTWVudVNlZ21lbnQuaXNNZXRhKHNlZ21lbnQpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgdW5zZXQoY29sbGVjdGlvbiwgYCR7c2VnbWVudH0ubWV0YS5zZW9GcmllbmRseVBhdGhgKTtcclxuXHJcbiAgICAgICAgaWYgKE1lbnVOb2RlLmhhc0NoaWxkcmVuKG5vZGUpKSB7XHJcbiAgICAgICAgICBjbGVhbnVwUmVjdXJzaXZlbHkobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY2xlYW51cFJlY3Vyc2l2ZWx5KHRoaXMuc3RydWN0dXJlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWVudU5vZGUgfSBmcm9tICdAL3Rvb2xzL21lbnUvbWVudS1ub2RlJztcclxuaW1wb3J0IHsgTWVudVNlZ21lbnQgfSBmcm9tICdAL3Rvb2xzL21lbnUvbWVudS1zZWdtZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51U3RydWN0dXJlUGFyc2VyIHtcclxuICBwdWJsaWMgc3RhdGljIGdldEZpbGVNZXRhcyhtZW51U3RydWN0dXJlOiBNZW51Tm9kZSwgZmlsZU1ldGFzID0gW10pIHtcclxuICAgIGZvciAoY29uc3QgW3NlZ21lbnQsIG5vZGVdIG9mIE9iamVjdC5lbnRyaWVzKG1lbnVTdHJ1Y3R1cmUpKSB7XHJcbiAgICAgIGlmIChNZW51U2VnbWVudC5pc01ldGEoc2VnbWVudCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgaWYgKE1lbnVOb2RlLmlzRmlsZShub2RlKSkge1xyXG4gICAgICAgIGZpbGVNZXRhcy5wdXNoKG5vZGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoTWVudU5vZGUuaGFzQ2hpbGRyZW4obm9kZSkpIHtcclxuICAgICAgICB0aGlzLmdldEZpbGVNZXRhcyhub2RlLCBmaWxlTWV0YXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZpbGVNZXRhcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWVudU5vZGUgfSBmcm9tICdAL3Rvb2xzL21lbnUvbWVudS1ub2RlJztcclxuaW1wb3J0IHsgTWVudVNlZ21lbnQgfSBmcm9tICdAL3Rvb2xzL21lbnUvbWVudS1zZWdtZW50JztcclxuaW1wb3J0IHsgTWVudVN0cnVjdHVyZUdlbmVyYXRvciB9IGZyb20gJ0AvdG9vbHMvbWVudS9tZW51LXN0cnVjdHVyZS1nZW5lcmF0b3InO1xyXG5pbXBvcnQgeyBNZW51U3RydWN0dXJlUGFyc2VyIH0gZnJvbSAnQC90b29scy9tZW51L21lbnUtc3RydWN0dXJlLXBhcnNlcic7XHJcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSAnQC90b29scy91dGlscyc7XHJcbmltcG9ydCB7IHJlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luYyB9IGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgc2V0LCBnZXQgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgZnNQYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVTdHJ1Y3R1cmUge1xyXG4gIHByaXZhdGUgc3RhdGljIHNhdmVGaWxlID0gJ2NvcmUvbWVudS1zdHJ1Y3R1cmUuanNvbic7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2VuZXJhdGVGcm9tRmlsZXMoZmlsZVBhdGhzOiBzdHJpbmdbXSkge1xyXG4gICAgY29uc3QgbWVudVN0cnVjdHVyZSA9IGF3YWl0IE1lbnVTdHJ1Y3R1cmVHZW5lcmF0b3IuZ2VuZXJhdGVNZW51U3RydWN0dXJlKGZpbGVQYXRocyk7XHJcbiAgICBhd2FpdCB0aGlzLnNhdmUobWVudVN0cnVjdHVyZSk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnVTdHJ1Y3R1cmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldEZpbGVNZXRhcyhzdHJ1Y3R1cmU6IE1lbnVOb2RlKSB7XHJcbiAgICByZXR1cm4gTWVudVN0cnVjdHVyZVBhcnNlci5nZXRGaWxlTWV0YXMoc3RydWN0dXJlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZCgpIHtcclxuICAgIGNvbnN0IGFzSnNvbiA9IHJlYWRGaWxlU3luYyhmc1BhdGgucmVzb2x2ZSh0aGlzLnNhdmVGaWxlKSwgeyBlbmNvZGluZzogJ3V0ZjgnIH0pO1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoYXNKc29uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGFzeW5jIHNhdmUobWVudVN0cnVjdHVyZSkge1xyXG4gICAgY29uc3QgYXNKc29uID0gYCR7SlNPTi5zdHJpbmdpZnkoeyBkb2NzOiBtZW51U3RydWN0dXJlIH0sIG51bGwsIDIpfVxcbmA7XHJcbiAgICB3cml0ZUZpbGVTeW5jKGZzUGF0aC5yZXNvbHZlKHRoaXMuc2F2ZUZpbGUpLCBhc0pzb24sIHsgZW5jb2Rpbmc6ICd1dGY4JyB9KTtcclxuICAgIGF3YWl0IHNsZWVwKDI1MCk7IC8vIEFsbG93IGZvciB3aW5kb3dzIGZpbGVzeXN0ZW0gdG8gY2F0Y2ggdXAuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldEN1cnJlbnRWZXJzaW9ucyhjb2xsZWN0aW9uOiBNZW51Tm9kZSwgc2VjdGlvbnMgPSB7fSkge1xyXG4gICAgZm9yIChjb25zdCBbc2VnbWVudCwgbm9kZV0gb2YgT2JqZWN0LmVudHJpZXMoY29sbGVjdGlvbikpIHtcclxuICAgICAgaWYgKE1lbnVTZWdtZW50LmlzTWV0YShzZWdtZW50KSkgY29udGludWU7XHJcblxyXG4gICAgICBpZiAoTWVudVNlZ21lbnQuaXNWZXJzaW9uQ29udGFpbmVyKHNlZ21lbnQpKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYXRoLCBjdXJyZW50VmVyc2lvbiB9ID0gbm9kZS5tZXRhO1xyXG4gICAgICAgIHNldChzZWN0aW9ucywgYCR7cGF0aH1gLCBjdXJyZW50VmVyc2lvbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChNZW51Tm9kZS5oYXNDaGlsZHJlbihub2RlKSkge1xyXG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFZlcnNpb25zKG5vZGUsIHNlY3Rpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZWN0aW9ucztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXROb2RlQnlVcmwobWVudVN0cnVjdHVyZSwgdXJsUGF0aCkge1xyXG4gICAgcmV0dXJuIGdldChtZW51U3RydWN0dXJlLCB1cmxQYXRoLnJlcGxhY2UoL15cXC8rLywgJycpLnNwbGl0KCcvJykuam9pbignLicpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcclxuXHJcbmNvbnN0IGRldGVybWluZUxldmVsID0gKGxpbmUpID0+IHtcclxuICBmb3IgKGxldCBsZXZlbCA9IDA7IGxldmVsIDw9IDU7IGxldmVsICs9IDEpIHtcclxuICAgIGNvbnN0IGNoYXIgPSBsaW5lW2xldmVsXTtcclxuICAgIGlmIChjaGFyICE9PSAnIycpIHtcclxuICAgICAgcmV0dXJuIGxldmVsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5jb25zdCBleHRyYWN0VGl0bGUgPSAobGluZSkgPT4ge1xyXG4gIGlmICghbGluZSkge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgIGNvbnNvbGUubG9nKCdcXHUwMDFCWzMzbSVzXFx1MDAxQlswbSAgLSAlcycsICd3YXJuJywgJ1VuYWJsZSB0byBleHRyYWN0IHRpdGxlIGZyb20nLCBsaW5lKTtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgbGluZSAhPT0gJ3N0cmluZycpIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICBgRXhwZWN0ZWQgaGVhZGluZyB0byBjb25zaXN0IG9mIGEgc3RyaW5nLiBUaGF0IHdheSB3ZSBjYW4gZWFzaWx5IHVzZSB0aGVtIGFzIGFuY2hvcnMuXHJcbiAgICAgIFRoZSBmb2xsb3dpbmcgZG9lcyBub3QgYWRoZXJlIHRvIHRoaXMgcnVsZTogXCIke0pTT04uc3RyaW5naWZ5KGxpbmUsIG51bGwsIDIpfVwiYCxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbGluZS5yZXBsYWNlKC9eW1xccyNdKi8sICcnKS50cmltKCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZXh0cmFjdEFuY2hvcklkID0gKGxpbmUpID0+IHtcclxuICByZXR1cm4gZXh0cmFjdFRpdGxlKGxpbmUpLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5qb2luKCctJyk7XHJcbn07XHJcblxyXG5jb25zdCBmb3JjZVNpbmdsZUxpbmUgPSAoY29udGVudCkgPT4ge1xyXG4gIC8vIE9uZSBzcGFjZSBmb3IgZWFjaCBuZXdsaW5lXHJcbiAgcmV0dXJuIGNvbnRlbnQucmVwbGFjZSgvXFxuLywgJyAnKTtcclxufTtcclxuXHJcbmNvbnN0IGV4dHJhY3RTdW1tYXJ5ID0gKHJhd0NvbnRlbnQsIG1heExlbmd0aCA9IDEwMCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBmb3JjZVNpbmdsZUxpbmUocmF3Q29udGVudCk7XHJcblxyXG4gIGlmIChjb250ZW50Lmxlbmd0aCA8PSBtYXhMZW5ndGgpIHtcclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGAke2NvbnRlbnQuc2xpY2UoMCwgTWF0aC5taW4oY29udGVudC5sZW5ndGgsIG1heExlbmd0aCAtIDMpKX0uLi5gO1xyXG59O1xyXG5cclxuY29uc3QgaXNIZWFkaW5nID0gKGxpbmUpID0+IHtcclxuICByZXR1cm4gbGluZS5zdGFydHNXaXRoKCcjJyk7XHJcbn07XHJcblxyXG5jb25zdCBwYXJzZUxpbmUgPSAobGluZSkgPT4ge1xyXG4gIHJldHVybiBsaW5lO1xyXG59O1xyXG5cclxuY29uc3QgZmluYWxpc2VQcmV2aW91c1NlY3Rpb24gPSAoc2VjdGlvbikgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBzZWN0aW9uLmNvbnRlbnQudHJpbUxlZnQoJ1xcbicpLnRyaW1SaWdodCgnXFxuJyk7XHJcblxyXG4gIGNvbnN0IGZpbmFsaXNlZFNlY3Rpb24gPSBjbG9uZURlZXAoc2VjdGlvbik7XHJcbiAgZmluYWxpc2VkU2VjdGlvbi5jb250ZW50ID0gY29udGVudCB8fCAnKGVtcHR5KSc7XHJcbiAgZmluYWxpc2VkU2VjdGlvbi5zdW1tYXJ5ID0gZXh0cmFjdFN1bW1hcnkoY29udGVudCk7XHJcblxyXG4gIHJldHVybiBmaW5hbGlzZWRTZWN0aW9uO1xyXG59O1xyXG5cclxuY29uc3QgY3JlYXRlU2VjdGlvbkNyZWF0b3IgPSAobWV0YSkgPT4ge1xyXG4gIHJldHVybiAobGluZSkgPT4ge1xyXG4gICAgY29uc3QgeyBwYXRoLCB2ZXJzaW9uIH0gPSBtZXRhO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiBleHRyYWN0VGl0bGUobGluZSksXHJcbiAgICAgIGxldmVsOiBkZXRlcm1pbmVMZXZlbChsaW5lKSxcclxuICAgICAgcGF0aCxcclxuICAgICAgdmVyc2lvbixcclxuICAgICAgYW5jaG9ySWQ6IGV4dHJhY3RBbmNob3JJZChsaW5lKSxcclxuICAgICAgY29udGVudDogJycsXHJcbiAgICB9O1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHRyYWN0U2VjdGlvbnMobWV0YSwgY29udGVudHMpIHtcclxuICBjb25zdCBjcmVhdGVOZXdTZWN0aW9uRnJvbUxpbmUgPSBjcmVhdGVTZWN0aW9uQ3JlYXRvcihtZXRhKTtcclxuICBjb25zdCBsaW5lcyA9IGNvbnRlbnRzLnNwbGl0KCdcXG4nKTtcclxuICBjb25zdCBzZWN0aW9ucyA9IFtdO1xyXG5cclxuICBsZXQgc2VjdGlvbjtcclxuICBsZXQgc2tpcHBlZExpbmVzID0gMDtcclxuICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcclxuICAgIGlmIChpc0hlYWRpbmcobGluZSkpIHtcclxuICAgICAgaWYgKHNlY3Rpb24pIHtcclxuICAgICAgICBzZWN0aW9ucy5wdXNoKGZpbmFsaXNlUHJldmlvdXNTZWN0aW9uKHNlY3Rpb24pKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VjdGlvbiA9IGNyZWF0ZU5ld1NlY3Rpb25Gcm9tTGluZShsaW5lKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlY3Rpb24pIHtcclxuICAgICAgc2VjdGlvbi5jb250ZW50ICs9IGBcXG4ke3BhcnNlTGluZShsaW5lKX1gO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwcGVkTGluZXMgKz0gMTtcclxuICB9XHJcblxyXG4gIGlmIChzZWN0aW9uKSB7XHJcbiAgICBzZWN0aW9ucy5wdXNoKGZpbmFsaXNlUHJldmlvdXNTZWN0aW9uKHNlY3Rpb24pKTtcclxuICB9XHJcblxyXG4gIGlmIChza2lwcGVkTGluZXMgPj0gMSkge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgIGNvbnNvbGUubG9nKGBTa2lwcGVkICR7c2tpcHBlZExpbmVzfSBsaW5lcyB0aGF0IG9jY3VycmVkIGJlZm9yZSBhbnkgdGl0bGVgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzZWN0aW9ucztcclxufVxyXG4iLCJpbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJztcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIGVudmlyb25tZW50IHZhcmlhYmxlIHRoYXQgaXMgc2V0IGR1cmluZyBidWlsZCB0aW1lLFxyXG4gKiBib3RoIG9uIHRoZSBzZXJ2ZXIgYW5kIGluIHRoZSBicm93c2VyLlxyXG4gKlxyXG4gKiBGb3IgYSB2YXJpYWJsZSB0byBzaG93IHVwIGluIHRoZSBicm93c2VyLCBpdCBuZWVkcyB0byBiZSBkZWZpbmVkIGluIG5leHQuY29uZmlnLmpzIHVuZGVyXHJcbiAqIHRoZSBwcm9wZXJ0eSBgcHVibGljUnVudGltZUNvbmZpZ2AuXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAgIC0gVGhpcyBpcyBhIGxvdyBsZXZlbCBtZXRob2QsIHRoYXQgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbiBzcGVjaWZpYyBjYXNlcyB3aGVyZSB0aGUgc3RvcmUgaGFzXHJcbiAqICAgICBub3QgeWV0IGJlZW4gaW5pdGlhbGlzZWQsIGJ1dCB0aGUgdmFsdWUgaXMgc3RpbGwgcmVxdWlyZWQuXHJcbiAqICAgLSBBbiBlbXB0eSBzdHJpbmcgaXMgb25seSBleHBlY3RlZCBpZiB0aGlzIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIGluIHRoZSBjb2RlIHBhdGggb2YgYSBjdXN0b21cclxuICogICAgIHNjcmlwdCBvdXRzaWRlIG9mIE5leHRKUywgdGh1cyBub3QgdXNpbmcgbmV4dC5jb25maWcuanMgY29uZmlndXJhdGlvbi5cclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRJc29tb3JwaGljVmFsdWUgPSAodmFyaWFibGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGNvbmZpZyA9IGdldENvbmZpZygpO1xyXG5cclxuICByZXR1cm4gY29uZmlnID8gY29uZmlnLnB1YmxpY1J1bnRpbWVDb25maWdbdmFyaWFibGVOYW1lXSA6ICcnO1xyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3NsZWVwJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdHJpbmcnO1xyXG4iLCJleHBvcnQgY29uc3Qgc2xlZXAgPSBhc3luYyAobXMpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGNhcGl0YWxpemVGaXJzdExldHRlciA9IChbZmlyc3QsIC4uLnJlc3RdLCBsb2NhbGUgPSAnZW4nKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBmaXJzdC50b0xvY2FsZVVwcGVyQ2FzZShsb2NhbGUpICsgcmVzdC5qb2luKCcnKTtcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBmaXJzdC50b0xvY2FsZVVwcGVyQ2FzZShsb2NhbGUpICsgcmVzdDtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVwbGFjZUFsbCA9IChpbnB1dCwgc2VhcmNoVmFsdWU6IHN0cmluZywgcmVwbGFjZVZhbHVlOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4gaW5wdXQuc3BsaXQoc2VhcmNoVmFsdWUpLmpvaW4ocmVwbGFjZVZhbHVlKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBub3JtYWxpc2VUaXRsZSA9IChyYXdGaWxlTmFtZSkgPT4ge1xyXG4gIGNvbnN0IGZpbGVOYW1lID0gcmVwbGFjZUFsbChyYXdGaWxlTmFtZSwgJy0nLCAnICcpO1xyXG5cclxuICAvLyBGb3Igbm93IHRoaXMgaXMgdGhlIG9ubHkgZXhjZXB0aW9uLCB0aGlzIGNvdWxkIGJlIG1hZGUgc21hcnRlciBsYXRlclxyXG4gIGlmIChmaWxlTmFtZSA9PT0gJ2lvcycpIHtcclxuICAgIHJldHVybiAnaU9TJztcclxuICB9XHJcblxyXG4gIHJldHVybiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoZmlsZU5hbWUpO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaWdobGlnaHQuanMvbGliL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYmFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jc2hhcnBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvamF2YXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9wb3dlcnNoZWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3J1YnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdHlwZXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy95YW1sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2FsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbnN0YW50c2VhcmNoLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbnN0YW50c2VhcmNoL2Nvbm5lY3RvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFya2Rvd25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=