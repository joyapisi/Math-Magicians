import React from 'react';
import PropTypes from 'prop-types';

const CalcButtons = (props) => {
  const { clickBtn } = props;
  return (
    <section className="calc-outer-container">
      <div className="button-box">
        <div className="calc-keys">
          <button type="button" onClick={() => clickBtn('AC')}>AC</button>
          <button type="button" onClick={() => clickBtn('+/-')}>+/-</button>
          <button type="button" onClick={() => clickBtn('%')}>%</button>
        </div>
        <div className="calc-keys">
          <button type="button" onClick={() => clickBtn('7')}>7</button>
          <button type="button" onClick={() => clickBtn('8')}>8</button>
          <button type="button" onClick={() => clickBtn('9')}>9</button>
        </div>
        <div className="calc-keys">
          <button type="button" onClick={() => clickBtn('4')}>4</button>
          <button type="button" onClick={() => clickBtn('5')}>5</button>
          <button type="button" onClick={() => clickBtn('6')}>6</button>
        </div>
        <div className="calc-keys">
          <button type="button" onClick={() => clickBtn('1')}>1</button>
          <button type="button" onClick={() => clickBtn('2')}>2</button>
          <button type="button" onClick={() => clickBtn('3')}>3</button>
        </div>
        <div className="calc-keys">
          <button type="button" onClick={() => clickBtn('0')}>0</button>
          <button type="button" onClick={() => clickBtn('.')}>.</button>
        </div>
      </div>
      <div className="calc-symbols">
        <button type="button" onClick={() => clickBtn('÷')}>÷</button>
        <button type="button" onClick={() => clickBtn('x')}>×</button>
        <button type="button" onClick={() => clickBtn('-')}>-</button>
        <button type="button" onClick={() => clickBtn('+')}>+</button>
        <button type="button" onClick={() => clickBtn('=')}>=</button>
      </div>
    </section>
  );
};


export default CalcButtons;
