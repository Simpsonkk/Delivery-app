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

/***/ "./src/modules/calcTotalPrice/calcTotalPrice.js":
/*!******************************************************!*\
  !*** ./src/modules/calcTotalPrice/calcTotalPrice.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calcTotalPrice\": () => (/* binding */ calcTotalPrice)\n/* harmony export */ });\nclass CalcTotalPrice {\n  calcTotalPrice() {\n    const selectedDishes = document.querySelectorAll('.delivery-content__dish');\n    let totalPrice = 0;\n\n    selectedDishes.forEach((dish) => {\n      const dishCost = dish.querySelector('.delivery-content__cost').innerHTML;\n      const dishPrice = dish.querySelector('[data-counter]').innerHTML;\n      const currentPrice = +dishCost * +dishPrice;\n      totalPrice += currentPrice;\n    });\n    document.getElementById('totalPrice').innerHTML = `Total price: ${totalPrice} $`;\n  }\n}\nconst calcTotalPrice = new CalcTotalPrice();\n\n\n//# sourceURL=webpack://delivery_app/./src/modules/calcTotalPrice/calcTotalPrice.js?");

/***/ }),

/***/ "./src/modules/counter/counter.js":
/*!****************************************!*\
  !*** ./src/modules/counter/counter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counter\": () => (/* binding */ counter)\n/* harmony export */ });\n/* harmony import */ var _calcTotalPrice_calcTotalPrice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calcTotalPrice/calcTotalPrice */ \"./src/modules/calcTotalPrice/calcTotalPrice.js\");\n/* harmony import */ var _localstorageUtil_localstorage_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../localstorageUtil/localstorage_util */ \"./src/modules/localstorageUtil/localstorage_util.js\");\n\n\n\nclass Counter {\n  minusEl() {\n    const selectedDishes = document.querySelectorAll('.delivery-content__dish');\n    selectedDishes.forEach((item) => {\n      item\n        .querySelector('[data-action=\"minus\"]')\n        .addEventListener('click', () => {\n          const counter = item.querySelector('[data-counter]');\n          if (+counter.innerText > 1) {\n            counter.innerText = --counter.innerText;\n            const idDish = item\n              .querySelector('[data-id]')\n              .getAttribute('data-id');\n            _calcTotalPrice_calcTotalPrice__WEBPACK_IMPORTED_MODULE_0__.calcTotalPrice.calcTotalPrice();\n            _localstorageUtil_localstorage_util__WEBPACK_IMPORTED_MODULE_1__.localStorageUtil.removeProducts(idDish);\n          }\n        });\n    });\n  }\n\n  plusEl() {\n    const selectedDishes = document.querySelectorAll('.delivery-content__dish');\n    selectedDishes.forEach((item) => {\n      item\n        .querySelector('[data-action=\"plus\"]')\n        .addEventListener('click', () => {\n          const counter = item.querySelector('[data-counter]');\n          counter.innerText = ++counter.innerText;\n          const id = item.querySelector('[data-id]').getAttribute('data-id');\n          _calcTotalPrice_calcTotalPrice__WEBPACK_IMPORTED_MODULE_0__.calcTotalPrice.calcTotalPrice();\n          _localstorageUtil_localstorage_util__WEBPACK_IMPORTED_MODULE_1__.localStorageUtil.putProducts(id);\n        });\n    });\n  }\n}\n\nconst counter = new Counter();\n\n\n//# sourceURL=webpack://delivery_app/./src/modules/counter/counter.js?");

/***/ }),

/***/ "./src/modules/getOrder/getOrder.js":
/*!******************************************!*\
  !*** ./src/modules/getOrder/getOrder.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendOrder\": () => (/* binding */ sendOrder)\n/* harmony export */ });\nasync function sendOrder(order) {\n  await fetch('http://localhost:7000/api/orders', {\n    method: 'POST',\n    headers: {\n      Accept: 'application/json, text/plain, */*',\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(order),\n  });\n}\n\n\n//# sourceURL=webpack://delivery_app/./src/modules/getOrder/getOrder.js?");

/***/ }),

