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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_matterTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/matterTools */ \"./utils/matterTools.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst { log  } = console;\n\nfunction Home() {\n    _s();\n    const [joinRoom, setJoinRoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [roomName, setRoomName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleRoomName = (e)=>{\n        setRoomName(e.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        function handleResize() {\n            render;\n        }\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    const runMatterJs = ()=>{\n        setJoinRoom(true);\n        const MatterNode = new _utils_matterTools__WEBPACK_IMPORTED_MODULE_3__.matterJsModules(roomName);\n        MatterNode.createModules();\n        MatterNode.createBodies();\n        MatterNode.events();\n        MatterNode.run();\n        MatterNode.socketStuff();\n        function handleResize() {\n            MatterNode.modules.re;\n        }\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    !joinRoom && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"text-lg\",\n                                children: \"Room ID\"\n                            }, void 0, false, {\n                                fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"pl-1\",\n                                        onChange: handleRoomName,\n                                        value: roomName,\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-green-700 px-1\",\n                                        onClick: runMatterJs,\n                                        children: \" Join\"\n                                    }, void 0, false, {\n                                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"matter-Container\",\n                        className: \"bg-black w-full h-[100vh]\",\n                        children: \"  \"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"y9Jl0dPu4wyCOoGXyG7tzdgCr+M=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVdNQTtBQVhzQjtBQUl1QjtBQUluRCxNQUFNLEVBQUVLLElBQUcsRUFBRSxHQUFHQztBQUNzQztBQUl2QyxTQUFTRSxPQUFPOztJQUM3QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQVUsS0FBSztJQUN2RCxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQVM7SUFDakQsTUFBTVMsaUJBQWlCLENBQUNDLElBQVc7UUFDakNGLFlBQVlFLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUM1QjtJQUNBYixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsU0FBU2MsZUFBZTtZQUN2QkM7UUFDRDtRQUNBQyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUNsQyxPQUFPLElBQU1FLE9BQU9FLG1CQUFtQixDQUFDLFVBQVVKO0lBQ3BELEdBQUcsRUFBRTtJQUNMLE1BQU1LLGNBQWMsSUFBTTtRQUN4QlosWUFBWSxJQUFJO1FBQ2hCLE1BQU1hLGFBQWEsSUFBSWhCLCtEQUFlQSxDQUFDSTtRQUN2Q1ksV0FBV0MsYUFBYTtRQUN4QkQsV0FBV0UsWUFBWTtRQUN2QkYsV0FBV0csTUFBTTtRQUNqQkgsV0FBV0ksR0FBRztRQUNkSixXQUFXSyxXQUFXO1FBQ3RCLFNBQVNYLGVBQWU7WUFDdEJNLFdBQVdNLE9BQU8sQ0FBQ0MsRUFBRTtRQUN0QjtRQUNBWCxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUNsQyxPQUFPLElBQU1FLE9BQU9FLG1CQUFtQixDQUFDLFVBQVVKO0lBQ3JEO0lBQ0EscUJBQ0U7OzBCQUNFLDhEQUFDaEIsa0RBQUlBOztrQ0FDSCw4REFBQzhCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDOztvQkFFUCxDQUFDN0IsMEJBQ08sOERBQUM4Qjt3QkFBSUMsV0FBVTs7MENBRVgsOERBQUNDO2dDQUFNRCxXQUFVOzBDQUFVOzs7Ozs7MENBQzNCLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNFO3dDQUFNRixXQUFVO3dDQUFPRyxVQUFVOUI7d0NBQWdCRyxPQUFPTDt3Q0FBVWlDLE1BQUs7Ozs7OztrREFDeEUsOERBQUNDO3dDQUFPTCxXQUFVO3dDQUFvQk0sU0FBU3hCO2tEQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTWxFLDhEQUFDaUI7d0JBQUlRLElBQUc7d0JBQW1CUCxXQUFVO2tDQUE0Qjs7Ozs7Ozs7Ozs7Ozs7QUFLekUsQ0FBQztHQXREdUJoQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpbywgeyBTb2NrZXQgfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiXG5pbXBvcnQgZW5naW5lIGZyb20gXCIuLi9tb2R1bGVzL0VuZ2luZVwiO1xuaW1wb3J0IE1hdHRlciwgeyBFdmVudHMsIEVuZ2luZSwgV29ybGQsIEJvZGllcyB9IGZyb20gXCJtYXR0ZXItanNcIjtcbmNvbnN0IHsgbG9nIH0gPSBjb25zb2xlO1xuaW1wb3J0IHsgbWF0dGVySnNNb2R1bGVzIH0gZnJvbSBcIi4uL3V0aWxzL21hdHRlclRvb2xzXCJcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbam9pblJvb20sIHNldEpvaW5Sb29tXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICBjb25zdCBbcm9vbU5hbWUsIHNldFJvb21OYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcbiAgY29uc3QgaGFuZGxlUm9vbU5hbWUgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0Um9vbU5hbWUoZS50YXJnZXQudmFsdWUpXG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XG4gICAgIHJlbmRlclxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gIH0sIFtdKTtcbiAgY29uc3QgcnVuTWF0dGVySnMgPSAoKSA9PiB7XG4gICAgc2V0Sm9pblJvb20odHJ1ZSlcbiAgICBjb25zdCBNYXR0ZXJOb2RlID0gbmV3IG1hdHRlckpzTW9kdWxlcyhyb29tTmFtZSlcbiAgICBNYXR0ZXJOb2RlLmNyZWF0ZU1vZHVsZXMoKVxuICAgIE1hdHRlck5vZGUuY3JlYXRlQm9kaWVzKClcbiAgICBNYXR0ZXJOb2RlLmV2ZW50cygpXG4gICAgTWF0dGVyTm9kZS5ydW4oKVxuICAgIE1hdHRlck5vZGUuc29ja2V0U3R1ZmYoKVxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgIE1hdHRlck5vZGUubW9kdWxlcy5yZVxuICAgICB9XG4gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAge1xuIWpvaW5Sb29tICYmXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLXNjcmVlbiB3LXNjcmVlbiBmbGV4LWNvbCBiZy1ibGFjayBtZDppdGVtcy1jZW50ZXJcbiAgICAgICAgbWQ6anVzdGlmeS1jZW50ZXIgbWQ6YmctdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+Um9vbSBJRDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInBsLTFcIiBvbkNoYW5nZT17aGFuZGxlUm9vbU5hbWV9IHZhbHVlPXtyb29tTmFtZX0gdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyZWVuLTcwMCBweC0xXCIgb25DbGljaz17cnVuTWF0dGVySnN9PiBKb2luPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgXG4gICAgICAgIDxkaXYgaWQ9XCJtYXR0ZXItQ29udGFpbmVyXCIgY2xhc3NOYW1lPVwiYmctYmxhY2sgdy1mdWxsIGgtWzEwMHZoXVwiPiAgPC9kaXY+XG5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImludGVyIiwiSGVhZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJsb2ciLCJjb25zb2xlIiwibWF0dGVySnNNb2R1bGVzIiwiSG9tZSIsImpvaW5Sb29tIiwic2V0Sm9pblJvb20iLCJyb29tTmFtZSIsInNldFJvb21OYW1lIiwiaGFuZGxlUm9vbU5hbWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVSZXNpemUiLCJyZW5kZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJ1bk1hdHRlckpzIiwiTWF0dGVyTm9kZSIsImNyZWF0ZU1vZHVsZXMiLCJjcmVhdGVCb2RpZXMiLCJldmVudHMiLCJydW4iLCJzb2NrZXRTdHVmZiIsIm1vZHVsZXMiLCJyZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});