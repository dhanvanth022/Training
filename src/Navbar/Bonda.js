import React from 'react';
import bondaImg from '../assets/bonda.png'; 

function Bonda() {
  return (
    <>
      <h1>South Indian Bonda</h1>
      <img src={bondaImg} alt="bonda" style={{ width: '300px', borderRadius: '8px' }} />
    </>
  );
}

export default Bonda;