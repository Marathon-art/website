'use client'

// pages/index.tsx
import React from 'react';
import ButtonPrimaryLink from './components/ButtonPrimaryLink'; // Adjust the path as needed


//
const Home: React.FC = () => {
  return (
    <div style={{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ color: 'white' }}>Hello, this is the home page!</h1>
      <ButtonPrimaryLink
        text="Go to Registration Page"
        backgroundColor="#4CAF50"
        href="/registration"
      />
      <ButtonPrimaryLink
        text="Go to Submissions"
        backgroundColor="#008CBA"
        href="/submissions"
      />
    </div>
  );
};

export default Home;
