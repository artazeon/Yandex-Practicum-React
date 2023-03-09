class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li className="table__text">{this.props.children}</li>;
  }
}

class List extends React.Component {
  render() {
    return (
      <section className="table">
        <h1 className="table__title">
          Игроки киберспортивной команды <span className="table__span">NaVi</span>
        </h1>
        <ol className="table__content">{<Player>b1t</Player>}{<Player>s1mple</Player>}{<Player>electronic</Player>}{<Player>sdy</Player>}{<Player>Perfecto</Player>}</ol>
      </section>
    );
  }
}

ReactDOM.render(<List />, document.querySelector('#team-container'));