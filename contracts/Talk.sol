

//SPDX-License-Identifier: MIT

pragma solidity^0.8.17;

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

