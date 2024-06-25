// // import {SyncLoader} from 'react-spinners'
// // import React, { useEffect, useState, useCallback } from "react";
// // import './LoginDetails.css'; // Assuming you have a CSS file for styles




// const LoginDetails = () => {
//   const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
//   const [isFetching, setIsFetching] = useState(true);
//   const [userDetails, setUserDetails] = useState({
//     firstName: "",
//     lastName: "",
//     mailid: "",
//     timeZone: "",
//     createdTime: "",
//   });

//   useEffect(() => {
//     window.catalyst.auth
//       .isUserAuthenticated()
//       .then((result) => {
//          console.log(result.content)
//         let userDetails = {
//           firstName: result.content.first_name,
//           lastName: result.content.last_name,
//           mailid: result.content.email_id,
//           timeZone: result.content.time_zone,
//           createdTime: result.content.created_time,
//         };
//         setUserDetails(userDetails);
//         setIsUserAuthenticated(true);
//       })
//       .catch((err) => {
//         console.error('Error checking authentication:', err);
//       })
//       .finally(() => {
//         setIsFetching(false);
//       });
//   }, []);

//   const logout = useCallback(() => {
//     const redirectURL = "/__catalyst/auth/login";
//     window.catalyst.auth.signOut(redirectURL);
//   }, []);

//   if (isFetching) {
//     return <SyncLoader color="#36d7b7" />;
//   }

//   if (!isUserAuthenticated) {
//     return (
//       <div>
//         <h1>Login Required</h1>
//         <p>You are not logged in. Please log in to continue.</p>
//         <a href="/__catalyst/auth/login">Login</a>
//       </div>
//     );
//   }

//   return (
//     <div className="card">
//       <h1 style={{ textAlign: 'center' }}>User Profile Information</h1>
//       <img
//         alt="usericon"
//         id="userimg"
//         width="200px"
//         height="450px"
//         src="https://cdn2.iconfinder.com/data/icons/user-management/512/profile_settings-512.png"
//         style={{ width: '80px', height: '80px' }}
//       />
//       <p className="title">First Name : {userDetails.firstName}</p>
//       <p className="title">Last Name: {userDetails.lastName}</p>
//       <p className="title">Email Address: {userDetails.mailid}</p>
//       <p className="title">Time Zone: {userDetails.timeZone}</p>
//       <p className="title">Joined On: {userDetails.createdTime}</p>
//       <div id="logoutbtn" style={{ textAlign: "inline-block" }}>
//         <button onClick={logout} id="logout" style={{ display: "inline-block" }}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginDetails;


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Card, CardContent, Typography, Avatar, Box, Chip } from '@material-ui/core';
// import EmailIcon from '@material-ui/icons/Email';
// import EventIcon from '@material-ui/icons/Event';
// import PersonAddIcon from '@material-ui/icons/PersonAdd';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//     margin: 'auto',
//     marginTop: theme.spacing(4),
//     marginBottom: theme.spacing(4),
//     borderRadius: 16,
//     boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
//     transition: '0.3s',
//     '&:hover': {
//       boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
//     },
//   },
//   avatar: {
//     width: theme.spacing(12),
//     height: theme.spacing(12),
//     margin: 'auto',
//     marginTop: theme.spacing(-6),
//     border: `4px solid ${theme.palette.background.paper}`,
//     boxShadow: theme.shadows[3],
//   },
//   name: {
//     textAlign: 'center',
//     marginTop: theme.spacing(2),
//     fontWeight: 'bold',
//   },
//   email: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: theme.spacing(1),
//   },
//   status: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: theme.spacing(2),
//   },
//   infoItem: {
//     display: 'flex',
//     alignItems: 'center',
//     marginTop: theme.spacing(2),
//   },
//   icon: {
//     marginRight: theme.spacing(1),
//     color: theme.palette.primary.main,
//   },
// }));

// const LoginDetails = () => {

//   const userDetails = {
//     status: 'ACTIVE',
//     email_id: 'logesh.mg@traqmetrix.com',
//     first_name: 'Logesh',
//     last_name: 'MG',
//     created_time: 'Jun 20, 2024 11:52 AM',
//     invited_time: 'Jun 20, 2024 11:52 AM',
//     user_id: '15205000000148810',
//   };
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
//       <CardContent>
//         <Avatar 
//           className={classes.avatar}
//           src={`https://ui-avatars.com/api/?name=${userDetails.first_name}+${userDetails.last_name}&background=random`}
//           alt={`${userDetails.first_name} ${userDetails.last_name}`}
//         />
//         <Typography variant="h5" component="h2" className={classes.name}>
//           {`${userDetails.first_name} ${userDetails.last_name}`}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" className={classes.email}>
//           <EmailIcon className={classes.icon} fontSize="small" />
//           {userDetails.email_id}
//         </Typography>
//         <Typography variant="caption" color="textSecondary" component="p" style={{ marginTop: 16, textAlign: 'center' }}>
//           User ID: {userDetails.user_id}
//         </Typography>
        
