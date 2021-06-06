// SPDX-License-Identifier: GPL-3.0
// Solidity program to   
// demonstrate how to  
// write a smart contract   
pragma solidity >= 0.6.0 < 0.8.5; 

// contract SimpleStorage {
//   uint storedData;

//   function set(uint x) public {
//     storedData = x;
//   }

//   function get() public view returns (uint) {
//     return storedData;
//   }
// }

contract StarNotary {

    string public starName;
    address public starOwner;

    event starClaimed(address owner);

    constructor() public {
        starName = "Awesome Udacity Star";
    }

    function claimStar() public {
        starOwner = msg.sender;
        emit starClaimed(msg.sender);
    }
}
