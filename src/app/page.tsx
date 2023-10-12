// /src/app/page.tsx

import React from 'react';
import ButtonPrimary from './components/ButtonPrimary'; // Adjust the path as needed

const Home: React.FC = () => {
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
      <h1 style={{ color: 'white' }}>Hello, this is the home page!</h1>
      <ButtonPrimary
        text="Button 1"
        backgroundColor="#4CAF50"
        // onClick={() => handleButtonClick(1)}
      />
      <ButtonPrimary
        text="Button 2"
        backgroundColor="#008CBA"
        // onClick={() => handleButtonClick(2)}
      />
      <ButtonPrimary
        text="Button 3"
        backgroundColor="#f44336"
        // onClick={() => handleButtonClick(3)}
      />
    </div>
  );
};

export default Home;
