import { CashuMint, CashuWallet, getEncodedTokenV4 } from "@cashu/cashu-ts";
import { mockGetProofsFromDb } from "../utils";
import { mintUrl } from "./constants";

export async function sendHandler() {
  const mint = new CashuMint(mintUrl);
  const wallet = new CashuWallet(mint);
  const proofs = await mockGetProofsFromDb();

  // mockGetProofsFromDb will return a single 16 sat proof
  // send 9 sats by creating an encoded token worth this amount.
  // assign the output to "toBeSent"
  console.log("=====TO SEND=====");
  console.log(
    getEncodedTokenV4({
      memo: "This is a demo token",
      token: [{ mint: mintUrl, proofs: toBeSent }],
    }),
  );
}
