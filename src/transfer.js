import { Keypair } from "@solana/web3.js";
import { Connection, Transaction, clusterApiUrl, sendAndConfirmTransaction, SystemProgram } from '@solana/web3.js';

let data;

(async () => {
  let keypair = Keypair.generate();
  data = keypair;
  console.log(keypair);
})();

//sender wallet
let senderPrivKey;

(async () => {
  const keypair2 = Keypair.fromSecretKey(
    Uint8Array.from([
      218, 213,  0, 162,  0, 121, 237, 0, 149, 145,
       26, 252, 0, 187,  0,  94,  65, 0, 115, 218,
      105, 192, 0,  62, 0, 129,  11, 0, 150, 176,
      241, 153,  0, 168, 0,  44,  37, 0, 253,  51,
       99, 135, 0,  50, 0,  39, 123, 0,  70, 137,
      148, 161, 0, 136,  0, 146, 131, 0,  12,  28,
      179, 145, 0, 188,
    ])
  );
  senderPrivKey = keypair2;
})();

//transfer

async function transfer(solAmount = 0.33) {
    // connection
    const connection = new Connection(clusterApiUrl('devnet'));
  
    // receiver wallet
    const keypair = data;
  
    // tx
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: new SOLANA.PublicKey('2o4nxCrLyYDnftheenAbcWiRdUqa58xSLV1LEikdF2xK'),
        toPubkey: keypair.publicKey,
        lamports: solAmount * 10**9, //like Gwei
      })
    );
  
    // approve and sign
    const signature = await sendAndConfirmTransaction(connection, transaction, [senderPrivKey]);
  
    console.log(`${solAmount} SOL transferred. TxId:`, signature);
  }
  
  transfer(0.33);