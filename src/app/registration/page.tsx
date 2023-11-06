'use client'

import React, { useState } from 'react';

import LoadingSpinner from '../components/state/LoadingSpinner';
import ErrorBanner from '../components/state/ErrorBanner';
import UserInfoDisplay from './UserInfoDisplay';
import ButtonPrimary from '../components/ButtonPrimary';


import useSessionStore from '../hooks/session/sessionStore';
import { useWeb3AuthLogin } from '../hooks/web3auth/useWeb3AuthLogin';
import useSession from '../hooks/session/useSession';

const Registration: React.FC = () => {
  // const { connectWeb3Auth } = useSessionState();
  const { login } = useWeb3AuthLogin();
  const session = useSession();
  const [loading, setLoading] = useState(false);



  // if (!isInitialized) {
  //   return <LoadingSpinner />;
  // }

  // if (!isConnected) {
  //   return <button onClick={() => connect(session)}>Connect</button>;
  // }

  // return <UserInfoDisplay session={session} />;


  // const web3auth = useWeb3Auth();
  // const { userInfo, error } = useWeb3AuthLogin();
  // const [loading, setLoading] = useState(false);

  if (loading) {
    return <LoadingSpinner />;
  }

  // if (error) {
  //   return <ErrorBanner error={error} />;
  // }

  if (session) {
    return <UserInfoDisplay session={session} />;
  }

  console.log('button');
  return (
    <div className="column-container">
      <h1 style={{ color: 'white' }}>Welcome Artist, Connect your wallet to register!</h1>
      <ButtonPrimary
        text="Register!"
        backgroundColor="#4CAF50"
        onClick={async () => {
          console.log('connectWeb3Auth');

          setLoading(true);
          await login();

          // await web3auth.initModal();
          // const provider = await web3auth.connect();

          // console.log("provider", web3auth.provider);

          // if (provider != null) {
          //   const rpc = new RPC(provider);
          //   const address = await rpc.defaultAccount;

          // }
          // console.log("provider", web3auth.provider.getAcc);
          setLoading(false);
        }}
      />
    </div>
  );
};

export default Registration;
