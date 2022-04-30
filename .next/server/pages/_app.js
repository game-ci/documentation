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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/styles/antd-custom.less":
/*!****************************************!*\
  !*** ./assets/styles/antd-custom.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./core/menu-structure.json":
/*!**********************************!*\
  !*** ./core/menu-structure.json ***!
  \**********************************/
/*! exports provided: docs, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"docs\":{\"cloud-runner\":{\"meta\":{\"path\":\"cloud-runner\",\"order\":99,\"type\":\"folder\"},\"<versions>\":{\"meta\":{\"currentVersion\":\"v0\",\"path\":\"cloud-runner\",\"type\":\"identifier\"},\"v0\":{\"meta\":{\"path\":\"cloud-runner\",\"order\":99,\"type\":\"version\"},\"introduction\":{\"name\":\"Introduction\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/01-introduction.md\",\"permalinkPath\":\"cloud-runner/v0/introduction\",\"path\":\"cloud-runner/introduction\",\"order\":1,\"type\":\"file\"}},\"getting-started\":{\"meta\":{\"path\":\"cloud-runner/getting-started\",\"order\":2,\"type\":\"folder\"},\"aws\":{\"name\":\"Aws\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/02-getting-started/aws.md\",\"permalinkPath\":\"cloud-runner/v0/getting-started/aws\",\"path\":\"cloud-runner/getting-started/aws\",\"order\":99,\"type\":\"file\"}},\"kuberentes\":{\"name\":\"Kuberentes\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/02-getting-started/kuberentes.md\",\"permalinkPath\":\"cloud-runner/v0/getting-started/kuberentes\",\"path\":\"cloud-runner/getting-started/kuberentes\",\"order\":99,\"type\":\"file\"}}},\"configuration\":{\"name\":\"Configuration\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/03-configuration.md\",\"permalinkPath\":\"cloud-runner/v0/configuration\",\"path\":\"cloud-runner/configuration\",\"order\":3,\"type\":\"file\"}},\"command-line\":{\"name\":\"Command line\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/04-command-line.md\",\"permalinkPath\":\"cloud-runner/v0/command-line\",\"path\":\"cloud-runner/command-line\",\"order\":4,\"type\":\"file\"}},\"advanced-topics\":{\"meta\":{\"path\":\"cloud-runner/advanced-topics\",\"order\":5,\"type\":\"folder\"},\"caching\":{\"name\":\"Caching\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/01-caching.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/caching\",\"path\":\"cloud-runner/advanced-topics/caching\",\"order\":1,\"type\":\"file\"}},\"performance\":{\"name\":\"Performance\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/02-performance.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/performance\",\"path\":\"cloud-runner/advanced-topics/performance\",\"order\":2,\"type\":\"file\"}},\"hooks\":{\"name\":\"Hooks\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/03-hooks.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/hooks\",\"path\":\"cloud-runner/advanced-topics/hooks\",\"order\":3,\"type\":\"file\"}},\"custom-steps\":{\"name\":\"Custom steps\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/04-custom-steps.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/custom-steps\",\"path\":\"cloud-runner/advanced-topics/custom-steps\",\"order\":4,\"type\":\"file\"}},\"input-override\":{\"name\":\"Input override\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/05-input-override.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/input-override\",\"path\":\"cloud-runner/advanced-topics/input-override\",\"order\":5,\"type\":\"file\"}},\"garbage-collection\":{\"name\":\"Garbage collection\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/06-garbage-collection.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/garbage-collection\",\"path\":\"cloud-runner/advanced-topics/garbage-collection\",\"order\":6,\"type\":\"file\"}},\"logging\":{\"name\":\"Logging\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/08-logging.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/logging\",\"path\":\"cloud-runner/advanced-topics/logging\",\"order\":8,\"type\":\"file\"}},\"secrets\":{\"name\":\"Secrets\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/08-secrets.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/secrets\",\"path\":\"cloud-runner/advanced-topics/secrets\",\"order\":8,\"type\":\"file\"}},\"github-ephemeral-runners\":{\"name\":\"Github ephemeral runners\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/05-advanced-topics/09-github-ephemeral-runners.md\",\"permalinkPath\":\"cloud-runner/v0/advanced-topics/github-ephemeral-runners\",\"path\":\"cloud-runner/advanced-topics/github-ephemeral-runners\",\"order\":9,\"type\":\"file\"}}},\"development\":{\"name\":\"Development\",\"meta\":{\"version\":\"v0\",\"absolutePath\":\"cloud-runner/v0/06-development.md\",\"permalinkPath\":\"cloud-runner/v0/development\",\"path\":\"cloud-runner/development\",\"order\":6,\"type\":\"file\"}}}}},\"docker\":{\"meta\":{\"path\":\"docker\",\"order\":99,\"type\":\"folder\"},\"docker-images\":{\"name\":\"Docker images\",\"meta\":{\"version\":null,\"absolutePath\":\"docker/01-docker-images.md\",\"permalinkPath\":\"docker/docker-images\",\"path\":\"docker/docker-images\",\"order\":1,\"type\":\"file\"}},\"windows-docker-images\":{\"name\":\"Windows docker images\",\"meta\":{\"version\":null,\"absolutePath\":\"docker/02-windows-docker-images.md\",\"permalinkPath\":\"docker/windows-docker-images\",\"path\":\"docker/windows-docker-images\",\"order\":2,\"type\":\"file\"}},\"customize-docker-images\":{\"name\":\"Customize docker images\",\"meta\":{\"version\":null,\"absolutePath\":\"docker/03-customize-docker-images.md\",\"permalinkPath\":\"docker/customize-docker-images\",\"path\":\"docker/customize-docker-images\",\"order\":3,\"type\":\"file\"}}},\"github\":{\"meta\":{\"path\":\"github\",\"order\":99,\"type\":\"folder\"},\"<versions>\":{\"meta\":{\"currentVersion\":\"v2\",\"path\":\"github\",\"type\":\"identifier\"},\"v1\":{\"meta\":{\"path\":\"github/v1\",\"order\":99,\"type\":\"version\"},\"getting-started\":{\"name\":\"Getting started\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/01-getting-started.md\",\"permalinkPath\":\"github/v1/getting-started\",\"path\":\"github/v1/getting-started\",\"order\":1,\"type\":\"file\"}},\"activation\":{\"name\":\"Activation\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/02-activation.md\",\"permalinkPath\":\"github/v1/activation\",\"path\":\"github/v1/activation\",\"order\":2,\"type\":\"file\"}},\"test-runner\":{\"name\":\"Test runner\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/03-test-runner.md\",\"permalinkPath\":\"github/v1/test-runner\",\"path\":\"github/v1/test-runner\",\"order\":3,\"type\":\"file\"}},\"builder\":{\"name\":\"Builder\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/04-builder.md\",\"permalinkPath\":\"github/v1/builder\",\"path\":\"github/v1/builder\",\"order\":4,\"type\":\"file\"}},\"returning-a-license\":{\"name\":\"Returning a license\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/05-returning-a-license.md\",\"permalinkPath\":\"github/v1/returning-a-license\",\"path\":\"github/v1/returning-a-license\",\"order\":5,\"type\":\"file\"}},\"deployment\":{\"meta\":{\"path\":\"github/v1/deployment\",\"order\":6,\"type\":\"folder\"},\"android\":{\"name\":\"Android\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/06-deployment/android.md\",\"permalinkPath\":\"github/v1/deployment/android\",\"path\":\"github/v1/deployment/android\",\"order\":99,\"type\":\"file\"}},\"ios\":{\"name\":\"iOS\",\"meta\":{\"version\":\"v1\",\"absolutePath\":\"github/v1/06-deployment/ios.md\",\"permalinkPath\":\"github/v1/deployment/ios\",\"path\":\"github/v1/deployment/ios\",\"order\":99,\"type\":\"file\"}}}},\"v2\":{\"meta\":{\"path\":\"github\",\"order\":99,\"type\":\"version\"},\"getting-started\":{\"name\":\"Getting started\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/01-getting-started.md\",\"permalinkPath\":\"github/v2/getting-started\",\"path\":\"github/getting-started\",\"order\":1,\"type\":\"file\"}},\"activation\":{\"name\":\"Activation\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/02-activation.md\",\"permalinkPath\":\"github/v2/activation\",\"path\":\"github/activation\",\"order\":2,\"type\":\"file\"}},\"test-runner\":{\"name\":\"Test runner\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/03-test-runner.md\",\"permalinkPath\":\"github/v2/test-runner\",\"path\":\"github/test-runner\",\"order\":3,\"type\":\"file\"}},\"builder\":{\"name\":\"Builder\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/04-builder.md\",\"permalinkPath\":\"github/v2/builder\",\"path\":\"github/builder\",\"order\":4,\"type\":\"file\"}},\"returning-a-license\":{\"name\":\"Returning a license\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/05-returning-a-license.md\",\"permalinkPath\":\"github/v2/returning-a-license\",\"path\":\"github/returning-a-license\",\"order\":5,\"type\":\"file\"}},\"deployment\":{\"meta\":{\"path\":\"github/deployment\",\"order\":15,\"type\":\"folder\"},\"android\":{\"name\":\"Android\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/15-deployment/android.md\",\"permalinkPath\":\"github/v2/deployment/android\",\"path\":\"github/deployment/android\",\"order\":99,\"type\":\"file\"}},\"ios\":{\"name\":\"iOS\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/15-deployment/ios.md\",\"permalinkPath\":\"github/v2/deployment/ios\",\"path\":\"github/deployment/ios\",\"order\":99,\"type\":\"file\"}},\"steam\":{\"name\":\"Steam\",\"meta\":{\"version\":\"v2\",\"absolutePath\":\"github/v2/15-deployment/steam.md\",\"permalinkPath\":\"github/v2/deployment/steam\",\"path\":\"github/deployment/steam\",\"order\":99,\"type\":\"file\"}}}}}},\"gitlab\":{\"meta\":{\"path\":\"gitlab\",\"order\":99,\"type\":\"folder\"},\"getting-started\":{\"name\":\"Getting started\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/01-getting-started.md\",\"permalinkPath\":\"gitlab/getting-started\",\"path\":\"gitlab/getting-started\",\"order\":1,\"type\":\"file\"}},\"activation\":{\"name\":\"Activation\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/02-activation.md\",\"permalinkPath\":\"gitlab/activation\",\"path\":\"gitlab/activation\",\"order\":2,\"type\":\"file\"}},\"example-project\":{\"name\":\"Example project\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/03-example-project.md\",\"permalinkPath\":\"gitlab/example-project\",\"path\":\"gitlab/example-project\",\"order\":3,\"type\":\"file\"}},\"custom-build-options\":{\"name\":\"Custom build options\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/custom-build-options.md\",\"permalinkPath\":\"gitlab/custom-build-options\",\"path\":\"gitlab/custom-build-options\",\"order\":99,\"type\":\"file\"}},\"deployment\":{\"meta\":{\"path\":\"gitlab/deployment\",\"order\":99,\"type\":\"folder\"},\"android\":{\"name\":\"Android\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/deployment/android.md\",\"permalinkPath\":\"gitlab/deployment/android\",\"path\":\"gitlab/deployment/android\",\"order\":99,\"type\":\"file\"}},\"ios\":{\"name\":\"iOS\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/deployment/ios.md\",\"permalinkPath\":\"gitlab/deployment/ios\",\"path\":\"gitlab/deployment/ios\",\"order\":99,\"type\":\"file\"}}},\"tests\":{\"name\":\"Tests\",\"meta\":{\"version\":null,\"absolutePath\":\"gitlab/tests.md\",\"permalinkPath\":\"gitlab/tests\",\"path\":\"gitlab/tests\",\"order\":99,\"type\":\"file\"}}},\"introduction\":{\"meta\":{\"path\":\"introduction\",\"order\":99,\"type\":\"folder\"},\"getting-started\":{\"name\":\"Getting started\",\"meta\":{\"version\":null,\"absolutePath\":\"introduction/getting-started.md\",\"permalinkPath\":\"introduction/getting-started\",\"path\":\"introduction/getting-started\",\"order\":99,\"type\":\"file\"}}},\"troubleshooting\":{\"meta\":{\"path\":\"troubleshooting\",\"order\":99,\"type\":\"folder\"},\"common-issues\":{\"name\":\"Common issues\",\"meta\":{\"version\":null,\"absolutePath\":\"troubleshooting/common-issues.md\",\"permalinkPath\":\"troubleshooting/common-issues\",\"path\":\"troubleshooting/common-issues\",\"order\":99,\"type\":\"file\"}}}}}");

/***/ }),

