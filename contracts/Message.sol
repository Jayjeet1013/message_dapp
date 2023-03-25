

//SPDX-License-Identifier: MIT

pragma solidity>0.5.0 <0.9.0;

contract talk{

       struct Memo{
        string message;
        uint256 timestamp;
        address from;
       }

       Memo[]  memos;
      

       function setMessage(string memory message) public {
        memos.push(Memo(message,block.timestamp,msg.sender));
       }

       function getMemos() public view returns(Memo[] memory){
        return memos;
       }

}

