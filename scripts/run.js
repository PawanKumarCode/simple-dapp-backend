// const { hexStripZeros } = require("ethers/lib/utils")
// const { BigNumber } = require("@ethersproject/bignumber");
const hre = require("hardhat");

const main = async () => {
    const moodDiaryContractFactory = await hre.ethers.getContractFactory('MoodDiary');
    const moodDiaryContract = await moodDiaryContractFactory.deploy();
    await moodDiaryContract.deployed();
    console.log("Contract deployed to: ", moodDiaryContract.address);

    //call the setMood function
    let txn = await moodDiaryContract.setMood("Happy");
    // wait for the transaction
    await txn.wait();

    // get mood
    let mood = await moodDiaryContract.getMood();


    //convert bignumber to normal number
    console.log("My mood is ", mood);

};


const runMain = async () => {

    try {
        await main();
        process.exit(0);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();