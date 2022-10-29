import './Home.scss';
import Header from '../../components/Header/Header';
import tavernitiLogo from '../../Assets/Images/Images/LOGOS/Tavernitis-Logo.jpg';
import rosinaLogo from '../../Assets/Images/Images/LOGOS/Rosina-Logo.jpg';
import tavernitiGroupLogo from '../../Assets/Images/Images/LOGOS/Taverniti-Group-Logo(main).jpg';
import tavsLogo from '../../Assets/Images/Images/LOGOS/Tavs-Logo.jpg';
import tavernitiNorthLogo from '../../Assets/Images/Images/LOGOS/Tavernitis-North-Logo.jpg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {




  return (
    <>
      <Header />
      <div className='main-logo'>
        <div className='main-logo__restList'>
          <div className='main-logo__resto-card'>
            {isHovering === false ? (
              <img
                src={tavernitiLogo}
                className='main-logo__resto'
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                alt='taverniti-restaurant'
              />
            ) : null}

            <div>
              
              {/* <Link to='http://www.tavernitis.ca/' /> */}
            </div>
          </div>
          <div className='main-logo__resto-card'>
            <img src={tavsLogo} className='main-logo__resto' alt='tavs-logo' />
          </div>
        </div>
        <img id='main-logo' src={tavernitiGroupLogo} alt='group-logo' />
        <div className='main-logo__secRestList'>
          <div className='main-logo__resto-card'>
            <img src={tavernitiNorthLogo} className='main-logo__resto' alt='taverniti-north-logo' />
          </div>
          <div className='main-logo__resto-card'>
            <img
              src={rosinaLogo}
              className='main-logo__resto'
              id='rosina'
              alt='rosina-restaurant'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
