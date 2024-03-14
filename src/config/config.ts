import algosdk from "algosdk";

const algodToken = "a".repeat(64);
const server: string = "https://localhost";
const port: string = "4001";

const mnemonic: string = 
    "shuffle purity eager domain sock dad select bounce gaze exchange clay library art naive act inspire siege demand book dumb crouch usage capital absorb blouse";

export function getClient(): algosdk.Algodv2 {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}

export function getAccount(): algosdk.Account {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}