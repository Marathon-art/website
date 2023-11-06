import { useEffect, useState } from 'react';
import { Web3Auth } from '@web3auth/modal';

const useWeb3Auth = () => {
  console.log('useWeb3Auth hook');
  const [web3Auth, setWeb3Auth] = useState<Web3Auth | null>(null);
  // console.log('state hook');

  useEffect(() => {
    console.log('useWeb3Auth useEffect');
    const initWeb3Auth = async () => {
      const clientId = process.env.WEB3_AUTH_CLIENT_ID || "";
      console.log('init Web3Auth with clientId', clientId);

      const web3AuthInstance = new Web3Auth({
        clientId: clientId,
        web3AuthNetwork: "sapphire_mainnet",
        chainConfig: {
          chainNamespace: "eip155",
          tickerName: "Ethereum",
          displayName: "Base Goerli", //	"Base Sepolia"
          rpcTarget: "https://goerli.base.org",//	"https://sepolia.base.org"
          chainId: "0x14a33", //84531,	// "0x14a34" 84532
          ticker: "ETH",
          blockExplorer: "https://goerli.basescan.org/", //	"https://sepolia-explorer.base.org/"
        },
      });

      setWeb3Auth(web3AuthInstance);
    };


    initWeb3Auth();
  }, []);


  console.log('return web3Auth', web3Auth);
  return web3Auth;
};

export default useWeb3Auth;
