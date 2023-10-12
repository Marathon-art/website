import React, { FC } from 'react';

interface ButtonPrimaryProps {
  text: string;
  backgroundColor: string;
  onClick?: () => void;
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({ onClick, text, backgroundColor }) => {
  return (
    <button
      style={{
        margin: '10px',
        padding: '15px 30px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: backgroundColor,
        color: 'white',
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};


export default ButtonPrimary;
