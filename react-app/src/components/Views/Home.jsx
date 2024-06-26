// import React from 'react';

// const Home = () => {
//   // CSS-in-JS styles
//   const styles = {
//     backgroundImage: {
//       backgroundImage: 'url("https://media.licdn.com/dms/image/D560BAQH-L__907880g/company-logo_200_200/0/1695224940207?e=2147483647&v=beta&t=ogRNlEfU51LtXMa2jRgOPYQZakWUeV7ekA3n96tEAJA")',
//       backgroundSize: 'contain',
//       backgroundRepeat: 'no-repeat',
//       height: '45vh',
//     },
//   };

//   // Media query for mobile devices
//   const mobileStyles = {
//     '@media (max-width: 768px)': {
//       backgroundSize: 'cover',
//     },
//   };

//   return (
//     <div className=''>
//       <div style={{...styles.backgroundImage, ...mobileStyles}}>
      
//       </div>
//       <div>
//         <h1>Traqmetrix Solution LLP</h1>

//       </div>
//     </div>
//   );
// };

// export default Home;



// import React from 'react';

// const Home = () => {
//   // CSS-in-JS styles
//   const styles = {
//     container: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       height: '84vh',
//     },
//     backgroundImage: {
//       backgroundImage: 'url("https://media.licdn.com/dms/image/D560BAQH-L__907880g/company-logo_200_200/0/1695224940207?e=2147483647&v=beta&t=ogRNlEfU51LtXMa2jRgOPYQZakWUeV7ekA3n96tEAJA")',
//       backgroundSize: 'contain',
//       backgroundRepeat: 'no-repeat',
//       height: '45vh',
//       width: '45vh',
//     },
//     text: {
//       marginLeft: '20px',
//     },
//     h2:{
//       fontWeight: '400',
//     }
//   };

//   // Media query for mobile devices
//   const mobileStyles = {
//     '@media (max-width: 768px)': {
//       backgroundImage: {
//         ...styles.backgroundImage,
//         backgroundSize: 'cover',
//       },
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.backgroundImage}>
//       </div>
//       <div style={styles.text}>
//         <h1>Traqmetrix Solution LLP</h1>
//         <h2 style={styles.h2}>For Numbers That Matters</h2>
//       </div>
//     </div>
//   );
// };

// export default Home;






// import React from 'react';
// import './Home.css'

// const Home = () => {
//   // CSS-in-JS styles
//   const styles = {
//     container: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       height: '84vh',
//       flexDirection: 'row',
//     },
//     backgroundImage: {
//       backgroundImage: 'url("https://media.licdn.com/dms/image/D560BAQH-L__907880g/company-logo_200_200/0/1695224940207?e=2147483647&v=beta&t=ogRNlEfU51LtXMa2jRgOPYQZakWUeV7ekA3n96tEAJA")',
//       backgroundSize: 'contain',
//       backgroundRepeat: 'no-repeat',
//       height: '45vh',
//       width: '45vh',
//     },
//     text: {
//       marginLeft: '20px',
//     },
//     h2: {
//       fontWeight: '300', // Thinner font weight
//     },
//   };

//   // Media query for mobile devices
//   const mobileStyles = `
//     @media (max-width: 768px) {
//       .container {
//         flex-direction: column;
//         text-align: center;
//       }
//       .backgroundImage {
//         background-size: cover;
//         width: 50%;
//         height: 30vh;
//       }
//       .text {
//         margin-left: 0;
//         margin-top: 20px;
//       }
//     }
//   `;

//   return (
//     <div>
//       <style>{mobileStyles}</style>
//       <div className="container" style={styles.container}>
//         <div className="backgroundImage" style={styles.backgroundImage}></div>
//         <div className="text" style={styles.text}>
//           <h1>Traqmetrix Solution LLP</h1>
//           <h2 style={styles.h2}>For Numbers That Matters</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;




import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div id="container-home">
      <div id="backgroundImage-home"></div>
      <div id="text-home">
        <h1>Traqmetrix Solution LLP</h1>
        <h2>For Numbers That Matters</h2>
      </div>
    </div>
  );
};

export default Home;
