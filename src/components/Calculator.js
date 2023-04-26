import { useState } from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

const obj = {
  total: null,
  next: null,
  operation: null,
};

function Calculator() {
  const [output, setOutput] = useState(obj);

  const button = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  const clickBtn = (e) => {
    const btn = e.target.name;
    return setOutput(calculate(output, btn));
  };

  const display = (item) => {
    if ((!item.total) && (!item.next)) {
      return '0';
    }
    if (!item.total) {
      return item.next;
    }
    if (item.next && item.total && item.operation) {
      return item.next;
    }
    return item.total;
  };

  return (
    <section id="calculator">
      <input
        id="terminate"
        type="text"
        value={display(output)}
        disabled
      />
      <section id="input">
        <article id="buttons">
          {
              buttonKeys.map((button) => (
                <button
                  key={button}
                  type="button"
                  name={button}
                  onClick={clickBtn}
                >
                  {button}
                </button>
              ))
            }
        </article>
      </section>
    </section>
  );
}

export default Calculator;
