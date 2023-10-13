import React, { FC, useEffect, useState } from 'react';

interface SubmissionProps {
  id: string;
  name: string;
  artistName: string;
  onClick?: () => void;
}

const Submission: FC<SubmissionProps> = ({ id, name, artistName,  onClick }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://picsum.photos/200/300')
      .then((response) => {
        setImageUrl(response.url);
      });
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {imageUrl && <img src={imageUrl} alt={name} />}
      <p style={{ paddingTop: '16px' }}/>
      <p style={{ color: 'white' }}>{name} by {artistName}</p>
    </div>
  );
};

export default Submission;
