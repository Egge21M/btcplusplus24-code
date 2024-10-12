import { CashuMint, CashuWallet, getDecodedToken } from "@cashu/cashu-ts";
import { getProofsTotalAmount } from "../utils";
import { mintUrl } from "./constants";

export async function receiveHandler(token) {
  const mint = new CashuMint(mintUrl);
  const wallet = new CashuWallet(mint);

  // this function receives an encoded token as string.
  // take in this token and receive it the cashu way.
  // because this returns proofs, assign the return value to "proofs"

  const amount = getProofsTotalAmount(proofs);
  console.log("Received token of value: ", amount);
  console.log("=====PROOFS=====");
  console.log(proofs);
}
