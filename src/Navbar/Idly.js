import React from 'react';
import idlyImg from '../assets/idly.png'; 

function Idly() {
  return (
    <>
      <h1>South Indian Idly</h1>
      <img src={idlyImg} alt="Idly" style={{ width: '300px', borderRadius: '8px' }} />
    </>
  );
}

export default Idly;
