'use client'

import React from 'react';

import LoadingSpinner from '../components/state/LoadingSpinner';
import ErrorBanner from '../components/state/ErrorBanner';
import UserInfoDisplay from './UserInfoDisplay';
import ButtonPrimary from '../components/ButtonPrimary';
import { useWeb3Auth } from '../hooks/web3auth/useWeb3Auth';
import useWeb3AuthLogin from '../hooks/web3auth/useWeb3AuthLogin';
import { useState } from 'react';

const Registration: React.FC = () => {
  const web3auth = useWeb3Auth();
  const { userInfo, error } = useWeb3AuthLogin();
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorBanner error={error} />;
  }

  if (userInfo) {
    return <UserInfoDisplay data={userInfo} />;
  }

  console.log('button');
  return (
    <div className="column-container">
      <h1 style={{ color: 'white' }}>Welcome Artist, Connect your wallet to register!</h1>
      <ButtonPrimary
        text="Register!"
        backgroundColor="#4CAF50"
        onClick={async () => {
          console.log('hi');
          setLoading(true);
          await web3auth.initModal();
          await web3auth.connect();
          setLoading(false);
        }}
      />
    </div>
  );
};

export default Registration;
