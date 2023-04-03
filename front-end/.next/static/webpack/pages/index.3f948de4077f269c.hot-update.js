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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_matterTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/matterTools */ \"./utils/matterTools.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst { log  } = console;\n\nfunction Home() {\n    _s();\n    const [joinRoom, setJoinRoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"hidden\");\n    const [roomName, setRoomName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleRoomName = (e)=>{\n        setRoomName(e.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (joinRoom == \"go\") {\n            const MatterNode = new _utils_matterTools__WEBPACK_IMPORTED_MODULE_3__.matterJsModules(roomName);\n            MatterNode.createModules();\n            MatterNode.createBodies();\n            MatterNode.events();\n            MatterNode.run();\n            MatterNode.socketStuff();\n            const handleResize = ()=>{\n                MatterNode.objects.render.canvas.width = MatterNode.matterContainer.clientWidth;\n                MatterNode.objects.render.canvas.height = MatterNode.matterContainer.clientHeight;\n            };\n            window.addEventListener(\"resize\", handleResize);\n            return ()=>window.removeEventListener(\"resize\", handleResize);\n        }\n    }, []);\n    const runMatterJs = ()=>{\n        setJoinRoom(\"go\");\n        const MatterNode = new _utils_matterTools__WEBPACK_IMPORTED_MODULE_3__.matterJsModules(roomName);\n        MatterNode.createModules();\n        MatterNode.createBodies();\n        MatterNode.events();\n        MatterNode.run();\n        MatterNode.socketStuff();\n        function handleResize() {\n            MatterNode.objects.render.canvas.width = MatterNode.matterContainer.clientWidth;\n            MatterNode.objects.render.canvas.height = MatterNode.matterContainer.clientHeight;\n        }\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    joinRoom == \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"text-lg\",\n                                children: \"Room ID\"\n                            }, void 0, false, {\n                                fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"pl-1\",\n                                        onChange: handleRoomName,\n                                        value: roomName,\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-green-700 px-1\",\n                                        onClick: runMatterJs,\n                                        children: \" Join\"\n                                    }, void 0, false, {\n                                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"matter-Container\",\n                        className: \"w-full h-[75vh] \".concat(!joinRoom && \"hidden\"),\n                        children: \"  \"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"begzWhTYt7ms9LBADmDA5d3j8BU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVdNQTtBQVhzQjtBQUl1QjtBQUluRCxNQUFNLEVBQUVLLElBQUcsRUFBRSxHQUFHQztBQUNzQztBQUl2QyxTQUFTRSxPQUFPOztJQUM3QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQVM7SUFDakQsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFTO0lBQ2pELE1BQU1TLGlCQUFpQixDQUFDQyxJQUFXO1FBQ2pDRixZQUFZRSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDNUI7SUFDQWIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlNLFlBQVksTUFBSztZQUNyQixNQUFNUSxhQUFhLElBQUlWLCtEQUFlQSxDQUFDSTtZQUN2Q00sV0FBV0MsYUFBYTtZQUN4QkQsV0FBV0UsWUFBWTtZQUN2QkYsV0FBV0csTUFBTTtZQUNqQkgsV0FBV0ksR0FBRztZQUNkSixXQUFXSyxXQUFXO1lBQ3RCLE1BQU1DLGVBQWMsSUFBSztnQkFDdkJOLFdBQVdPLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNLENBQUNDLEtBQUssR0FBR1YsV0FBV1csZUFBZSxDQUFDQyxXQUFXO2dCQUMvRVosV0FBV08sT0FBTyxDQUFDQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0ksTUFBTSxHQUFHYixXQUFXVyxlQUFlLENBQUNHLFlBQVk7WUFDbEY7WUFDQUMsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVVY7WUFDbEMsT0FBTyxJQUFNUyxPQUFPRSxtQkFBbUIsQ0FBQyxVQUFVWDtRQUFjLENBQUM7SUFDcEUsR0FBRyxFQUFFO0lBQ0wsTUFBTVksY0FBYyxJQUFNO1FBQ3hCekIsWUFBWTtRQUNaLE1BQU1PLGFBQWEsSUFBSVYsK0RBQWVBLENBQUNJO1FBQ3ZDTSxXQUFXQyxhQUFhO1FBQ3hCRCxXQUFXRSxZQUFZO1FBQ3ZCRixXQUFXRyxNQUFNO1FBQ2pCSCxXQUFXSSxHQUFHO1FBQ2RKLFdBQVdLLFdBQVc7UUFDdEIsU0FBU0MsZUFBZTtZQUN0Qk4sV0FBV08sT0FBTyxDQUFDQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHVixXQUFXVyxlQUFlLENBQUNDLFdBQVc7WUFDL0VaLFdBQVdPLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNLENBQUNJLE1BQU0sR0FBR2IsV0FBV1csZUFBZSxDQUFDRyxZQUFZO1FBQ2xGO1FBQ0FDLE9BQU9DLGdCQUFnQixDQUFDLFVBQVVWO1FBQ2xDLE9BQU8sSUFBTVMsT0FBT0UsbUJBQW1CLENBQUMsVUFBVVg7SUFDckQ7SUFDQSxxQkFDRTs7MEJBQ0UsOERBQUN0QixrREFBSUE7O2tDQUNILDhEQUFDbUM7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7O29CQUVQbEMsWUFBWSxvQkFDSiw4REFBQ21DO3dCQUFJQyxXQUFVOzswQ0FFWCw4REFBQ0M7Z0NBQU1ELFdBQVU7MENBQVU7Ozs7OzswQ0FDM0IsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0U7d0NBQU1GLFdBQVU7d0NBQU9HLFVBQVVuQzt3Q0FBZ0JHLE9BQU9MO3dDQUFVc0MsTUFBSzs7Ozs7O2tEQUN4RSw4REFBQ0M7d0NBQU9MLFdBQVU7d0NBQW9CTSxTQUFTaEI7a0RBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLcEUsOERBQUNTO3dCQUFJUSxJQUFHO3dCQUFtQlAsV0FBVyxtQkFBeUMsT0FBdEIsQ0FBQ3BDLFlBQVk7a0NBQVk7Ozs7Ozs7Ozs7Ozs7O0FBT3hGLENBQUM7R0FoRXVCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpbywgeyBTb2NrZXQgfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiXG5pbXBvcnQgZW5naW5lIGZyb20gXCIuLi9tb2R1bGVzL0VuZ2luZVwiO1xuaW1wb3J0IE1hdHRlciwgeyBFdmVudHMsIEVuZ2luZSwgV29ybGQsIEJvZGllcyB9IGZyb20gXCJtYXR0ZXItanNcIjtcbmNvbnN0IHsgbG9nIH0gPSBjb25zb2xlO1xuaW1wb3J0IHsgbWF0dGVySnNNb2R1bGVzIH0gZnJvbSBcIi4uL3V0aWxzL21hdHRlclRvb2xzXCJcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbam9pblJvb20sIHNldEpvaW5Sb29tXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJoaWRkZW5cIilcbiAgY29uc3QgW3Jvb21OYW1lLCBzZXRSb29tTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXG4gIGNvbnN0IGhhbmRsZVJvb21OYW1lID0gKGU6IGFueSkgPT4ge1xuICAgIHNldFJvb21OYW1lKGUudGFyZ2V0LnZhbHVlKVxuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGpvaW5Sb29tID09IFwiZ29cIil7XG4gICAgY29uc3QgTWF0dGVyTm9kZSA9IG5ldyBtYXR0ZXJKc01vZHVsZXMocm9vbU5hbWUpXG4gICAgTWF0dGVyTm9kZS5jcmVhdGVNb2R1bGVzKClcbiAgICBNYXR0ZXJOb2RlLmNyZWF0ZUJvZGllcygpXG4gICAgTWF0dGVyTm9kZS5ldmVudHMoKVxuICAgIE1hdHRlck5vZGUucnVuKClcbiAgICBNYXR0ZXJOb2RlLnNvY2tldFN0dWZmKClcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSgpPT4ge1xuICAgICAgTWF0dGVyTm9kZS5vYmplY3RzLnJlbmRlci5jYW52YXMud2lkdGggPSBNYXR0ZXJOb2RlLm1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aFxuICAgICAgTWF0dGVyTm9kZS5vYmplY3RzLnJlbmRlci5jYW52YXMuaGVpZ2h0ID0gTWF0dGVyTm9kZS5tYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0XG4gICAgIH1cbiAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTt9XG4gIH0sIFtdKTtcbiAgY29uc3QgcnVuTWF0dGVySnMgPSAoKSA9PiB7XG4gICAgc2V0Sm9pblJvb20oXCJnb1wiKVxuICAgIGNvbnN0IE1hdHRlck5vZGUgPSBuZXcgbWF0dGVySnNNb2R1bGVzKHJvb21OYW1lKVxuICAgIE1hdHRlck5vZGUuY3JlYXRlTW9kdWxlcygpXG4gICAgTWF0dGVyTm9kZS5jcmVhdGVCb2RpZXMoKVxuICAgIE1hdHRlck5vZGUuZXZlbnRzKClcbiAgICBNYXR0ZXJOb2RlLnJ1bigpXG4gICAgTWF0dGVyTm9kZS5zb2NrZXRTdHVmZigpXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgTWF0dGVyTm9kZS5vYmplY3RzLnJlbmRlci5jYW52YXMud2lkdGggPSBNYXR0ZXJOb2RlLm1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aFxuICAgICAgTWF0dGVyTm9kZS5vYmplY3RzLnJlbmRlci5jYW52YXMuaGVpZ2h0ID0gTWF0dGVyTm9kZS5tYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0XG4gICAgIH1cbiAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICB7XG5qb2luUm9vbSA9PSBcIlwiICYmXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLXNjcmVlbiB3LXNjcmVlbiBmbGV4LWNvbCBiZy1ibGFjayBtZDppdGVtcy1jZW50ZXJcbiAgICAgICAgbWQ6anVzdGlmeS1jZW50ZXIgbWQ6YmctdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+Um9vbSBJRDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInBsLTFcIiBvbkNoYW5nZT17aGFuZGxlUm9vbU5hbWV9IHZhbHVlPXtyb29tTmFtZX0gdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyZWVuLTcwMCBweC0xXCIgb25DbGljaz17cnVuTWF0dGVySnN9PiBKb2luPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICA8ZGl2IGlkPVwibWF0dGVyLUNvbnRhaW5lclwiIGNsYXNzTmFtZT17YHctZnVsbCBoLVs3NXZoXSAkeyFqb2luUm9vbSAmJiBcImhpZGRlblwifWB9PiAgPC9kaXY+fVxuICAgICAgICBcbiAgICAgXG5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImludGVyIiwiSGVhZCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJsb2ciLCJjb25zb2xlIiwibWF0dGVySnNNb2R1bGVzIiwiSG9tZSIsImpvaW5Sb29tIiwic2V0Sm9pblJvb20iLCJyb29tTmFtZSIsInNldFJvb21OYW1lIiwiaGFuZGxlUm9vbU5hbWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJNYXR0ZXJOb2RlIiwiY3JlYXRlTW9kdWxlcyIsImNyZWF0ZUJvZGllcyIsImV2ZW50cyIsInJ1biIsInNvY2tldFN0dWZmIiwiaGFuZGxlUmVzaXplIiwib2JqZWN0cyIsInJlbmRlciIsImNhbnZhcyIsIndpZHRoIiwibWF0dGVyQ29udGFpbmVyIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJ1bk1hdHRlckpzIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0Iiwib25DaGFuZ2UiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});