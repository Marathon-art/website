'use client'

// pages/index.tsx
import React from 'react';
import ButtonPrimaryLink from './components/ButtonPrimaryLink'; 

//todo Register for pool of artists
//todo rall the dice to select initial artist
//enable submission for current artist
//submit art piece by current artist
//display this art piece on submissions page
//if artists referred to another artist this new artist is current artist now
//if artist did not refer anyone new artist is selected from pool

const Home: React.FC = () => {
  return (
    <div className="column-container">
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
