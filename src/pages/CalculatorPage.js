import React from 'react';
import Calculator from '../components/Calculator';
import Navbar from '../components/Navbar';

function CalculatorPage() {
  return (
    <div>
      <div className="headerCont">
        <h1>Mathemagics</h1>
        <Navbar />
      </div>
      <h2 id="calcH2">Let&apos;s do some Math!</h2>
      <Calculator />
    </div>
  );
}

export default CalculatorPage;
