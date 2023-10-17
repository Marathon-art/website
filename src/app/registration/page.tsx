'use client'

// pages/index.tsx
import React from 'react';
import ButtonPrimary from '../components/ButtonPrimary';
import { useWeb3AuthLogin } from '../hooks/web3auth/useWeb3AuthLogin'

const Registration: React.FC = () => {

  return (
    <div className="page-container">
      <h1 style={{ color: 'white' }}>Welcome Artist, Connect your wallet to register!</h1>
      <ButtonPrimary
        text="Register!"
        backgroundColor="#4CAF50"
        onClick={ () => useWeb3AuthLogin() }
      />
    </div>
  );
};

export default Registration;
