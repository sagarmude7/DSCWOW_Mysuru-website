import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../Places to visit, Activities, Gallery/Places-to-visit.css'

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
        <nav class="u-dropdown-icon u-menu u-menu-dropdown u-offcanvas u-menu-1">
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              Mysure
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
                <a href="../Places-to-visit.html"
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Places
                </a>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Activities
                </Link>
              </li>
  

              <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/">Travel</a>
                        <a class="dropdown-item" href="./Places to visit, Activities, Gallery/Gallery.html">Gallery</a>
                        <Link to="/ArticlePgae" className="dropdown-item">Article and FAQ</Link>
                    </div>
                </li>
            </ul>
          </div>
        </nav>
      </> 
    );
  }
  
  export default Navbar;


