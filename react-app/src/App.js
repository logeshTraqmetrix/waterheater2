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
// import InvoiceSubForm from './components/Forms/InvoiceSubForm.jsx';
// import TicketCreation from './components/Forms/TicketCreation.jsx';
// import ScrapInwardForm from './components/Forms/ScrapInwardForm';
// import FeedbackForm from './components/Forms/FeedbackForm';
// import ProblemStatement from './components/Forms/ProblemStatement';
// import ProductMaster from './components/Forms/ProductMaster';
// import SparePartsAndStocks from './components/Forms/SparePartsAndStocks';
// import CustomerDetail from './components/Forms/CustomerDetail';
// import TechnicianDetail from './components/Forms/TechnicianDetail';
// import SignatureForm from './components/Forms/UploadSingleFile.jsx';
// import FileUploader from './components/Forms/UploadSingleFile.jsx';




// function App() {
//   return (
//     // <div>
//     //   <CustomerDetail/>
//     // <TechnicianDetail />
//     // <ProductMaster />
//     // <SparePartsAndStocks />
//     // <ProblemStatement />
//     // <FeedbackForm />
//     // <ScrapInwardForm />
//     // <InvoiceSubForm />
//     // <TicketCreation />
//     // <InvoiceForm />
//     // <ViewCustomerDetails />
//     <ViewTicket />
//     // <ViewTechnicianDetails />
//     // <ViewFeedback />
//     // <ViewProblem />
//     // <ViewLogs />
//     // <ViewProduct />
//     // <ViewInvoice />
//     // <ViewSpares />
//     // <ViewScrap />
//     // <ViewListOfSpares />
//     // </div>
//     // <InvoiceForm />
//     // <TicketCreation />
//     //  <ProductMaster />
//     //  <TechnicianDetail />

    
//   );
// }

// export default App;





// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Segmented, Tabs } from 'antd';

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
// import InvoiceSubForm from './components/Forms/InvoiceSubForm.jsx';
// import TicketCreation from './components/Forms/TicketCreation.jsx';
// import ScrapInwardForm from './components/Forms/ScrapInwardForm';
// import FeedbackForm from './components/Forms/FeedbackForm';
// import ProblemStatement from './components/Forms/ProblemStatement';
// import ProductMaster from './components/Forms/ProductMaster';
// import SparePartsAndStocks from './components/Forms/SparePartsAndStocks';
// import CustomerDetail from './components/Forms/CustomerDetail';
// import TechnicianDetail from './components/Forms/TechnicianDetail';

// const onChange = (key) => {
//   console.log(key);
// };

// const formsItems = [
//   { key: '1', label: 'Customer Detail', component: <CustomerDetail /> },
//   { key: '2', label: 'Technician Detail', component: <TechnicianDetail /> },
//   { key: '3', label: 'Product Master', component: <ProductMaster /> },
//   { key: '4', label: 'Spare Parts and Stocks', component: <SparePartsAndStocks /> },
//   { key: '5', label: 'Problem Statement', component: <ProblemStatement /> },
//   { key: '6', label: 'Feedback Form', component: <FeedbackForm /> },
//   { key: '7', label: 'Scrap Inward Form', component: <ScrapInwardForm /> },
//   { key: '8', label: 'Invoice Sub Form', component: <InvoiceSubForm /> },
//   { key: '9', label: 'Ticket Creation', component: <TicketCreation /> },
//   { key: '10', label: 'Invoice Form', component: <InvoiceForm /> }
// ];

// const viewsItems = [
//   { key: '1', label: 'View Customer Details', component: <ViewCustomerDetails /> },
//   { key: '2', label: 'View Ticket', component: <ViewTicket /> },
//   { key: '3', label: 'View Technician Details', component: <ViewTechnicianDetails /> },
//   { key: '4', label: 'View Feedback', component: <ViewFeedback /> },
//   { key: '5', label: 'View Problem', component: <ViewProblem /> },
//   { key: '6', label: 'View Logs', component: <ViewLogs /> },
//   { key: '7', label: 'View Product', component: <ViewProduct /> },
//   { key: '8', label: 'View Invoice', component: <ViewInvoice /> },
//   { key: '9', label: 'View Spares', component: <ViewSpares /> },
//   { key: '10', label: 'View Scrap', component: <ViewScrap /> },
//   { key: '11', label: 'View List of Spares', component: <ViewListOfSpares /> }
// ];

