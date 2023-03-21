class MouseTrack extends React.Component {
  state = {
    mousePosition: []
  };

  componentDidMount() {
    document.addEventListener(
      'mousemove', 
      (event)=>this.setState({mousePosition: [event.clientX, event.clientY]})
    )
  }

  componentWillUnmount() {
    document.removeEventListener(
      'mousemove', 
      (event)=>this.setState({mousePosition: [event.clientX, event.clientY]})
    )
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
