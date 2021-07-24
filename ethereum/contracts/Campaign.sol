pragma solidity ^0.4.17;


contract CampaignFactory{
    address[] public deployedContracts;
    
    function createCampaign(uint minimum) public{
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedContracts.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[]){
        return deployedContracts;
    }
}


contract Campaign{
    
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        mapping(address=>bool) approvals;
        uint approvalCount;
    }
    
    address public manager;
    uint public minimumContribution;
    Request[] public requests;
    mapping(address=>bool) public approvers;
    uint public approversCount;
    
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    
    function Campaign(uint minimum, address creater) public{
        manager = creater;
        minimumContribution = minimum;
    }
    
    //send money to contract
    function contribute() public payable{
        require(msg.value> minimumContribution);
        if(!approvers[msg.sender]){
            approvers[msg.sender] = true;
            approversCount++;
        }
    }
    
    function createRequest(string description, uint value, address recipient) public restricted {
        //specifiying memory creates  a new instance in the memory
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0
        });
        
       // Request(description, value, recipient, false);
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        Request storage temp = requests[index];
        
        //check is the person has already donated to the campaign
        require(approvers[msg.sender]);
        
        //checking if the sender has voted earlier or not
        require(!temp.approvals[msg.sender]);
        
        temp.approvals[msg.sender]=true;
        temp.approvalCount++;
    }
    
    function finalizeRequest(uint index) public restricted{
        Request storage temp = requests[index];
        
        require(temp.approvalCount > (approversCount/2));
        require(!temp.complete);
        
        temp.recipient.transfer(temp.value);
        temp.complete = true;
    }

    function getSummary() public view returns ( uint, uint, uint, uint, address){
        return(
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }
    
    function getRequestCount() public view returns (uint){
        return requests.length;
    }
    
}