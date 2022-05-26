import React from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.compute = this.compute.bind(this);
  }

  compute(e) {
    this.setState((state) => (calculate(state, e.target.innerHTML)));
  }

  keydown() {
    console.log(this.state);
  }

  render() {
    const { total, next, operation } = this.state;
    this.keydown();
    return (
      <div className="main">
        <div className="grid-container">
          <div className="grid-itemResult">
            <span>
              {total}

              {operation}

              {next}
            </span>
          </div>
          <div role="button" className="grid-item" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>AC</div>
          <div role="button" className="grid-item" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>+/-</div>
          <div role="button" className="grid-item" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>%</div>
          <div role="button" className="grid-item operator" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>÷</div>
          <div role="button" className="grid-item" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>7</div>
          <div role="button" className="grid-item" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>8</div>
          <div role="button" className="grid-item" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>9</div>
          <div role="button" className="grid-item operator" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>x</div>
          <div role="button" className="grid-item" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>4</div>
          <div role="button" className="grid-item" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>5</div>
          <div role="button" className="grid-item" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>6</div>
          <div role="button" className="grid-item operator" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>-</div>
          <div role="button" className="grid-item" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>1</div>
          <div role="button" className="grid-item" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>2</div>
          <div role="button" className="grid-item" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>3</div>
          <div role="button" className="grid-item operator" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>+</div>
          <div role="button" className="grid-zero" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>0</div>
          <div role="button" className="grid-item" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>.</div>
          <div role="button" className="grid-item operator" onKeyDown={this.keydown} tabIndex={0} onClick={this.compute}>=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
