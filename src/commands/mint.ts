import {
  CashuMint,
  CashuWallet,
  getEncodedTokenV4,
  Token,
} from "@cashu/cashu-ts";
import { sleep } from "../utils";

export async function mintHandler() {
  const mintUrl = "https://testnut.cashu.space";
  const mint = new CashuMint(mintUrl);
  const wallet = new CashuWallet(mint);

  console.log("Requesting mint quote...");
  try {
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
    console.log("Minted Token...", proofs);
    const tokenData: Token = {
      memo: "Demo",
      token: [{ mint: "https://testnut.cashu.space", proofs }],
    };
    console.log(getEncodedTokenV4(tokenData));
  } catch (e) {
    console.error(e);
  }
}
