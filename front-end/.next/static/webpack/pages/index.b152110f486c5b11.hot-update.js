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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"matterJsModules\": function() { return /* binding */ matterJsModules; }\n/* harmony export */ });\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! matter-js */ \"./node_modules/matter-js/build/matter.js\");\n/* harmony import */ var matter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(matter_js__WEBPACK_IMPORTED_MODULE_0__);\n\nclass matterJsModules {\n    constructor(){\n        this.Engine = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Engine);\n        this.Render = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Render);\n        this.Runner = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Runner);\n        this.Bodies = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Bodies);\n        this.Body = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Body);\n        this.Composite = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Composite), this.Mouse = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().Mouse), this.MouseConstraint = (matter_js__WEBPACK_IMPORTED_MODULE_0___default().MouseConstraint);\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9tYXR0ZXJUb29scy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0U7QUFHN0QsTUFBT0M7SUFVVkMsYUFBYTtRQUNULElBQUksQ0FBQ0MsTUFBTSxHQUFHSCx5REFBYTtRQUMzQixJQUFJLENBQUNJLE1BQU0sR0FBR0oseURBQWE7UUFDM0IsSUFBSSxDQUFDSyxNQUFNLEdBQUdMLHlEQUFhO1FBQzNCLElBQUksQ0FBQ00sTUFBTSxHQUFHTix5REFBYTtRQUMzQixJQUFJLENBQUNPLElBQUksR0FBS1AsdURBQVc7UUFFekIsSUFBSSxDQUFDUSxTQUFTLEdBQUdSLDREQUFnQixFQUNqQyxJQUFJLENBQUNTLEtBQUssR0FBR1Qsd0RBQVksRUFDekIsSUFBSSxDQUFDVSxlQUFlLEdBQUdWLGtFQUFzQjtJQUVqRDtBQUlKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbWF0dGVyVG9vbHMudHM/ODA0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWF0dGVyLCB7ICBFdmVudHMsICBFbmdpbmUsIFdvcmxkLCBCb2RpZXMgfSBmcm9tIFwibWF0dGVyLWpzXCI7XG5cblxuZXhwb3J0IGNsYXNzICBtYXR0ZXJKc01vZHVsZXMgIHtcbiAgICBFbmdpbmU6IHR5cGVvZiBNYXR0ZXIuRW5naW5lO1xuICAgIFJlbmRlcjogdHlwZW9mIE1hdHRlci5SZW5kZXI7XG4gICAgUnVubmVyOiB0eXBlb2YgTWF0dGVyLlJ1bm5lcjtcbiAgICBCb2RpZXM6IHR5cGVvZiBNYXR0ZXIuQm9kaWVzO1xuICAgIEJvZHk6ICAgdHlwZW9mIE1hdHRlci5Cb2R5O1xuICAgIENvbXBvc2l0ZTogdHlwZW9mIE1hdHRlci5Db21wb3NpdGVcbiAgICBNb3VzZTogdHlwZW9mIE1hdHRlci5Nb3VzZVxuICAgIE1vdXNlQ29uc3RyYWludDogdHlwZW9mIE1hdHRlci5Nb3VzZUNvbnN0cmFpbnRcbiAgICAgXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5FbmdpbmUgPSBNYXR0ZXIuRW5naW5lXG4gICAgICAgIHRoaXMuUmVuZGVyID0gTWF0dGVyLlJlbmRlclxuICAgICAgICB0aGlzLlJ1bm5lciA9IE1hdHRlci5SdW5uZXJcbiAgICAgICAgdGhpcy5Cb2RpZXMgPSBNYXR0ZXIuQm9kaWVzXG4gICAgICAgIHRoaXMuQm9keSAgID0gTWF0dGVyLkJvZHlcblxuICAgICAgICB0aGlzLkNvbXBvc2l0ZSA9IE1hdHRlci5Db21wb3NpdGUsXG4gICAgICAgIHRoaXMuTW91c2UgPSBNYXR0ZXIuTW91c2UsXG4gICAgICAgIHRoaXMuTW91c2VDb25zdHJhaW50ID0gTWF0dGVyLk1vdXNlQ29uc3RyYWludDtcblxuICAgIH1cblxuICAgIGNyZWF0ZVxuICAgIFxufSJdLCJuYW1lcyI6WyJNYXR0ZXIiLCJtYXR0ZXJKc01vZHVsZXMiLCJjb25zdHJ1Y3RvciIsIkVuZ2luZSIsIlJlbmRlciIsIlJ1bm5lciIsIkJvZGllcyIsIkJvZHkiLCJDb21wb3NpdGUiLCJNb3VzZSIsIk1vdXNlQ29uc3RyYWludCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/matterTools.ts\n"));

/***/ })

});