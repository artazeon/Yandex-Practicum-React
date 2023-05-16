function GoodDeeds() {
  /* Создавайте хук для переменной deeds здесь */
  const [deeds, setDeeds] = React.useState([]);

  function handleAddTask(e) {
    const input = e.target.previousSibling;
    setDeeds([...deeds, input.value])
    console.log(e)

    /* А здесь передавайте в сеттер массив с новым элементом из input.value */

    input.value = '';
  }

  return (
    <>
      <h3>Мои хорошие поступки</h3>
      <input type="text" placeholder="Поступок" />
      <button onClick={handleAddTask}>Добавить!</button>
      <ol>
        {deeds.map((deed, i) => (
          <li key={i}>{deed}</li>
        ))}
      </ol>
    </>
  );
}

ReactDOM.render((
  <GoodDeeds />
), document.querySelector('#root'));
