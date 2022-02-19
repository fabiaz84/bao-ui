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
      3: {
        address: '0x4C392822D4bE8494B798cEA17B43d48B2308109C',
        abi: 'bao.json',
      },
    },
    masterChef: {
      3: {
        address: '0x850161bF73944a8359Bd995976a34Bb9fe30d398',
        abi: 'masterchef.json',
      },
    },
    weth: {
      3: {
        address: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
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
  farms: [],
} as Config
