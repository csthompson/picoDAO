require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();


task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("Deploy", "Deploys a COMPound style governance system")
  .addParam("token", "The address to receive the initial supply")
  .setAction(async taskArgs => {

    const { deploy } = require("./scripts/Deploy");

    await deploy({
      tokenRecipient: taskArgs.token
    });

  })

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // Supported Networks
  networks: {
    // Test Networks
    hardhat: {
      network_id: 1337,
      chainId: 1337,
      accounts: {
        mnemonic: process.env.WALLET_MNEMONIC,
        count: 10,
      },
      throwOnTransactionFailures: true,
      throwOnCallFailures: false,
      loggingEnabled: true,
      allowUnlimitedContractSize: false,
      gas: 0xfffffffffff,
      gasPrice: 10000000000,
      initialBaseFeePerGas: 0,
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      chainId: 1337,
      accounts: {
        mnemonic: "venue also lens violin prison humble oyster affair slam peanut magnet price",
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      },
    },
    goerli: {
      url: process.env.ETH_NODE_URL,
      network_id: 5,
      chainId: 5,
      skipDryRun: true,
      gas: 2100000,
      gasPrice: 4000000000,
      accounts: {
        mnemonic: process.env.WALLET_MNEMONIC || "",
        count: 10,
      },
      signerId: process.env.SIGNER || undefined,
    },
    rinkeby: {
      url: process.env.ETH_NODE_URL,
      network_id: 4,
      chainId: 4,
      skipDryRun: true,
      gas: 2100000,
      gasPrice: 4000000000,
      accounts: {
        mnemonic: process.env.WALLET_MNEMONIC || "",
        count: 10,
      },
      signerId: process.env.SIGNER || undefined,
    },
    ropsten: {
      url: process.env.ETH_NODE_URL,
      network_id: 3,
      chainId: 3,
      gas: 2100000,
      gasPrice: 4000000000,
      accounts: {
        mnemonic: process.env.WALLET_MNEMONIC || "",
        count: 10,
      },
      signerId: process.env.SIGNER || undefined,
    },
    harmonytest: {
      url: process.env.ETH_NODE_URL,
      network_id: 1666700000,
      chainId: 1666700000,
      skipDryRun: true,
      gas: 2100000,
      gasPrice: 10000000000,
      accounts: {
        mnemonic: process.env.WALLET_MNEMONIC || "",
        count: 10,
      },
      signerId: process.env.SIGNER || undefined,
    },
    polygontest: {
      url: process.env.ETH_NODE_URL,
      network_id: 80001,
      chainId: 80001,
      skipDryRun: true,
      gas: 2100000,
      gasPrice: 10000000000,
      accounts: {
        mnemonic: process.env.WALLET_MNEMONIC || "",
        count: 10,
      },
      signerId: process.env.SIGNER || undefined,
    },
    coverage: {
      url: "http://127.0.0.1:8555",
      network_id: 1,
      chainId: 1,
      gas: 0xfffffffffff,
      gasPrice: 10000000000,
      initialBaseFeePerGas: 0,
    },

    // Main Networks
    mainnet: {
      url: process.env.ETH_NODE_URL,
      network_id: 1,
      chainId: 1,
      skipDryRun: true,
      accounts: {
        mnemonic: process.env.WALLET_MNEMONIC || "",
        count: 10,
      },
      signerId: process.env.SIGNER || undefined,
    },
    harmony: {
      url: process.env.ETH_NODE_URL,
      network_id: 1666600000,
      chainId: 1666600000,
      skipDryRun: true,
      accounts: {
        mnemonic: process.env.WALLET_MNEMONIC || "",
        count: 10,
      },
      signerId: process.env.SIGNER || undefined,
    },
    polygon: {
      url: process.env.ETH_NODE_URL,
      network_id: 80001,
      chainId: 80001,
      skipDryRun: true,
      accounts: {
        mnemonic: process.env.WALLET_MNEMONIC || "",
        count: 10,
      },
      signerId: process.env.SIGNER || undefined,
    },
  },

  // External Signers configs
  signers: {
    defender: {
      enabled: process.env.DEFENDER_SIGNER_ENABLED || false,
      apiKey: process.env.DEFENDER_API_KEY || undefined,
      apiSecret: process.env.DEFENDER_API_SECRET || undefined,
    },
    googleKms: {
      enabled: process.env.KMS_GCP_SIGNER_ENABLED || false,
      projectId: process.env.KMS_PROJECT_ID || undefined,
      locationId: process.env.KMS_LOCATION_ID || undefined,
      keyRingId: process.env.KMS_KEY_RING_ID || undefined,
      keyId: process.env.KMS_KEY_ID || undefined,
      keyVersion: process.env.KMS_KEY_VERSION || undefined,
    },
  },

  // Solc Settings
  solidity: {
    version: "0.8.9", // slither v0.8.2 does not support solc > 0.8.9
    settings: {
      optimizer: {
        enabled: !(process.env.SOLC_OPTIMIZER === "false"),
        runs: 200,
      },
    },
  },

  // Project Settings
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: !(process.env.SOLC_OPTIMIZER === "false"),
    strict: true,
  },
  gasReporter: {
    enabled: true,
  },
  paths: {
    tests: "./test",
    sources: "./contracts",
    cache: "./build/cache",
    artifacts: "./build/artifacts",
  },
};