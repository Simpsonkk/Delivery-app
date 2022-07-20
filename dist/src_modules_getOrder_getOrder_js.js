"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdelivery_app"] = self["webpackChunkdelivery_app"] || []).push([["src_modules_getOrder_getOrder_js"],{

/***/ "./src/modules/getOrder/getOrder.js":
/*!******************************************!*\
  !*** ./src/modules/getOrder/getOrder.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createShops\": () => (/* binding */ createShops),\n/* harmony export */   \"sendOrder\": () => (/* binding */ sendOrder)\n/* harmony export */ });\nasync function sendOrder(order) {\n  await fetch('http://localhost:3001/orders', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json, text/plain, */*',\n      'Content-Type': 'application/json'\n  },\n    body: JSON.stringify(order),\n  });\n}\n\nasync function createShops() {\n  const shop = {\n    shop: 'test shop'\n  }\n  await fetch('http://localhost:7000/api/shops', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json, text/plain, */*',\n      'Content-Type': 'application/json'\n  },\n    body: JSON.stringify(shop),\n  });\n}\n\n\n\n//# sourceURL=webpack://delivery_app/./src/modules/getOrder/getOrder.js?");

/***/ })

}]);