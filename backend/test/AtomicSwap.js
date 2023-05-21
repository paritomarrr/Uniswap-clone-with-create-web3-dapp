const { expect } = require("chai");
const { ethers } = require("hardhat");

const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

describe("AtomicSwap", () => {
  let atomicSwapToken;
  let accounts;
  let weth;
  let dai;
  let usdc;

  before(async () => {
    accounts = await ethers.getSigners(1);
    const AtomicSwapToken = await ethers.getContractFactory("AtomicSwapToken");
    atomicSwapToken = await AtomicSwapToken.deploy();
    await atomicSwapToken.deployed();

    weth = await ethers.getContractAt("IWETH", WETH9);
    dai = await ethers.getContractAt("IERC20", DAI);
    usdc = await ethers.getContractAt("IERC20", USDC);

    console.log("AtomicSwapToken deployed to:", atomicSwapToken.address);
    console.log("Weth", weth.address);
    console.log("Dai", dai.address);
    console.log("Usdc", usdc.address);
    console.log("Accounts", accounts[0].address);
  });

  it("Should swap exact input single", async () => {
    const amountIn = 10n ** 18n;
    // deposit weth
    await weth.deposit({ value: amountIn });
    await weth.approve(atomicSwapToken.address, amountIn);
    console.log("Swap executed successfully!");

  });
});