// const App = () => {
//   const [selectedTab, setSelectedTab] = React.useState('Home');
//   const [subTabItems, setSubTabItems] = React.useState([]);

//   const handleSegmentedChange = (value) => {
//     setSelectedTab(value);
//     if (value === 'Forms') {
//       setSubTabItems(formsItems);
//     } else if (value === 'Views') {
//       setSubTabItems(viewsItems);
//     } else {
//       setSubTabItems([]);
//     }
//   };

//   return (
//     <Router>
//       <div>
//         <Segmented
//           defaultValue="Home"
//           style={{ marginBottom: 8 }}
//           onChange={handleSegmentedChange}
//           options={['Home', 'Forms', 'Views']}
//         />
//         {selectedTab === 'Home' && <h2>Welcome to Home</h2>}
//         {selectedTab !== 'Home' && (
//           <Tabs
//             defaultActiveKey="1"
//             items={subTabItems.map(item => ({
//               key: item.key,
//               label: item.label,
//               children: item.component
//             }))}
//             onChange={onChange}
//           />
//         )}
//       </div>
//     </Router>
//   );
// };

// export default App;



//=========================================================================================================================
//working below code



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Segmented, Tabs } from 'antd';

// // Import your components for views and forms
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
// import InvoiceSubForm from './components/Forms/InvoiceSubForm.jsx';
// import TicketCreation from './components/Forms/TicketCreation.jsx';
// import ScrapInwardForm from './components/Forms/ScrapInwardForm';
// import FeedbackForm from './components/Forms/FeedbackForm';
// import ProblemStatement from './components/Forms/ProblemStatement';
// import ProductMaster from './components/Forms/ProductMaster';
// import SparePartsAndStocks from './components/Forms/SparePartsAndStocks';
// import CustomerDetail from './components/Forms/CustomerDetail';
// import TechnicianDetail from './components/Forms/TechnicianDetail';
// import LoginDetails from './components/Views/LoginDetails.jsx';
// import TechnicianView from './components/Views/TechnicianView.jsx';
// import DsipatchView from './components/Views/DsipatchView.jsx';
// import InhouseView from './components/Views/InhouseView.jsx';

// const App = () => {
//   const [selectedTab, setSelectedTab] = React.useState('Home');
//   const [subTabItems, setSubTabItems] = React.useState([]);

//   const handleSegmentedChange = (value) => {
//     setSelectedTab(value);
//     if (value === 'Forms') {
//       setSubTabItems(formsItems);
//     } else if (value === 'Views') {
//       setSubTabItems(viewsItems);
//     } else {
//       setSubTabItems([]);
//     }
//   };

//   const formsItems = [
//     { key: '1', label: 'Customer Detail', component: <CustomerDetail /> },
//     { key: '2', label: 'Technician Detail', component: <TechnicianDetail /> },
//     { key: '3', label: 'Product Master', component: <ProductMaster /> },
//     { key: '4', label: 'Spare Parts and Stocks', component: <SparePartsAndStocks /> },
//     { key: '5', label: 'Problem Statement', component: <ProblemStatement /> },
//     { key: '6', label: 'Feedback Form', component: <FeedbackForm /> },
//     { key: '7', label: 'Scrap Inward Form', component: <ScrapInwardForm /> },
//     { key: '8', label: 'Invoice Sub Form', component: <InvoiceSubForm /> },
//     { key: '9', label: 'Ticket Creation', component: <TicketCreation /> },
//     { key: '10', label: 'Invoice Form', component: <InvoiceForm /> }
//   ];

