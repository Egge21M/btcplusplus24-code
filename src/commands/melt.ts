import { CashuMint, CashuWallet } from "@cashu/cashu-ts";
import { mintUrl } from "./constants";
import { mockGetProofsFromDb } from "../utils";

export async function meltHandler() {
  const mint = new CashuMint(mintUrl);
  const wallet = new CashuWallet(mint);

  // here we are simply getting some mock data to work with
  // we are generating an invoice from the mint as well as getting some
  // proofs from our mock db

  const { request: invoice } = await wallet.createMintQuote(2);
  const proofs = await mockGetProofsFromDb();

  // swap "proofs" into new proofs that cover the invoice amount + fee_reserve
  // then melt the swapped token to pay the invoice

  if (payRes.isPaid) {
    console.log("Payment successfull");
  }
  console.log("=====MELT RESPONSE=====");
  console.log(payRes);
}
