import { CashuMint, CashuWallet, getDecodedToken } from "@cashu/cashu-ts";

export async function receiveHandler(token) {
  const mintUrl = "https://nofees.testnut.cashu.space";
  const mint = new CashuMint(mintUrl);
  const wallet = new CashuWallet(mint);

  const decodedToken = getDecodedToken(token);
  const data = await wallet.receive(token);
  console.log(data);
}
