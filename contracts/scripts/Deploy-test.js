const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {

    // Compile our Contracts, just in case
    await hre.run('compile');

    const accounts = await ethers.getSigners();

    console.log("Running deployment")

    // This gets the contract from 
    const Token = await ethers.getContractFactory("OrangeDAONFT");
    const token = await Token.deploy();
    console.log("Awaiting deployment")
    console.log(token.address)
    await token.deployed();
    await token.safeMint(tokenRecipient);
    await token.delegate(tokenRecipient);
    await token.safeMint("0xd466C43A5588Bc4A337AE95Bf7dee6064Fd92341");
    console.log(await token.balanceOf(tokenRecipient))

    const TimelockController = await ethers.getContractFactory("TimelockController");
    // const governor = await upgrades.deployProxy(Governor, [token.address]);
    const timelockController = await TimelockController.deploy(172800, [], ["0x0000000000000000000000000000000000000000"]);
    await timelockController.deployed();

    console.log("Timelock deployed")


    const Governor = await ethers.getContractFactory("OrangeDAOGovernor");
    const governor = await upgrades.deployProxy(Governor, [token.address, timelockController.address]);
    // const governor = await Governor.deploy(token.address, timelockController.address);
    await governor.deployed();

    await timelockController.grantRole(ethers.utils.keccak256(ethers.utils.toUtf8Bytes("TIMELOCK_ADMIN_ROLE")), governor.address)
    await timelockController.grantRole(ethers.utils.keccak256(ethers.utils.toUtf8Bytes("PROPOSER_ROLE")), governor.address)

    const transferCalldata = Token.interface.encodeFunctionData('safeMint', ["0xd466C43A5588Bc4A337AE95Bf7dee6064Fd92341"]);

    console.log(await governor)

    await governor["propose(address[],uint256[],bytes[],string)"](
        [token.address],
        [0],
        [transferCalldata],
        "Proposal #1: Oboard new user",
    );

    const sevenDays = 1 * 24 * 60 * 60;

    const blockNumBefore = await ethers.provider.getBlockNumber();
    const blockBefore = await ethers.provider.getBlock(blockNumBefore);
    const timestampBefore = blockBefore.timestamp;

    await ethers.provider.send('evm_increaseTime', [sevenDays]);
    await ethers.provider.send('evm_mine');

    const blockNumAfter = await ethers.provider.getBlockNumber();
    const blockAfter = await ethers.provider.getBlock(blockNumAfter);
    const timestampAfter = blockAfter.timestamp;

    console.log("Block advanced")

    console.log("Governor Address: ", governor.address)

    console.log("OrangeDAO Balance of test account: ", await token.balanceOf(accounts[4].address))
    console.log("OrangeDAO Balance of test account: ", await token.balanceOf(accounts[0].address))
}

module.exports = {
    deploy: main
}