const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Pikachu", "Charmander", "Squirtle", "Bulbasaur"],
    [
      // Images
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    ],
    // HP Values
    [150, 150, 200, 150],
    // Attack Values
    [45, 50, 40, 55]
  );
  await gameContract.deployed();
  console.log(`Contract deployed to: ${gameContract.address}`);

  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log(`Token URI: ${returnedTokenUri}`);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

runMain();