//   const viewsItems = [
//     { key: '1', label: 'View Customer Details', component: <ViewCustomerDetails /> },
//     { key: '2', label: 'View Ticket', component: <ViewTicket /> },
//     { key: '3', label: 'View Technician Details', component: <ViewTechnicianDetails /> },
//     { key: '4', label: 'View Feedback', component: <ViewFeedback /> },
//     { key: '5', label: 'View Problem', component: <ViewProblem /> },
//     { key: '6', label: 'View Logs', component: <ViewLogs /> },
//     { key: '7', label: 'View Product', component: <ViewProduct /> },
//     { key: '8', label: 'View Invoice', component: <ViewInvoice /> },
//     { key: '9', label: 'View Spares', component: <ViewSpares /> },
//     { key: '10', label: 'View Scrap', component: <ViewScrap /> },
//     { key: '11', label: 'View List of Spares', component: <ViewListOfSpares /> },
//     { key: '12', label: 'Login Details', component: <LoginDetails /> },
//     { key: '13', label: 'Technician View', component: <TechnicianView /> },
//     { key: '14', label: 'Dispatch View', component: <DsipatchView /> },
//     { key: '15', label: 'Login Details', component: <InhouseView /> }

//   ];

//   const onChange = (key) => {
//     console.log(key);
//   };

//   return (
//     <Router basename="/app">
//       <div>
//         <Segmented
//           defaultValue="Home"
//           style={{ marginBottom: 8 }}
//           onChange={handleSegmentedChange}
//           options={['Home', 'Forms', 'Views']}
//         />
//         {selectedTab === 'Home' && <h2>Welcome to Home</h2>}
//         {selectedTab !== 'Home' && (
//           <Tabs
//             defaultActiveKey="1"
//             items={subTabItems.map(item => ({
//               key: item.key,
//               label: item.label,
//               children: item.component
//             }))}
//             onChange={onChange}
//           />
//         )}
//       </div>
//       <Routes>
//         {/* Routes for forms */}
//         <Route path="/forms/customer-detail" element={<CustomerDetail />} />
//         <Route path="/forms/technician-detail" element={<TechnicianDetail />} />
//         <Route path="/forms/product-master" element={<ProductMaster />} />
//         <Route path="/forms/spare-parts-stocks" element={<SparePartsAndStocks />} />
//         <Route path="/forms/problem-statement" element={<ProblemStatement />} />
//         <Route path="/forms/feedback-form" element={<FeedbackForm />} />
//         <Route path="/forms/scrap-inward-form" element={<ScrapInwardForm />} />
//         <Route path="/forms/invoice-sub-form" element={<InvoiceSubForm />} />
//         <Route path="/forms/ticket-creation" element={<TicketCreation />} />
//         <Route path="/forms/invoice-form" element={<InvoiceForm />} />

//         {/* Routes for views */}
//         <Route path="/views/customer-details" element={<ViewCustomerDetails />} />
//         <Route path="/views/ticket" element={<ViewTicket />} />
//         <Route path="/views/technician-details" element={<ViewTechnicianDetails />} />
//         <Route path="/views/feedback" element={<ViewFeedback />} />
//         <Route path="/views/problem" element={<ViewProblem />} />
//         <Route path="/views/logs" element={<ViewLogs />} />
//         <Route path="/views/product" element={<ViewProduct />} />
//         <Route path="/views/invoice" element={<ViewInvoice />} />
//         <Route path="/views/spares" element={<ViewSpares />} />
//         <Route path="/views/scrap" element={<ViewScrap />} />
//         <Route path="/views/list-of-spares" element={<ViewListOfSpares />} />
//         <Route path="/views/login-details" element={<LoginDetails />} />
//         <Route path="/views/technician-view" element={<TechnicianView />} />
//         <Route path="/views/dispatch-view" element={<DsipatchView />} />
//         <Route path="/views/inhouse-view" element={<InhouseView />} />

        
//       </Routes>
//     </Router>
//   );
// };

// export default App;


//==============================================================================================================



// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { Segmented, Tabs } from 'antd';
// import { UserProvider, useUser } from './components/UserContext.jsx'; // Import the UserContext

