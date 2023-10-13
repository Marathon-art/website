'use client';

// pages/Submissions.tsx
import React from 'react';
import Submission from '../components/Submission'; 
import Link from 'next/link';

const Submissions: React.FC = () => {
  return (
    <div style={{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ color: 'white' }}>Welcome to the Submissions Page!</h1>
      <p style= {{ paddingTop : "16px"}}/>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
      }}>
        <Link href={'submissions/1'} passHref>
          <Submission 
            id='1'
            name='Abstract 1'
            artistName='James Cameron'
          />
        </Link>
        <Link href={'submissions/2'} passHref>
        <Submission 
          id='2'
          name='Abstract 2'
          artistName='Phillip Carry'
        />
        </Link>
        <Link href={'submissions/3'} passHref>
        <Submission 
          id='3'
          name='Abstract 3'
          artistName="Neo O'Candy"
        />
        </Link>
      </div>
    </div>
  );
};

export default Submissions;
