
const hre = require("hardhat");

async function main() {


  const Message = await hre.ethers.getContractFactory("Message");
  const message = await Message.deploy();

  await message.deployed();

  console.log("Your message is :", message.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
