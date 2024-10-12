import { CashuMint, CashuWallet } from "@cashu/cashu-ts";
import { mintUrl } from "./constants";

export async function infoHandler(options) {
  const mint = new CashuMint(mintUrl);
  const wallet = new CashuWallet(mint);
  const data = await wallet.getMintInfo();

  if (options.r) {
    console.log(data);
    return;
  }
  console.log("Mint MOTD: ", data.motd);
  console.log("Mint Description: ", data.description);
  console.log("Mint Contact Data: ", data.contact);
}
