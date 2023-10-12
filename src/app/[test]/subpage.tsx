// /src/app/page.tsx

import React from 'react';


const TestPage: React.FC = () => {
  const handleButtonClick = (buttonNumber: number) => {
    // Add your button click logic here, you can differentiate based on buttonNumber
    alert(`Button ${buttonNumber} clicked!`);
  };

  return (
    <div style={{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ color: 'white' }}>subTEST STESG page!</h1>

    </div>
  );
};

export default TestPage;
