import { Link } from "react-router-dom";
import "./styles.scss";

function Header() {
  return (
    <nav className="navbar">
      <Link to="/" className="container__logo">
        <img className="logo" src="../LOGO.png" alt="Logo"/>
      </Link>

      <div className="container__links">
        <Link className="link" to="/">
          Accueil
        </Link>
        <Link className="link" to="/a-propos">
          A propos
        </Link>
      </div>
    </nav>
  );
}

export default Header;
