import React from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

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
          <Button className="grid-item" text="AC" onClick={this.compute} />
          <Button className="grid-item" text="+/-" onClick={this.compute} />
          <Button className="grid-item" text="%" onClick={this.compute} />
          <Button className="grid-item operator" text="÷" onClick={this.compute} />
          <Button className="grid-item" text="7" onClick={this.compute} />
          <Button className="grid-item" text="8" onClick={this.compute} />
          <Button className="grid-item" text="9" onClick={this.compute} />
          <Button className="grid-item operator" text="x" onClick={this.compute} />
          <Button className="grid-item" text="4" onClick={this.compute} />
          <Button className="grid-item" text="5" onClick={this.compute} />
          <Button className="grid-item" text="6" onClick={this.compute} />
          <Button className="grid-item operator" text="-" onClick={this.compute} />
          <Button className="grid-item" text="1" onClick={this.compute} />
          <Button className="grid-item" text="2" onClick={this.compute} />
          <Button className="grid-item" text="3" onClick={this.compute} />
          <Button className="grid-item operator" text="+" onClick={this.compute} />
          <Button className="grid-zero" text="0" onClick={this.compute} />
          <Button className="grid-item" text="." onClick={this.compute} />
          <Button className="grid-item operator" text="=" onClick={this.compute} />
        </div>
      </div>
    );
  }
}

export default Calculator;
