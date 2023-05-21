// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IWETH {
    function deposit() external payable; // deposit ETH to get WETH
    function totalSupply() external view returns (uint); // WETH total supply
    function withdraw(uint) external; // withdraw WETH to get ETH
    function balanceOf(address account) external view returns (uint); // WETH balance of an account
    function transfer (address to, uint value) external returns (bool); // transfer WETH to another account
    function allowance(address spender, uint value) external view returns (bool); // WETH allowance of an account
    function approve(address spender, uint value) external returns (bool); // approve WETH to another account
    function transferFrom(address from, address to, uint value) external returns (bool); // transfer WETH from an account to another account
    event Transfer(address indexed from, address indexed to, uint value); // WETH transfer event
    event Approve(address indexed owner, address indexed spender, uint value); // WETH approve event
}