import "./Header.scss";
import amex from "../../assets/AMEXheader.png";
import card from "../../assets/amex-card-removebg-preview.png"

function Header() {
  return (
    <header className="header">
      <section className="header__container">
        <p className="header__icon-text">
          <span className="material-symbols-outlined header__icon-menu">
            menu
          </span>
          Menu
        </p>
        <img src={amex} alt="amex logo" className="header__logo"></img>
        <div className="header__wrapper">
        <span class="material-symbols-outlined header__icon-search">
          search
        </span>
          <a className="header__link">Contact Us</a>
          <a className="header__link">Log Out</a>
        </div>
      </section>
      <nav className="nav">
        <div className="nav__wrapper">
        <a href="#" className="nav__link nav__link--current">Home</a>
        <a href="#" className="nav__link">Statement</a>
        <a href="#" className="nav__link">Payments</a>
        <a href="#" className="nav__link">Manage Accounts</a>
        <a href="#" className="nav__link">Information</a>
        </div>
        <div className="nav__container">
        <img src={card} className="nav__img"></img>
        <p className="nav__text">Matthew</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
