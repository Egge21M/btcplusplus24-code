import { CashuMint, CashuWallet } from "@cashu/cashu-ts";
import { mintUrl } from "./constants";
import { mockGetProofsFromDb } from "../utils";

export async function meltHandler() {
  const mint = new CashuMint(mintUrl);
  const wallet = new CashuWallet(mint);

  const { request: invoice } = await wallet.createMintQuote(2);
  const proofs = await mockGetProofsFromDb();

  const res = await wallet.createMeltQuote(invoice);
  const { returnChange, send } = await wallet.send(2 + res.fee_reserve, proofs);
  console.log(returnChange);
  const payRes = await wallet.meltTokens(res, send);
  if (payRes.isPaid) {
    console.log("Payment successfull");
  }
  console.log("=====MELT RESPONSE=====");
  console.log(payRes);
}
