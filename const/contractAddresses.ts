/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Sepolia } from "@thirdweb-dev/chains";
export const NETWORK = Sepolia;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
// export const MARKETPLACE_ADDRESS = "0x83c57ec0dF015eef8401fFb7CB7f66CfA8b6Ff55";
// export const MARKETPLACE_ADDRESS = "0xc839f1e222a0AF5aa5618d39c7B2Ec5CBCc536E9";
export const MARKETPLACE_ADDRESS = "0x1549a0753cB71c47Bf17760a396e5cdE4C7e4605";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  // "0x67b40fC017863743C520cDAec1B367BE1FD721f0";
  // "0x0b0CB7a2f9a327E8F6eC899B61B535891818dfe4";
  // "0xe552e1595b1E803A476BF3947d7A68373Ba940dC"
  "0x37cf59f05111c7C5E6A52Ed20e624D00D481F1eD"

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://sepolia.etherscan.io/";
