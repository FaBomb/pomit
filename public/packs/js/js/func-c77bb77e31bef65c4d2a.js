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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/js/func.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/js/func.js":
/*!*****************************************!*\
  !*** ./app/javascript/packs/js/func.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  $('.nav_toggle').on('click', function () {
    $('.nav_toggle, .nav, .sidebar, .topic, .back, .head_img, .message_form').toggleClass('show');
  });
});
$(function () {
  var fix = $(".jump");
  var fixTop = fix.offset().top;
  $(window).scroll(function () {
    if ($(window).scrollTop() >= fixTop) {
      fix.css("position", "sticky");
      fix.css("position", "-webkit-sticky");
      fix.css("top", "0");
      fix.css("width", "90%");
      fix.css("border-bottom-color", "red");
    } else {
      fix.css("position", "");
      fix.css("top", "");
    }
  });
});

function func1(jumpNo) {
  var elem1 = document.getElementById("jump1");
  var elem2 = document.getElementById("jump2");
  var elem3 = document.getElementById("jump3");
  var elem4 = document.getElementById("jump4");

  if (jumpNo == 2) {
    elem2.style.borderBottom = "5px solid #1E70C6";
    elem1.style.borderBottom = "";
    elem3.style.borderBottom = "";
    elem4.style.borderBottom = "";
  } else if (jumpNo == 3) {
    elem3.style.borderBottom = "5px solid #1E70C6";
    elem1.style.borderBottom = "";
    elem2.style.borderBottom = "";
    elem4.style.borderBottom = "";
  } else if (jumpNo == 4) {
    elem4.style.borderBottom = "5px solid #1E70C6";
    elem1.style.borderBottom = "";
    elem2.style.borderBottom = "";
    elem3.style.borderBottom = "";
  } else {
    elem1.style.borderBottom = "5px solid #1E70C6";
    elem2.style.borderBottom = "";
    elem3.style.borderBottom = "";
    elem4.style.borderBottom = "";
  }
}

;

function createArea(childId, parentId) {
  console.log(childId);
  var area = document.createElement('li');
  var child = document.getElementById(childId);
  var parent = document.getElementById(parentId);
  area.innerHTML = child.outerHTML;
  parent.insertBefore(area, null);
}

function removeArea(parentId) {
  var element = document.getElementById(parentId);
  var elemCount = element.childElementCount;

  if (elemCount != 1) {
    element.removeChild(element.lastChild);
  }
}

/***/ })

/******/ });
//# sourceMappingURL=func-c77bb77e31bef65c4d2a.js.map