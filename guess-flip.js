import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs";
import minimist from 'minimist';
let args=minimist(process.argv.slice(2));
let call = args['call'];
if((call==null) || (call!="heads" && call!="tails")) {
    console.log("Error: no input. \n Usage: node guess-flip --call=[heads|tails]")
    
} else if (call=="[heads|tails]"){
    console.log(flipACoin(coinFlip()));
} else {
    console.log(flipACoin(call));
}
