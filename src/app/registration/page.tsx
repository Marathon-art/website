'use client'

// pages/index.tsx
import React from 'react';
import { useWeb3Auth } from '../hooks/web3auth/useWeb3Auth';
import { useAsyncLoading } from '../hooks/state/useAsyncLoading';
import LoadingSpinner from '../components/state/LoadingSpinner';
import ErrorBanner from '../components/state/ErrorBanner';
import UserInfoDisplay from './UserInfoDisplay';
import ButtonPrimary from '../components/ButtonPrimary';
import { useWeb3AuthLogin } from '../hooks/web3auth/useWeb3AuthLogin';

const Registration: React.FC = () => {
  const web3auth = useWeb3Auth();

  if (web3auth.connected) {

    return useAsyncLoading(
      web3auth.getUserInfo(),
      {
        loadingState: () => <LoadingSpinner />,
        dataState: (data) => <UserInfoDisplay data={data} />,
        errorState: (error) => <ErrorBanner error={error} />,
      }
    );
  } else {
    return (
      <div className="column-container">
        <h1 style={{ color: 'white' }}>Welcome Artist, Connect your wallet to register!</h1>
        <ButtonPrimary
          text="Register!"
          backgroundColor="#4CAF50"
          onClick={async () => {
            console.log('hi');
            await web3auth.initModal();
            await web3auth.connect();
          }}
        />
      </div>
    );
  }
};

export default Registration;



