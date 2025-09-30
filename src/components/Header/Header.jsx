import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box flex">
          <a href="#!" className="header-logo flex">
            <img src="/image/logo.svg" alt="Logo" />
            <span>Abito</span>
          </a>
          <div className="header-controls flex">
            <button className="btn btn-outline">Вход и регистрация</button>
            <button className="btn btn-primary">Подать объявление</button>
          </div>
          <div className="header-burger">
            <img src="/image/burger-menu.svg" alt="Menu" />
          </div>
        </div>
      </div>
    </header>
  );
}