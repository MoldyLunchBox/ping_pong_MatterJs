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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_matterTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/matterTools */ \"./utils/matterTools.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst { log  } = console;\n\nfunction Home() {\n    _s();\n    const [joinRoom, setJoinRoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"hidden\");\n    const [roomName, setRoomName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleRoomName = (e)=>{\n        setRoomName(e.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{}, []);\n    const runMatterJs = ()=>{\n        setJoinRoom(\"go\");\n        const MatterNode = new _utils_matterTools__WEBPACK_IMPORTED_MODULE_3__.matterJsModules(roomName);\n        MatterNode.createModules();\n        MatterNode.createBodies();\n        MatterNode.events();\n        MatterNode.run();\n        MatterNode.socketStuff();\n        function handleResize() {\n            MatterNode.objects.render.canvas.width = MatterNode.matterContainer.clientWidth;\n            MatterNode.objects.render.canvas.height = MatterNode.matterContainer.clientHeight;\n            var oldscreen = {\n                w: MatterNode.objects.render.canvas.width,\n                h: MatterNode.objects.render.canvas.height\n            };\n            var newScreen = {\n                w: MatterNode.matterContainer.clientWidth,\n                h: MatterNode.matterContainer.clientHeight\n            };\n            MatterNode.responsivity(oldscreen, newScreen);\n        }\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amya/Desktop/PingPong2/front-end/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amya/Desktop/PingPong2/front-end/pages/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amya/Desktop/PingPong2/front-end/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amya/Desktop/PingPong2/front-end/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amya/Desktop/PingPong2/front-end/pages/index.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    joinRoom == \"hidden\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"text-lg\",\n                                children: \"Room ID\"\n                            }, void 0, false, {\n                                fileName: \"/Users/amya/Desktop/PingPong2/front-end/pages/index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"pl-1\",\n                                        onChange: handleRoomName,\n                                        value: roomName,\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/amya/Desktop/PingPong2/front-end/pages/index.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-green-700 px-1\",\n                                        onClick: runMatterJs,\n                                        children: \" Join\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/amya/Desktop/PingPong2/front-end/pages/index.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/amya/Desktop/PingPong2/front-end/pages/index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/amya/Desktop/PingPong2/front-end/pages/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"matter-Container\",\n                        className: \"h-[75vh] w-full  \".concat(!joinRoom && \"hidden\"),\n                        children: \"  \"\n                    }, void 0, false, {\n                        fileName: \"/Users/amya/Desktop/PingPong2/front-end/pages/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amya/Desktop/PingPong2/front-end/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"begzWhTYt7ms9LBADmDA5d3j8BU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVdNQTtBQVhzQjtBQUl1QjtBQUluRCxNQUFNLEVBQUVLLElBQUcsRUFBRSxHQUFHQztBQUNzQztBQUl2QyxTQUFTRSxPQUFPOztJQUM3QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQVM7SUFDakQsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFTO0lBQ2pELE1BQU1TLGlCQUFpQixDQUFDQyxJQUFXO1FBQ2pDRixZQUFZRSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDNUI7SUFDQWIsZ0RBQVNBLENBQUMsSUFBTSxDQUNoQixHQUFHLEVBQUU7SUFDTCxNQUFNYyxjQUFjLElBQU07UUFDeEJQLFlBQVk7UUFDWixNQUFNUSxhQUFhLElBQUlYLCtEQUFlQSxDQUFDSTtRQUN2Q08sV0FBV0MsYUFBYTtRQUN4QkQsV0FBV0UsWUFBWTtRQUN2QkYsV0FBV0csTUFBTTtRQUNqQkgsV0FBV0ksR0FBRztRQUNkSixXQUFXSyxXQUFXO1FBQ3RCLFNBQVNDLGVBQWU7WUFDdEJOLFdBQVdPLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNLENBQUNDLEtBQUssR0FBR1YsV0FBV1csZUFBZSxDQUFDQyxXQUFXO1lBQy9FWixXQUFXTyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDSSxNQUFNLEdBQUdiLFdBQVdXLGVBQWUsQ0FBQ0csWUFBWTtZQUNqRixJQUFJQyxZQUFZO2dCQUFFQyxHQUFJaEIsV0FBV08sT0FBTyxDQUFDQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztnQkFBRU8sR0FBSWpCLFdBQVdPLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNLENBQUNJLE1BQU07WUFBQTtZQUN6RyxJQUFJSyxZQUFZO2dCQUFFRixHQUFHaEIsV0FBV1csZUFBZSxDQUFDQyxXQUFXO2dCQUFFSyxHQUFJakIsV0FBV1csZUFBZSxDQUFDRyxZQUFZO1lBQUM7WUFDekdkLFdBQVdtQixZQUFZLENBQUNKLFdBQVdHO1FBQ3BDO1FBQ0FFLE9BQU9DLGdCQUFnQixDQUFDLFVBQVVmO1FBQ2xDLE9BQU8sSUFBTWMsT0FBT0UsbUJBQW1CLENBQUMsVUFBVWhCO0lBQ3JEO0lBQ0EscUJBQ0U7OzBCQUNFLDhEQUFDdkIsa0RBQUlBOztrQ0FDSCw4REFBQ3dDO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNDOztvQkFFUHZDLFlBQVksMEJBQ0osOERBQUN3Qzt3QkFBSUMsV0FBVTs7MENBRVgsOERBQUNDO2dDQUFNRCxXQUFVOzBDQUFVOzs7Ozs7MENBQzNCLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNFO3dDQUFNRixXQUFVO3dDQUFPRyxVQUFVeEM7d0NBQWdCRyxPQUFPTDt3Q0FBVTJDLE1BQUs7Ozs7OztrREFDeEUsOERBQUNDO3dDQUFPTCxXQUFVO3dDQUFvQk0sU0FBU3ZDO2tEQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS3BFLDhEQUFDZ0M7d0JBQUlRLElBQUc7d0JBQW1CUCxXQUFXLG9CQUEwQyxPQUF0QixDQUFDekMsWUFBWTtrQ0FBWTs7Ozs7Ozs7Ozs7Ozs7QUFPekYsQ0FBQztHQXREdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGlvLCB7IFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCJcbmltcG9ydCBlbmdpbmUgZnJvbSBcIi4uL21vZHVsZXMvRW5naW5lXCI7XG5pbXBvcnQgTWF0dGVyLCB7IEV2ZW50cywgRW5naW5lLCBXb3JsZCwgQm9kaWVzIH0gZnJvbSBcIm1hdHRlci1qc1wiO1xuY29uc3QgeyBsb2cgfSA9IGNvbnNvbGU7XG5pbXBvcnQgeyBtYXR0ZXJKc01vZHVsZXMgfSBmcm9tIFwiLi4vdXRpbHMvbWF0dGVyVG9vbHNcIlxuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtqb2luUm9vbSwgc2V0Sm9pblJvb21dID0gdXNlU3RhdGU8c3RyaW5nPihcImhpZGRlblwiKVxuICBjb25zdCBbcm9vbU5hbWUsIHNldFJvb21OYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcbiAgY29uc3QgaGFuZGxlUm9vbU5hbWUgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0Um9vbU5hbWUoZS50YXJnZXQudmFsdWUpXG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgfSwgW10pO1xuICBjb25zdCBydW5NYXR0ZXJKcyA9ICgpID0+IHtcbiAgICBzZXRKb2luUm9vbShcImdvXCIpXG4gICAgY29uc3QgTWF0dGVyTm9kZSA9IG5ldyBtYXR0ZXJKc01vZHVsZXMocm9vbU5hbWUpXG4gICAgTWF0dGVyTm9kZS5jcmVhdGVNb2R1bGVzKClcbiAgICBNYXR0ZXJOb2RlLmNyZWF0ZUJvZGllcygpXG4gICAgTWF0dGVyTm9kZS5ldmVudHMoKVxuICAgIE1hdHRlck5vZGUucnVuKClcbiAgICBNYXR0ZXJOb2RlLnNvY2tldFN0dWZmKClcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XG4gICAgICBNYXR0ZXJOb2RlLm9iamVjdHMucmVuZGVyLmNhbnZhcy53aWR0aCA9IE1hdHRlck5vZGUubWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoXG4gICAgICBNYXR0ZXJOb2RlLm9iamVjdHMucmVuZGVyLmNhbnZhcy5oZWlnaHQgPSBNYXR0ZXJOb2RlLm1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHRcbiAgICAgIHZhciBvbGRzY3JlZW4gPSB7IHcgOiBNYXR0ZXJOb2RlLm9iamVjdHMucmVuZGVyLmNhbnZhcy53aWR0aCwgaCA6IE1hdHRlck5vZGUub2JqZWN0cy5yZW5kZXIuY2FudmFzLmhlaWdodH1cbiAgICAgIHZhciBuZXdTY3JlZW4gPSB7IHc6IE1hdHRlck5vZGUubWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoLCBoIDogTWF0dGVyTm9kZS5tYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0IH1cbiAgICAgIE1hdHRlck5vZGUucmVzcG9uc2l2aXR5KG9sZHNjcmVlbiwgbmV3U2NyZWVuKVxuICAgICB9XG4gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAge1xuam9pblJvb20gPT0gXCJoaWRkZW5cIiAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaC1zY3JlZW4gdy1zY3JlZW4gZmxleC1jb2wgYmctYmxhY2sgbWQ6aXRlbXMtY2VudGVyXG4gICAgICAgIG1kOmp1c3RpZnktY2VudGVyIG1kOmJnLXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPlJvb20gSUQ8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJwbC0xXCIgb25DaGFuZ2U9e2hhbmRsZVJvb21OYW1lfSB2YWx1ZT17cm9vbU5hbWV9IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmVlbi03MDAgcHgtMVwiIG9uQ2xpY2s9e3J1bk1hdHRlckpzfT4gSm9pbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgPGRpdiBpZD1cIm1hdHRlci1Db250YWluZXJcIiBjbGFzc05hbWU9e2BoLVs3NXZoXSB3LWZ1bGwgICR7IWpvaW5Sb29tICYmIFwiaGlkZGVuXCJ9YH0+ICA8L2Rpdj59XG4gICAgICAgIFxuICAgICBcblxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImxvZyIsImNvbnNvbGUiLCJtYXR0ZXJKc01vZHVsZXMiLCJIb21lIiwiam9pblJvb20iLCJzZXRKb2luUm9vbSIsInJvb21OYW1lIiwic2V0Um9vbU5hbWUiLCJoYW5kbGVSb29tTmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJ1bk1hdHRlckpzIiwiTWF0dGVyTm9kZSIsImNyZWF0ZU1vZHVsZXMiLCJjcmVhdGVCb2RpZXMiLCJldmVudHMiLCJydW4iLCJzb2NrZXRTdHVmZiIsImhhbmRsZVJlc2l6ZSIsIm9iamVjdHMiLCJyZW5kZXIiLCJjYW52YXMiLCJ3aWR0aCIsIm1hdHRlckNvbnRhaW5lciIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwib2xkc2NyZWVuIiwidyIsImgiLCJuZXdTY3JlZW4iLCJyZXNwb25zaXZpdHkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});