import { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

function Calculator() {
  const [values, setValues] = useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );

  const compute = (e) => {
    setValues((values) => (calculate(values, e.target.innerHTML)));
  };

  return (
    <div className="main">
      <div className="grid-container">
        <div className="grid-itemResult">
          <span>
            {values.total}

            {values.operation}

            {values.next}
          </span>
        </div>
        <Button className="grid-item" text="AC" onClick={compute} />
        <Button className="grid-item" text="+/-" onClick={compute} />
        <Button className="grid-item" text="%" onClick={compute} />
        <Button className="grid-item operator" text="÷" onClick={compute} />
        <Button className="grid-item" text="7" onClick={compute} />
        <Button className="grid-item" text="8" onClick={compute} />
        <Button className="grid-item" text="9" onClick={compute} />
        <Button className="grid-item operator" text="x" onClick={compute} />
        <Button className="grid-item" text="4" onClick={compute} />
        <Button className="grid-item" text="5" onClick={compute} />
        <Button className="grid-item" text="6" onClick={compute} />
        <Button className="grid-item operator" text="-" onClick={compute} />
        <Button className="grid-item" text="1" onClick={compute} />
        <Button className="grid-item" text="2" onClick={compute} />
        <Button className="grid-item" text="3" onClick={compute} />
        <Button className="grid-item operator" text="+" onClick={compute} />
        <Button className="grid-zero" text="0" onClick={compute} />
        <Button className="grid-item" text="." onClick={compute} />
        <Button className="grid-item operator" text="=" onClick={compute} />
      </div>
    </div>
  );
}

export default Calculator;
