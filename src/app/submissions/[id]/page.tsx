'use client';

import React, { FC } from 'react';
import Submission from '../../../app/components/Submission';



const SubmissionDetailed: FC = () => {
  return (
    <div className="page-container">
      <h1 className="text-3xl" style={{ color: 'white' }}>Submission Detailed</h1>
      <p style={{ paddingTop: '16px' }} />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
      }}>
        <Submission id='Any'
          artistName=''
          name='' />
      </div>
    </div>
  );
};

export default SubmissionDetailed;
