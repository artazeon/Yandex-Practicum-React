function resize() {
    const element = React.createElement(
      'div',
      {className: 'main'},
      React.createElement('h1', null, 'размер окна'),
      React.createElement('h1', null, 'в пикселях'),
      React.createElement('h2', null, `${window.innerWidth}px на ${window.innerHeight}px`)
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  resize();
  window.onresize = resize;
  