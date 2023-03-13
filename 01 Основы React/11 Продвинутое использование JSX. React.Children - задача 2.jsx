const MenuBlock = props => {
  return (
    <div className="menu">
      <div className="content">
        <p className="menu__title">{props.menuHeading}</p>
        {props.children}
      </div>
    </div>
  );
};

const Footer = () => {

  return (
    <div className="footer">
      <div className="container">
        <img className="menu__img" src="./images/bg.svg" alt="Подвал" />
        <MenuBlock menuHeading={"О компании"}><ul className="nav">
      <li className="nav__link">Наша миссия</li>
      <li className="nav__link">Вакансии</li>
      <li className="nav__link">Блог</li>
    </ul></MenuBlock>

      </div>
    </div>
  );
};

ReactDOM.render(<Footer />, document.querySelector('#root'));
