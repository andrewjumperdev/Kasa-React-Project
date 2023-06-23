import { Link, useLocation } from 'react-router-dom';
import "./styles.scss";
import { useEffect, useState } from 'react';

function Nav() {

  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);


  return (
    <nav className="navbar">
      <Link to="/" className="container__logo">
        <img className="logo" src="../LOGO.png" alt="Logo"/>
      </Link>

      <div className="container__links">
        <Link exact to="/" className={activeLink === '/' ? 'active' : ''}>
          Accueil
        </Link>
        <Link to="/a-propos" className={activeLink === '/a-propos' ? 'active' : ''}>
          A propos
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
