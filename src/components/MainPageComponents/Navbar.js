import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Link } from 'react-router-dom';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img style={{width:"40px" , height:"40px"}} src={'https://cdn.discordapp.com/attachments/784324842425548840/786881399462166558/Mysuru_festival_pink.png'} alt="Logo" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/places'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Places
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/activities'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Activities
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Travel
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Gallery
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/articles'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Articles
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;