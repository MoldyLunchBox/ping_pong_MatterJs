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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"matterJsModules\": function() { return /* binding */ matterJsModules; }\n/* harmony export */ });\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);\n\nclass matterJsModules {\n    create() {\n        this.objects = {\n            engine: this.modules.Engine.create(),\n            render: this.modules.Render.create({\n                element: document.body,\n                engine: this.objects.engine,\n                options: {\n                    background: \"transparent\",\n                    wireframes: false,\n                    width: 1000,\n                    height: 600\n                }\n            }),\n            runner: this.modules.Runner.create(),\n            mouse: this.modules.Mouse.create(this.objects.render.canvas),\n            mouseConstraint: this.modules.MouseConstraint.create(this.objects.engine, {\n                mouse: this.objects.mouse,\n                constraint: {\n                    stiffness: 0.2,\n                    render: {\n                        visible: false\n                    }\n                }\n            })\n        };\n    }\n    initBodies() {\n        this.bodies = {\n            ball: this.modules.Bodies.circle(400, 200, 20),\n            boxB: this.modules.Bodies.rectangle(50, 300, 40, 200, {\n                isStatic: true\n            }),\n            ground: this.modules.Bodies.rectangle(500, 0, 1000, 20, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"blue\"\n                }\n            }),\n            roof: this.modules.Bodies.rectangle(500, 600, 1000, 20, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"red\"\n                }\n            }),\n            wall: this.modules.Bodies.rectangle(900, 300, 20, 1000, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"green\"\n                }\n            }),\n            wallLeft: this.modules.Bodies.rectangle(0, 300, 20, 1000, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"green\"\n                }\n            })\n        };\n        this.modules.Composite.add(this.objects.engine.world, [\n            this.bodies.ball,\n            this.bodies.boxB,\n            this.bodies.ground,\n            this.bodies.roof,\n            this.bodies.wall,\n            this.bodies.wallLeft\n        ]);\n    }\n    events() {\n        matter_js__WEBPACK_IMPORTED_MODULE_0__.Events.on(this.objects.mouseConstraint, \"mousemove\", (e)=>{\n            this.modules.Body.setPosition(this.bodies.boxB, {\n                x: 60,\n                y: e.mouse.position.y\n            });\n        });\n        matter_js__WEBPACK_IMPORTED_MODULE_0__.Events.on(this.objects.mouseConstraint, \"mouseup\", (e)=>{\n            this.modules.Body.setVelocity(this.bodies.ball, {\n                x: 5,\n                y: 5\n            });\n        });\n    }\n    run() {\n        this.modules.Render.run(this.objects.render);\n        this.modules.Runner.run(this.objects.runner, this.objects.engine);\n    }\n    constructor(){\n        this.bodies = {\n            ball: null,\n            boxB: null,\n            ground: null,\n            roof: null,\n            wall: null,\n            wallLeft: null\n        };\n        this.objects = {\n            engine: null,\n            render: null,\n            runner: null,\n            mouse: null,\n            mouseConstraint: null\n        };\n        this.modules = {\n            Engine: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Engine),\n            Render: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Render),\n            Runner: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner),\n            Bodies: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies),\n            Body: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Body),\n            Composite: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite),\n            Mouse: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Mouse),\n            MouseConstraint: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().MouseConstraint)\n        };\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UW5CLHlEQUFhO1lBQ3JCK0IsUUFBUS9CLHlEQUFhO1lBQ3JCK0MsTUFBTS9DLHVEQUFXO1lBQ2pCeUMsV0FBV3pDLDREQUFnQjtZQUMzQnFCLE9BQU9yQix3REFBWTtZQUNuQndCLGlCQUFpQnhCLGtFQUFzQjtRQUMzQztJQUVKO0FBMkVKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbWF0dGVyVG9vbHMudHM/ODA0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWF0dGVyLCB7IEV2ZW50cywgRW5naW5lLCBXb3JsZCwgQm9kaWVzIH0gZnJvbSBcIm1hdHRlci1qc1wiO1xuXG5pbnRlcmZhY2UgTWF0dGVyTW9kdWxlcyB7XG4gICAgRW5naW5lOiB0eXBlb2YgTWF0dGVyLkVuZ2luZTtcbiAgICBSZW5kZXI6IHR5cGVvZiBNYXR0ZXIuUmVuZGVyO1xuICAgIFJ1bm5lcjogdHlwZW9mIE1hdHRlci5SdW5uZXI7XG4gICAgQm9kaWVzOiB0eXBlb2YgTWF0dGVyLkJvZGllcztcbiAgICBCb2R5OiB0eXBlb2YgTWF0dGVyLkJvZHk7XG4gICAgQ29tcG9zaXRlOiB0eXBlb2YgTWF0dGVyLkNvbXBvc2l0ZTtcbiAgICBNb3VzZTogdHlwZW9mIE1hdHRlci5Nb3VzZTtcbiAgICBNb3VzZUNvbnN0cmFpbnQ6IHR5cGVvZiBNYXR0ZXIuTW91c2VDb25zdHJhaW50O1xufVxuXG5pbnRlcmZhY2UgTWF0dGVyT2JqZWN0cyB7XG4gICAgZW5naW5lOiBhbnlcbiAgICByZW5kZXI6IGFueVxuICAgIHJ1bm5lcjogYW55XG4gICAgbW91c2U6IGFueVxuICAgIG1vdXNlQ29uc3RyYWludDogYW55XG59XG5cbmludGVyZmFjZSBNYXR0ZXJCb2RpZXMge1xuICAgIGJhbGw6IE1hdHRlci5Cb2R5XG4gICAgYm94QjogTWF0dGVyLkJvZHlcbiAgICBncm91bmQ6IE1hdHRlci5Cb2R5XG4gICAgcm9vZjogTWF0dGVyLkJvZHlcbiAgICB3YWxsOiBNYXR0ZXIuQm9keVxuICAgIHdhbGxMZWZ0OiBNYXR0ZXIuQm9keVxufVxuXG5leHBvcnQgY2xhc3MgbWF0dGVySnNNb2R1bGVzIHtcbiAgICBib2RpZXM6IE1hdHRlckJvZGllcyA9IHsgYmFsbDogbnVsbCwgYm94QjogbnVsbCwgZ3JvdW5kOiBudWxsLCByb29mOiBudWxsLCB3YWxsOiBudWxsLCB3YWxsTGVmdDogbnVsbCB9XG4gICAgbW9kdWxlczogTWF0dGVyTW9kdWxlcztcbiAgICBvYmplY3RzOiBNYXR0ZXJPYmplY3RzID0geyBlbmdpbmU6IG51bGwsIHJlbmRlcjogbnVsbCwgcnVubmVyOiBudWxsLCBtb3VzZTogbnVsbCwgbW91c2VDb25zdHJhaW50OiBudWxsIH07XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcyA9IHtcbiAgICAgICAgICAgIEVuZ2luZTogTWF0dGVyLkVuZ2luZSxcbiAgICAgICAgICAgIFJlbmRlcjogTWF0dGVyLlJlbmRlcixcbiAgICAgICAgICAgIFJ1bm5lcjogTWF0dGVyLlJ1bm5lcixcbiAgICAgICAgICAgIEJvZGllczogTWF0dGVyLkJvZGllcyxcbiAgICAgICAgICAgIEJvZHk6IE1hdHRlci5Cb2R5LFxuICAgICAgICAgICAgQ29tcG9zaXRlOiBNYXR0ZXIuQ29tcG9zaXRlLFxuICAgICAgICAgICAgTW91c2U6IE1hdHRlci5Nb3VzZSxcbiAgICAgICAgICAgIE1vdXNlQ29uc3RyYWludDogTWF0dGVyLk1vdXNlQ29uc3RyYWludCxcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzID0ge1xuICAgICAgICAgICAgZW5naW5lOiB0aGlzLm1vZHVsZXMuRW5naW5lLmNyZWF0ZSgpLFxuICAgICAgICAgICAgcmVuZGVyOiB0aGlzLm1vZHVsZXMuUmVuZGVyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuYm9keSxcbiAgICAgICAgICAgICAgICBlbmdpbmU6IHRoaXMub2JqZWN0cy5lbmdpbmUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHdpcmVmcmFtZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBydW5uZXI6IHRoaXMubW9kdWxlcy5SdW5uZXIuY3JlYXRlKCksXG4gICAgICAgICAgICBtb3VzZTogdGhpcy5tb2R1bGVzLk1vdXNlLmNyZWF0ZSh0aGlzLm9iamVjdHMucmVuZGVyLmNhbnZhcyksXG4gICAgICAgICAgICBtb3VzZUNvbnN0cmFpbnQ6IHRoaXMubW9kdWxlcy5Nb3VzZUNvbnN0cmFpbnQuY3JlYXRlKHRoaXMub2JqZWN0cy5lbmdpbmUsIHtcbiAgICAgICAgICAgICAgICBtb3VzZTogdGhpcy5vYmplY3RzLm1vdXNlLFxuICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RpZmZuZXNzOiAwLjIsXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdEJvZGllcygpIHtcbiAgICAgICAgdGhpcy5ib2RpZXMgPSB7XG4gICAgICAgICAgICBiYWxsOiB0aGlzLm1vZHVsZXMuQm9kaWVzLmNpcmNsZSg0MDAsIDIwMCwgMjApLFxuICAgICAgICAgICAgYm94QjogdGhpcy5tb2R1bGVzLkJvZGllcy5yZWN0YW5nbGUoNTAsIDMwMCwgNDAsIDIwMCwgeyBpc1N0YXRpYzogdHJ1ZSB9KSxcbiAgICAgICAgICAgIGdyb3VuZDogdGhpcy5tb2R1bGVzLkJvZGllcy5yZWN0YW5nbGUoNTAwLCAwLCAxMDAwLCAyMCwge1xuICAgICAgICAgICAgICAgIGlzU3RhdGljOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgICAgICAgICBmaWxsU3R5bGU6ICdibHVlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcm9vZjogdGhpcy5tb2R1bGVzLkJvZGllcy5yZWN0YW5nbGUoNTAwLCA2MDAsIDEwMDAsIDIwLCB7XG4gICAgICAgICAgICAgICAgaXNTdGF0aWM6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJ3JlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHdhbGw6IHRoaXMubW9kdWxlcy5Cb2RpZXMucmVjdGFuZ2xlKDkwMCwgMzAwLCAyMCwgMTAwMCwge1xuICAgICAgICAgICAgICAgIGlzU3RhdGljOiB0cnVlLFxuICAgICAgICAgICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgICAgICAgICBmaWxsU3R5bGU6ICdncmVlbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHdhbGxMZWZ0OiB0aGlzLm1vZHVsZXMuQm9kaWVzLnJlY3RhbmdsZSgwLCAzMDAsIDIwLCAxMDAwLCB7XG4gICAgICAgICAgICAgICAgaXNTdGF0aWM6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJ2dyZWVuJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2R1bGVzLkNvbXBvc2l0ZS5hZGQodGhpcy5vYmplY3RzLmVuZ2luZS53b3JsZCwgW3RoaXMuYm9kaWVzLmJhbGwsIHRoaXMuYm9kaWVzLmJveEIsIHRoaXMuYm9kaWVzLmdyb3VuZCwgdGhpcy5ib2RpZXMucm9vZiwgdGhpcy5ib2RpZXMud2FsbCwgdGhpcy5ib2RpZXMud2FsbExlZnQgXSk7XG4gICAgfVxuICAgIGV2ZW50cygpIHtcblxuICAgICAgICBFdmVudHMub24odGhpcy5vYmplY3RzLm1vdXNlQ29uc3RyYWludCwgXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW9kdWxlcy5Cb2R5LnNldFBvc2l0aW9uKHRoaXMuYm9kaWVzLmJveEIsIHsgeDogNjAsIHk6IGUubW91c2UucG9zaXRpb24ueSB9KTtcbiAgICAgICAgfSlcblxuICAgICAgICBFdmVudHMub24odGhpcy5vYmplY3RzLm1vdXNlQ29uc3RyYWludCwgXCJtb3VzZXVwXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZHVsZXMuQm9keS5zZXRWZWxvY2l0eSh0aGlzLmJvZGllcy5iYWxsLCB7IHg6IDUsIHk6IDUgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcnVuKCkge1xuICAgICAgICB0aGlzLm1vZHVsZXMuUmVuZGVyLnJ1bih0aGlzLm9iamVjdHMucmVuZGVyKTtcbiAgICAgICAgdGhpcy5tb2R1bGVzLlJ1bm5lci5ydW4odGhpcy5vYmplY3RzLnJ1bm5lciwgdGhpcy5vYmplY3RzLmVuZ2luZSk7XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIk1hdHRlciIsIkV2ZW50cyIsIm1hdHRlckpzTW9kdWxlcyIsImNyZWF0ZSIsIm9iamVjdHMiLCJlbmdpbmUiLCJtb2R1bGVzIiwiRW5naW5lIiwicmVuZGVyIiwiUmVuZGVyIiwiZWxlbWVudCIsImRvY3VtZW50IiwiYm9keSIsIm9wdGlvbnMiLCJiYWNrZ3JvdW5kIiwid2lyZWZyYW1lcyIsIndpZHRoIiwiaGVpZ2h0IiwicnVubmVyIiwiUnVubmVyIiwibW91c2UiLCJNb3VzZSIsImNhbnZhcyIsIm1vdXNlQ29uc3RyYWludCIsIk1vdXNlQ29uc3RyYWludCIsImNvbnN0cmFpbnQiLCJzdGlmZm5lc3MiLCJ2aXNpYmxlIiwiaW5pdEJvZGllcyIsImJvZGllcyIsImJhbGwiLCJCb2RpZXMiLCJjaXJjbGUiLCJib3hCIiwicmVjdGFuZ2xlIiwiaXNTdGF0aWMiLCJncm91bmQiLCJmaWxsU3R5bGUiLCJyb29mIiwid2FsbCIsIndhbGxMZWZ0IiwiQ29tcG9zaXRlIiwiYWRkIiwid29ybGQiLCJldmVudHMiLCJvbiIsImUiLCJCb2R5Iiwic2V0UG9zaXRpb24iLCJ4IiwieSIsInBvc2l0aW9uIiwic2V0VmVsb2NpdHkiLCJydW4iLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/matterTools.ts\n"));

/***/ })

});