/***/ "./core/search/index.ts":
/*!******************************!*\
  !*** ./core/search/index.ts ***!
  \******************************/
/*! exports provided: client, indexName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexName", function() { return indexName; });
/* harmony import */ var algoliasearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! algoliasearch */ "algoliasearch");
/* harmony import */ var algoliasearch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(algoliasearch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/config */ "./core/config.ts");


const client = algoliasearch__WEBPACK_IMPORTED_MODULE_0___default()(_core_config__WEBPACK_IMPORTED_MODULE_1__["default"].search.applicationId, _core_config__WEBPACK_IMPORTED_MODULE_1__["default"].search.publicApiKey);
const indexName = _core_config__WEBPACK_IMPORTED_MODULE_1__["default"].search.index;

/***/ }),

/***/ "./logic/counter/counter-slice.js":
/*!****************************************!*\
  !*** ./logic/counter/counter-slice.js ***!
  \****************************************/
/*! exports provided: counterSlice, incremented, decremented */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterSlice", function() { return counterSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incremented", function() { return incremented; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decremented", function() { return decremented; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

/**
 * official example from redux, for reference
 */

const counterSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decremented: state => {
      state.value -= 1;
    }
  }
});
const {
  incremented,
  decremented
} = counterSlice.actions;

/***/ }),

/***/ "./logic/index.js":
/*!************************!*\
  !*** ./logic/index.js ***!
  \************************/
/*! exports provided: reducer, saga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saga", function() { return saga; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _counter_counter_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter/counter-slice */ "./logic/counter/counter-slice.js");
/* harmony import */ var _versions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./versions */ "./logic/versions/index.ts");



const reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  counter: _counter_counter_slice__WEBPACK_IMPORTED_MODULE_1__["counterSlice"],
  versions: _versions__WEBPACK_IMPORTED_MODULE_2__["versionsReducer"]
});
const saga = () => {};

/***/ }),

/***/ "./logic/versions/index.ts":
/*!*********************************!*\
  !*** ./logic/versions/index.ts ***!
  \*********************************/
/*! exports provided: versionsReducer, versionsSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "versionsReducer", function() { return versionsReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "versionsSaga", function() { return versionsSaga; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _selected_version_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selected-version-slice */ "./logic/versions/selected-version-slice.ts");


const versionsReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  selected: _selected_version_slice__WEBPACK_IMPORTED_MODULE_1__["selectedVersionSlice"].reducer
});
const versionsSaga = () => {};

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

/***/ "./node_modules/highlight.js/styles/dracula.css":
/*!******************************************************!*\
  !*** ./node_modules/highlight.js/styles/dracula.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons */ "react-icons");
