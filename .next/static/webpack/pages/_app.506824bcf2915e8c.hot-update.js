"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/NetworkSwitcher.tsx":
/*!****************************************!*\
  !*** ./components/NetworkSwitcher.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NetworkSwitcher\": function() { return /* binding */ NetworkSwitcher; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction NetworkSwitcher() {\n    _s();\n    var chain = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useNetwork)().chain;\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useSwitchNetwork)(), chains = ref.chains, error = ref.error, isLoading = ref.isLoading, pendingChainId = ref.pendingChainId, switchNetwork = ref.switchNetwork;\n    var network = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useSwitchNetwork)({\n        chainId: 0\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            chain === null || chain === void 0 ? void 0 : chain.name.slice(0, 3),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.CheckIcon, {\n                                className: \"text-green-500 -rotate-12 w-6 h-6\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/poh-reddit/components/NetworkSwitcher.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/poh-reddit/components/NetworkSwitcher.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    switchNetwork && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \" flex items-center\",\n                            onClick: function() {\n                                return switchNetwork(network);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.XIcon, {\n                                className: \"h-6 w-6 text-red-500\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/poh-reddit/components/NetworkSwitcher.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/poh-reddit/components/NetworkSwitcher.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/poh-reddit/components/NetworkSwitcher.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/poh-reddit/components/NetworkSwitcher.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: error && error.message\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/poh-reddit/components/NetworkSwitcher.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/poh-reddit/components/NetworkSwitcher.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(NetworkSwitcher, \"bAO60JpNFguEydVPgGGaYIDaymk=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_1__.useNetwork,\n        wagmi__WEBPACK_IMPORTED_MODULE_1__.useSwitchNetwork,\n        wagmi__WEBPACK_IMPORTED_MODULE_1__.useSwitchNetwork\n    ];\n});\n_c = NetworkSwitcher;\nvar _c;\n$RefreshReg$(_c, \"NetworkSwitcher\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05ldHdvcmtTd2l0Y2hlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUtrQztBQUNtQjs7QUFFOUMsU0FBU0ksZUFBZSxHQUFHOztJQUNoQyxJQUFNLEtBQU8sR0FBS0YsaURBQVUsRUFBRSxDQUF0QkcsS0FBSztJQUNiLElBQ0VGLEdBQWtCLEdBQWxCQSx1REFBZ0IsRUFBRSxFQURaRyxNQUFNLEdBQ1pILEdBQWtCLENBRFpHLE1BQU0sRUFBRUMsS0FBSyxHQUNuQkosR0FBa0IsQ0FESkksS0FBSyxFQUFFQyxTQUFTLEdBQzlCTCxHQUFrQixDQURHSyxTQUFTLEVBQUVDLGNBQWMsR0FDOUNOLEdBQWtCLENBRGNNLGNBQWMsRUFBRUMsYUFBYSxHQUM3RFAsR0FBa0IsQ0FEOEJPLGFBQWE7SUFHL0QsSUFBTUMsT0FBTyxHQUFRUix1REFBZ0IsQ0FBQztRQUNwQ1MsT0FBTyxFQUFFLENBQUM7S0FDWCxDQUFDO0lBRUYscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDQSxLQUFHOztrQ0FDRiw4REFBQ0EsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLG1CQUFtQjs7NEJBQy9CVCxLQUFLLGFBQUxBLEtBQUssV0FBTSxHQUFYQSxLQUFBQSxDQUFXLEdBQVhBLEtBQUssQ0FBRVUsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzs0QkFBRSxHQUFHOzBDQUM3Qiw4REFBQ2hCLCtEQUFTO2dDQUFDYyxTQUFTLEVBQUMsbUNBQW1DOzs7OztvQ0FBRzs0QkFBQyxHQUFHOzs7Ozs7NEJBQzNEO29CQUNMSixhQUFhLGtCQUNaLDhEQUFDRyxLQUFHO2tDQUNGLDRFQUFDSSxRQUFNOzRCQUNMSCxTQUFTLEVBQUMsb0JBQW9COzRCQUM5QkksT0FBTyxFQUFFO3VDQUFNUixhQUFhLENBQUNDLE9BQU8sQ0FBQzs2QkFBQTtzQ0FFckMsNEVBQUNWLDJEQUFLO2dDQUFDYSxTQUFTLEVBQUMsc0JBQXNCOzs7OztvQ0FBRzs7Ozs7Z0NBQ25DOzs7Ozs0QkFDTDs7Ozs7O29CQUVKOzBCQUNOLDhEQUFDRCxLQUFHOzBCQUFFTixLQUFLLElBQUlBLEtBQUssQ0FBQ1ksT0FBTzs7Ozs7b0JBQU87Ozs7OztZQUMvQixDQUNOO0NBQ0g7R0E5QmVmLGVBQWU7O1FBQ1hGLDZDQUFVO1FBRTFCQyxtREFBZ0I7UUFFR0EsbURBQWdCOzs7QUFMdkJDLEtBQUFBLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXR3b3JrU3dpdGNoZXIudHN4P2E1MDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQmFuSWNvbixcbiAgQ2hlY2tJY29uLFxuICBSZWZyZXNoSWNvbixcbiAgWEljb24sXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcbmltcG9ydCB7IHVzZU5ldHdvcmssIHVzZVN3aXRjaE5ldHdvcmsgfSBmcm9tIFwid2FnbWlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIE5ldHdvcmtTd2l0Y2hlcigpIHtcbiAgY29uc3QgeyBjaGFpbiB9ID0gdXNlTmV0d29yaygpO1xuICBjb25zdCB7IGNoYWlucywgZXJyb3IsIGlzTG9hZGluZywgcGVuZGluZ0NoYWluSWQsIHN3aXRjaE5ldHdvcmsgfSA9XG4gICAgdXNlU3dpdGNoTmV0d29yaygpO1xuXG4gIGNvbnN0IG5ldHdvcms6IGFueSA9IHVzZVN3aXRjaE5ldHdvcmsoe1xuICAgIGNoYWluSWQ6IDAsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICB7Y2hhaW4/Lm5hbWUuc2xpY2UoMCwgMyl9e1wiIFwifVxuICAgICAgICAgIDxDaGVja0ljb24gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDAgLXJvdGF0ZS0xMiB3LTYgaC02XCIgLz57XCIgXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c3dpdGNoTmV0d29yayAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3dpdGNoTmV0d29yayhuZXR3b3JrKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFhJY29uIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1yZWQtNTAwXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PntlcnJvciAmJiBlcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNoZWNrSWNvbiIsIlhJY29uIiwidXNlTmV0d29yayIsInVzZVN3aXRjaE5ldHdvcmsiLCJOZXR3b3JrU3dpdGNoZXIiLCJjaGFpbiIsImNoYWlucyIsImVycm9yIiwiaXNMb2FkaW5nIiwicGVuZGluZ0NoYWluSWQiLCJzd2l0Y2hOZXR3b3JrIiwibmV0d29yayIsImNoYWluSWQiLCJkaXYiLCJjbGFzc05hbWUiLCJuYW1lIiwic2xpY2UiLCJidXR0b24iLCJvbkNsaWNrIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NetworkSwitcher.tsx\n"));

/***/ })

});