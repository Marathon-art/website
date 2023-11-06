import { useEffect, useState } from 'react';
import { Web3Auth } from '@web3auth/modal';
import useWeb3Auth from './useWeb3Auth';
import Session from '../session/Session';
import RPC from "web3"; // for using web3.js

const useWeb3AuthSession = () => {
  console.log('useWeb3AuthSession');
  const web3Auth = useWeb3Auth();

  if (web3Auth == null || !web3Auth.connected) {
    throw 'Web3Auth has not been initialized';
  }

  const [session, setSession] = useState<Session | null>();

  useEffect(() => {
    const initAsync = async () => {
      console.log('getUserInfo');
      let userInfo = await web3Auth.getUserInfo();

      console.log('getUserInfo success');

      const provider = web3Auth.provider;
      if (provider != null) {
        console.log('web3Auth.provider is not null');
        const rpc = new RPC(provider);
        const account = rpc.defaultAccount;

        setSession({
          name: userInfo.name || '',
          image: userInfo.profileImage || null,
          address: account || '',
        });
      } else {
        setSession({
          name: userInfo.name || '',
          image: userInfo.profileImage || null,
          address: '',
        });
      }
    };

    initAsync();
  }, []);


  console.log('emit session', session);
  return session;

};

export default useWeb3AuthSession;
