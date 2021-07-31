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

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../../../routes");

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require("../../../components/RequestRow");

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\blockchain\\kickstart\\pages\\campaigns\\requests\\index.js?entry";


var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: "renderRows",

        //used to render row for each request
        value: function renderRows() {
            var _this2 = this;

            return this.props.myrequests.map(function (request, index) {
                return _react2.default.createElement(_RequestRow2.default, {
                    key: index,
                    request: request,
                    address: _this2.props.address,
                    id: index,
                    approversCount: _this2.props.approversCount,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                    }
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, "Requests "), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests/new", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: "right", style: { marginBottom: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, "Add Request"))), _react2.default.createElement(_semanticUiReact.Table, { celled: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, "ID"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, "Description"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, "Amount"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, "Recipient"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, "Approval Count"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, "Approve"), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, "Finalize"))), _react2.default.createElement(_semanticUiReact.Table.Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, this.renderRows())), _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, "Found ", this.props.requestCount, " requests"));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, requestCount, myrequests, i, currReq, approversCount;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;

                                console.log(address);
                                campaign = (0, _campaign2.default)(address);
                                _context.next = 5;
                                return campaign.methods.getRequestCount().call();

                            case 5:
                                requestCount = _context.sent;

                                console.log(requestCount);

                                myrequests = [];
                                i = 0;

                            case 9:
                                if (!(i < requestCount)) {
                                    _context.next = 17;
                                    break;
                                }

                                _context.next = 12;
                                return campaign.methods.requests(i).call();

                            case 12:
                                currReq = _context.sent;

                                myrequests.push(currReq);

                            case 14:
                                i++;
                                _context.next = 9;
                                break;

                            case 17:
                                console.log(myrequests);

                                //this is some fancy js inshort it gets us all the request from our contract
                                //we have to use this because solidity doesnt have facility to return Request struct
                                // const requests = await Promise.all(
                                //     Array(requestCount).fill().map((element, index)=>{
                                //         return campaign.methods.requests(index).call()
                                //     })
                                // );
                                // const first = await campaign.methods.requests(1).call();
                                // console.log(first);
                                // // getting the total number of approvers for the approval count column in request row
                                _context.next = 20;
                                return campaign.methods.approversCount().call();

                            case 20:
                                approversCount = _context.sent;
                                return _context.abrupt("return", { address: address, requestCount: requestCount, myrequests: myrequests, approversCount: approversCount });

                            case 22:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkxpbmsiLCJDYW1wYWlnbiIsIkljb24iLCJMYWJlbCIsIk1lbnUiLCJUYWJsZSIsIlJlcXVlc3RSb3ciLCJSZXF1ZXN0SW5kZXgiLCJwcm9wcyIsIm15cmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJtYXJnaW5Cb3R0b20iLCJyZW5kZXJSb3dzIiwicmVxdWVzdENvdW50IiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdENvdW50IiwiY2FsbCIsImkiLCJyZXF1ZXN0cyIsImN1cnJSZXEiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVM7O0FBQ1QsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQWMsQUFDckIsQUFBUyxBQUFNLEFBQU8sQUFBTTs7OztBQUM1QixBQUFPLEFBQWdCOzs7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7OzthQWtDRjs7O3FDQUNZO3lCQUNSOzt3QkFBTyxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFRLEFBQy9DO3VDQUNJLEFBQUM7eUJBQUQsQUFDUyxBQUNMOzZCQUZKLEFBRWEsQUFDVDs2QkFBUyxPQUFBLEFBQUssTUFIbEIsQUFHd0IsQUFDcEI7d0JBSkosQUFJUSxBQUNKO29DQUFnQixPQUFBLEFBQUssTUFMekIsQUFLK0I7O2tDQUwvQjtvQ0FESixBQUNJLEFBUVA7QUFSTztBQUNJLGlCQURKO0FBRlIsQUFBTyxBQVdWLGFBWFU7Ozs7aUNBYUgsQUFDSjttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw4QkFBQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFoQixBQUF3QixTQUFRLE9BQU8sRUFBQyxjQUF4QyxBQUF1QyxBQUFlOzhCQUF0RDtnQ0FBQTtBQUFBO2VBSlosQUFFSSxBQUNJLEFBQ0ksQUFLUixrQ0FBQSxBQUFDLHdDQUFNLFFBQVA7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx1QkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSxnQ0FBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQUhKLEFBR0ksQUFDQSwyQkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQUpKLEFBSUksQUFDQSw4QkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQUxKLEFBS0ksQUFDQSxtQ0FBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQU5KLEFBTUksQUFDQSw0QkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQVRaLEFBQ0ksQUFDSSxBQU9JLEFBSVIsK0JBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkF0QlIsQUFTSSxBQWFJLEFBQ0ssQUFBSyxBQUlkLGdDQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUNXLGVBQUEsQUFBSyxNQURoQixBQUNzQixjQTdCOUIsQUFDSSxBQTJCSSxBQVNYOzs7OztpSCxBQXJGNEI7Ozs7O2lDQUNqQjtBLDBDQUFZLE0sQUFBTSxNQUMxQixBLEFBRFE7O3dDQUNSLEFBQVEsSUFBUixBQUFZLEFBQ047QSwyQ0FBVyx3QixBQUFBLEFBQVM7O3VDQUVDLFNBQUEsQUFBUyxRQUFULEFBQWlCLGtCLEFBQWpCLEFBQW1DOztpQ0FBeEQ7QSx3REFDTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVksQUFFUjs7QSw2Q0FDSSxBLEFBRFM7QSxvQyxBQUNQOzs7c0NBQUcsSSxBQUFFOzs7Ozs7dUNBQ1csU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsRyxBQUExQixBQUE2Qjs7aUNBQTdDO0EsbURBQ047OzJDQUFBLEFBQVcsS0FBWCxBQUFnQjs7aUNBRlM7QTs7OztpQ0FJN0I7d0NBQUEsQUFBUSxJQUFSLEFBQVksQUFFWjs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozt1Q0FDNkIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsaUIsQUFBakIsQUFBa0M7O2lDQUF6RDtBO2lFQUlDLEVBQUUsU0FBRixTQUFXLGNBQVgsY0FBeUIsWUFBekIsWUFBcUMsZ0IsQUFBckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyRGYsQSxBQTFGMkI7O2tCQTBGM0IsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9ibG9ja2NoYWluL2tpY2tzdGFydCJ9