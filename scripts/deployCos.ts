// scripts/deployCos.ts
import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying CosmoNft contract with account:", deployer.address);

  const CosmoNft = await ethers.getContractFactory("CosmoNft");
  const cosmoNft = await CosmoNft.deploy("cosmo", 'cos', 'ipfs://QmbQrCJfioGJGoL7zA1kG5XCSzYcjh77Lstg8YfQC2NSSJ/1.png');

  await cosmoNft.waitForDeployment();

  console.log("CosmoNft deployed to:", await cosmoNft.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
