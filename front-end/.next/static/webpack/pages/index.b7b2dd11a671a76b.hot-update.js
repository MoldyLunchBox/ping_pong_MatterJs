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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst { log  } = console;\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var Engine = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().Engine), Render = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().Render), Runner = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().Runner), Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().Bodies), Body = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().Body), Composite = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().Composite), Mouse = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().Mouse), MouseConstraint = (matter_js__WEBPACK_IMPORTED_MODULE_3___default().MouseConstraint);\n        var engine = Engine.create();\n        engine.gravity = {\n            x: 0,\n            y: 0,\n            scale: 0\n        };\n        var render = Render.create({\n            element: document.body,\n            engine: engine,\n            options: {\n                background: \"transparent\",\n                wireframes: false,\n                width: 1000,\n                height: 600\n            }\n        });\n        Render.lookAt(render, {\n            min: {\n                x: 0,\n                y: 0\n            },\n            max: {\n                x: 800,\n                y: 600\n            }\n        });\n        // create two boxes and a ground\n        var boxA = Bodies.circle(400, 200, 20, {\n            velocity: {\n                x: 5,\n                y: 1\n            },\n            restitution: 1.01,\n            friction: 0,\n            frictionAir: 0\n        });\n        var boxB = Bodies.rectangle(20, 300, 40, 200, {\n            inertia: Infinity\n        });\n        var ground = Bodies.rectangle(500, 0, 1000, 20, {\n            isStatic: true,\n            render: {\n                fillStyle: \"blue\"\n            }\n        });\n        var roof = Bodies.rectangle(500, 600, 1000, 20, {\n            isStatic: true,\n            render: {\n                fillStyle: \"red\"\n            }\n        });\n        var wall = Bodies.rectangle(900, 300, 20, 1000, {\n            isStatic: true,\n            render: {\n                fillStyle: \"green\"\n            }\n        });\n        Body.setVelocity(boxA, {\n            x: 5,\n            y: 5\n        });\n        // add all of the bodies to the world\n        Composite.add(engine.world, [\n            boxA,\n            boxB,\n            ground,\n            roof,\n            wall\n        ]);\n        // run the renderer\n        Render.run(render);\n        // create runner\n        var runner = Runner.create();\n        log(render);\n        // run the engine\n        Runner.run(runner, engine);\n        let mouse = Mouse.create(render.canvas);\n        let mouseConstraint = MouseConstraint.create(engine, {\n            mouse: mouse,\n            constraint: {\n                stiffness: 0.2,\n                render: {\n                    visible: false\n                }\n            }\n        });\n        matter_js__WEBPACK_IMPORTED_MODULE_3__.Events.on(mouseConstraint, \"mousemove\", (e)=>{\n            boxB.position.y = e.mouse.position.y;\n            boxB.position.x = 40;\n        });\n        matter_js__WEBPACK_IMPORTED_MODULE_3__.Events.on(mouseConstraint, \"mouseup\", (e)=>{\n            Body.setVelocity(boxA, {\n                x: 5,\n                y: 5\n            });\n        });\n        Composite.add(engine.world, [\n            mouseConstraint\n        ]);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/ping_pong_MatterJs/front-end/pages/index.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/ping_pong_MatterJs/front-end/pages/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/ping_pong_MatterJs/front-end/pages/index.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/ping_pong_MatterJs/front-end/pages/index.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/goinfre/amya/ping_pong_MatterJs/front-end/pages/index.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {}, void 0, false, {\n                fileName: \"/goinfre/amya/ping_pong_MatterJs/front-end/pages/index.tsx\",\n                lineNumber: 104,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7WUFDckNvQixLQUFLc0IsUUFBUSxDQUFDM0MsQ0FBQyxHQUFDO1FBQ2xCO1FBRUFmLGdEQUFTLENBQUNvRCxpQkFBaUIsV0FBVyxDQUFDSyxJQUFJO1lBQ3pDakQsS0FBS3FDLFdBQVcsQ0FBQ2YsTUFBTTtnQkFBRWYsR0FBRztnQkFBR0MsR0FBRztZQUFFO1FBRXRDO1FBQ0FQLFVBQVVxQyxHQUFHLENBQUNsQyxPQUFPbUMsS0FBSyxFQUFFO1lBQUNLO1NBQWdCO0lBRTNDLEdBQUcsRUFBRTtJQUNMLHFCQUNFOzswQkFDRSw4REFBQ3hELGtEQUFJQTs7a0NBQ0gsOERBQUMrRDtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXRCLDhEQUFDQzs7Ozs7OztBQUtULENBQUM7R0FoR3VCL0Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpbywge1NvY2tldH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIlxuaW1wb3J0IGVuZ2luZSBmcm9tIFwiLi4vbW9kdWxlcy9FbmdpbmVcIjtcbmltcG9ydCBNYXR0ZXIsIHsgIEV2ZW50cywgIEVuZ2luZSwgV29ybGQsIEJvZGllcyB9IGZyb20gXCJtYXR0ZXItanNcIjtcbmNvbnN0IHsgbG9nIH0gPSBjb25zb2xlO1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIEVuZ2luZSA9IE1hdHRlci5FbmdpbmUsXG4gICAgUmVuZGVyID0gTWF0dGVyLlJlbmRlcixcbiAgICBSdW5uZXIgPSBNYXR0ZXIuUnVubmVyLFxuICAgIEJvZGllcyA9IE1hdHRlci5Cb2RpZXMsXG4gICAgQm9keSA9IE1hdHRlci5Cb2R5LFxuXG4gICAgQ29tcG9zaXRlID0gTWF0dGVyLkNvbXBvc2l0ZSxcbiAgICBNb3VzZSA9IE1hdHRlci5Nb3VzZSxcbiAgICBNb3VzZUNvbnN0cmFpbnQgPSBNYXR0ZXIuTW91c2VDb25zdHJhaW50O1xuXG4gICAgdmFyIGVuZ2luZSA9IEVuZ2luZS5jcmVhdGUoKTtcbiAgICBlbmdpbmUuZ3Jhdml0eSA9IHsgICAgXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIHNjYWxlOiAwXG4gIH07XG4gICAgdmFyIHJlbmRlciA9IFJlbmRlci5jcmVhdGUoe1xuICAgICAgZWxlbWVudDogZG9jdW1lbnQuYm9keSxcbiAgICAgIGVuZ2luZTogZW5naW5lLFxuICAgICAgb3B0aW9uczp7XG4gICAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgd2lyZWZyYW1lczogZmFsc2UsXG4gICAgICAgIHdpZHRoOiAxMDAwLFxuICAgICAgICBoZWlnaHQ6IDYwMCxcbiAgICAgIH1cbiAgfSk7XG4gIFJlbmRlci5sb29rQXQocmVuZGVyLCB7XG4gICAgbWluOiB7IHg6IDAsIHk6IDAgfSxcbiAgICBtYXg6IHsgeDogODAwLCB5OiA2MDAgfVxuICB9KTtcbiAgLy8gY3JlYXRlIHR3byBib3hlcyBhbmQgYSBncm91bmRcbiAgXG52YXIgYm94QSA9IEJvZGllcy5jaXJjbGUoNDAwLCAyMDAsIDIwLHsgIFxuICB2ZWxvY2l0eTogeyB4OiA1LCB5OiAxIH0gLHJlc3RpdHV0aW9uOiAxLjAxLCBmcmljdGlvbjogMCxmcmljdGlvbkFpcjogMH0pO1xudmFyIGJveEIgPSBCb2RpZXMucmVjdGFuZ2xlKDIwLCAzMDAsIDQwLCAyMDAse2luZXJ0aWE6IEluZmluaXR5fSk7XG52YXIgZ3JvdW5kID0gQm9kaWVzLnJlY3RhbmdsZSg1MDAsIDAsIDEwMDAsIDIwLCB7ICBpc1N0YXRpYzogdHJ1ZSxcbiAgcmVuZGVyOiB7XG4gICAgZmlsbFN0eWxlOiAnYmx1ZSdcbiAgfX0pO1xudmFyIHJvb2YgPSBCb2RpZXMucmVjdGFuZ2xlKDUwMCwgNjAwLCAxMDAwLCAyMCwgeyAgIGlzU3RhdGljOiB0cnVlLFxuICByZW5kZXI6IHtcbiAgICBmaWxsU3R5bGU6ICdyZWQnXG4gIH19KTtcbiAgdmFyIHdhbGwgPSBCb2RpZXMucmVjdGFuZ2xlKDkwMCwgMzAwLCAyMCwgMTAwMCwgeyAgaXNTdGF0aWM6IHRydWUsXG4gICAgcmVuZGVyOiB7XG4gICAgICBmaWxsU3R5bGU6ICdncmVlbidcbiAgICB9fSk7XG4gICAgQm9keS5zZXRWZWxvY2l0eShib3hBLCB7IHg6IDUsIHk6IDUgfSk7XG4vLyBhZGQgYWxsIG9mIHRoZSBib2RpZXMgdG8gdGhlIHdvcmxkXG5Db21wb3NpdGUuYWRkKGVuZ2luZS53b3JsZCwgW2JveEEsIGJveEIsIGdyb3VuZCwgcm9vZiwgd2FsbCBdKTtcblxuLy8gcnVuIHRoZSByZW5kZXJlclxuUmVuZGVyLnJ1bihyZW5kZXIpO1xuXG4vLyBjcmVhdGUgcnVubmVyXG52YXIgcnVubmVyID0gUnVubmVyLmNyZWF0ZSgpO1xubG9nKHJlbmRlcilcbi8vIHJ1biB0aGUgZW5naW5lXG5SdW5uZXIucnVuKHJ1bm5lciwgZW5naW5lKTtcbmxldCBtb3VzZSA9IE1vdXNlLmNyZWF0ZShyZW5kZXIuY2FudmFzKVxubGV0IG1vdXNlQ29uc3RyYWludCA9IE1vdXNlQ29uc3RyYWludC5jcmVhdGUoZW5naW5lLHtcbiAgbW91c2U6IG1vdXNlLFxuICBjb25zdHJhaW50OntcbiAgICBzdGlmZm5lc3M6IDAuMixcbiAgICByZW5kZXI6e1xuICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICB9XG4gIH1cbn0pXG5FdmVudHMub24obW91c2VDb25zdHJhaW50LCBcIm1vdXNlbW92ZVwiLCAoZSk9PntcbiAgYm94Qi5wb3NpdGlvbi55ID0gIGUubW91c2UucG9zaXRpb24ueVxuICBib3hCLnBvc2l0aW9uLng9NDBcbn0pXG5cbkV2ZW50cy5vbihtb3VzZUNvbnN0cmFpbnQsIFwibW91c2V1cFwiLCAoZSk9PntcbiAgQm9keS5zZXRWZWxvY2l0eShib3hBLCB7IHg6IDUsIHk6IDUgfSk7XG5cbn0pXG5Db21wb3NpdGUuYWRkKGVuZ2luZS53b3JsZCwgW21vdXNlQ29uc3RyYWludF0pO1xuXG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgICAgPG1haW4+XG5cbiAgICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJNYXR0ZXIiLCJFdmVudHMiLCJsb2ciLCJjb25zb2xlIiwiSG9tZSIsIkVuZ2luZSIsIlJlbmRlciIsIlJ1bm5lciIsIkJvZGllcyIsIkJvZHkiLCJDb21wb3NpdGUiLCJNb3VzZSIsIk1vdXNlQ29uc3RyYWludCIsImVuZ2luZSIsImNyZWF0ZSIsImdyYXZpdHkiLCJ4IiwieSIsInNjYWxlIiwicmVuZGVyIiwiZWxlbWVudCIsImRvY3VtZW50IiwiYm9keSIsIm9wdGlvbnMiLCJiYWNrZ3JvdW5kIiwid2lyZWZyYW1lcyIsIndpZHRoIiwiaGVpZ2h0IiwibG9va0F0IiwibWluIiwibWF4IiwiYm94QSIsImNpcmNsZSIsInZlbG9jaXR5IiwicmVzdGl0dXRpb24iLCJmcmljdGlvbiIsImZyaWN0aW9uQWlyIiwiYm94QiIsInJlY3RhbmdsZSIsImluZXJ0aWEiLCJJbmZpbml0eSIsImdyb3VuZCIsImlzU3RhdGljIiwiZmlsbFN0eWxlIiwicm9vZiIsIndhbGwiLCJzZXRWZWxvY2l0eSIsImFkZCIsIndvcmxkIiwicnVuIiwicnVubmVyIiwibW91c2UiLCJjYW52YXMiLCJtb3VzZUNvbnN0cmFpbnQiLCJjb25zdHJhaW50Iiwic3RpZmZuZXNzIiwidmlzaWJsZSIsIm9uIiwiZSIsInBvc2l0aW9uIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});