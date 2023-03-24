class Door extends React.Component {
  state = { isOpen: false };
  
  toggleLock = () => {
    this.setState({ isOpen: !this.state.isOpen })  
  }

  render() {
    return (
      <div className={this.state.isOpen ? 'content bg_open' : 'content bg_close'}>
        <h1 className="content__title">{this.state.isOpen ? 'Замок открыт' : 'Замок закрыт'}</h1>
        <button className="content__btn" onClick={this.toggleLock}>{this.state.isOpen ? 'Закрыть' : 'Открыть'}</button>
      </div>
    );
  }
}

ReactDOM.render(<Door />, document.querySelector('#root'));
