webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CourseListItem.js":
/*!**************************************!*\
  !*** ./components/CourseListItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CourseListItem; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");





var _jsxFileName = "/Users/alexandragergar/Desktop/catalog_sitel/components/CourseListItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var CourseListItem = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CourseListItem, _Component);

  var _super = _createSuper(CourseListItem);

  function CourseListItem() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CourseListItem);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CourseListItem, [{
    key: "render",
    value: function render() {
      var course = this.props.course;
      return __jsx("div", {
        className: "card col-md-10 offset-md-1 my-2 p-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "row no-gutters",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "col-md-2 bg-danger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }
      }, __jsx("img", {
        src: "/medstar-health.png",
        className: "card-img",
        alt: "course alt text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "col-md-10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: ".container-fluid",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "card-body p-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 15
        }
      }, __jsx("h5", {
        className: "card-title mb-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }
      }, course.title), __jsx("p", {
        className: "card-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }
      }, course.instructor), __jsx("div", {
        className: "row align-items-end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }
      }, __jsx("p", {
        className: "card-text col-3 mb-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 19
        }
      }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_6__["Star"], {
        size: 15,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }
      }), " ", __jsx(react_feather__WEBPACK_IMPORTED_MODULE_6__["Youtube"], {
        size: 15,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 40
        }
      })), __jsx("p", {
        className: "card-text courseListItem shortDescription col-9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 19
        }
      }, course.shortDescription)))))));
    }
  }]);

  return CourseListItem;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

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
/* harmony import */ var _data_coursedata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/coursedata */ "./data/coursedata.js");
var _this = undefined,
    _jsxFileName = "/Users/alexandragergar/Desktop/catalog_sitel/components/SearchResults.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var SearchResults = function SearchResults(props) {
  var results = _data_coursedata__WEBPACK_IMPORTED_MODULE_2__["data"].map(function (course) {
    return __jsx(_CourseListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: course.id,
      course: course,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    });
  });
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 6
    }
  }, results);
};

/* harmony default export */ __webpack_exports__["default"] = (SearchResults);

/***/ }),

/***/ "./data/coursedata.js":
/*!****************************!*\
  !*** ./data/coursedata.js ***!
  \****************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var data = [{
  id: 1,
  title: "Course Title One",
  instructor: "Jane Smith",
  shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus mauris a diam maecenas sed enim ut sem viverra. Neque viverra justo nec ultrices dui sapien eget mi proin. Amet consectetur adipiscing elit ut aliquam purus sit amet.",
  certificate: true,
  liveBroadcast: true,
  simulation: false
}, {
  id: 2,
  title: "Course Title Two",
  instructor: "Pryia Kane",
  shortDescription: "Mel in adhuc ancillae. Usu timeam blandit ad. Ius an denique tractatos torquatos, solum melius scripta cum ad, id nam vocent virtute disputando. Assum nonumy id ius, natum possim delenit ei mea. Mel ei elit sonet primis, sed an labitur vivendo insolens. At eripuit splendide usu. Eum mutat referrentur cu, id idque intellegebat mea, et pro quaestio disputationi voluptatibus. Et sed ceteros accumsan tacimates, mazim mundi qui ne, eu cum inani conclusionemque. Timeam consulatu mea ea. Ei cetero gloriatur sit.",
  certificate: false,
  liveBroadcast: true,
  simulation: true
}, {
  id: 3,
  title: "Course Title Three",
  instructor: "Jon Mann",
  shortDescription: "No harum consetetur sed. Per ex dolorem rationibus. Vero aliquando pro eu. Pri ea hinc delicatissimi concludaturque, quot veniam sensibus usu ei, cibo illud copiosae no vix. Iusto efficiantur eum an, elit regione ne per.",
  certificate: true,
  liveBroadcast: false,
  simulation: true
}, {
  id: 4,
  title: "Course Title Four",
  instructor: "Amanda Green",
  shortDescription: "Sea nostro nonumes atomorum no, sed id regione numquam percipit. Ei inani quidam quaeque duo, ut eum adipisci voluptatum. No duo brute ceteros, et indoctum periculis percipitur ius. Cu duo elitr reprimique accommodare, pri alia latine iudicabit ea. Habeo labore id pri, dico eligendi singulis cum et, mutat qualisque iracundia cum et.",
  certificate: true,
  liveBroadcast: false,
  simulation: true
}, {
  id: 5,
  title: "Course Title Five",
  instructor: "Steven Nima",
  shortDescription: "Ei inani quidam quaeque duo, ut eum adipisci voluptatum. No duo brute ceteros, et indoctum periculis percipitur ius. Cu duo elitr reprimique accommodare, pri alia latine iudicabit ea. Habeo labore id pri, dico eligendi singulis cum et, mutat qualisque iracundia cum et. No harum consetetur sed. Per ex dolorem rationibus. ",
  certificate: true,
  liveBroadcast: false,
  simulation: true
}];

/***/ }),

/***/ "./data/data.js":
false

})
//# sourceMappingURL=index.js.fb2bff524f01cc00d1aa.hot-update.js.map