class Page extends React.Component {
  render() {
    return (
      <div className={`app ${this.props.img}`}>
        <h1 className='app__greeting'>{this.props.greeting}</h1>
      </div>
    );
  }
}

class CurrentTime extends React.Component { 
  render() {
    
    let hour = new Date().getHours();
    let timeDay;
    let hello;
    
    
    if (hour >= 4 && hour < 12) {
      timeDay = 'morning'
      hello = 'Доброе утро'
    }
    else if (hour >= 12 && hour < 16) {
      timeDay = 'afternoon'
      hello = 'Добрый день'
    }
    else if (hour >= 16 && hour < 23) {
      timeDay = 'evening'
      hello = 'Добрый вечер'
    }
    else if (hour >= 23 || hour < 4) {
      timeDay = 'night'
      hello = 'Доброй ночи'
    }
    
    return (
      <Page img={timeDay} greeting={hello}/>
    )
  }
}

ReactDOM.render(<CurrentTime />, document.querySelector('#root'));