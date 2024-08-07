// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {TokenFactory} from "../src/TokenFactory.sol";
import {Token} from "../src/Token.sol";

contract TokenFactoryTest is Test {
    TokenFactory public tk;
    Token public myToken;

    address public myAdd = vm.envAddress("WALLET_ADDRESS");

    function setUp() public {
        vm.startPrank(myAdd);
        tk = new TokenFactory();
        vm.stopPrank();
    }

    // function test_getTokenNumber(uint256 supply, string memory name, string memory symbol) public {
    //     vm.startPrank(myAdd);
    //     assertEq(tk.getTokenNumber(), 0);

    //     // create a token
    //     tk.createToken(supply, name, symbol);

    //     assertEq(tk.getTokenNumber(), 1);
    //     vm.stopPrank();
    // }

    // function test_getTokens() public view {
    //     address[] memory tokens = tk.getTokens();
    //     uint256 len = tokens.length;
    //     assertEq(len, 0);
    // }

    // function test_createToken(uint256 initialSupply, string memory name, string memory symbol) public {
    //     vm.startPrank(myAdd);
    //     tk.createToken(initialSupply, name, symbol);
    //     address[] memory tokens = tk.getTokens();

    //     address add = tokens[0];
    //     myToken = Token(add);

    //     // tests sur le token créé
    //     assertEq(myToken.symbol(), symbol);
    //     assertEq(myToken.name(), name);
    //     assertEq(myToken.totalSupply(), initialSupply);
    //     assertEq(myToken.balanceOf(address(tk)), initialSupply);
    //     assertEq(myToken.decimals(), 18);

    //     // test supply stored on mapping tokenToSupply
    //     assertEq(tk.getSupply(add), initialSupply);
    //     assertEq(tk.getTokenNumber(), 1);
    //     vm.stopPrank();
    // }

    // function test_getSupply(uint256 supply, string memory name, string memory symbol) public {
    //     vm.startPrank(myAdd);
    //     assertEq(tk.getTokenNumber(), 0);
    //     tk.createToken(supply, name, symbol);
    //     assertEq(tk.getTokenNumber(), 1);
    //     address tokenAddress = tk.getTokens()[0];
    //     assertEq(tk.getSupply(tokenAddress), supply);
    //     assertEq(address(tk).balance, 0);
    //     assertEq(Token(tokenAddress).balanceOf(address(tk)), supply);
    //     vm.stopPrank();
    // }

    // function test_getTokenNumber_after() public view {
    //     assertEq(tk.getTokenNumber(), 1);
    // }
}
