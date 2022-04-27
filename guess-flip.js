import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";
import minimist from 'minimist';
let args=minimist(process.argv.slice(2));
let call = args['call'];
if(call==null) { console.log("Error: no input.")} else if (call!="heads" && call!="tails") {
    console.log("Error: invalid input.")
    process.exit();
} else {
    console.log(flipACoin(call));
}
