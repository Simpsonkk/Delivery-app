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

/***/ "./src/modules/products/products.js":
/*!******************************************!*\
  !*** ./src/modules/products/products.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productsPage\": () => (/* binding */ productsPage)\n/* harmony export */ });\n/* harmony import */ var _localstorageUtil_localstorage_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localstorageUtil/localstorage_util */ \"./src/modules/localstorageUtil/localstorage_util.js\");\n\n\nclass Products {\n  handleSetLocationStorage(event) {\n    _localstorageUtil_localstorage_util__WEBPACK_IMPORTED_MODULE_0__.localStorageUtil.putProducts(event.target.getAttribute('data-id'));\n    event.target.innerHTML = 'Added';\n    event.target.setAttribute('disabled', 'disabled');\n  }\n\n  render(products) {\n    const productsStore = _localstorageUtil_localstorage_util__WEBPACK_IMPORTED_MODULE_0__.localStorageUtil.getProducts();\n    let htmlCatalog = '';\n    let activeTextButton = '';\n    products.forEach(({ productId, name, price, img }) => {\n      if (productsStore.indexOf(productId) === -1) {\n        activeTextButton = 'Add to Cart';\n      } else {\n        activeTextButton = 'Added';\n        var disabledButton = 'disabled=\"disabled\"';\n      }\n\n      htmlCatalog += `\n      <div class=\"delivery-content__dish row col-4 justify-content-center\">\n        <img class=\"delivery-content__img col-auto\" src=${img}>\n        <div class=\"w-100\"></div>\n        <p class=\"delivery-content__name col-auto\">${name}</p>\n        <p class=\"delivery-content__cost col-auto\">${price} $</p>\n        <div class=\"w-100\"></div>\n        <button type=\"button\" class=\"delivery-content__buy-button col-6 btn \n        btn-outline-success\" data-id=${productId} ${disabledButton}>${activeTextButton}</button>\n      </div>\n      `;\n    });\n    const html = `\n    <div class=\"delivery-content__shop-menu row ms-1 p-0 pb-1\">\n      ${htmlCatalog}\n    </div>\n    `;\n\n    document.getElementById('allMenuContainer').innerHTML = html;\n    this.initAddEventListeners();\n  }\n\n  initAddEventListeners() {\n    let btns = document.querySelectorAll('.delivery-content__buy-button');\n    btns.forEach(function (btn) {\n      btn.addEventListener('click', productsPage.handleSetLocationStorage);\n    });\n  }\n\n  async getShops() {\n    const response = await fetch('http://localhost:7000/api/shops');\n    const shops = await response.json();\n    let btns = '';\n    shops.forEach(({ shop, shopId }) => {\n      btns += `\n         <div class=\"w-100\"></div>\n          <button id=\"shopButton-${shopId}\" type=\"button\" class=\"delivery-content__shop-button btn btn-outline-warning col mb-2\" data-id=\"${shopId}\">${shop}</button>\n          `;\n    });\n    document.querySelector('.delivery-content__shops').innerHTML = btns;\n    const elements = document.querySelectorAll('button[id^=\"shopButton-\"]');\n    elements.forEach((element) => {\n      const id = element.getAttribute('data-id');\n      element.addEventListener('click', () => {\n        this.getProducts(id);\n        localStorage.clear();\n        localStorage.setItem('shopId', JSON.stringify(id));\n      });\n    });\n  }\n\n  async getProducts(id) {\n    const response = await fetch(`http://localhost:7000/api/products/${id}`);\n    const products = await response.json();\n    this.render(products);\n  }\n}\n\nconst productsPage = new Products();\nproductsPage.getShops();\n\n\n//# sourceURL=webpack://delivery_app/./src/modules/products/products.js?");

/***/ }),

/***/ "./src/modules/shops_page/shops_page.js":
/*!**********************************************!*\
  !*** ./src/modules/shops_page/shops_page.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/assets/styles/style.scss */ \"./src/assets/styles/style.scss\");\n/* harmony import */ var _products_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products/products */ \"./src/modules/products/products.js\");\n\n\n\n\n//# sourceURL=webpack://delivery_app/./src/modules/shops_page/shops_page.js?");

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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"pageOne": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdelivery_app"] = self["webpackChunkdelivery_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_assets_styles_style_scss-src_modules_localstorageUtil_localstorage_util_js"], () => (__webpack_require__("./src/modules/shops_page/shops_page.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;