/* harmony import */ var react_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-instantsearch-dom */ "react-instantsearch-dom");
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/search */ "./core/search/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var logic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! logic */ "./logic/index.js");
/* harmony import */ var reactfire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactfire */ "reactfire");
/* harmony import */ var reactfire__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(reactfire__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core/config */ "./core/config.ts");
/* harmony import */ var _assets_styles_antd_custom_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/styles/antd-custom.less */ "./assets/styles/antd-custom.less");
/* harmony import */ var _assets_styles_antd_custom_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_antd_custom_less__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var highlight_js_styles_dracula_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highlight.js/styles/dracula.css */ "./node_modules/highlight.js/styles/dracula.css");
/* harmony import */ var highlight_js_styles_dracula_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_dracula_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\Mark\\Documents\\documentation\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__["configureStore"])({
  reducer: logic__WEBPACK_IMPORTED_MODULE_8__["reducer"]
});
function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    store: store,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(reactfire__WEBPACK_IMPORTED_MODULE_9__["FirebaseAppProvider"], {
      firebaseConfig: core_config__WEBPACK_IMPORTED_MODULE_10__["default"].firebase,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_4__["InstantSearch"], {
        searchClient: _core_search__WEBPACK_IMPORTED_MODULE_5__["client"],
        indexName: _core_search__WEBPACK_IMPORTED_MODULE_5__["indexName"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_icons__WEBPACK_IMPORTED_MODULE_3__["IconContext"].Provider, {
          value: {
            className: 'anticon'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

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

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "algoliasearch":
/*!********************************!*\
  !*** external "algoliasearch" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("algoliasearch");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons":
/*!******************************!*\
  !*** external "react-icons" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons");

/***/ }),

/***/ "react-instantsearch-dom":
/*!******************************************!*\
  !*** external "react-instantsearch-dom" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-instantsearch-dom");

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

/***/ }),

/***/ "reactfire":
/*!****************************!*\
  !*** external "reactfire" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactfire");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29yZS9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9zZWFyY2gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vbG9naWMvY291bnRlci9jb3VudGVyLXNsaWNlLmpzIiwid2VicGFjazovLy8uL2xvZ2ljL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xvZ2ljL3ZlcnNpb25zL2luZGV4LnRzIiwid2VicGFjazovLy8uL2xvZ2ljL3ZlcnNpb25zL3NlbGVjdGVkLXZlcnNpb24tc2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vdG9vbHMvbWVudS9tZW51LW5vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vdG9vbHMvbWVudS9tZW51LXNlZ21lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vdG9vbHMvbWVudS9tZW51LXN0cnVjdHVyZS1nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vdG9vbHMvbWVudS9tZW51LXN0cnVjdHVyZS1wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdG9vbHMvbWVudS9tZW51LXN0cnVjdHVyZS50cyIsIndlYnBhY2s6Ly8vLi90b29scy91dGlscy9nZXQtaXNvbW9ycGhpYy12YWx1ZS50cyIsIndlYnBhY2s6Ly8vLi90b29scy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90b29scy91dGlscy9zbGVlcC50cyIsIndlYnBhY2s6Ly8vLi90b29scy91dGlscy9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFsZ29saWFzZWFyY2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW5zdGFudHNlYXJjaC1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0ZmlyZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiXSwibmFtZXMiOlsiYmFzZVVybCIsImRvY3NQYXRoIiwiZmlyZWJhc2UiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJiYWNrZW5kVXJsIiwic2VhcmNoIiwiYXBwbGljYXRpb25JZCIsImluZGV4IiwiZ2V0SXNvbW9ycGhpY1ZhbHVlIiwicHVibGljQXBpS2V5IiwiaGl0c1BlclBhZ2UiLCJzZXR0aW5ncyIsInNlYXJjaGFibGVBdHRyaWJ1dGVzIiwiY3VzdG9tUmFua2luZyIsImF0dHJpYnV0ZXNGb3JGYWNldGluZyIsImF0dHJpYnV0ZUZvckRpc3RpbmN0IiwiY2xpZW50IiwiYWxnb2xpYXNlYXJjaCIsImNvbmZpZyIsImluZGV4TmFtZSIsImNvdW50ZXJTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwicmVkdWNlcnMiLCJpbmNyZW1lbnRlZCIsInN0YXRlIiwiZGVjcmVtZW50ZWQiLCJhY3Rpb25zIiwicmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImNvdW50ZXIiLCJ2ZXJzaW9ucyIsInZlcnNpb25zUmVkdWNlciIsInNhZ2EiLCJzZWxlY3RlZCIsInNlbGVjdGVkVmVyc2lvblNsaWNlIiwidmVyc2lvbnNTYWdhIiwiTWVudVN0cnVjdHVyZSIsImdldEN1cnJlbnRWZXJzaW9ucyIsIm1lbnVTdHJ1Y3R1cmUiLCJ1cGRhdGVTZWxlY3Rpb24iLCJhY3Rpb24iLCJzZWN0aW9uIiwic2VsZWN0aW9uIiwicGF5bG9hZCIsInNlbGVjdGVkVmVyc2lvbnNTZWxlY3RvciIsInN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZWFyY2hDbGllbnQiLCJzZWFyY2hJbmRleCIsImNsYXNzTmFtZSIsIk1lbnVOb2RlIiwiaXNGaWxlIiwibm9kZSIsImdldCIsImlzRm9sZGVyIiwiaXNQYWdlIiwiaXNWZXJzaW9uIiwiaGFzQ2hpbGRyZW4iLCJoYXNWZXJzaW9uQ29udGFpbmVyIiwiaGFzIiwiTWVudVNlZ21lbnQiLCJ2ZXJzaW9uQ29udGFpbmVySWRlbnRpZmllciIsImdldEN1cnJlbnRWZXJzaW9uIiwidmVyc2lvbkNvbnRhaW5lck5vZGUiLCJmaW5kRmlyc3RQYWdlIiwibWVudU5vZGUiLCJwYWdlIiwiZmluZEZpcnN0UGFnZUluRm9sZGVyIiwibWV0YSIsInBhdGgiLCJmaWxlTWV0YXMiLCJjb250YWluZXJzIiwic2VnbWVudCIsIk9iamVjdCIsImVudHJpZXMiLCJpc01ldGEiLCJwdXNoIiwiaXNWZXJzaW9uQ29udGFpbmVyIiwiY3VycmVudFZlcnNpb24iLCJsZW5ndGgiLCJjb250YWluZXIiLCJyZXN1bHQiLCJ0ZXN0IiwidG9UaXRsZSIsIm5vcm1hbGlzZVRpdGxlIiwiTWVudVN0cnVjdHVyZUdlbmVyYXRvciIsImtleUFycmF5IiwicGVybWFsaW5rUGF0aEFycmF5Iiwic2VvRnJpZW5kbHlQYXRoQXJyYXkiLCJ2ZXJzaW9uT2ZDdXJyZW50UGF0aCIsImtleSIsImpvaW4iLCJwZXJtYWxpbmtQYXRoIiwic2VvRnJpZW5kbHlQYXRoIiwicmVzZXQiLCJnZW5lcmF0ZU1lbnVTdHJ1Y3R1cmUiLCJmaWxlTmFtZXMiLCJjb25zb2xlIiwibG9nIiwic3RydWN0dXJlIiwiZmlsZU5hbWUiLCJhZGRGcm9tRmlsZSIsInN0cmlwVmVyc2lvbk51bWJlcnNGcm9tTGF0ZXN0VmVyc2lvbkluU2VvRnJpZW5kbHlQYXRoIiwiY2xlYW51cCIsInRvT2JqZWN0IiwidG9TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5Iiwic2VnbWVudHMiLCJyZXBsYWNlIiwic3BsaXQiLCJhZGRTdHJ1Y3R1cmVGcm9tU2VnbWVudHMiLCJhZGRNZXRhRm9yRmlsZU5vZGUiLCJvcmRlciIsImV4dHJhY3RJbmZvRnJvbVNlZ21lbnQiLCJhZGRTZWdtZW50VG9LZXkiLCJzZXROb2RlVHlwZSIsInNldE5vZGVQYXRoIiwic2V0VmVyc2lvbk9mQ3VycmVudFBhdGgiLCJzZXROb2RlQ3VycmVudFZlcnNpb24iLCJhZGRTZWdtZW50VG9QZXJtYWxpbmtQYXRoIiwiYWRkU2VnbWVudFRvU2VvRnJpZW5kbHlQYXRoIiwic2V0Tm9kZU9yZGVyIiwic2V0Tm9kZVNlb0ZyaWVuZGx5UGF0aCIsInNldE5vZGVOYW1lIiwic2V0Tm9kZVBlcm1hbGlua1BhdGgiLCJzZXROb2RlQWJzb2x1dGVQYXRoIiwic2V0Tm9kZVZlcnNpb24iLCJzb3J0T3JkZXJOdW1iZXJSZWdleCIsImV4dHJhY3RTb3J0T3JkZXJOdW1iZXIiLCJwYXJ0IiwiTnVtYmVyIiwibWF0Y2giLCJzdHJpcFNvcnRPcmRlck51bWJlciIsInJlbW92ZUZvcmJpZGRlbkNoYXJhY3RlcnMiLCJyZXBsYWNlQWxsIiwic2FuaXRpc2VTZWdtZW50IiwiZmxvdyIsInNldCIsImFkZE5vZGVNZXRhIiwicHJldmlvdXNNZXRhIiwiZGVmYXVsdHNEZWVwIiwidHlwZSIsImFic29sdXRlUGF0aCIsInZlcnNpb24iLCJFcnJvciIsInVwZGF0ZVNlb1BhdGhzUmVjdXJzaXZlbHkiLCJjb2xsZWN0aW9uIiwicmVwbGFjZVBhdGgiLCJ3aXRoUGF0aCIsImNsZWFudXBSZWN1cnNpdmVseSIsInVuc2V0IiwiTWVudVN0cnVjdHVyZVBhcnNlciIsImdldEZpbGVNZXRhcyIsImdlbmVyYXRlRnJvbUZpbGVzIiwiZmlsZVBhdGhzIiwic2F2ZSIsImxvYWQiLCJhc0pzb24iLCJyZWFkRmlsZVN5bmMiLCJmc1BhdGgiLCJyZXNvbHZlIiwic2F2ZUZpbGUiLCJlbmNvZGluZyIsInBhcnNlIiwiZG9jcyIsIndyaXRlRmlsZVN5bmMiLCJzbGVlcCIsInNlY3Rpb25zIiwiZ2V0Tm9kZUJ5VXJsIiwidXJsUGF0aCIsInZhcmlhYmxlTmFtZSIsImdldENvbmZpZyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJtcyIsIlByb21pc2UiLCJzZXRUaW1lb3V0IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwiZmlyc3QiLCJyZXN0IiwibG9jYWxlIiwidG9Mb2NhbGVVcHBlckNhc2UiLCJpbnB1dCIsInNlYXJjaFZhbHVlIiwicmVwbGFjZVZhbHVlIiwicmF3RmlsZU5hbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtR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O0FBQ0QsQ0FUTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pQLDZDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBnZXRJc29tb3JwaGljVmFsdWUgfSBmcm9tICdAL3Rvb2xzL3V0aWxzL2dldC1pc29tb3JwaGljLXZhbHVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBiYXNlVXJsOiAnaHR0cHM6Ly9nYW1lLmNpJyxcclxuICBkb2NzUGF0aDogJy9kb2NzJyxcclxuICBmaXJlYmFzZToge1xyXG4gICAgYXBpS2V5OiAnQUl6YVN5Q3o2MFBtYnJiNHYybnFkOFRHcm0xVm8wWWxiNmRhS1dRJyxcclxuICAgIGF1dGhEb21haW46ICd1bml0eS1jaS12ZXJzaW9ucy5maXJlYmFzZWFwcC5jb20nLFxyXG4gICAgZGF0YWJhc2VVUkw6ICdodHRwczovL3VuaXR5LWNpLXZlcnNpb25zLmZpcmViYXNlaW8uY29tJyxcclxuICAgIHByb2plY3RJZDogJ3VuaXR5LWNpLXZlcnNpb25zJyxcclxuICAgIHN0b3JhZ2VCdWNrZXQ6ICd1bml0eS1jaS12ZXJzaW9ucy5hcHBzcG90LmNvbScsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogJzg0MTQ3OTE4NjYyMycsXHJcbiAgICBhcHBJZDogJzE6ODQxNDc5MTg2NjIzOndlYjpjMjAzNTAxOTFlOTYyYThhNzFmZTBhJyxcclxuICAgIG1lYXN1cmVtZW50SWQ6ICdHLTFCR1ZTN0hEVzgnLFxyXG4gIH0sXHJcbiAgYmFja2VuZFVybDogJ2h0dHBzOi8vZXVyb3BlLXdlc3QzLXVuaXR5LWNpLXZlcnNpb25zLmNsb3VkZnVuY3Rpb25zLm5ldCcsXHJcbiAgc2VhcmNoOiB7XHJcbiAgICBhcHBsaWNhdGlvbklkOiAnVzRYNjJLTTlRRScsXHJcbiAgICBpbmRleDogZ2V0SXNvbW9ycGhpY1ZhbHVlKCdTRUFSQ0hfSU5ERVgnKSxcclxuICAgIHB1YmxpY0FwaUtleTogJzRhMDYwMTFlZDhhNDY3ODExODY2YzI3Y2E0YzFhMzY3JyxcclxuICAgIGhpdHNQZXJQYWdlOiAxMixcclxuICAgIHNldHRpbmdzOiB7XHJcbiAgICAgIC8vIFNlbGVjdCB0aGUgYXR0cmlidXRlcyB5b3Ugd2FudCB0byBzZWFyY2ggaW5cclxuICAgICAgc2VhcmNoYWJsZUF0dHJpYnV0ZXM6IFsndGl0bGUnLCAnc3VtbWFyeScsICdib2R5JywgJ3ZlcnNpb24nLCAnY2F0ZWdvcmllcycsICdmaWxlbmFtZSddLFxyXG4gICAgICAvLyBEZWZpbmUgYnVzaW5lc3MgbWV0cmljcyBmb3IgcmFua2luZyBhbmQgc29ydGluZ1xyXG4gICAgICBjdXN0b21SYW5raW5nOiBbJ2FzYyhsZXZlbCknLCAnZGVzYyh0aXRsZSknXSxcclxuICAgICAgLy8gU2V0IHVwIHNvbWUgYXR0cmlidXRlcyB0byBmaWx0ZXIgcmVzdWx0cyBvblxyXG4gICAgICBhdHRyaWJ1dGVzRm9yRmFjZXRpbmc6IFsnZmlsZW5hbWUnXSxcclxuICAgICAgLy8gRGVmaW5lIHRoZSBhdHRyaWJ1dGUgd2Ugd2FudCB0byBkaXN0aW5jdCBvblxyXG4gICAgICBhdHRyaWJ1dGVGb3JEaXN0aW5jdDogJ09iamVjdElEJyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IGFsZ29saWFzZWFyY2ggZnJvbSAnYWxnb2xpYXNlYXJjaCc7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnQC9jb3JlL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgY29uc3QgY2xpZW50ID0gYWxnb2xpYXNlYXJjaChjb25maWcuc2VhcmNoLmFwcGxpY2F0aW9uSWQsIGNvbmZpZy5zZWFyY2gucHVibGljQXBpS2V5KTtcclxuZXhwb3J0IGNvbnN0IGluZGV4TmFtZSA9IGNvbmZpZy5zZWFyY2guaW5kZXg7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG4vKipcclxuICogb2ZmaWNpYWwgZXhhbXBsZSBmcm9tIHJlZHV4LCBmb3IgcmVmZXJlbmNlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY291bnRlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdjb3VudGVyJyxcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHZhbHVlOiAwLFxyXG4gIH0sXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGluY3JlbWVudGVkOiAoc3RhdGUpID0+IHtcclxuICAgICAgLy8gUmVkdXggVG9vbGtpdCBhbGxvd3MgdXMgdG8gd3JpdGUgXCJtdXRhdGluZ1wiIGxvZ2ljIGluIHJlZHVjZXJzLiBJdFxyXG4gICAgICAvLyBkb2Vzbid0IGFjdHVhbGx5IG11dGF0ZSB0aGUgc3RhdGUgYmVjYXVzZSBpdCB1c2VzIHRoZSBJbW1lciBsaWJyYXJ5LFxyXG4gICAgICAvLyB3aGljaCBkZXRlY3RzIGNoYW5nZXMgdG8gYSBcImRyYWZ0IHN0YXRlXCIgYW5kIHByb2R1Y2VzIGEgYnJhbmQgbmV3XHJcbiAgICAgIC8vIGltbXV0YWJsZSBzdGF0ZSBiYXNlZCBvZmYgdGhvc2UgY2hhbmdlc1xyXG4gICAgICBzdGF0ZS52YWx1ZSArPSAxO1xyXG4gICAgfSxcclxuICAgIGRlY3JlbWVudGVkOiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUudmFsdWUgLT0gMTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBpbmNyZW1lbnRlZCwgZGVjcmVtZW50ZWQgfSA9IGNvdW50ZXJTbGljZS5hY3Rpb25zO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvdW50ZXJTbGljZSB9IGZyb20gJy4vY291bnRlci9jb3VudGVyLXNsaWNlJztcclxuaW1wb3J0IHsgdmVyc2lvbnNSZWR1Y2VyIH0gZnJvbSAnLi92ZXJzaW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgY291bnRlcjogY291bnRlclNsaWNlLFxyXG4gIHZlcnNpb25zOiB2ZXJzaW9uc1JlZHVjZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNhZ2EgPSAoKSA9PiB7fTtcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBzZWxlY3RlZFZlcnNpb25TbGljZSB9IGZyb20gJy4vc2VsZWN0ZWQtdmVyc2lvbi1zbGljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgdmVyc2lvbnNSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBzZWxlY3RlZDogc2VsZWN0ZWRWZXJzaW9uU2xpY2UucmVkdWNlcixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdmVyc2lvbnNTYWdhID0gKCkgPT4ge307XHJcbiIsImltcG9ydCB7IE1lbnVTdHJ1Y3R1cmUgfSBmcm9tICdAL3Rvb2xzL21lbnUvbWVudS1zdHJ1Y3R1cmUnO1xyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgbWVudVN0cnVjdHVyZSBmcm9tICdAL2NvcmUvbWVudS1zdHJ1Y3R1cmUuanNvbic7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0ZWRWZXJzaW9uU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ3ZlcnNpb24nLFxyXG4gIGluaXRpYWxTdGF0ZTogeyAuLi5NZW51U3RydWN0dXJlLmdldEN1cnJlbnRWZXJzaW9ucyhtZW51U3RydWN0dXJlKSB9LFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICB1cGRhdGVTZWxlY3Rpb246IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgc2VjdGlvbiwgc2VsZWN0aW9uIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgIHN0YXRlW3NlY3Rpb25dID0gc2VsZWN0aW9uO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RlZFZlcnNpb25zU2VsZWN0b3IgPSAoc3RhdGUpID0+IHN0YXRlLnZlcnNpb25zLnNlbGVjdGVkO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgdXBkYXRlU2VsZWN0aW9uIH0gPSBzZWxlY3RlZFZlcnNpb25TbGljZS5hY3Rpb25zO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyBJY29uQ29udGV4dCB9IGZyb20gJ3JlYWN0LWljb25zJztcclxuaW1wb3J0IHsgSW5zdGFudFNlYXJjaCB9IGZyb20gJ3JlYWN0LWluc3RhbnRzZWFyY2gtZG9tJztcclxuaW1wb3J0IHsgY2xpZW50IGFzIHNlYXJjaENsaWVudCwgaW5kZXhOYW1lIGFzIHNlYXJjaEluZGV4IH0gZnJvbSAnQC9jb3JlL3NlYXJjaCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSAnbG9naWMnO1xyXG5pbXBvcnQgeyBGaXJlYmFzZUFwcFByb3ZpZGVyIH0gZnJvbSAncmVhY3RmaXJlJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICdjb3JlL2NvbmZpZyc7XHJcblxyXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvYW50ZC1jdXN0b20ubGVzcyc7XHJcbmltcG9ydCAnaGlnaGxpZ2h0LmpzL3N0eWxlcy9kcmFjdWxhLmNzcyc7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHsgcmVkdWNlciB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8RmlyZWJhc2VBcHBQcm92aWRlciBmaXJlYmFzZUNvbmZpZz17Y29uZmlnLmZpcmViYXNlfT5cclxuICAgICAgICA8SW5zdGFudFNlYXJjaCBzZWFyY2hDbGllbnQ9e3NlYXJjaENsaWVudH0gaW5kZXhOYW1lPXtzZWFyY2hJbmRleH0+XHJcbiAgICAgICAgICA8SWNvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY2xhc3NOYW1lOiAnYW50aWNvbicgfX0+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgIDwvSWNvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgPC9JbnN0YW50U2VhcmNoPlxyXG4gICAgICA8L0ZpcmViYXNlQXBwUHJvdmlkZXI+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0LCBoYXMgfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHsgTWVudVNlZ21lbnQgfSBmcm9tICdAL3Rvb2xzL21lbnUvbWVudS1zZWdtZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVudU5vZGUge1xyXG4gIFtrZXk6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTWVudU5vZGVUeXBlID0gJ2ZpbGUnIHwgJ2ZvbGRlcicgfCAndmVyc2lvbicgfCAnaWRlbnRpZmllcic7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudU5vZGUge1xyXG4gIHN0YXRpYyBpc0ZpbGUobm9kZTogTWVudU5vZGUpIHtcclxuICAgIHJldHVybiBnZXQobm9kZSwgJ21ldGEudHlwZScpID09PSAnZmlsZSc7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaXNGb2xkZXIobm9kZTogTWVudU5vZGUpIHtcclxuICAgIHJldHVybiBnZXQobm9kZSwgJ21ldGEudHlwZScpID09PSAnZm9sZGVyJztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpc1BhZ2Uobm9kZTogTWVudU5vZGUpIHtcclxuICAgIHJldHVybiB0aGlzLmlzRmlsZShub2RlKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpc1ZlcnNpb24obm9kZTogTWVudU5vZGUpIHtcclxuICAgIHJldHVybiBnZXQobm9kZSwgJ21ldGEudHlwZScpID09PSAndmVyc2lvbic7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaGFzQ2hpbGRyZW4obm9kZTogTWVudU5vZGUpIHtcclxuICAgIHJldHVybiB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCc7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaGFzVmVyc2lvbkNvbnRhaW5lcihub2RlOiBNZW51Tm9kZSkge1xyXG4gICAgcmV0dXJuIGhhcyhub2RlLCBNZW51U2VnbWVudC52ZXJzaW9uQ29udGFpbmVySWRlbnRpZmllcik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0Q3VycmVudFZlcnNpb24odmVyc2lvbkNvbnRhaW5lck5vZGU6IE1lbnVOb2RlKSB7XHJcbiAgICByZXR1cm4gZ2V0KHZlcnNpb25Db250YWluZXJOb2RlLCAnbWV0YS5jdXJyZW50VmVyc2lvbicpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZpbmRGaXJzdFBhZ2UobWVudU5vZGU6IE1lbnVOb2RlKSB7XHJcbiAgICBpZiAobWVudU5vZGUgJiYgTWVudU5vZGUuaXNGb2xkZXIobWVudU5vZGUpKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBNZW51Tm9kZS5maW5kRmlyc3RQYWdlSW5Gb2xkZXIobWVudU5vZGUpO1xyXG4gICAgICByZXR1cm4gcGFnZT8ubWV0YT8ucGF0aCB8fCBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZpbmRGaXJzdFBhZ2VJbkZvbGRlcihtZW51Tm9kZTogTWVudU5vZGUpIHtcclxuICAgIGNvbnN0IGZpbGVNZXRhcyA9IFtdO1xyXG4gICAgY29uc3QgY29udGFpbmVycyA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgW3NlZ21lbnQsIG5vZGVdIG9mIE9iamVjdC5lbnRyaWVzKG1lbnVOb2RlKSkge1xyXG4gICAgICBpZiAoTWVudVNlZ21lbnQuaXNNZXRhKHNlZ21lbnQpKSBjb250aW51ZTtcclxuXHJcbiAgICAgIGlmIChNZW51Tm9kZS5pc0ZpbGUobm9kZSkpIHtcclxuICAgICAgICBmaWxlTWV0YXMucHVzaChub2RlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKE1lbnVTZWdtZW50LmlzVmVyc2lvbkNvbnRhaW5lcihzZWdtZW50KSkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWZXJzaW9uID0gdGhpcy5nZXRDdXJyZW50VmVyc2lvbihub2RlKTtcclxuICAgICAgICBjb250YWluZXJzLnB1c2gobm9kZVtjdXJyZW50VmVyc2lvbl0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoTWVudU5vZGUuaXNGb2xkZXIobm9kZSkgfHwgTWVudU5vZGUuaXNWZXJzaW9uKG5vZGUpKSB7XHJcbiAgICAgICAgY29udGFpbmVycy5wdXNoKG5vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVG9kbyBzb3J0IGJ5IGZpbGVNZXRhLm1ldGEub3JkZXIgYXNjXHJcbiAgICBpZiAoZmlsZU1ldGFzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIGZpbGVNZXRhc1swXTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGNvbnRhaW5lciBvZiBjb250YWluZXJzKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZmluZEZpcnN0UGFnZUluRm9sZGVyKGNvbnRhaW5lcik7XHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IG5vcm1hbGlzZVRpdGxlIH0gZnJvbSAnQC90b29scy91dGlscyc7XHJcblxyXG5leHBvcnQgdHlwZSBTZWdtZW50ID0gc3RyaW5nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVTZWdtZW50IHtcclxuICBwdWJsaWMgc3RhdGljIHZlcnNpb25Db250YWluZXJJZGVudGlmaWVyID0gJzx2ZXJzaW9ucz4nO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzTWV0YShzZWdtZW50OiBTZWdtZW50KSB7XHJcbiAgICByZXR1cm4gc2VnbWVudCA9PT0gJ21ldGEnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBpc1ZlcnNpb25Db250YWluZXIoc2VnbWVudDogU2VnbWVudCkge1xyXG4gICAgcmV0dXJuIHNlZ21lbnQgPT09IHRoaXMudmVyc2lvbkNvbnRhaW5lcklkZW50aWZpZXI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzVmVyc2lvbihzZWdtZW50OiBTZWdtZW50KSB7XHJcbiAgICByZXR1cm4gL152P1xcZCsoXFwuXFxkKykqJC8udGVzdChzZWdtZW50KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB0b1RpdGxlKHNlZ21lbnQ6IFNlZ21lbnQpIHtcclxuICAgIHJldHVybiBub3JtYWxpc2VUaXRsZShzZWdtZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWVudU5vZGUsIE1lbnVOb2RlVHlwZSB9IGZyb20gJ0AvdG9vbHMvbWVudS9tZW51LW5vZGUnO1xyXG5pbXBvcnQgeyBub3JtYWxpc2VUaXRsZSwgcmVwbGFjZUFsbCB9IGZyb20gJ0AvdG9vbHMvdXRpbHMnO1xyXG5pbXBvcnQgeyBkZWZhdWx0c0RlZXAsIGZsb3csIGdldCwgaGFzLCBzZXQsIHVuc2V0IH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgTWVudVNlZ21lbnQgfSBmcm9tICcuL21lbnUtc2VnbWVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudVN0cnVjdHVyZUdlbmVyYXRvciB7XHJcbiAgcHJpdmF0ZSBzdHJ1Y3R1cmU6IE1lbnVOb2RlID0ge307XHJcblxyXG4gIHByaXZhdGUgZmlsZU5hbWU6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBzZWdtZW50czogc3RyaW5nW107XHJcblxyXG4gIHByaXZhdGUgc2VnbWVudDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGtleUFycmF5OiBzdHJpbmdbXTtcclxuXHJcbiAgcHJpdmF0ZSBwZXJtYWxpbmtQYXRoQXJyYXk6IHN0cmluZ1tdO1xyXG5cclxuICBwcml2YXRlIHNlb0ZyaWVuZGx5UGF0aEFycmF5OiBzdHJpbmdbXTtcclxuXHJcbiAgcHJpdmF0ZSB2ZXJzaW9uT2ZDdXJyZW50UGF0aDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGdldCBrZXkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5rZXlBcnJheS5qb2luKCcuJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBwZXJtYWxpbmtQYXRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucGVybWFsaW5rUGF0aEFycmF5LmpvaW4oJy8nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0IHNlb0ZyaWVuZGx5UGF0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNlb0ZyaWVuZGx5UGF0aEFycmF5LmpvaW4oJy8nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzZXQoKSB7XHJcbiAgICB0aGlzLnZlcnNpb25PZkN1cnJlbnRQYXRoID0gbnVsbDtcclxuICAgIHRoaXMua2V5QXJyYXkgPSBbXTtcclxuICAgIHRoaXMucGVybWFsaW5rUGF0aEFycmF5ID0gW107XHJcbiAgICB0aGlzLnNlb0ZyaWVuZGx5UGF0aEFycmF5ID0gW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFNlZ21lbnRUb0tleSA9IChzZWdtZW50KSA9PiB0aGlzLmtleUFycmF5LnB1c2goc2VnbWVudCk7XHJcblxyXG4gIHByaXZhdGUgYWRkU2VnbWVudFRvUGVybWFsaW5rUGF0aCA9IChzZWdtZW50KSA9PiB0aGlzLnBlcm1hbGlua1BhdGhBcnJheS5wdXNoKHNlZ21lbnQpO1xyXG5cclxuICBwcml2YXRlIGFkZFNlZ21lbnRUb1Nlb0ZyaWVuZGx5UGF0aCA9IChzZWdtZW50KSA9PiB0aGlzLnNlb0ZyaWVuZGx5UGF0aEFycmF5LnB1c2goc2VnbWVudCk7XHJcblxyXG4gIHByaXZhdGUgc2V0VmVyc2lvbk9mQ3VycmVudFBhdGggPSAoc2VnbWVudCkgPT4ge1xyXG4gICAgdGhpcy52ZXJzaW9uT2ZDdXJyZW50UGF0aCA9IHNlZ21lbnQ7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGFzeW5jIGdlbmVyYXRlTWVudVN0cnVjdHVyZShmaWxlTmFtZXM6IHN0cmluZ1tdKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgY29uc29sZS5sb2coJ2V2ZW50IC0gZ2VuZXJhdGluZyBtZW51IHN0cnVjdHVyZScpO1xyXG5cclxuICAgIGNvbnN0IHN0cnVjdHVyZSA9IG5ldyB0aGlzKCk7XHJcbiAgICBmb3IgKGNvbnN0IGZpbGVOYW1lIG9mIGZpbGVOYW1lcykge1xyXG4gICAgICBzdHJ1Y3R1cmUuYWRkRnJvbUZpbGUoZmlsZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0cnVjdHVyZS5zdHJpcFZlcnNpb25OdW1iZXJzRnJvbUxhdGVzdFZlcnNpb25JblNlb0ZyaWVuZGx5UGF0aCgpO1xyXG4gICAgc3RydWN0dXJlLmNsZWFudXAoKTtcclxuXHJcbiAgICByZXR1cm4gc3RydWN0dXJlLnRvT2JqZWN0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5zdHJ1Y3R1cmUsIG51bGwsIDIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvT2JqZWN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RydWN0dXJlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZEZyb21GaWxlKGZpbGVOYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuXHJcbiAgICB0aGlzLmZpbGVOYW1lID0gZmlsZU5hbWU7XHJcbiAgICB0aGlzLnNlZ21lbnRzID0gdGhpcy5maWxlTmFtZS5yZXBsYWNlKC9cXC5tZCQvLCAnJykuc3BsaXQoJy8nKTtcclxuXHJcbiAgICB0aGlzLmFkZFN0cnVjdHVyZUZyb21TZWdtZW50cygpO1xyXG4gICAgdGhpcy5hZGRNZXRhRm9yRmlsZU5vZGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkU3RydWN0dXJlRnJvbVNlZ21lbnRzKCkge1xyXG4gICAgZm9yICh0aGlzLnNlZ21lbnQgb2YgdGhpcy5zZWdtZW50cykge1xyXG4gICAgICBjb25zdCB7IG9yZGVyLCBzZWdtZW50IH0gPSB0aGlzLmV4dHJhY3RJbmZvRnJvbVNlZ21lbnQoKTtcclxuXHJcbiAgICAgIC8vIE1ha2UgdmVyc2lvbiBwYXJ0cyBpZGVudGlmaWFibGVcclxuICAgICAgaWYgKE1lbnVTZWdtZW50LmlzVmVyc2lvbihzZWdtZW50KSkge1xyXG4gICAgICAgIHRoaXMuYWRkU2VnbWVudFRvS2V5KE1lbnVTZWdtZW50LnZlcnNpb25Db250YWluZXJJZGVudGlmaWVyKTtcclxuICAgICAgICB0aGlzLnNldE5vZGVUeXBlKCdpZGVudGlmaWVyJyk7XHJcbiAgICAgICAgdGhpcy5zZXROb2RlUGF0aCh0aGlzLnBlcm1hbGlua1BhdGgpO1xyXG4gICAgICAgIHRoaXMuc2V0VmVyc2lvbk9mQ3VycmVudFBhdGgoc2VnbWVudCk7XHJcbiAgICAgICAgdGhpcy5zZXROb2RlQ3VycmVudFZlcnNpb24oc2VnbWVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFVwZGF0ZSBwb2ludGVyc1xyXG4gICAgICB0aGlzLmFkZFNlZ21lbnRUb0tleShzZWdtZW50KTtcclxuICAgICAgdGhpcy5hZGRTZWdtZW50VG9QZXJtYWxpbmtQYXRoKHNlZ21lbnQpO1xyXG4gICAgICBpZiAoIU1lbnVTZWdtZW50LmlzVmVyc2lvbihzZWdtZW50KSkgdGhpcy5hZGRTZWdtZW50VG9TZW9GcmllbmRseVBhdGgoc2VnbWVudCk7XHJcblxyXG4gICAgICAvLyBBZGQgbWV0YSBmb3IgZXZlcnkgcGFydFxyXG4gICAgICBpZiAoIWhhcyh0aGlzLnN0cnVjdHVyZSwgdGhpcy5rZXkpKSB7XHJcbiAgICAgICAgdGhpcy5zZXROb2RlVHlwZShNZW51U2VnbWVudC5pc1ZlcnNpb24oc2VnbWVudCkgPyAndmVyc2lvbicgOiAnZm9sZGVyJyk7XHJcbiAgICAgICAgdGhpcy5zZXROb2RlT3JkZXIob3JkZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0Tm9kZVBhdGgodGhpcy5wZXJtYWxpbmtQYXRoKTtcclxuICAgICAgICB0aGlzLnNldE5vZGVTZW9GcmllbmRseVBhdGgodGhpcy5zZW9GcmllbmRseVBhdGgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZE1ldGFGb3JGaWxlTm9kZSgpIHtcclxuICAgIGNvbnN0IHsgb3JkZXIsIHNlZ21lbnQgfSA9IHRoaXMuZXh0cmFjdEluZm9Gcm9tU2VnbWVudCgpO1xyXG5cclxuICAgIHRoaXMuc2V0Tm9kZU5hbWUobm9ybWFsaXNlVGl0bGUoc2VnbWVudCkpO1xyXG4gICAgdGhpcy5zZXROb2RlVHlwZSgnZmlsZScpO1xyXG4gICAgdGhpcy5zZXROb2RlT3JkZXIob3JkZXIpO1xyXG4gICAgdGhpcy5zZXROb2RlUGF0aCh0aGlzLnBlcm1hbGlua1BhdGgpO1xyXG4gICAgdGhpcy5zZXROb2RlUGVybWFsaW5rUGF0aCh0aGlzLnBlcm1hbGlua1BhdGgpO1xyXG4gICAgdGhpcy5zZXROb2RlU2VvRnJpZW5kbHlQYXRoKHRoaXMuc2VvRnJpZW5kbHlQYXRoKTtcclxuICAgIHRoaXMuc2V0Tm9kZUFic29sdXRlUGF0aCh0aGlzLmZpbGVOYW1lKTtcclxuICAgIHRoaXMuc2V0Tm9kZVZlcnNpb24odGhpcy52ZXJzaW9uT2ZDdXJyZW50UGF0aCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGV4dHJhY3RJbmZvRnJvbVNlZ21lbnQoKSB7XHJcbiAgICBjb25zdCBzb3J0T3JkZXJOdW1iZXJSZWdleCA9IC9eXFxkezJ9LS87XHJcblxyXG4gICAgY29uc3QgZXh0cmFjdFNvcnRPcmRlck51bWJlciA9IChwYXJ0OiBzdHJpbmcpOiBudW1iZXIgPT4ge1xyXG4gICAgICByZXR1cm4gTnVtYmVyKHBhcnQubWF0Y2goc29ydE9yZGVyTnVtYmVyUmVnZXgpPy5bMF0/LnJlcGxhY2UoLy0kLywgJycpIHx8IDk5KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3RyaXBTb3J0T3JkZXJOdW1iZXIgPSAocGFydDogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgICAgcmV0dXJuIHBhcnQucmVwbGFjZShzb3J0T3JkZXJOdW1iZXJSZWdleCwgJycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVGb3JiaWRkZW5DaGFyYWN0ZXJzID0gKHBhcnQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICAgIHJldHVybiByZXBsYWNlQWxsKHBhcnQsICcuJywgJy0nKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2FuaXRpc2VTZWdtZW50ID0gZmxvdyhzdHJpcFNvcnRPcmRlck51bWJlciwgcmVtb3ZlRm9yYmlkZGVuQ2hhcmFjdGVycyk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb3JkZXI6IGV4dHJhY3RTb3J0T3JkZXJOdW1iZXIodGhpcy5zZWdtZW50KSxcclxuICAgICAgc2VnbWVudDogc2FuaXRpc2VTZWdtZW50KHRoaXMuc2VnbWVudCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXROb2RlTmFtZShuYW1lKSB7XHJcbiAgICBzZXQodGhpcy5zdHJ1Y3R1cmUsIHRoaXMua2V5LCB7IG5hbWUgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgbWV0YSB0byBjdXJyZW50bHkgc2VsZWN0ZWQga2V5LlxyXG4gICAqXHJcbiAgICogTmV3IHByb3BlcnRpZXMgb3ZlcndyaXRlIGV4aXN0aW5nIHByb3BlcnRpZXMgcmVjdXJzaXZlbHkuXHJcbiAgICpcclxuICAgKiBFeGFtcGxlOlxyXG4gICAqICAgQmVmb3JlOiAgICAgeyBhOiAxLCBiOiAyIH1cclxuICAgKiAgIEFkZDogICAgICAgIHsgYTogMywgYzogNCB9XHJcbiAgICogICBSZXN1bHRzIGluOiB7IGE6IDMsIGI6IDIsIGM6IDQgfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgYWRkTm9kZU1ldGEobWV0YSkge1xyXG4gICAgY29uc3QgcHJldmlvdXNNZXRhID0gZ2V0KHRoaXMuc3RydWN0dXJlLCBgJHt0aGlzLmtleX0ubWV0YWAsIHt9KTtcclxuICAgIGRlZmF1bHRzRGVlcChtZXRhLCBwcmV2aW91c01ldGEpO1xyXG4gICAgc2V0KHRoaXMuc3RydWN0dXJlLCBgJHt0aGlzLmtleX0ubWV0YWAsIG1ldGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHlwZSBvZiBwYXJ0LCB0byBpbmRpY2F0ZSBpdHMgc3RydWN0dXJlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXROb2RlVHlwZSh0eXBlOiBNZW51Tm9kZVR5cGUpIHtcclxuICAgIHRoaXMuYWRkTm9kZU1ldGEoeyB0eXBlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3JkZXIgaW4gd2hpY2ggdG8gYXBwZWFyIGluIHRoZSBtZW51XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXROb2RlT3JkZXIob3JkZXI6IG51bWJlcikge1xyXG4gICAgdGhpcy5hZGROb2RlTWV0YSh7IG9yZGVyIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIHJvdXRpbmdcclxuICAgKi9cclxuICBwcml2YXRlIHNldE5vZGVQYXRoKHBhdGg6IHN0cmluZykge1xyXG4gICAgdGhpcy5hZGROb2RlTWV0YSh7IHBhdGggfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3IgbGlua2luZyBiYWNrIHRvIHRoZSBmaWxlIGluIHRoZSByZXBvXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXROb2RlQWJzb2x1dGVQYXRoKGFic29sdXRlUGF0aDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFkZE5vZGVNZXRhKHsgYWJzb2x1dGVQYXRoIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGxpbmtpbmcgdG8gYSBzZWN0aW9uIGZvciBhIHNwZWNpZmljIHZlcnNpb24gdXNpbmcgYW4gYW5jaG9yXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXROb2RlUGVybWFsaW5rUGF0aChwZXJtYWxpbmtQYXRoOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuYWRkTm9kZU1ldGEoeyBwZXJtYWxpbmtQYXRoIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIG92ZXJ3cml0aW5nIGBwYXRoYCBpbiBjYXNlIGZvciBsYXRlc3QgdmVyc2lvbiBwYXRoXHJcbiAgICpcclxuICAgKiBFeGFtcGxlOiB0byBvdmVyd3JpdGUgYHBhdGhgIGdpdGh1Yi92Mi9kb2Mgd2l0aCBgc2VvRnJpZW5kbHlQYXRoYCBnaXRodWIvZG9jIGlmIHYyIGlzIGN1cnJlbnQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXROb2RlU2VvRnJpZW5kbHlQYXRoKHNlb0ZyaWVuZGx5UGF0aDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFkZE5vZGVNZXRhKHsgc2VvRnJpZW5kbHlQYXRoIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmVyc2lvbiBvZiBwYXJlbnQgb3Igc2VsZlxyXG4gICAqL1xyXG4gIHByaXZhdGUgc2V0Tm9kZVZlcnNpb24odmVyc2lvbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFkZE5vZGVNZXRhKHsgdmVyc2lvbiB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvIG92ZXJ3cml0ZSBjdXJyZW50VmVyc2lvbiBpbiBtZXRhIGV2ZXJ5IHRpbWUgYSBuZXdlciB2ZXJzaW9uIGlzIGZvdW5kXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXROb2RlQ3VycmVudFZlcnNpb24oY3VycmVudFZlcnNpb246IHN0cmluZykge1xyXG4gICAgaWYgKCFNZW51U2VnbWVudC5pc1ZlcnNpb24oY3VycmVudFZlcnNpb24pKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignZXhwZWN0ZWQgdmVyc2lvbiB0byBtYXRjaCBhIHZlcnNpb24gcGFydCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkTm9kZU1ldGEoeyBjdXJyZW50VmVyc2lvbiB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RyaXBWZXJzaW9uTnVtYmVyc0Zyb21MYXRlc3RWZXJzaW9uSW5TZW9GcmllbmRseVBhdGgoKSB7XHJcbiAgICBjb25zdCB1cGRhdGVTZW9QYXRoc1JlY3Vyc2l2ZWx5ID0gKFxyXG4gICAgICBjb2xsZWN0aW9uOiBNZW51Tm9kZSxcclxuICAgICAgcmVwbGFjZVBhdGggPSBudWxsLFxyXG4gICAgICB3aXRoUGF0aCA9IG51bGwsXHJcbiAgICApID0+IHtcclxuICAgICAgZm9yIChjb25zdCBbc2VnbWVudCwgbm9kZV0gb2YgT2JqZWN0LmVudHJpZXMoY29sbGVjdGlvbikpIHtcclxuICAgICAgICBpZiAoTWVudVNlZ21lbnQuaXNNZXRhKHNlZ21lbnQpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgLy8gRXhhbXBsZTogUmVjdXJzaXZlbHkgcmVwbGFjZSAvZ2l0aHViL3ZbbGF0ZXN0XS9zb21ldGhpbmcgd2l0aCAvZ2l0aHViL3NvbWV0aGluZy5cclxuICAgICAgICBpZiAocmVwbGFjZVBhdGggJiYgd2l0aFBhdGggJiYgaGFzKG5vZGUsICdtZXRhLnBhdGgnKSkge1xyXG4gICAgICAgICAgc2V0KGNvbGxlY3Rpb24sIGAke3NlZ21lbnR9Lm1ldGEucGF0aGAsIG5vZGUubWV0YS5wYXRoLnJlcGxhY2UocmVwbGFjZVBhdGgsIHdpdGhQYXRoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIU1lbnVOb2RlLmhhc0NoaWxkcmVuKG5vZGUpKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChNZW51U2VnbWVudC5pc1ZlcnNpb25Db250YWluZXIoc2VnbWVudCkpIHtcclxuICAgICAgICAgIGNvbnN0IHsgY3VycmVudFZlcnNpb24gfSA9IG5vZGUubWV0YTtcclxuICAgICAgICAgIGNvbnN0IHsgc2VvRnJpZW5kbHlQYXRoIH0gPSBub2RlW2N1cnJlbnRWZXJzaW9uXS5tZXRhO1xyXG4gICAgICAgICAgY29uc3QgcmVwbGFjZSA9IGdldChjb2xsZWN0aW9uLCBgJHtzZWdtZW50fS4ke2N1cnJlbnRWZXJzaW9ufS5tZXRhLnBhdGhgKTtcclxuICAgICAgICAgIHNldChjb2xsZWN0aW9uLCBgJHtzZWdtZW50fS4ke2N1cnJlbnRWZXJzaW9ufS5tZXRhLnBhdGhgLCBzZW9GcmllbmRseVBhdGgpO1xyXG4gICAgICAgICAgdXBkYXRlU2VvUGF0aHNSZWN1cnNpdmVseShub2RlLCByZXBsYWNlLCBzZW9GcmllbmRseVBhdGgpO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGVTZW9QYXRoc1JlY3Vyc2l2ZWx5KG5vZGUsIHJlcGxhY2VQYXRoLCB3aXRoUGF0aCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlU2VvUGF0aHNSZWN1cnNpdmVseSh0aGlzLnN0cnVjdHVyZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFudXAoKSB7XHJcbiAgICBjb25zdCBjbGVhbnVwUmVjdXJzaXZlbHkgPSAoY29sbGVjdGlvbjogTWVudU5vZGUpID0+IHtcclxuICAgICAgZm9yIChjb25zdCBbc2VnbWVudCwgbm9kZV0gb2YgT2JqZWN0LmVudHJpZXMoY29sbGVjdGlvbikpIHtcclxuICAgICAgICBpZiAoTWVudVNlZ21lbnQuaXNNZXRhKHNlZ21lbnQpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgdW5zZXQoY29sbGVjdGlvbiwgYCR7c2VnbWVudH0ubWV0YS5zZW9GcmllbmRseVBhdGhgKTtcclxuXHJcbiAgICAgICAgaWYgKE1lbnVOb2RlLmhhc0NoaWxkcmVuKG5vZGUpKSB7XHJcbiAgICAgICAgICBjbGVhbnVwUmVjdXJzaXZlbHkobm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY2xlYW51cFJlY3Vyc2l2ZWx5KHRoaXMuc3RydWN0dXJlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWVudU5vZGUgfSBmcm9tICdAL3Rvb2xzL21lbnUvbWVudS1ub2RlJztcclxuaW1wb3J0IHsgTWVudVNlZ21lbnQgfSBmcm9tICdAL3Rvb2xzL21lbnUvbWVudS1zZWdtZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51U3RydWN0dXJlUGFyc2VyIHtcclxuICBwdWJsaWMgc3RhdGljIGdldEZpbGVNZXRhcyhtZW51U3RydWN0dXJlOiBNZW51Tm9kZSwgZmlsZU1ldGFzID0gW10pIHtcclxuICAgIGZvciAoY29uc3QgW3NlZ21lbnQsIG5vZGVdIG9mIE9iamVjdC5lbnRyaWVzKG1lbnVTdHJ1Y3R1cmUpKSB7XHJcbiAgICAgIGlmIChNZW51U2VnbWVudC5pc01ldGEoc2VnbWVudCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgaWYgKE1lbnVOb2RlLmlzRmlsZShub2RlKSkge1xyXG4gICAgICAgIGZpbGVNZXRhcy5wdXNoKG5vZGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoTWVudU5vZGUuaGFzQ2hpbGRyZW4obm9kZSkpIHtcclxuICAgICAgICB0aGlzLmdldEZpbGVNZXRhcyhub2RlLCBmaWxlTWV0YXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZpbGVNZXRhcztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWVudU5vZGUgfSBmcm9tICdAL3Rvb2xzL21lbnUvbWVudS1ub2RlJztcclxuaW1wb3J0IHsgTWVudVNlZ21lbnQgfSBmcm9tICdAL3Rvb2xzL21lbnUvbWVudS1zZWdtZW50JztcclxuaW1wb3J0IHsgTWVudVN0cnVjdHVyZUdlbmVyYXRvciB9IGZyb20gJ0AvdG9vbHMvbWVudS9tZW51LXN0cnVjdHVyZS1nZW5lcmF0b3InO1xyXG5pbXBvcnQgeyBNZW51U3RydWN0dXJlUGFyc2VyIH0gZnJvbSAnQC90b29scy9tZW51L21lbnUtc3RydWN0dXJlLXBhcnNlcic7XHJcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSAnQC90b29scy91dGlscyc7XHJcbmltcG9ydCB7IHJlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luYyB9IGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgc2V0LCBnZXQgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgZnNQYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVTdHJ1Y3R1cmUge1xyXG4gIHByaXZhdGUgc3RhdGljIHNhdmVGaWxlID0gJ2NvcmUvbWVudS1zdHJ1Y3R1cmUuanNvbic7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2VuZXJhdGVGcm9tRmlsZXMoZmlsZVBhdGhzOiBzdHJpbmdbXSkge1xyXG4gICAgY29uc3QgbWVudVN0cnVjdHVyZSA9IGF3YWl0IE1lbnVTdHJ1Y3R1cmVHZW5lcmF0b3IuZ2VuZXJhdGVNZW51U3RydWN0dXJlKGZpbGVQYXRocyk7XHJcbiAgICBhd2FpdCB0aGlzLnNhdmUobWVudVN0cnVjdHVyZSk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnVTdHJ1Y3R1cmU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldEZpbGVNZXRhcyhzdHJ1Y3R1cmU6IE1lbnVOb2RlKSB7XHJcbiAgICByZXR1cm4gTWVudVN0cnVjdHVyZVBhcnNlci5nZXRGaWxlTWV0YXMoc3RydWN0dXJlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZCgpIHtcclxuICAgIGNvbnN0IGFzSnNvbiA9IHJlYWRGaWxlU3luYyhmc1BhdGgucmVzb2x2ZSh0aGlzLnNhdmVGaWxlKSwgeyBlbmNvZGluZzogJ3V0ZjgnIH0pO1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoYXNKc29uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGFzeW5jIHNhdmUobWVudVN0cnVjdHVyZSkge1xyXG4gICAgY29uc3QgYXNKc29uID0gYCR7SlNPTi5zdHJpbmdpZnkoeyBkb2NzOiBtZW51U3RydWN0dXJlIH0sIG51bGwsIDIpfVxcbmA7XHJcbiAgICB3cml0ZUZpbGVTeW5jKGZzUGF0aC5yZXNvbHZlKHRoaXMuc2F2ZUZpbGUpLCBhc0pzb24sIHsgZW5jb2Rpbmc6ICd1dGY4JyB9KTtcclxuICAgIGF3YWl0IHNsZWVwKDI1MCk7IC8vIEFsbG93IGZvciB3aW5kb3dzIGZpbGVzeXN0ZW0gdG8gY2F0Y2ggdXAuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldEN1cnJlbnRWZXJzaW9ucyhjb2xsZWN0aW9uOiBNZW51Tm9kZSwgc2VjdGlvbnMgPSB7fSkge1xyXG4gICAgZm9yIChjb25zdCBbc2VnbWVudCwgbm9kZV0gb2YgT2JqZWN0LmVudHJpZXMoY29sbGVjdGlvbikpIHtcclxuICAgICAgaWYgKE1lbnVTZWdtZW50LmlzTWV0YShzZWdtZW50KSkgY29udGludWU7XHJcblxyXG4gICAgICBpZiAoTWVudVNlZ21lbnQuaXNWZXJzaW9uQ29udGFpbmVyKHNlZ21lbnQpKSB7XHJcbiAgICAgICAgY29uc3QgeyBwYXRoLCBjdXJyZW50VmVyc2lvbiB9ID0gbm9kZS5tZXRhO1xyXG4gICAgICAgIHNldChzZWN0aW9ucywgYCR7cGF0aH1gLCBjdXJyZW50VmVyc2lvbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChNZW51Tm9kZS5oYXNDaGlsZHJlbihub2RlKSkge1xyXG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFZlcnNpb25zKG5vZGUsIHNlY3Rpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZWN0aW9ucztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXROb2RlQnlVcmwobWVudVN0cnVjdHVyZSwgdXJsUGF0aCkge1xyXG4gICAgcmV0dXJuIGdldChtZW51U3RydWN0dXJlLCB1cmxQYXRoLnJlcGxhY2UoL15cXC8rLywgJycpLnNwbGl0KCcvJykuam9pbignLicpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZyc7XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBlbnZpcm9ubWVudCB2YXJpYWJsZSB0aGF0IGlzIHNldCBkdXJpbmcgYnVpbGQgdGltZSxcclxuICogYm90aCBvbiB0aGUgc2VydmVyIGFuZCBpbiB0aGUgYnJvd3Nlci5cclxuICpcclxuICogRm9yIGEgdmFyaWFibGUgdG8gc2hvdyB1cCBpbiB0aGUgYnJvd3NlciwgaXQgbmVlZHMgdG8gYmUgZGVmaW5lZCBpbiBuZXh0LmNvbmZpZy5qcyB1bmRlclxyXG4gKiB0aGUgcHJvcGVydHkgYHB1YmxpY1J1bnRpbWVDb25maWdgLlxyXG4gKlxyXG4gKiBOb3RlczpcclxuICogICAtIFRoaXMgaXMgYSBsb3cgbGV2ZWwgbWV0aG9kLCB0aGF0IHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gc3BlY2lmaWMgY2FzZXMgd2hlcmUgdGhlIHN0b3JlIGhhc1xyXG4gKiAgICAgbm90IHlldCBiZWVuIGluaXRpYWxpc2VkLCBidXQgdGhlIHZhbHVlIGlzIHN0aWxsIHJlcXVpcmVkLlxyXG4gKiAgIC0gQW4gZW1wdHkgc3RyaW5nIGlzIG9ubHkgZXhwZWN0ZWQgaWYgdGhpcyBmdW5jdGlvbiBpcyBleGVjdXRlZCBpbiB0aGUgY29kZSBwYXRoIG9mIGEgY3VzdG9tXHJcbiAqICAgICBzY3JpcHQgb3V0c2lkZSBvZiBOZXh0SlMsIHRodXMgbm90IHVzaW5nIG5leHQuY29uZmlnLmpzIGNvbmZpZ3VyYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0SXNvbW9ycGhpY1ZhbHVlID0gKHZhcmlhYmxlTmFtZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICBjb25zdCBjb25maWcgPSBnZXRDb25maWcoKTtcclxuXHJcbiAgcmV0dXJuIGNvbmZpZyA/IGNvbmZpZy5wdWJsaWNSdW50aW1lQ29uZmlnW3ZhcmlhYmxlTmFtZV0gOiAnJztcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9zbGVlcCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3RyaW5nJztcclxuIiwiZXhwb3J0IGNvbnN0IHNsZWVwID0gYXN5bmMgKG1zKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAoW2ZpcnN0LCAuLi5yZXN0XSwgbG9jYWxlID0gJ2VuJykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gZmlyc3QudG9Mb2NhbGVVcHBlckNhc2UobG9jYWxlKSArIHJlc3Quam9pbignJyk7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICByZXR1cm4gZmlyc3QudG9Mb2NhbGVVcHBlckNhc2UobG9jYWxlKSArIHJlc3Q7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcGxhY2VBbGwgPSAoaW5wdXQsIHNlYXJjaFZhbHVlOiBzdHJpbmcsIHJlcGxhY2VWYWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIGlucHV0LnNwbGl0KHNlYXJjaFZhbHVlKS5qb2luKHJlcGxhY2VWYWx1ZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgbm9ybWFsaXNlVGl0bGUgPSAocmF3RmlsZU5hbWUpID0+IHtcclxuICBjb25zdCBmaWxlTmFtZSA9IHJlcGxhY2VBbGwocmF3RmlsZU5hbWUsICctJywgJyAnKTtcclxuXHJcbiAgLy8gRm9yIG5vdyB0aGlzIGlzIHRoZSBvbmx5IGV4Y2VwdGlvbiwgdGhpcyBjb3VsZCBiZSBtYWRlIHNtYXJ0ZXIgbGF0ZXJcclxuICBpZiAoZmlsZU5hbWUgPT09ICdpb3MnKSB7XHJcbiAgICByZXR1cm4gJ2lPUyc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGZpbGVOYW1lKTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbGdvbGlhc2VhcmNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvZmlyZXN0b3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWluc3RhbnRzZWFyY2gtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdGZpcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==