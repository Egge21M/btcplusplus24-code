import { CashuMint, CashuWallet, getDecodedToken } from "@cashu/cashu-ts";
import { getProofsTotalAmount } from "../utils";

export async function receiveHandler(token) {
  const mintUrl = "https://nofees.testnut.cashu.space";
  const mint = new CashuMint(mintUrl);
  const wallet = new CashuWallet(mint);

  const proofs = await wallet.receive(token);
  const amount = getProofsTotalAmount(proofs);
  console.log("Received token of value: ", amount);
  console.log("=====PROOFS=====");
  console.log(proofs);
}
