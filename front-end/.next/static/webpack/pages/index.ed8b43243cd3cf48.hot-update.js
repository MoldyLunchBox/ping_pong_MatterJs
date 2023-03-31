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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"matterJsModules\": function() { return /* binding */ matterJsModules; }\n/* harmony export */ });\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\n\nclass matterJsModules {\n    createModules() {\n        this.objects.engine = this.modules.Engine.create(), this.objects.render = this.modules.Render.create({\n            element: document.body,\n            engine: this.objects.engine,\n            options: {\n                background: \"transparent\",\n                wireframes: false,\n                width: 1000,\n                height: 600\n            }\n        }), this.objects.runner = this.modules.Runner.create(), this.objects.mouse = this.modules.Mouse.create(this.objects.render.canvas), this.objects.mouseConstraint = this.modules.MouseConstraint.create(this.objects.engine, {\n            mouse: this.objects.mouse,\n            constraint: {\n                stiffness: 0.2,\n                render: {\n                    visible: false\n                }\n            }\n        });\n    }\n    createBodies() {\n        this.modules.Composite.add(this.objects.engine.world, [\n            this.bodies.ball,\n            this.bodies.leftPaddle,\n            this.bodies.ground,\n            this.bodies.roof,\n            this.bodies.wall,\n            this.bodies.wallLeft,\n            this.bodies.rightPaddle\n        ]);\n    }\n    events() {\n        matter_js__WEBPACK_IMPORTED_MODULE_0__.Events.on(this.objects.mouseConstraint, \"mousemove\", (e)=>{\n            var _this_socket;\n            this.modules.Body.setPosition(this.bodies.leftPaddle, {\n                x: 60,\n                y: e.mouse.position.y\n            });\n            (_this_socket = this.socket) === null || _this_socket === void 0 ? void 0 : _this_socket.emit(\"paddle\", {\n                x: 60,\n                y: e.mouse.position.y\n            });\n        });\n        matter_js__WEBPACK_IMPORTED_MODULE_0__.Events.on(this.objects.mouseConstraint, \"mouseup\", (e)=>{\n            this.modules.Body.setVelocity(this.bodies.ball, {\n                x: 5,\n                y: 5\n            });\n        });\n    }\n    run() {\n        this.modules.Composite.add(this.objects.engine.world, [\n            this.objects.mouseConstraint\n        ]);\n        this.modules.Render.run(this.objects.render);\n        this.modules.Runner.run(this.objects.runner, this.objects.engine);\n    }\n    socketStuff() {\n        this.socket.on(\"ballPosition\", (data)=>{\n            // Update the ball's position\n            this.bodies.ball.position.x = data.x;\n            this.bodies.ball.position.y = data.y;\n        });\n    }\n    constructor(){\n        this.objects = {\n            engine: null,\n            render: null,\n            runner: null,\n            mouse: null,\n            mouseConstraint: null\n        };\n        this.paddleSide = \"\";\n        this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"http://localhost:3008\");\n        this.socket.on(\"paddleAssigned\", (data)=>{\n            console.log(\"recieved paddle\", data);\n            this.paddleSide = data;\n        });\n        this.modules = {\n            Engine: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Engine),\n            Render: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Render),\n            Runner: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner),\n            Bodies: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies),\n            Body: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Body),\n            Composite: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite),\n            Mouse: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Mouse),\n            MouseConstraint: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().MouseConstraint)\n        };\n        this.bodies = {\n            ball: this.modules.Bodies.circle(400, 200, 20),\n            leftPaddle: this.modules.Bodies.rectangle(50, 300, 40, 200, {\n                isStatic: true\n            }),\n            rightPaddle: this.modules.Bodies.rectangle(1000 - 50, 300, 40, 200, {\n                isStatic: true\n            }),\n            myPaddle: this.modules.Bodies.rectangle(0, 0, 0, 0, {\n                isStatic: true\n            }),\n            ground: this.modules.Bodies.rectangle(500, 0, 1000, 20, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"blue\"\n                }\n            }),\n            roof: this.modules.Bodies.rectangle(500, 600, 1000, 20, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"red\"\n                }\n            }),\n            wall: this.modules.Bodies.rectangle(1000, 300, 20, 1000, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"green\"\n                }\n            }),\n            wallLeft: this.modules.Bodies.rectangle(0, 300, 20, 1000, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"green\"\n                }\n            })\n        };\n        this.bodies.myPaddle = this.bodies.leftPaddle;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pDLE9BQU8sQ0FBQ3FELE1BQU0sQ0FBQ0UsU0FBUyxDQUFDLEdBQUcsS0FBSyxJQUFJLE1BQU07Z0JBQ3REQyxVQUFVLElBQUk7Z0JBQ2RyRCxRQUFRO29CQUNKdUQsV0FBVztnQkFDZjtZQUNKO1FBRUo7UUFDQSxJQUFJLENBQUMvQixNQUFNLENBQUM4QixRQUFRLEdBQUcsSUFBSSxDQUFDOUIsTUFBTSxDQUFDRSxVQUFVO0lBQ2pEO0FBNERKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbWF0dGVyVG9vbHMudHM/ODA0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWF0dGVyLCB7IEV2ZW50cywgRW5naW5lLCBXb3JsZCwgQm9kaWVzIH0gZnJvbSBcIm1hdHRlci1qc1wiO1xuaW1wb3J0IGlvLCB7IFNvY2tldCB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCJcblxuaW50ZXJmYWNlIE1hdHRlck1vZHVsZXMge1xuICAgIEVuZ2luZTogdHlwZW9mIE1hdHRlci5FbmdpbmU7XG4gICAgUmVuZGVyOiB0eXBlb2YgTWF0dGVyLlJlbmRlcjtcbiAgICBSdW5uZXI6IHR5cGVvZiBNYXR0ZXIuUnVubmVyO1xuICAgIEJvZGllczogdHlwZW9mIE1hdHRlci5Cb2RpZXM7XG4gICAgQm9keTogdHlwZW9mIE1hdHRlci5Cb2R5O1xuICAgIENvbXBvc2l0ZTogdHlwZW9mIE1hdHRlci5Db21wb3NpdGU7XG4gICAgTW91c2U6IHR5cGVvZiBNYXR0ZXIuTW91c2U7XG4gICAgTW91c2VDb25zdHJhaW50OiB0eXBlb2YgTWF0dGVyLk1vdXNlQ29uc3RyYWludDtcbn1cblxuaW50ZXJmYWNlIE1hdHRlck9iamVjdHMge1xuICAgIGVuZ2luZTogYW55XG4gICAgcmVuZGVyOiBhbnlcbiAgICBydW5uZXI6IGFueVxuICAgIG1vdXNlOiBhbnlcbiAgICBtb3VzZUNvbnN0cmFpbnQ6IGFueVxufVxuXG5pbnRlcmZhY2UgTWF0dGVyQm9kaWVzIHtcbiAgICBiYWxsOiBNYXR0ZXIuQm9keVxuICAgIGxlZnRQYWRkbGU6IE1hdHRlci5Cb2R5XG4gICAgcmlnaHRQYWRkbGU6IE1hdHRlci5Cb2R5XG4gICAgbXlQYWRkbGUgOiBNYXR0ZXIuQm9keVxuICAgIG90aGVyc1BhZGRsZVxuICAgIGdyb3VuZDogTWF0dGVyLkJvZHlcbiAgICByb29mOiBNYXR0ZXIuQm9keVxuICAgIHdhbGw6IE1hdHRlci5Cb2R5XG4gICAgd2FsbExlZnQ6IE1hdHRlci5Cb2R5XG59XG5cbmV4cG9ydCBjbGFzcyBtYXR0ZXJKc01vZHVsZXMge1xuICAgIHNvY2tldCA6IFNvY2tldFxuICAgIG1vZHVsZXM6IE1hdHRlck1vZHVsZXM7XG4gICAgb2JqZWN0czogTWF0dGVyT2JqZWN0cyA9IHsgZW5naW5lOiBudWxsLCByZW5kZXI6IG51bGwsIHJ1bm5lcjogbnVsbCwgbW91c2U6IG51bGwsIG1vdXNlQ29uc3RyYWludDogbnVsbCB9O1xuICAgIGJvZGllczogTWF0dGVyQm9kaWVzIFxuICAgIHBhZGRsZVNpZGU6IHN0cmluZyA9IFwiXCJcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQgPSAgaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwOCcpO1xuICAgICAgICB0aGlzLnNvY2tldC5vbihcInBhZGRsZUFzc2lnbmVkXCIsIChkYXRhKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWNpZXZlZCBwYWRkbGVcIiwgZGF0YSlcbiAgICAgICAgICAgIHRoaXMucGFkZGxlU2lkZSA9IGRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5tb2R1bGVzID0ge1xuICAgICAgICAgICAgRW5naW5lOiBNYXR0ZXIuRW5naW5lLFxuICAgICAgICAgICAgUmVuZGVyOiBNYXR0ZXIuUmVuZGVyLFxuICAgICAgICAgICAgUnVubmVyOiBNYXR0ZXIuUnVubmVyLFxuICAgICAgICAgICAgQm9kaWVzOiBNYXR0ZXIuQm9kaWVzLFxuICAgICAgICAgICAgQm9keTogTWF0dGVyLkJvZHksXG4gICAgICAgICAgICBDb21wb3NpdGU6IE1hdHRlci5Db21wb3NpdGUsXG4gICAgICAgICAgICBNb3VzZTogTWF0dGVyLk1vdXNlLFxuICAgICAgICAgICAgTW91c2VDb25zdHJhaW50OiBNYXR0ZXIuTW91c2VDb25zdHJhaW50LFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9kaWVzID0ge1xuICAgICAgICAgICAgYmFsbDogdGhpcy5tb2R1bGVzLkJvZGllcy5jaXJjbGUoNDAwLCAyMDAsIDIwKSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGVmdFBhZGRsZTogdGhpcy5tb2R1bGVzLkJvZGllcy5yZWN0YW5nbGUoNTAsIDMwMCwgNDAsIDIwMCwgeyBpc1N0YXRpYzogdHJ1ZSB9KSxcbiAgICAgICAgICAgIHJpZ2h0UGFkZGxlOiB0aGlzLm1vZHVsZXMuQm9kaWVzLnJlY3RhbmdsZSgxMDAwIC0gNTAsIDMwMCwgNDAsIDIwMCwgeyBpc1N0YXRpYzogdHJ1ZSB9KSxcbiAgICAgICAgICAgIG15UGFkZGxlOiB0aGlzLm1vZHVsZXMuQm9kaWVzLnJlY3RhbmdsZSgwICwgMCwgMCwgMCwgeyBpc1N0YXRpYzogdHJ1ZSB9KSxcbiAgICAgICAgICAgIGdyb3VuZDogdGhpcy5tb2R1bGVzLkJvZGllcy5yZWN0YW5nbGUoNTAwLCAwLCAxMDAwLCAyMCwge1xuICAgICAgICAgICAgICAgIGlzU3RhdGljOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgICAgICAgICBmaWxsU3R5bGU6ICdibHVlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcm9vZjogdGhpcy5tb2R1bGVzLkJvZGllcy5yZWN0YW5nbGUoNTAwLCA2MDAsIDEwMDAsIDIwLCB7XG4gICAgICAgICAgICAgICAgaXNTdGF0aWM6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJ3JlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHdhbGw6IHRoaXMubW9kdWxlcy5Cb2RpZXMucmVjdGFuZ2xlKDEwMDAsIDMwMCwgMjAsIDEwMDAsIHtcbiAgICAgICAgICAgICAgICBpc1N0YXRpYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbFN0eWxlOiAnZ3JlZW4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB3YWxsTGVmdDogdGhpcy5tb2R1bGVzLkJvZGllcy5yZWN0YW5nbGUoMCwgMzAwLCAyMCwgMTAwMCwge1xuICAgICAgICAgICAgICAgIGlzU3RhdGljOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgICAgICAgICBmaWxsU3R5bGU6ICdncmVlbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9kaWVzLm15UGFkZGxlID0gdGhpcy5ib2RpZXMubGVmdFBhZGRsZVxuICAgIH1cbiAgICBjcmVhdGVNb2R1bGVzKCkge1xuICAgICAgICAgICAgdGhpcy5vYmplY3RzLmVuZ2luZSA9IHRoaXMubW9kdWxlcy5FbmdpbmUuY3JlYXRlKCksXG4gICAgICAgICAgICB0aGlzLm9iamVjdHMucmVuZGVyID0gdGhpcy5tb2R1bGVzLlJlbmRlci5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmJvZHksXG4gICAgICAgICAgICAgICAgZW5naW5lOiB0aGlzLm9iamVjdHMuZW5naW5lLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICB3aXJlZnJhbWVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5vYmplY3RzLnJ1bm5lciA9IHRoaXMubW9kdWxlcy5SdW5uZXIuY3JlYXRlKCksXG4gICAgICAgICAgICB0aGlzLm9iamVjdHMubW91c2UgPSB0aGlzLm1vZHVsZXMuTW91c2UuY3JlYXRlKHRoaXMub2JqZWN0cy5yZW5kZXIuY2FudmFzKSxcbiAgICAgICAgICAgIHRoaXMub2JqZWN0cy5tb3VzZUNvbnN0cmFpbnQgPSB0aGlzLm1vZHVsZXMuTW91c2VDb25zdHJhaW50LmNyZWF0ZSh0aGlzLm9iamVjdHMuZW5naW5lLCB7XG4gICAgICAgICAgICAgICAgbW91c2U6IHRoaXMub2JqZWN0cy5tb3VzZSxcbiAgICAgICAgICAgICAgICBjb25zdHJhaW50OiB7XG4gICAgICAgICAgICAgICAgICAgIHN0aWZmbmVzczogMC4yLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgXG4gICAgY3JlYXRlQm9kaWVzKCkge1xuICBcbiAgICAgICAgdGhpcy5tb2R1bGVzLkNvbXBvc2l0ZS5hZGQodGhpcy5vYmplY3RzLmVuZ2luZS53b3JsZCwgW3RoaXMuYm9kaWVzLmJhbGwsIHRoaXMuYm9kaWVzLmxlZnRQYWRkbGUsIHRoaXMuYm9kaWVzLmdyb3VuZCwgdGhpcy5ib2RpZXMucm9vZiwgdGhpcy5ib2RpZXMud2FsbCwgdGhpcy5ib2RpZXMud2FsbExlZnQsIHRoaXMuYm9kaWVzLnJpZ2h0UGFkZGxlIF0pO1xuICAgIH1cbiAgICBldmVudHMoKSB7XG5cbiAgICAgICAgRXZlbnRzLm9uKHRoaXMub2JqZWN0cy5tb3VzZUNvbnN0cmFpbnQsIFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZHVsZXMuQm9keS5zZXRQb3NpdGlvbih0aGlzLmJvZGllcy5sZWZ0UGFkZGxlLCB7IHg6IDYwLCB5OiBlLm1vdXNlLnBvc2l0aW9uLnkgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNvY2tldD8uZW1pdChcInBhZGRsZVwiLCB7IHg6NjAsIHk6IGUubW91c2UucG9zaXRpb24ueSAgfSlcblxuICAgICAgICB9KVxuXG4gICAgICAgIEV2ZW50cy5vbih0aGlzLm9iamVjdHMubW91c2VDb25zdHJhaW50LCBcIm1vdXNldXBcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW9kdWxlcy5Cb2R5LnNldFZlbG9jaXR5KHRoaXMuYm9kaWVzLmJhbGwsIHsgeDogNSwgeTogNSB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcy5Db21wb3NpdGUuYWRkKHRoaXMub2JqZWN0cy5lbmdpbmUud29ybGQsIFt0aGlzLm9iamVjdHMubW91c2VDb25zdHJhaW50XSk7XG5cbiAgICAgICAgdGhpcy5tb2R1bGVzLlJlbmRlci5ydW4odGhpcy5vYmplY3RzLnJlbmRlcik7XG4gICAgICAgIHRoaXMubW9kdWxlcy5SdW5uZXIucnVuKHRoaXMub2JqZWN0cy5ydW5uZXIsIHRoaXMub2JqZWN0cy5lbmdpbmUpO1xuICAgIH1cblxuICAgIHNvY2tldFN0dWZmKCl7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdiYWxsUG9zaXRpb24nLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBiYWxsJ3MgcG9zaXRpb25cbiAgICAgICAgICAgIHRoaXMuYm9kaWVzLmJhbGwucG9zaXRpb24ueCA9IGRhdGEueDtcbiAgICAgICAgICAgIHRoaXMuYm9kaWVzLmJhbGwucG9zaXRpb24ueSA9IGRhdGEueTtcbiAgICAgICAgICB9KTtcbiAgICB9XG5cblxufSJdLCJuYW1lcyI6WyJNYXR0ZXIiLCJFdmVudHMiLCJpbyIsIm1hdHRlckpzTW9kdWxlcyIsImNyZWF0ZU1vZHVsZXMiLCJvYmplY3RzIiwiZW5naW5lIiwibW9kdWxlcyIsIkVuZ2luZSIsImNyZWF0ZSIsInJlbmRlciIsIlJlbmRlciIsImVsZW1lbnQiLCJkb2N1bWVudCIsImJvZHkiLCJvcHRpb25zIiwiYmFja2dyb3VuZCIsIndpcmVmcmFtZXMiLCJ3aWR0aCIsImhlaWdodCIsInJ1bm5lciIsIlJ1bm5lciIsIm1vdXNlIiwiTW91c2UiLCJjYW52YXMiLCJtb3VzZUNvbnN0cmFpbnQiLCJNb3VzZUNvbnN0cmFpbnQiLCJjb25zdHJhaW50Iiwic3RpZmZuZXNzIiwidmlzaWJsZSIsImNyZWF0ZUJvZGllcyIsIkNvbXBvc2l0ZSIsImFkZCIsIndvcmxkIiwiYm9kaWVzIiwiYmFsbCIsImxlZnRQYWRkbGUiLCJncm91bmQiLCJyb29mIiwid2FsbCIsIndhbGxMZWZ0IiwicmlnaHRQYWRkbGUiLCJldmVudHMiLCJvbiIsImUiLCJCb2R5Iiwic2V0UG9zaXRpb24iLCJ4IiwieSIsInBvc2l0aW9uIiwic29ja2V0IiwiZW1pdCIsInNldFZlbG9jaXR5IiwicnVuIiwic29ja2V0U3R1ZmYiLCJkYXRhIiwiY29uc3RydWN0b3IiLCJwYWRkbGVTaWRlIiwiY29uc29sZSIsImxvZyIsIkJvZGllcyIsImNpcmNsZSIsInJlY3RhbmdsZSIsImlzU3RhdGljIiwibXlQYWRkbGUiLCJmaWxsU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/matterTools.ts\n"));

/***/ })

});