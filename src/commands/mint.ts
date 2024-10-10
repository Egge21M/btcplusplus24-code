import { CashuMint, CashuWallet } from "@cashu/cashu-ts";

export async function mintHandler() {
  const mintUrl = "https://testnut.cashu.space";
  const mint = new CashuMint(mintUrl);
  const wallet = new CashuWallet(mint);

  console.log("Requesting mint quote...");
  try {
    const quote = await wallet.createMintQuote(21);
    console.log("Received quote...", quote);
    while (true) {
      console.log("Awaiting payment...");
      const state = await wallet.checkMintQuote(quote.quote);
      if (state.state === "PAID") {
        console.log(state);
        break;
      }
      await new Promise((res, rej) => {
        setTimeout(res, 2000);
      });
    }
    console.log("Quote has been paid");
    const token = await wallet.mintTokens(21, quote.quote);
    console.log("Minted Token...", token);
  } catch (e) {
    console.error(e);
  }
}
