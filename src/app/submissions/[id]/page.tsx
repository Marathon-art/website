'use client';

import React, { FC } from 'react';
import Submission from '../../../app/components/Submission';

interface SubmissionDetailedProps {
  id: string;
  name: string;
  artistName: string;
}

const SubmissionDetailed: FC<SubmissionDetailedProps> = ({ id, name, artistName }) => {
  return (
    <div style={{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 className="text-3xl" style={{ color: 'white' }}>Submission Detailed</h1>
      <p style={{ paddingTop: '16px' }}/>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
      }}>
        <Submission id={id}
          artistName=''
          name='' />
      </div>
    </div>
  );
};

export default SubmissionDetailed;
