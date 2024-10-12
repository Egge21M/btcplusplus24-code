import { CashuMint, CashuWallet } from "@cashu/cashu-ts";
import { sleep } from "../utils";
import { mintUrl } from "./constants";

export async function mintHandler() {
  const mint = new CashuMint(mintUrl);
  const wallet = new CashuWallet(mint);

  // create a quote with a mint, wait for its payment and then
  // mint tokens using the paid quote's ID and assign them to "token".
  //
  // You can use sleep() to make the programm wait for x milliseconds
  console.log(token);
}
