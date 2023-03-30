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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _utils_matterTools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/matterTools */ \"./utils/matterTools.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst { log  } = console;\n\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const MatterNode = new _utils_matterTools__WEBPACK_IMPORTED_MODULE_4__.matterJsModules();\n        MatterNode.create();\n        MatterNode.createBodies();\n        MatterNode.events();\n        MatterNode.run();\n        // create two boxes and a ground\n        const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"http://localhost:3008\");\n        socket.on(\"ballPosition\", (data)=>{\n            // Update the ball's position\n            // console.log(\"game\", data)\n            MatterNode.bodies.ball.position.x = data.x;\n            MatterNode.bodies.ball.position.y = data.y;\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/ping_pong_MatterJs/front-end/pages/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/ping_pong_MatterJs/front-end/pages/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/ping_pong_MatterJs/front-end/pages/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/ping_pong_MatterJs/front-end/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/goinfre/amya/ping_pong_MatterJs/front-end/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {}, void 0, false, {\n                fileName: \"/goinfre/amya/ping_pong_MatterJs/front-end/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFXTUE7QUFYc0I7QUFJYTtBQUNFO0FBRzNDLE1BQU0sRUFBRUssSUFBRyxFQUFFLEdBQUdDO0FBQ29DO0FBSXJDLFNBQVNFLE9BQU87O0lBQzdCTCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTU0sYUFBYSxJQUFJRiwrREFBZUE7UUFDdENFLFdBQVdDLE1BQU07UUFDakJELFdBQVdFLFlBQVk7UUFDdkJGLFdBQVdHLE1BQU07UUFDakJILFdBQVdJLEdBQUc7UUFFaEIsZ0NBQWdDO1FBQ2hDLE1BQU1DLFNBQVNWLDREQUFFQSxDQUFDO1FBQ3BCVSxPQUFPQyxFQUFFLENBQUMsZ0JBQWdCLENBQUNDLE9BQVM7WUFDbEMsNkJBQTZCO1lBQzdCLDRCQUE0QjtZQUM1QlAsV0FBV1EsTUFBTSxDQUFDQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHSixLQUFLSSxDQUFDO1lBQzFDWCxXQUFXUSxNQUFNLENBQUNDLElBQUksQ0FBQ0MsUUFBUSxDQUFDRSxDQUFDLEdBQUdMLEtBQUtLLENBQUM7UUFDNUM7SUFJRSxHQUFHLEVBQUU7SUFDTCxxQkFDRTs7MEJBQ0UsOERBQUNwQixrREFBSUE7O2tDQUNILDhEQUFDcUI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV0Qiw4REFBQ0M7Ozs7Ozs7QUFLVCxDQUFDO0dBakN1QnJCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaW8sIHtTb2NrZXR9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCJcbmltcG9ydCBlbmdpbmUgZnJvbSBcIi4uL21vZHVsZXMvRW5naW5lXCI7XG5pbXBvcnQgTWF0dGVyLCB7ICBFdmVudHMsICBFbmdpbmUsIFdvcmxkLCBCb2RpZXMgfSBmcm9tIFwibWF0dGVyLWpzXCI7XG5jb25zdCB7IGxvZyB9ID0gY29uc29sZTtcbmltcG9ydCB7bWF0dGVySnNNb2R1bGVzfSBmcm9tIFwiLi4vdXRpbHMvbWF0dGVyVG9vbHNcIlxuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgTWF0dGVyTm9kZSA9IG5ldyBtYXR0ZXJKc01vZHVsZXMoKVxuICAgIE1hdHRlck5vZGUuY3JlYXRlKClcbiAgICBNYXR0ZXJOb2RlLmNyZWF0ZUJvZGllcygpXG4gICAgTWF0dGVyTm9kZS5ldmVudHMoKVxuICAgIE1hdHRlck5vZGUucnVuKClcblxuICAvLyBjcmVhdGUgdHdvIGJveGVzIGFuZCBhIGdyb3VuZFxuICBjb25zdCBzb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDozMDA4Jyk7XG5zb2NrZXQub24oJ2JhbGxQb3NpdGlvbicsIChkYXRhKSA9PiB7XG4gIC8vIFVwZGF0ZSB0aGUgYmFsbCdzIHBvc2l0aW9uXG4gIC8vIGNvbnNvbGUubG9nKFwiZ2FtZVwiLCBkYXRhKVxuICBNYXR0ZXJOb2RlLmJvZGllcy5iYWxsLnBvc2l0aW9uLnggPSBkYXRhLng7XG4gIE1hdHRlck5vZGUuYm9kaWVzLmJhbGwucG9zaXRpb24ueSA9IGRhdGEueTtcbn0pO1xuXG5cblxuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICAgIDxtYWluPlxuXG4gICAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImludGVyIiwiSGVhZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwiaW8iLCJsb2ciLCJjb25zb2xlIiwibWF0dGVySnNNb2R1bGVzIiwiSG9tZSIsIk1hdHRlck5vZGUiLCJjcmVhdGUiLCJjcmVhdGVCb2RpZXMiLCJldmVudHMiLCJydW4iLCJzb2NrZXQiLCJvbiIsImRhdGEiLCJib2RpZXMiLCJiYWxsIiwicG9zaXRpb24iLCJ4IiwieSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});