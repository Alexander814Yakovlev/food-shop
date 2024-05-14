import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="main__color-theme fixed-nav blue">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          <div className="title">Food Shop</div>
        </Link>
        <ul className="right">
          <li>
            <a
              href="https://github.com/Alexander814Yakovlev/fortnite-shop"
              target="blank_"
            >
              <i className="material-icons">code</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
