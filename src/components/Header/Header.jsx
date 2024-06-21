import React, { useState } from "react";
import "./Header.css";
import header_icon from "../../assets/icon/header_icon.svg";
import { Link } from "react-router-dom";


let data = [
  {
    id: 1,
    link: "/",
    title: "Home",
  },
  {
    id: 2,
    link: "/user",
    title: "User",
  },
  {
    id: 3,
    link: "/login",
    title: "Login",
  },
  {
    id: 4,
    link: "/register",
    title: "Register",
  },
  {
    id: 5,
    link: "/contact",
    title: "Contact Us",
  },
];

const Header = () => {
  const [toogle, setToggle] = useState(false);

  let dataList = data?.map((e) => (
    <li key={e.id} className="header__list-item">
      <Link to={e.link} className="header__list-link">
        {e.title}
      </Link>
    </li>
  ));
  return (
    <header className={`header ${toogle ? "open" : ""}`}>
      <div className="container">
        <div className="header__start">
          <Link to={"/"}>
            <img className="header__img" src={header_icon} alt="" />
          </Link>
          <nav>
            <ul className="header__list">{dataList}</ul>
          </nav>
          <div className="header__right">
            <input
              className="header__inp"
              type="search"
              placeholder="Search Product"
            />
            <div className="header__menu-burgers">
              <button
                className="header__menu"
                id="menu-burger"
                onClick={() => setToggle(!toogle)}
              >
                <span className="header__menu-span"></span>
                <span className="header__menu-span"></span>
                <span className="header__menu-span"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
