import PropTypes from 'prop-types';

const CalcButtons = (props) => {
  const { clickBtn } = props;
  return (
    <div className="calc-outer-container">
      <button type="button" onClick={() => clickBtn('AC')}>AC</button>
      <button type="button" onClick={() => clickBtn('+/-')}>+/-</button>
      <button type="button" onClick={() => clickBtn('%')}>%</button>
      <button type="button" className="coloured" onClick={() => clickBtn('÷')}>÷</button>
      <button type="button" onClick={() => clickBtn('7')}>7</button>
      <button type="button" onClick={() => clickBtn('8')}>8</button>
      <button type="button" onClick={() => clickBtn('9')}>9</button>
      <button type="button" className="coloured" onClick={() => clickBtn('x')}>×</button>
      <button type="button" onClick={() => clickBtn('4')}>4</button>
      <button type="button" onClick={() => clickBtn('5')}>5</button>
      <button type="button" onClick={() => clickBtn('6')}>6</button>
      <button type="button" className="coloured" onClick={() => clickBtn('-')}>-</button>
      <button type="button" onClick={() => clickBtn('1')}>1</button>
      <button type="button" onClick={() => clickBtn('2')}>2</button>
      <button type="button" onClick={() => clickBtn('3')}>3</button>
      <button type="button" className="coloured" onClick={() => clickBtn('+')}>+</button>
      <button type="button" className="spanner" onClick={() => clickBtn('0')}>0</button>
      <button type="button" onClick={() => clickBtn('.')}>.</button>
      <button type="button" className="coloured" onClick={() => clickBtn('=')}>=</button>
    </div>
  );
};

CalcButtons.propTypes = { clickBtn: PropTypes.func.isRequired };

export default CalcButtons;
