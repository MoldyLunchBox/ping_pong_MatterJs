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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"matterJsModules\": function() { return /* binding */ matterJsModules; }\n/* harmony export */ });\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);\n\nclass matterJsModules {\n    create() {\n        this.objects = {\n            engine: this.modules.Engine.create(),\n            render: this.modules.Render.create({\n                element: document.body,\n                engine: this.objects.engine,\n                options: {\n                    background: \"transparent\",\n                    wireframes: false,\n                    width: 1000,\n                    height: 600\n                }\n            }),\n            runner: this.modules.Runner.create(),\n            mouse: this.modules.Mouse.create(this.objects.render.canvas),\n            mouseConstraint: this.modules.MouseConstraint.create(this.objects.engine, {\n                mouse: this.objects.mouse,\n                constraint: {\n                    stiffness: 0.2,\n                    render: {\n                        visible: false\n                    }\n                }\n            })\n        };\n    }\n    initBodies() {\n        this.bodies = {\n            ball: this.modules.Bodies.circle(400, 200, 20),\n            boxB: this.modules.Bodies.rectangle(50, 300, 40, 200, {\n                isStatic: true\n            }),\n            ground: this.modules.Bodies.rectangle(500, 0, 1000, 20, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"blue\"\n                }\n            }),\n            roof: this.modules.Bodies.rectangle(500, 600, 1000, 20, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"red\"\n                }\n            }),\n            wall: this.modules.Bodies.rectangle(900, 300, 20, 1000, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"green\"\n                }\n            }),\n            wallLeft: this.modules.Bodies.rectangle(0, 300, 20, 1000, {\n                isStatic: true,\n                render: {\n                    fillStyle: \"green\"\n                }\n            })\n        };\n    }\n    events() {\n        matter_js__WEBPACK_IMPORTED_MODULE_0__.Events.on(this.objects.mouseConstraint, \"mousemove\", (e)=>{\n            MatterNode.modules.Body.setPosition(boxB, {\n                x: 60,\n                y: e.mouse.position.y\n            });\n            console.log(\"box\", boxB);\n        });\n        matter_js__WEBPACK_IMPORTED_MODULE_0__.Events.on(mouseConstraint, \"mouseup\", (e)=>{\n            MatterNode.modules.Body.setVelocity(ball, {\n                x: 5,\n                y: 5\n            });\n        });\n    }\n    constructor(){\n        this.objects = {\n            engine: null,\n            render: null,\n            runner: null,\n            mouse: null,\n            mouseConstraint: null\n        };\n        this.bodies = {\n            ball: null,\n            boxB: null,\n            ground: null,\n            roof: null,\n            wall: null,\n            wallLeft: null\n        };\n        this.modules = {\n            Engine: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Engine),\n            Render: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Render),\n            Runner: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner),\n            Bodies: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies),\n            Body: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Body),\n            Composite: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite),\n            Mouse: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Mouse),\n            MouseConstraint: (matter_js__WEBPACK_IMPORTED_MODULE_0___default().MouseConstraint)\n        };\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dCQUFFaUIsR0FBRztnQkFBR0MsR0FBRztZQUFFO1FBRXpEO0lBQ0U7SUFqRkFLLGFBQWM7YUFGZGpELFVBQXlCO1lBQUVDLFFBQVEsSUFBSTtZQUFFRyxRQUFRLElBQUk7WUFBRVUsUUFBUSxJQUFJO1lBQUVFLE9BQU8sSUFBSTtZQUFFRyxpQkFBaUIsSUFBSTtRQUFDO2FBQ3hHTSxTQUF1QjtZQUFFQyxNQUFNLElBQUk7WUFBRUcsTUFBTSxJQUFJO1lBQUVHLFFBQVEsSUFBSTtZQUFFRSxNQUFNLElBQUk7WUFBRUMsTUFBTSxJQUFJO1lBQUVDLFVBQVUsSUFBSTtRQUFDO1FBRWxHLElBQUksQ0FBQ2xDLE9BQU8sR0FBRztZQUNYQyxRQUFRUCx5REFBYTtZQUNyQlMsUUFBUVQseURBQWE7WUFDckJtQixRQUFRbkIseURBQWE7WUFDckIrQixRQUFRL0IseURBQWE7WUFDckI2QyxNQUFNN0MsdURBQVc7WUFDakJzRCxXQUFXdEQsNERBQWdCO1lBQzNCcUIsT0FBT3JCLHdEQUFZO1lBQ25Cd0IsaUJBQWlCeEIsa0VBQXNCO1FBQzNDO0lBRUo7QUF1RUosQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9tYXR0ZXJUb29scy50cz84MDQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXR0ZXIsIHsgRXZlbnRzLCBFbmdpbmUsIFdvcmxkLCBCb2RpZXMgfSBmcm9tIFwibWF0dGVyLWpzXCI7XG5cbmludGVyZmFjZSBNYXR0ZXJNb2R1bGVzIHtcbiAgICBFbmdpbmU6IHR5cGVvZiBNYXR0ZXIuRW5naW5lO1xuICAgIFJlbmRlcjogdHlwZW9mIE1hdHRlci5SZW5kZXI7XG4gICAgUnVubmVyOiB0eXBlb2YgTWF0dGVyLlJ1bm5lcjtcbiAgICBCb2RpZXM6IHR5cGVvZiBNYXR0ZXIuQm9kaWVzO1xuICAgIEJvZHk6IHR5cGVvZiBNYXR0ZXIuQm9keTtcbiAgICBDb21wb3NpdGU6IHR5cGVvZiBNYXR0ZXIuQ29tcG9zaXRlO1xuICAgIE1vdXNlOiB0eXBlb2YgTWF0dGVyLk1vdXNlO1xuICAgIE1vdXNlQ29uc3RyYWludDogdHlwZW9mIE1hdHRlci5Nb3VzZUNvbnN0cmFpbnQ7XG59XG5cbmludGVyZmFjZSBNYXR0ZXJPYmplY3RzIHtcbiAgICBlbmdpbmU6IGFueVxuICAgIHJlbmRlcjogYW55XG4gICAgcnVubmVyOiBhbnlcbiAgICBtb3VzZTogYW55XG4gICAgbW91c2VDb25zdHJhaW50OiBhbnlcbn1cblxuaW50ZXJmYWNlIE1hdHRlckJvZGllcyB7XG4gICAgYmFsbDogTWF0dGVyLkJvZHlcbiAgICBib3hCOiBNYXR0ZXIuQm9keVxuICAgIGdyb3VuZDogTWF0dGVyLkJvZHlcbiAgICByb29mOiBNYXR0ZXIuQm9keVxuICAgIHdhbGw6IE1hdHRlci5Cb2R5XG4gICAgd2FsbExlZnQ6IE1hdHRlci5Cb2R5XG59XG5cbmV4cG9ydCBjbGFzcyBtYXR0ZXJKc01vZHVsZXMge1xuICAgIG1vZHVsZXM6IE1hdHRlck1vZHVsZXM7XG4gICAgb2JqZWN0czogTWF0dGVyT2JqZWN0cyA9IHsgZW5naW5lOiBudWxsLCByZW5kZXI6IG51bGwsIHJ1bm5lcjogbnVsbCwgbW91c2U6IG51bGwsIG1vdXNlQ29uc3RyYWludDogbnVsbCB9O1xuICAgIGJvZGllczogTWF0dGVyQm9kaWVzID0geyBiYWxsOiBudWxsLCBib3hCOiBudWxsLCBncm91bmQ6IG51bGwsIHJvb2Y6IG51bGwsIHdhbGw6IG51bGwsIHdhbGxMZWZ0OiBudWxsIH1cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzID0ge1xuICAgICAgICAgICAgRW5naW5lOiBNYXR0ZXIuRW5naW5lLFxuICAgICAgICAgICAgUmVuZGVyOiBNYXR0ZXIuUmVuZGVyLFxuICAgICAgICAgICAgUnVubmVyOiBNYXR0ZXIuUnVubmVyLFxuICAgICAgICAgICAgQm9kaWVzOiBNYXR0ZXIuQm9kaWVzLFxuICAgICAgICAgICAgQm9keTogTWF0dGVyLkJvZHksXG4gICAgICAgICAgICBDb21wb3NpdGU6IE1hdHRlci5Db21wb3NpdGUsXG4gICAgICAgICAgICBNb3VzZTogTWF0dGVyLk1vdXNlLFxuICAgICAgICAgICAgTW91c2VDb25zdHJhaW50OiBNYXR0ZXIuTW91c2VDb25zdHJhaW50LFxuICAgICAgICB9XG5cbiAgICB9XG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLm9iamVjdHMgPSB7XG4gICAgICAgICAgICBlbmdpbmU6IHRoaXMubW9kdWxlcy5FbmdpbmUuY3JlYXRlKCksXG4gICAgICAgICAgICByZW5kZXI6IHRoaXMubW9kdWxlcy5SZW5kZXIuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5ib2R5LFxuICAgICAgICAgICAgICAgIGVuZ2luZTogdGhpcy5vYmplY3RzLmVuZ2luZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgd2lyZWZyYW1lczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHJ1bm5lcjogdGhpcy5tb2R1bGVzLlJ1bm5lci5jcmVhdGUoKSxcbiAgICAgICAgICAgIG1vdXNlOiB0aGlzLm1vZHVsZXMuTW91c2UuY3JlYXRlKHRoaXMub2JqZWN0cy5yZW5kZXIuY2FudmFzKSxcbiAgICAgICAgICAgIG1vdXNlQ29uc3RyYWludDogdGhpcy5tb2R1bGVzLk1vdXNlQ29uc3RyYWludC5jcmVhdGUodGhpcy5vYmplY3RzLmVuZ2luZSwge1xuICAgICAgICAgICAgICAgIG1vdXNlOiB0aGlzLm9iamVjdHMubW91c2UsXG4gICAgICAgICAgICAgICAgY29uc3RyYWludDoge1xuICAgICAgICAgICAgICAgICAgICBzdGlmZm5lc3M6IDAuMixcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0Qm9kaWVzKCkge1xuICAgICAgICB0aGlzLmJvZGllcyA9IHtcbiAgICAgICAgICAgIGJhbGwgOiB0aGlzLm1vZHVsZXMuQm9kaWVzLmNpcmNsZSg0MDAsIDIwMCwgMjApLFxuICAgICAgICAgICAgYm94QiA6IHRoaXMubW9kdWxlcy5Cb2RpZXMucmVjdGFuZ2xlKDUwLCAzMDAsIDQwLCAyMDAsIHsgaXNTdGF0aWM6IHRydWUgfSksXG4gICAgICAgICAgICBncm91bmQgOiB0aGlzLm1vZHVsZXMuQm9kaWVzLnJlY3RhbmdsZSg1MDAsIDAsIDEwMDAsIDIwLCB7XG4gICAgICAgICAgICAgICAgaXNTdGF0aWM6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJ2JsdWUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByb29mIDogdGhpcy5tb2R1bGVzLkJvZGllcy5yZWN0YW5nbGUoNTAwLCA2MDAsIDEwMDAsIDIwLCB7XG4gICAgICAgICAgICAgICAgaXNTdGF0aWM6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGxTdHlsZTogJ3JlZCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHdhbGwgOiB0aGlzLm1vZHVsZXMuQm9kaWVzLnJlY3RhbmdsZSg5MDAsIDMwMCwgMjAsIDEwMDAsIHtcbiAgICAgICAgICAgICAgICBpc1N0YXRpYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbFN0eWxlOiAnZ3JlZW4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB3YWxsTGVmdCA6IHRoaXMubW9kdWxlcy5Cb2RpZXMucmVjdGFuZ2xlKDAsIDMwMCwgMjAsIDEwMDAsIHtcbiAgICAgICAgICAgICAgICBpc1N0YXRpYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsbFN0eWxlOiAnZ3JlZW4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBldmVudHMoKXtcblxuRXZlbnRzLm9uKHRoaXMub2JqZWN0cy5tb3VzZUNvbnN0cmFpbnQsIFwibW91c2Vtb3ZlXCIsIChlKT0+e1xuICAgIE1hdHRlck5vZGUubW9kdWxlcy5Cb2R5LnNldFBvc2l0aW9uKGJveEIsIHsgeDogNjAsIHk6IGUubW91c2UucG9zaXRpb24ueSB9KTtcbiAgICBjb25zb2xlLmxvZyhcImJveFwiLGJveEIpXG4gIH0pXG4gIFxuICBFdmVudHMub24obW91c2VDb25zdHJhaW50LCBcIm1vdXNldXBcIiwgKGUpPT57XG4gICAgTWF0dGVyTm9kZS5tb2R1bGVzLkJvZHkuc2V0VmVsb2NpdHkoYmFsbCwgeyB4OiA1LCB5OiA1IH0pO1xuICBcbiAgfSlcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiTWF0dGVyIiwiRXZlbnRzIiwibWF0dGVySnNNb2R1bGVzIiwiY3JlYXRlIiwib2JqZWN0cyIsImVuZ2luZSIsIm1vZHVsZXMiLCJFbmdpbmUiLCJyZW5kZXIiLCJSZW5kZXIiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJib2R5Iiwib3B0aW9ucyIsImJhY2tncm91bmQiLCJ3aXJlZnJhbWVzIiwid2lkdGgiLCJoZWlnaHQiLCJydW5uZXIiLCJSdW5uZXIiLCJtb3VzZSIsIk1vdXNlIiwiY2FudmFzIiwibW91c2VDb25zdHJhaW50IiwiTW91c2VDb25zdHJhaW50IiwiY29uc3RyYWludCIsInN0aWZmbmVzcyIsInZpc2libGUiLCJpbml0Qm9kaWVzIiwiYm9kaWVzIiwiYmFsbCIsIkJvZGllcyIsImNpcmNsZSIsImJveEIiLCJyZWN0YW5nbGUiLCJpc1N0YXRpYyIsImdyb3VuZCIsImZpbGxTdHlsZSIsInJvb2YiLCJ3YWxsIiwid2FsbExlZnQiLCJldmVudHMiLCJvbiIsImUiLCJNYXR0ZXJOb2RlIiwiQm9keSIsInNldFBvc2l0aW9uIiwieCIsInkiLCJwb3NpdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJzZXRWZWxvY2l0eSIsImNvbnN0cnVjdG9yIiwiQ29tcG9zaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/matterTools.ts\n"));

/***/ })

});