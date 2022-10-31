import './Header.scss';
import nav from '../../Assets/Images/Images/svg/Taverniti-Nav.png';
import { useState, useEffect } from 'react';
import { useScrollDirection } from '../../Helper/ScrollDirectionHook';

const Header = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header className={`header ${scrollDirection === 'down' ? 'show' : 'hide'} `}>
      <button type='button' id='nav-button'>
        <img src={nav} id='nav-image' alt='navigation' />
      </button>
      <div className='nav'>
        <a className='nav__option' href='#'>
          HOME
        </a>
        <a className='nav__option' href='#history-of-the-brand'>
          HISTORY OF OUR BRAND
        </a>
        <a className='nav__option' href='#'>
          GALLERY
        </a>
        <a className='nav__option' href='#'>
          US IN MEDIA
        </a>
        <a className='nav__option' href='#'>
          SIGNATURE DISHES
        </a>
      </div>
    </header>
  );
};

export default Header;
