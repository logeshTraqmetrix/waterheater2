
//good with url and component

// import React, { useState, useEffect } from 'react';
// import { HashRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Menu } from 'antd';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

// // Import your components
// import ViewInvoice from './components/Views/ViewInvoice';
// import ViewListOfSpares from './components/Views/ViewListOfSpares';
// import ViewLogs from './components/Views/ViewLogs';
// import ViewFeedback from './components/Views/ViewFeedback';
// import ViewProblem from './components/Views/ViewProblem';
// import ViewProduct from './components/Views/ViewProduct';
// import ViewScrap from './components/Views/ViewScrap';
// import ViewSpares from './components/Views/ViewSpares';
// import ViewTechnicianDetails from './components/Views/ViewTechnicianDetails';
// import ViewCustomerDetails from './components/Views/ViewCustomerDetails';
// import ViewTicket from './components/Views/ViewTicket';
// import InvoiceForm from './components/Forms/InvoiceForm';
// import TicketCreation from './components/Forms/TicketCreation';
// import FeedbackForm from './components/Forms/FeedbackForm';
// import ProblemStatement from './components/Forms/ProblemStatement';
// import ProductMaster from './components/Forms/ProductMaster';
// import SparePartsAndStocks from './components/Forms/SparePartsAndStocks';
// import CustomerDetail from './components/Forms/CustomerDetail';
// import TechnicianDetail from './components/Forms/TechnicianDetail';
// import LoginDetails from './components/Views/LoginDetails';
// import TechnicianView from './components/Views/TechnicianView';
// import DispatchView from './components/Views/DispatchView';
// import InhouseView from './components/Views/InhouseView';
// import Home from './components/Views/Home';
// import Dashboard from './components/Views/Dashboard';

// const App = () => {
//   const [userRole, setUserRole] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [userDetails, setUserDetails] = useState({});
//   const [current, setCurrent] = useState('');
//   const navigate = useNavigate();

//   const darkThemeColor = '#001529';

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const res = await axios.get('/server/waterheater_1_function/getuser');
//         setUserRole(res.data.role_details.role_name);
//         setUserEmail(res.data.email_id);
//         setUserDetails(res.data);
//       } catch (err) {
//         console.error('Error fetching user role:', err);
//       }
//     };
//     fetchUserRole();
//   }, []);

//   const formsItems = [
//     { key: 'f1', label: 'Customer Detail', path: 'customer-detail', component: CustomerDetail },
//     { key: 'f2', label: 'Technician Detail', path: 'technician-detail', component: TechnicianDetail },
//     { key: 'f3', label: 'Product Master', path: 'product-master', component: ProductMaster },
//     { key: 'f4', label: 'Spare Parts and Stocks', path: 'spare-parts-stocks', component: SparePartsAndStocks },
//     { key: 'f5', label: 'Ticket Creation', path: 'ticket-creation', component: TicketCreation },
//   ];

//   const viewsItems = [
//     { key: 'v1', label: 'View Customer Details', path: 'view-customer-details', component: ViewCustomerDetails },
//     { key: 'v2', label: 'View Ticket', path: 'view-ticket', component: ViewTicket },
//     { key: 'v3', label: 'View Technician Details', path: 'view-technician-details', component: ViewTechnicianDetails },
//     { key: 'v4', label: 'View Product', path: 'view-product', component: ViewProduct },
//     { key: 'v5', label: 'View Invoice', path: 'view-invoice', component: ViewInvoice },
//     { key: 'v6', label: 'View Spares', path: 'view-spares', component: ViewSpares },
//     { key: 'v7', label: 'View Scrap', path: 'view-scrap', component: ViewScrap },
//     { key: 'v8', label: 'View List of Spares', path: 'view-list-of-spares', component: ViewListOfSpares },
//     { key: 'v9', label: 'Inhouse View', path: 'inhouse-view', component: InhouseView },
//     { key: 'v10', label: 'Invoice Form', path: 'invoice-form', component: InvoiceForm },
//   ];

//   const technicianItems = [
//     { key: 't1', label: 'Technician View', path: 'technician-view', component: () => <TechnicianView roleEmail={userEmail}/> },
//     { key: 't2', label: 'Dispatch View', path: 'dispatch-view', component: () => <DispatchView roleEmail={userEmail}/> },
//   ];

//   const inhouseItems = [
//     { key: 'i1', label: 'Inhouse View', path: 'inhouse-view', component: InhouseView },
//   ];

//   const commonItems = [
//     { key: 'home', label: 'Home', path: 'home', component: Home },
//     { key: 'login', label: 'Login Details', path: 'login-details', component: () => <LoginDetails userDetails={userDetails}/> },
//     { key: 'dashboard', label: 'Dashboard', path: 'dashboard', component: Dashboard },
//   ];