// // Import your components for views and forms
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
// import TicketCreation from './components/Forms/TicketCreation.jsx';
// import FeedbackForm from './components/Forms/FeedbackForm';
// import ProblemStatement from './components/Forms/ProblemStatement';
// import ProductMaster from './components/Forms/ProductMaster';
// import SparePartsAndStocks from './components/Forms/SparePartsAndStocks';
// import CustomerDetail from './components/Forms/CustomerDetail';
// import TechnicianDetail from './components/Forms/TechnicianDetail';
// import LoginDetails from './components/Views/LoginDetails.jsx';
// import TechnicianView from './components/Views/TechnicianView.jsx';
// import DsipatchView from './components/Views/DsipatchView.jsx';
// import InhouseView from './components/Views/InhouseView.jsx';
// import Home from './components/Views/Home.jsx';

// const AppContent = () => {
//   const { userRole } = useUser();
//   const [selectedTab, setSelectedTab] = React.useState('Home');
//   const [subTabItems, setSubTabItems] = React.useState([]);

//   const handleSegmentedChange = (value) => {
//     setSelectedTab(value);
//     if (value === 'Forms') {
//       setSubTabItems(formsItems);
//     } else if (value === 'Views') {
//       setSubTabItems(viewsItems);
//     } else {
//       setSubTabItems([]);
//     }
//   };

//   const formsItems = [
//     { key: '1', label: 'Customer Detail', component: <CustomerDetail /> },
//     { key: '2', label: 'Technician Detail', component: <TechnicianDetail /> },
//     { key: '3', label: 'Product Master', component: <ProductMaster /> },
//     { key: '4', label: 'Spare Parts and Stocks', component: <SparePartsAndStocks /> },
//     // { key: '5', label: 'Problem Statement', component: <ProblemStatement /> },
//     // { key: '6', label: 'Feedback Form', component: <FeedbackForm /> },
//     { key: '9', label: 'Ticket Creation', component: <TicketCreation /> },
//     // { key: '10', label: 'Invoice Form', component: <InvoiceForm /> }
//   ];

//   const viewsItems = [
//     { key: '1', label: 'View Customer Details', component: <ViewCustomerDetails /> },
//     { key: '2', label: 'View Ticket', component: <ViewTicket /> },
//     { key: '3', label: 'View Technician Details', component: <ViewTechnicianDetails /> },
//     // { key: '4', label: 'View Feedback', component: <ViewFeedback /> },
//     // { key: '5', label: 'View Problem', component: <ViewProblem /> },
//     // { key: '6', label: 'View Logs', component: <ViewLogs /> },
//     { key: '7', label: 'View Product', component: <ViewProduct /> },
//     { key: '8', label: 'View Invoice', component: <ViewInvoice /> },
//     { key: '9', label: 'View Spares', component: <ViewSpares /> },
//     { key: '10', label: 'View Scrap', component: <ViewScrap /> },
//     { key: '11', label: 'View List of Spares', component: <ViewListOfSpares /> },
//     { key: '12', label: 'Login Details', component: <LoginDetails /> },
//     { key: '13', label: 'Technician View', component: <TechnicianView /> },
//     { key: '14', label: 'Dispatch View', component: <DsipatchView /> },
//     { key: '15', label: 'Inhouse View', component: <InhouseView /> }
//   ];

//   const user1Components = [<InvoiceForm />, <TechnicianView />, <DsipatchView />];
//   const user2Components = [<InhouseView />];

//   const renderTabs = () => {
//     if (userRole === 'App Administrator') {
//       return subTabItems.map(item => ({
//         key: item.key,
//         label: item.label,
//         children: item.component
//       }));
//     } else if (userRole === 'Technician') {
//       return user1Components.map((component, index) => ({
//         key: index.toString(),
//         label: `Tab ${index + 1}`,
//         children: component
//       }));
//     } else if (userRole === 'Support') {
//       return user2Components.map((component, index) => ({
//         key: index.toString(),
//         label: `Tab ${index + 1}`,
//         children: component
//       }));
//     }
//   };

