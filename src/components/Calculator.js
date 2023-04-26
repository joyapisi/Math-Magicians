export default function Calculator() {
  const buttonKeys = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  return (
    <section id="calculator">
      <input
        id="terminate"
        type="text"
        value="0"
        disabled
      />
      <section id="input">
        <article id="buttons">
          {
              buttonKeys.map((button) => <button key={button} type="button">{button}</button>)
            }
        </article>
      </section>
    </section>
  );
}
