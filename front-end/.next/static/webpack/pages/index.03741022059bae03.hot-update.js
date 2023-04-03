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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_matterTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/matterTools */ \"./utils/matterTools.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst { log  } = console;\n\nfunction Home() {\n    _s();\n    const [joinRoom, setJoinRoom] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [roomName, setRoomName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleRoomName = (e)=>{\n        setRoomName(e.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (joinRoom) {\n            const MatterNode = new _utils_matterTools__WEBPACK_IMPORTED_MODULE_3__.matterJsModules(roomName);\n            MatterNode.createModules();\n            MatterNode.createBodies();\n            MatterNode.events();\n            MatterNode.run();\n            MatterNode.socketStuff();\n            const handleResize = ()=>{\n                MatterNode.objects.render.canvas.width = MatterNode.matterContainer.clientWidth;\n                MatterNode.objects.render.canvas.height = MatterNode.matterContainer.clientHeight;\n            };\n            window.addEventListener(\"resize\", handleResize);\n            return ()=>window.removeEventListener(\"resize\", handleResize);\n        }\n    }, []);\n    const runMatterJs = ()=>{\n        setJoinRoom(true);\n        const MatterNode = new _utils_matterTools__WEBPACK_IMPORTED_MODULE_3__.matterJsModules(roomName);\n        MatterNode.createModules();\n        MatterNode.createBodies();\n        MatterNode.events();\n        MatterNode.run();\n        MatterNode.socketStuff();\n        function handleResize() {\n            MatterNode.objects.render.canvas.width = MatterNode.matterContainer.clientWidth;\n            MatterNode.objects.render.canvas.height = MatterNode.matterContainer.clientHeight;\n        }\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    !joinRoom && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"text-lg\",\n                                children: \"Room ID\"\n                            }, void 0, false, {\n                                fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"pl-1\",\n                                        onChange: handleRoomName,\n                                        value: roomName,\n                                        type: \"text\"\n                                    }, void 0, false, {\n                                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-green-700 px-1\",\n                                        onClick: runMatterJs,\n                                        children: \" Join\"\n                                    }, void 0, false, {\n                                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"matter-Container\",\n                        className: \" w-full h-[75vh]\",\n                        children: \"  \"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/goinfre/amya/Pingpong/front-end/pages/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"y9Jl0dPu4wyCOoGXyG7tzdgCr+M=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVdNQTtBQVhzQjtBQUl1QjtBQUluRCxNQUFNLEVBQUVLLElBQUcsRUFBRSxHQUFHQztBQUNzQztBQUl2QyxTQUFTRSxPQUFPOztJQUM3QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQVUsS0FBSztJQUN2RCxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQVM7SUFDakQsTUFBTVMsaUJBQWlCLENBQUNDLElBQVc7UUFDakNGLFlBQVlFLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUM1QjtJQUNBYixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSU0sVUFBUztZQUNiLE1BQU1RLGFBQWEsSUFBSVYsK0RBQWVBLENBQUNJO1lBQ3ZDTSxXQUFXQyxhQUFhO1lBQ3hCRCxXQUFXRSxZQUFZO1lBQ3ZCRixXQUFXRyxNQUFNO1lBQ2pCSCxXQUFXSSxHQUFHO1lBQ2RKLFdBQVdLLFdBQVc7WUFDdEIsTUFBTUMsZUFBYyxJQUFLO2dCQUN2Qk4sV0FBV08sT0FBTyxDQUFDQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHVixXQUFXVyxlQUFlLENBQUNDLFdBQVc7Z0JBQy9FWixXQUFXTyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDSSxNQUFNLEdBQUdiLFdBQVdXLGVBQWUsQ0FBQ0csWUFBWTtZQUNsRjtZQUNBQyxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVVjtZQUNsQyxPQUFPLElBQU1TLE9BQU9FLG1CQUFtQixDQUFDLFVBQVVYO1FBQWMsQ0FBQztJQUNwRSxHQUFHLEVBQUU7SUFDTCxNQUFNWSxjQUFjLElBQU07UUFDeEJ6QixZQUFZLElBQUk7UUFDaEIsTUFBTU8sYUFBYSxJQUFJViwrREFBZUEsQ0FBQ0k7UUFDdkNNLFdBQVdDLGFBQWE7UUFDeEJELFdBQVdFLFlBQVk7UUFDdkJGLFdBQVdHLE1BQU07UUFDakJILFdBQVdJLEdBQUc7UUFDZEosV0FBV0ssV0FBVztRQUN0QixTQUFTQyxlQUFlO1lBQ3RCTixXQUFXTyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLEdBQUdWLFdBQVdXLGVBQWUsQ0FBQ0MsV0FBVztZQUMvRVosV0FBV08sT0FBTyxDQUFDQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0ksTUFBTSxHQUFHYixXQUFXVyxlQUFlLENBQUNHLFlBQVk7UUFDbEY7UUFDQUMsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVVY7UUFDbEMsT0FBTyxJQUFNUyxPQUFPRSxtQkFBbUIsQ0FBQyxVQUFVWDtJQUNyRDtJQUNBLHFCQUNFOzswQkFDRSw4REFBQ3RCLGtEQUFJQTs7a0NBQ0gsOERBQUNtQztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQzs7b0JBRVAsQ0FBQ2xDLDBCQUNPLDhEQUFDbUM7d0JBQUlDLFdBQVU7OzBDQUVYLDhEQUFDQztnQ0FBTUQsV0FBVTswQ0FBVTs7Ozs7OzBDQUMzQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRTt3Q0FBTUYsV0FBVTt3Q0FBT0csVUFBVW5DO3dDQUFnQkcsT0FBT0w7d0NBQVVzQyxNQUFLOzs7Ozs7a0RBQ3hFLDhEQUFDQzt3Q0FBT0wsV0FBVTt3Q0FBb0JNLFNBQVNoQjtrREFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtwRSw4REFBQ1M7d0JBQUlRLElBQUc7d0JBQW1CUCxXQUFVO2tDQUFtQjs7Ozs7Ozs7Ozs7Ozs7QUFPOUQsQ0FBQztHQWhFdUJyQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpbywgeyBTb2NrZXQgfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiXG5pbXBvcnQgZW5naW5lIGZyb20gXCIuLi9tb2R1bGVzL0VuZ2luZVwiO1xuaW1wb3J0IE1hdHRlciwgeyBFdmVudHMsIEVuZ2luZSwgV29ybGQsIEJvZGllcyB9IGZyb20gXCJtYXR0ZXItanNcIjtcbmNvbnN0IHsgbG9nIH0gPSBjb25zb2xlO1xuaW1wb3J0IHsgbWF0dGVySnNNb2R1bGVzIH0gZnJvbSBcIi4uL3V0aWxzL21hdHRlclRvb2xzXCJcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbam9pblJvb20sIHNldEpvaW5Sb29tXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICBjb25zdCBbcm9vbU5hbWUsIHNldFJvb21OYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcbiAgY29uc3QgaGFuZGxlUm9vbU5hbWUgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0Um9vbU5hbWUoZS50YXJnZXQudmFsdWUpXG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoam9pblJvb20pe1xuICAgIGNvbnN0IE1hdHRlck5vZGUgPSBuZXcgbWF0dGVySnNNb2R1bGVzKHJvb21OYW1lKVxuICAgIE1hdHRlck5vZGUuY3JlYXRlTW9kdWxlcygpXG4gICAgTWF0dGVyTm9kZS5jcmVhdGVCb2RpZXMoKVxuICAgIE1hdHRlck5vZGUuZXZlbnRzKClcbiAgICBNYXR0ZXJOb2RlLnJ1bigpXG4gICAgTWF0dGVyTm9kZS5zb2NrZXRTdHVmZigpXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0oKT0+IHtcbiAgICAgIE1hdHRlck5vZGUub2JqZWN0cy5yZW5kZXIuY2FudmFzLndpZHRoID0gTWF0dGVyTm9kZS5tYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGhcbiAgICAgIE1hdHRlck5vZGUub2JqZWN0cy5yZW5kZXIuY2FudmFzLmhlaWdodCA9IE1hdHRlck5vZGUubWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodFxuICAgICB9XG4gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7fVxuICB9LCBbXSk7XG4gIGNvbnN0IHJ1bk1hdHRlckpzID0gKCkgPT4ge1xuICAgIHNldEpvaW5Sb29tKHRydWUpXG4gICAgY29uc3QgTWF0dGVyTm9kZSA9IG5ldyBtYXR0ZXJKc01vZHVsZXMocm9vbU5hbWUpXG4gICAgTWF0dGVyTm9kZS5jcmVhdGVNb2R1bGVzKClcbiAgICBNYXR0ZXJOb2RlLmNyZWF0ZUJvZGllcygpXG4gICAgTWF0dGVyTm9kZS5ldmVudHMoKVxuICAgIE1hdHRlck5vZGUucnVuKClcbiAgICBNYXR0ZXJOb2RlLnNvY2tldFN0dWZmKClcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XG4gICAgICBNYXR0ZXJOb2RlLm9iamVjdHMucmVuZGVyLmNhbnZhcy53aWR0aCA9IE1hdHRlck5vZGUubWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoXG4gICAgICBNYXR0ZXJOb2RlLm9iamVjdHMucmVuZGVyLmNhbnZhcy5oZWlnaHQgPSBNYXR0ZXJOb2RlLm1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHRcbiAgICAgfVxuICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgIHtcbiFqb2luUm9vbSAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaC1zY3JlZW4gdy1zY3JlZW4gZmxleC1jb2wgYmctYmxhY2sgbWQ6aXRlbXMtY2VudGVyXG4gICAgICAgIG1kOmp1c3RpZnktY2VudGVyIG1kOmJnLXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPlJvb20gSUQ8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJwbC0xXCIgb25DaGFuZ2U9e2hhbmRsZVJvb21OYW1lfSB2YWx1ZT17cm9vbU5hbWV9IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmVlbi03MDAgcHgtMVwiIG9uQ2xpY2s9e3J1bk1hdHRlckpzfT4gSm9pbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgPGRpdiBpZD1cIm1hdHRlci1Db250YWluZXJcIiBjbGFzc05hbWU9XCIgdy1mdWxsIGgtWzc1dmhdXCI+ICA8L2Rpdj59XG4gICAgICAgIFxuICAgICBcblxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImxvZyIsImNvbnNvbGUiLCJtYXR0ZXJKc01vZHVsZXMiLCJIb21lIiwiam9pblJvb20iLCJzZXRKb2luUm9vbSIsInJvb21OYW1lIiwic2V0Um9vbU5hbWUiLCJoYW5kbGVSb29tTmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk1hdHRlck5vZGUiLCJjcmVhdGVNb2R1bGVzIiwiY3JlYXRlQm9kaWVzIiwiZXZlbnRzIiwicnVuIiwic29ja2V0U3R1ZmYiLCJoYW5kbGVSZXNpemUiLCJvYmplY3RzIiwicmVuZGVyIiwiY2FudmFzIiwid2lkdGgiLCJtYXR0ZXJDb250YWluZXIiLCJjbGllbnRXaWR0aCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicnVuTWF0dGVySnMiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJvbkNoYW5nZSIsInR5cGUiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});