webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SearchResults.js":
/*!*************************************!*\
  !*** ./components/SearchResults.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CourseListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseListItem */ "./components/CourseListItem.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data */ "./data/data.js");
var _this = undefined,
    _jsxFileName = "/Users/alexandragergar/Desktop/catalog_sitel/components/SearchResults.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import styles from "./SearchResults.module.css";

var SearchResults = function SearchResults(props) {
  var results = _data_data__WEBPACK_IMPORTED_MODULE_2__["data"].map(function (course, index) {
    return __jsx(_CourseListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      course: course,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    });
  });
  return __jsx(_CourseListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SearchResults);

/***/ })

})
//# sourceMappingURL=index.js.3f5c7182f0cd7f569950.hot-update.js.map