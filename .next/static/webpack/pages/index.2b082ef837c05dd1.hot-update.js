"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Avatar.tsx":
/*!*******************************!*\
  !*** ./components/Avatar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Avatar = function(param) {\n    var seed = param.seed, large = param.large;\n    _s();\n    var address = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)().address;\n    console.log(seed);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-gray-300 bg-white shadow-md ring-2 ring-white hover:ring-primary-orange \".concat(large && \"h-20 w-20\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            src: \"https://avatars.dicebear.com/api/open-peeps/\".concat(seed || address || \"placeholder\", \".svg\"),\n            layout: \"fill\"\n        }, void 0, false, {\n            fileName: \"/Users/hawk/HumanityTools/poh-reddit/components/Avatar.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/hawk/HumanityTools/poh-reddit/components/Avatar.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(Avatar, \"P0Tew1bF/ofqCPuyR1AnB4HI6W0=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount\n    ];\n});\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F2YXRhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDSztBQUNJOztBQU9uQyxJQUFNRyxNQUFNLEdBQUcsZ0JBQTRCO1FBQXpCQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsS0FBSyxTQUFMQSxLQUFLOztJQUMzQixJQUFNLE9BQVMsR0FBS0gsaURBQVUsRUFBRSxDQUF4QkksT0FBTztJQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxDQUFDLENBQUM7SUFDbEIscUJBQ0UsOERBQUNLLEtBQUc7UUFDRkMsU0FBUyxFQUFFLGdKQUErSSxDQUV6SixPQURDTCxLQUFLLElBQUksV0FBVyxDQUNwQjtrQkFFRiw0RUFBQ0osbURBQUs7WUFDSlUsR0FBRyxFQUFFLDhDQUE2QyxDQUVqRCxNQUFJLENBREhQLElBQUksSUFBSUUsT0FBTyxJQUFJLGFBQWEsRUFDakMsTUFBSSxDQUFDO1lBQ05NLE1BQU0sRUFBQyxNQUFNOzs7OztpQkFDYjs7Ozs7YUFDRSxDQUNOO0NBQ0g7R0FqQktULE1BQU07O1FBQ1VELDZDQUFVOzs7QUFEMUJDLEtBQUFBLE1BQU07QUFtQlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0F2YXRhci50c3g/Mzg0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUFjY291bnQgfSBmcm9tIFwid2FnbWlcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgc2VlZD86IHN0cmluZztcbiAgbGFyZ2U/OiBib29sZWFuO1xufTtcblxuY29uc3QgQXZhdGFyID0gKHsgc2VlZCwgbGFyZ2UgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBhZGRyZXNzIH0gPSB1c2VBY2NvdW50KCk7XG4gIGNvbnNvbGUubG9nKHNlZWQpO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCByZWxhdGl2ZSBoLTEwIHctMTAgZmxleC1zaHJpbmstMCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1mdWxsIGJvcmRlci1ncmF5LTMwMCBiZy13aGl0ZSBzaGFkb3ctbWQgcmluZy0yIHJpbmctd2hpdGUgaG92ZXI6cmluZy1wcmltYXJ5LW9yYW5nZSAke1xuICAgICAgICBsYXJnZSAmJiBcImgtMjAgdy0yMFwiXG4gICAgICB9YH1cbiAgICA+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXtgaHR0cHM6Ly9hdmF0YXJzLmRpY2ViZWFyLmNvbS9hcGkvb3Blbi1wZWVwcy8ke1xuICAgICAgICAgIHNlZWQgfHwgYWRkcmVzcyB8fCBcInBsYWNlaG9sZGVyXCJcbiAgICAgICAgfS5zdmdgfVxuICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdmF0YXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsInVzZUFjY291bnQiLCJBdmF0YXIiLCJzZWVkIiwibGFyZ2UiLCJhZGRyZXNzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Avatar.tsx\n"));

/***/ })

});