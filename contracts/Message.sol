// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";

contract Message{
    string public message;
    
    function setmessage(string memory _message) public{
        message=_message;
    }

    function getmessage() public view returns(string memory){
        return message;
    }

    
}
