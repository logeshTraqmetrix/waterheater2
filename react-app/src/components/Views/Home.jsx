import React from 'react';

const Home = () => {
  const divStyle = {
    backgroundImage: 'url("https://visitcascade.com/wp-content/uploads/2023/02/cascade-logo-mobile.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '94vh',
    width: '100%',
  };

  const mobileStyle = {
    ...divStyle,
    backgroundSize: 'cover',
    height: '94vh',
  };

  return (
    <div style={window.innerWidth <= 768 ? mobileStyle : divStyle}>
    </div>
  );
}

export default Home;
