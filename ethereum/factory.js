import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

//abi is the interface which is used to interact and access the methods of the contract
// we got this abi from the precompiled CampaignFactory.sol file in compile script whose output is stored in
//the build directory in CampaignFactory.json file
const abi = JSON.parse(CampaignFactory.interface);

//this address was saved when we had deployed the contract on rinkeby test network
// const address = "0x9a97DAAe33a96492e461F40ee2e6d64ba5f95490";

// second deploy
// const address = "0xAfbb5ADCFa0D8468Fa9CD19037CcC7440D4AD8fA";

// third deploy
// const address = "0xE539Ca7930f3c15295362B534DE3D71c43CC4856";

// fourth deploy
const address = "0xE9A157E723dbb0081C0fa07C0F6B0172ae05f04c";

const contractInstance = new web3.eth.Contract(abi, address);

export default contractInstance;