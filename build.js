#!/usr/bin/env node

const esbuild = require("esbuild");

esbuild
  .build({
    outfile: "cashu.js",
    format: "cjs",
    platform: "node",
    entryPoints: ["src/index.ts"],
    bundle: true,
  })
  .then(() => {
    console.log("CLI built sucessfully");
  });
