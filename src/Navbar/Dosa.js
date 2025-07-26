import React from 'react';
import dosaImg from '../assets/dosa.png'; 

function Dosa() {
  return (
    <>
      <h1>South Indian Dosa</h1>
      <img src={dosaImg} alt="dosa" style={{ width: '300px', borderRadius: '8px' }} />
    </>
  );
}

export default Dosa;