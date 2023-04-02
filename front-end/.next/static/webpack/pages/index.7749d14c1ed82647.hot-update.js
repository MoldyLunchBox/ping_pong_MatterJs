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

/***/ "./utils/matterTools.ts":
/*!******************************!*\
  !*** ./utils/matterTools.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"matterJsModules\": function() { return /* binding */ matterJsModules; }\n/* harmony export */ });\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\n\nfunction saveMeasurements(div, obj) {\n    obj = {\n        divHeight: div.clientHeight,\n        divWidth: div.clientWidth,\n        wallBottom: {\n            x: div.clientWidth / 2,\n            y: div.clientHeight,\n            width: div.clientWidth,\n            height: 20\n        },\n        wallTop: {\n            x: div.clientWidth / 2,\n            y: 0,\n            width: div.clientWidth,\n            height: 20\n        },\n        wallLeft: {\n            x: 0,\n            y: div.clientHeight / 2,\n            width: 20,\n            height: div.clientHeight\n        },\n        wallRight: {\n            x: div.clientWidth,\n            y: div.clientHeight / 2,\n            width: 20,\n            height: div.clientHeight\n        }\n    };\n}\nclass matterJsModules {\n    createModules() {\n        if (this.matterContainer) {\n            this.objects.engine = this.modules.Engine.create();\n            this.objects.render = this.modules.Render.create({\n                element: this.matterContainer,\n                engine: this.objects.engine,\n                options: {\n                    background: \"transparent\",\n                    wireframes: false,\n                    showAngleIndicator: true,\n                    width: this.matterContainer.clientWidth,\n                    height: this.matterContainer.clientHeight\n                }\n            }), this.objects.runner = this.modules.Runner.create(), this.objects.mouse = this.modules.Mouse.create(this.objects.render.canvas), this.objects.mouseConstraint = this.modules.MouseConstraint.create(this.objects.engine, {\n                mouse: this.objects.mouse,\n                constraint: {\n                    stiffness: 0.2,\n                    render: {\n                        visible: false\n                    }\n                }\n            });\n        }\n    }\n    // createModules() {\n    //     this.objects.engine = this.modules.Engine.create(),\n    //         this.objects.render = this.modules.Render.create({\n    //             element: document.body,\n    //             engine: this.objects.engine,\n    //             options: {\n    //                 background: \"transparent\",\n    //                 wireframes: false,\n    //                 width: 1000,\n    //                 height: 600,\n    //             }\n    //         }),\n    //         this.objects.runner = this.modules.Runner.create(),\n    //         this.objects.mouse = this.modules.Mouse.create(this.objects.render.canvas),\n    //         this.objects.mouseConstraint = this.modules.MouseConstraint.create(this.objects.engine, {\n    //             mouse: this.objects.mouse,\n    //             constraint: {\n    //                 stiffness: 0.2,\n    //                 render: {\n    //                     visible: false\n    //                 }\n    //             }\n    //         })\n    // }\n    createBodies() {\n        this.modules.Composite.add(this.objects.engine.world, [\n            this.bodies.ball,\n            this.bodies.leftPaddle,\n            this.bodies.ground,\n            this.bodies.roof,\n            this.bodies.wall,\n            this.bodies.wallLeft,\n            this.bodies.rightPaddle\n        ]);\n    }\n    events() {\n        matter_js__WEBPACK_IMPORTED_MODULE_0__.Events.on(this.objects.mouseConstraint, \"mousemove\", (e)=>{\n            var _this_socket;\n            this.modules.Body.setPosition(this.bodies.myPaddle, {\n                x: this.bodies.myPaddle.position.x,\n                y: e.mouse.position.y\n            });\n            console.log(this.bodies.myPaddle);\n            (_this_socket = this.socket) === null || _this_socket === void 0 ? void 0 : _this_socket.emit(this.paddleSide, {\n                x: this.bodies.myPaddle.position.x,\n                y: e.mouse.position.y\n            });\n        });\n        matter_js__WEBPACK_IMPORTED_MODULE_0__.Events.on(this.objects.mouseConstraint, \"mouseup\", (e)=>{\n            this.modules.Body.setVelocity(this.bodies.ball, {\n                x: 5,\n                y: 5\n            });\n        });\n    }\n    run() {\n        this.modules.Composite.add(this.objects.engine.world, [\n            this.objects.mouseConstraint\n        ]);\n        this.modules.Render.run(this.objects.render);\n        this.modules.Runner.run(this.objects.runner, this.objects.engine);\n    }\n    socketStuff() {\n        this.socket.on(\"ballPosition\", (data)=>{\n            // Update the ball's position\n            this.bodies.ball.position.x = data.x;\n            this.bodies.ball.position.y = data.y;\n        });\n    }\n    updateOtherPaddle() {\n        if (this.paddleSide.length > 1) {\n            // Update the other's paddle position\n            if (this.paddleSide == \"left\") this.socket.on(\"right\", (data)=>{\n                this.modules.Body.setPosition(this.bodies.othersPaddle, {\n                    x: data.x,\n                    y: data.y\n                });\n            });\n            else this.socket.on(\"left\", (data)=>{\n                this.modules.Body.setPosition(this.bodies.othersPaddle, {\n                    x: data.x,\n                    y: data.y\n                });\n            });\n        }\n    }\n    constructor(roomId){\n        this.objects = {\n            engine: null,\n            render: null,\n            runner: null,\n            mouse: null,\n            mouseConstraint: null\n        };\n        this.paddleSide = \"\";\n        this.matterContainer = document.querySelector(\"#matter-Container\");\n        this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"http://localhost:3008\");\n        const matterContainer = {\n            width: this.matterContainer.clientWidth,\n            height: this.matterContainer.clientHeight\n        };\n        saveMeasurements(this.matterContainer, this.obj);\n        this.socket.emit(\"joinRoom\", {\n            roomId: roomId,\n            matterContainer\n        });\n        this.modules = {\n            Engine: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Engine),\n            Render: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Render),\n            Runner: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner),\n            Bodies: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies),\n            Body: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Body),\n            Composite: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite),\n            Mouse: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Mouse),\n            MouseConstraint: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().MouseConstraint)\n        };\n        this.bodies = {\n            ball: this.modules.Bodies.circle(400, 200, 20),\n            leftPaddle: this.modules.Bodies.rectangle(50, 300, 40, 200, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"green\"\n                }\n            }),\n            rightPaddle: this.modules.Bodies.rectangle(1000 - 50, 300, 40, 200, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"red\"\n                }\n            }),\n            myPaddle: this.modules.Bodies.rectangle(0, 0, 0, 0, {\n                isStatic: true\n            }),\n            othersPaddle: this.modules.Bodies.rectangle(0, 0, 0, 0, {\n                isStatic: true\n            }),\n            ground: this.modules.Bodies.rectangle(500, 0, 1000, 20, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"blue\"\n                }\n            }),\n            roof: this.modules.Bodies.rectangle(500, 600, 1000, 20, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"red\"\n                }\n            }),\n            wall: this.modules.Bodies.rectangle(1000, 300, 20, 1000, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"green\"\n                }\n            }),\n            wallLeft: this.modules.Bodies.rectangle(0, 300, 20, 1000, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"green\"\n                }\n            })\n        };\n        this.socket.on(\"paddleAssigned\", (data)=>{\n            console.log(\"recieved paddle\", data);\n            this.paddleSide = data;\n            if (this.paddleSide == \"left\") {\n                this.bodies.myPaddle = this.bodies.leftPaddle;\n                this.bodies.othersPaddle = this.bodies.rightPaddle;\n            } else {\n                this.bodies.myPaddle = this.bodies.rightPaddle;\n                this.bodies.othersPaddle = this.bodies.leftPaddle;\n            }\n            this.updateOtherPaddle();\n        });\n    }\n} // createModules() {\n //     const matterContainer = document.querySelector(\"#matter-Container\") as HTMLElement\n //     if (matterContainer){\n //         this.objects.engine = this.modules.Engine.create();\n //         this.objects.render = this.modules.Render.create({\n //             element: matterContainer,\n //             engine: this.objects.engine,\n //             options: {\n //                 background: \"transparent\",\n //                 wireframes: true,\n //                 showAngleIndicator: true,\n //                 width: matterContainer.clientWidth,\n //                 height: matterContainer.clientHeight,\n //             }\n //         }),\n //         this.objects.runner = this.modules.Runner.create(),\n //         this.objects.mouse = this.modules.Mouse.create(this.objects.render.canvas),\n //         this.objects.mouseConstraint = this.modules.MouseConstraint.create(this.objects.engine, {\n //             mouse: this.objects.mouse,\n //             constraint: {\n //                 stiffness: 0.2,\n //                 render: {\n //                     visible: false\n //                 }\n //             }\n //         })\n //     }\n // }\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDNUMsc0RBQXNEO0NBQ3RELHdEQUF3RDtDQUN4RCxnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLDhEQUE4RDtDQUM5RCxzRkFBc0Y7Q0FDdEYsb0dBQW9HO0NBQ3BHLHlDQUF5QztDQUN6Qyw0QkFBNEI7Q0FDNUIsa0NBQWtDO0NBQ2xDLDRCQUE0QjtDQUM1QixxQ0FBcUM7Q0FDckMsb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsUUFBUTtDQUNSLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbWF0dGVyVG9vbHMudHM/ODA0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWF0dGVyLCB7IEV2ZW50cywgRW5naW5lLCBXb3JsZCwgQm9kaWVzIH0gZnJvbSBcIm1hdHRlci1qc1wiO1xuaW1wb3J0IGlvLCB7IFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCJcblxuaW50ZXJmYWNlIE1hdHRlck1vZHVsZXMge1xuICAgIEVuZ2luZTogdHlwZW9mIE1hdHRlci5FbmdpbmU7XG4gICAgUmVuZGVyOiB0eXBlb2YgTWF0dGVyLlJlbmRlcjtcbiAgICBSdW5uZXI6IHR5cGVvZiBNYXR0ZXIuUnVubmVyO1xuICAgIEJvZGllczogdHlwZW9mIE1hdHRlci5Cb2RpZXM7XG4gICAgQm9keTogdHlwZW9mIE1hdHRlci5Cb2R5O1xuICAgIENvbXBvc2l0ZTogdHlwZW9mIE1hdHRlci5Db21wb3NpdGU7XG4gICAgTW91c2U6IHR5cGVvZiBNYXR0ZXIuTW91c2U7XG4gICAgTW91c2VDb25zdHJhaW50OiB0eXBlb2YgTWF0dGVyLk1vdXNlQ29uc3RyYWludDtcbn1cblxuaW50ZXJmYWNlIE1hdHRlck9iamVjdHMge1xuICAgIGVuZ2luZTogYW55XG4gICAgcmVuZGVyOiBhbnlcbiAgICBydW5uZXI6IGFueVxuICAgIG1vdXNlOiBhbnlcbiAgICBtb3VzZUNvbnN0cmFpbnQ6IGFueVxufVxuXG5pbnRlcmZhY2UgTWF0dGVyQm9kaWVzIHtcbiAgICBiYWxsOiBNYXR0ZXIuQm9keVxuICAgIGxlZnRQYWRkbGU6IE1hdHRlci5Cb2R5XG4gICAgcmlnaHRQYWRkbGU6IE1hdHRlci5Cb2R5XG4gICAgbXlQYWRkbGU6IE1hdHRlci5Cb2R5XG4gICAgb3RoZXJzUGFkZGxlOiBNYXR0ZXIuQm9keVxuICAgIGdyb3VuZDogTWF0dGVyLkJvZHlcbiAgICByb29mOiBNYXR0ZXIuQm9keVxuICAgIHdhbGw6IE1hdHRlci5Cb2R5XG4gICAgd2FsbExlZnQ6IE1hdHRlci5Cb2R5XG59XG5pbnRlcmZhY2UgbWVhc3VyZW1lbnRze1xuICAgIGRpdkhlaWdodDogbnVtYmVyLFxuICAgIGRpdldpZHRoOiBudW1iZXIsXG4gICAgd2FsbEJvdHRvbTp7IHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9LFxuICAgIHdhbGxUb3A6eyB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfSxcbiAgICB3YWxsTGVmdDp7IHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9LFxuICAgIHdhbGxSaWdodDp7IHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9LFxufVxuZnVuY3Rpb24gc2F2ZU1lYXN1cmVtZW50cyhkaXY6IEhUTUxFbGVtZW50LCBvYmo6IG1lYXN1cmVtZW50cyl7XG4gICAgb2JqID0ge1xuICAgICAgICBkaXZIZWlnaHQ6IGRpdi5jbGllbnRIZWlnaHQsXG4gICAgICAgIGRpdldpZHRoOiBkaXYuY2xpZW50V2lkdGgsXG4gICAgICAgIHdhbGxCb3R0b206IHt4OiBkaXYuY2xpZW50V2lkdGggLyAyLCB5IDogZGl2LmNsaWVudEhlaWdodCwgd2lkdGg6IGRpdi5jbGllbnRXaWR0aCwgaGVpZ2h0OiAyMH0sXG4gICAgICAgIHdhbGxUb3A6IHt4OiBkaXYuY2xpZW50V2lkdGggLyAyLCB5IDogMCwgd2lkdGg6IGRpdi5jbGllbnRXaWR0aCwgaGVpZ2h0OiAyMH0sXG4gICAgICAgIHdhbGxMZWZ0OiB7eDogMCwgeSA6IGRpdi5jbGllbnRIZWlnaHQgLyAyLCB3aWR0aDogMjAsIGhlaWdodDogZGl2LmNsaWVudEhlaWdodH0sXG4gICAgICAgIHdhbGxSaWdodDoge3g6IGRpdi5jbGllbnRXaWR0aCAsIHkgOiBkaXYuY2xpZW50SGVpZ2h0IC8gMiwgd2lkdGg6IDIwLCBoZWlnaHQ6IGRpdi5jbGllbnRIZWlnaHR9LFxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBtYXR0ZXJKc01vZHVsZXMge1xuICAgIHNvY2tldDogU29ja2V0XG4gICAgbW9kdWxlczogTWF0dGVyTW9kdWxlcztcbiAgICBvYmplY3RzOiBNYXR0ZXJPYmplY3RzID0geyBlbmdpbmU6IG51bGwsIHJlbmRlcjogbnVsbCwgcnVubmVyOiBudWxsLCBtb3VzZTogbnVsbCwgbW91c2VDb25zdHJhaW50OiBudWxsIH07XG4gICAgYm9kaWVzOiBNYXR0ZXJCb2RpZXNcbiAgICBwYWRkbGVTaWRlOiBzdHJpbmcgPSBcIlwiXG4gICAgbWF0dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXR0ZXItQ29udGFpbmVyXCIpIGFzIEhUTUxFbGVtZW50XG4gICAgb2JqOiBtZWFzdXJlbWVudHNcbiAgICBjb25zdHJ1Y3Rvcihyb29tSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjMwMDgnKTtcbiAgICAgICAgY29uc3QgbWF0dGVyQ29udGFpbmVyID0ge3dpZHRoOiB0aGlzLm1hdHRlckNvbnRhaW5lci5jbGllbnRXaWR0aCwgaGVpZ2h0OiB0aGlzLm1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQgfVxuICAgICAgICBzYXZlTWVhc3VyZW1lbnRzKHRoaXMubWF0dGVyQ29udGFpbmVyLCB0aGlzLm9iailcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnam9pblJvb20nLCB7IHJvb21JZDogcm9vbUlkICwgbWF0dGVyQ29udGFpbmVyIH0gKTtcbiAgICAgICAgdGhpcy5tb2R1bGVzID0ge1xuICAgICAgICAgICAgRW5naW5lOiBNYXR0ZXIuRW5naW5lLFxuICAgICAgICAgICAgUmVuZGVyOiBNYXR0ZXIuUmVuZGVyLFxuICAgICAgICAgICAgUnVubmVyOiBNYXR0ZXIuUnVubmVyLFxuICAgICAgICAgICAgQm9kaWVzOiBNYXR0ZXIuQm9kaWVzLFxuICAgICAgICAgICAgQm9keTogTWF0dGVyLkJvZHksXG4gICAgICAgICAgICBDb21wb3NpdGU6IE1hdHRlci5Db21wb3NpdGUsXG4gICAgICAgICAgICBNb3VzZTogTWF0dGVyLk1vdXNlLFxuICAgICAgICAgICAgTW91c2VDb25zdHJhaW50OiBNYXR0ZXIuTW91c2VDb25zdHJhaW50LFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9kaWVzID0ge1xuICAgICAgICAgICAgYmFsbDogdGhpcy5tb2R1bGVzLkJvZGllcy5jaXJjbGUoNDAwLCAyMDAsIDIwKSxcblxuICAgICAgICAgICAgbGVmdFBhZGRsZTogdGhpcy5tb2R1bGVzLkJvZGllcy5yZWN0YW5nbGUoNTAsIDMwMCwgNDAsIDIwMCwge1xuICAgICAgICAgICAgICAgIGlzU3RhdGljOiB0cnVlLCByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbFN0eWxlOiAnZ3JlZW4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByaWdodFBhZGRsZTogdGhpcy5tb2R1bGVzLkJvZGllcy5yZWN0YW5nbGUoMTAwMCAtIDUwLCAzMDAsIDQwLCAyMDAsIHtcbiAgICAgICAgICAgICAgICBpc1N0YXRpYzogdHJ1ZSwgcmVuZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJ3JlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG15UGFkZGxlOiB0aGlzLm1vZHVsZXMuQm9kaWVzLnJlY3RhbmdsZSgwLCAwLCAwLCAwLCB7IGlzU3RhdGljOiB0cnVlIH0pLFxuICAgICAgICAgICAgb3RoZXJzUGFkZGxlOiB0aGlzLm1vZHVsZXMuQm9kaWVzLnJlY3RhbmdsZSgwLCAwLCAwLCAwLCB7IGlzU3RhdGljOiB0cnVlIH0pLFxuICAgICAgICAgICAgZ3JvdW5kOiB0aGlzLm1vZHVsZXMuQm9kaWVzLnJlY3RhbmdsZSg1MDAsIDAsIDEwMDAsIDIwLCB7XG4gICAgICAgICAgICAgICAgaXNTdGF0aWM6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJ2JsdWUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByb29mOiB0aGlzLm1vZHVsZXMuQm9kaWVzLnJlY3RhbmdsZSg1MDAsIDYwMCwgMTAwMCwgMjAsIHtcbiAgICAgICAgICAgICAgICBpc1N0YXRpYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbFN0eWxlOiAncmVkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgd2FsbDogdGhpcy5tb2R1bGVzLkJvZGllcy5yZWN0YW5nbGUoMTAwMCwgMzAwLCAyMCwgMTAwMCwge1xuICAgICAgICAgICAgICAgIGlzU3RhdGljOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgICAgICAgICBmaWxsU3R5bGU6ICdncmVlbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHdhbGxMZWZ0OiB0aGlzLm1vZHVsZXMuQm9kaWVzLnJlY3RhbmdsZSgwLCAzMDAsIDIwLCAxMDAwLCB7XG4gICAgICAgICAgICAgICAgaXNTdGF0aWM6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJ2dyZWVuJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zb2NrZXQub24oXCJwYWRkbGVBc3NpZ25lZFwiLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWNpZXZlZCBwYWRkbGVcIiwgZGF0YSlcbiAgICAgICAgICAgIHRoaXMucGFkZGxlU2lkZSA9IGRhdGFcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZGRsZVNpZGUgPT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvZGllcy5teVBhZGRsZSA9IHRoaXMuYm9kaWVzLmxlZnRQYWRkbGVcbiAgICAgICAgICAgICAgICB0aGlzLmJvZGllcy5vdGhlcnNQYWRkbGUgPSB0aGlzLmJvZGllcy5yaWdodFBhZGRsZVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9kaWVzLm15UGFkZGxlID0gdGhpcy5ib2RpZXMucmlnaHRQYWRkbGVcbiAgICAgICAgICAgICAgICB0aGlzLmJvZGllcy5vdGhlcnNQYWRkbGUgPSB0aGlzLmJvZGllcy5sZWZ0UGFkZGxlXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy51cGRhdGVPdGhlclBhZGRsZSgpXG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgY3JlYXRlTW9kdWxlcygpIHtcbiAgICBpZiAodGhpcy5tYXR0ZXJDb250YWluZXIpe1xuXG4gICAgICAgIHRoaXMub2JqZWN0cy5lbmdpbmUgPSB0aGlzLm1vZHVsZXMuRW5naW5lLmNyZWF0ZSgpO1xuICAgICAgICB0aGlzLm9iamVjdHMucmVuZGVyID0gdGhpcy5tb2R1bGVzLlJlbmRlci5jcmVhdGUoe1xuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5tYXR0ZXJDb250YWluZXIsXG4gICAgICAgICAgICBlbmdpbmU6IHRoaXMub2JqZWN0cy5lbmdpbmUsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgIHdpcmVmcmFtZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dBbmdsZUluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5tYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLm1hdHRlckNvbnRhaW5lci5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICB0aGlzLm9iamVjdHMucnVubmVyID0gdGhpcy5tb2R1bGVzLlJ1bm5lci5jcmVhdGUoKSxcbiAgICAgICAgdGhpcy5vYmplY3RzLm1vdXNlID0gdGhpcy5tb2R1bGVzLk1vdXNlLmNyZWF0ZSh0aGlzLm9iamVjdHMucmVuZGVyLmNhbnZhcyksXG4gICAgICAgIHRoaXMub2JqZWN0cy5tb3VzZUNvbnN0cmFpbnQgPSB0aGlzLm1vZHVsZXMuTW91c2VDb25zdHJhaW50LmNyZWF0ZSh0aGlzLm9iamVjdHMuZW5naW5lLCB7XG4gICAgICAgICAgICBtb3VzZTogdGhpcy5vYmplY3RzLm1vdXNlLFxuICAgICAgICAgICAgY29uc3RyYWludDoge1xuICAgICAgICAgICAgICAgIHN0aWZmbmVzczogMC4yLFxuICAgICAgICAgICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG4gICAgLy8gY3JlYXRlTW9kdWxlcygpIHtcbiAgICAvLyAgICAgdGhpcy5vYmplY3RzLmVuZ2luZSA9IHRoaXMubW9kdWxlcy5FbmdpbmUuY3JlYXRlKCksXG4gICAgLy8gICAgICAgICB0aGlzLm9iamVjdHMucmVuZGVyID0gdGhpcy5tb2R1bGVzLlJlbmRlci5jcmVhdGUoe1xuICAgIC8vICAgICAgICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmJvZHksXG4gICAgLy8gICAgICAgICAgICAgZW5naW5lOiB0aGlzLm9iamVjdHMuZW5naW5lLFxuICAgIC8vICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgIC8vICAgICAgICAgICAgICAgICB3aXJlZnJhbWVzOiBmYWxzZSxcbiAgICAvLyAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMDAsXG4gICAgLy8gICAgICAgICAgICAgICAgIGhlaWdodDogNjAwLFxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pLFxuICAgIC8vICAgICAgICAgdGhpcy5vYmplY3RzLnJ1bm5lciA9IHRoaXMubW9kdWxlcy5SdW5uZXIuY3JlYXRlKCksXG4gICAgLy8gICAgICAgICB0aGlzLm9iamVjdHMubW91c2UgPSB0aGlzLm1vZHVsZXMuTW91c2UuY3JlYXRlKHRoaXMub2JqZWN0cy5yZW5kZXIuY2FudmFzKSxcbiAgICAvLyAgICAgICAgIHRoaXMub2JqZWN0cy5tb3VzZUNvbnN0cmFpbnQgPSB0aGlzLm1vZHVsZXMuTW91c2VDb25zdHJhaW50LmNyZWF0ZSh0aGlzLm9iamVjdHMuZW5naW5lLCB7XG4gICAgLy8gICAgICAgICAgICAgbW91c2U6IHRoaXMub2JqZWN0cy5tb3VzZSxcbiAgICAvLyAgICAgICAgICAgICBjb25zdHJhaW50OiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHN0aWZmbmVzczogMC4yLFxuICAgIC8vICAgICAgICAgICAgICAgICByZW5kZXI6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vIH1cblxuICAgIGNyZWF0ZUJvZGllcygpIHtcblxuICAgICAgICB0aGlzLm1vZHVsZXMuQ29tcG9zaXRlLmFkZCh0aGlzLm9iamVjdHMuZW5naW5lLndvcmxkLCBbdGhpcy5ib2RpZXMuYmFsbCwgdGhpcy5ib2RpZXMubGVmdFBhZGRsZSwgdGhpcy5ib2RpZXMuZ3JvdW5kLCB0aGlzLmJvZGllcy5yb29mLCB0aGlzLmJvZGllcy53YWxsLCB0aGlzLmJvZGllcy53YWxsTGVmdCwgdGhpcy5ib2RpZXMucmlnaHRQYWRkbGVdKTtcbiAgICB9XG4gICAgZXZlbnRzKCkge1xuXG4gICAgICAgIEV2ZW50cy5vbih0aGlzLm9iamVjdHMubW91c2VDb25zdHJhaW50LCBcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2R1bGVzLkJvZHkuc2V0UG9zaXRpb24odGhpcy5ib2RpZXMubXlQYWRkbGUsIHsgeDogdGhpcy5ib2RpZXMubXlQYWRkbGUucG9zaXRpb24ueCwgeTogZS5tb3VzZS5wb3NpdGlvbi55IH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ib2RpZXMubXlQYWRkbGUpXG4gICAgICAgICAgICB0aGlzLnNvY2tldD8uZW1pdCh0aGlzLnBhZGRsZVNpZGUsIHsgeDogdGhpcy5ib2RpZXMubXlQYWRkbGUucG9zaXRpb24ueCwgeTogZS5tb3VzZS5wb3NpdGlvbi55IH0pXG5cbiAgICAgICAgfSlcblxuICAgICAgICBFdmVudHMub24odGhpcy5vYmplY3RzLm1vdXNlQ29uc3RyYWludCwgXCJtb3VzZXVwXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZHVsZXMuQm9keS5zZXRWZWxvY2l0eSh0aGlzLmJvZGllcy5iYWxsLCB7IHg6IDUsIHk6IDUgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcnVuKCkge1xuICAgICAgICB0aGlzLm1vZHVsZXMuQ29tcG9zaXRlLmFkZCh0aGlzLm9iamVjdHMuZW5naW5lLndvcmxkLCBbdGhpcy5vYmplY3RzLm1vdXNlQ29uc3RyYWludF0pO1xuXG4gICAgICAgIHRoaXMubW9kdWxlcy5SZW5kZXIucnVuKHRoaXMub2JqZWN0cy5yZW5kZXIpO1xuICAgICAgICB0aGlzLm1vZHVsZXMuUnVubmVyLnJ1bih0aGlzLm9iamVjdHMucnVubmVyLCB0aGlzLm9iamVjdHMuZW5naW5lKTtcbiAgICB9XG5cbiAgICBzb2NrZXRTdHVmZigpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2JhbGxQb3NpdGlvbicsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGJhbGwncyBwb3NpdGlvblxuICAgICAgICAgICAgdGhpcy5ib2RpZXMuYmFsbC5wb3NpdGlvbi54ID0gZGF0YS54O1xuICAgICAgICAgICAgdGhpcy5ib2RpZXMuYmFsbC5wb3NpdGlvbi55ID0gZGF0YS55O1xuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgdXBkYXRlT3RoZXJQYWRkbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhZGRsZVNpZGUubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBvdGhlcidzIHBhZGRsZSBwb3NpdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMucGFkZGxlU2lkZSA9PSBcImxlZnRcIilcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5vbihcInJpZ2h0XCIsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kdWxlcy5Cb2R5LnNldFBvc2l0aW9uKHRoaXMuYm9kaWVzLm90aGVyc1BhZGRsZSwgeyB4OiBkYXRhLngsIHk6IGRhdGEueSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5vbihcImxlZnRcIiwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2R1bGVzLkJvZHkuc2V0UG9zaXRpb24odGhpcy5ib2RpZXMub3RoZXJzUGFkZGxlLCB7IHg6IGRhdGEueCwgeTogZGF0YS55IH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG5cblxuXG5cbi8vIGNyZWF0ZU1vZHVsZXMoKSB7XG4vLyAgICAgY29uc3QgbWF0dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYXR0ZXItQ29udGFpbmVyXCIpIGFzIEhUTUxFbGVtZW50XG4vLyAgICAgaWYgKG1hdHRlckNvbnRhaW5lcil7XG5cbi8vICAgICAgICAgdGhpcy5vYmplY3RzLmVuZ2luZSA9IHRoaXMubW9kdWxlcy5FbmdpbmUuY3JlYXRlKCk7XG4vLyAgICAgICAgIHRoaXMub2JqZWN0cy5yZW5kZXIgPSB0aGlzLm1vZHVsZXMuUmVuZGVyLmNyZWF0ZSh7XG4vLyAgICAgICAgICAgICBlbGVtZW50OiBtYXR0ZXJDb250YWluZXIsXG4vLyAgICAgICAgICAgICBlbmdpbmU6IHRoaXMub2JqZWN0cy5lbmdpbmUsXG4vLyAgICAgICAgICAgICBvcHRpb25zOiB7XG4vLyAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuLy8gICAgICAgICAgICAgICAgIHdpcmVmcmFtZXM6IHRydWUsXG4vLyAgICAgICAgICAgICAgICAgc2hvd0FuZ2xlSW5kaWNhdG9yOiB0cnVlLFxuLy8gICAgICAgICAgICAgICAgIHdpZHRoOiBtYXR0ZXJDb250YWluZXIuY2xpZW50V2lkdGgsXG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiBtYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0LFxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KSxcbi8vICAgICAgICAgdGhpcy5vYmplY3RzLnJ1bm5lciA9IHRoaXMubW9kdWxlcy5SdW5uZXIuY3JlYXRlKCksXG4vLyAgICAgICAgIHRoaXMub2JqZWN0cy5tb3VzZSA9IHRoaXMubW9kdWxlcy5Nb3VzZS5jcmVhdGUodGhpcy5vYmplY3RzLnJlbmRlci5jYW52YXMpLFxuLy8gICAgICAgICB0aGlzLm9iamVjdHMubW91c2VDb25zdHJhaW50ID0gdGhpcy5tb2R1bGVzLk1vdXNlQ29uc3RyYWludC5jcmVhdGUodGhpcy5vYmplY3RzLmVuZ2luZSwge1xuLy8gICAgICAgICAgICAgbW91c2U6IHRoaXMub2JqZWN0cy5tb3VzZSxcbi8vICAgICAgICAgICAgIGNvbnN0cmFpbnQ6IHtcbi8vICAgICAgICAgICAgICAgICBzdGlmZm5lc3M6IDAuMixcbi8vICAgICAgICAgICAgICAgICByZW5kZXI6IHtcbi8vICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2Vcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuLy8gfSJdLCJuYW1lcyI6WyJNYXR0ZXIiLCJFdmVudHMiLCJpbyIsInNhdmVNZWFzdXJlbWVudHMiLCJkaXYiLCJvYmoiLCJkaXZIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJkaXZXaWR0aCIsImNsaWVudFdpZHRoIiwid2FsbEJvdHRvbSIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJ3YWxsVG9wIiwid2FsbExlZnQiLCJ3YWxsUmlnaHQiLCJtYXR0ZXJKc01vZHVsZXMiLCJjcmVhdGVNb2R1bGVzIiwibWF0dGVyQ29udGFpbmVyIiwib2JqZWN0cyIsImVuZ2luZSIsIm1vZHVsZXMiLCJFbmdpbmUiLCJjcmVhdGUiLCJyZW5kZXIiLCJSZW5kZXIiLCJlbGVtZW50Iiwib3B0aW9ucyIsImJhY2tncm91bmQiLCJ3aXJlZnJhbWVzIiwic2hvd0FuZ2xlSW5kaWNhdG9yIiwicnVubmVyIiwiUnVubmVyIiwibW91c2UiLCJNb3VzZSIsImNhbnZhcyIsIm1vdXNlQ29uc3RyYWludCIsIk1vdXNlQ29uc3RyYWludCIsImNvbnN0cmFpbnQiLCJzdGlmZm5lc3MiLCJ2aXNpYmxlIiwiY3JlYXRlQm9kaWVzIiwiQ29tcG9zaXRlIiwiYWRkIiwid29ybGQiLCJib2RpZXMiLCJiYWxsIiwibGVmdFBhZGRsZSIsImdyb3VuZCIsInJvb2YiLCJ3YWxsIiwicmlnaHRQYWRkbGUiLCJldmVudHMiLCJvbiIsImUiLCJCb2R5Iiwic2V0UG9zaXRpb24iLCJteVBhZGRsZSIsInBvc2l0aW9uIiwiY29uc29sZSIsImxvZyIsInNvY2tldCIsImVtaXQiLCJwYWRkbGVTaWRlIiwic2V0VmVsb2NpdHkiLCJydW4iLCJzb2NrZXRTdHVmZiIsImRhdGEiLCJ1cGRhdGVPdGhlclBhZGRsZSIsImxlbmd0aCIsIm90aGVyc1BhZGRsZSIsImNvbnN0cnVjdG9yIiwicm9vbUlkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiQm9kaWVzIiwiY2lyY2xlIiwicmVjdGFuZ2xlIiwiaXNTdGF0aWMiLCJmaWxsU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/matterTools.ts\n"));

/***/ })

});