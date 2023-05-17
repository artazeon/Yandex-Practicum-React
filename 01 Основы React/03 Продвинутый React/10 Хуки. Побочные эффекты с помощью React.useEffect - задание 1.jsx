function toggleBackground(shouldShow) {
  document.body.classList.toggle('with-bg', shouldShow);
}

function Beautifier() {
  const [isBeautiful, setIsBeautiful] = React.useState(false);

  React.useEffect(
  () => {
    toggleBackground(isBeautiful)
  }
  );

  function handleChange() {
    setIsBeautiful(!isBeautiful);
  }

  return (
    <label>
      <input type="checkbox" onChange={handleChange} />
      Включить красивый фон
    </label>
  );
}

ReactDOM.render((
  <Beautifier />
), document.querySelector('#root'));
