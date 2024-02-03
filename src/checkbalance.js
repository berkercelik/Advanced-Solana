//check balance
import * as SOLANA from '@solana/web3.js';
import { Connection} from '@solana/web3.js';
const { PublicKey, LAMPORTS_PER_SOL } = SOLANA;

const QUICKNODE_RPC = 'https://api.devnet.solana.com/'; 
const SOLANA_CONNECTION = new Connection(QUICKNODE_RPC);
const WALLET_ADDRESS = '2o4nxCrLyYDnftheenAbcWiRdUqa58xSLV1LEikdF2xK'; 

console.log("Wallet Address:", WALLET_ADDRESS);
(async () => {
    let balance = await SOLANA_CONNECTION.getBalance(new PublicKey(WALLET_ADDRESS));
    console.log(`Wallet Balance: ${balance/LAMPORTS_PER_SOL}`)
})();