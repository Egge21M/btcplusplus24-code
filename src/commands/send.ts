import { CashuMint, CashuWallet, getEncodedTokenV4 } from "@cashu/cashu-ts";
import { mockGetProofsFromDb } from "../utils";

export async function sendHandler() {
  const minutUrl = "https://nofees.testnut.cashu.space";
  const mint = new CashuMint(minutUrl);
  const wallet = new CashuWallet(mint);

  const proofs = await mockGetProofsFromDb();
  const { returnChange, send } = await wallet.send(9, proofs);
  console.log(
    getEncodedTokenV4({
      memo: "This is a demo token",
      token: [{ mint: "https://nofees.testnut.cashu.space", proofs: send }],
    }),
  );
}
