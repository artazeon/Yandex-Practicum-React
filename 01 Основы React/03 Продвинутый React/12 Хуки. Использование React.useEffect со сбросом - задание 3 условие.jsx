class MouseTrack extends React.Component {
  state = {
    mousePosition: []
  };

  componentDidMount() {
    document.addEventListener('mousemove', this.trackMousePos);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.trackMousePos);
  }

  trackMousePos = e => {
    this.setState({
      mousePosition: [e.clientX, e.clientY]
    });
  };

  render() {
    return (
      <div>
        <h3 className="app__title">Позиция курсора:</h3>
        <h2>
          X: {this.props.trackMouse ? this.state.mousePosition[0] : ' -'}
          <br />
          Y: {this.props.trackMouse ? this.state.mousePosition[1] : ' -'}
        </h2>
      </div>
    );
  }
}
