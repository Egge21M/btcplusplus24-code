import { CashuMint, CashuWallet, getDecodedToken } from "@cashu/cashu-ts";
import { getProofsTotalAmount } from "../utils";
import { mintUrl } from "./constants";

export async function receiveHandler(token) {
  const mint = new CashuMint(mintUrl);
  const wallet = new CashuWallet(mint);

  const proofs = await wallet.receive(token);
  const amount = getProofsTotalAmount(proofs);
  console.log("Received token of value: ", amount);
  console.log("=====PROOFS=====");
  console.log(proofs);
}
