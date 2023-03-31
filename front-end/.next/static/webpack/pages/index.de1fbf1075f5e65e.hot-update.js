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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"matterJsModules\": function() { return /* binding */ matterJsModules; }\n/* harmony export */ });\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\n\nclass matterJsModules {\n    createModules() {\n        this.objects.engine = this.modules.Engine.create(), this.objects.render = this.modules.Render.create({\n            element: document.body,\n            engine: this.objects.engine,\n            options: {\n                background: \"transparent\",\n                wireframes: false,\n                width: 1000,\n                height: 600\n            }\n        }), this.objects.runner = this.modules.Runner.create(), this.objects.mouse = this.modules.Mouse.create(this.objects.render.canvas), this.objects.mouseConstraint = this.modules.MouseConstraint.create(this.objects.engine, {\n            mouse: this.objects.mouse,\n            constraint: {\n                stiffness: 0.2,\n                render: {\n                    visible: false\n                }\n            }\n        });\n    }\n    createBodies() {\n        this.modules.Composite.add(this.objects.engine.world, [\n            this.bodies.ball,\n            this.bodies.leftPaddle,\n            this.bodies.ground,\n            this.bodies.roof,\n            this.bodies.wall,\n            this.bodies.wallLeft,\n            this.bodies.rightPaddle\n        ]);\n    }\n    events() {\n        matter_js__WEBPACK_IMPORTED_MODULE_0__.Events.on(this.objects.mouseConstraint, \"mousemove\", (e)=>{\n            var _this_socket;\n            this.modules.Body.setPosition(this.bodies.myPaddle, {\n                x: this.bodies.myPaddle.position.x,\n                y: e.mouse.position.y\n            });\n            console.log(this.bodies.myPaddle);\n            (_this_socket = this.socket) === null || _this_socket === void 0 ? void 0 : _this_socket.emit(this.paddleSide, {\n                x: this.bodies.myPaddle.position.x,\n                y: e.mouse.position.y\n            });\n        });\n        matter_js__WEBPACK_IMPORTED_MODULE_0__.Events.on(this.objects.mouseConstraint, \"mouseup\", (e)=>{\n            this.modules.Body.setVelocity(this.bodies.ball, {\n                x: 5,\n                y: 5\n            });\n        });\n    }\n    run() {\n        this.modules.Composite.add(this.objects.engine.world, [\n            this.objects.mouseConstraint\n        ]);\n        this.modules.Render.run(this.objects.render);\n        this.modules.Runner.run(this.objects.runner, this.objects.engine);\n    }\n    socketStuff() {\n        this.socket.on(\"ballPosition\", (data)=>{\n            // Update the ball's position\n            this.bodies.ball.position.x = data.x;\n            this.bodies.ball.position.y = data.y;\n        });\n    }\n    update() {\n        if (this.paddleSide.length > 1) {\n            // Update the other's paddle position\n            if (this.paddleSide == \"left\") this.socket.on(\"right\", (data)=>{\n                this.modules.Body.setPosition(this.bodies.othersPaddle, {\n                    x: data.x,\n                    y: data.y\n                });\n            });\n            else this.socket.on(\"left\", (data)=>{\n                this.modules.Body.setPosition(this.bodies.othersPaddle, {\n                    x: data.x,\n                    y: data.y\n                });\n            });\n        }\n    }\n    constructor(){\n        this.objects = {\n            engine: null,\n            render: null,\n            runner: null,\n            mouse: null,\n            mouseConstraint: null\n        };\n        this.paddleSide = \"\";\n        this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"http://localhost:3008\");\n        this.modules = {\n            Engine: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Engine),\n            Render: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Render),\n            Runner: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner),\n            Bodies: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies),\n            Body: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Body),\n            Composite: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite),\n            Mouse: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Mouse),\n            MouseConstraint: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().MouseConstraint)\n        };\n        this.bodies = {\n            ball: this.modules.Bodies.circle(400, 200, 20),\n            leftPaddle: this.modules.Bodies.rectangle(50, 300, 40, 200, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"green\"\n                }\n            }),\n            rightPaddle: this.modules.Bodies.rectangle(1000 - 50, 300, 40, 200, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"red\"\n                }\n            }),\n            myPaddle: this.modules.Bodies.rectangle(0, 0, 0, 0, {\n                isStatic: true\n            }),\n            othersPaddle: this.modules.Bodies.rectangle(0, 0, 0, 0, {\n                isStatic: true\n            }),\n            ground: this.modules.Bodies.rectangle(500, 0, 1000, 20, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"blue\"\n                }\n            }),\n            roof: this.modules.Bodies.rectangle(500, 600, 1000, 20, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"red\"\n                }\n            }),\n            wall: this.modules.Bodies.rectangle(1000, 300, 20, 1000, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"green\"\n                }\n            }),\n            wallLeft: this.modules.Bodies.rectangle(0, 300, 20, 1000, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"green\"\n                }\n            })\n        };\n        this.socket.on(\"paddleAssigned\", (data)=>{\n            console.log(\"recieved paddle\", data);\n            this.paddleSide = data;\n            if (this.paddleSide == \"left\") {\n                console.log(\"and its left\", this.paddleSide);\n                this.bodies.myPaddle = this.bodies.leftPaddle;\n                this.bodies.othersPaddle = this.bodies.rightPaddle;\n            } else {\n                console.log(\"and its \", this.paddleSide);\n                this.bodies.myPaddle = this.bodies.rightPaddle;\n                this.bodies.othersPaddle = this.bodies.leftPaddle;\n            }\n            this.paddlefunction();\n        });\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQ3ZDUixRQUFRQyxHQUFHLENBQUMsbUJBQW1CTztZQUMvQixJQUFJLENBQUNKLFVBQVUsR0FBR0k7WUFDbEIsSUFBSSxJQUFJLENBQUNKLFVBQVUsSUFBSSxRQUFRO2dCQUMzQkosUUFBUUMsR0FBRyxDQUFDLGdCQUFnQixJQUFJLENBQUNHLFVBQVU7Z0JBQzNDLElBQUksQ0FBQ3JCLE1BQU0sQ0FBQ2EsUUFBUSxHQUFHLElBQUksQ0FBQ2IsTUFBTSxDQUFDRSxVQUFVO2dCQUM3QyxJQUFJLENBQUNGLE1BQU0sQ0FBQzRCLFlBQVksR0FBRyxJQUFJLENBQUM1QixNQUFNLENBQUNPLFdBQVc7WUFFdEQsT0FBTztnQkFDSFUsUUFBUUMsR0FBRyxDQUFDLFlBQVksSUFBSSxDQUFDRyxVQUFVO2dCQUV2QyxJQUFJLENBQUNyQixNQUFNLENBQUNhLFFBQVEsR0FBRyxJQUFJLENBQUNiLE1BQU0sQ0FBQ08sV0FBVztnQkFDOUMsSUFBSSxDQUFDUCxNQUFNLENBQUM0QixZQUFZLEdBQUcsSUFBSSxDQUFDNUIsTUFBTSxDQUFDRSxVQUFVO1lBRXJELENBQUM7WUFFRCxJQUFJLENBQUNpQyxjQUFjO1FBQ3ZCO0lBRUo7QUE4RUosQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9tYXR0ZXJUb29scy50cz84MDQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXR0ZXIsIHsgRXZlbnRzLCBFbmdpbmUsIFdvcmxkLCBCb2RpZXMgfSBmcm9tIFwibWF0dGVyLWpzXCI7XG5pbXBvcnQgaW8sIHsgU29ja2V0IH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIlxuXG5pbnRlcmZhY2UgTWF0dGVyTW9kdWxlcyB7XG4gICAgRW5naW5lOiB0eXBlb2YgTWF0dGVyLkVuZ2luZTtcbiAgICBSZW5kZXI6IHR5cGVvZiBNYXR0ZXIuUmVuZGVyO1xuICAgIFJ1bm5lcjogdHlwZW9mIE1hdHRlci5SdW5uZXI7XG4gICAgQm9kaWVzOiB0eXBlb2YgTWF0dGVyLkJvZGllcztcbiAgICBCb2R5OiB0eXBlb2YgTWF0dGVyLkJvZHk7XG4gICAgQ29tcG9zaXRlOiB0eXBlb2YgTWF0dGVyLkNvbXBvc2l0ZTtcbiAgICBNb3VzZTogdHlwZW9mIE1hdHRlci5Nb3VzZTtcbiAgICBNb3VzZUNvbnN0cmFpbnQ6IHR5cGVvZiBNYXR0ZXIuTW91c2VDb25zdHJhaW50O1xufVxuXG5pbnRlcmZhY2UgTWF0dGVyT2JqZWN0cyB7XG4gICAgZW5naW5lOiBhbnlcbiAgICByZW5kZXI6IGFueVxuICAgIHJ1bm5lcjogYW55XG4gICAgbW91c2U6IGFueVxuICAgIG1vdXNlQ29uc3RyYWludDogYW55XG59XG5cbmludGVyZmFjZSBNYXR0ZXJCb2RpZXMge1xuICAgIGJhbGw6IE1hdHRlci5Cb2R5XG4gICAgbGVmdFBhZGRsZTogTWF0dGVyLkJvZHlcbiAgICByaWdodFBhZGRsZTogTWF0dGVyLkJvZHlcbiAgICBteVBhZGRsZTogTWF0dGVyLkJvZHlcbiAgICBvdGhlcnNQYWRkbGU6IE1hdHRlci5Cb2R5XG4gICAgZ3JvdW5kOiBNYXR0ZXIuQm9keVxuICAgIHJvb2Y6IE1hdHRlci5Cb2R5XG4gICAgd2FsbDogTWF0dGVyLkJvZHlcbiAgICB3YWxsTGVmdDogTWF0dGVyLkJvZHlcbn1cblxuZXhwb3J0IGNsYXNzIG1hdHRlckpzTW9kdWxlcyB7XG4gICAgc29ja2V0OiBTb2NrZXRcbiAgICBtb2R1bGVzOiBNYXR0ZXJNb2R1bGVzO1xuICAgIG9iamVjdHM6IE1hdHRlck9iamVjdHMgPSB7IGVuZ2luZTogbnVsbCwgcmVuZGVyOiBudWxsLCBydW5uZXI6IG51bGwsIG1vdXNlOiBudWxsLCBtb3VzZUNvbnN0cmFpbnQ6IG51bGwgfTtcbiAgICBib2RpZXM6IE1hdHRlckJvZGllc1xuICAgIHBhZGRsZVNpZGU6IHN0cmluZyA9IFwiXCJcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDozMDA4Jyk7XG5cbiAgICAgICAgdGhpcy5tb2R1bGVzID0ge1xuICAgICAgICAgICAgRW5naW5lOiBNYXR0ZXIuRW5naW5lLFxuICAgICAgICAgICAgUmVuZGVyOiBNYXR0ZXIuUmVuZGVyLFxuICAgICAgICAgICAgUnVubmVyOiBNYXR0ZXIuUnVubmVyLFxuICAgICAgICAgICAgQm9kaWVzOiBNYXR0ZXIuQm9kaWVzLFxuICAgICAgICAgICAgQm9keTogTWF0dGVyLkJvZHksXG4gICAgICAgICAgICBDb21wb3NpdGU6IE1hdHRlci5Db21wb3NpdGUsXG4gICAgICAgICAgICBNb3VzZTogTWF0dGVyLk1vdXNlLFxuICAgICAgICAgICAgTW91c2VDb25zdHJhaW50OiBNYXR0ZXIuTW91c2VDb25zdHJhaW50LFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9kaWVzID0ge1xuICAgICAgICAgICAgYmFsbDogdGhpcy5tb2R1bGVzLkJvZGllcy5jaXJjbGUoNDAwLCAyMDAsIDIwKSxcblxuICAgICAgICAgICAgbGVmdFBhZGRsZTogdGhpcy5tb2R1bGVzLkJvZGllcy5yZWN0YW5nbGUoNTAsIDMwMCwgNDAsIDIwMCwge1xuICAgICAgICAgICAgICAgIGlzU3RhdGljOiB0cnVlLCByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbFN0eWxlOiAnZ3JlZW4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByaWdodFBhZGRsZTogdGhpcy5tb2R1bGVzLkJvZGllcy5yZWN0YW5nbGUoMTAwMCAtIDUwLCAzMDAsIDQwLCAyMDAsIHtcbiAgICAgICAgICAgICAgICBpc1N0YXRpYzogdHJ1ZSwgcmVuZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJ3JlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG15UGFkZGxlOiB0aGlzLm1vZHVsZXMuQm9kaWVzLnJlY3RhbmdsZSgwLCAwLCAwLCAwLCB7IGlzU3RhdGljOiB0cnVlIH0pLFxuICAgICAgICAgICAgb3RoZXJzUGFkZGxlOiB0aGlzLm1vZHVsZXMuQm9kaWVzLnJlY3RhbmdsZSgwLCAwLCAwLCAwLCB7IGlzU3RhdGljOiB0cnVlIH0pLFxuICAgICAgICAgICAgZ3JvdW5kOiB0aGlzLm1vZHVsZXMuQm9kaWVzLnJlY3RhbmdsZSg1MDAsIDAsIDEwMDAsIDIwLCB7XG4gICAgICAgICAgICAgICAgaXNTdGF0aWM6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJ2JsdWUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByb29mOiB0aGlzLm1vZHVsZXMuQm9kaWVzLnJlY3RhbmdsZSg1MDAsIDYwMCwgMTAwMCwgMjAsIHtcbiAgICAgICAgICAgICAgICBpc1N0YXRpYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbFN0eWxlOiAncmVkJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgd2FsbDogdGhpcy5tb2R1bGVzLkJvZGllcy5yZWN0YW5nbGUoMTAwMCwgMzAwLCAyMCwgMTAwMCwge1xuICAgICAgICAgICAgICAgIGlzU3RhdGljOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgICAgICAgICBmaWxsU3R5bGU6ICdncmVlbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHdhbGxMZWZ0OiB0aGlzLm1vZHVsZXMuQm9kaWVzLnJlY3RhbmdsZSgwLCAzMDAsIDIwLCAxMDAwLCB7XG4gICAgICAgICAgICAgICAgaXNTdGF0aWM6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJ2dyZWVuJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zb2NrZXQub24oXCJwYWRkbGVBc3NpZ25lZFwiLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWNpZXZlZCBwYWRkbGVcIiwgZGF0YSlcbiAgICAgICAgICAgIHRoaXMucGFkZGxlU2lkZSA9IGRhdGFcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZGRsZVNpZGUgPT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFuZCBpdHMgbGVmdFwiLCB0aGlzLnBhZGRsZVNpZGUpXG4gICAgICAgICAgICAgICAgdGhpcy5ib2RpZXMubXlQYWRkbGUgPSB0aGlzLmJvZGllcy5sZWZ0UGFkZGxlXG4gICAgICAgICAgICAgICAgdGhpcy5ib2RpZXMub3RoZXJzUGFkZGxlID0gdGhpcy5ib2RpZXMucmlnaHRQYWRkbGVcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFuZCBpdHMgXCIsIHRoaXMucGFkZGxlU2lkZSlcblxuICAgICAgICAgICAgICAgIHRoaXMuYm9kaWVzLm15UGFkZGxlID0gdGhpcy5ib2RpZXMucmlnaHRQYWRkbGVcbiAgICAgICAgICAgICAgICB0aGlzLmJvZGllcy5vdGhlcnNQYWRkbGUgPSB0aGlzLmJvZGllcy5sZWZ0UGFkZGxlXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wYWRkbGVmdW5jdGlvbigpXG4gICAgICAgIH0pXG5cbiAgICB9XG4gICAgY3JlYXRlTW9kdWxlcygpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzLmVuZ2luZSA9IHRoaXMubW9kdWxlcy5FbmdpbmUuY3JlYXRlKCksXG4gICAgICAgICAgICB0aGlzLm9iamVjdHMucmVuZGVyID0gdGhpcy5tb2R1bGVzLlJlbmRlci5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmJvZHksXG4gICAgICAgICAgICAgICAgZW5naW5lOiB0aGlzLm9iamVjdHMuZW5naW5lLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICB3aXJlZnJhbWVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjAwLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5vYmplY3RzLnJ1bm5lciA9IHRoaXMubW9kdWxlcy5SdW5uZXIuY3JlYXRlKCksXG4gICAgICAgICAgICB0aGlzLm9iamVjdHMubW91c2UgPSB0aGlzLm1vZHVsZXMuTW91c2UuY3JlYXRlKHRoaXMub2JqZWN0cy5yZW5kZXIuY2FudmFzKSxcbiAgICAgICAgICAgIHRoaXMub2JqZWN0cy5tb3VzZUNvbnN0cmFpbnQgPSB0aGlzLm1vZHVsZXMuTW91c2VDb25zdHJhaW50LmNyZWF0ZSh0aGlzLm9iamVjdHMuZW5naW5lLCB7XG4gICAgICAgICAgICAgICAgbW91c2U6IHRoaXMub2JqZWN0cy5tb3VzZSxcbiAgICAgICAgICAgICAgICBjb25zdHJhaW50OiB7XG4gICAgICAgICAgICAgICAgICAgIHN0aWZmbmVzczogMC4yLFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGNyZWF0ZUJvZGllcygpIHtcblxuICAgICAgICB0aGlzLm1vZHVsZXMuQ29tcG9zaXRlLmFkZCh0aGlzLm9iamVjdHMuZW5naW5lLndvcmxkLCBbdGhpcy5ib2RpZXMuYmFsbCwgdGhpcy5ib2RpZXMubGVmdFBhZGRsZSwgdGhpcy5ib2RpZXMuZ3JvdW5kLCB0aGlzLmJvZGllcy5yb29mLCB0aGlzLmJvZGllcy53YWxsLCB0aGlzLmJvZGllcy53YWxsTGVmdCwgdGhpcy5ib2RpZXMucmlnaHRQYWRkbGVdKTtcbiAgICB9XG4gICAgZXZlbnRzKCkge1xuXG4gICAgICAgIEV2ZW50cy5vbih0aGlzLm9iamVjdHMubW91c2VDb25zdHJhaW50LCBcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2R1bGVzLkJvZHkuc2V0UG9zaXRpb24odGhpcy5ib2RpZXMubXlQYWRkbGUsIHsgeDogdGhpcy5ib2RpZXMubXlQYWRkbGUucG9zaXRpb24ueCwgeTogZS5tb3VzZS5wb3NpdGlvbi55IH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ib2RpZXMubXlQYWRkbGUpXG4gICAgICAgICAgICB0aGlzLnNvY2tldD8uZW1pdCh0aGlzLnBhZGRsZVNpZGUsIHsgeDogdGhpcy5ib2RpZXMubXlQYWRkbGUucG9zaXRpb24ueCwgeTogZS5tb3VzZS5wb3NpdGlvbi55IH0pXG5cbiAgICAgICAgfSlcblxuICAgICAgICBFdmVudHMub24odGhpcy5vYmplY3RzLm1vdXNlQ29uc3RyYWludCwgXCJtb3VzZXVwXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZHVsZXMuQm9keS5zZXRWZWxvY2l0eSh0aGlzLmJvZGllcy5iYWxsLCB7IHg6IDUsIHk6IDUgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcnVuKCkge1xuICAgICAgICB0aGlzLm1vZHVsZXMuQ29tcG9zaXRlLmFkZCh0aGlzLm9iamVjdHMuZW5naW5lLndvcmxkLCBbdGhpcy5vYmplY3RzLm1vdXNlQ29uc3RyYWludF0pO1xuXG4gICAgICAgIHRoaXMubW9kdWxlcy5SZW5kZXIucnVuKHRoaXMub2JqZWN0cy5yZW5kZXIpO1xuICAgICAgICB0aGlzLm1vZHVsZXMuUnVubmVyLnJ1bih0aGlzLm9iamVjdHMucnVubmVyLCB0aGlzLm9iamVjdHMuZW5naW5lKTtcbiAgICB9XG5cbiAgICBzb2NrZXRTdHVmZigpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2JhbGxQb3NpdGlvbicsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGJhbGwncyBwb3NpdGlvblxuICAgICAgICAgICAgdGhpcy5ib2RpZXMuYmFsbC5wb3NpdGlvbi54ID0gZGF0YS54O1xuICAgICAgICAgICAgdGhpcy5ib2RpZXMuYmFsbC5wb3NpdGlvbi55ID0gZGF0YS55O1xuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5wYWRkbGVTaWRlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgb3RoZXIncyBwYWRkbGUgcG9zaXRpb25cbiAgICAgICAgICAgIGlmICh0aGlzLnBhZGRsZVNpZGUgPT0gXCJsZWZ0XCIpXG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQub24oXCJyaWdodFwiLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZXMuQm9keS5zZXRQb3NpdGlvbih0aGlzLmJvZGllcy5vdGhlcnNQYWRkbGUsIHsgeDogZGF0YS54LCB5OiBkYXRhLnkgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQub24oXCJsZWZ0XCIsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kdWxlcy5Cb2R5LnNldFBvc2l0aW9uKHRoaXMuYm9kaWVzLm90aGVyc1BhZGRsZSwgeyB4OiBkYXRhLngsIHk6IGRhdGEueSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgfVxuXG5cblxufSJdLCJuYW1lcyI6WyJNYXR0ZXIiLCJFdmVudHMiLCJpbyIsIm1hdHRlckpzTW9kdWxlcyIsImNyZWF0ZU1vZHVsZXMiLCJvYmplY3RzIiwiZW5naW5lIiwibW9kdWxlcyIsIkVuZ2luZSIsImNyZWF0ZSIsInJlbmRlciIsIlJlbmRlciIsImVsZW1lbnQiLCJkb2N1bWVudCIsImJvZHkiLCJvcHRpb25zIiwiYmFja2dyb3VuZCIsIndpcmVmcmFtZXMiLCJ3aWR0aCIsImhlaWdodCIsInJ1bm5lciIsIlJ1bm5lciIsIm1vdXNlIiwiTW91c2UiLCJjYW52YXMiLCJtb3VzZUNvbnN0cmFpbnQiLCJNb3VzZUNvbnN0cmFpbnQiLCJjb25zdHJhaW50Iiwic3RpZmZuZXNzIiwidmlzaWJsZSIsImNyZWF0ZUJvZGllcyIsIkNvbXBvc2l0ZSIsImFkZCIsIndvcmxkIiwiYm9kaWVzIiwiYmFsbCIsImxlZnRQYWRkbGUiLCJncm91bmQiLCJyb29mIiwid2FsbCIsIndhbGxMZWZ0IiwicmlnaHRQYWRkbGUiLCJldmVudHMiLCJvbiIsImUiLCJCb2R5Iiwic2V0UG9zaXRpb24iLCJteVBhZGRsZSIsIngiLCJwb3NpdGlvbiIsInkiLCJjb25zb2xlIiwibG9nIiwic29ja2V0IiwiZW1pdCIsInBhZGRsZVNpZGUiLCJzZXRWZWxvY2l0eSIsInJ1biIsInNvY2tldFN0dWZmIiwiZGF0YSIsInVwZGF0ZSIsImxlbmd0aCIsIm90aGVyc1BhZGRsZSIsImNvbnN0cnVjdG9yIiwiQm9kaWVzIiwiY2lyY2xlIiwicmVjdGFuZ2xlIiwiaXNTdGF0aWMiLCJmaWxsU3R5bGUiLCJwYWRkbGVmdW5jdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/matterTools.ts\n"));

/***/ })

});