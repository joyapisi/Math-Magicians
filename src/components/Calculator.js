import { useState } from 'react';
import calculate from '../logic/calculate';
import CalcButtons from './CalcButtons';
import { Screen } from './Screen';

const obj = {
  total: null,
  next: null,
  operation: null,
};

function Calculator() {
  const [state, setState] = useState(obj);

  // const buttonKeys = [
  // 'AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  // const clickBtn = (e) => {
  //   const btn = e.target.name;
  //   setOutput(calculate(output, btn));
  //   setPressedBtn(btn);
  // };

  const clickBtn = (calcKey) => setState(({ obj }) => ({ obj: calculate(obj, calcKey) }));

  // const display = (item) => {
  //   if ((!item.total) && (!item.next)) {
  //     return '0';
  //   }
  //   if (!item.total) {
  //     return item.next;
  //   }
  //   if (item.next && item.total && item.operation) {
  //     return item.next;
  //   }
  //   return item.total;
  // };

  // return (
  //   <section id="calculator">
  //     <input
  //       id="terminate"
  //       type="text"
  //       value={display(output)}
  //       disabled
  //     />
  //     <section id="input">
  //       <article id="buttons">
  //         {
  //             buttonKeys.map((button) => (
  //               <button
  //                 key={button}
  //                 type="button"
  //                 name={button}
  //                 onClick={clickBtn}
  //                 className={pressedBtn === buttonKeys ? 'pressed' : ''}
  //               >
  //                 {button}
  //               </button>
  //             ))
  //           }
  //       </article>
  //     </section>
  //   </section>
  // );

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
