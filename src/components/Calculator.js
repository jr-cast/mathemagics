import React from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="grid-container">
          <div className="grid-itemResult"><span>RESULT</span></div>
          <div className="grid-item">AC</div>
          <div className="grid-item">+/-</div>
          <div className="grid-item">%</div>
          <div className="grid-item operator">/</div>
          <div className="grid-item">7</div>
          <div className="grid-item">8</div>
          <div className="grid-item">9</div>
          <div className="grid-item operator">X</div>
          <div className="grid-item">4</div>
          <div className="grid-item">5</div>
          <div className="grid-item">6</div>
          <div className="grid-item operator">-</div>
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
          <div className="grid-item operator">+</div>
          <div className="grid-zero">0</div>
          <div className="grid-item">.</div>
          <div className="grid-item operator">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
