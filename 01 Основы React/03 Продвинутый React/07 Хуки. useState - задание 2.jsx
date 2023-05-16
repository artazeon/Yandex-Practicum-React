function Switch () {

  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  
    
    // Используем JavaScript-шаблон для склейки значения атрибута
    const className = `root ${isActive ? 'on' : 'off'}`;

    return (
      <div className={className}>
        <div className={'sideWall'}>
          <button className={'button'} onClick={handleClick}/>
        </div>
        <div className={'catWrap'}>
          <div className={'bubble'}/>
          <div className={'wall'}/>
          <div className={'floor'}/>
          <div className={'cat'}/>
        </div>
      </div>
    );
  }


ReactDOM.render(<Switch />, document.querySelector('#root'));