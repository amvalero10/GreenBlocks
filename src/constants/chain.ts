import { defineChain } from "viem";

export const greenBlock = /*#__PURE__*/ defineChain({
  id: 2_234,
  name: "greenBlock",
  nativeCurrency: {
    name: "greenBlocks Token",
    symbol: "greenBlocks",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:9650/ext/bc/greenBlock/rpc"],
    },
  },
  testnet: true,
});
