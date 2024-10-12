import { mintUrl } from "./constants";

export async function infoHandler(options) {
  // create a CashuWallet and CashuMint class, receive
  // the info object from them and assign it to data

  if (options.r) {
    console.log(data);
    return;
  }
  console.log("Mint MOTD: ", data.motd);
  console.log("Mint Description: ", data.description);
  console.log("Mint Contact Data: ", data.contact);
}
