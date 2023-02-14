import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";

import images from "../../assets/images";
import "./Navbar.scss";

function Navbar() {
  const [isShow, setShow] = useState(false);

  const handleShowMenu = () => {
    if(isShow) {
        setShow(false);
    } else {
        setShow(true);
    }
  }

  return (
    <nav id="navbar">
      <div className={`container-L navbar__content ${isShow && 'show'}`}>
        <a href="/" className="navbar__logo">
          <img src={images.logo} alt="Logo" />
        </a>
        <ul className="navbar__list">
          <div className="navbar__list-header">
            <p className="header__title">Menu</p>
            <AiOutlineClose className="header__icon" onClick={handleShowMenu}/>
          </div>
          <li className="list__item">
            <a href="/">Home</a>
          </li>
          <li className="list__item">
            <a href="/">Product</a>
          </li>
          <li className="list__item">
            <a href="/">Services</a>
          </li>
          <li className="list__item">
            <a href="/">Blog</a>
          </li>
          <li className="list__item">
            <a href="/">Contact</a>
          </li>
        </ul>
        <button className="navbar__btn" onClick={handleShowMenu}>
          <HiMenu className="navbar__btn-icon" />
        </button>
        <div className="navbar__layout" onClick={handleShowMenu}></div>
      </div>
    </nav>
  );
}

export default Navbar;
