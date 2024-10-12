import { getEncodedToken, getEncodedTokenV4, Token } from "@cashu/cashu-ts";
import { mintUrl } from "./constants";

const proofs = [
  {
    amount: 1,
    C: "03ee437e0240b350fa3391cb061f6282b3848b522ca149c5b67a8e5c7add3f9e7b",
    id: "009a1f293253e41e",
    secret: "796e55657bfca49346dc735122bcf53a41bd08caec44e63017b7b770406ba221",
    witness: undefined,
  },
  {
    amount: 4,
    C: "034373f70abcfd0d580cca4728571f230d36a7c605db59b8191c829cfc77a432d1",
    id: "009a1f293253e41e",
    secret: "b1b0725470d5ce0fa40e9da3be98b38e53eebe7ffdcb9f7e638e7e5879007b4e",
    witness: undefined,
  },
  {
    amount: 16,
    C: "02dc087513ab2a2ad4d31a7ee0cea6117d749c10089866eef33939f5884315c2e0",
    id: "009a1f293253e41e",
    secret: "a0bfde19bd66e58e9b40e3855df328e6953598b512f0efcdea49b08871bd3e02",
    witness: undefined,
  },
];

const token: Token = {
  memo: "This is the token memo",
  token: [{ mint: mintUrl, proofs }],
};

export function encodeTokenHandler(options) {
  console.log(options);
  console.log("Raw Token: ", token);
  console.log("Encoding Token...");
  if (options.cbor) {
    console.log("Creating v4 token");
    console.log(getEncodedTokenV4(token));
    return;
  }
  console.log("Creating v3 token");
  console.log(getEncodedToken(token));
}
