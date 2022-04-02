// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract MoodDiary {
    string mood;

    //Function to set mood in the smart contract
    function setMood(string memory _mood) public {
        mood = _mood;
    }

    //function to read mood in the smart contract
    function getMood() public view returns (string memory) {
        return mood;
    }
}
