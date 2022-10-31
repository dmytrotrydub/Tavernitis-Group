import "./RestoCard.scss"

const RestoCard = (props) => {
    return (
      <a href={ props.restoLink} className='resto-card'>
        <img
          src={props.logo}
          className='main-logo__resto'
          alt='logo'
        />
      </a>
    );
};

export default RestoCard;