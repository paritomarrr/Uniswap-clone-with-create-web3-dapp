// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
pragma abicoder v2;

import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";

contract SwapToken {
  ISwapRouter public immutable swapRouter = ISwapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564); // mainnet swap router address, see https://docs.uniswap.org/reference/periphery/interfaces/router
  address public immutable WETH9 = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2; // mainnet WETH9 address, see https://docs.uniswap.org/reference/core/weth9
  address public immutable DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F; // mainnet DAI address, see https://docs.uniswap.org/reference/core/interfaces/IUniswapV3Factory
  address public immutable USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48; // mainnet USDC address, see https://docs.uniswap.org/reference/core/interfaces/IUniswapV3Factory 

  function swapExactInputString (uint amountIn) external returns (uint amountOut) {
    // safeTransferFrom ensures that the from address has given this contract allowance to transfer the amountIn
    TransferHelper.safeTransferFrom(WETH9, msg.sender, address(this), amountIn);
    // safeApprove approves the swapRouter to spend the amountIn
    TransferHelper.safeApprove(WETH9, address(swapRouter), amountIn);
    // exactInputSingle swaps exactly amountIn of WETH9 for as much DAI as possible
    ISwapRouter.ExactInputSingleParams memory params =
      ISwapRouter.ExactInputSingleParams({
        tokenIn: WETH9, // the token address you wish to transfer from
        tokenOut: DAI, // the token address you wish to receive
        fee: 3000, // pool fee in hundredths of a bip
        recipient: msg.sender, // recipient of the output tokens
        deadline: block.timestamp, // deadline to complete the swap by
        amountIn: amountIn, // amount of input tokens
        amountOutMinimum: 0, // specifies the minimum amount of output tokens that must be received
        sqrtPriceLimitX96: 0 // no price limit
      });

      amountOut = swapRouter.exactInputSingle(params);
  }

  function swapExactInputString(uint amountOut, uint amountInMaximum) {
    TransferHelper.safeTransferFrom(WETH9, msg.sender, address(this), amountInMaximum);
    TransferHelper.safeApprove(WETH9, address(this), amountInMaximum);
    ISwapRouter.ExactOutputSingleParams memory params = ISwapRouter.ExactInputParams({
      tokenIn: WETH9,
      tokenOut: DAI,
      fee: 3000,
      recipient: msg.sender,
      deadline: block.timestamp,
      amountOut: amountOut,
      amountInMaximum: amountInMaximum,
      sqrtPriceLimitX96: 0
    });

    amountIn = swapRouter.exactOutputSingle(params);
    if(amountIn < amountInMaximum) {
      TransferHelper.safeApprove(WETH9, address(swapRouter), 0);
      TransferHelper.safeTransfer(WETH9, msg.sender, amountInMaximum - amountIn);
    }
  }
}