//   return (
//     <div>
//       <Segmented
//         defaultValue="Home"
//         style={{ marginBottom: 8 }}
//         onChange={handleSegmentedChange}
//         options={['Home', 'Forms', 'Views']}
//       />
//       {selectedTab === 'Home' && <h2>Welcome to Home</h2>}
//       {selectedTab !== 'Home' && (
//         <Tabs
//           defaultActiveKey="1"
//           items={renderTabs()}
//           onChange={() => {}}
//         />
//       )}
//     </div>
//   );
// };

// const App = () => (
//   <UserProvider>
//     <Router basename="/app">
//       <AppContent />
//       <Routes>
//         {/* Routes for forms */}
//         <Route path="/forms/customer-detail" element={<CustomerDetail />} />
//         <Route path="/forms/technician-detail" element={<TechnicianDetail />} />
//         <Route path="/forms/product-master" element={<ProductMaster />} />
//         <Route path="/forms/spare-parts-stocks" element={<SparePartsAndStocks />} />
//         <Route path="/forms/problem-statement" element={<ProblemStatement />} />
//         <Route path="/forms/feedback-form" element={<FeedbackForm />} />
//         <Route path="/forms/ticket-creation" element={<TicketCreation />} />
//         <Route path="/forms/invoice-form" element={<InvoiceForm />} />

//         {/* Routes for views */}
//         <Route path="/views/customer-details" element={<ViewCustomerDetails />} />
//         <Route path="/views/ticket" element={<ViewTicket />} />
//         <Route path="/views/technician-details" element={<ViewTechnicianDetails />} />
//         <Route path="/views/feedback" element={<ViewFeedback />} />
//         <Route path="/views/problem" element={<ViewProblem />} />
//         <Route path="/views/logs" element={<ViewLogs />} />
//         <Route path="/views/product" element={<ViewProduct />} />
//         <Route path="/views/invoice" element={<ViewInvoice />} />
//         <Route path="/views/spares" element={<ViewSpares />} />
//         <Route path="/views/scrap" element={<ViewScrap />} />
//         <Route path="/views/list-of-spares" element={<ViewListOfSpares />} />
//         <Route path="/views/login-details" element={<LoginDetails />} />
//         <Route path="/views/technician-view" element={<TechnicianView />} />
//         <Route path="/views/dispatch-view" element={<DsipatchView />} />
//         <Route path="/views/inhouse-view" element={<InhouseView />} />
//       </Routes>
//     </Router>
//   </UserProvider>
// );

// export default App;


















// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { Segmented, Tabs } from 'antd';
// import axios from 'axios';

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
// import DispatchView from './components/Views/DsipatchView'
// import InhouseView from './components/Views/InhouseView';
// import Home from './components/Views/Home';

// const App = () => {
//   const [userRole, setUserRole] = useState('');
//   const [selectedTab, setSelectedTab] = useState('Home');
//   const [subTabItems, setSubTabItems] = useState([]);

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const res = await axios.get('/server/waterheater_1_function/getuser');
//         setUserRole(res.data.role_details.role_name);
//       } catch (err) {
//         console.error('Error fetching user role:', err);
//       }
//     };
//     fetchUserRole();
//   }, []);

//   const handleSegmentedChange = (value) => {
//     setSelectedTab(value);
//     setSubTabItems(getSubTabItems(value));
//   };

//   const getSubTabItems = (tab) => {
//     if (userRole === 'App Administrator') {
//       return tab === 'Forms' ? formsItems : viewsItems;
//     } else if (userRole === 'Technician') {
//       return technicianItems;
//     } else if (userRole === 'Inhouse') {
//       return inhouseItems;
//     }
//     return [];
//   };

//   const formsItems = [
//     { key: '1', label: 'Customer Detail', component: <CustomerDetail /> },
//     { key: '2', label: 'Technician Detail', component: <TechnicianDetail /> },
//     { key: '3', label: 'Product Master', component: <ProductMaster /> },
//     { key: '4', label: 'Spare Parts and Stocks', component: <SparePartsAndStocks /> },
//     { key: '5', label: 'Ticket Creation', component: <TicketCreation /> },
//   ];

