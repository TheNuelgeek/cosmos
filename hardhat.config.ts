import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  sourcify: {
    enabled: true
  },
  etherscan: {
    apiKey: {
      goerli: 'TUU2WS3KQP4H27PX4AN9HCDP23317R8CQH',
    },
  },
  networks: {
    pwr: {
      url: `https://evmrpc.pwrlabs.io`,
      accounts: [process.env.PRIVATE_KEY ?? ''],
      chainId: 31
    },

    goerli:{
      url: 'https://goerli.infura.io/v3/603802cd806041da871393dc94ee8586',
      accounts: [process.env.PRIVATE_KEY ?? '']
    }
  },
};

export default config;
