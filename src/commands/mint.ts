import {
  CashuMint,
  CashuWallet,
  getEncodedTokenV4,
  Token,
} from "@cashu/cashu-ts";
import { sleep } from "../utils";
import { mintUrl } from "./constants";

export async function mintHandler() {
  const mint = new CashuMint(mintUrl);
  const wallet = new CashuWallet(mint);

  const quote = await wallet.createMintQuote(21);
  while (true) {
    console.log("Awaiting payment...");
    const state = await wallet.checkMintQuote(quote.quote);
    if (state.state === "PAID") {
      console.log(state);
      break;
    }
    await sleep(2000);
  }
  console.log("Quote has been paid");
  const { proofs } = await wallet.mintTokens(21, quote.quote);
  const tokenData: Token = {
    memo: "Demo",
    token: [{ mint: mintUrl, proofs }],
  };
  console.log(getEncodedTokenV4(tokenData));
}
