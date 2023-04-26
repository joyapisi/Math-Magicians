function Calculator() {
  const buttonKeys = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  return (
    <section id="calculator">
      <input
        id="terminate"
        type="text"
        value="0"
        disabled
      />
      <section id="buttons-container">
        <div id="buttons">
          {
            buttonKeys.map((number) => <button key={number} type="button">{number}</button>)
          }
        </div>
      </section>
    </section>
  );
}

export default Calculator;
