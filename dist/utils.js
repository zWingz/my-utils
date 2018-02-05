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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(24)('wks');
var uid = __webpack_require__(25);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(13);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(39);
var toPrimitive = __webpack_require__(40);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(12)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var ctx = __webpack_require__(18);
var hide = __webpack_require__(3);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(24)('keys');
var uid = __webpack_require__(25);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(9);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = padStart;
/* harmony export (immutable) */ __webpack_exports__["b"] = padEnd;
/* harmony export (immutable) */ __webpack_exports__["e"] = xssFilter;
/* harmony export (immutable) */ __webpack_exports__["d"] = transRegExpToString;
/* harmony export (immutable) */ __webpack_exports__["a"] = createRegExpFromString;
/** 
 * @file
*/

/**
 * 
 * 
 * @param {any} len 
 * @param {any} fill 
 * @returns 
 */
function fillStr(len, fill) {
    var arr = [];
    arr.length = len;
    arr = arr.join('1').replace(/1/g, fill);
    return arr;
}
function padStr(type, str, len, fill) {
    var key = 'pad' + type;
    if (String.prototype[key]) {
        return str[key](len, fill);
    }
    if (typeof str !== 'string') {
        str = str.toString();
    }
    var l = str.length - len;
    if (l < 0) {
        var pad = fillStr(-l, fill);
        return type === 'String' ? pad + str : str + pad;
    }
    return str;
}

function padStart() {
    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
    }

    return padStr('Start', arg);
}
function padEnd(str, len, fill) {
    return padStr('End', arg);
}

/**
 * xss过滤
 *
 * @export
 * @param {String} text 文本
 * @returns String
 */
