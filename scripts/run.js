const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Pikachu", "Charmander", "Squirtle", "Bulbasaur"],
    [
      // Images
      "QmYoNrvQXHG6sL3jtD5Hb4fycVqDPp8za5G4Sdn6m9XcJh",
      "QmaS83WvaooGAts4BWp6hAgyQHa8QYkuqsGPx2DYiP77or",
      "QmXj79aXjVHHQzJooMg2BAnuVSuvhSrRcNWcSJstBtGNmD",
      "QmTH9DZ21D2rDpQcd459fufTCp9ENPqtkxWov5bA6d957N"
    ],
    // HP Values
    [150, 150, 200, 150],
    // Attack Values
    [45, 50, 40, 55],
    "Team Rocket", // Boss Name
    "QmdZkySVUdE3DVCbcgvheXxC5FSBXZXqrssFMwHRw6SzGM", // Boss image
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
