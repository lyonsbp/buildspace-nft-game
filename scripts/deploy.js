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
    [45, 50, 40, 55],
    "Team Rocket", // Boss Name
    "https://cdn.vox-cdn.com/thumbor/Ffrvj4ltYfBKJni5dvdYaaGrGP4=/0x0:1432x1080/920x613/filters:focal(616x165:844x393):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64687982/chrome_2019_07_08_14_17_05.0.jpg", // Boss image
    1000, // Boss hp
    30 // Boss attack
  );
  await gameContract.deployed();
  console.log(`Contract deployed to: ${gameContract.address}`);
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
