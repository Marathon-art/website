'use client'

// pages/index.tsx
import React from 'react';
import ButtonPrimary from '../components/ButtonPrimary'; 

const Registration: React.FC = () => {
  return (
    <div style={{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ color: 'white' }}>Welcome Artist, Connect your wallet to register!</h1>
      <ButtonPrimary
        text="Register!"
        backgroundColor="#4CAF50"
        onClick={ () => console.log("Oh, I'm so registered!") }
      />
      <h1 style={{ color: 'white' }}>Welcome Artist, Connect your wallet to register!</h1>
    </div>
  );
};

export default Registration;
