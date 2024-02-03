import { Keypair } from "@solana/web3.js";
import { writeFile } from 'fs/promises';

let data;

(async () => {
  let keypair = Keypair.generate();
  data = keypair;
  console.log(keypair);
})();


//wallet write
const jsonData = JSON.stringify(data, null, 2);

async function writeDataToFile() {
  try {
    await writeFile('wallet.json', jsonData, 'utf8');
    console.log('Data was written successfully.');
  } catch (err) {
    console.error('Error:', err);
  }
}

writeDataToFile();

// print wallet address
const publicKey = data.publicKey.toBase58();
console.log('Wallet Address:', publicKey);






