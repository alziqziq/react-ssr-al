/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Layout.jsx":
/*!***********************************!*\
  !*** ./src/components/Layout.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Navbar = __webpack_require__(/*! ./Navbar */ \"./src/components/Navbar.jsx\");\n\nvar _Navbar2 = _interopRequireDefault(_Navbar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Layout = function (_Component) {\n  _inherits(Layout, _Component);\n\n  function Layout() {\n    _classCallCheck(this, Layout);\n\n    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));\n  }\n\n  _createClass(Layout, [{\n    key: 'render',\n    value: function render() {\n      var route = this.props.route;\n\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Navbar2.default, null),\n        _react2.default.createElement(\n          'div',\n          null,\n          (0, _reactRouterConfig.renderRoutes)(route.routes)\n        )\n      );\n    }\n  }]);\n\n  return Layout;\n}(_react.Component);\n\nexports.default = Layout;\n\n//# sourceURL=webpack:///./src/components/Layout.jsx?");

/***/ }),

/***/ "./src/components/Navbar.jsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = Navbar;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Navbar() {\n  var languages = [{\n    name: 'Home',\n    param: '/'\n  }, {\n    name: 'Grid',\n    param: '/grid'\n  }];\n\n  return _react2.default.createElement(\n    'ul',\n    null,\n    languages.map(function (_ref) {\n      var name = _ref.name,\n          param = _ref.param;\n      return _react2.default.createElement(\n        'li',\n        { key: param },\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '' + param },\n          name\n        )\n      );\n    })\n  );\n}\n\n//# sourceURL=webpack:///./src/components/Navbar.jsx?");

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mahasiswa = __webpack_require__(/*! ./mahasiswa */ \"./src/models/mahasiswa.js\");\n\nObject.keys(_mahasiswa).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _mahasiswa[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/models/index.js?");

/***/ }),

/***/ "./src/models/mahasiswa.js":
/*!*********************************!*\
  !*** ./src/models/mahasiswa.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar getMahasiswa = exports.getMahasiswa = function getMahasiswa() {\n  return fetch('http://demo0888028.mockable.io/mahasiswa', {\n    method: 'GET'\n  });\n};\n\n//# sourceURL=webpack:///./src/models/mahasiswa.js?");

/***/ }),

/***/ "./src/redux/actions.js":
/*!******************************!*\
  !*** ./src/redux/actions.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _actions = __webpack_require__(/*! ./modules/app/actions */ \"./src/redux/modules/app/actions.js\");\n\nObject.keys(_actions).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _actions[key];\n    }\n  });\n});\n\nvar _actions2 = __webpack_require__(/*! ./modules/mahasiswa/actions */ \"./src/redux/modules/mahasiswa/actions.js\");\n\nObject.keys(_actions2).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _actions2[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/redux/actions.js?");

/***/ }),

/***/ "./src/redux/configureStore.js":
/*!*************************************!*\
  !*** ./src/redux/configureStore.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = configureStore;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reduxClientMiddleware = __webpack_require__(/*! ./reduxClientMiddleware */ \"./src/redux/reduxClientMiddleware.js\");\n\nvar _reduxClientMiddleware2 = _interopRequireDefault(_reduxClientMiddleware);\n\nvar _reducers = __webpack_require__(/*! ./reducers */ \"./src/redux/reducers.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/redux/actions.js\");\n\nvar _actions2 = _interopRequireDefault(_actions);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction configureStore() {\n  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var client = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n  console.log('process.env', \"development\");\n\n  var DEV = \"development\" !== 'production';\n  var middleware = [(0, _reduxClientMiddleware2.default)(client), _reduxThunk2.default];\n  var composeEnhancers = _redux.compose;\n\n  if (process.env.BROWSER && DEV) {\n    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {\n      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({\n        actionCreators: _actions2.default\n      });\n    }\n  }\n\n  var store = (0, _redux.createStore)(_reducers2.default, preloadedState, composeEnhancers(_redux.applyMiddleware.apply(undefined, middleware)));\n\n  if (false) {}\n\n  return store;\n}\n\n//# sourceURL=webpack:///./src/redux/configureStore.js?");

/***/ }),

/***/ "./src/redux/modules/app/actions.js":
/*!******************************************!*\
  !*** ./src/redux/modules/app/actions.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.setLoading = undefined;\n\nvar _types = __webpack_require__(/*! ./types */ \"./src/redux/modules/app/types.js\");\n\nvar types = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar setLoading = exports.setLoading = function setLoading(bool) {\n  return {\n    type: types.SET_LOADING,\n    bool: bool\n  };\n};\n\n//# sourceURL=webpack:///./src/redux/modules/app/actions.js?");

/***/ }),