//   const viewsItems = [
//     { key: '1', label: 'View Customer Details', component: <ViewCustomerDetails /> },
//     { key: '2', label: 'View Ticket', component: <ViewTicket /> },
//     { key: '3', label: 'View Technician Details', component: <ViewTechnicianDetails /> },
//     { key: '4', label: 'View Product', component: <ViewProduct /> },
//     { key: '5', label: 'View Invoice', component: <ViewInvoice /> },
//     { key: '6', label: 'View Spares', component: <ViewSpares /> },
//     { key: '7', label: 'View Scrap', component: <ViewScrap /> },
//     { key: '8', label: 'View List of Spares', component: <ViewListOfSpares /> },
//     { key: '9', label: 'Login Details', component: <LoginDetails /> },
//     { key: '10', label: 'Technician View', component: <TechnicianView /> },
//     { key: '11', label: 'Dispatch View', component: <DispatchView /> },
//     { key: '12', label: 'Inhouse View', component: <InhouseView /> },
//   ];

//   const technicianItems = [
//     { key: '1', label: 'Technician View', component: <TechnicianView /> },
//     { key: '2', label: 'Invoice Form', component: <InvoiceForm /> },
//     { key: '3', label: 'Login Details', component: <LoginDetails /> },
//     { key: '4', label: 'Dispatch View', component: <DispatchView /> },
//   ];

//   const inhouseItems = [
//     { key: '1', label: 'Inhouse View', component: <InhouseView /> },
//     { key: '2', label: 'Login Details', component: <LoginDetails /> },
//   ];

//   const renderTabs = () => {
//     return subTabItems.map(item => ({
//       key: item.key,
//       label: item.label,
//       children: item.component
//     }));
//   };

//   const getSegmentedOptions = () => {
//     if (userRole === 'App Administrator') {
//       return ['Home', 'Forms', 'Views'];
//     } else if (userRole === 'Technician' || userRole === 'Inhouse') {
//       return ['Home', 'Views'];
//     }
//     // return ['Home'];
//   };

//   return (
//     <Router basename="/app">
//       <div>
//         <Segmented
//           value={selectedTab}
//           style={{ marginBottom: 8 }}
//           onChange={handleSegmentedChange}
//           options={getSegmentedOptions()}
//         />
//         {selectedTab === 'Home' && <Home />}
//         {selectedTab !== 'Home' && (
//           <Tabs
//             defaultActiveKey="1"
//             items={renderTabs()}
//             onChange={() => {}}
//           />
//         )}
//       </div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {userRole === 'App Administrator' && (
//           <>
//             {formsItems.map(item => (
//               <Route key={item.key} path={`/forms/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//             ))}
//             {viewsItems.map(item => (
//               <Route key={item.key} path={`/views/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//             ))}
//           </>
//         )}
//         {userRole === 'Technician' && (
//           <>
//             <Route path="/views/technician-view" element={<TechnicianView />} />
//             <Route path="/forms/invoice-form" element={<InvoiceForm />} />
//             <Route path="/views/login-details" element={<LoginDetails />} />
//             <Route path="/views/dispatch-view" element={<DispatchView />} />
//           </>
//         )}
//         {userRole === 'Inhouse' && (
//           <>
//             <Route path="/views/inhouse-view" element={<InhouseView />} />
//             <Route path="/views/login-details" element={<LoginDetails />} />
//           </>
//         )}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

















import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Segmented, Tabs } from 'antd';
import axios from 'axios';

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
import DispatchView from './components/Views/DsipatchView';
import InhouseView from './components/Views/InhouseView';
import Home from './components/Views/Home';

