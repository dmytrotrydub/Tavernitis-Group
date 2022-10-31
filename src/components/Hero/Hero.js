import './Hero.scss';
import RestoCard from '../../components/RestoCard/RestoCard';

const Hero = () => {
  return (
    <div className='main-logo'>
      <div className='main-logo__restList'>
        <RestoCard
          logo={
            'https://res.cloudinary.com/hopkins87/image/upload/v1667091226/TAVERNITI-GROUP/hero-logos/Tavernitis-Logo_PNG_tdesoe.png'
          }
          restoLink={'http://www.tavernitis.ca/'}
        />

        <RestoCard
          logo={
            'https://res.cloudinary.com/hopkins87/image/upload/v1667091227/TAVERNITI-GROUP/hero-logos/Tavs-Logo_PNG_euq9h1.png'
          }
          restoLink={'http://tavsrestobar.ca/'}
        />
      </div>
      <img
        id='main-logo'
        src='https://res.cloudinary.com/hopkins87/image/upload/v1667091615/TAVERNITI-GROUP/hero-logos/Taverniti-Group-Logo_main_g5utuq.jpg'
        alt='group-logo'
      />
      <div className='main-logo__secRestList'>
        <RestoCard
          logo={
            'https://res.cloudinary.com/hopkins87/image/upload/v1667091227/TAVERNITI-GROUP/hero-logos/Tavernitis-North-Logo_PNG_xymlck.png'
          }
          restoLink={'https://www.instagram.com/tavernitis_north/?hl=en'}
        />
        <RestoCard
          logo={
            'https://res.cloudinary.com/hopkins87/image/upload/v1667091226/TAVERNITI-GROUP/hero-logos/Rosina-Logo_PNG_fhczsi.png'
          }
          restoLink={'http://www.ristoranterosina.ca/'}
        />
      </div>
    </div>
  );
};

export default Hero;