function xssFilter(text) {
    return text.replace(/"/g, '&quot;').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/‘/g, '&#x27;').replace(/\//g, '&#x2f');
}

/**
 * 将正则表达式的字符添加转义符 '\'
 * 使得调用test的时候除去关键字符
 *
 * @export
 * @param {String} str 需要转移的字符
 * @returns 返回转以后的字符,
 */
function transRegExpToString(str) {
    return str.replace(/[\^\$\.\*\+\?\=\!\:\|\\\/\(\)\[\]\{\}]/g, function (arg) {
        return '\\' + arg;
    });
}

/**
 * 根据字符串,返回经过转义后的正则
 *
 * @export
 * @param {String} str 字符串
 * @returns {RegExp}
 */
function createRegExpFromString(str) {
    return new RegExp(transRegExpToString(str + ''), 'i');
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(38);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(45);
var enumBugKeys = __webpack_require__(26);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(46);
var defined = __webpack_require__(9);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(8);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(7);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom__ = __webpack_require__(29);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "querySelectorAll", function() { return __WEBPACK_IMPORTED_MODULE_0_dom__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return __WEBPACK_IMPORTED_MODULE_0_dom__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "download", function() { return __WEBPACK_IMPORTED_MODULE_0_dom__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "UploadUtils", function() { return __WEBPACK_IMPORTED_MODULE_0_dom__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "addResizeEventListener", function() { return __WEBPACK_IMPORTED_MODULE_0_dom__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "timerFnc", function() { return __WEBPACK_IMPORTED_MODULE_0_dom__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CreateTimingFnc", function() { return __WEBPACK_IMPORTED_MODULE_0_dom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_string__ = __webpack_require__(17);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "padStart", function() { return __WEBPACK_IMPORTED_MODULE_1_string__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "padEnd", function() { return __WEBPACK_IMPORTED_MODULE_1_string__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "xssFilter", function() { return __WEBPACK_IMPORTED_MODULE_1_string__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "transRegExpToString", function() { return __WEBPACK_IMPORTED_MODULE_1_string__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createRegExpFromString", function() { return __WEBPACK_IMPORTED_MODULE_1_string__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_array__ = __webpack_require__(30);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "concatArray", function() { return __WEBPACK_IMPORTED_MODULE_2_array__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date__ = __webpack_require__(58);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DateFormat", function() { return __WEBPACK_IMPORTED_MODULE_3_date__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getConsistencyDate", function() { return __WEBPACK_IMPORTED_MODULE_3_date__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getMonthFirstAndEnd", function() { return __WEBPACK_IMPORTED_MODULE_3_date__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getWeek", function() { return __WEBPACK_IMPORTED_MODULE_3_date__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getWeekInYear", function() { return __WEBPACK_IMPORTED_MODULE_3_date__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "switchSiblingWeek", function() { return __WEBPACK_IMPORTED_MODULE_3_date__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "switchSiblingWeekInYear", function() { return __WEBPACK_IMPORTED_MODULE_3_date__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getWeekDate", function() { return __WEBPACK_IMPORTED_MODULE_3_date__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_filter__ = __webpack_require__(59);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return __WEBPACK_IMPORTED_MODULE_4_filter__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "fixedNumber", function() { return __WEBPACK_IMPORTED_MODULE_4_filter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_object__ = __webpack_require__(60);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ObjectClone", function() { return __WEBPACK_IMPORTED_MODULE_5_object__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "validObj", function() { return __WEBPACK_IMPORTED_MODULE_5_object__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getTotal", function() { return __WEBPACK_IMPORTED_MODULE_5_object__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_operate__ = __webpack_require__(67);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "add", function() { return __WEBPACK_IMPORTED_MODULE_6_operate__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "division", function() { return __WEBPACK_IMPORTED_MODULE_6_operate__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_polyfill__ = __webpack_require__(68);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "closestPolyfill", function() { return __WEBPACK_IMPORTED_MODULE_7_polyfill__["a"]; });









/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = querySelectorAll;
/* harmony export (immutable) */ __webpack_exports__["e"] = getStyle;
/* harmony export (immutable) */ __webpack_exports__["d"] = download;
/* harmony export (immutable) */ __webpack_exports__["b"] = UploadUtils;
/* harmony export (immutable) */ __webpack_exports__["c"] = addResizeEventListener;
/* harmony export (immutable) */ __webpack_exports__["g"] = timerFnc;
/* harmony export (immutable) */ __webpack_exports__["a"] = CreateTimingFnc;
/**
 * base on element-ui
 * @file 操作dom函数
 * @author zhengzhirong@youmi.net
 *
 */

/* istanbul ignore next */

var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;

/**
 * 转换成驼峰命名
 *
 * @param {String} name
 * @returns {String} 转换后字符串
 */
var camelCase = function camelCase(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};
/**
 * 封装document.querySelectorAll
 * 返回数组
 *
 * @export
 * @param {String} selector 选择器
 * @param {Node} context 上下文
 * @returns {Array} 返回dom数组
 */
function querySelectorAll(selector, context) {
    var dom = context.querySelectorAll(selector);
    return Array.prototype.slice.call(dom, 0);
}

/**
 * 获取element元素的样式值
 *
 * @export
 * @param {Node} element dom元素
 * @param {String} styleName 样式名
 * @returns 样式值
 */
function getStyle(element, styleName) {
    if (!element || !styleName) return '';
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        var computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : '';
    } catch (e) {
        return element.style[styleName];
    }
}

/**
 * 添加一个a标签用于下载
 *
 * @export
 * @param {String} url 地址
 */
function download(url) {
    var a = document.createElement('a');
    a.href = HttpRoot + url;
    // a.target = '_blank';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
        document.body.removeChild(a);
    }, 500);
}

/**
 * 上传调用的函数
 *
 * @export
 * @param {File} file 上传的文件
 * @returns {Promise} 上传的promise
 */
function UploadUtils(file, url, onprogress) {
    if (file) {
        var formData = new FormData();
        formData.append('file', file);
        return $post(url, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
            onUploadProgress: function onUploadProgress() {
                if (event.lengthComputable && onprogress) {
                    var percentComplete = event.loaded / event.total * 100;
                    percentComplete = Math.ceil(percentComplete);
                    onprogress(percentComplete > 99 ? 99 : percentComplete);
                }
            }
        });
    }
    return false;
}

/**
 * 给dom添加resize事件
 * 原理是在dom下添加一个object,监听object的resize事件
 *
 * @export
 * @param {Element} ele 需要监听的dom
 * @param {Function} resizeHandle 回调事件
 * @returns
 */
function addResizeEventListener(ele, resizeHandle) {
    var obj = document.createElement('object');
    obj.setAttribute('style', 'position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden;opacity: 0; pointer-events: none; z-index: -1;');
    obj.onload = function () {
        obj.contentDocument.defaultView.addEventListener('resize', resizeHandle, false);
    };
    obj.type = 'text/html';
    ele.appendChild(obj);
    obj.data = 'about:blank';
    return obj;
}

/**
 * 节流函数
 * 规定时间内如果触发多次,则取消上一次请求,重新setTimeout
 *
 * @export
 * @param {Function} fnc 需要执行的函数
 * @param {Number} t 触发事件
 * @param {Function} beforeHook 每次执行之前的钩子
 * @returns
 */
function timerFnc(fnc, t, beforeHook) {
    var timer = null;
    var time = t || 200;
    return function call(arg) {
        var _this = this;

        if (timer) {
            window.clearTimeout(timer);
        }
        beforeHook && beforeHook.call(this);
        timer = window.setTimeout(async function () {
            await fnc.call(_this, arg);
            timer = null;
        }, time);
    };
}

/**
 * 创建基于cos的动画函数
 *
 * @export {timer, render, cancel}
 */
function CreateTimingFnc() {
    this.timer = null;
    this.render = function (start, end, duration, callback) {
        // console.log('start', start, 'end', end)
        if (start === end) {
            callback(end);
            return;
        }
        var cosParameter = (end - start) / 2;
        // 每次滚动参数,用于计算cos
        var count = 0,

        // 时间戳
        oldTimestamp = performance.now();
        var _self = this;

        function step(newTimestamp) {
            // 滚动参数计算,在0-π 之间, 计算出cos在 1到-1之间
            count += Math.PI / (duration / (newTimestamp - oldTimestamp));
            if (count >= Math.PI) {
                callback(end);
                return;
            }
            // 根据cos函数值从1到-1计算.
            var value = Math.round(Math.abs(cosParameter) - cosParameter * Math.cos(count));
            callback(value);
            // 刷新时间戳
            oldTimestamp = newTimestamp;
            _self.timer = window.requestAnimationFrame(step);
        }
        this.timer = window.requestAnimationFrame(step);
    };
    this.cancel = function () {
        if (this.timer) {
            window.cancelAnimationFrame(this.timer);
            this.timer = null;
        }
    };
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = concatArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);

/** 
 * @file
*/

/**
 * 将args下多个数组合并成一个数组
 *
 * @export
 * @param {Array} args 需要合并的数组
 * @returns Array
 */
function concatArray(args) {
  var _ref;

  return (_ref = []).concat.apply(_ref, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(args));
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(32);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(33), __esModule: true };

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34);
__webpack_require__(51);
module.exports = __webpack_require__(1).Array.from;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(35)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(36)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(8);
var defined = __webpack_require__(9);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(37);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(41);
var hide = __webpack_require__(3);
var has = __webpack_require__(7);
var Iterators = __webpack_require__(14);
var $iterCreate = __webpack_require__(42);
var setToStringTag = __webpack_require__(27);
var getPrototypeOf = __webpack_require__(50);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(12)(function () {
  return Object.defineProperty(__webpack_require__(19)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(11);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(43);
var descriptor = __webpack_require__(13);
var setToStringTag = __webpack_require__(27);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(3)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(5);
var dPs = __webpack_require__(44);
var enumBugKeys = __webpack_require__(26);
var IE_PROTO = __webpack_require__(15)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(19)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(49).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(5);
var getKeys = __webpack_require__(20);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(7);
var toIObject = __webpack_require__(21);
var arrayIndexOf = __webpack_require__(47)(false);
var IE_PROTO = __webpack_require__(15)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(21);
var toLength = __webpack_require__(23);
var toAbsoluteIndex = __webpack_require__(48);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(8);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(7);
var toObject = __webpack_require__(16);
var IE_PROTO = __webpack_require__(15)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(18);
var $export = __webpack_require__(10);
var toObject = __webpack_require__(16);
var call = __webpack_require__(52);
var isArrayIter = __webpack_require__(53);
var toLength = __webpack_require__(23);
var createProperty = __webpack_require__(54);
var getIterFn = __webpack_require__(55);

$export($export.S + $export.F * !__webpack_require__(57)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(14);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(4);
var createDesc = __webpack_require__(13);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(56);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(14);
module.exports = __webpack_require__(1).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(22);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = DateFormat;
/* harmony export (immutable) */ __webpack_exports__["b"] = getConsistencyDate;
/* harmony export (immutable) */ __webpack_exports__["c"] = getMonthFirstAndEnd;
/* harmony export (immutable) */ __webpack_exports__["d"] = getWeek;
/* harmony export (immutable) */ __webpack_exports__["f"] = getWeekInYear;
/* harmony export (immutable) */ __webpack_exports__["g"] = switchSiblingWeek;
/* harmony export (immutable) */ __webpack_exports__["h"] = switchSiblingWeekInYear;
/* harmony export (immutable) */ __webpack_exports__["e"] = getWeekDate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string__ = __webpack_require__(17);
/** 
 * @file
*/



/**
 * 时间格式函数
 *
 * @export
 * @param {any} [date=new Date()]
 * @param {string} [format='YYYY-MM-DD'] YYYY 年份 MM 月份 DD 日期 HH 时间 mm 分钟 ss 秒数
 * @returns
 */

function DateFormat(d, fmt) {
    var date = d || new Date();
    var format = fmt || 'YYYY-MM-DD';
    if (!date) {
        return '';
    }
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    var year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    return format.replace('YYYY', year).replace('MM', Object(__WEBPACK_IMPORTED_MODULE_0__string__["c" /* padStart */])(month, 2, '0')).replace('DD', Object(__WEBPACK_IMPORTED_MODULE_0__string__["c" /* padStart */])(date, 2, '0')).replace('HH', Object(__WEBPACK_IMPORTED_MODULE_0__string__["c" /* padStart */])(hour, 2, '0')).replace('mm', Object(__WEBPACK_IMPORTED_MODULE_0__string__["c" /* padStart */])(min, 2, '0')).replace('ss', Object(__WEBPACK_IMPORTED_MODULE_0__string__["c" /* padStart */])(sec, 2, '0'));
}

/**
 * 获取时间上为00:00的日期
 *
 * @export
 * @param {Date} [date=new Date()] 需要获取的日期.默认为当前
 * @returns Date
 */
function getConsistencyDate() {
    var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

    return new Date(d.toLocaleDateString() + ' 00:00');
}

/**
 * 获取某月第一天与最后一天
 *
 * @export
 * @param {Date} [date=new Date()] 需要获取的日期.默认为当前
 * @returns Date
 */

function getMonthFirstAndEnd() {
    var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var start = new Date();
    var end = new Date();
    start.setDate(1);
    start.setMonth(start.getMonth() + offset);
    end.setDate(0);
    end.setMonth(end.getMonth() + offset + 1);
    return { start: start, end: end };
}

/**
 * 以当年第一个周一作为本年第一周的起始日
 * 获取今天是本年第几周
 * @param {Date} 当前日期
 * @returns Number 周数
 */
function getWeek(currentDate) {
    // 一年第一个周一算第一周的开始
    // const tmpDate = new Date(currentDate.toLocaleDateString() + ' 00:00');
    var tmpDate = getConsistencyDate(currentDate);
    var tmpDay = tmpDate.getDay();
    tmpDay = tmpDay === 0 ? 7 : tmpDay; // 获取星期几
    tmpDate.setDate(tmpDate.getDate() - tmpDay + 1); // 将其调整为当周星期一

    var startDate = new Date(tmpDate.getFullYear(), 0, 1); // 获取当年第一天
    var startWeekDay = startDate.getDay();
    startWeekDay = startWeekDay === 0 ? 7 : startWeekDay;
    if (startWeekDay !== 1) {
        // 如果当天不是周期,则获取当年第一个周一的日期
        startDate.setDate(startDate.getDate() + 8 - startWeekDay);
    }
    var offset = (tmpDate - startDate) / 60 / 60 / 24 / 1000; // 计算时间差
    return Math.ceil(offset / 7) + 1;
}
/**
 * 以01-01作为本年第一周的起始日
 * 获取今天是本年第几周
 * @param {Date} 当前日期
 * @returns Number 周数
 */
function getWeekInYear(currentDate) {
    // 一年的第一天算是当年第一周的开始
    // const tmpDate = new Date(currentDate.toLocaleDateString() + ' 00:00'),
    var tmpDate = getConsistencyDate(currentDate),
        startDate = new Date(currentDate.getFullYear(), 0, 1); // 获取当年第一天
    var tmpDay = tmpDate.getDay(),
        // 获取星期几
    startWeekDay = startDate.getDay(); // 获取第一题星期几
    var offset = (tmpDate - startDate) / 60 / 60 / 24 / 1000; // 计算两天的日期差
    startWeekDay = startWeekDay === 0 ? 7 : startWeekDay;
    tmpDay = tmpDay === 0 ? 7 : tmpDay;
    offset -= tmpDay - startWeekDay; // 根据两天星期几之差修正offset.保证两天是在一周中是同一天
    var result = Math.ceil(offset / 7) + 1;

    return result;
}

/**
 * 以当前日期切换上下周.每次+-7天;
 * 切换后年份会变
 * @export
 * @param {Date} currentDate 当前日期
 * @param {String} type prev|next
 * @returns {Date}
 */
function switchSiblingWeek(currentDate, type) {
    var date = currentDate.getDate(),
        tmpDate = new Date(currentDate);
    if (type === 'prev') {
        tmpDate.setDate(date - 7);
    } else {
        tmpDate.setDate(date + 7);
    }
    return tmpDate;
}

/**
 * 切换上下周而且保证切换后年份不变
 * 以当前日期切换周期.如果切换后日期不包括01-01或者12-31,则+- 7天
 * 否则调整为01-01或者12-31
 * 如果当前日期为01-01,则切换后为12-31
 * 如果当前日期为12-31,则向下切换后为01-01
 * @export
 * @param {Date} currentDate 当前日期
 * @param {String} type prev|next
 * @returns {Date}
 */
function switchSiblingWeekInYear(currentDate, type) {
    var date = currentDate.getDate(),
        tmpDate = new Date(currentDate),
        fullYear = tmpDate.getFullYear(),
        month = tmpDate.getMonth();
    var result = void 0;
    if (type === 'prev') {
        tmpDate.setDate(date - 7);
        if (tmpDate.getFullYear() === fullYear) {
            result = tmpDate;
        } else if (month === 0 && date === 1) {
            result = new Date(fullYear - 1, 11, 31); // 如果是1月1日.则转到上一年12-31
        } else {
            result = new Date(fullYear, 0, 1); // 如果是上一星期不在当年,则切换到当年的1-1
        }
    } else {
        tmpDate.setDate(date + 7);
        if (tmpDate.getFullYear() === fullYear) {
            result = tmpDate;
        } else if (month === 11 && date === 31) {
            result = new Date(fullYear + 1, 0, 1); // 如果是12-31 则切到下年1月1
        } else {
            result = new Date(fullYear, 11, 31); // 如果下星期不在当年,则切换到当年12-31
        }
    }
    return result;
}

/**
 * 返回本周的日期
 *
 * @export
 * @param {Date} currentDate 当前日期
 * @param {String} format 格式化
 * @returns Array
 */
function getWeekDate(currentDate, format) {
    var weekDay = currentDate.getDay();
    weekDay = weekDay === 0 ? 7 : weekDay;
    var result = [];
    var date = void 0;
    for (var i = 0; i < 7; i++) {
        date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i - weekDay + 1);
        result.push(DateFormat(date, format));
    }
    return result;
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = formatNumber;
/* harmony export (immutable) */ __webpack_exports__["a"] = fixedNumber;
/**
 * 格式化Number类型为中国货币类型(每三位加逗号)
 *
 * @export
 * @param {any} str 需要格式化的字符串
 * @returns {String} 返回格式化后的字符串
 */
function formatNumber(str) {
    var split = str.split('.');
    var left = split[0];
    // 判断是否为负数,如果是则最后要带上'-'号
    var symbol = +str < 0;
    // 先去掉'-'号
    if (symbol) {
        left = left.replace('-', '');
    }
    if (left.length <= 3) {
        return str;
    }
    var right = split[1];
    return '' + (symbol ? '-' : '') + formatNumber(left.substr(0, left.length - 3)) + ',' + left.substr(left.length - 3) + (right ? '.' + right : '');
}
/**
 * 使用toLocaleString格式化数字
 *
 * @export
 * @param {Number} val 需要被格式化的文字
 * @param {boolean} [isFixed=true] 是否保留有效数字
 * @returns {String} 格式化后的数字
 */
function fixedNumber(val) {
    var fixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var isFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (isNaN(val)) {
        return '';
    }
    var str = (+val).toFixed(fixed);
    return isFormat ? str : formatNumber(str);
}

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ObjectClone;
/* harmony export (immutable) */ __webpack_exports__["c"] = validObj;
/* harmony export (immutable) */ __webpack_exports__["b"] = getTotal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);


/**
 * 对象克隆
 *
 * @export
 * @param {Object} obj 需要克隆的对象
 * @returns Object
 */
function ObjectClone(obj) {
    return JSON.parse(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(obj));
}

/**
 * 判断对象属性是否为空值.用于form表单的判断
 *
 * @export
 * @param {Object} obj 需判断的对象
 * @param {Array} [keys=Object.keys(obj)] 需要判断的字段,默认为全字段
 * @param {Function} [fnc=key => obj[key] !== ''] 判断方法.默认是不为空
 * @returns
 */
function validObj(obj) {
    var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(obj);
    var fnc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (key) {
        return obj[key] !== '';
    };

    return keys.every(fnc);
}

/**
 * 根据keyMap对list中的数据汇总
 *
 * @export
 * @param {any} list 需要汇总的数据
 * @param {any} keyMap 汇总对应的键值 { returnKey1: listItemKey1, ..., returnKeyN: listItemKeyn }
 * @returns {Object} 返回汇总后的对象 {returnKey1, returnKey2, ...returnKeyN}
 */
function getTotal(list, keyMap, fnc) {
    // const result = {}
    var keys = void 0,
        isArray = false;
    if (Array.isArray(keyMap)) {
        isArray = true;
        keys = keyMap;
    } else {
        keys = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(keyMap);
    }
    return list.reduce(function (sum, each) {
        keys.forEach(function (key) {
            var map = isArray ? key : keyMap[key];
            sum[key] = fnc(sum[key], each[map]);
        });
    }, {});
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
module.exports = __webpack_require__(1).Object.keys;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(16);
var $keys = __webpack_require__(20);

__webpack_require__(64)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(10);
var core = __webpack_require__(1);
var fails = __webpack_require__(12);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = add;
/* harmony export (immutable) */ __webpack_exports__["b"] = division;
/**
 * 加法
 * @export
 * @param {Number} a 被加数
 * @param {Number} b 加数
 * @param {Number} fixed 保留小数
 * @returns Number
 */
function add(a, b, fixed) {
    var left = isNaN(a) ? 0 : +a;
    var right = isNaN(b) ? 0 : +b;
    var result = left + right;
    if (typeof fixed !== 'undefined') {
        return +result.toFixed(fixed);
    }
    return result;
}

/**
 * 除法
 * @export
 * @param {Number} a 被除数
 * @param {Number} b 除数
 * @param {Number} fixed 保留小数
 * @returns Number
 */
function division(a, b, fixed) {
    var left = isNaN(a) ? 0 : +a;
    var right = isNaN(b) ? 0 : +b;
    if (!b) return 0;
    var result = left / right;
    if (typeof fixed !== 'undefined') {
        return +result.toFixed(fixed);
    }
    return result;
}

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = closestPolyfill;

/**
 * @file 浏览器垫片
 * @author zhengzhirong@youmi.net
 *
 */

function closestPolyfill() {
    /**
     * Element.closest() polyfill
     */
    if (!Element.prototype.closest) {
        if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        }
        Element.prototype.closest = function (s) {
            var el = this;
            if (!document.documentElement.contains(el)) {
                return null;
            }
            while (el) {
                if (el.matches(s)) {
                    return el;
                }
                el = el.parentElement;
            }
            return null;
        };
    }
}

/***/ })
/******/ ]);
//# sourceMappingURL=utils.js.map