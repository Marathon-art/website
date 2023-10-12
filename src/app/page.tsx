import React from 'react';

const Home = () => {
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
      <button style={{
        margin: '10px',
        padding: '15px 30px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#4CAF50',
        color: 'white'
      }}>Button 1</button>
      <button style={{
        margin: '10px',
        padding: '15px 30px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#008CBA',
        color: 'white'
      }}>Button 2</button>
      <button style={{
        margin: '10px',
        padding: '15px 30px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#f44336',
        color: 'white'
      }}>Button 3</button>
    </div>
  );
};

export default Home;
