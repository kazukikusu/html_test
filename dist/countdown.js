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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/countdown.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/countdown.js":
/*!*************************!*\
  !*** ./js/countdown.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// ▼ カウントダウンタイマーの設定\nfunction CountdownTimer(elm, tl, mes) {\n    this.initialize.apply(this, arguments);\n}\n\nCountdownTimer.prototype = {\n    initialize: function (elm, tl, mes) {\n      this.elem = document.getElementById(elm);\n      this.tl = tl;\n      this.mes = mes;\n    },\n    countDown: function () {\n      var timer = '';\n      var today = new Date();\n      var day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000));\n      var hour = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));\n      var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;\n      var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;\n      var milli = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 10) % 100;\n      var me = this;\n  \n    if ((this.tl - today) > 0) {\n        if (day) timer += '<span class=\"cdt_num\">' + day + '</span><small>日と</small>';\n        if (hour) timer += '<span class=\"cdt_num\">' + hour + '</span><small>時間</small>';\n        timer += '<span class=\"cdt_num\">' + this.addZero(min) + '</span><small>分</small><span class=\"cdt_num\">' + this.addZero(sec) + '</span><small>秒</small>';\n        this.elem.innerHTML = timer;\n        tid = setTimeout(function () {\n          me.countDown();\n        }, 10);\n      } else {\n        this.elem.innerHTML = this.mes;\n        return;\n      }\n    },\n    addZero: function (num) {\n      return ('0' + num).slice(-2);\n    }\n}\n  \n// ▼ 開始＆終了日時の指定と日付の判別\nfunction CDT() {\n    var nowDate = Date.now();\n    var myS = new Date('2020-11-05T00:00+09:00').getTime(); // 開始日時の指定\n    var end = new Date('2021-03-05T23:59+09:00'); // 終了日時の指定\n    var myE = end.getTime();\n\n    // 今日が開始日前か期間中か終了日後かの判別\n    if (myS <= nowDate && myE >= nowDate) {\n        var text = '<span>終了</span><span>まで</span>';\n        var tl = end;\n    } // 期間中\n    else if (myS > nowDate) {\n        var text = '<span>開催</span><span>まで</span>';\n        var tl = start;\n    } // 開始日前\n    else {\n        var text = \"\";\n    } // 終了日後\n\n    var timer = new CountdownTimer('cdt_date', tl, '<small>終了しました</small>'); // 終了日後のテキスト\n    timer.countDown();\n    target = document.getElementById(\"cdt_txt\");\n    target.innerHTML = text;\n}\n\nCDT();\n\n//# sourceURL=webpack:///./js/countdown.js?");

/***/ })

/******/ });