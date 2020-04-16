webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ChoiceContainer.js":
false,

/***/ "./components/Filter.js":
/*!******************************!*\
  !*** ./components/Filter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _FilterItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FilterItem */ "./components/FilterItem.js");







var _jsxFileName = "/Users/alexandragergar/Desktop/catalog_sitel/components/Filter.js",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Filter = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Filter, _Component);

  var _super = _createSuper(Filter);

  function Filter() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Filter);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Filter, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "row px-4 pt-3 justify-content-between",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 7
        }
      }, __jsx(ListOfShownCatagories, {
        listOfAllCatagories: this.props.filterCatagories,
        numOfCatagoriesToShow: this.props.numOfCatagoriesToShow,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Filter;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]); // This reduces the list to a desired number defaults to 3, but will then give it the ability to expanded when needed


Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Filter, "defaultProps", {
  numOfCatagoriesToShow: 3
});



var ListOfShownCatagories = function ListOfShownCatagories(props) {
  return props.listOfAllCatagories.reduce(function (shownCatagories, catagory, index) {
    if (index < props.numOfCatagoriesToShow) {
      shownCatagories.push(__jsx(_FilterItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: index,
        catagoryData: catagory,
        onCheckBoxClick: props.onCheckBoxClick,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }
      }));
    }

    return shownCatagories;
  }, []);
};

/***/ }),

/***/ "./components/FilterItem.js":
/*!**********************************!*\
  !*** ./components/FilterItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FilterItemContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterItemContainer */ "./components/FilterItemContainer.js");
/* harmony import */ var _data_filtercatagorydata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/filtercatagorydata */ "./data/filtercatagorydata.js");
var _this = undefined,
    _jsxFileName = "/Users/alexandragergar/Desktop/catalog_sitel/components/FilterItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var FilterItem = function FilterItem(props) {
  return __jsx("div", {
    className: "col-lg-3 col-md-6 pt-2",
    key: props.catagoryData.key,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("h6", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, props.catagoryData.name), __jsx(_FilterItemContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    catagoryData: props.catagoryData.options,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FilterItem);

/***/ }),

/***/ "./components/FilterItemContainer.js":
/*!*******************************************!*\
  !*** ./components/FilterItemContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterItemContainer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Checkbox */ "./components/Checkbox.js");







var _jsxFileName = "/Users/alexandragergar/Desktop/catalog_sitel/components/FilterItemContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var FilterItemContainer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FilterItemContainer, _Component);

  var _super = _createSuper(FilterItemContainer);

  function FilterItemContainer(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FilterItemContainer);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onCheckboxChange", function (event) {
      var item = event.target.name;
      var isChecked = event.target.checked;

      _this.setState(function (prevState) {
        return {
          checkedItems: prevState.checkedItems.set(item, isChecked)
        };
      });

      console.log(event.target.name);
    });

    _this.state = {
      checkedItems: new Map()
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FilterItemContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var checkboxes = this.props.catagoryData.map(function (item) {
        return __jsx("li", {
          className: "list-group-item",
          key: item.key,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 11
          }
        }, __jsx("label", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }
        }, __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
          name: item.name,
          checked: _this2.state.checkedItems.get(item.name),
          onChange: _this2.onCheckboxChange,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }
        }), __jsx("span", {
          className: "pl-2",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }
        }, item.label)));
      });
      return __jsx("ul", {
        className: "list-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 12
        }
      }, checkboxes);
    }
  }]);

  return FilterItemContainer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SearchBar */ "./components/SearchBar.js");
/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SearchResults */ "./components/SearchResults.js");
/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Filter */ "./components/Filter.js");
/* harmony import */ var _data_filtercatagorydata__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data/filtercatagorydata */ "./data/filtercatagorydata.js");
/* harmony import */ var _components_FilterButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/FilterButton */ "./components/FilterButton.js");







var _jsxFileName = "/Users/alexandragergar/Desktop/catalog_sitel/pages/search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var Search = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Search, _Component);

  var _super = _createSuper(Search);

  function Search() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      searchResults: null,
      filterCatagories: _data_filtercatagorydata__WEBPACK_IMPORTED_MODULE_12__["filterCatagories"],
      numOfCatagoriesToShow: 3,
      filterButtonText: 'See All Filter Options',
      filterSearchOptionsList: []
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "submitSearchValue", function (text) {
      console.log(text);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onFilterButtonClick", function (event) {
      var _this$state = _this.state,
          numOfCatagoriesToShow = _this$state.numOfCatagoriesToShow,
          filterCatagories = _this$state.filterCatagories,
          filterButtonText = _this$state.filterButtonText;
      event.preventDefault();
      numOfCatagoriesToShow == filterCatagories.length ? _this.setState({
        numOfCatagoriesToShow: 3,
        filterButtonText: "See All Filter Options"
      }) : _this.setState({
        numOfCatagoriesToShow: filterCatagories.length,
        filterButtonText: "See Less Filter Options"
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onCheckBoxClick", function (data) {
      console.log(data);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Search, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Course Search",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 7
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }, "Find Your Next Course"), __jsx("div", {
        className: "row align-items-center justify-content-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "col-md-7",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }, __jsx(_components_SearchBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        submitSearchValue: function submitSearchValue(text) {
          return _this2.submitSearchValue(text);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "col-md-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      }, __jsx(_components_FilterButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: this.state.filterButtonText,
        onClick: this.onFilterButtonClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }
      }))), __jsx(_components_Filter__WEBPACK_IMPORTED_MODULE_11__["default"], {
        filterCatagories: _data_filtercatagorydata__WEBPACK_IMPORTED_MODULE_12__["filterCatagories"],
        numOfCatagoriesToShow: this.state.numOfCatagoriesToShow,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }
      }), __jsx("h4", {
        className: "pt-3 ml-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }
      }, "Search Results"), __jsx(_components_SearchResults__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onCheckBoxClick: this.onCheckBoxClick,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.5d844f3020bb7296f5dc.hot-update.js.map