/***/ "./src/redux/modules/app/index.js":
/*!****************************************!*\
  !*** ./src/redux/modules/app/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _types = __webpack_require__(/*! ./types */ \"./src/redux/modules/app/types.js\");\n\nvar types = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar initialState = {\n  loading: {\n    loading: false\n  }\n};\n\nvar ACTION_HANDLERS = _defineProperty({}, types.SET_LOADING, function (state, action) {\n  return _extends({}, state, {\n    loading: action.bool\n  });\n});\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments[1];\n\n  var handler = ACTION_HANDLERS[action.type];\n\n  return handler ? handler(state, action) : state;\n};\n\n//# sourceURL=webpack:///./src/redux/modules/app/index.js?");

/***/ }),

/***/ "./src/redux/modules/app/types.js":
/*!****************************************!*\
  !*** ./src/redux/modules/app/types.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar SET_LOADING = exports.SET_LOADING = 'SET_LOADING';\n\n//# sourceURL=webpack:///./src/redux/modules/app/types.js?");

/***/ }),

/***/ "./src/redux/modules/mahasiswa/actions.js":
/*!************************************************!*\
  !*** ./src/redux/modules/mahasiswa/actions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getMahasiswaAction = undefined;\n\nvar _types = __webpack_require__(/*! ./types */ \"./src/redux/modules/mahasiswa/types.js\");\n\nvar types = _interopRequireWildcard(_types);\n\nvar _models = __webpack_require__(/*! ../../../models */ \"./src/models/index.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar getMahasiswaAction = exports.getMahasiswaAction = function getMahasiswaAction() {\n  return {\n    types: [types.LOAD_MAHASISWA, types.LOAD_MAHASISWA_SUCCESS, types.LOAD_MAHASISWA_FAIL],\n    promise: function promise() {\n      return (0, _models.getMahasiswa)().then(function (res) {\n        return res || {};\n      });\n    }\n  };\n};\n\n//# sourceURL=webpack:///./src/redux/modules/mahasiswa/actions.js?");

/***/ }),

/***/ "./src/redux/modules/mahasiswa/index.js":
/*!**********************************************!*\
  !*** ./src/redux/modules/mahasiswa/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _ACTION_HANDLERS;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _types = __webpack_require__(/*! ./types */ \"./src/redux/modules/mahasiswa/types.js\");\n\nvar types = _interopRequireWildcard(_types);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar initialState = {\n  loading: false,\n  loaded: false,\n  data: {}\n};\n\nvar ACTION_HANDLERS = (_ACTION_HANDLERS = {}, _defineProperty(_ACTION_HANDLERS, types.LOAD_MAHASISWA, function (state) {\n  return _extends({}, state, {\n    loading: true\n  });\n}), _defineProperty(_ACTION_HANDLERS, types.LOAD_MAHASISWA_FAIL, function (state) {\n  return _extends({}, state, {\n    loading: false,\n    loaded: true\n  });\n}), _defineProperty(_ACTION_HANDLERS, types.LOAD_MAHASISWA_SUCCESS, function (state, action) {\n  return _extends({}, state, {\n    loading: false,\n    loaded: true,\n    data: action.data\n  });\n}), _ACTION_HANDLERS);\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments[1];\n\n  var handler = ACTION_HANDLERS[action.type];\n\n  return handler ? handler(state, action) : state;\n};\n\n//# sourceURL=webpack:///./src/redux/modules/mahasiswa/index.js?");

/***/ }),

/***/ "./src/redux/modules/mahasiswa/types.js":
/*!**********************************************!*\
  !*** ./src/redux/modules/mahasiswa/types.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar LOAD_MAHASISWA = exports.LOAD_MAHASISWA = 'LOAD_MAHASISWA';\nvar LOAD_MAHASISWA_SUCCESS = exports.LOAD_MAHASISWA_SUCCESS = 'LOAD_MAHASISWA_SUCCESS';\nvar LOAD_MAHASISWA_FAIL = exports.LOAD_MAHASISWA_FAIL = 'LOAD_MAHASISWA_FAIL';\n\n//# sourceURL=webpack:///./src/redux/modules/mahasiswa/types.js?");

/***/ }),

/***/ "./src/redux/reducers.js":
/*!*******************************!*\
  !*** ./src/redux/reducers.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _app = __webpack_require__(/*! ./modules/app */ \"./src/redux/modules/app/index.js\");\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _mahasiswa = __webpack_require__(/*! ./modules/mahasiswa */ \"./src/redux/modules/mahasiswa/index.js\");\n\nvar _mahasiswa2 = _interopRequireDefault(_mahasiswa);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  app: _app2.default,\n  mahasiswa: _mahasiswa2.default\n});\n\n//# sourceURL=webpack:///./src/redux/reducers.js?");

