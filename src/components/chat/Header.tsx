const Header = () => {
  return (
    <div>
      <div className='infoBar'>
        <div className='leftInnerContainer'>
          <img className='onlineIcon' src={"onlineIcon"} alt='online icon' />
          <h3>{"Hello"}ssss</h3>
        </div>
        <div className='rightInnerContainer'>
          <a href='/'>
            <img src={"closeIcon"} alt='close icon' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
