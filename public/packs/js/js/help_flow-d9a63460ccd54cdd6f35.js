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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/js/help_flow.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/js/help_flow.js":
/*!**********************************************!*\
  !*** ./app/javascript/packs/js/help_flow.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var help_pics_src = new Array("../HTML/images/flow/3.jpg", "../HTML/images/flow/1.jpg", "../HTML/images/flow/2.jpg", "../HTML/images/flow/4.jpg", "../HTML/images/flow/5.jpg", "../HTML/images/flow/6.jpg");
var help_content = {
  "ヘルプタイトル1": "らおが1",
  "ヘルプタイトル2": "お2えりおが",
  "ヘルプタイトル3": "おてぇ3おｈｒげｈ",
  "ヘルプタイトル4": "おえ4ｒｈごはｒｈｂいｊんｒ",
  "ヘルプタイトル5": "おてぇsag5aげｈ",
  "ヘルプタイトル6": "ｈ6ごがｒがｒｈｂいｊんｒ"
};
var help_topic = ["help-topic1", "help-topic2", "help-topic3", "help-topic4"];
var help_num = 0;
help_slideshow();

function help_slideshow() {
  if (help_num === help_pics_src.length - 4) {
    help_num = 0;
  } else {
    help_num++;
  }

  document.getElementById(help_topic[0]).src = help_pics_src[help_num];
  document.getElementById(help_topic[1]).src = help_pics_src[help_num + 1];
  document.getElementById(help_topic[2]).src = help_pics_src[help_num + 2];
  document.getElementById(help_topic[3]).src = help_pics_src[help_num + 3];
  document.getElementById("title1").textContent = Object.keys(help_content)[help_num].toString();
  document.getElementById("title2").textContent = Object.keys(help_content)[help_num + 1].toString();
  document.getElementById("title3").textContent = Object.keys(help_content)[help_num + 2].toString();
  document.getElementById("title4").textContent = Object.keys(help_content)[help_num + 3].toString();
  document.getElementById("text1").textContent = help_content[Object.keys(help_content)[help_num]].toString();
  document.getElementById("text2").textContent = help_content[Object.keys(help_content)[help_num + 1]].toString();
  document.getElementById("text3").textContent = help_content[Object.keys(help_content)[help_num + 2]].toString();
  document.getElementById("text4").textContent = help_content[Object.keys(help_content)[help_num + 3]].toString();
  setTimeout("help_slideshow()", 4500);
}

function help_go_forward() {
  if (help_num === help_pics_src.length - 4) {
    help_num = 0;
  } else {
    help_num++;
  }

  document.getElementById(help_topic[0]).src = help_pics_src[help_num];
  document.getElementById(help_topic[1]).src = help_pics_src[help_num + 1];
  document.getElementById(help_topic[2]).src = help_pics_src[help_num + 2];
  document.getElementById(help_topic[3]).src = help_pics_src[help_num + 3];
  document.getElementById("title1").textContent = Object.keys(help_content)[help_num].toString();
  document.getElementById("title2").textContent = Object.keys(help_content)[help_num + 1].toString();
  document.getElementById("title3").textContent = Object.keys(help_content)[help_num + 2].toString();
  document.getElementById("title4").textContent = Object.keys(help_content)[help_num + 3].toString();
  document.getElementById("text1").textContent = help_content[Object.keys(help_content)[help_num]].toString();
  document.getElementById("text2").textContent = help_content[Object.keys(help_content)[help_num + 1]].toString();
  document.getElementById("text3").textContent = help_content[Object.keys(help_content)[help_num + 2]].toString();
  document.getElementById("text4").textContent = help_content[Object.keys(help_content)[help_num + 3]].toString();
}

function help_go_back() {
  if (help_num === 0) {
    help_num = help_pics_src.length - 4;
  } else {
    help_num--;
  }

  document.getElementById(help_topic[0]).src = help_pics_src[help_num];
  document.getElementById(help_topic[1]).src = help_pics_src[help_num + 1];
  document.getElementById(help_topic[2]).src = help_pics_src[help_num + 2];
  document.getElementById(help_topic[3]).src = help_pics_src[help_num + 3];
  document.getElementById("title1").textContent = Object.keys(help_content)[help_num].toString();
  document.getElementById("title2").textContent = Object.keys(help_content)[help_num + 1].toString();
  document.getElementById("title3").textContent = Object.keys(help_content)[help_num + 2].toString();
  document.getElementById("title4").textContent = Object.keys(help_content)[help_num + 3].toString();
  document.getElementById("text1").textContent = help_content[Object.keys(help_content)[help_num]].toString();
  document.getElementById("text2").textContent = help_content[Object.keys(help_content)[help_num + 1]].toString();
  document.getElementById("text3").textContent = help_content[Object.keys(help_content)[help_num + 2]].toString();
  document.getElementById("text4").textContent = help_content[Object.keys(help_content)[help_num + 3]].toString();
}

/***/ })

/******/ });
//# sourceMappingURL=help_flow-d9a63460ccd54cdd6f35.js.map