import './Header.scss';
import nav from '../../Assets/Images/Images/svg/Taverniti-Nav.png';

const Header = () => {
  return (
    <header className='header'>
      <button type='button' id='nav-button'>
        <img src={nav} id='nav-image' alt='navigation' />
      </button>
    </header>
  );
};

export default Header;
