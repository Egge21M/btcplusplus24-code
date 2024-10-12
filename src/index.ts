import { Command } from "commander";
import { infoHandler } from "./commands/info";
import { mintHandler } from "./commands/mint";
import { encodeTokenHandler } from "./commands/token";
import { sendHandler } from "./commands/send";
import { receiveHandler } from "./commands/receive";

const program = new Command();

program
  .name("cashu.js")
  .description("Practice project for btc++ 24 cashu-ts workshop.")
  .version("1.0.0");

program.command("info").option("-r").action(infoHandler);
program.command("mint").action(mintHandler);
program.command("encode").option("--cbor").action(encodeTokenHandler);
program.command("send").action(sendHandler);
program
  .command("receive")
  .argument("<token>", "token to receive")
  .action(receiveHandler);

program.parse();
