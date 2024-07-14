// npx wagmi init
// npx wagmi generate

import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";
import { config } from "dotenv"

config()

export default defineConfig({
  out: "src/WagmiGenerated.ts",
  contracts: [
    {
      name: "TokenFactory",
      address: `0x${process.env.REACT_APP_TOKEN_FACTORY}`,
      abi: [
        { type: "constructor", inputs: [], stateMutability: "nonpayable" },
        {
          type: "function",
          name: "DEFAULT_ADMIN_ROLE",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "FACTORY_ROLE",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "STORE_RELAYER",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "createToken",
          inputs: [
            {
              name: "initialSupply",
              type: "uint256",
              internalType: "uint256",
            },
            { name: "name", type: "string", internalType: "string" },
            { name: "symbol", type: "string", internalType: "string" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "deployedTokens",
          inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getRoleAdmin",
          inputs: [{ name: "role", type: "bytes32", internalType: "bytes32" }],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getSupply",
          inputs: [
            { name: "_token", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTokenNumber",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getTokens",
          inputs: [],
          outputs: [{ name: "", type: "address[]", internalType: "address[]" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "grantRole",
          inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "hasRole",
          inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "me",
          inputs: [],
          outputs: [{ name: "", type: "address", internalType: "address" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceRole",
          inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            {
              name: "callerConfirmation",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "revokeRole",
          inputs: [
            { name: "role", type: "bytes32", internalType: "bytes32" },
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            { name: "interfaceId", type: "bytes4", internalType: "bytes4" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "tokenToSupply",
          inputs: [{ name: "", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "RoleAdminChanged",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "previousAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "newAdminRole",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleGranted",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "RoleRevoked",
          inputs: [
            {
              name: "role",
              type: "bytes32",
              indexed: true,
              internalType: "bytes32",
            },
            {
              name: "account",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "TokenCreated",
          inputs: [
            {
              name: "initialSupply",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "name",
              type: "string",
              indexed: false,
              internalType: "string",
            },
            {
              name: "symbol",
              type: "string",
              indexed: false,
              internalType: "string",
            },
          ],
          anonymous: false,
        },
        { type: "error", name: "AccessControlBadConfirmation", inputs: [] },
        {
          type: "error",
          name: "AccessControlUnauthorizedAccount",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
            { name: "neededRole", type: "bytes32", internalType: "bytes32" },
          ],
        },
      ],
    },
  ],
  plugins: [react()],
});
