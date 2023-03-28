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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst { log  } = console;\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var Engine = (matter_js__WEBPACK_IMPORTED_MODULE_4___default().Engine), Render = (matter_js__WEBPACK_IMPORTED_MODULE_4___default().Render), Runner = (matter_js__WEBPACK_IMPORTED_MODULE_4___default().Runner), Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_4___default().Bodies), Body = (matter_js__WEBPACK_IMPORTED_MODULE_4___default().Body), Composite = (matter_js__WEBPACK_IMPORTED_MODULE_4___default().Composite), Mouse = (matter_js__WEBPACK_IMPORTED_MODULE_4___default().Mouse), MouseConstraint = (matter_js__WEBPACK_IMPORTED_MODULE_4___default().MouseConstraint);\n        var engine = Engine.create();\n        engine.gravity = {\n            x: 0,\n            y: 0,\n            scale: 0\n        };\n        var render = Render.create({\n            element: document.body,\n            engine: engine,\n            options: {\n                background: \"transparent\",\n                wireframes: false,\n                width: 1000,\n                height: 600\n            }\n        });\n        Render.lookAt(render, {\n            min: {\n                x: 0,\n                y: 0\n            },\n            max: {\n                x: 800,\n                y: 600\n            }\n        });\n        // create two boxes and a ground\n        const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"http://localhost:3008\");\n        socket.on(\"ballPosition\", (data)=>{\n            // Update the ball's position\n            console.log(\"game\");\n            ball.position.x = data.x;\n            ball.position.y = data.y;\n        });\n        var ball = Bodies.circle(400, 200, 20, {\n            velocity: {\n                x: 5,\n                y: 1\n            },\n            restitution: 1.01,\n            friction: 0,\n            frictionAir: 0\n        });\n        var boxB = Bodies.rectangle(20, 300, 40, 200, {\n            inertia: Infinity\n        });\n        var ground = Bodies.rectangle(500, 0, 1000, 20, {\n            isStatic: true,\n            render: {\n                fillStyle: \"blue\"\n            }\n        });\n        var roof = Bodies.rectangle(500, 600, 1000, 20, {\n            isStatic: true,\n            render: {\n                fillStyle: \"red\"\n            }\n        });\n        var wall = Bodies.rectangle(900, 300, 20, 1000, {\n            isStatic: true,\n            render: {\n                fillStyle: \"green\"\n            }\n        });\n        Body.setVelocity(ball, {\n            x: 5,\n            y: 5\n        });\n        // add all of the bodies to the world\n        Composite.add(engine.world, [\n            ball,\n            boxB,\n            ground,\n            roof,\n            wall\n        ]);\n        // run the renderer\n        Render.run(render);\n        // create runner\n        var runner = Runner.create();\n        log(render);\n        // run the engine\n        Runner.run(runner, engine);\n        let mouse = Mouse.create(render.canvas);\n        let mouseConstraint = MouseConstraint.create(engine, {\n            mouse: mouse,\n            constraint: {\n                stiffness: 0.2,\n                render: {\n                    visible: false\n                }\n            }\n        });\n        matter_js__WEBPACK_IMPORTED_MODULE_4__.Events.on(mouseConstraint, \"mousemove\", (e)=>{\n            boxB.position.y = e.mouse.position.y;\n            boxB.position.x = 40;\n        });\n        matter_js__WEBPACK_IMPORTED_MODULE_4__.Events.on(mouseConstraint, \"mouseup\", (e)=>{\n            Body.setVelocity(ball, {\n                x: 5,\n                y: 5\n            });\n        });\n        Composite.add(engine.world, [\n            mouseConstraint\n        ]);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/ping_pong_MatterJs/front-end/pages/index.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/ping_pong_MatterJs/front-end/pages/index.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/ping_pong_MatterJs/front-end/pages/index.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/amya/ping_pong_MatterJs/front-end/pages/index.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/goinfre/amya/ping_pong_MatterJs/front-end/pages/index.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {}, void 0, false, {\n                fileName: \"/goinfre/amya/ping_pong_MatterJs/front-end/pages/index.tsx\",\n                lineNumber: 111,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdCQUFnQkUsTUFBTSxDQUFDRCxRQUFPO1lBQ2xEMEMsT0FBT0E7WUFDUEcsWUFBVztnQkFDVEMsV0FBVztnQkFDWHhDLFFBQU87b0JBQ0x5QyxTQUFTLEtBQUs7Z0JBQ2hCO1lBQ0Y7UUFDRjtRQUNBM0QsZ0RBQVMsQ0FBQ3dELGlCQUFpQixhQUFhLENBQUNJLElBQUk7WUFDM0NwQixLQUFLTixRQUFRLENBQUNsQixDQUFDLEdBQUk0QyxFQUFFTixLQUFLLENBQUNwQixRQUFRLENBQUNsQixDQUFDO1lBQ3JDd0IsS0FBS04sUUFBUSxDQUFDbkIsQ0FBQyxHQUFDO1FBQ2xCO1FBRUFmLGdEQUFTLENBQUN3RCxpQkFBaUIsV0FBVyxDQUFDSSxJQUFJO1lBQ3pDcEQsS0FBS3lDLFdBQVcsQ0FBQ2hCLE1BQU07Z0JBQUVsQixHQUFHO2dCQUFHQyxHQUFHO1lBQUU7UUFFdEM7UUFDQVAsVUFBVXlDLEdBQUcsQ0FBQ3RDLE9BQU91QyxLQUFLLEVBQUU7WUFBQ0s7U0FBZ0I7SUFFM0MsR0FBRyxFQUFFO0lBQ0wscUJBQ0U7OzBCQUNFLDhEQUFDN0Qsa0RBQUlBOztrQ0FDSCw4REFBQ2tFO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFdEIsOERBQUNDOzs7Ozs7O0FBS1QsQ0FBQztHQXZHdUJqRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGlvLCB7U29ja2V0fSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiXG5pbXBvcnQgZW5naW5lIGZyb20gXCIuLi9tb2R1bGVzL0VuZ2luZVwiO1xuaW1wb3J0IE1hdHRlciwgeyAgRXZlbnRzLCAgRW5naW5lLCBXb3JsZCwgQm9kaWVzIH0gZnJvbSBcIm1hdHRlci1qc1wiO1xuY29uc3QgeyBsb2cgfSA9IGNvbnNvbGU7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgRW5naW5lID0gTWF0dGVyLkVuZ2luZSxcbiAgICBSZW5kZXIgPSBNYXR0ZXIuUmVuZGVyLFxuICAgIFJ1bm5lciA9IE1hdHRlci5SdW5uZXIsXG4gICAgQm9kaWVzID0gTWF0dGVyLkJvZGllcyxcbiAgICBCb2R5ID0gTWF0dGVyLkJvZHksXG5cbiAgICBDb21wb3NpdGUgPSBNYXR0ZXIuQ29tcG9zaXRlLFxuICAgIE1vdXNlID0gTWF0dGVyLk1vdXNlLFxuICAgIE1vdXNlQ29uc3RyYWludCA9IE1hdHRlci5Nb3VzZUNvbnN0cmFpbnQ7XG5cbiAgICB2YXIgZW5naW5lID0gRW5naW5lLmNyZWF0ZSgpO1xuICAgIGVuZ2luZS5ncmF2aXR5ID0geyAgICBcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgc2NhbGU6IDBcbiAgfTtcbiAgICB2YXIgcmVuZGVyID0gUmVuZGVyLmNyZWF0ZSh7XG4gICAgICBlbGVtZW50OiBkb2N1bWVudC5ib2R5LFxuICAgICAgZW5naW5lOiBlbmdpbmUsXG4gICAgICBvcHRpb25zOntcbiAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICB3aXJlZnJhbWVzOiBmYWxzZSxcbiAgICAgICAgd2lkdGg6IDEwMDAsXG4gICAgICAgIGhlaWdodDogNjAwLFxuICAgICAgfVxuICB9KTtcbiAgUmVuZGVyLmxvb2tBdChyZW5kZXIsIHtcbiAgICBtaW46IHsgeDogMCwgeTogMCB9LFxuICAgIG1heDogeyB4OiA4MDAsIHk6IDYwMCB9XG4gIH0pO1xuICAvLyBjcmVhdGUgdHdvIGJveGVzIGFuZCBhIGdyb3VuZFxuICBjb25zdCBzb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDozMDA4Jyk7XG5zb2NrZXQub24oJ2JhbGxQb3NpdGlvbicsIChkYXRhKSA9PiB7XG4gIC8vIFVwZGF0ZSB0aGUgYmFsbCdzIHBvc2l0aW9uXG4gIGNvbnNvbGUubG9nKFwiZ2FtZVwiKVxuICBiYWxsLnBvc2l0aW9uLnggPSBkYXRhLng7XG4gIGJhbGwucG9zaXRpb24ueSA9IGRhdGEueTtcbn0pO1xuXG52YXIgYmFsbCA9IEJvZGllcy5jaXJjbGUoNDAwLCAyMDAsIDIwLHsgIFxuICB2ZWxvY2l0eTogeyB4OiA1LCB5OiAxIH0gLHJlc3RpdHV0aW9uOiAxLjAxLCBmcmljdGlvbjogMCxmcmljdGlvbkFpcjogMH0pO1xudmFyIGJveEIgPSBCb2RpZXMucmVjdGFuZ2xlKDIwLCAzMDAsIDQwLCAyMDAse2luZXJ0aWE6IEluZmluaXR5fSk7XG52YXIgZ3JvdW5kID0gQm9kaWVzLnJlY3RhbmdsZSg1MDAsIDAsIDEwMDAsIDIwLCB7ICBpc1N0YXRpYzogdHJ1ZSxcbiAgcmVuZGVyOiB7XG4gICAgZmlsbFN0eWxlOiAnYmx1ZSdcbiAgfX0pO1xudmFyIHJvb2YgPSBCb2RpZXMucmVjdGFuZ2xlKDUwMCwgNjAwLCAxMDAwLCAyMCwgeyAgIGlzU3RhdGljOiB0cnVlLFxuICByZW5kZXI6IHtcbiAgICBmaWxsU3R5bGU6ICdyZWQnXG4gIH19KTtcbiAgdmFyIHdhbGwgPSBCb2RpZXMucmVjdGFuZ2xlKDkwMCwgMzAwLCAyMCwgMTAwMCwgeyAgaXNTdGF0aWM6IHRydWUsXG4gICAgcmVuZGVyOiB7XG4gICAgICBmaWxsU3R5bGU6ICdncmVlbidcbiAgICB9fSk7XG4gICAgQm9keS5zZXRWZWxvY2l0eShiYWxsLCB7IHg6IDUsIHk6IDUgfSk7XG4vLyBhZGQgYWxsIG9mIHRoZSBib2RpZXMgdG8gdGhlIHdvcmxkXG5Db21wb3NpdGUuYWRkKGVuZ2luZS53b3JsZCwgW2JhbGwsIGJveEIsIGdyb3VuZCwgcm9vZiwgd2FsbCBdKTtcblxuLy8gcnVuIHRoZSByZW5kZXJlclxuUmVuZGVyLnJ1bihyZW5kZXIpO1xuXG4vLyBjcmVhdGUgcnVubmVyXG52YXIgcnVubmVyID0gUnVubmVyLmNyZWF0ZSgpO1xubG9nKHJlbmRlcilcbi8vIHJ1biB0aGUgZW5naW5lXG5SdW5uZXIucnVuKHJ1bm5lciwgZW5naW5lKTtcbmxldCBtb3VzZSA9IE1vdXNlLmNyZWF0ZShyZW5kZXIuY2FudmFzKVxubGV0IG1vdXNlQ29uc3RyYWludCA9IE1vdXNlQ29uc3RyYWludC5jcmVhdGUoZW5naW5lLHtcbiAgbW91c2U6IG1vdXNlLFxuICBjb25zdHJhaW50OntcbiAgICBzdGlmZm5lc3M6IDAuMixcbiAgICByZW5kZXI6e1xuICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICB9XG4gIH1cbn0pXG5FdmVudHMub24obW91c2VDb25zdHJhaW50LCBcIm1vdXNlbW92ZVwiLCAoZSk9PntcbiAgYm94Qi5wb3NpdGlvbi55ID0gIGUubW91c2UucG9zaXRpb24ueVxuICBib3hCLnBvc2l0aW9uLng9NDBcbn0pXG5cbkV2ZW50cy5vbihtb3VzZUNvbnN0cmFpbnQsIFwibW91c2V1cFwiLCAoZSk9PntcbiAgQm9keS5zZXRWZWxvY2l0eShiYWxsLCB7IHg6IDUsIHk6IDUgfSk7XG5cbn0pXG5Db21wb3NpdGUuYWRkKGVuZ2luZS53b3JsZCwgW21vdXNlQ29uc3RyYWludF0pO1xuXG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgICAgPG1haW4+XG5cbiAgICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJpbyIsIk1hdHRlciIsIkV2ZW50cyIsImxvZyIsImNvbnNvbGUiLCJIb21lIiwiRW5naW5lIiwiUmVuZGVyIiwiUnVubmVyIiwiQm9kaWVzIiwiQm9keSIsIkNvbXBvc2l0ZSIsIk1vdXNlIiwiTW91c2VDb25zdHJhaW50IiwiZW5naW5lIiwiY3JlYXRlIiwiZ3Jhdml0eSIsIngiLCJ5Iiwic2NhbGUiLCJyZW5kZXIiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJib2R5Iiwib3B0aW9ucyIsImJhY2tncm91bmQiLCJ3aXJlZnJhbWVzIiwid2lkdGgiLCJoZWlnaHQiLCJsb29rQXQiLCJtaW4iLCJtYXgiLCJzb2NrZXQiLCJvbiIsImRhdGEiLCJiYWxsIiwicG9zaXRpb24iLCJjaXJjbGUiLCJ2ZWxvY2l0eSIsInJlc3RpdHV0aW9uIiwiZnJpY3Rpb24iLCJmcmljdGlvbkFpciIsImJveEIiLCJyZWN0YW5nbGUiLCJpbmVydGlhIiwiSW5maW5pdHkiLCJncm91bmQiLCJpc1N0YXRpYyIsImZpbGxTdHlsZSIsInJvb2YiLCJ3YWxsIiwic2V0VmVsb2NpdHkiLCJhZGQiLCJ3b3JsZCIsInJ1biIsInJ1bm5lciIsIm1vdXNlIiwiY2FudmFzIiwibW91c2VDb25zdHJhaW50IiwiY29uc3RyYWludCIsInN0aWZmbmVzcyIsInZpc2libGUiLCJlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});