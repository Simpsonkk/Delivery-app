"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdelivery_app"] = self["webpackChunkdelivery_app"] || []).push([["src_assets_styles_style_scss-src_modules_localstorageUtil_localstorage_util_js"],{

/***/ "./src/assets/styles/style.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://delivery_app/./src/assets/styles/style.scss?");

/***/ }),

/***/ "./src/modules/localstorageUtil/localstorage_util.js":
/*!***********************************************************!*\
  !*** ./src/modules/localstorageUtil/localstorage_util.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"localStorageUtil\": () => (/* binding */ localStorageUtil)\n/* harmony export */ });\nclass LocalStorageUtil {\n  constructor() {\n    this.keyname = 'products';\n  }\n\n  getProducts() {\n    const productsLocalStorage = localStorage.getItem(this.keyname);\n    if (productsLocalStorage !== null) {\n      return JSON.parse(productsLocalStorage);\n    }\n    return [];\n  }\n\n  putProducts(id) {\n    let products = this.getProducts();\n    products.push(id);\n    localStorage.setItem(this.keyname, JSON.stringify(products));\n  }\n\n  removeProducts(id) {\n    let products = this.getProducts();\n    let index = products.indexOf(id);\n    products.splice(index, 1);\n    localStorage.setItem(this.keyname, JSON.stringify(products));\n  }\n\n  removeAllProducts(id) {\n    let products = this.getProducts();\n    const sameElem = products.filter((el) => el === id);\n    const deleteSameElem = products.filter((el) => el !== sameElem[0]);\n    localStorage.setItem(this.keyname, JSON.stringify(deleteSameElem));\n  }\n}\n\nconst localStorageUtil = new LocalStorageUtil();\n\n\n//# sourceURL=webpack://delivery_app/./src/modules/localstorageUtil/localstorage_util.js?");

/***/ })

}]);