//   const onClick = (key, path) => {
//     setCurrent(key);
//     navigate(`/${path}`);
//     setTimeout(() => setDrawerOpen(false), 100);
//   };

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const getMenuItems = () => {
//     let items = [];
//     if (userRole === 'App Administrator') {
//       items = [
//         {
//           key: 'sub1',
//           label: 'Forms',
//           icon: <MailOutlined />,
//           children: formsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//             path: item.path,
//           })),
//         },
//         {
//           key: 'sub2',
//           label: 'Views',
//           icon: <AppstoreOutlined />,
//           children: viewsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//             path: item.path,
//           })),
//         },
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//       ];
//     } else if (userRole === 'Technician') {
//       items = [
//         ...technicianItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//       ];
//     } else if (userRole === 'Inhouse') {
//       items = [
//         ...inhouseItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//       ];
//     } else {
//       items = commonItems.map(item => ({
//         key: item.key,
//         label: item.label,
//         path: item.path,
//       }));
//     }
//     return items;
//   };

//   return (
//     <div>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)' }}>
//           <Toolbar>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Water Heater App
//             </Typography>
//             <IconButton
//               size="large"
//               edge="end"
//               color="inherit"
//               aria-label="menu"
//               sx={{ ml: 2 }}
//               onClick={toggleDrawer(true)}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <div>
//         <Routes>
//           {[...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems, ...commonItems].map(item => (
//             <Route key={item.key} path={`/${item.path}`} element={<item.component />} />
//           ))}
//           <Route path="/home" element={<Home />} />
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//         <Drawer
//           anchor="right"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//           PaperProps={{
//             sx: {
//               backgroundColor: darkThemeColor,
//             },
//           }}
//         >
//           <Box sx={{ width: 250 }}>
//             <Menu
//               theme="dark"
//               onClick={(e) => onClick(e.key, e.item.props.path)}
//               style={{ width: '100%' }}
//               defaultOpenKeys={['sub1']}
//               selectedKeys={[current]}
//               mode="inline"
//               items={getMenuItems().map(item => ({
//                 ...item,
//                 children: item.children && item.children.map(child => ({
//                   ...child,
//                   path: child.path
//                 }))
//               }))}
//             />
//           </Box>
//         </Drawer>
//       </div>
//     </div>
//   );
// };

// const AppWrapper = () => {
//   return (
    
//     <Router basename='/app'>
//       <App />
//     </Router>
//   );
// };

// export default AppWrapper;




// import React, { useState, useEffect } from 'react';
// import { HashRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Menu } from 'antd';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

// // Import your components
// import ViewInvoice from './components/Views/ViewInvoice';
// import ViewListOfSpares from './components/Views/ViewListOfSpares';
// import ViewLogs from './components/Views/ViewLogs';
// import ViewFeedback from './components/Views/ViewFeedback';
// import ViewProblem from './components/Views/ViewProblem';
// import ViewProduct from './components/Views/ViewProduct';
// import ViewScrap from './components/Views/ViewScrap';
// import ViewSpares from './components/Views/ViewSpares';
// import ViewTechnicianDetails from './components/Views/ViewTechnicianDetails';
// import ViewCustomerDetails from './components/Views/ViewCustomerDetails';
// import ViewTicket from './components/Views/ViewTicket';
// import InvoiceForm from './components/Forms/InvoiceForm';
// import TicketCreation from './components/Forms/TicketCreation';
// import FeedbackForm from './components/Forms/FeedbackForm';
// import ProblemStatement from './components/Forms/ProblemStatement';
// import ProductMaster from './components/Forms/ProductMaster';
// import SparePartsAndStocks from './components/Forms/SparePartsAndStocks';
// import CustomerDetail from './components/Forms/CustomerDetail';
// import TechnicianDetail from './components/Forms/TechnicianDetail';
// import LoginDetails from './components/Views/LoginDetails';
// import TechnicianView from './components/Views/TechnicianView';
// import DispatchView from './components/Views/DispatchView';
// import InhouseView from './components/Views/InhouseView';
// import Home from './components/Views/Home';
// import Dashboard from './components/Views/Dashboard';
// import ViewClosedTicket from './components/Views/ViewClosedTicket';

// const App = () => {
//   const [userRole, setUserRole] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [userDetails, setUserDetails] = useState({});
//   const [current, setCurrent] = useState('');
//   const navigate = useNavigate();

//   const darkThemeColor = '#001529';

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const res = await axios.get('/server/waterheater_1_function/getuser');
//         setUserRole(res.data.role_details.role_name);
//         setUserEmail(res.data.email_id);
//         setUserDetails(res.data);
//       } catch (err) {
//         console.error('Error fetching user role:', err);
//       }
//     };
//     fetchUserRole();
//   }, []);

//   const formsItems = [
//     { key: 'f1', label: 'Customer Detail', path: 'customer-detail', component: CustomerDetail },
//     { key: 'f2', label: 'Technician Detail', path: 'technician-detail', component: TechnicianDetail },
//     { key: 'f3', label: 'Product Master', path: 'product-master', component: ProductMaster },
//     { key: 'f4', label: 'Spare Parts and Stocks', path: 'spare-parts-stocks', component: SparePartsAndStocks },
//     { key: 'f5', label: 'Ticket Creation', path: 'ticket-creation', component: TicketCreation },
//   ];

//   const viewsItems = [
//     { key: 'v1', label: 'View Customer Details', path: 'view-customer-details', component: ViewCustomerDetails },
//     { key: 'v2', label: 'View Ticket', path: 'view-ticket', component: ViewTicket },
//     { key: 'v3', label: 'View Technician Details', path: 'view-technician-details', component: ViewTechnicianDetails },
//     { key: 'v4', label: 'View Product', path: 'view-product', component: ViewProduct },
//     { key: 'v5', label: 'View Invoice', path: 'view-invoice', component: ViewInvoice },
//     { key: 'v6', label: 'View Spares', path: 'view-spares', component: ViewSpares },
//     { key: 'v7', label: 'View Scrap', path: 'view-scrap', component: ViewScrap },
//     { key: 'v8', label: 'View List of Spares', path: 'view-list-of-spares', component: ViewListOfSpares },
//     { key: 'v9', label: 'View Closed Ticket', path: 'view-closed-ticket', component:  ViewClosedTicket},
//     { key: 'dashboard', label: 'Dashboard', path: 'dashboard', component: Dashboard },
//   ];

//   const technicianItems = [
//     { key: 't1', label: 'Technician View', path: 'technician-view', component: () => <TechnicianView roleEmail={userEmail}/> },
//     { key: 't2', label: 'Dispatch View', path: 'dispatch-view', component: () => <DispatchView roleEmail={userEmail}/> },
//     { key: 't3', label: 'Invoice Form', path: 'invoice-form', component: InvoiceForm },

//   ];

//   const inhouseItems = [
//     { key: 'i1', label: 'Inhouse View', path: 'inhouse-view', component: InhouseView },
//   ];

//   const commonItems = [
//     { key: 'home', label: 'Home', path: 'home', component: Home },
//     { key: 'login', label: 'Login Details', path: 'login-details', component: () => <LoginDetails userDetails={userDetails}/> },
//   ];

//   const onClick = (key, path) => {
//     setCurrent(key);
//     navigate(`/${path}`);
//     setTimeout(() => setDrawerOpen(false), 100);
//   };

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const getMenuItems = () => {
//     let items = [];
//     if (userRole === 'App Administrator') {
//       items = [
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//         {
//           key: 'sub1',
//           label: 'Forms',
//           icon: <MailOutlined />,
//           children: formsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//             path: item.path,
//           })),
//         },
//         {
//           key: 'sub2',
//           label: 'Views',
//           icon: <AppstoreOutlined />,
//           children: viewsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//             path: item.path,
//           })),
//         },
       
//       ];
//     } else if (userRole === 'Technician') {
//       items = [
//         ...technicianItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//       ];
//     } else if (userRole === 'Inhouse') {
//       items = [
//         ...inhouseItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//       ];
//     } else {
//       items = commonItems.map(item => ({
//         key: item.key,
//         label: item.label,
//         path: item.path,
//       }));
//     }
//     return items;
//   };

//   return (
//     <div >
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" sx={{  backdropFilter: 'blur(10px)', marginBottom:'25px' }}>
//           <Toolbar>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Traqmetrix Service Handling
//             </Typography>
//             <IconButton
//               size="large"
//               edge="end"
//               color="inherit"
//               aria-label="menu"
//               sx={{ ml: 2 }}
//               onClick={toggleDrawer(true)}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <div>
//         <Routes>
//           {[...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems, ...commonItems].map(item => (
//             <Route key={item.key} path={`/${item.path}`} element={<item.component />} />
//           ))}
//           <Route path="/home" element={<Home />} />
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//         <Drawer
//           anchor="right"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//           PaperProps={{
//             sx: {
//               backgroundColor: darkThemeColor,
//             },
//           }}
//         >
//           <Box sx={{ width: 250 }}>
//             <Menu
//               theme="dark"
//               onClick={(e) => onClick(e.key, e.item.props.path)}
//               style={{ width: '100%' }}
//               defaultOpenKeys={['sub1']}
//               selectedKeys={[current]}
//               mode="inline"
//               items={getMenuItems().map(item => ({
//                 ...item,
//                 children: item.children && item.children.map(child => ({
//                   ...child,
//                   path: child.path
//                 }))
//               }))}
//             />
//           </Box>
//         </Drawer>
//       </div>
//     </div>
//   );
// };

// const AppWrapper = () => {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// };

// export default AppWrapper;















// import React, { useState, useEffect, useCallback } from 'react';
// import { HashRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Menu } from 'antd';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

// // Import your components
// import ViewInvoice from './components/Views/ViewInvoice';
// import ViewListOfSpares from './components/Views/ViewListOfSpares';
// import ViewLogs from './components/Views/ViewLogs';
// import ViewFeedback from './components/Views/ViewFeedback';
// import ViewProblem from './components/Views/ViewProblem';
// import ViewProduct from './components/Views/ViewProduct';
// import ViewScrap from './components/Views/ViewScrap';
// import ViewSpares from './components/Views/ViewSpares';
// import ViewTechnicianDetails from './components/Views/ViewTechnicianDetails';
// import ViewCustomerDetails from './components/Views/ViewCustomerDetails';
// import ViewTicket from './components/Views/ViewTicket';
// import InvoiceForm from './components/Forms/InvoiceForm';
// import TicketCreation from './components/Forms/TicketCreation';
// import FeedbackForm from './components/Forms/FeedbackForm';
// import ProblemStatement from './components/Forms/ProblemStatement';
// import ProductMaster from './components/Forms/ProductMaster';
// import SparePartsAndStocks from './components/Forms/SparePartsAndStocks';
// import CustomerDetail from './components/Forms/CustomerDetail';
// import TechnicianDetail from './components/Forms/TechnicianDetail';
// import LoginDetails from './components/Views/LoginDetails';
// import TechnicianView from './components/Views/TechnicianView';
// import DispatchView from './components/Views/DispatchView';
// import InhouseView from './components/Views/InhouseView';
// import Home from './components/Views/Home';
// import Dashboard from './components/Views/Dashboard';
// import ViewClosedTicket from './components/Views/ViewClosedTicket';

// const App = () => {
//   const [userRole, setUserRole] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [userDetails, setUserDetails] = useState({});
//   const [current, setCurrent] = useState('');
//   const [shouldFetchTechnicianData, setShouldFetchTechnicianData] = useState(false);
//   const navigate = useNavigate();

//   const darkThemeColor = '#001529';

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const res = await axios.get('/server/waterheater_1_function/getuser');
//         setUserRole(res.data.role_details.role_name);
//         setUserEmail(res.data.email_id);
//         setUserDetails(res.data);
//       } catch (err) {
//         console.error('Error fetching user role:', err);
//       }
//     };
//     fetchUserRole();
//   }, []);

//   const formsItems = [
//     { key: 'f1', label: 'Customer Detail', path: 'customer-detail', component: CustomerDetail },
//     { key: 'f2', label: 'Technician Detail', path: 'technician-detail', component: TechnicianDetail },
//     { key: 'f3', label: 'Product Master', path: 'product-master', component: ProductMaster },
//     { key: 'f4', label: 'Spare Parts and Stocks', path: 'spare-parts-stocks', component: SparePartsAndStocks },
//     { key: 'f5', label: 'Ticket Creation', path: 'ticket-creation', component: TicketCreation },
//   ];

//   const viewsItems = [
//     { key: 'v1', label: 'View Customer Details', path: 'view-customer-details', component: ViewCustomerDetails },
//     { key: 'v2', label: 'View Ticket', path: 'view-ticket', component: ViewTicket },
//     { key: 'v3', label: 'View Technician Details', path: 'view-technician-details', component: ViewTechnicianDetails },
//     { key: 'v4', label: 'View Product', path: 'view-product', component: ViewProduct },
//     { key: 'v5', label: 'View Invoice', path: 'view-invoice', component: ViewInvoice },
//     { key: 'v6', label: 'View Spares', path: 'view-spares', component: ViewSpares },
//     { key: 'v7', label: 'View Scrap', path: 'view-scrap', component: ViewScrap },
//     { key: 'v8', label: 'View List of Spares', path: 'view-list-of-spares', component: ViewListOfSpares },
//     { key: 'v9', label: 'View Closed Ticket', path: 'view-closed-ticket', component: ViewClosedTicket },
//     { key: 'dashboard', label: 'Dashboard', path: 'dashboard', component: Dashboard },
//   ];

//   const technicianItems = [
//     { key: 't1', label: 'Technician View', path: 'technician-view', component: TechnicianView },
//     { key: 't2', label: 'Dispatch View', path: 'dispatch-view', component: DispatchView },
//     { key: 't3', label: 'Invoice Form', path: 'invoice-form', component: InvoiceForm },
//   ];

//   const inhouseItems = [
//     { key: 'i1', label: 'Inhouse View', path: 'inhouse-view', component: InhouseView },
//   ];

//   const commonItems = [
//     { key: 'home', label: 'Home', path: 'home', component: Home },
//     { key: 'login', label: 'Login Details', path: 'login-details', component: () => <LoginDetails userDetails={userDetails}/>  },
//   ];

//   const onClick = useCallback((key, path) => {
//     setCurrent(key);
//     navigate(`/${path}`);
//     if (path === 'technician-view') {
//       setShouldFetchTechnicianData(true);
//     }
//     setTimeout(() => setDrawerOpen(false), 100);
//   }, [navigate]);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const getMenuItems = () => {
//     let items = [];
//     if (userRole === 'App Administrator') {
//       items = [
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//         {
//           key: 'sub1',
//           label: 'Forms',
//           icon: <MailOutlined />,
//           children: formsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//             path: item.path,
//           })),
//         },
//         {
//           key: 'sub2',
//           label: 'Views',
//           icon: <AppstoreOutlined />,
//           children: viewsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//             path: item.path,
//           })),
//         },
//       ];
//     } else if (userRole === 'Technician') {
//       items = [
//         ...technicianItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//       ];
//     } else if (userRole === 'Inhouse') {
//       items = [
//         ...inhouseItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//       ];
//     } else {
//       items = commonItems.map(item => ({
//         key: item.key,
//         label: item.label,
//         path: item.path,
//       }));
//     }
//     return items;
//   };

//   return (
//     <div>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" sx={{ backdropFilter: 'blur(10px)', marginBottom: '25px' }}>
//           <Toolbar>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Traqmetrix Service Handling
//             </Typography>
//             <IconButton
//               size="large"
//               edge="end"
//               color="inherit"
//               aria-label="menu"
//               sx={{ ml: 2 }}
//               onClick={toggleDrawer(true)}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <div>
//         <Routes>
//           {[...formsItems, ...viewsItems, ...inhouseItems, ...commonItems].map(item => (
//             <Route key={item.key} path={`/${item.path}`} element={<item.component />} />
//           ))}
//           {technicianItems.map(item => (
//             <Route 
//               key={item.key} 
//               path={`/${item.path}`} 
//               element={
//                 <item.component 
//                   roleEmail={userEmail}
//                   shouldFetchData={item.path === 'technician-view' ? shouldFetchTechnicianData : undefined}
//                   onDataFetched={() => setShouldFetchTechnicianData(false)}
//                 />
//               } 
//             />
//           ))}
//           <Route path="/home" element={<Home />} />
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//         <Drawer
//           anchor="right"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//           PaperProps={{
//             sx: {
//               backgroundColor: darkThemeColor,
//             },
//           }}
//         >
//           <Box sx={{ width: 250 }}>
//             <Menu
//               theme="dark"
//               onClick={(e) => onClick(e.key, e.item.props.path)}
//               style={{ width: '100%' }}
//               defaultOpenKeys={['sub1']}
//               selectedKeys={[current]}
//               mode="inline"
//               items={getMenuItems().map(item => ({
//                 ...item,
//                 children: item.children && item.children.map(child => ({
//                   ...child,
//                   path: child.path
//                 }))
//               }))}
//             />
//           </Box>
//         </Drawer>
//       </div>
//     </div>
//   );
// };

// const AppWrapper = () => {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// };

// export default AppWrapper;
















// import React, { useState, useEffect, useCallback } from 'react';
// import { HashRouter as Router, Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Menu } from 'antd';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

// // Import your components
// import ViewInvoice from './components/Views/ViewInvoice';
// import ViewListOfSpares from './components/Views/ViewListOfSpares';
// import ViewLogs from './components/Views/ViewLogs';
// import ViewFeedback from './components/Views/ViewFeedback';
// import ViewProblem from './components/Views/ViewProblem';
// import ViewProduct from './components/Views/ViewProduct';
// import ViewScrap from './components/Views/ViewScrap';
// import ViewSpares from './components/Views/ViewSpares';
// import ViewTechnicianDetails from './components/Views/ViewTechnicianDetails';
// import ViewCustomerDetails from './components/Views/ViewCustomerDetails';
// import ViewTicket from './components/Views/ViewTicket';
// import InvoiceForm from './components/Forms/InvoiceForm';
// import TicketCreation from './components/Forms/TicketCreation';
// import FeedbackForm from './components/Forms/FeedbackForm';
// import ProblemStatement from './components/Forms/ProblemStatement';
// import ProductMaster from './components/Forms/ProductMaster';
// import SparePartsAndStocks from './components/Forms/SparePartsAndStocks';
// import CustomerDetail from './components/Forms/CustomerDetail';
// import TechnicianDetail from './components/Forms/TechnicianDetail';
// import LoginDetails from './components/Views/LoginDetails';
// import TechnicianView from './components/Views/TechnicianView';
// import DispatchView from './components/Views/DispatchView';
// import InhouseView from './components/Views/InhouseView';
// import Home from './components/Views/Home';
// import Dashboard from './components/Views/Dashboard';
// import ViewClosedTicket from './components/Views/ViewClosedTicket';

// const App = () => {
//   const [userRole, setUserRole] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [userDetails, setUserDetails] = useState({});
//   const [current, setCurrent] = useState('');
//   const [shouldFetchTechnicianData, setShouldFetchTechnicianData] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const darkThemeColor = '#001529';

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const res = await axios.get('/server/waterheater_1_function/getuser');
//         setUserRole(res.data.role_details.role_name);
//         setUserEmail(res.data.email_id);
//         setUserDetails(res.data);
//       } catch (err) {
//         console.error('Error fetching user role:', err);
//       }
//     };
//     fetchUserRole();
//   }, []);

//   useEffect(() => {
//     // Update current based on the current path
//     const path = location.pathname.slice(1); // Remove leading slash
//     setCurrent(path);
//   }, [location]);

//   const formsItems = [
//     { key: 'f1', label: 'Customer Detail', path: 'customer-detail', component: CustomerDetail },
//     { key: 'f2', label: 'Technician Detail', path: 'technician-detail', component: TechnicianDetail },
//     { key: 'f3', label: 'Product Master', path: 'product-master', component: ProductMaster },
//     { key: 'f4', label: 'Spare Parts and Stocks', path: 'spare-parts-stocks', component: SparePartsAndStocks },
//     { key: 'f5', label: 'Ticket Creation', path: 'ticket-creation', component: TicketCreation },
//   ];

//   const viewsItems = [
//     { key: 'v1', label: 'View Customer Details', path: 'view-customer-details', component: ViewCustomerDetails },
//     { key: 'v2', label: 'View Ticket', path: 'view-ticket', component: ViewTicket },
//     { key: 'v3', label: 'View Technician Details', path: 'view-technician-details', component: ViewTechnicianDetails },
//     { key: 'v4', label: 'View Product', path: 'view-product', component: ViewProduct },
//     { key: 'v5', label: 'View Invoice', path: 'view-invoice', component: ViewInvoice },
//     { key: 'v6', label: 'View Spares', path: 'view-spares', component: ViewSpares },
//     { key: 'v7', label: 'View Scrap', path: 'view-scrap', component: ViewScrap },
//     { key: 'v8', label: 'View List of Spares', path: 'view-list-of-spares', component: ViewListOfSpares },
//     { key: 'v9', label: 'View Closed Ticket', path: 'view-closed-ticket', component: ViewClosedTicket },
//     { key: 'dashboard', label: 'Dashboard', path: 'dashboard', component: Dashboard },
//   ];

//   const technicianItems = [
//     { key: 't1', label: 'Technician View', path: 'technician-view', component: TechnicianView },
//     { key: 't2', label: 'Dispatch View', path: 'dispatch-view', component: DispatchView },
//     { key: 't3', label: 'Invoice Form', path: 'invoice-form', component: InvoiceForm },
//   ];

//   const inhouseItems = [
//     { key: 'i1', label: 'Inhouse View', path: 'inhouse-view', component: InhouseView },
//   ];

//   const commonItems = [
//     { key: 'home', label: 'Home', path: 'home', component: Home },
//     { key: 'login', label: 'Login Details', path: 'login-details', component: () => <LoginDetails userDetails={userDetails}/> },
//   ];

//   const onClick = useCallback((key, path) => {
//     setCurrent(key);
//     navigate(`/${path}`);
//     if (path === 'technician-view') {
//       setShouldFetchTechnicianData(true);
//     }
//     setTimeout(() => setDrawerOpen(false), 100);
//   }, [navigate]);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const getMenuItems = () => {
//     let items = [];
//     if (userRole === 'App Administrator') {
//       items = [
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//         {
//           key: 'sub1',
//           label: 'Forms',
//           icon: <MailOutlined />,
//           children: formsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//             path: item.path,
//           })),
//         },
//         {
//           key: 'sub2',
//           label: 'Views',
//           icon: <AppstoreOutlined />,
//           children: viewsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//             path: item.path,
//           })),
//         },
//       ];
//     } else if (userRole === 'Technician') {
//       items = [
//         ...technicianItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//       ];
//     } else if (userRole === 'Inhouse') {
//       items = [
//         ...inhouseItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//       ];
//     } else {
//       items = commonItems.map(item => ({
//         key: item.key,
//         label: item.label,
//         path: item.path,
//       }));
//     }
//     return items;
//   };

//   return (
//     <div>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" sx={{ backdropFilter: 'blur(10px)', marginBottom: '25px' }}>
//           <Toolbar>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Traqmetrix Service Handling
//             </Typography>
//             <IconButton
//               size="large"
//               edge="end"
//               color="inherit"
//               aria-label="menu"
//               sx={{ ml: 2 }}
//               onClick={toggleDrawer(true)}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <div>
//         <Routes>
//           {[...formsItems, ...viewsItems, ...inhouseItems, ...commonItems].map(item => (
//             <Route key={item.key} path={`/${item.path}`} element={<item.component />} />
//           ))}
//           {technicianItems.map(item => (
//             <Route 
//               key={item.key} 
//               path={`/${item.path}`} 
//               element={
//                 <item.component 
//                   roleEmail={userEmail}
//                   shouldFetchData={item.path === 'technician-view' ? shouldFetchTechnicianData : undefined}
//                   onDataFetched={() => setShouldFetchTechnicianData(false)}
//                 />
//               } 
//             />
//           ))}
//           <Route path="/home" element={<Home />} />
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//         <Drawer
//           anchor="right"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//           PaperProps={{
//             sx: {
//               backgroundColor: darkThemeColor,
//               width: 250,
//             },
//           }}
//         >
//           <Menu
//             theme="dark"
//             onClick={(e) => onClick(e.key, e.item.props.path)}
//             style={{ width: '100%', height: '100%' }}
//             defaultOpenKeys={['sub1']}
//             selectedKeys={[current]}
//             mode="inline"
//             items={getMenuItems().map(item => ({
//               ...item,
//               children: item.children && item.children.map(child => ({
//                 ...child,
//                 path: child.path
//               }))
//             }))}
//           />
//         </Drawer>
//       </div>
//     </div>
//   );
// };

// const AppWrapper = () => {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// };

// export default AppWrapper;












// import React, { useState, useEffect, useCallback } from 'react';
// import { HashRouter as Router, Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Menu } from 'antd';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

// // Import your components
// import ViewInvoice from './components/Views/ViewInvoice';
// import ViewListOfSpares from './components/Views/ViewListOfSpares';
// import ViewLogs from './components/Views/ViewLogs';
// import ViewFeedback from './components/Views/ViewFeedback';
// import ViewProblem from './components/Views/ViewProblem';
// import ViewProduct from './components/Views/ViewProduct';
// import ViewScrap from './components/Views/ViewScrap';
// import ViewSpares from './components/Views/ViewSpares';
// import ViewTechnicianDetails from './components/Views/ViewTechnicianDetails';
// import ViewCustomerDetails from './components/Views/ViewCustomerDetails';
// import ViewTicket from './components/Views/ViewTicket';
// import InvoiceForm from './components/Forms/InvoiceForm';
// import TicketCreation from './components/Forms/TicketCreation';
// import FeedbackForm from './components/Forms/FeedbackForm';
// import ProblemStatement from './components/Forms/ProblemStatement';
// import ProductMaster from './components/Forms/ProductMaster';
// import SparePartsAndStocks from './components/Forms/SparePartsAndStocks';
// import CustomerDetail from './components/Forms/CustomerDetail';
// import TechnicianDetail from './components/Forms/TechnicianDetail';
// import LoginDetails from './components/Views/LoginDetails';
// import TechnicianView from './components/Views/TechnicianView';
// import DispatchView from './components/Views/DispatchView';
// import InhouseView from './components/Views/InhouseView';
// import Home from './components/Views/Home';
// import Dashboard from './components/Views/Dashboard';
// import ViewClosedTicket from './components/Views/ViewClosedTicket';

// const App = () => {
//   const [userRole, setUserRole] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [userDetails, setUserDetails] = useState({});
//   const [current, setCurrent] = useState('');
//   const [shouldFetchTechnicianData, setShouldFetchTechnicianData] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const darkThemeColor = '#001529';

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const res = await axios.get('/server/waterheater_1_function/getuser');
//         setUserRole(res.data.role_details.role_name);
//         setUserEmail(res.data.email_id);
//         setUserDetails(res.data);
//       } catch (err) {
//         console.error('Error fetching user role:', err);
//       }
//     };
//     fetchUserRole();
//   }, []);

//   const formsItems = [
//     { key: 'f1', label: 'Customer Detail', path: 'customer-detail', component: CustomerDetail },
//     { key: 'f2', label: 'Technician Detail', path: 'technician-detail', component: TechnicianDetail },
//     { key: 'f3', label: 'Product Master', path: 'product-master', component: ProductMaster },
//     { key: 'f4', label: 'Spare Parts and Stocks', path: 'spare-parts-stocks', component: SparePartsAndStocks },
//     { key: 'f5', label: 'Ticket Creation', path: 'ticket-creation', component: TicketCreation },
//   ];

//   const viewsItems = [
//     { key: 'v1', label: 'View Customer Details', path: 'view-customer-details', component: ViewCustomerDetails },
//     { key: 'v2', label: 'View Ticket', path: 'view-ticket', component: ViewTicket },
//     { key: 'v3', label: 'View Technician Details', path: 'view-technician-details', component: ViewTechnicianDetails },
//     { key: 'v4', label: 'View Product', path: 'view-product', component: ViewProduct },
//     { key: 'v5', label: 'View Invoice', path: 'view-invoice', component: ViewInvoice },
//     { key: 'v6', label: 'View Spares', path: 'view-spares', component: ViewSpares },
//     { key: 'v7', label: 'View Scrap', path: 'view-scrap', component: ViewScrap },
//     { key: 'v8', label: 'View List of Spares', path: 'view-list-of-spares', component: ViewListOfSpares },
//     { key: 'v9', label: 'View Closed Ticket', path: 'view-closed-ticket', component: ViewClosedTicket },
//     { key: 'dashboard', label: 'Dashboard', path: 'dashboard', component: Dashboard },
//   ];

//   const technicianItems = [
//     { key: 't1', label: 'Technician View', path: 'technician-view', component: TechnicianView },
//     { key: 't2', label: 'Dispatch View', path: 'dispatch-view', component: DispatchView },
//     { key: 't3', label: 'Invoice Form', path: 'invoice-form', component: InvoiceForm },
//   ];

//   const inhouseItems = [
//     { key: 'i1', label: 'Inhouse View', path: 'inhouse-view', component: InhouseView },
//   ];

//   const commonItems = [
//     { key: 'home', label: 'Home', path: 'home', component: Home },
//     { key: 'login', label: 'Login Details', path: 'login-details', component: () => <LoginDetails userDetails={userDetails}/> },
//   ];

//   useEffect(() => {
//     const path = location.pathname.slice(1);
//     const allItems = [...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems, ...commonItems];
//     const matchingItem = allItems.find(item => item.path === path);
//     if (matchingItem) {
//       setCurrent(matchingItem.key);
//     }
//   }, [location]);

//   const onClick = useCallback((e) => {
//     const key = e.key;
//     const allItems = [...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems, ...commonItems];
//     const selectedItem = allItems.find(item => item.key === key);
//     if (selectedItem) {
//       setCurrent(key);
//       navigate(`/${selectedItem.path}`);
//       if (selectedItem.path === 'technician-view') {
//         setShouldFetchTechnicianData(true);
//       }
//       setTimeout(() => setDrawerOpen(false), 100);
//     }
//   }, [navigate]);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const getMenuItems = () => {
//     let items = [];
//     if (userRole === 'App Administrator') {
//       items = [
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//         {
//           key: 'sub1',
//           label: 'Forms',
//           icon: <MailOutlined />,
//           children: formsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//             path: item.path,
//           })),
//         },
//         {
//           key: 'sub2',
//           label: 'Views',
//           icon: <AppstoreOutlined />,
//           children: viewsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//             path: item.path,
//           })),
//         },
//       ];
//     } else if (userRole === 'Technician') {
//       items = [
//         ...technicianItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//       ];
//     } else if (userRole === 'Inhouse') {
//       items = [
//         ...inhouseItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//           path: item.path,
//         })),
//       ];
//     } else {
//       items = commonItems.map(item => ({
//         key: item.key,
//         label: item.label,
//         path: item.path,
//       }));
//     }
//     return items;
//   };

//   return (
//     <div>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" sx={{ backdropFilter: 'blur(10px)', marginBottom: '25px' }}>
//           <Toolbar>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Traqmetrix Service Handling
//             </Typography>
//             <IconButton
//               size="large"
//               edge="end"
//               color="inherit"
//               aria-label="menu"
//               sx={{ ml: 2 }}
//               onClick={toggleDrawer(true)}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <div>
//         <Routes>
//           {[...formsItems, ...viewsItems, ...inhouseItems, ...commonItems].map(item => (
//             <Route key={item.key} path={`/${item.path}`} element={<item.component />} />
//           ))}
//           {technicianItems.map(item => (
//             <Route 
//               key={item.key} 
//               path={`/${item.path}`} 
//               element={
//                 <item.component 
//                   roleEmail={userEmail}
//                   shouldFetchData={item.path === 'technician-view' ? shouldFetchTechnicianData : undefined}
//                   onDataFetched={() => setShouldFetchTechnicianData(false)}
//                 />
//               } 
//             />
//           ))}
//           <Route path="/home" element={<Home />} />
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//         <Drawer
//           anchor="right"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//           PaperProps={{
//             sx: {
//               backgroundColor: darkThemeColor,
//               width: 250,
//             },
//           }}
//         >
//           <Menu
//             theme="dark"
//             onClick={(e) => onClick(e)}
//             style={{ width: '100%', height: '100%' }}
//             // defaultOpenKeys={['sub1']}
//             selectedKeys={[current]}
//             mode="inline"
//             items={getMenuItems().map(item => ({
//               ...item,
//               children: item.children && item.children.map(child => ({
//                 ...child,
//                 path: child.path
//               }))
//             }))}
//           />
//         </Drawer>
//       </div>
//     </div>
//   );
// };

// const AppWrapper = () => {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// };

// export default AppWrapper;



















import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

// Import your components
import ViewInvoice from './components/Views/ViewInvoice';
import ViewListOfSpares from './components/Views/ViewListOfSpares';
import ViewLogs from './components/Views/ViewLogs';
import ViewFeedback from './components/Views/ViewFeedback';
import ViewProblem from './components/Views/ViewProblem';
import ViewProduct from './components/Views/ViewProduct';
import ViewScrap from './components/Views/ViewScrap';
import ViewSpares from './components/Views/ViewSpares';
import ViewTechnicianDetails from './components/Views/ViewTechnicianDetails';
import ViewCustomerDetails from './components/Views/ViewCustomerDetails';
import ViewTicket from './components/Views/ViewTicket';
import InvoiceForm from './components/Forms/InvoiceForm';
import TicketCreation from './components/Forms/TicketCreation';
import FeedbackForm from './components/Forms/FeedbackForm';
import ProblemStatement from './components/Forms/ProblemStatement';
import ProductMaster from './components/Forms/ProductMaster';
import SparePartsAndStocks from './components/Forms/SparePartsAndStocks';
import CustomerDetail from './components/Forms/CustomerDetail';
import TechnicianDetail from './components/Forms/TechnicianDetail';
import LoginDetails from './components/Views/LoginDetails';
import TechnicianView from './components/Views/TechnicianView';
import DispatchView from './components/Views/DispatchView';
import InhouseView from './components/Views/InhouseView';
import Home from './components/Views/Home';
import Dashboard from './components/Views/Dashboard';
import ViewClosedTicket from './components/Views/ViewClosedTicket';
import ProductIssue from './components/Forms/ProductIssue';
import InwardForm from './components/Forms/InwardForm';

const App = () => {
  const [userRole, setUserRole] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [current, setCurrent] = useState('');
  const [shouldFetchTechnicianData, setShouldFetchTechnicianData] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const darkThemeColor = '#001529';

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const res = await axios.get('/server/waterheater_1_function/getuser');
        setUserRole(res.data.role_details.role_name);
        setUserEmail(res.data.email_id);
        setUserDetails(res.data);
      } catch (err) {
        console.error('Error fetching user role:', err);
      }
    };
    fetchUserRole();
  }, []);

  const formsItems = [
    { key: 'f1', label: 'Customer Detail', path: 'customer-detail', component: CustomerDetail },
    { key: 'f2', label: 'Technician Detail', path: 'technician-detail', component: TechnicianDetail },
    { key: 'f3', label: 'Product Master', path: 'product-master', component: ProductMaster },
    { key: 'f4', label: 'Spare Parts and Stocks', path: 'spare-parts-stocks', component: SparePartsAndStocks },
    { key: 'f5', label: 'Ticket Creation', path: 'ticket-creation', component: TicketCreation },
    { key: 'f6', label: 'Inward Form', path: 'Inward', component:  InwardForm},
    { key: 'f7', label: 'Product Issue', path: 'product-issue', component:  ProductIssue},

  ];

  const viewsItems = [
    { key: 'v1', label: 'View Customer Details', path: 'view-customer-details', component: ViewCustomerDetails },
    { key: 'v2', label: 'View Ticket', path: 'view-ticket', component: ViewTicket },
    { key: 'v3', label: 'View Technician Details', path: 'view-technician-details', component: ViewTechnicianDetails },
    { key: 'v4', label: 'View Product', path: 'view-product', component: ViewProduct },
    { key: 'v5', label: 'View Invoice', path: 'view-invoice', component: ViewInvoice },
    { key: 'v6', label: 'View Spares', path: 'view-spares', component: ViewSpares },
    { key: 'v7', label: 'View Scrap', path: 'view-scrap', component: ViewScrap },
    { key: 'v8', label: 'View List of Spares', path: 'view-list-of-spares', component: ViewListOfSpares },
    { key: 'v9', label: 'View Closed Ticket', path: 'view-closed-ticket', component: ViewClosedTicket },
    { key: 'dashboard', label: 'Dashboard', path: 'dashboard', component: Dashboard },
  ];

  const technicianItems = [
    { key: 't1', label: 'Technician View', path: 'technician-view', component: TechnicianView },
    { key: 't2', label: 'Dispatch View', path: 'dispatch-view', component: DispatchView },
    { key: 't3', label: 'Invoice Form', path: 'invoice-form', component: InvoiceForm },
  ];

  const inhouseItems = [
    { key: 'i1', label: 'Inhouse View', path: 'inhouse-view', component: InhouseView },
  ];

  const commonItems = [
    { key: 'home', label: 'Home', path: 'home', component: Home },
    { key: 'login', label: 'Login Details', path: 'login-details', component: () => <LoginDetails userDetails={userDetails}/> },
  ];

  useEffect(() => {
    const path = location.pathname.slice(1);
    const allItems = [...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems, ...commonItems];
    const matchingItem = allItems.find(item => item.path === path);
    if (matchingItem) {
      setCurrent(matchingItem.key);
    }
  }, [location]);

  const onClick = useCallback((e) => {
    const key = e.key;
    const allItems = [...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems, ...commonItems];
    const selectedItem = allItems.find(item => item.key === key);
    if (selectedItem) {
      setCurrent(key);
      navigate(`/${selectedItem.path}`);
      if (selectedItem.path === 'technician-view') {
        setShouldFetchTechnicianData(true);
      }
      setTimeout(() => setDrawerOpen(false), 100);
    }
  }, [navigate]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  
  const getMenuItems = () => {
    let items = [];
    const dashboardItem = viewsItems.find(item => item.key === 'dashboard');
    const homeItem = commonItems.find(item => item.key === 'home');
    const loginItem = commonItems.find(item => item.key === 'login');
  
    if (userRole === 'App Administrator') {
      items = [
        {
          key: homeItem.key,
          label: homeItem.label,
          icon: <AppstoreOutlined />,
        },
        {
          key: dashboardItem.key,
          label: dashboardItem.label,
          icon: <AppstoreOutlined />,
        },
        {
          key: 'sub1',
          label: 'Forms',
          icon: <MailOutlined />,
          children: formsItems.map(item => ({
            key: item.key,
            label: item.label,
            path: item.path,
          })),
        },
        {
          key: 'sub2',
          label: 'Views',
          icon: <AppstoreOutlined />,
          children: viewsItems.filter(item => item.key !== 'dashboard').map(item => ({
            key: item.key,
            label: item.label,
            path: item.path,
          })),
        },
        {
          key: loginItem.key,
          label: loginItem.label,
          icon: <SettingOutlined />,
        },
      ];
    } else if (userRole === 'Technician') {
      items = [
        {
          key: homeItem.key,
          label: homeItem.label,
          icon: <AppstoreOutlined />,
        },
        ...technicianItems.map(item => ({
          key: item.key,
          label: item.label,
          path: item.path,
        })),
        {
          key: loginItem.key,
          label: loginItem.label,
          icon: <SettingOutlined />,
        },
      ];
    } else if (userRole === 'Inhouse') {
      items = [
        {
          key: homeItem.key,
          label: homeItem.label,
          icon: <AppstoreOutlined />,
        },
        ...inhouseItems.map(item => ({
          key: item.key,
          label: item.label,
          path: item.path,
        })),
        {
          key: loginItem.key,
          label: loginItem.label,
          icon: <SettingOutlined />,
        },
      ];
    } else {
      items = [
        {
          key: homeItem.key,
          label: homeItem.label,
          icon: <AppstoreOutlined />,
        },
        {
          key: loginItem.key,
          label: loginItem.label,
          icon: <SettingOutlined />,
        },
      ];
    }
    return items;
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backdropFilter: 'blur(10px)', marginBottom: '25px' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Traqmetrix Service Handling
            </Typography>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Routes>
          {[...formsItems, ...viewsItems, ...inhouseItems, ...commonItems].map(item => (
            <Route key={item.key} path={`/${item.path}`} element={<item.component />} />
          ))}
          {technicianItems.map(item => (
            <Route 
              key={item.key} 
              path={`/${item.path}`} 
              element={
                <item.component 
                  roleEmail={userEmail}
                  shouldFetchData={item.path === 'technician-view' ? shouldFetchTechnicianData : undefined}
                  onDataFetched={() => setShouldFetchTechnicianData(false)}
                />
              } 
            />
          ))}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              backgroundColor: darkThemeColor,
              width: 250,
            },
          }}
        >
          <Menu
            theme="dark"
            onClick={(e) => onClick(e)}
            style={{ width: '100%', height: '100%' }}
            // defaultOpenKeys={['sub1']}
            selectedKeys={[current]}
            mode="inline"
            items={getMenuItems().map(item => ({
              ...item,
              children: item.children && item.children.map(child => ({
                ...child,
                path: child.path
              }))
            }))}
          />
        </Drawer>
      </div>
    </div>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;