/***/ "./src/modules/shopping_cart_page/shopping_cart_page.js":
/*!**************************************************************!*\
  !*** ./src/modules/shopping_cart_page/shopping_cart_page.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shoppingCartPage\": () => (/* binding */ shoppingCartPage)\n/* harmony export */ });\n/* harmony import */ var _src_assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/assets/styles/style.scss */ \"./src/assets/styles/style.scss\");\n/* harmony import */ var _localstorageUtil_localstorage_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../localstorageUtil/localstorage_util */ \"./src/modules/localstorageUtil/localstorage_util.js\");\n/* harmony import */ var _counter_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../counter/counter */ \"./src/modules/counter/counter.js\");\n/* harmony import */ var _getOrder_getOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getOrder/getOrder */ \"./src/modules/getOrder/getOrder.js\");\n\n\n\n\n\nclass ShoppingCartPage {\n  initAddEventListeners() {\n    let btns = document.querySelectorAll('.delivery-content__remove-button');\n    btns.forEach(function (btn) {\n      btn.addEventListener('click', shoppingCartPage.removeDish);\n    });\n    document\n      .getElementById('submit')\n      .addEventListener('click', shoppingCartPage.setOrder);\n  }\n\n  render(shopId) {\n    const products = _localstorageUtil_localstorage_util__WEBPACK_IMPORTED_MODULE_1__.localStorageUtil.getProducts();\n    let selectedDishesAndQuantity = {};\n    for (var i = 0; i < products.length; i++) {\n      if (selectedDishesAndQuantity[products[i]]) {\n        selectedDishesAndQuantity[products[i]] += 1;\n      } else {\n        selectedDishesAndQuantity[products[i]] = 1;\n      }\n    }\n    let htmlCatalog = '';\n    let sumCatalog = 0;\n    shopId.forEach(({ productId, name, price, img }) => {\n      const quantity = selectedDishesAndQuantity[productId];\n      if (products.indexOf(JSON.stringify(productId)) !== -1) {\n        htmlCatalog += `\n        <div class=\"delivery-content__dish row col-4 justify-content-center\">\n          <img class=\"delivery-content__img col-auto\" src=${img}>\n          <div class=\"w-100\"></div>\n          <p class=\"delivery-content__name col-auto\">${name}</p>\n          <p class=\"delivery-content__cost col-auto p-0\">${price}</p>\n          <p class=\"delivery-content__currency col-auto p-0\">$</p>\n          <div class=\"w-100\"></div>\n          <button type=\"button\" class=\"delivery-content__remove-button col-2 p-0 btn \n          btn-outline-success\" data-id=${productId}>x</button>\n          <div class=\"delivery-content__counter-wrapper col-6 ms-2\">\n            <div class=\"delivery-content__control\" data-action=\"minus\">-</div>\n            <div id=\"counter\" class=\"delivery-content__current\" data-counter>${quantity}</div>\n            <div class=\"delivery-content__control\" data-action=\"plus\">+</div>\n          </div>\n        </div>\n        `;\n        sumCatalog += price * quantity;\n      }\n    });\n    document.getElementById('selectedDishes').innerHTML = htmlCatalog;\n    document.getElementById(\n      'totalPrice'\n    ).innerHTML = `Total price: ${sumCatalog} $`;\n    this.initAddEventListeners();\n    _counter_counter__WEBPACK_IMPORTED_MODULE_2__.counter.plusEl();\n    _counter_counter__WEBPACK_IMPORTED_MODULE_2__.counter.minusEl();\n  }\n\n  removeDish(event) {\n    _localstorageUtil_localstorage_util__WEBPACK_IMPORTED_MODULE_1__.localStorageUtil.removeAllProducts(event.target.getAttribute('data-id'));\n    shoppingCartPage.getProducts(JSON.parse(selectedShop));\n  }\n\n  sumTotal() {\n    const selectedDishes = document.querySelectorAll('.delivery-content__dish');\n\n    var totalPrice = 0;\n    selectedDishes.forEach((item) => {\n      const quantityEl = item.querySelector(\n        '.delivery-content__current'\n      ).textContent;\n      const priceEl = item.querySelector('.delivery-content__cost').textContent;\n      const currentPrice = quantityEl * priceEl;\n      totalPrice += currentPrice;\n    });\n\n    document.getElementById(\n      'totalPrice'\n    ).innerHTML = `Total price: ${totalPrice} $`;\n  }\n  async setOrder() {\n    let quantityOfDishes = [];\n    const products = _localstorageUtil_localstorage_util__WEBPACK_IMPORTED_MODULE_1__.localStorageUtil.getProducts();\n    const shopName = localStorage.getItem('shopId');\n    const response = await fetch(\n      `http://localhost:7000/api/products/${JSON.parse(shopName)}`\n    );\n    const list = await response.json();\n    const totalPrice = document\n      .getElementById('totalPrice')\n      .innerHTML.split('Total price: ')\n      .join('');\n    const userName = document.getElementById('userName').value;\n    const userEmail = document.getElementById('userEmail').value;\n    const userPhone = document.getElementById('userPhone').value;\n    const userAddress = document.getElementById('userAddress').value;\n    const btns = document.querySelectorAll('.delivery-content__current');\n    btns.forEach((btn) => {\n      quantityOfDishes.push(btn.textContent);\n    });\n    list.length = quantityOfDishes.length;\n\n    const dishesNameAndQuantity = list.reduce((acc, el, i) => {\n      acc.push(el.name, quantityOfDishes[i]);\n      return acc;\n    }, []);\n    const resp = await fetch('http://localhost:7000/api/shops');\n    const shops = await resp.json();\n    const selectedShopName = shops\n      .filter((el) => JSON.parse(shopName).includes(el.shopId))\n      .map((el) => el.shop);\n    const order = {\n      shop: selectedShopName.join(''),\n      dishesNameAndQuantity: dishesNameAndQuantity,\n      totalPrice: totalPrice,\n      userName: userName,\n      userEmail: userEmail,\n      userPhone: userPhone,\n      userAddress: userAddress,\n    };\n    console.log(order);\n    localStorage.clear();\n    document.getElementById('selectedDishes').innerHTML = '';\n    document.getElementById('totalPrice').innerHTML = 'Total price: 0 $';\n    (0,_getOrder_getOrder__WEBPACK_IMPORTED_MODULE_3__.sendOrder)(order);\n  }\n\n  async getProducts(id) {\n    const response = await fetch(`http://localhost:7000/api/products/${id}`);\n    const products = await response.json();\n    this.render(products);\n  }\n}\n\nconst shoppingCartPage = new ShoppingCartPage();\nconst selectedShop = localStorage.getItem('shopId');\nif (selectedShop) {\n  shoppingCartPage.getProducts(JSON.parse(selectedShop));\n}\n\n\n//# sourceURL=webpack://delivery_app/./src/modules/shopping_cart_page/shopping_cart_page.js?");

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
/******/ 			"pageTwo": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_assets_styles_style_scss-src_modules_localstorageUtil_localstorage_util_js"], () => (__webpack_require__("./src/modules/shopping_cart_page/shopping_cart_page.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;