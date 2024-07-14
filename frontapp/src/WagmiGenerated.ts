import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenFactoryAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'FACTORY_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'STORE_RELAYER',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'initialSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
    name: 'createToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'deployedTokens',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_token', internalType: 'address', type: 'address' }],
    name: 'getSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTokenNumber',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getTokens',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'me',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'callerConfirmation', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'tokenToSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'initialSupply',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
      {
        name: 'symbol',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'TokenCreated',
  },
  { type: 'error', inputs: [], name: 'AccessControlBadConfirmation' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'neededRole', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
  },
] as const

export const tokenFactoryAddress =
  '0xD5A8F352C4f5E594163019C15dbcBbd6bd2cB193' as const

export const tokenFactoryConfig = {
  address: tokenFactoryAddress,
  abi: tokenFactoryAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenFactoryAbi}__
 */
export const useReadTokenFactory = /*#__PURE__*/ createUseReadContract({
  abi: tokenFactoryAbi,
  address: tokenFactoryAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadTokenFactoryDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"FACTORY_ROLE"`
 */
export const useReadTokenFactoryFactoryRole =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    functionName: 'FACTORY_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"STORE_RELAYER"`
 */
export const useReadTokenFactoryStoreRelayer =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    functionName: 'STORE_RELAYER',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"deployedTokens"`
 */
export const useReadTokenFactoryDeployedTokens =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    functionName: 'deployedTokens',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadTokenFactoryGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"getSupply"`
 */
export const useReadTokenFactoryGetSupply = /*#__PURE__*/ createUseReadContract(
  {
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    functionName: 'getSupply',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"getTokenNumber"`
 */
export const useReadTokenFactoryGetTokenNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    functionName: 'getTokenNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"getTokens"`
 */
export const useReadTokenFactoryGetTokens = /*#__PURE__*/ createUseReadContract(
  {
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    functionName: 'getTokens',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadTokenFactoryHasRole = /*#__PURE__*/ createUseReadContract({
  abi: tokenFactoryAbi,
  address: tokenFactoryAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"me"`
 */
export const useReadTokenFactoryMe = /*#__PURE__*/ createUseReadContract({
  abi: tokenFactoryAbi,
  address: tokenFactoryAddress,
  functionName: 'me',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadTokenFactorySupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"tokenToSupply"`
 */
export const useReadTokenFactoryTokenToSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    functionName: 'tokenToSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenFactoryAbi}__
 */
export const useWriteTokenFactory = /*#__PURE__*/ createUseWriteContract({
  abi: tokenFactoryAbi,
  address: tokenFactoryAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"createToken"`
 */
export const useWriteTokenFactoryCreateToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    functionName: 'createToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteTokenFactoryGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteTokenFactoryRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteTokenFactoryRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenFactoryAbi}__
 */
export const useSimulateTokenFactory = /*#__PURE__*/ createUseSimulateContract({
  abi: tokenFactoryAbi,
  address: tokenFactoryAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"createToken"`
 */
export const useSimulateTokenFactoryCreateToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    functionName: 'createToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateTokenFactoryGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateTokenFactoryRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenFactoryAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateTokenFactoryRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenFactoryAbi}__
 */
export const useWatchTokenFactoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenFactoryAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchTokenFactoryRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenFactoryAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchTokenFactoryRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenFactoryAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchTokenFactoryRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenFactoryAbi}__ and `eventName` set to `"TokenCreated"`
 */
export const useWatchTokenFactoryTokenCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenFactoryAbi,
    address: tokenFactoryAddress,
    eventName: 'TokenCreated',
  })