/***/ }),

/***/ "./src/redux/reduxClientMiddleware.js":
/*!********************************************!*\
  !*** ./src/redux/reduxClientMiddleware.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nexports.default = function (client) {\n  return function (_ref) {\n    var dispatch = _ref.dispatch,\n        getState = _ref.getState;\n    return function (next) {\n      return function (action) {\n        if (typeof action === 'function') {\n          return action(dispatch, getState);\n        }\n\n        var promise = action.promise,\n            types = action.types,\n            rest = _objectWithoutProperties(action, ['promise', 'types']); // eslint-disable-line no-redeclare\n\n        if (!promise) {\n          return next(action);\n        }\n\n        var _types = _slicedToArray(types, 3),\n            REQUEST = _types[0],\n            SUCCESS = _types[1],\n            FAILURE = _types[2];\n\n        next(_extends({}, rest || {}, { type: REQUEST }));\n\n        var actionPromise = promise(client, dispatch);\n\n        actionPromise.then(function (result) {\n          return next(_extends({}, rest || {}, { result: result, type: SUCCESS }));\n        }, function (error) {\n          return next(_extends({}, rest || {}, { error: error, type: FAILURE }));\n        });\n\n        return actionPromise;\n      };\n    };\n  };\n};\n\n//# sourceURL=webpack:///./src/redux/reduxClientMiddleware.js?");

/***/ }),

/***/ "./src/routes/Grid/index.jsx":
/*!***********************************!*\
  !*** ./src/routes/Grid/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Grid = function (_Component) {\n  _inherits(Grid, _Component);\n\n  function Grid(props) {\n    _classCallCheck(this, Grid);\n\n    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));\n  }\n\n  _createClass(Grid, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'HALAMAN GRID'\n      );\n    }\n  }]);\n\n  return Grid;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {};\n};\n\nvar mapDispatchToProps = {};\n\nexports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Grid));\n\n//# sourceURL=webpack:///./src/routes/Grid/index.jsx?");

/***/ }),

/***/ "./src/routes/Landing/index.jsx":
/*!**************************************!*\
  !*** ./src/routes/Landing/index.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _actions = __webpack_require__(/*! ../../redux/actions */ \"./src/redux/actions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home(props) {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));\n  }\n\n  _createClass(Home, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.setLoading(true);\n      this.props.getMahasiswaAction();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'HALAMAN Home',\n        _react2.default.createElement('br', null),\n        'Loading... ' + this.props.loading\n      );\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    loading: state.app.loading\n  };\n};\n\nvar mapDispatchToProps = {\n  setLoading: _actions.setLoading,\n  getMahasiswaAction: _actions.getMahasiswaAction\n};\n\nexports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home));\n\n//# sourceURL=webpack:///./src/routes/Landing/index.jsx?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Layout = __webpack_require__(/*! ./../components/Layout */ \"./src/components/Layout.jsx\");\n\nvar _Layout2 = _interopRequireDefault(_Layout);\n\nvar _Landing = __webpack_require__(/*! ./Landing */ \"./src/routes/Landing/index.jsx\");\n\nvar _Landing2 = _interopRequireDefault(_Landing);\n\nvar _Grid = __webpack_require__(/*! ./Grid */ \"./src/routes/Grid/index.jsx\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [{\n  component: _Layout2.default,\n  routes: [{\n    path: '/',\n    exact: true,\n    component: _Landing2.default\n  }, {\n    path: '/grid',\n    component: _Grid2.default\n  }]\n}];\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _configureStore = __webpack_require__(/*! ./redux/configureStore */ \"./src/redux/configureStore.js\");\n\nvar _configureStore2 = _interopRequireDefault(_configureStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nvar server = (0, _express2.default)();\n\n// server.use(cors());\nserver.use(_express2.default.static('public'));\n\nserver.get(\"*\", function (req, res, next) {\n  res.locals.data = {\n    app: {}\n  };\n\n  var store = (0, _configureStore2.default)(res.locals.data);\n  var markup = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.url, context: {} },\n      (0, _reactRouterConfig.renderRoutes)(_routes2.default)\n    )\n  ));\n\n  res.send('\\n    <!DOCTYPE html>\\n    <html>\\n      <head>\\n        <title>SSR with RR</title>\\n        <script src=\"/bundle.js\" defer></script>\\n      </head>\\n\\n      <body>\\n        <div id=\"app\">' + markup + '</div>\\n\\n        <script type=\"text/javascript\">\\n          window.__INITIAL_STATE__ = ' + (0, _serializeJavascript2.default)(store.getState()) + ';\\n        </script>\\n      </body>\\n    </html>\\n  ');\n});\n\nserver.listen(3000, function () {\n  console.log('Server is listening on port: 3000');\n});\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });