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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"matterJsModules\": function() { return /* binding */ matterJsModules; }\n/* harmony export */ });\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\n\n// function saveMeasurements(div: HTMLElement, obj: measurements){\n//     obj = {\n//         divHeight: div.clientHeight,\n//         divWidth: div.clientWidth,\n//         wallBottom: {x: div.clientWidth / 2, y : div.clientHeight, width: div.clientWidth, height: 20},\n//         wallTop: {x: div.clientWidth / 2, y : 0, width: div.clientWidth, height: 20},\n//         wallLeft: {x: 0, y : div.clientHeight / 2, width: 20, height: div.clientHeight},\n//         wallRight: {x: div.clientWidth , y : div.clientHeight / 2, width: 20, height: div.clientHeight},\n//     }\n// }\nclass matterJsModules {\n    saveMeasurements(div) {\n        const obj = {\n            divHeight: div.clientHeight,\n            divWidth: div.clientWidth,\n            wallBottom: {\n                x: div.clientWidth / 2,\n                y: div.clientHeight,\n                width: div.clientWidth,\n                height: 20\n            },\n            wallTop: {\n                x: div.clientWidth / 2,\n                y: 0,\n                width: div.clientWidth,\n                height: 20\n            },\n            wallLeft: {\n                x: 0,\n                y: div.clientHeight / 2,\n                width: 20,\n                height: div.clientHeight\n            },\n            wallRight: {\n                x: div.clientWidth,\n                y: div.clientHeight / 2,\n                width: 20,\n                height: div.clientHeight\n            }\n        };\n        return obj;\n    }\n    createModules() {\n        if (this.matterContainer) {\n            this.objects.engine = this.modules.Engine.create();\n            this.objects.render = this.modules.Render.create({\n                element: this.matterContainer,\n                engine: this.objects.engine,\n                options: {\n                    background: \"transparent\",\n                    wireframes: false,\n                    showAngleIndicator: true,\n                    width: this.matterContainer.clientWidth,\n                    height: this.matterContainer.clientHeight\n                }\n            }), this.objects.runner = this.modules.Runner.create(), this.objects.mouse = this.modules.Mouse.create(this.objects.render.canvas), this.objects.mouseConstraint = this.modules.MouseConstraint.create(this.objects.engine, {\n                mouse: this.objects.mouse,\n                constraint: {\n                    stiffness: 0.2,\n                    render: {\n                        visible: false\n                    }\n                }\n            });\n        }\n    }\n    // createModules() {\n    //     this.objects.engine = this.modules.Engine.create(),\n    //         this.objects.render = this.modules.Render.create({\n    //             element: document.body,\n    //             engine: this.objects.engine,\n    //             options: {\n    //                 background: \"transparent\",\n    //                 wireframes: false,\n    //                 width: 1000,\n    //                 height: 600,\n    //             }\n    //         }),\n    //         this.objects.runner = this.modules.Runner.create(),\n    //         this.objects.mouse = this.modules.Mouse.create(this.objects.render.canvas),\n    //         this.objects.mouseConstraint = this.modules.MouseConstraint.create(this.objects.engine, {\n    //             mouse: this.objects.mouse,\n    //             constraint: {\n    //                 stiffness: 0.2,\n    //                 render: {\n    //                     visible: false\n    //                 }\n    //             }\n    //         })\n    // }\n    createBodies() {\n        this.modules.Composite.add(this.objects.engine.world, [\n            this.bodies.ball,\n            this.bodies.leftPaddle,\n            this.bodies.ground,\n            this.bodies.roof,\n            this.bodies.wall,\n            this.bodies.wallLeft,\n            this.bodies.rightPaddle\n        ]);\n    }\n    events() {\n        matter_js__WEBPACK_IMPORTED_MODULE_0__.Events.on(this.objects.mouseConstraint, \"mousemove\", (e)=>{\n            var _this_socket;\n            this.modules.Body.setPosition(this.bodies.myPaddle, {\n                x: this.bodies.myPaddle.position.x,\n                y: e.mouse.position.y\n            });\n            console.log(this.bodies.myPaddle);\n            (_this_socket = this.socket) === null || _this_socket === void 0 ? void 0 : _this_socket.emit(this.paddleSide, {\n                x: this.bodies.myPaddle.position.x,\n                y: e.mouse.position.y\n            });\n        });\n        matter_js__WEBPACK_IMPORTED_MODULE_0__.Events.on(this.objects.mouseConstraint, \"mouseup\", (e)=>{\n            this.modules.Body.setVelocity(this.bodies.ball, {\n                x: 5,\n                y: 5\n            });\n        });\n    }\n    run() {\n        this.modules.Composite.add(this.objects.engine.world, [\n            this.objects.mouseConstraint\n        ]);\n        this.modules.Render.run(this.objects.render);\n        this.modules.Runner.run(this.objects.runner, this.objects.engine);\n    }\n    socketStuff() {\n        this.socket.on(\"ballPosition\", (data)=>{\n            // Update the ball's position\n            this.bodies.ball.position.x = data.x;\n            this.bodies.ball.position.y = data.y;\n        });\n    }\n    updateOtherPaddle() {\n        if (this.paddleSide.length > 1) {\n            // Update the other's paddle position\n            if (this.paddleSide == \"left\") this.socket.on(\"right\", (data)=>{\n                this.modules.Body.setPosition(this.bodies.othersPaddle, {\n                    x: data.x,\n                    y: data.y\n                });\n            });\n            else this.socket.on(\"left\", (data)=>{\n                this.modules.Body.setPosition(this.bodies.othersPaddle, {\n                    x: data.x,\n                    y: data.y\n                });\n            });\n        }\n    }\n    constructor(roomId){\n        this.objects = {\n            engine: null,\n            render: null,\n            runner: null,\n            mouse: null,\n            mouseConstraint: null\n        };\n        this.paddleSide = \"\";\n        this.matterContainer = document.querySelector(\"#matter-Container\");\n        this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"http://localhost:3008\");\n        this.obj = this.saveMeasurements(this.matterContainer);\n        this.socket.emit(\"joinRoom\", {\n            roomId: roomId,\n            c: this.obj\n        });\n        this.modules = {\n            Engine: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Engine),\n            Render: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Render),\n            Runner: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner),\n            Bodies: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies),\n            Body: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Body),\n            Composite: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite),\n            Mouse: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Mouse),\n            MouseConstraint: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().MouseConstraint)\n        };\n        this.bodies = {\n            ball: this.modules.Bodies.circle(400, 200, 20),\n            leftPaddle: this.modules.Bodies.rectangle(50, 300, 40, 200, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"green\"\n                }\n            }),\n            rightPaddle: this.modules.Bodies.rectangle(1000 - 50, 300, 40, 200, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"red\"\n                }\n            }),\n            myPaddle: this.modules.Bodies.rectangle(0, 0, 0, 0, {\n                isStatic: true\n            }),\n            othersPaddle: this.modules.Bodies.rectangle(0, 0, 0, 0, {\n                isStatic: true\n            }),\n            ground: this.modules.Bodies.rectangle(500, 0, 1000, 20, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"blue\"\n                }\n            }),\n            roof: this.modules.Bodies.rectangle(500, 600, 1000, 20, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"red\"\n                }\n            }),\n            wall: this.modules.Bodies.rectangle(1000, 300, 20, 1000, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"green\"\n                }\n            }),\n            wallLeft: this.modules.Bodies.rectangle(0, 300, 20, 1000, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"green\"\n                }\n            })\n        };\n        this.socket.on(\"paddleAssigned\", (data)=>{\n            console.log(\"recieved paddle\", data);\n            this.paddleSide = data;\n            if (this.paddleSide == \"left\") {\n                this.bodies.myPaddle = this.bodies.leftPaddle;\n                this.bodies.othersPaddle = this.bodies.rightPaddle;\n            } else {\n                this.bodies.myPaddle = this.bodies.rightPaddle;\n                this.bodies.othersPaddle = this.bodies.leftPaddle;\n            }\n            this.updateOtherPaddle();\n        });\n    }\n} // createModules() {\n //     const matterContainer = document.querySelector(\"#matter-Container\") as HTMLElement\n //     if (matterContainer){\n //         this.objects.engine = this.modules.Engine.create();\n //         this.objects.render = this.modules.Render.create({\n //             element: matterContainer,\n //             engine: this.objects.engine,\n //             options: {\n //                 background: \"transparent\",\n //                 wireframes: true,\n //                 showAngleIndicator: true,\n //                 width: matterContainer.clientWidth,\n //                 height: matterContainer.clientHeight,\n //             }\n //         }),\n //         this.objects.runner = this.modules.Runner.create(),\n //         this.objects.mouse = this.modules.Mouse.create(this.objects.render.canvas),\n //         this.objects.mouseConstraint = this.modules.MouseConstraint.create(this.objects.engine, {\n //             mouse: this.objects.mouse,\n //             constraint: {\n //                 stiffness: 0.2,\n //                 render: {\n //                     visible: false\n //                 }\n //             }\n //         })\n //     }\n // }\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBd0M7Q0FDeEMsMkNBQTJDO0NBQzNDLHlCQUF5QjtDQUN6Qiw2Q0FBNkM7Q0FDN0Msb0NBQW9DO0NBQ3BDLDRDQUE0QztDQUM1QyxzREFBc0Q7Q0FDdEQsd0RBQXdEO0NBQ3hELGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsOERBQThEO0NBQzlELHNGQUFzRjtDQUN0RixvR0FBb0c7Q0FDcEcseUNBQXlDO0NBQ3pDLDRCQUE0QjtDQUM1QixrQ0FBa0M7Q0FDbEMsNEJBQTRCO0NBQzVCLHFDQUFxQztDQUNyQyxvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixRQUFRO0NBQ1IsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9tYXR0ZXJUb29scy50cz84MDQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXR0ZXIsIHsgRXZlbnRzLCBFbmdpbmUsIFdvcmxkLCBCb2RpZXMgfSBmcm9tIFwibWF0dGVyLWpzXCI7XG5pbXBvcnQgaW8sIHsgU29ja2V0IH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIlxuXG5pbnRlcmZhY2UgTWF0dGVyTW9kdWxlcyB7XG4gICAgRW5naW5lOiB0eXBlb2YgTWF0dGVyLkVuZ2luZTtcbiAgICBSZW5kZXI6IHR5cGVvZiBNYXR0ZXIuUmVuZGVyO1xuICAgIFJ1bm5lcjogdHlwZW9mIE1hdHRlci5SdW5uZXI7XG4gICAgQm9kaWVzOiB0eXBlb2YgTWF0dGVyLkJvZGllcztcbiAgICBCb2R5OiB0eXBlb2YgTWF0dGVyLkJvZHk7XG4gICAgQ29tcG9zaXRlOiB0eXBlb2YgTWF0dGVyLkNvbXBvc2l0ZTtcbiAgICBNb3VzZTogdHlwZW9mIE1hdHRlci5Nb3VzZTtcbiAgICBNb3VzZUNvbnN0cmFpbnQ6IHR5cGVvZiBNYXR0ZXIuTW91c2VDb25zdHJhaW50O1xufVxuXG5pbnRlcmZhY2UgTWF0dGVyT2JqZWN0cyB7XG4gICAgZW5naW5lOiBhbnlcbiAgICByZW5kZXI6IGFueVxuICAgIHJ1bm5lcjogYW55XG4gICAgbW91c2U6IGFueVxuICAgIG1vdXNlQ29uc3RyYWludDogYW55XG59XG5cbmludGVyZmFjZSBNYXR0ZXJCb2RpZXMge1xuICAgIGJhbGw6IE1hdHRlci5Cb2R5XG4gICAgbGVmdFBhZGRsZTogTWF0dGVyLkJvZHlcbiAgICByaWdodFBhZGRsZTogTWF0dGVyLkJvZHlcbiAgICBteVBhZGRsZTogTWF0dGVyLkJvZHlcbiAgICBvdGhlcnNQYWRkbGU6IE1hdHRlci5Cb2R5XG4gICAgZ3JvdW5kOiBNYXR0ZXIuQm9keVxuICAgIHJvb2Y6IE1hdHRlci5Cb2R5XG4gICAgd2FsbDogTWF0dGVyLkJvZHlcbiAgICB3YWxsTGVmdDogTWF0dGVyLkJvZHlcbn1cbmludGVyZmFjZSBtZWFzdXJlbWVudHN7XG4gICAgZGl2SGVpZ2h0OiBudW1iZXIsXG4gICAgZGl2V2lkdGg6IG51bWJlcixcbiAgICB3YWxsQm90dG9tOnsgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH0sXG4gICAgd2FsbFRvcDp7IHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9LFxuICAgIHdhbGxMZWZ0OnsgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH0sXG4gICAgd2FsbFJpZ2h0OnsgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH0sXG59XG4vLyBmdW5jdGlvbiBzYXZlTWVhc3VyZW1lbnRzKGRpdjogSFRNTEVsZW1lbnQsIG9iajogbWVhc3VyZW1lbnRzKXtcbi8vICAgICBvYmogPSB7XG4vLyAgICAgICAgIGRpdkhlaWdodDogZGl2LmNsaWVudEhlaWdodCxcbi8vICAgICAgICAgZGl2V2lkdGg6IGRpdi5jbGllbnRXaWR0aCxcbi8vICAgICAgICAgd2FsbEJvdHRvbToge3g6IGRpdi5jbGllbnRXaWR0aCAvIDIsIHkgOiBkaXYuY2xpZW50SGVpZ2h0LCB3aWR0aDogZGl2LmNsaWVudFdpZHRoLCBoZWlnaHQ6IDIwfSxcbi8vICAgICAgICAgd2FsbFRvcDoge3g6IGRpdi5jbGllbnRXaWR0aCAvIDIsIHkgOiAwLCB3aWR0aDogZGl2LmNsaWVudFdpZHRoLCBoZWlnaHQ6IDIwfSxcbi8vICAgICAgICAgd2FsbExlZnQ6IHt4OiAwLCB5IDogZGl2LmNsaWVudEhlaWdodCAvIDIsIHdpZHRoOiAyMCwgaGVpZ2h0OiBkaXYuY2xpZW50SGVpZ2h0fSxcbi8vICAgICAgICAgd2FsbFJpZ2h0OiB7eDogZGl2LmNsaWVudFdpZHRoICwgeSA6IGRpdi5jbGllbnRIZWlnaHQgLyAyLCB3aWR0aDogMjAsIGhlaWdodDogZGl2LmNsaWVudEhlaWdodH0sXG4vLyAgICAgfVxuLy8gfVxuZXhwb3J0IGNsYXNzIG1hdHRlckpzTW9kdWxlcyB7XG4gICAgc29ja2V0OiBTb2NrZXRcbiAgICBtb2R1bGVzOiBNYXR0ZXJNb2R1bGVzO1xuICAgIG9iamVjdHM6IE1hdHRlck9iamVjdHMgPSB7IGVuZ2luZTogbnVsbCwgcmVuZGVyOiBudWxsLCBydW5uZXI6IG51bGwsIG1vdXNlOiBudWxsLCBtb3VzZUNvbnN0cmFpbnQ6IG51bGwgfTtcbiAgICBib2RpZXM6IE1hdHRlckJvZGllc1xuICAgIHBhZGRsZVNpZGU6IHN0cmluZyA9IFwiXCJcbiAgICBtYXR0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hdHRlci1Db250YWluZXJcIikgYXMgSFRNTEVsZW1lbnRcbiAgICBvYmo6IG1lYXN1cmVtZW50c1xuICAgIGNvbnN0cnVjdG9yKHJvb21JZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc29ja2V0ID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwOCcpO1xuICAgICAgICB0aGlzLm9iaiA9IHRoaXMuc2F2ZU1lYXN1cmVtZW50cyh0aGlzLm1hdHRlckNvbnRhaW5lcilcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnam9pblJvb20nLCB7IHJvb21JZDogcm9vbUlkICwgYzogdGhpcy5vYmogfSApO1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSB7XG4gICAgICAgICAgICBFbmdpbmU6IE1hdHRlci5FbmdpbmUsXG4gICAgICAgICAgICBSZW5kZXI6IE1hdHRlci5SZW5kZXIsXG4gICAgICAgICAgICBSdW5uZXI6IE1hdHRlci5SdW5uZXIsXG4gICAgICAgICAgICBCb2RpZXM6IE1hdHRlci5Cb2RpZXMsXG4gICAgICAgICAgICBCb2R5OiBNYXR0ZXIuQm9keSxcbiAgICAgICAgICAgIENvbXBvc2l0ZTogTWF0dGVyLkNvbXBvc2l0ZSxcbiAgICAgICAgICAgIE1vdXNlOiBNYXR0ZXIuTW91c2UsXG4gICAgICAgICAgICBNb3VzZUNvbnN0cmFpbnQ6IE1hdHRlci5Nb3VzZUNvbnN0cmFpbnQsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2RpZXMgPSB7XG4gICAgICAgICAgICBiYWxsOiB0aGlzLm1vZHVsZXMuQm9kaWVzLmNpcmNsZSg0MDAsIDIwMCwgMjApLFxuXG4gICAgICAgICAgICBsZWZ0UGFkZGxlOiB0aGlzLm1vZHVsZXMuQm9kaWVzLnJlY3RhbmdsZSg1MCwgMzAwLCA0MCwgMjAwLCB7XG4gICAgICAgICAgICAgICAgaXNTdGF0aWM6IHRydWUsIHJlbmRlcjoge1xuICAgICAgICAgICAgICAgICAgICBmaWxsU3R5bGU6ICdncmVlbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHJpZ2h0UGFkZGxlOiB0aGlzLm1vZHVsZXMuQm9kaWVzLnJlY3RhbmdsZSgxMDAwIC0gNTAsIDMwMCwgNDAsIDIwMCwge1xuICAgICAgICAgICAgICAgIGlzU3RhdGljOiB0cnVlLCByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbFN0eWxlOiAncmVkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbXlQYWRkbGU6IHRoaXMubW9kdWxlcy5Cb2RpZXMucmVjdGFuZ2xlKDAsIDAsIDAsIDAsIHsgaXNTdGF0aWM6IHRydWUgfSksXG4gICAgICAgICAgICBvdGhlcnNQYWRkbGU6IHRoaXMubW9kdWxlcy5Cb2RpZXMucmVjdGFuZ2xlKDAsIDAsIDAsIDAsIHsgaXNTdGF0aWM6IHRydWUgfSksXG4gICAgICAgICAgICBncm91bmQ6IHRoaXMubW9kdWxlcy5Cb2RpZXMucmVjdGFuZ2xlKDUwMCwgMCwgMTAwMCwgMjAsIHtcbiAgICAgICAgICAgICAgICBpc1N0YXRpYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbFN0eWxlOiAnYmx1ZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHJvb2Y6IHRoaXMubW9kdWxlcy5Cb2RpZXMucmVjdGFuZ2xlKDUwMCwgNjAwLCAxMDAwLCAyMCwge1xuICAgICAgICAgICAgICAgIGlzU3RhdGljOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgICAgICAgICBmaWxsU3R5bGU6ICdyZWQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB3YWxsOiB0aGlzLm1vZHVsZXMuQm9kaWVzLnJlY3RhbmdsZSgxMDAwLCAzMDAsIDIwLCAxMDAwLCB7XG4gICAgICAgICAgICAgICAgaXNTdGF0aWM6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJ2dyZWVuJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgd2FsbExlZnQ6IHRoaXMubW9kdWxlcy5Cb2RpZXMucmVjdGFuZ2xlKDAsIDMwMCwgMjAsIDEwMDAsIHtcbiAgICAgICAgICAgICAgICBpc1N0YXRpYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbFN0eWxlOiAnZ3JlZW4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvY2tldC5vbihcInBhZGRsZUFzc2lnbmVkXCIsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlY2lldmVkIHBhZGRsZVwiLCBkYXRhKVxuICAgICAgICAgICAgdGhpcy5wYWRkbGVTaWRlID0gZGF0YVxuICAgICAgICAgICAgaWYgKHRoaXMucGFkZGxlU2lkZSA9PSBcImxlZnRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9kaWVzLm15UGFkZGxlID0gdGhpcy5ib2RpZXMubGVmdFBhZGRsZVxuICAgICAgICAgICAgICAgIHRoaXMuYm9kaWVzLm90aGVyc1BhZGRsZSA9IHRoaXMuYm9kaWVzLnJpZ2h0UGFkZGxlXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2RpZXMubXlQYWRkbGUgPSB0aGlzLmJvZGllcy5yaWdodFBhZGRsZVxuICAgICAgICAgICAgICAgIHRoaXMuYm9kaWVzLm90aGVyc1BhZGRsZSA9IHRoaXMuYm9kaWVzLmxlZnRQYWRkbGVcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU90aGVyUGFkZGxlKClcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHNhdmVNZWFzdXJlbWVudHMoZGl2OiBIVE1MRWxlbWVudCl7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgIGRpdkhlaWdodDogZGl2LmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgIGRpdldpZHRoOiBkaXYuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICB3YWxsQm90dG9tOiB7eDogZGl2LmNsaWVudFdpZHRoIC8gMiwgeSA6IGRpdi5jbGllbnRIZWlnaHQsIHdpZHRoOiBkaXYuY2xpZW50V2lkdGgsIGhlaWdodDogMjB9LFxuICAgICAgICAgICAgd2FsbFRvcDoge3g6IGRpdi5jbGllbnRXaWR0aCAvIDIsIHkgOiAwLCB3aWR0aDogZGl2LmNsaWVudFdpZHRoLCBoZWlnaHQ6IDIwfSxcbiAgICAgICAgICAgIHdhbGxMZWZ0OiB7eDogMCwgeSA6IGRpdi5jbGllbnRIZWlnaHQgLyAyLCB3aWR0aDogMjAsIGhlaWdodDogZGl2LmNsaWVudEhlaWdodH0sXG4gICAgICAgICAgICB3YWxsUmlnaHQ6IHt4OiBkaXYuY2xpZW50V2lkdGggLCB5IDogZGl2LmNsaWVudEhlaWdodCAvIDIsIHdpZHRoOiAyMCwgaGVpZ2h0OiBkaXYuY2xpZW50SGVpZ2h0fSxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqXG4gICAgfVxuICAgIGNyZWF0ZU1vZHVsZXMoKSB7XG4gICAgaWYgKHRoaXMubWF0dGVyQ29udGFpbmVyKXtcblxuICAgICAgICB0aGlzLm9iamVjdHMuZW5naW5lID0gdGhpcy5tb2R1bGVzLkVuZ2luZS5jcmVhdGUoKTtcbiAgICAgICAgdGhpcy5vYmplY3RzLnJlbmRlciA9IHRoaXMubW9kdWxlcy5SZW5kZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMubWF0dGVyQ29udGFpbmVyLFxuICAgICAgICAgICAgZW5naW5lOiB0aGlzLm9iamVjdHMuZW5naW5lLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICB3aXJlZnJhbWVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93QW5nbGVJbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMubWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5tYXR0ZXJDb250YWluZXIuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdGhpcy5vYmplY3RzLnJ1bm5lciA9IHRoaXMubW9kdWxlcy5SdW5uZXIuY3JlYXRlKCksXG4gICAgICAgIHRoaXMub2JqZWN0cy5tb3VzZSA9IHRoaXMubW9kdWxlcy5Nb3VzZS5jcmVhdGUodGhpcy5vYmplY3RzLnJlbmRlci5jYW52YXMpLFxuICAgICAgICB0aGlzLm9iamVjdHMubW91c2VDb25zdHJhaW50ID0gdGhpcy5tb2R1bGVzLk1vdXNlQ29uc3RyYWludC5jcmVhdGUodGhpcy5vYmplY3RzLmVuZ2luZSwge1xuICAgICAgICAgICAgbW91c2U6IHRoaXMub2JqZWN0cy5tb3VzZSxcbiAgICAgICAgICAgIGNvbnN0cmFpbnQ6IHtcbiAgICAgICAgICAgICAgICBzdGlmZm5lc3M6IDAuMixcbiAgICAgICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuICAgIC8vIGNyZWF0ZU1vZHVsZXMoKSB7XG4gICAgLy8gICAgIHRoaXMub2JqZWN0cy5lbmdpbmUgPSB0aGlzLm1vZHVsZXMuRW5naW5lLmNyZWF0ZSgpLFxuICAgIC8vICAgICAgICAgdGhpcy5vYmplY3RzLnJlbmRlciA9IHRoaXMubW9kdWxlcy5SZW5kZXIuY3JlYXRlKHtcbiAgICAvLyAgICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5ib2R5LFxuICAgIC8vICAgICAgICAgICAgIGVuZ2luZTogdGhpcy5vYmplY3RzLmVuZ2luZSxcbiAgICAvLyAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICAvLyAgICAgICAgICAgICAgICAgd2lyZWZyYW1lczogZmFsc2UsXG4gICAgLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAwLFxuICAgIC8vICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMCxcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KSxcbiAgICAvLyAgICAgICAgIHRoaXMub2JqZWN0cy5ydW5uZXIgPSB0aGlzLm1vZHVsZXMuUnVubmVyLmNyZWF0ZSgpLFxuICAgIC8vICAgICAgICAgdGhpcy5vYmplY3RzLm1vdXNlID0gdGhpcy5tb2R1bGVzLk1vdXNlLmNyZWF0ZSh0aGlzLm9iamVjdHMucmVuZGVyLmNhbnZhcyksXG4gICAgLy8gICAgICAgICB0aGlzLm9iamVjdHMubW91c2VDb25zdHJhaW50ID0gdGhpcy5tb2R1bGVzLk1vdXNlQ29uc3RyYWludC5jcmVhdGUodGhpcy5vYmplY3RzLmVuZ2luZSwge1xuICAgIC8vICAgICAgICAgICAgIG1vdXNlOiB0aGlzLm9iamVjdHMubW91c2UsXG4gICAgLy8gICAgICAgICAgICAgY29uc3RyYWludDoge1xuICAgIC8vICAgICAgICAgICAgICAgICBzdGlmZm5lc3M6IDAuMixcbiAgICAvLyAgICAgICAgICAgICAgICAgcmVuZGVyOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyB9XG5cbiAgICBjcmVhdGVCb2RpZXMoKSB7XG5cbiAgICAgICAgdGhpcy5tb2R1bGVzLkNvbXBvc2l0ZS5hZGQodGhpcy5vYmplY3RzLmVuZ2luZS53b3JsZCwgW3RoaXMuYm9kaWVzLmJhbGwsIHRoaXMuYm9kaWVzLmxlZnRQYWRkbGUsIHRoaXMuYm9kaWVzLmdyb3VuZCwgdGhpcy5ib2RpZXMucm9vZiwgdGhpcy5ib2RpZXMud2FsbCwgdGhpcy5ib2RpZXMud2FsbExlZnQsIHRoaXMuYm9kaWVzLnJpZ2h0UGFkZGxlXSk7XG4gICAgfVxuICAgIGV2ZW50cygpIHtcblxuICAgICAgICBFdmVudHMub24odGhpcy5vYmplY3RzLm1vdXNlQ29uc3RyYWludCwgXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW9kdWxlcy5Cb2R5LnNldFBvc2l0aW9uKHRoaXMuYm9kaWVzLm15UGFkZGxlLCB7IHg6IHRoaXMuYm9kaWVzLm15UGFkZGxlLnBvc2l0aW9uLngsIHk6IGUubW91c2UucG9zaXRpb24ueSB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYm9kaWVzLm15UGFkZGxlKVxuICAgICAgICAgICAgdGhpcy5zb2NrZXQ/LmVtaXQodGhpcy5wYWRkbGVTaWRlLCB7IHg6IHRoaXMuYm9kaWVzLm15UGFkZGxlLnBvc2l0aW9uLngsIHk6IGUubW91c2UucG9zaXRpb24ueSB9KVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgRXZlbnRzLm9uKHRoaXMub2JqZWN0cy5tb3VzZUNvbnN0cmFpbnQsIFwibW91c2V1cFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2R1bGVzLkJvZHkuc2V0VmVsb2NpdHkodGhpcy5ib2RpZXMuYmFsbCwgeyB4OiA1LCB5OiA1IH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJ1bigpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzLkNvbXBvc2l0ZS5hZGQodGhpcy5vYmplY3RzLmVuZ2luZS53b3JsZCwgW3RoaXMub2JqZWN0cy5tb3VzZUNvbnN0cmFpbnRdKTtcblxuICAgICAgICB0aGlzLm1vZHVsZXMuUmVuZGVyLnJ1bih0aGlzLm9iamVjdHMucmVuZGVyKTtcbiAgICAgICAgdGhpcy5tb2R1bGVzLlJ1bm5lci5ydW4odGhpcy5vYmplY3RzLnJ1bm5lciwgdGhpcy5vYmplY3RzLmVuZ2luZSk7XG4gICAgfVxuXG4gICAgc29ja2V0U3R1ZmYoKSB7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdiYWxsUG9zaXRpb24nLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBiYWxsJ3MgcG9zaXRpb25cbiAgICAgICAgICAgIHRoaXMuYm9kaWVzLmJhbGwucG9zaXRpb24ueCA9IGRhdGEueDtcbiAgICAgICAgICAgIHRoaXMuYm9kaWVzLmJhbGwucG9zaXRpb24ueSA9IGRhdGEueTtcbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIHVwZGF0ZU90aGVyUGFkZGxlKCkge1xuICAgICAgICBpZiAodGhpcy5wYWRkbGVTaWRlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgb3RoZXIncyBwYWRkbGUgcG9zaXRpb25cbiAgICAgICAgICAgIGlmICh0aGlzLnBhZGRsZVNpZGUgPT0gXCJsZWZ0XCIpXG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQub24oXCJyaWdodFwiLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXMuQm9keS5zZXRQb3NpdGlvbih0aGlzLmJvZGllcy5vdGhlcnNQYWRkbGUsIHsgeDogZGF0YS54LCB5OiBkYXRhLnkgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQub24oXCJsZWZ0XCIsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kdWxlcy5Cb2R5LnNldFBvc2l0aW9uKHRoaXMuYm9kaWVzLm90aGVyc1BhZGRsZSwgeyB4OiBkYXRhLngsIHk6IGRhdGEueSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxuXG5cblxuXG4vLyBjcmVhdGVNb2R1bGVzKCkge1xuLy8gICAgIGNvbnN0IG1hdHRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWF0dGVyLUNvbnRhaW5lclwiKSBhcyBIVE1MRWxlbWVudFxuLy8gICAgIGlmIChtYXR0ZXJDb250YWluZXIpe1xuXG4vLyAgICAgICAgIHRoaXMub2JqZWN0cy5lbmdpbmUgPSB0aGlzLm1vZHVsZXMuRW5naW5lLmNyZWF0ZSgpO1xuLy8gICAgICAgICB0aGlzLm9iamVjdHMucmVuZGVyID0gdGhpcy5tb2R1bGVzLlJlbmRlci5jcmVhdGUoe1xuLy8gICAgICAgICAgICAgZWxlbWVudDogbWF0dGVyQ29udGFpbmVyLFxuLy8gICAgICAgICAgICAgZW5naW5lOiB0aGlzLm9iamVjdHMuZW5naW5lLFxuLy8gICAgICAgICAgICAgb3B0aW9uczoge1xuLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbi8vICAgICAgICAgICAgICAgICB3aXJlZnJhbWVzOiB0cnVlLFxuLy8gICAgICAgICAgICAgICAgIHNob3dBbmdsZUluZGljYXRvcjogdHJ1ZSxcbi8vICAgICAgICAgICAgICAgICB3aWR0aDogbWF0dGVyQ29udGFpbmVyLmNsaWVudFdpZHRoLFxuLy8gICAgICAgICAgICAgICAgIGhlaWdodDogbWF0dGVyQ29udGFpbmVyLmNsaWVudEhlaWdodCxcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSksXG4vLyAgICAgICAgIHRoaXMub2JqZWN0cy5ydW5uZXIgPSB0aGlzLm1vZHVsZXMuUnVubmVyLmNyZWF0ZSgpLFxuLy8gICAgICAgICB0aGlzLm9iamVjdHMubW91c2UgPSB0aGlzLm1vZHVsZXMuTW91c2UuY3JlYXRlKHRoaXMub2JqZWN0cy5yZW5kZXIuY2FudmFzKSxcbi8vICAgICAgICAgdGhpcy5vYmplY3RzLm1vdXNlQ29uc3RyYWludCA9IHRoaXMubW9kdWxlcy5Nb3VzZUNvbnN0cmFpbnQuY3JlYXRlKHRoaXMub2JqZWN0cy5lbmdpbmUsIHtcbi8vICAgICAgICAgICAgIG1vdXNlOiB0aGlzLm9iamVjdHMubW91c2UsXG4vLyAgICAgICAgICAgICBjb25zdHJhaW50OiB7XG4vLyAgICAgICAgICAgICAgICAgc3RpZmZuZXNzOiAwLjIsXG4vLyAgICAgICAgICAgICAgICAgcmVuZGVyOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KVxuLy8gICAgIH1cbi8vIH0iXSwibmFtZXMiOlsiTWF0dGVyIiwiRXZlbnRzIiwiaW8iLCJtYXR0ZXJKc01vZHVsZXMiLCJzYXZlTWVhc3VyZW1lbnRzIiwiZGl2Iiwib2JqIiwiZGl2SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZGl2V2lkdGgiLCJjbGllbnRXaWR0aCIsIndhbGxCb3R0b20iLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0Iiwid2FsbFRvcCIsIndhbGxMZWZ0Iiwid2FsbFJpZ2h0IiwiY3JlYXRlTW9kdWxlcyIsIm1hdHRlckNvbnRhaW5lciIsIm9iamVjdHMiLCJlbmdpbmUiLCJtb2R1bGVzIiwiRW5naW5lIiwiY3JlYXRlIiwicmVuZGVyIiwiUmVuZGVyIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJiYWNrZ3JvdW5kIiwid2lyZWZyYW1lcyIsInNob3dBbmdsZUluZGljYXRvciIsInJ1bm5lciIsIlJ1bm5lciIsIm1vdXNlIiwiTW91c2UiLCJjYW52YXMiLCJtb3VzZUNvbnN0cmFpbnQiLCJNb3VzZUNvbnN0cmFpbnQiLCJjb25zdHJhaW50Iiwic3RpZmZuZXNzIiwidmlzaWJsZSIsImNyZWF0ZUJvZGllcyIsIkNvbXBvc2l0ZSIsImFkZCIsIndvcmxkIiwiYm9kaWVzIiwiYmFsbCIsImxlZnRQYWRkbGUiLCJncm91bmQiLCJyb29mIiwid2FsbCIsInJpZ2h0UGFkZGxlIiwiZXZlbnRzIiwib24iLCJlIiwiQm9keSIsInNldFBvc2l0aW9uIiwibXlQYWRkbGUiLCJwb3NpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJzb2NrZXQiLCJlbWl0IiwicGFkZGxlU2lkZSIsInNldFZlbG9jaXR5IiwicnVuIiwic29ja2V0U3R1ZmYiLCJkYXRhIiwidXBkYXRlT3RoZXJQYWRkbGUiLCJsZW5ndGgiLCJvdGhlcnNQYWRkbGUiLCJjb25zdHJ1Y3RvciIsInJvb21JZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImMiLCJCb2RpZXMiLCJjaXJjbGUiLCJyZWN0YW5nbGUiLCJpc1N0YXRpYyIsImZpbGxTdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/matterTools.ts\n"));

/***/ })

});