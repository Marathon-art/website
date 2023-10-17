'use client'

// pages/index.tsx
import React from 'react';
import ButtonPrimary from '../components/ButtonPrimary'; 


const Registration: React.FC = () => {
  
  return (
    <div className="page-container">
      <h1 style={{ color: 'white' }}>Welcome Artist, Connect your wallet to register!</h1>
      <ButtonPrimary
        text="Register!"
        backgroundColor="#4CAF50"
        onClick={ () => console.log("Oh, I'm so registered!") }
      />
    </div>
  );
};

export default Registration;
