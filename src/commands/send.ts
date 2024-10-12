import { CashuMint, CashuWallet, getEncodedTokenV4 } from "@cashu/cashu-ts";
import { mockGetProofsFromDb } from "../utils";
import { mintUrl } from "./constants";

export async function sendHandler() {
  const mint = new CashuMint(mintUrl);
  const wallet = new CashuWallet(mint);

  const proofs = await mockGetProofsFromDb();
  const { returnChange, send } = await wallet.send(9, proofs);
  console.log("=====CHANGE=====");
  console.log(returnChange);
  console.log("=====TO SEND=====");
  console.log(
    getEncodedTokenV4({
      memo: "This is a demo token",
      token: [{ mint: mintUrl, proofs: send }],
    }),
  );
}
