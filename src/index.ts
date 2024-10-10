import { Command } from "commander";
import { infoHandler } from "./commands/info";
import { mintHandler } from "./commands/mint";

const program = new Command();

program
  .name("cashu.js")
  .description("Practice project for btc++ 24 cashu-ts workshop.")
  .version("1.0.0");

program.command("info").option("-r").action(infoHandler);
program.command("mint").action(mintHandler);

program.parse();
