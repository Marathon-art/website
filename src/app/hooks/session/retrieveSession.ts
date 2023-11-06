import { Web3Auth } from '@web3auth/modal';

import RPC from "web3"; // for using web3.js
import Session from './Session';

export const retrieveSession = async (web3Auth: Web3Auth) => {
  // Fetch session after connecting
  const userInfo = await web3Auth.getUserInfo();
  const provider = web3Auth.provider;

  if (provider != null) {
    const rpc = new RPC(provider); // Replace with your actual RPC initialization
    const account = rpc.defaultAccount;

    const session: Session = {
      name: userInfo.name || '',
      image: userInfo.profileImage || null,
      address: account || '',
    };
    return session;
  } else {
    return {
      name: userInfo.name || '',
      image: userInfo.profileImage || null,
      address: '',
    }
  }
};