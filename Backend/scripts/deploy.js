async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const PriceFeed = await ethers.getContractFactory("priceFetcher");
  const priceFeed = await PriceFeed.deploy();

  console.log("priceFetcher address:", priceFeed.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
