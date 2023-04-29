import { useState } from 'react';
import calculate from '../logic/calculate';
import CalcButtons from './CalcButtons';
import MathQuotes from './Quotes';

const obj = {
  total: null,
  next: null,
  operation: null,
};

function Calculator() {
  const [state, setState] = useState(obj);

  const { total, next, operation } = state;

  const clickBtn = (calcKey) => {
    const item = calculate(state, calcKey);
    setState(item);
  };

  return (
    <div id="calculator">
      <h2>Let’s do some math !</h2>
      <div className="display">
        { ' ' }
        {total}
        {operation}
        {next}
      </div>
      <CalcButtons clickBtn={clickBtn} />
      <MathQuotes />
    </div>
  );
}

export default Calculator;
