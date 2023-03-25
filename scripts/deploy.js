
const hre = require("hardhat");

async function main() {


  const talk = await hre.ethers.getContractFactory("talk");
  const contract = await talk.deploy();

  await contract.deployed();

  console.log("Your message is :", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
