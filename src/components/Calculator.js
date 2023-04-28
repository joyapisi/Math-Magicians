import { useState } from 'react';
import calculate from '../logic/calculate';
import CalcButtons from './CalcButtons';
import Screen from './Screen';

const obj = {
  total: null,
  next: null,
  operation: null,
};

function Calculator() {
  const [state, setState] = useState(obj);

  const clickBtn = (calcKey) => setState(({ obj }) => ({ obj: calculate(obj, calcKey) }));

  return (
    <section className="calc-container">
      <h2>Let’s do some math !</h2>
      <div className="calc-inner-box">
        <Screen total={state.obj.total} next={state.obj.next} />
        <CalcButtons clickBtn={clickBtn} />
      </div>
    </section>
  );
}

export default Calculator;
