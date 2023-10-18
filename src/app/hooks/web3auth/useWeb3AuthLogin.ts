import { Web3Auth } from "@web3auth/modal";

const clientId = process.env.WEB3_AUTH_CLIENT_ID || "";

export async function useWeb3AuthLogin() {
    console.log('web3auth with clientId', clientId);
    const web3auth = new Web3Auth({
        clientId: clientId,
        web3AuthNetwork: "sapphire_mainnet",
        chainConfig: {
            chainNamespace: "eip155",
            tickerName: "Ethereum",
            displayName:	"Base Goerli", //	"Base Sepolia"
            rpcTarget: "https://goerli.base.org",//	"https://sepolia.base.org"
            chainId:	"0x14a33", //84531,	// "0x14a34" 84532
            ticker:	"ETH",
            blockExplorer:  "https://goerli.basescan.org/", //	"https://sepolia-explorer.base.org/"

        },
    });

    await web3auth.initModal();
    await web3auth.connect();
};


import React from 'react';