//         <Box className={classes.infoItem}>
//           <EventIcon className={classes.icon} />
//           <Typography variant="body2">
//             Created: {new Date(userDetails.created_time).toLocaleDateString()}
//           </Typography>
//         </Box>
//         <Box className={classes.infoItem}>
//           <PersonAddIcon className={classes.icon} />
//           <Typography variant="body2">
//             Invited: {new Date(userDetails.invited_time).toLocaleDateString()}
//           </Typography>
//         </Box>
        
//       </CardContent>
//     </Card>
//   );
// };

// export default LoginDetails;





// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Card, CardContent, Typography, Avatar, Box, Button } from '@material-ui/core';
// import EmailIcon from '@material-ui/icons/Email';
// import EventIcon from '@material-ui/icons/Event';
// import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//     height:400,
//     margin: 'auto',
//     marginTop: theme.spacing(18),
//     marginBottom: theme.spacing(4),
//     borderRadius: 16,
//     boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
//     transition: '0.3s',
//     '&:hover': {
//       boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
//     },
//   },
//   avatar: {
//     width: theme.spacing(12),
//     height: theme.spacing(12),
//     margin: 'auto',
//     // marginTop: theme.spacing(-6),
//     border: `4px solid ${theme.palette.background.paper}`,
//     boxShadow: theme.shadows[3],
//   },
//   name: {
//     textAlign: 'center',
//     marginTop: theme.spacing(2),
//     fontWeight: 'bold',
//   },
//   email: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: theme.spacing(1),
//   },
//   infoItem: {
//     display: 'flex',
//     alignItems: 'center',
//     marginTop: theme.spacing(2),
//   },
//   icon: {
//     marginRight: theme.spacing(1),
//     color: theme.palette.primary.main,
//   },
//   logoutButton: {
//     marginTop: theme.spacing(2),
//     width: '100%',
//   },
// }));

// const LoginDetails = () => {
//   const userDetails = {
//     status: 'ACTIVE',
//     email_id: 'logesh.mg@traqmetrix.com',
//     first_name: 'Logesh',
//     last_name: 'MG',
//     created_time: 'Jun 20, 2024 11:52 AM',
//     invited_time: 'Jun 20, 2024 11:52 AM',
//     user_id: '15205000000148810',
//   };
//   const classes = useStyles();

//   const logout = () => {
//     const redirectURL = "/__catalyst/auth/login";
//     window.catalyst.auth.signOut(redirectURL);
//   };

//   return (
//     <Card className={classes.root}>
//       <CardContent>
//         <Avatar 
//           className={classes.avatar}
//           src={`https://ui-avatars.com/api/?name=${userDetails.first_name}+${userDetails.last_name}&background=random`}
//           alt={`${userDetails.first_name} ${userDetails.last_name}`}
//         />
//         <Typography variant="h5" component="h2" className={classes.name}>
//           {`${userDetails.first_name} ${userDetails.last_name}`}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" className={classes.email}>
//           <EmailIcon className={classes.icon} fontSize="small" />
//           {userDetails.email_id}
//         </Typography>
//         <Typography variant="caption" color="textSecondary" component="p" style={{ marginTop: 16, textAlign: 'center' }}>
//           User ID: {userDetails.user_id}
//         </Typography>
        
//         <Box className={classes.infoItem}>
//           <EventIcon className={classes.icon} />
//           <Typography variant="body2">
//             Created: {new Date(userDetails.created_time).toLocaleDateString()}
//           </Typography>
//         </Box>
//         <Box className={classes.infoItem}>
//           <PersonAddIcon className={classes.icon} />
//           <Typography variant="body2">
//             Invited: {new Date(userDetails.invited_time).toLocaleDateString()}
//           </Typography>
//         </Box>
        
//         <Button
//           variant="contained"
//           color="secondary"
//           className={classes.logoutButton}
//           startIcon={<ExitToAppIcon />}
//           onClick={logout}
//         >
//           Logout
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default LoginDetails;





