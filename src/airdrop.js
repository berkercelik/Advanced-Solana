import { exec } from 'child_process';

const recipientAccountAddress = '2o4nxCrLyYDnftheenAbcWiRdUqa58xSLV1LEikdF2xK';

const command = `solana airdrop 1 ${recipientAccountAddress} --url https://api.devnet.solana.com`;

exec(command, (error) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  } 
});