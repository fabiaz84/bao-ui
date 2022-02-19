import { Config } from './types'

export default {
  networkId: 3,
  defaultRpc: {
    chainId: '0x3',
    rpcUrls: ['https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls: ['https://ropsten.etherscan.io'],
    chainName: 'Ropsten Testnet',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
    },
  },
  addressMap: {
    uniswapFactory: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    uniswapFactoryV2: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    lendingLogicKashi: '0xcBA495A74e23D5B42853e41334e26DDd322Af082',
    baoUSD: '0x7945b0A6674b175695e5d1D08aE1e6F13744Abb0',
    WETH: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    DEAD: '0x000000000000000000000000000000000000dead',
  },
  contracts: {
    bao: {
      1: {
        address: '0x374cb8c27130e2c9e04f44303f3c8351b9de61c1',
        abi: 'bao.json',
      },
    },
    masterChef: {
      1: {
        address: '0xBD530a1c060DC600b951f16dc656E4EA451d1A2D',
        abi: 'masterchef.json',
      },
    },
    weth: {
      1: {
        address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        abi: 'weth.json',
      },
    },
    // Hard Synths
    comptroller: {
      3: {
        address: '0x831E1605dd6A085E3b47f6F094dF2fa3806D7143',
        abi: 'comptroller.json',
      },
    },
    marketOracle: {
      3: {
        address: '0xEbdC2D2a203c17895Be0daCdf539eeFC710eaFd8',
        abi: 'marketOracle.json',
      },
    },
    stabilizer: {
      3: {
        address: '0x598D87CA75a9C764A8d1006018ff3c1b72EC816E',
        abi: 'stabilizer.json',
      },
    },
  },
  subgraphs: {
    sushiExchange: {
      3: 'https://api.thegraph.com/subgraphs/name/sushiswap/matic-exchange',
      1: 'https://api.thegraph.com/subgraphs/name/sushiswap/exchange'
    },
    pollyBurn: {
      137: 'https://api.thegraph.com/subgraphs/name/clabby/polly-burn'
    },
    baoMarkets: {
      3: 'https://api.thegraph.com/subgraphs/name/clabby/bao-markets-ropsten-subgraph'
    }
  },
  markets: [
    {
      mid: 1,
      symbol: 'baoUSD',
      marketAddresses: {
        3: '0x047C30b85f4d310DAA4d14E8B902B0108618C37a',
      },
      underlyingAddresses: {
        3: '0x7945b0A6674b175695e5d1D08aE1e6F13744Abb0',
      },
      isSynth: true,
      icon: '/baoUSD.png',
      coingeckoId: 'dai',
      underlyingDecimals: 18,
    },
    {
      mid: 2,
      symbol: 'bETH',
      marketAddresses: {
        3: '0xd4E71A9D982b74110Cc3307d7D296927B3afBBDc',
      },
      underlyingAddresses: {
        3: 'ETH',
      },
      icon: '/WETH.png',
      coingeckoId: 'weth',
      underlyingDecimals: 18,
    },
    {
      mid: 3,
      symbol: 'bUSDC',
      marketAddresses: {
        3: '0xCaAd85c5a9f31c679742ea6f8654c3B53b4c6d7D',
      },
      underlyingAddresses: {
        3: '0x1c648C939578a4da0D7Fb2384DdB3FcE9439D28d',
      },
      icon: '/USDC.png',
      coingeckoId: 'usd-coin',
      underlyingDecimals: 6,
    },
    {
      mid: 4,
      symbol: 'baoUSD(OLD)',
      archived: true,
      marketAddresses: {
        3: '0xfD4cDC5129Dd794E26FD3764C8f2075EE13B9A53',
      },
      underlyingAddresses: {
        3: '0x4aB319aE3EF47479C229fE742463B9b2Cf1c7647',
      },
      isSynth: true,
      icon: '/baoUSD.png',
      coingeckoId: 'dai',
      underlyingDecimals: 18,
    },
  ],
  baskets: [],
  farms: [
    // Active pools
    {
      pid: 0,
      lpAddresses: {
        1: '0x9973bb0fe5f8df5de730776df09e946c74254fb3',
      },
      tokenAddresses: {
        1: '0x374cb8c27130e2c9e04f44303f3c8351b9de61c1',
      },
      tokenDecimals: 18,
      name: 'BAO-ETH UNIV2',
      symbol: 'BAO-ETH UNIV2',
      type: 'UNIV2',
      tokenSymbol: 'BAO',
      poolType: 'active',
      iconA: '/BAO.png',
      iconB: '/WETH.png',
      refUrl:
        'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/BAO',
      pairUrl: '#',
    },
    {
      pid: 200,
      lpAddresses: {
        1: '0x0eee7f7319013df1f24f5eaf83004fcf9cf49245',
      },
      tokenAddresses: {
        1: '0x374cb8c27130e2c9e04f44303f3c8351b9de61c1',
      },
      tokenDecimals: 18,
      name: 'BAO-ETH SLP',
      symbol: 'BAO-ETH SLP',
      type: 'SLP',
      tokenSymbol: 'BAO',
      poolType: 'active',
      iconA: '/BAO.png',
      iconB: '/WETH.png',
      refUrl:
        'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/BAO',
      pairUrl: '#',
    },
    {
      pid: 201,
      lpAddresses: {
        1: '0x072b999fc3d82f9ea08b8adbb9d63a980ff2b14d',
      },
      tokenAddresses: {
        1: '0x374cb8c27130e2c9e04f44303f3c8351b9de61c1',
      },
      tokenDecimals: 18,
      name: 'BAO-USDC SLP',
      symbol: 'BAO-USDC SLP',
      type: 'SLP',
      tokenSymbol: 'BAO',
      poolType: 'active',
      iconA: '/BAO.png',
      iconB: '/USDC.png',
      refUrl:
        'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/BAO',
      pairUrl: '#',
    },
  ],
} as Config
