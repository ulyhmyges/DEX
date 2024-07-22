// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import {Script, console} from "forge-std/Script.sol";
import {TokenFactory} from "../src/TokenFactory.sol";
import {Token} from "../src/Token.sol";

contract TokenFactoryScript is Script {
    TokenFactory public token_factory;

    function run() public {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));
        token_factory = new TokenFactory();
        uint256 nb = token_factory.getTokenNumber();
        console.log("nb: ", nb);
        console.log("sender:", msg.sender);
        token_factory.createToken(55, "Coin", "CN");
        console.log(token_factory.getTokenNumber());
        address add = token_factory.getTokens()[0];
        console.log(Token(add).totalSupply());
        console.log(Token(add).symbol());
        vm.stopBroadcast();
    }
}