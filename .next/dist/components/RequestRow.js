'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\blockchain\\kickstart\\components\\RequestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context.sent;
                                _context.next = 6;
                                return campaign.methods.approveRequest(_this.props.id).send({
                                    from: accounts[0]
                                });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.onFinalize = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context2.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context2.sent;
                                _context2.next = 6;
                                return campaign.methods.finalizeRequest(_this.props.id).send({
                                    from: accounts[0]
                                });

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x2) {
                return _ref3.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {

            var readyToFinalize = this.props.request.approvalCount > this.props.approversCount / 2;

            return _react2.default.createElement(_semanticUiReact.Table.Row, { disabled: this.props.request.complete, positive: readyToFinalize && !this.props.request.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, this.props.id), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, this.props.request.description), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _web2.default.utils.fromWei(this.props.request.value, 'ether')), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, this.props.request.recipient), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, this.props.request.approvalCount, '/', this.props.approversCount), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Approve')), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, this.props.request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Finalize')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJJY29uIiwiTGFiZWwiLCJNZW51IiwiVGFibGUiLCJCdXR0b24iLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJSZXF1ZXN0Um93Iiwib25BcHByb3ZlIiwiZXZlbnQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib25GaW5hbGl6ZSIsImZpbmFsaXplUmVxdWVzdCIsInJlYWR5VG9GaW5hbGl6ZSIsInJlcXVlc3QiLCJhcHByb3ZhbENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQU0sQUFBTyxBQUFNLEFBQU87O0FBQ25DLEFBQU8sQUFBVTs7OztBQUVqQixBQUFPLEFBQWM7Ozs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUVGO2lHQUFZLGlCQUFBLEFBQU8sT0FBUDs4QkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDRjtBQURFLDJDQUNTLHdCQUFTLE1BQUEsQUFBSyxNQUR2QixBQUNTLEFBQW9CO2dEQUQ3Qjt1Q0FFZSxjQUFBLEFBQUssSUFGcEIsQUFFZSxBQUFTOztpQ0FBMUI7QUFGRSxvREFBQTtnREFBQTtnREFHRixBQUFTLFFBQVQsQUFBaUIsZUFBZSxNQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFBK0M7MENBQzNDLFNBSkYsQUFHRixBQUFvRCxBQUNoRCxBQUFTO0FBRHVDLEFBQ3RELGlDQURFOztpQ0FIRTtpQ0FBQTtnREFBQTs7QUFBQTs0QkFBQTtBOzs7OzttQixBQVFaO2lHQUFhLGtCQUFBLEFBQU8sT0FBUDs4QkFBQTtnRkFBQTs4QkFBQTsyREFBQTtpQ0FDSDtBQURHLDJDQUNRLHdCQUFTLE1BQUEsQUFBSyxNQUR0QixBQUNRLEFBQW9CO2lEQUQ1Qjt1Q0FFYyxjQUFBLEFBQUssSUFGbkIsQUFFYyxBQUFTOztpQ0FBMUI7QUFGRyxxREFBQTtpREFBQTtnREFHSCxBQUFTLFFBQVQsQUFBaUIsZ0JBQWdCLE1BQUEsQUFBSyxNQUF0QyxBQUE0QyxJQUE1QyxBQUFnRDswQ0FDNUMsU0FKRCxBQUdILEFBQXFELEFBQ2pELEFBQVM7QUFEd0MsQUFDdkQsaUNBREU7O2lDQUhHO2lDQUFBO2lEQUFBOztBQUFBOzZCQUFBO0E7Ozs7Ozs7Ozs7aUNBUUwsQUFFSjs7Z0JBQU0sa0JBQWtCLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixnQkFBYyxLQUFBLEFBQUssTUFBTCxBQUFXLGlCQUFwRSxBQUFtRixBQUVuRjs7bUNBQ0ssY0FBRCx1QkFBQSxBQUFPLE9BQUksVUFBVSxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQWhDLEFBQXdDLFVBQVUsVUFBVSxtQkFBbUIsQ0FBQyxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQTNGLEFBQW1HOzhCQUFuRztnQ0FBQSxBQUVJO0FBRko7YUFBQSxrQkFFSyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQWE7QUFBYjtBQUFBLG9CQUFhLEFBQUssTUFGdEIsQUFFSSxBQUF3QixBQUN4QixxQkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQWE7QUFBYjtBQUFBLG9CQUFhLEFBQUssTUFBTCxBQUFXLFFBSDVCLEFBR0ksQUFBZ0MsQUFDaEMsOEJBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUFhO0FBQWI7QUFBQSw2QkFBYSxBQUFLLE1BQUwsQUFBVyxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBOUIsQUFBc0MsT0FKdkQsQUFJSSxBQUFhLEFBQTRDLEFBQ3pELDJCQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFBYTtBQUFiO0FBQUEsb0JBQWEsQUFBSyxNQUFMLEFBQVcsUUFMNUIsQUFLSSxBQUFnQyxBQUNoQyw0QkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQWE7QUFBYjtBQUFBLG9CQUFhLEFBQUssTUFBTCxBQUFXLFFBQXhCLEFBQWdDLGVBQWdCLFVBQUEsQUFBSyxNQU56RCxBQU1JLEFBQTJELEFBRTNELGlDQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBQ0ssQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixXQUFuQixBQUE4Qix1QkFBTSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLE1BQTRCLFNBQVMsS0FBckMsQUFBMEM7OEJBQTFDO2dDQUFBO0FBQUE7YUFBQSxFQVQ3QyxBQVFJLEFBQ3lDLEFBTXpDLDZCQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBQ0ssQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixXQUFuQixBQUE4Qix1QkFBUSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxRQUFPLE9BQXJCLE1BQTJCLFNBQVMsS0FBcEMsQUFBeUM7OEJBQXpDO2dDQUFBO0FBQUE7YUFBQSxFQWpCbkQsQUFDSSxBQWVJLEFBQzJDLEFBUXREOzs7OztBQUdMLEEsQUFsRHlCOztrQkFrRHpCLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiJEOi9ibG9ja2NoYWluL2tpY2tzdGFydCJ9