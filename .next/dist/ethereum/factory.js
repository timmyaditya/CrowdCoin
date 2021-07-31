"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require("./build/CampaignFactory.json");

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//abi is the interface which is used to interact and access the methods of the contract
// we got this abi from the precompiled CampaignFactory.sol file in compile script whose output is stored in
//the build directory in CampaignFactory.json file
var abi = JSON.parse(_CampaignFactory2.default.interface);

//this address was saved when we had deployed the contract on rinkeby test network
// const address = "0x9a97DAAe33a96492e461F40ee2e6d64ba5f95490";

// second deploy
// const address = "0xAfbb5ADCFa0D8468Fa9CD19037CcC7440D4AD8fA";

// third deploy
// const address = "0xE539Ca7930f3c15295362B534DE3D71c43CC4856";

// fourth deploy
var address = "0xE9A157E723dbb0081C0fa07C0F6B0172ae05f04c";

var contractInstance = new _web2.default.eth.Contract(abi, address);

exports.default = contractInstance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJhYmkiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiLCJhZGRyZXNzIiwiY29udHJhY3RJbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBNEIsQUFBNUI7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQU0sTUFBTSxLQUFLLEFBQUwsTUFBVywwQkFBZ0IsQUFBM0IsQUFBWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQU0sVUFBVSxBQUFoQjs7QUFFQSxJQUFNLG1CQUFtQixJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FBc0IsQUFBdEIsS0FBMkIsQUFBM0IsQUFBekIsQUFFQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IkQ6L2Jsb2NrY2hhaW4va2lja3N0YXJ0In0=