// import React from 'react';
// import { Card, CardContent, Typography, Avatar, Box, Button } from '@material-ui/core';
// import EmailIcon from '@material-ui/icons/Email';
// import EventIcon from '@material-ui/icons/Event';
// import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// // Import the CSS module
// // import styles from './LoginDetails.css';
// import styles from './LoginDetails.module.css';

// const LoginDetails = () => {
//   const userDetails = {
//     status: 'ACTIVE',
//     email_id: 'logesh.mg@traqmetrix.com',
//     first_name: 'Logesh',
//     last_name: 'MG',
//     created_time: 'Jun 20, 2024 11:52 AM',
//     invited_time: 'Jun 20, 2024 11:52 AM',
//     user_id: '15205000000148810',
//   };

//   const logout = () => {
//     const redirectURL = "/__catalyst/auth/login";
//     window.catalyst.auth.signOut(redirectURL);
//   };

//   return (
//     <Card className={styles.root}>
//       <CardContent>
//         <Avatar
//           className={styles.avatar}
//           src={`https://ui-avatars.com/api/?name=${userDetails.first_name}+${userDetails.last_name}&background=random`}
//           alt={`${userDetails.first_name} ${userDetails.last_name}`}
//         />
//         <Typography variant="h5" component="h2" className={styles.name}>
//           {`${userDetails.first_name} ${userDetails.last_name}`}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" className={styles.email}>
//           <EmailIcon className={styles.icon} fontSize="small" />
//           {userDetails.email_id}
//         </Typography>
//         <Typography variant="caption" color="textSecondary" component="p" className={styles.userId}>
//           User ID: {userDetails.user_id}
//         </Typography>
        
//         <Box className={styles.infoItem}>
//           <EventIcon className={styles.icon} />
//           <Typography variant="body2">
//             Created: {new Date(userDetails.created_time).toLocaleDateString()}
//           </Typography>
//         </Box>
//         <Box className={styles.infoItem}>
//           <PersonAddIcon className={styles.icon} />
//           <Typography variant="body2">
//             Invited: {new Date(userDetails.invited_time).toLocaleDateString()}
//           </Typography>
//         </Box>
        
//         <Button
//           variant="contained"
//           color="secondary"
//           className={styles.logoutButton}
//           startIcon={<ExitToAppIcon />}
//           onClick={logout}
//         >
//           Logout
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default LoginDetails;




import React from 'react';
import { Card, CardContent, Typography, Avatar, Box, Button } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import EventIcon from '@material-ui/icons/Event';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './LoginDetails.css';

const LoginDetails = ({userDetails}) => {
  // const userDetails = {
  //   status: 'ACTIVE',
  //   email_id: 'logesh.mg@traqmetrix.com',
  //   first_name: 'Logesh',
  //   last_name: 'MG',
  //   created_time: 'Jun 20, 2024 11:52 AM',
  //   invited_time: 'Jun 20, 2024 11:52 AM',
  //   user_id: '15205000000148810',
  // };

  const logout = () => {
    const redirectURL = "/__catalyst/auth/login";
    window.catalyst.auth.signOut(redirectURL);
  };

  return (
    <Card className="login-details-card">
      <CardContent>
        <Avatar
          className="login-details-avatar"
          src={`https://ui-avatars.com/api/?name=${userDetails.first_name}+${userDetails.last_name}&background=random`}
          alt={`${userDetails.first_name} ${userDetails.last_name}`}
        />
        <Typography variant="h5" component="h2" className="login-details-name">
          {`${userDetails.first_name} ${userDetails.last_name}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" className="login-details-email">
          <EmailIcon className="login-details-icon" fontSize="small" />
          {userDetails.email_id}
        </Typography>
        <Typography variant="caption" color="textSecondary" component="p" className="login-details-user-id">
          User ID: {userDetails.user_id}
        </Typography>
        
        <Box className="login-details-info-item">
          <EventIcon className="login-details-icon" />
          <Typography variant="body2">
            Created: {new Date(userDetails.created_time).toLocaleDateString()}
          </Typography>
        </Box>
        <Box className="login-details-info-item">
          <PersonAddIcon className="login-details-icon" />
          <Typography variant="body2">
            Invited: {new Date(userDetails.invited_time).toLocaleDateString()}
          </Typography>
        </Box>
        
        <Button
          variant="contained"
          color="secondary"
          className="login-details-logout-button"
          startIcon={<ExitToAppIcon />}
          onClick={logout}
        >
          Logout
        </Button>
      </CardContent>
    </Card>
  );
};

export default LoginDetails;