import { CashuMint, CashuWallet, Proof } from "@cashu/cashu-ts";

const mint = new CashuMint("https://nofees.testnut.cashu.space");
const wallet = new CashuWallet(mint);

export async function sleep(timeInMs: number) {
  return new Promise((res) => {
    setTimeout(res, timeInMs);
  });
}

export async function mockGetProofsFromDb() {
  const quoteRes = await wallet.createMintQuote(16);
  await sleep(2000);
  const { proofs } = await wallet.mintTokens(16, quoteRes.quote);
  return proofs;
}

export function getProofsTotalAmount(p: Proof[]) {
  return p.reduce((a, c) => a + c.amount, 0);
}
