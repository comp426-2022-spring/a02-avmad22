import { coinFlip, coinFlips, countFlips } from "./modules/coin.mjs";
let args=process.argv;
if(args.length ==2) {
    console.log(coinFlips(1));
} else {console.log(coinFlips(args[2]))}