const App = () => {
  const [userRole, setUserRole] = useState('');
  const [selectedTab, setSelectedTab] = useState('Home');
  const [subTabItems, setSubTabItems] = useState([]);
  const [userDetails, setUserDetails] = useState({})

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const res = await axios.get('/server/waterheater_1_function/getuser');
        setUserRole(res.data.role_details.role_name);
        setUserDetails(res.data)
      } catch (err) {
        console.error('Error fetching user role:', err);
      }
    };
    fetchUserRole();
  }, []);

  const handleSegmentedChange = (value) => {
    setSelectedTab(value);
    setSubTabItems(getSubTabItems(value));
  };

  const getSubTabItems = (tab) => {
    if (userRole === 'App Administrator') {
      return tab === 'Forms' ? formsItems : viewsItems;
    } else if (userRole === 'Technician') {
      return technicianItems;
    } else if (userRole === 'Inhouse') {
      return inhouseItems;
    }
    return [];
  };

  const formsItems = [
    { key: '1', label: 'Customer Detail', component: <CustomerDetail /> },
    { key: '2', label: 'Technician Detail', component: <TechnicianDetail /> },
    { key: '3', label: 'Product Master', component: <ProductMaster /> },
    { key: '4', label: 'Spare Parts and Stocks', component: <SparePartsAndStocks /> },
    { key: '5', label: 'Ticket Creation', component: <TicketCreation /> },
  ];

  const viewsItems = [
    { key: '1', label: 'View Customer Details', component: <ViewCustomerDetails /> },
    { key: '2', label: 'View Ticket', component: <ViewTicket /> },
    { key: '3', label: 'View Technician Details', component: <ViewTechnicianDetails /> },
    { key: '4', label: 'View Product', component: <ViewProduct /> },
    { key: '5', label: 'View Invoice', component: <ViewInvoice /> },
    { key: '6', label: 'View Spares', component: <ViewSpares /> },
    { key: '7', label: 'View Scrap', component: <ViewScrap /> },
    { key: '8', label: 'View List of Spares', component: <ViewListOfSpares /> },
    { key: '9', label: 'Login Details', component: <LoginDetails /> },
    { key: '10', label: 'Technician View', component: <TechnicianView /> },
    { key: '11', label: 'Dispatch View', component: <DispatchView /> },
    { key: '12', label: 'Inhouse View', component: <InhouseView /> },
  ];

  const technicianItems = [
    { key: '1', label: 'Technician View', component: <TechnicianView user={userDetails}/> },
    { key: '2', label: 'Invoice Form', component: <InvoiceForm /> },
    { key: '3', label: 'Login Details', component: <LoginDetails /> },
    { key: '4', label: 'Dispatch View', component: <DispatchView user={userDetails}/> },
  ];

  const inhouseItems = [
    { key: '1', label: 'Inhouse View', component: <InhouseView /> },
    { key: '2', label: 'Login Details', component: <LoginDetails /> },
  ];

  const renderTabs = () => {
    return subTabItems.map(item => ({
      key: item.key,
      label: item.label,
      children: item.component
    }));
  };

  const getSegmentedOptions = () => {
    if (userRole === 'App Administrator') {
      return ['Home', 'Forms', 'Views'];
    } else if (userRole === 'Technician' || userRole === 'Inhouse') {
      return ['Home', 'Views'];
    }
    return ['Home'];
  };

  const renderContent = () => {
    if (selectedTab === 'Home') {
      return <Home />;
    } else if (selectedTab === 'Forms' || selectedTab === 'Views') {
      return (
        <Tabs
          defaultActiveKey="1"
          items={renderTabs()}
          onChange={() => {}}
        />
      );
    }
    return null;
  };

  return (
    <Router basename="/app">
      <div>
        <Segmented
          value={selectedTab}
          style={{ marginBottom: 8 }}
          onChange={handleSegmentedChange}
          options={getSegmentedOptions()}
        />
        {renderContent()}
      </div>
      <Routes>
        {userRole === 'App Administrator' && (
          <>
            {formsItems.map(item => (
              <Route key={item.key} path={`/forms/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
            ))}
            {viewsItems.map(item => (
              <Route key={item.key} path={`/views/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
            ))}
          </>
        )}
        {userRole === 'Technician' && (
          <>
            <Route path="/views/technician-view" element={<TechnicianView user={userDetails}/>} />
            <Route path="/forms/invoice-form" element={<InvoiceForm />} />
            <Route path="/views/login-details" element={<LoginDetails />} />
            <Route path="/views/dispatch-view" element={<DispatchView user={userDetails}/>} />
          </>
        )}
        {userRole === 'Inhouse' && (
          <>
            <Route path="/views/inhouse-view" element={<InhouseView />} />
            <Route path="/views/login-details" element={<LoginDetails />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;