const main = async () => {
    const moodDiaryContractFactory = await hre.ethers.getContractFactory('MoodDiary');
    const moodDiaryContract = await moodDiaryContractFactory.deploy();
    const contractAddress = "0x78Bb667D7B9258F9CDe089F789b390896dcAdD72"
    await moodDiaryContract.deployed();
    console.log("Contract deployed to:", moodDiaryContract.address);

    // Call the function.
    let txn = await moodDiaryContract.setMood("Good");
    // Wait for it to be mined.
    await txn.wait()

    // get mood
    let mood = await moodDiaryContract.getMood();
    //get mood
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