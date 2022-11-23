import style from "../css/nav.module.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, memo } from "react";
function Nav() {
  const [displayNav, setdisplayNav] = useState(false);
  const isActive = ({ isActive }) => (isActive ? style.active : "");
  const isMobile = window.matchMedia("(max-width: 425px)");
  const Nav = () => {
    if (isMobile.matches) setdisplayNav((prev) => (prev ? false : true));
  };
  const { cart } = useSelector((state) => state);
  const numOfItems = cart.length
    ? cart.reduce((acc, ind) => acc + ind.quantity, 0)
    : null;
  return (
    <nav className={style.nav}>
      <ul className={`${style.links} ${displayNav ? style.displayNav : ""}`}>
        <li>
          <NavLink to={"/"} className={isActive} onClick={Nav}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/d423s"} className={isActive} onClick={Nav}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"/sd"} className={isActive} onClick={Nav}>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to={"/ds"} className={isActive} onClick={Nav}>
            Contact
          </NavLink>
        </li>
      </ul>
      <Link to="/checkout" className={style.cartIcon}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
        </svg>
        {numOfItems && <span>{numOfItems}</span>}
      </Link>
      <span
        className={`${style.navButton} ${displayNav ? style.remove : ""}`}
        onClick={Nav}
      >
        <span></span>
        <span></span>
        <span></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className={`${style.xIcon} ${
            displayNav ? style.display : style.remove
          }`}
        >
          <path
            fill="#666666"
            d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
          />
        </svg>
      </span>
    </nav>
  );
}
export default memo(Nav);
