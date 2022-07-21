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

/***/ "./components/Tabs.tsx":
/*!*****************************!*\
  !*** ./components/Tabs.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar navTabs = [\n    {\n        name: \"home\",\n        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.HomeIcon,\n        path: \"/\"\n    },\n    // {\n    //   name: \"reddit\",\n    //   Icon: ChatAlt2Icon,\n    // },\n    {\n        name: \"registry\",\n        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.SearchIcon,\n        path: \"https://poh-tools.vercel.app/\"\n    }, \n];\nvar Tabs = function() {\n    var _this1 = _this;\n    var capitalizeFirstLetter = function capitalizeFirstLetter(string) {\n        return string.charAt(0).toUpperCase() + string.slice(1);\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), activeTab = ref[0], setActiveTab = ref[1];\n    var handleClick = function(tabName) {\n        if (tabName == \"home\") {\n            router.push(\"/\");\n        } else {\n            if (tabName == \"registry\") {\n                router.push(\"https://poh-registry.vercel.app/registry\");\n            } else {\n                router.push(\"/\".concat(tabName));\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (router.pathname == \"/\") setActiveTab(\"home\");\n        else {\n            setActiveTab(router.pathname.substring(1));\n        }\n    }, [\n        router.pathname\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hidden items-center text-gray-500 sm:inline-flex md:space-x-1\",\n        children: navTabs.map(function(tab, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                onClick: function() {\n                    return handleClick(tab.name || tab.path);\n                },\n                className: \"cursor-pointer rounded-md px-3 py-2 text-sm font-medium outline-none \".concat(tab.name == activeTab ? \"bg-gray-100 text-gray-500  \" : \"bg-white text-gray-500 hover:bg-gray-50\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center space-x-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(tab.Icon, {\n                            className: \"h-6 w-6\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/poh-reddit/components/Tabs.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"hidden md:flex\",\n                            children: capitalizeFirstLetter(tab.name)\n                        }, void 0, false, {\n                            fileName: \"/Users/hawk/HumanityTools/poh-reddit/components/Tabs.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hawk/HumanityTools/poh-reddit/components/Tabs.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, _this1)\n            }, index, false, {\n                fileName: \"/Users/hawk/HumanityTools/poh-reddit/components/Tabs.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/hawk/HumanityTools/poh-reddit/components/Tabs.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, _this);\n};\n_s(Tabs, \"v0gFUTR0l7Rlhmq5iA8idYT4g4g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Tabs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tabs);\nvar _c;\n$RefreshReg$(_c, \"Tabs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWJzLnRzeD85ZGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IFNWR1Byb3BzLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBTZWFyY2hJY29uLFxuICBGaWx0ZXJJY29uLFxuICBDaGF0QWx0Mkljb24sXG4gIEhvbWVJY29uLFxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuaW1wb3J0IHsgVGFiIH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbnR5cGUgVGFiID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIEljb246IChwcm9wczogU1ZHUHJvcHM8U1ZHU1ZHRWxlbWVudD4pID0+IEpTWC5FbGVtZW50O1xuICBwYXRoOiBzdHJpbmc7XG59O1xuXG5jb25zdCBuYXZUYWJzOiBUYWJbXSA9IFtcbiAge1xuICAgIG5hbWU6IFwiaG9tZVwiLFxuICAgIEljb246IEhvbWVJY29uLFxuICAgIHBhdGg6IFwiL1wiLFxuICB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogXCJyZWRkaXRcIixcbiAgLy8gICBJY29uOiBDaGF0QWx0Mkljb24sXG4gIC8vIH0sXG4gIHtcbiAgICBuYW1lOiBcInJlZ2lzdHJ5XCIsXG4gICAgSWNvbjogU2VhcmNoSWNvbixcbiAgICBwYXRoOiBcImh0dHBzOi8vcG9oLXRvb2xzLnZlcmNlbC5hcHAvXCIsXG4gIH0sXG4gIC8vICAge1xuICAvLyAgICAgbmFtZTogJ2ZpbHRlcicsXG4gIC8vICAgICBJY29uOiBGaWx0ZXJJY29uLFxuICAvLyAgIH0sXG5dO1xuXG5jb25zdCBUYWJzID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAodGFiTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHRhYk5hbWUgPT0gXCJob21lXCIpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRhYk5hbWUgPT0gXCJyZWdpc3RyeVwiKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKGBodHRwczovL3BvaC1yZWdpc3RyeS52ZXJjZWwuYXBwL3JlZ2lzdHJ5YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3V0ZXIucHVzaChgLyR7dGFiTmFtZX1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocm91dGVyLnBhdGhuYW1lID09IFwiL1wiKSBzZXRBY3RpdmVUYWIoXCJob21lXCIpO1xuICAgIGVsc2Uge1xuICAgICAgc2V0QWN0aXZlVGFiKHJvdXRlci5wYXRobmFtZS5zdWJzdHJpbmcoMSkpO1xuICAgIH1cbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pO1xuXG4gIGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmc6IHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTUwMCBzbTppbmxpbmUtZmxleCBtZDpzcGFjZS14LTFcIj5cbiAgICAgIHtuYXZUYWJzLm1hcCgodGFiOiBUYWIsIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgPGFcbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKHRhYi5uYW1lIHx8IHRhYi5wYXRoKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciByb3VuZGVkLW1kIHB4LTMgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIG91dGxpbmUtbm9uZSAke1xuICAgICAgICAgICAgdGFiLm5hbWUgPT0gYWN0aXZlVGFiXG4gICAgICAgICAgICAgID8gXCJiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNTAwICBcIlxuICAgICAgICAgICAgICA6IFwiYmctd2hpdGUgdGV4dC1ncmF5LTUwMCBob3ZlcjpiZy1ncmF5LTUwXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XG4gICAgICAgICAgICA8dGFiLkljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleFwiPntjYXBpdGFsaXplRmlyc3RMZXR0ZXIodGFiLm5hbWUpfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTZWFyY2hJY29uIiwiSG9tZUljb24iLCJuYXZUYWJzIiwibmFtZSIsIkljb24iLCJwYXRoIiwiVGFicyIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJyb3V0ZXIiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJoYW5kbGVDbGljayIsInRhYk5hbWUiLCJwdXNoIiwicGF0aG5hbWUiLCJzdWJzdHJpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJ0YWIiLCJpbmRleCIsImEiLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Tabs.tsx\n"));

/***/ })

});