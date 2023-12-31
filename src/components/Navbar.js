import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className= 'navbar-logo'>
            AfricanCuisine <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-Links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/services' className='nav-Links' onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/products' className='nav-Links' onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' className='nav-Links' onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                  sign up
                </Link>
              </li>
            </ul>
            {button && <Button>SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
