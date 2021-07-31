"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../../routes");

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\blockchain\\kickstart\\pages\\campaigns\\requests\\new.js?entry";


var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            description: '',
            recipient: '',
            loading: false,
            errorMessage: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, _this$state, description, value, recipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({ loading: true, errorMessage: '' });

                                campaign = (0, _campaign2.default)(_this.props.address);
                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;
                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({
                                    from: accounts[0]
                                });

                            case 10:

                                // navigate back to the request lists
                                _routes.Router.pushRoute("/campaigns/" + _this.props.address + "/requests");

                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context["catch"](4);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 16:

                                _this.setState({ loading: false });

                            case 17:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestNew, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, "Back")), _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, "Create a Request"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, "Description"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, "Value in Ether"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, "Recipient"), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.recipient,
                onChange: function onChange(event) {
                    return _this3.setState({ recipient: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            })), _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: "Oops!",
                content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }), _react2.default.createElement(_semanticUiReact.Button, {
                loading: this.state.loading,
                primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, "Create")));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt("return", { address: address });

                            case 2:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFTOztBQUNoQyxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQVk7Ozs7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUVGO21CQUFNLEFBQ0ksQUFDTjt5QkFGRSxBQUVVLEFBQ1o7dUJBSEUsQUFHUSxBQUNWO3FCQUpFLEFBSU0sQUFDUjswQixBQUxFLEFBS1c7QUFMWCxBQUNGLGlCLEFBYUo7aUdBQVMsaUJBQUEsQUFBTyxPQUFQOzBFQUFBOzs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDTDtzQ0FBQSxBQUFNLEFBRU47O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxNQUFNLGNBQTdCLEFBQWMsQUFBNEIsQUFFcEM7O0FBTEQsMkNBS1ksd0JBQVMsTUFBQSxBQUFLLE1BTDFCLEFBS1ksQUFBb0I7OENBQ0ssTUFOckMsQUFNMEMsT0FOMUMsQUFNRywwQkFOSCxBQU1HLGFBTkgsQUFNZ0Isb0JBTmhCLEFBTWdCLE9BTmhCLEFBTXVCLHdCQU52QixBQU11QjtnREFOdkI7Z0RBQUE7dUNBU3NCLGNBQUEsQUFBSyxJQVQzQixBQVNzQixBQUFTOztpQ0FBMUI7QUFUTCxvREFBQTtnREFBQTtnREFVSyxBQUFTLFFBQVQsQUFBaUIsY0FBakIsQUFBK0IsYUFBYSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsT0FBN0QsQUFBNEMsQUFBd0IsVUFBcEUsQUFBOEUsV0FBOUUsQUFDTDswQ0FDUyxTQVpULEFBVUssQUFDQSxBQUNJLEFBQVM7QUFEYixBQUNGLGlDQUZFOztpQ0FLTjs7QUFDQTsrQ0FBQSxBQUFPLDBCQUF3QixNQUFBLEFBQUssTUFBcEMsQUFBMEMsVUFoQnpDOztnREFBQTtBQUFBOztpQ0FBQTtnREFBQTtnRUFtQkQ7O3NDQUFBLEFBQUssU0FBUyxFQUFDLGNBQWEsWUFuQjNCLEFBbUJELEFBQWMsQUFBa0I7O2lDQUdwQzs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0F0QlYsQUFzQkwsQUFBYyxBQUFTOztpQ0F0QmxCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBMkJEO3lCQUNKOzttQ0FFSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUVJO0FBRko7QUFBQSxhQUFBLGtCQUVJLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0Qzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSFIsQUFFSSxBQUNJLEFBS0osMEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBUkosQUFRSSxBQUVBLHFDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLGdDQUFBLEFBQUM7dUJBQ1csS0FBQSxBQUFLLE1BRGpCLEFBQ3VCLEFBQ25COzBCQUFXLHlCQUFBOzJCQUFPLE9BQUEsQUFBSyxTQUFTLEVBQUUsYUFBWSxNQUFBLEFBQU0sT0FBekMsQUFBTyxBQUFjLEFBQTJCO0FBRi9EOzs4QkFBQTtnQ0FIUixBQUNJLEFBRUksQUFNSjtBQU5JO0FBQ0ksaUNBS1AsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsbUNBQUEsQUFBQzt1QkFDVyxLQUFBLEFBQUssTUFEakIsQUFDdUIsQUFDbkI7MEJBQVUseUJBQUE7MkJBQU8sT0FBQSxBQUFLLFNBQVMsRUFBQyxPQUFNLE1BQUEsQUFBTSxPQUFsQyxBQUFPLEFBQWMsQUFBb0I7QUFGdkQ7OzhCQUFBO2dDQVhSLEFBU0ksQUFFSSxBQU1KO0FBTkk7QUFDSSxpQ0FLUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw4QkFBQSxBQUFDO3VCQUNXLEtBQUEsQUFBSyxNQURqQixBQUN1QixBQUNuQjswQkFBVSx5QkFBQTsyQkFBTyxPQUFBLEFBQUssU0FBUyxFQUFDLFdBQVUsTUFBQSxBQUFNLE9BQXRDLEFBQU8sQUFBYyxBQUF3QjtBQUYzRDs7OEJBQUE7Z0NBbkJSLEFBaUJJLEFBRUksQUFNSjtBQU5JO0FBQ0ksaUNBS1IsQUFBQzt1QkFBRCxBQUVJO3dCQUZKLEFBRVcsQUFDUDt5QkFBUyxLQUFBLEFBQUssTUFIbEIsQUFHd0I7OEJBSHhCO2dDQXpCSixBQXlCSSxBQVFBO0FBUkE7QUFDSSxnQ0FPSixBQUFDO3lCQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ3BCO3lCQUZBOzhCQUFBO2dDQUFBO0FBQUE7QUFDQSxlQTlDWixBQUVJLEFBVUksQUFpQ0ksQUFTZjs7Ozs7bUgsQUF4RjRCOzs7OztpQ0FDakI7QSwwQ0FBWSxNLEFBQU0sTSxBQUFsQjtrRUFFRCxFQUFFLFMsQUFBRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLEFBYlUsQUFvR3pCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9ibG9ja2NoYWluL2tpY2tzdGFydCJ9