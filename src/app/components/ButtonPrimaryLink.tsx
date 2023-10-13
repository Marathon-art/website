// components/ButtonPrimaryLink.tsx
import React, { FC } from 'react';
import Link from 'next/link';

interface ButtonPrimaryLinkProps {
  text: string;
  backgroundColor: string;
  href: string;
}

const ButtonPrimaryLink: FC<ButtonPrimaryLinkProps> = ({ text, backgroundColor, href }) => {
  return (
    <Link href={href} passHref>
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
      >
        {text}
      </button>
    </Link>
  );
};

export default ButtonPrimaryLink;
