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
// // import InvoiceSubForm from './components/Forms/InvoiceSubForm.jsx';
// import TicketCreation from './components/Forms/TicketCreation.jsx';
// // import ScrapInwardForm from './components/Forms/ScrapInwardForm';
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
//   // { key: '7', label: 'Scrap Inward Form', component: <ScrapInwardForm /> },
//   // { key: '8', label: 'Invoice Sub Form', component: <InvoiceSubForm /> },
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
// import DsipatchView from './components/Views/DispatchView.jsx';
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
// import DispatchView from './components/Views/DispatchView'
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
// import DispatchView from './components/Views/DispatchView';
// import InhouseView from './components/Views/InhouseView';
// import Home from './components/Views/Home';

// const App = () => {
//   const [userRole, setUserRole] = useState('');
//   const [selectedTab, setSelectedTab] = useState('Home');
//   const [subTabItems, setSubTabItems] = useState([]);
//   const [userDetails, setUserDetails] = useState({})

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const res = await axios.get('/server/waterheater_1_function/getuser');
//         setUserRole(res.data.role_details.role_name);
//         setUserDetails(res.data)
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
//     { key: '1', label: 'Technician View', component: <TechnicianView user={userDetails}/> },
//     { key: '2', label: 'Invoice Form', component: <InvoiceForm /> },
//     { key: '3', label: 'Login Details', component: <LoginDetails /> },
//     { key: '4', label: 'Dispatch View', component: <DispatchView user={userDetails}/> },
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
//     return ['Home'];
//   };

//   const renderContent = () => {
//     if (selectedTab === 'Home') {
//       return <Home />;
//     } else if (selectedTab === 'Forms' || selectedTab === 'Views') {
//       return (
//         <Tabs
//           defaultActiveKey="1"
//           items={renderTabs()}
//           onChange={() => {}}
//         />
//       );
//     }
//     return null;
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
//         {renderContent()}
//       </div>
//       <Routes>
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
//             <Route path="/views/technician-view" element={<TechnicianView user={userDetails}/>} />
//             <Route path="/forms/invoice-form" element={<InvoiceForm />} />
//             <Route path="/views/login-details" element={<LoginDetails />} />
//             <Route path="/views/dispatch-view" element={<DispatchView user={userDetails}/>} />
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


















// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { Segmented, Tabs } from 'antd';
// import axios from 'axios';

// // Import your components (unchanged)
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


// const App = () => {
//   const [userRole, setUserRole] = useState('');
//   const [selectedTab, setSelectedTab] = useState('Home');
//   const [subTabItems, setSubTabItems] = useState([]);
//   const [userDetails, setUserDetails] = useState({})

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const res = await axios.get('/server/waterheater_1_function/getuser');
//         setUserRole(res.data.role_details.role_name);
//         setUserDetails(res.data)
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
//     { key: '10', label: 'Inhouse View', component: <InhouseView /> },
//   ];

//   const technicianItems = [
//     { key: '1', label: 'Technician View', component: <TechnicianView user={userDetails}/> },
//     // { key: '2', label: 'Invoice Form', component: <InvoiceForm /> },
//     { key: '3', label: 'Login Details', component: <LoginDetails /> },
//     { key: '4', label: 'Dispatch View', component: <DispatchView user={userDetails}/> },
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
//     return ['Home'];
//   };

//   const renderContent = () => {
//     if (selectedTab === 'Home') {
//       return <Home />;
//     } else if (selectedTab === 'Forms' || selectedTab === 'Views') {
//       return (
//         <Tabs
//           defaultActiveKey="1"
//           items={renderTabs()}
//           onChange={() => {}}
//         />
//       );
//     }
//     return null;
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
//         {renderContent()}
//       </div>
//       <Routes>
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
//             <Route path="/views/technician-view" element={<TechnicianView user={userDetails}/>} />
//             <Route path="/forms/invoice-form" element={<InvoiceForm />} />
//             <Route path="/views/login-details" element={<LoginDetails />} />
//             <Route path="/views/dispatch-view" element={<DispatchView user={userDetails}/>} />
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












// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { Segmented } from 'antd';
// import axios from 'axios';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';

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

// const App = () => {
//   const [userRole, setUserRole] = useState('');
//   const [selectedTab, setSelectedTab] = useState('Home');
//   const [userDetails, setUserDetails] = useState({});
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [selectedComponent, setSelectedComponent] = useState(null);

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const res = await axios.get('/server/waterheater_1_function/getuser');
//         setUserRole(res.data.role_details.role_name);
//         setUserDetails(res.data);
//       } catch (err) {
//         console.error('Error fetching user role:', err);
//       }
//     };
//     fetchUserRole();
//   }, []);

//   const handleSegmentedChange = (value) => {
//     setSelectedTab(value);
//     if (value !== 'Home') {
//       setDrawerOpen(true);
//     } else {
//       setSelectedComponent(null);
//     }
//   };

//   const getSubTabItems = () => {
//     if (userRole === 'App Administrator') {
//       return selectedTab === 'Forms' ? formsItems : viewsItems;
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
//     { key: '10', label: 'Inhouse View', component: <InhouseView /> },
//   ];

//   const technicianItems = [
//     { key: '1', label: 'Technician View', component: <TechnicianView user={userDetails}/> },
//     { key: '2', label: 'Invoice Form', component: <InvoiceForm /> },
//     { key: '3', label: 'Login Details', component: <LoginDetails /> },
//     { key: '4', label: 'Dispatch View', component: <DispatchView user={userDetails}/> },
//   ];

//   const inhouseItems = [
//     { key: '1', label: 'Inhouse View', component: <InhouseView /> },
//     { key: '2', label: 'Login Details', component: <LoginDetails /> },
//   ];

//   const getSegmentedOptions = () => {
//     if (userRole === 'App Administrator') {
//       return ['Home', 'Forms', 'Views'];
//     } else if (userRole === 'Technician' || userRole === 'Inhouse') {
//       return ['Home', 'Views'];
//     }
//     return ['Home'];
//   };

//   const renderContent = () => {
//     if (selectedTab === 'Home') {
//       return <Home />;
//     }
//     return selectedComponent;
//   };

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const handleItemClick = (component) => {
//     setSelectedComponent(component);
//     setDrawerOpen(false);
//   };

//   const list = () => (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         {getSubTabItems().map((item) => (
//           <ListItem key={item.key} disablePadding>
//             <ListItemButton onClick={() => handleItemClick(item.component)}>
//               <ListItemText primary={item.label} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Router basename="/app">
//       <div>
//         <Segmented
//           value={selectedTab}
//           style={{ marginBottom: 8 }}
//           onChange={handleSegmentedChange}
//           options={getSegmentedOptions()}
//         />
//         {renderContent()}
//         <Drawer
//           anchor="left"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//         >
//           {list()}
//         </Drawer>
//       </div>
//       <Routes>
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
//             <Route path="/views/technician-view" element={<TechnicianView user={userDetails}/>} />
//             <Route path="/forms/invoice-form" element={<InvoiceForm />} />
//             <Route path="/views/login-details" element={<LoginDetails />} />
//             <Route path="/views/dispatch-view" element={<DispatchView user={userDetails}/>} />
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















//working partially

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Button from '@mui/material/Button';

// // Import your components (unchanged)
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
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const [userDetails, setUserDetails] = useState({})

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const res = await axios.get('/server/waterheater_1_function/getuser');
//         setUserRole(res.data.role_details.role_name);
//         setUserEmail(res.data.email_id);
//         setUserDetails(res.data)

//       } catch (err) {
//         console.error('Error fetching user role:', err);
//       }
//     };
//     fetchUserRole();
//   }, []);

//   const getItems = () => {
//     if (userRole === 'App Administrator') {
//       return [...formsItems, ...viewsItems];
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
//     { key: '9', label: 'Login Details', component: <LoginDetails userDetails={userDetails}/> },
//     { key: '10', label: 'Inhouse View', component: <InhouseView /> },
//     { key: '11', label: 'Dashboard', component: <Dashboard /> },
//     // { key: '12', label: 'Technician View', component: <TechnicianView user={userDetails}/> },
//     { key: '13', label: 'Invoice Form', component: <InvoiceForm/> },

//   ];

//   const technicianItems = [
//     { key: '1', label: 'Technician View', component: <TechnicianView roleEmail={userEmail}/> },
//     // { key: '2', label: 'Invoice Form', component: <InvoiceForm/> },
//     { key: '3', label: 'Login Details', component: <LoginDetails userDetails={userDetails}/> },
//     { key: '4', label: 'Dispatch View', component: <DispatchView roleEmail={userEmail}/> },
//   ];

//   const inhouseItems = [
//     { key: '1', label: 'Inhouse View', component: <InhouseView /> },
//     { key: '2', label: 'Login Details', component: <LoginDetails userDetails={userDetails}/> },
//   ];

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const handleItemClick = (component) => {
//     setSelectedComponent(component);
//     setDrawerOpen(false);
//   };

//   const list = () => (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         {getItems().map((item) => (
//           <ListItem key={item.key} disablePadding>
//             <ListItemButton onClick={() => handleItemClick(item.component)}>
//               <ListItemText primary={item.label} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Router basename="/app">
//       <div>
//         <Button onClick={toggleDrawer(true)}>Open Menu</Button>
//         {selectedComponent || <Home />}
//         <Drawer
//           anchor="left"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//         >
//           {list()}
//         </Drawer>
//       </div>
//       <Routes>
//         {userRole === 'App Administrator' && (
//           <>
//             {[...formsItems, ...viewsItems].map(item => (
//               <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//             ))}
//           </>
//         )}
//         {userRole === 'Technician' && (
//           <>
//             <Route path="/technician-view" element={<TechnicianView user={userEmail}/>} />
//             <Route path="/invoice-form" element={<InvoiceForm />} />
//             <Route path="/login-details" element={<LoginDetails userDetails={userDetails}/>} />
//             <Route path="/dispatch-view" element={<DispatchView user={userEmail}/>} />
//           </>
//         )}
//         {userRole === 'Inhouse' && (
//           <>
//             <Route path="/inhouse-view" element={<InhouseView />} />
//             <Route path="/login-details" element={<LoginDetails userDetails={userDetails}/>} />
//           </>
//         )}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;






// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Button from '@mui/material/Button';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// // Import your components (unchanged)
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
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const [userDetails, setUserDetails] = useState({})

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const res = await axios.get('/server/waterheater_1_function/getuser');
//         setUserRole(res.data.role_details.role_name);
//         setUserEmail(res.data.email_id);
//         setUserDetails(res.data)

//       } catch (err) {
//         console.error('Error fetching user role:', err);
//       }
//     };
//     fetchUserRole();
//   }, []);

//   const getItems = () => {
//     if (userRole === 'App Administrator') {
//       return [...formsItems, ...viewsItems];
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
//     { key: '9', label: 'Login Details', component: <LoginDetails userDetails={userDetails}/> },
//     { key: '10', label: 'Inhouse View', component: <InhouseView /> },
//     { key: '11', label: 'Dashboard', component: <Dashboard /> },
//     { key: '13', label: 'Invoice Form', component: <InvoiceForm/> },
//   ];

//   const technicianItems = [
//     { key: '1', label: 'Technician View', component: <TechnicianView roleEmail={userEmail}/> },
//     { key: '3', label: 'Login Details', component: <LoginDetails userDetails={userDetails}/> },
//     { key: '4', label: 'Dispatch View', component: <DispatchView roleEmail={userEmail}/> },
//   ];

//   const inhouseItems = [
//     { key: '1', label: 'Inhouse View', component: <InhouseView /> },
//     { key: '2', label: 'Login Details', component: <LoginDetails userDetails={userDetails}/> },
//   ];

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const handleItemClick = (component) => {
//     setSelectedComponent(component);
//     setDrawerOpen(false);
//   };

//   const list = () => (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         {getItems().map((item) => (
//           <ListItem key={item.key} disablePadding>
//             <ListItemButton onClick={() => handleItemClick(item.component)}>
//               <ListItemText primary={item.label} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Router basename="/app">
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static">
//           <Toolbar>
            
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Water Heater App
//             </Typography>
            
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//               onClick={toggleDrawer(true)}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <div>
//         {selectedComponent || <Home />}
//         <Drawer
//           anchor="left"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//         >
//           {list()}
//         </Drawer>
//       </div>
//       <Routes>
//         {userRole === 'App Administrator' && (
//           <>
//             {[...formsItems, ...viewsItems].map(item => (
//               <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//             ))}
//           </>
//         )}
//         {userRole === 'Technician' && (
//           <>
//             <Route path="/technician-view" element={<TechnicianView user={userEmail}/>} />
//             <Route path="/invoice-form" element={<InvoiceForm />} />
//             <Route path="/login-details" element={<LoginDetails userDetails={userDetails}/>} />
//             <Route path="/dispatch-view" element={<DispatchView user={userEmail}/>} />
//           </>
//         )}
//         {userRole === 'Inhouse' && (
//           <>
//             <Route path="/inhouse-view" element={<InhouseView />} />
//             <Route path="/login-details" element={<LoginDetails userDetails={userDetails}/>} />
//           </>
//         )}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;






// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Menu, Switch } from 'antd';
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
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const [userDetails, setUserDetails] = useState({});
//   const [theme, setTheme] = useState('dark');
//   const [current, setCurrent] = useState('1');

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
//     { key: '9', label: 'Login Details', component: <LoginDetails userDetails={userDetails}/> },
//     { key: '10', label: 'Inhouse View', component: <InhouseView /> },
//     { key: '11', label: 'Dashboard', component: <Dashboard /> },
//     { key: '12', label: 'Invoice Form', component: <InvoiceForm /> },
//   ];

//   const technicianItems = [
//     { key: '1', label: 'Technician View', component: <TechnicianView roleEmail={userEmail}/> },
//     { key: '2', label: 'Login Details', component: <LoginDetails userDetails={userDetails}/> },
//     { key: '3', label: 'Dispatch View', component: <DispatchView roleEmail={userEmail}/> },
//   ];

//   const inhouseItems = [
//     { key: '1', label: 'Inhouse View', component: <InhouseView /> },
//     { key: '2', label: 'Login Details', component: <LoginDetails userDetails={userDetails}/> },
//   ];

//   const changeTheme = (value) => {
//     setTheme(value ? 'dark' : 'light');
//   };

//   const onClick = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//     const allItems = [...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems];
//     const selectedItem = allItems.find(item => item.key === e.key);
//     if (selectedItem) {
//       setSelectedComponent(selectedItem.component);
//     }
//     setDrawerOpen(false);
//   };

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const getMenuItems = () => {
//     if (userRole === 'App Administrator') {
//       return [
//         {
//           key: 'sub1',
//           label: 'Forms',
//           icon: <MailOutlined />,
//           children: formsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//         {
//           key: 'sub2',
//           label: 'Views',
//           icon: <AppstoreOutlined />,
//           children: viewsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//       ];
//     } else if (userRole === 'Technician') {
//       return technicianItems.map(item => ({
//         key: item.key,
//         label: item.label,
//       }));
//     } else if (userRole === 'Inhouse') {
//       return inhouseItems.map(item => ({
//         key: item.key,
//         label: item.label,
//       }));
//     }
//     return [];
//   };

//   return (
//     <Router basename="/app">
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static">
//           <Toolbar>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Water Heater App
//             </Typography>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//               onClick={toggleDrawer(true)}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <div>
//         {selectedComponent || <Home />}
//         <Drawer
//           anchor="left"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//         >
//           <Box sx={{ width: 256, padding: 2 }}>
//             <Switch
//               checked={theme === 'dark'}
//               onChange={changeTheme}
//               checkedChildren="Dark"
//               unCheckedChildren="Light"
//             />
//             <br />
//             <br />
//             <Menu
//               theme={theme}
//               onClick={onClick}
//               style={{ width: 256 }}
//               defaultOpenKeys={['sub1']}
//               selectedKeys={[current]}
//               mode="inline"
//               items={getMenuItems()}
//             />
//           </Box>
//         </Drawer>
//       </div>
//       <Routes>
//         {userRole === 'App Administrator' && (
//           <>
//             {[...formsItems, ...viewsItems].map(item => (
//               <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//             ))}
//           </>
//         )}
//         {userRole === 'Technician' && (
//           <>
//             <Route path="/technician-view" element={<TechnicianView user={userEmail}/>} />
//             <Route path="/invoice-form" element={<InvoiceForm />} />
//             <Route path="/login-details" element={<LoginDetails userDetails={userDetails}/>} />
//             <Route path="/dispatch-view" element={<DispatchView user={userEmail}/>} />
//           </>
//         )}
//         {userRole === 'Inhouse' && (
//           <>
//             <Route path="/inhouse-view" element={<InhouseView />} />
//             <Route path="/login-details" element={<LoginDetails userDetails={userDetails}/>} />
//           </>
//         )}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;









// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const [userDetails, setUserDetails] = useState({});
//   const [current, setCurrent] = useState('1');

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
//     { key: '9', label: 'Login Details', component: <LoginDetails userDetails={userDetails}/> },
//     { key: '10', label: 'Inhouse View', component: <InhouseView /> },
//     { key: '11', label: 'Dashboard', component: <Dashboard /> },
//     { key: '12', label: 'Invoice Form', component: <InvoiceForm /> },
//   ];

//   const technicianItems = [
//     { key: '1', label: 'Technician View', component: <TechnicianView roleEmail={userEmail}/> },
//     { key: '2', label: 'Login Details', component: <LoginDetails userDetails={userDetails}/> },
//     { key: '3', label: 'Dispatch View', component: <DispatchView roleEmail={userEmail}/> },
//   ];

//   const inhouseItems = [
//     { key: '1', label: 'Inhouse View', component: <InhouseView /> },
//     { key: '2', label: 'Login Details', component: <LoginDetails userDetails={userDetails}/> },
//   ];

//   const onClick = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//     const allItems = [...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems];
//     const selectedItem = allItems.find(item => item.key === e.key);
//     if (selectedItem) {
//       setSelectedComponent(selectedItem.component);
//     }
//     setDrawerOpen(false);
//   };

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const getMenuItems = () => {
//     if (userRole === 'App Administrator') {
//       return [
//         {
//           key: 'sub1',
//           label: 'Forms',
//           icon: <MailOutlined />,
//           children: formsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//         {
//           key: 'sub2',
//           label: 'Views',
//           icon: <AppstoreOutlined />,
//           children: viewsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//       ];
//     } else if (userRole === 'Technician') {
//       return technicianItems.map(item => ({
//         key: item.key,
//         label: item.label,
//       }));
//     } else if (userRole === 'Inhouse') {
//       return inhouseItems.map(item => ({
//         key: item.key,
//         label: item.label,
//       }));
//     }
//     return [];
//   };

//   return (
//     <Router basename="/app">
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static">
//           <Toolbar>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Water Heater App
//             </Typography>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//               onClick={toggleDrawer(true)}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <div>
//         {selectedComponent || <Home />}
//         <Drawer
//           anchor="left"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//         >
//           <Box sx={{ width: '100%' }}>
//             <Menu
//               theme="dark"
//               onClick={onClick}
//               style={{ width: '100%' }}
//               defaultOpenKeys={['sub1']}
//               selectedKeys={[current]}
//               mode="inline"
//               items={getMenuItems()}
//             />
//           </Box>
//         </Drawer>
//       </div>
//       <Routes>
//         {userRole === 'App Administrator' && (
//           <>
//             {[...formsItems, ...viewsItems].map(item => (
//               <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//             ))}
//           </>
//         )}
//         {userRole === 'Technician' && (
//           <>
//             <Route path="/technician-view" element={<TechnicianView user={userEmail}/>} />
//             <Route path="/invoice-form" element={<InvoiceForm />} />
//             <Route path="/login-details" element={<LoginDetails userDetails={userDetails}/>} />
//             <Route path="/dispatch-view" element={<DispatchView user={userEmail}/>} />
//           </>
//         )}
//         {userRole === 'Inhouse' && (
//           <>
//             <Route path="/inhouse-view" element={<InhouseView />} />
//             <Route path="/login-details" element={<LoginDetails userDetails={userDetails}/>} />
//           </>
//         )}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;









// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const [userDetails, setUserDetails] = useState({});
//   const [current, setCurrent] = useState('1');

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
//     { key: '9', label: 'Inhouse View', component: <InhouseView /> },
//     { key: '10', label: 'Invoice Form', component: <InvoiceForm /> },
//   ];

//   const technicianItems = [
//     { key: '1', label: 'Technician View', component: <TechnicianView roleEmail={userEmail}/> },
//     { key: '2', label: 'Dispatch View', component: <DispatchView roleEmail={userEmail}/> },
//   ];

//   const inhouseItems = [
//     { key: '1', label: 'Inhouse View', component: <InhouseView /> },
//   ];

//   const onClick = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//     const allItems = [...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems];
//     const selectedItem = allItems.find(item => item.key === e.key);
//     if (selectedItem) {
//       setSelectedComponent(selectedItem.component);
//     }
//     setDrawerOpen(false);
//   };

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const getMenuItems = () => {
//     if (userRole === 'App Administrator') {
//       return [
//         {
//           key: 'sub1',
//           label: 'Forms',
//           icon: <MailOutlined />,
//           children: formsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//         {
//           key: 'sub2',
//           label: 'Views',
//           icon: <AppstoreOutlined />,
//           children: viewsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//       ];
//     } else if (userRole === 'Technician') {
//       return technicianItems.map(item => ({
//         key: item.key,
//         label: item.label,
//       }));
//     } else if (userRole === 'Inhouse') {
//       return inhouseItems.map(item => ({
//         key: item.key,
//         label: item.label,
//       }));
//     }
//     return [];
//   };

//   return (
//     <Router basename="/app">
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
//         {selectedComponent || <Home />}
//         <Drawer
//           anchor="right"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//           PaperProps={{
//             sx: {
//               backgroundColor: '#001529', // Ant Design's default dark theme color
//             },
//           }}
//         >
//           <Box sx={{ width: 250 }}>
//             <Menu
//               theme="dark"
//               onClick={onClick}
//               style={{ width: '100%' }}
//               defaultOpenKeys={['sub1']}
//               selectedKeys={[current]}
//               mode="inline"
//               items={getMenuItems()}
//             />
//           </Box>
//         </Drawer>
//       </div>
//       <Routes>
//         {userRole === 'App Administrator' && (
//           <>
//             {[...formsItems, ...viewsItems].map(item => (
//               <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//             ))}
//           </>
//         )}
//         {userRole === 'Technician' && (
//           <>
//             <Route path="/technician-view" element={<TechnicianView user={userEmail}/>} />
//             <Route path="/invoice-form" element={<InvoiceForm />} />
//             <Route path="/dispatch-view" element={<DispatchView user={userEmail}/>} />
//           </>
//         )}
//         {userRole === 'Inhouse' && (
//           <>
//             <Route path="/inhouse-view" element={<InhouseView />} />
//           </>
//         )}
//         <Route path="/login-details" element={<LoginDetails userDetails={userDetails}/>} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;





// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const [userDetails, setUserDetails] = useState({});
//   const [current, setCurrent] = useState('1');

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
//     { key: 'f1', label: 'Customer Detail', component: <CustomerDetail /> },
//     { key: 'f2', label: 'Technician Detail', component: <TechnicianDetail /> },
//     { key: 'f3', label: 'Product Master', component: <ProductMaster /> },
//     { key: 'f4', label: 'Spare Parts and Stocks', component: <SparePartsAndStocks /> },
//     { key: 'f5', label: 'Ticket Creation', component: <TicketCreation /> },
//   ];

//   const viewsItems = [
//     { key: 'v1', label: 'View Customer Details', component: <ViewCustomerDetails /> },
//     { key: 'v2', label: 'View Ticket', component: <ViewTicket /> },
//     { key: 'v3', label: 'View Technician Details', component: <ViewTechnicianDetails /> },
//     { key: 'v4', label: 'View Product', component: <ViewProduct /> },
//     { key: 'v5', label: 'View Invoice', component: <ViewInvoice /> },
//     { key: 'v6', label: 'View Spares', component: <ViewSpares /> },
//     { key: 'v7', label: 'View Scrap', component: <ViewScrap /> },
//     { key: 'v8', label: 'View List of Spares', component: <ViewListOfSpares /> },
//     { key: 'v9', label: 'Inhouse View', component: <InhouseView /> },
//     { key: 'v10', label: 'Invoice Form', component: <InvoiceForm /> },
//   ];

//   const technicianItems = [
//     { key: 't1', label: 'Technician View', component: <TechnicianView roleEmail={userEmail}/> },
//     { key: 't2', label: 'Dispatch View', component: <DispatchView roleEmail={userEmail}/> },
//   ];

//   const inhouseItems = [
//     { key: 'i1', label: 'Inhouse View', component: <InhouseView /> },
//   ];

//   const onClick = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//     const allItems = [...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems];
//     const selectedItem = allItems.find(item => item.key === e.key);
//     if (selectedItem) {
//       setSelectedComponent(selectedItem.component);
//     }
//     setDrawerOpen(false);
//   };

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const getMenuItems = () => {
//     if (userRole === 'App Administrator') {
//       return [
//         {
//           key: 'sub1',
//           label: 'Forms',
//           icon: <MailOutlined />,
//           children: formsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//         {
//           key: 'sub2',
//           label: 'Views',
//           icon: <AppstoreOutlined />,
//           children: viewsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//       ];
//     } else if (userRole === 'Technician') {
//       return technicianItems.map(item => ({
//         key: item.key,
//         label: item.label,
//       }));
//     } else if (userRole === 'Inhouse') {
//       return inhouseItems.map(item => ({
//         key: item.key,
//         label: item.label,
//       }));
//     }
//     return [];
//   };

//   return (
//     <Router basename="/app">
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
//         {selectedComponent || <Home />}
//         <Drawer
//           anchor="right"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//           PaperProps={{
//             sx: {
//               backgroundColor: '#001529', // Ant Design's default dark theme color
//             },
//           }}
//         >
//           <Box sx={{ width: 250 }}>
//             <Menu
//               theme="dark"
//               onClick={onClick}
//               style={{ width: '100%' }}
//               defaultOpenKeys={['sub1']}
//               selectedKeys={[current]}
//               mode="inline"
//               items={getMenuItems()}
//             />
//           </Box>
//         </Drawer>
//       </div>
//       <Routes>
//         {userRole === 'App Administrator' && (
//           <>
//             {[...formsItems, ...viewsItems].map(item => (
//               <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//             ))}
//           </>
//         )}
//         {userRole === 'Technician' && (
//           <>
//             {technicianItems.map(item => (
//               <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//             ))}
//           </>
//         )}
//         {userRole === 'Inhouse' && (
//           <>
//             {inhouseItems.map(item => (
//               <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//             ))}
//           </>
//         )}
//         <Route path="/login-details" element={<LoginDetails userDetails={userDetails}/>} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;





// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const [userDetails, setUserDetails] = useState({});
//   const [current, setCurrent] = useState('1');

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
//     { key: 'f1', label: 'Customer Detail', component: <CustomerDetail /> },
//     { key: 'f2', label: 'Technician Detail', component: <TechnicianDetail /> },
//     { key: 'f3', label: 'Product Master', component: <ProductMaster /> },
//     { key: 'f4', label: 'Spare Parts and Stocks', component: <SparePartsAndStocks /> },
//     { key: 'f5', label: 'Ticket Creation', component: <TicketCreation /> },
//   ];

//   const viewsItems = [
//     { key: 'v1', label: 'View Customer Details', component: <ViewCustomerDetails /> },
//     { key: 'v2', label: 'View Ticket', component: <ViewTicket /> },
//     { key: 'v3', label: 'View Technician Details', component: <ViewTechnicianDetails /> },
//     { key: 'v4', label: 'View Product', component: <ViewProduct /> },
//     { key: 'v5', label: 'View Invoice', component: <ViewInvoice /> },
//     { key: 'v6', label: 'View Spares', component: <ViewSpares /> },
//     { key: 'v7', label: 'View Scrap', component: <ViewScrap /> },
//     { key: 'v8', label: 'View List of Spares', component: <ViewListOfSpares /> },
//     { key: 'v9', label: 'Inhouse View', component: <InhouseView /> },
//     { key: 'v10', label: 'Invoice Form', component: <InvoiceForm /> },
//   ];

//   const technicianItems = [
//     { key: 't1', label: 'Technician View', component: <TechnicianView roleEmail={userEmail}/> },
//     { key: 't2', label: 'Dispatch View', component: <DispatchView roleEmail={userEmail}/> },
//   ];

//   const inhouseItems = [
//     { key: 'i1', label: 'Inhouse View', component: <InhouseView /> },
//   ];

//   const commonItems = [
//     { key: 'home', label: 'Home', component: <Home /> },
//     { key: 'login', label: 'Login Details', component: <LoginDetails userDetails={userDetails}/> },
//     { key: 'dashboard', label: 'Dashboard', component: <Dashboard /> },
//   ];

//   const onClick = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//     const allItems = [...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems, ...commonItems];
//     const selectedItem = allItems.find(item => item.key === e.key);
//     if (selectedItem) {
//       setSelectedComponent(selectedItem.component);
//     }
//     setDrawerOpen(false);
//   };

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const getMenuItems = () => {
//     if (userRole === 'App Administrator') {
//       return [
//         {
//           key: 'sub1',
//           label: 'Forms',
//           icon: <MailOutlined />,
//           children: formsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//         {
//           key: 'sub2',
//           label: 'Views',
//           icon: <AppstoreOutlined />,
//           children: viewsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//       ];
//     } else if (userRole === 'Technician') {
//       return [
//         ...technicianItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//       ];
//     } else if (userRole === 'Inhouse') {
//       return [
//         ...inhouseItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//       ];
//     }
//     return commonItems.map(item => ({
//       key: item.key,
//       label: item.label,
//     }));
//   };

//   return (
//     <Router basename="/app">
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
//         {selectedComponent || <Home />}
//         <Drawer
//           anchor="right"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//           PaperProps={{
//             sx: {
//               backgroundColor: '#001529', // Ant Design's default dark theme color
//             },
//           }}
//         >
//           <Box sx={{ width: 250 }}>
//             <Menu
//               theme="dark"
//               onClick={onClick}
//               style={{ width: '100%' }}
//               defaultOpenKeys={['sub1']}
//               selectedKeys={[current]}
//               mode="inline"
//               items={getMenuItems()}
//             />
//           </Box>
//         </Drawer>
//       </div>
//       <Routes>
//         {[...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems, ...commonItems].map(item => (
//           <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//         ))}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;




// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const [userDetails, setUserDetails] = useState({});
//   const [current, setCurrent] = useState('1');

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
//     { key: 'f1', label: 'Customer Detail', component: <CustomerDetail /> },
//     { key: 'f2', label: 'Technician Detail', component: <TechnicianDetail /> },
//     { key: 'f3', label: 'Product Master', component: <ProductMaster /> },
//     { key: 'f4', label: 'Spare Parts and Stocks', component: <SparePartsAndStocks /> },
//     { key: 'f5', label: 'Ticket Creation', component: <TicketCreation /> },
//   ];

//   const viewsItems = [
//     { key: 'v1', label: 'View Customer Details', component: <ViewCustomerDetails /> },
//     { key: 'v2', label: 'View Ticket', component: <ViewTicket /> },
//     { key: 'v3', label: 'View Technician Details', component: <ViewTechnicianDetails /> },
//     { key: 'v4', label: 'View Product', component: <ViewProduct /> },
//     { key: 'v5', label: 'View Invoice', component: <ViewInvoice /> },
//     { key: 'v6', label: 'View Spares', component: <ViewSpares /> },
//     { key: 'v7', label: 'View Scrap', component: <ViewScrap /> },
//     { key: 'v8', label: 'View List of Spares', component: <ViewListOfSpares /> },
//     { key: 'v9', label: 'Inhouse View', component: <InhouseView /> },
//     { key: 'v10', label: 'Invoice Form', component: <InvoiceForm /> },
//   ];

//   const technicianItems = [
//     { key: 't1', label: 'Technician View', component: <TechnicianView roleEmail={userEmail}/> },
//     { key: 't2', label: 'Dispatch View', component: <DispatchView roleEmail={userEmail}/> },
//   ];

//   const inhouseItems = [
//     { key: 'i1', label: 'Inhouse View', component: <InhouseView /> },
//   ];

//   const commonItems = [
//     { key: 'home', label: 'Home', component: <Home /> },
//     { key: 'login', label: 'Login Details', component: <LoginDetails userDetails={userDetails}/> },
//     { key: 'dashboard', label: 'Dashboard', component: <Dashboard /> },
//   ];

//   const onClick = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//     const allItems = [...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems, ...commonItems];
//     const selectedItem = allItems.find(item => item.key === e.key);
//     if (selectedItem) {
//       setSelectedComponent(selectedItem.component);
//     }
//     setDrawerOpen(false);
//   };

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const getMenuItems = () => {
//     if (userRole === 'App Administrator') {
//       return [
//         {
//           key: 'sub1',
//           label: 'Forms',
//           icon: <MailOutlined />,
//           children: formsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//         {
//           key: 'sub2',
//           label: 'Views',
//           icon: <AppstoreOutlined />,
//           children: viewsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//       ];
//     } else if (userRole === 'Technician') {
//       return [
//         ...technicianItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//       ];
//     } else if (userRole === 'Inhouse') {
//       return [
//         ...inhouseItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//       ];
//     }
//     return commonItems.map(item => ({
//       key: item.key,
//       label: item.label,
//     }));
//   };

//   return (
//     <Router basename="/app">
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
//         {selectedComponent || <Home />}
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
//               onClick={onClick}
//               style={{ width: '100%' }}
//               defaultOpenKeys={['sub1']}
//               selectedKeys={[current]}
//               mode="inline"
//               items={getMenuItems()}
//             />
//           </Box>
//         </Drawer>
//       </div>
//       <Routes>
//         {[...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems, ...commonItems].map(item => (
//           <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//         ))}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;









// import React, { useState, useEffect } from 'react';
// import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const [userDetails, setUserDetails] = useState({});
//   const [current, setCurrent] = useState('1');

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
//     { key: 'f1', label: 'Customer Detail', component: <CustomerDetail /> },
//     { key: 'f2', label: 'Technician Detail', component: <TechnicianDetail /> },
//     { key: 'f3', label: 'Product Master', component: <ProductMaster /> },
//     { key: 'f4', label: 'Spare Parts and Stocks', component: <SparePartsAndStocks /> },
//     { key: 'f5', label: 'Ticket Creation', component: <TicketCreation /> },
//   ];

//   const viewsItems = [
//     { key: 'v1', label: 'View Customer Details', component: <ViewCustomerDetails /> },
//     { key: 'v2', label: 'View Ticket', component: <ViewTicket /> },
//     { key: 'v3', label: 'View Technician Details', component: <ViewTechnicianDetails /> },
//     { key: 'v4', label: 'View Product', component: <ViewProduct /> },
//     { key: 'v5', label: 'View Invoice', component: <ViewInvoice /> },
//     { key: 'v6', label: 'View Spares', component: <ViewSpares /> },
//     { key: 'v7', label: 'View Scrap', component: <ViewScrap /> },
//     { key: 'v8', label: 'View List of Spares', component: <ViewListOfSpares /> },
//     { key: 'v9', label: 'Inhouse View', component: <InhouseView /> },
//     { key: 'v10', label: 'Invoice Form', component: <InvoiceForm /> },
//   ];

//   const technicianItems = [
//     { key: 't1', label: 'Technician View', component: <TechnicianView roleEmail={userEmail}/> },
//     { key: 't2', label: 'Dispatch View', component: <DispatchView roleEmail={userEmail}/> },
//   ];

//   const inhouseItems = [
//     { key: 'i1', label: 'Inhouse View', component: <InhouseView /> },
//   ];

//   const commonItems = [
//     { key: 'home', label: 'Home', component: <Home /> },
//     { key: 'login', label: 'Login Details', component: <LoginDetails userDetails={userDetails}/> },
//     { key: 'dashboard', label: 'Dashboard', component: <Dashboard /> },
//   ];

//   const onClick = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//     const allItems = [...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems, ...commonItems];
//     const selectedItem = allItems.find(item => item.key === e.key);
//     if (selectedItem) {
//       setSelectedComponent(selectedItem.component);
//     }
//     setDrawerOpen(false);
//   };

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const getMenuItems = () => {
//     if (userRole === 'App Administrator') {
//       return [
//         {
//           key: 'sub1',
//           label: 'Forms',
//           icon: <MailOutlined />,
//           children: formsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//         {
//           key: 'sub2',
//           label: 'Views',
//           icon: <AppstoreOutlined />,
//           children: viewsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//       ];
//     } else if (userRole === 'Technician') {
//       return [
//         ...technicianItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//       ];
//     } else if (userRole === 'Inhouse') {
//       return [
//         ...inhouseItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//       ];
//     }
//     return commonItems.map(item => ({
//       key: item.key,
//       label: item.label,
//     }));
//   };

//   return (
//     <Router>
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
//         {selectedComponent || <Home />}
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
//               onClick={onClick}
//               style={{ width: '100%' }}
//               defaultOpenKeys={['sub1']}
//               selectedKeys={[current]}
//               mode="inline"
//               items={getMenuItems()}
//             />
//           </Box>
//         </Drawer>
//       </div>
//       <Routes>
//         {[...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems, ...commonItems].map(item => (
//           <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//         ))}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;







// working good except refresh



// import React, { useState, useEffect } from 'react';
// import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const [userDetails, setUserDetails] = useState({});
//   const [current, setCurrent] = useState('1');

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
//     { key: 'f1', label: 'Customer Detail', component: <CustomerDetail /> },
//     { key: 'f2', label: 'Technician Detail', component: <TechnicianDetail /> },
//     { key: 'f3', label: 'Product Master', component: <ProductMaster /> },
//     { key: 'f4', label: 'Spare Parts and Stocks', component: <SparePartsAndStocks /> },
//     { key: 'f5', label: 'Ticket Creation', component: <TicketCreation /> },
//   ];

//   const viewsItems = [
//     { key: 'v1', label: 'View Customer Details', component: <ViewCustomerDetails /> },
//     { key: 'v2', label: 'View Ticket', component: <ViewTicket /> },
//     { key: 'v3', label: 'View Technician Details', component: <ViewTechnicianDetails /> },
//     { key: 'v4', label: 'View Product', component: <ViewProduct /> },
//     { key: 'v5', label: 'View Invoice', component: <ViewInvoice /> },
//     { key: 'v6', label: 'View Spares', component: <ViewSpares /> },
//     { key: 'v7', label: 'View Scrap', component: <ViewScrap /> },
//     { key: 'v8', label: 'View List of Spares', component: <ViewListOfSpares /> },
//     { key: 'v9', label: 'Inhouse View', component: <InhouseView /> },
//     { key: 'v10', label: 'Invoice Form', component: <InvoiceForm /> },
//   ];

//   const technicianItems = [
//     { key: 't1', label: 'Technician View', component: <TechnicianView roleEmail={userEmail}/> },
//     { key: 't2', label: 'Dispatch View', component: <DispatchView roleEmail={userEmail}/> },
//   ];

//   const inhouseItems = [
//     { key: 'i1', label: 'Inhouse View', component: <InhouseView /> },
//   ];

//   const commonItems = [
//     { key: 'home', label: 'Home', component: <Home /> },
//     { key: 'login', label: 'Login Details', component: <LoginDetails userDetails={userDetails}/> },
//     { key: 'dashboard', label: 'Dashboard', component: <Dashboard /> },
//   ];

//   const onClick = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//     const allItems = [...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems, ...commonItems];
//     const selectedItem = allItems.find(item => item.key === e.key);
//     if (selectedItem) {
//       setSelectedComponent(selectedItem.component);
//     }
//     setDrawerOpen(false);
//   };

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const getMenuItems = () => {
//     if (userRole === 'App Administrator') {
//       return [
//         {
//           key: 'sub1',
//           label: 'Forms',
//           icon: <MailOutlined />,
//           children: formsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//         {
//           key: 'sub2',
//           label: 'Views',
//           icon: <AppstoreOutlined />,
//           children: viewsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//       ];
//     } else if (userRole === 'Technician') {
//       return [
//         ...technicianItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//       ];
//     } else if (userRole === 'Inhouse') {
//       return [
//         ...inhouseItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//       ];
//     }
//     return commonItems.map(item => ({
//       key: item.key,
//       label: item.label,
//     }));
//   };

//   return (
//     <Router>
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
//         {selectedComponent || <Home />}
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
//               onClick={onClick}
//               style={{ width: '100%' }}
//               defaultOpenKeys={['sub1']}
//               selectedKeys={[current]}
//               mode="inline"
//               items={getMenuItems()}
//             />
//           </Box>
//         </Drawer>
//       </div>
//       <Routes>
//         {[...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems, ...commonItems].map(item => (
//           <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//         ))}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;






// import React, { useState, useEffect } from 'react';
// import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const [userDetails, setUserDetails] = useState({});
//   const [current, setCurrent] = useState('');

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
//     { key: 'f1', label: 'Customer Detail', path: 'customer-detail', component: <CustomerDetail /> },
//     { key: 'f2', label: 'Technician Detail', path: 'technician-detail', component: <TechnicianDetail /> },
//     { key: 'f3', label: 'Product Master', path: 'product-master', component: <ProductMaster /> },
//     { key: 'f4', label: 'Spare Parts and Stocks', path: 'spare-parts-stocks', component: <SparePartsAndStocks /> },
//     { key: 'f5', label: 'Ticket Creation', path: 'ticket-creation', component: <TicketCreation /> },
//   ];

//   const viewsItems = [
//     { key: 'v1', label: 'View Customer Details', path: 'view-customer-details', component: <ViewCustomerDetails /> },
//     { key: 'v2', label: 'View Ticket', path: 'view-ticket', component: <ViewTicket /> },
//     { key: 'v3', label: 'View Technician Details', path: 'view-technician-details', component: <ViewTechnicianDetails /> },
//     { key: 'v4', label: 'View Product', path: 'view-product', component: <ViewProduct /> },
//     { key: 'v5', label: 'View Invoice', path: 'view-invoice', component: <ViewInvoice /> },
//     { key: 'v6', label: 'View Spares', path: 'view-spares', component: <ViewSpares /> },
//     { key: 'v7', label: 'View Scrap', path: 'view-scrap', component: <ViewScrap /> },
//     { key: 'v8', label: 'View List of Spares', path: 'view-list-of-spares', component: <ViewListOfSpares /> },
//     { key: 'v9', label: 'Inhouse View', path: 'inhouse-view', component: <InhouseView /> },
//     { key: 'v10', label: 'Invoice Form', path: 'invoice-form', component: <InvoiceForm /> },
//   ];

//   const technicianItems = [
//     { key: 't1', label: 'Technician View', path: 'technician-view', component: <TechnicianView roleEmail={userEmail}/> },
//     { key: 't2', label: 'Dispatch View', path: 'dispatch-view', component: <DispatchView roleEmail={userEmail}/> },
//   ];

//   const inhouseItems = [
//     { key: 'i1', label: 'Inhouse View', path: 'inhouse-view', component: <InhouseView /> },
//   ];

//   const commonItems = [
//     { key: 'home', label: 'Home', path: '', component: <Home /> },
//     { key: 'login', label: 'Login Details', path: 'login-details', component: <LoginDetails userDetails={userDetails}/> },
//     { key: 'dashboard', label: 'Dashboard', path: 'dashboard', component: <Dashboard /> },
//   ];

//   const onClick = (e) => {
//     setCurrent(e.key);
//     const selectedItem = [...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems, ...commonItems].find(item => item.key === e.key);
//     if (selectedItem) {
//       setSelectedComponent(selectedItem.component);
//     }
//     setDrawerOpen(false);
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
//           })),
//         },
//         {
//           key: 'sub2',
//           label: 'Views',
//           icon: <AppstoreOutlined />,
//           children: viewsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//       ];
//     } else if (userRole === 'Technician') {
//       items = [
//         ...technicianItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//       ];
//     } else if (userRole === 'Inhouse') {
//       items = [
//         ...inhouseItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//         ...commonItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//       ];
//     } else {
//       items = commonItems.map(item => ({
//         key: item.key,
//         label: item.label,
//       }));
//     }
//     return items;
//   };

//   return (
//     <Router>
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
//         {selectedComponent || <Home />}
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
//               onClick={onClick}
//               style={{ width: '100%' }}
//               defaultOpenKeys={['sub1']}
//               selectedKeys={[current]}
//               mode="inline"
//               items={getMenuItems()}
//             />
//           </Box>
//         </Drawer>
//       </div>
//       <Routes>
//         {[...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems, ...commonItems].map(item => (
//           <Route key={item.key} path={`/${item.path}`} element={item.component} />
//         ))}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;










// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
//     { key: 'f1', label: 'Customer Detail', path: 'customer-detail', component: <CustomerDetail /> },
//     { key: 'f2', label: 'Technician Detail', path: 'technician-detail', component: <TechnicianDetail /> },
//     { key: 'f3', label: 'Product Master', path: 'product-master', component: <ProductMaster /> },
//     { key: 'f4', label: 'Spare Parts and Stocks', path: 'spare-parts-stocks', component: <SparePartsAndStocks /> },
//     { key: 'f5', label: 'Ticket Creation', path: 'ticket-creation', component: <TicketCreation /> },
//   ];

//   const viewsItems = [
//     { key: 'v1', label: 'View Customer Details', path: 'view-customer-details', component: <ViewCustomerDetails /> },
//     { key: 'v2', label: 'View Ticket', path: 'view-ticket', component: <ViewTicket /> },
//     { key: 'v3', label: 'View Technician Details', path: 'view-technician-details', component: <ViewTechnicianDetails /> },
//     { key: 'v4', label: 'View Product', path: 'view-product', component: <ViewProduct /> },
//     { key: 'v5', label: 'View Invoice', path: 'view-invoice', component: <ViewInvoice /> },
//     { key: 'v6', label: 'View Spares', path: 'view-spares', component: <ViewSpares /> },
//     { key: 'v7', label: 'View Scrap', path: 'view-scrap', component: <ViewScrap /> },
//     { key: 'v8', label: 'View List of Spares', path: 'view-list-of-spares', component: <ViewListOfSpares /> },
//     { key: 'v9', label: 'Inhouse View', path: 'inhouse-view', component: <InhouseView /> },
//     { key: 'v10', label: 'Invoice Form', path: 'invoice-form', component: <InvoiceForm /> },
//   ];

//   const technicianItems = [
//     { key: 't1', label: 'Technician View', path: 'technician-view', component: <TechnicianView roleEmail={userEmail}/> },
//     { key: 't2', label: 'Dispatch View', path: 'dispatch-view', component: <DispatchView roleEmail={userEmail}/> },
//   ];

//   const inhouseItems = [
//     { key: 'i1', label: 'Inhouse View', path: 'inhouse-view', component: <InhouseView /> },
//   ];

//   const commonItems = [
//     { key: 'home', label: 'Home', path: '', component: <Home /> },
//     { key: 'login', label: 'Login Details', path: 'login-details', component: <LoginDetails userDetails={userDetails}/> },
//     { key: 'dashboard', label: 'Dashboard', path: 'dashboard', component: <Dashboard /> },
//   ];

//   const onClick = (key, path) => {
//     setCurrent(key);
//     setDrawerOpen(false);
//     // Navigate to the selected path
//     window.history.replaceState(null, '', `/${path}`);
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
//     <Router>
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
//             <Route key={item.key} path={`/${item.path}`} element={item.component} />
//           ))}
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
//     </Router>
//   );
// };

// export default App;











// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
//     { key: 'home', label: 'Home', path: '', component: Home },
//     { key: 'login', label: 'Login Details', path: 'login-details', component: () => <LoginDetails userDetails={userDetails}/> },
//     { key: 'dashboard', label: 'Dashboard', path: 'dashboard', component: Dashboard },
//   ];

//   const onClick = (key, path) => {
//     setCurrent(key);
//     setDrawerOpen(false);
//     // Navigate to the selected path
//     window.history.replaceState(null, '', `/${path}`);
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
//     <Router>
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
//     </Router>
//   );
// };

// export default App;




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




import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
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

const App = () => {
  const [userRole, setUserRole] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [current, setCurrent] = useState('');
  const navigate = useNavigate();

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
    { key: 'v9', label: 'Inhouse View', path: 'inhouse-view', component: InhouseView },
    // { key: 'v10', label: 'Invoice Form', path: 'invoice-form', component: InvoiceForm },
  ];

  const technicianItems = [
    { key: 't1', label: 'Technician View', path: 'technician-view', component: () => <TechnicianView roleEmail={userEmail}/> },
    { key: 't2', label: 'Dispatch View', path: 'dispatch-view', component: () => <DispatchView roleEmail={userEmail}/> },
    { key: 't3', label: 'Invoice Form', path: 'invoice-form', component: InvoiceForm },

  ];

  const inhouseItems = [
    { key: 'i1', label: 'Inhouse View', path: 'inhouse-view', component: InhouseView },
  ];

  const commonItems = [
    { key: 'home', label: 'Home', path: 'home', component: Home },
    { key: 'login', label: 'Login Details', path: 'login-details', component: () => <LoginDetails userDetails={userDetails}/> },
    { key: 'dashboard', label: 'Dashboard', path: 'dashboard', component: Dashboard },
  ];

  const onClick = (key, path) => {
    setCurrent(key);
    navigate(`/${path}`);
    setTimeout(() => setDrawerOpen(false), 100);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const getMenuItems = () => {
    let items = [];
    if (userRole === 'App Administrator') {
      items = [
        ...commonItems.map(item => ({
          key: item.key,
          label: item.label,
          path: item.path,
        })),
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
          children: viewsItems.map(item => ({
            key: item.key,
            label: item.label,
            path: item.path,
          })),
        },
       
      ];
    } else if (userRole === 'Technician') {
      items = [
        ...technicianItems.map(item => ({
          key: item.key,
          label: item.label,
          path: item.path,
        })),
        ...commonItems.map(item => ({
          key: item.key,
          label: item.label,
          path: item.path,
        })),
      ];
    } else if (userRole === 'Inhouse') {
      items = [
        ...inhouseItems.map(item => ({
          key: item.key,
          label: item.label,
          path: item.path,
        })),
        ...commonItems.map(item => ({
          key: item.key,
          label: item.label,
          path: item.path,
        })),
      ];
    } else {
      items = commonItems.map(item => ({
        key: item.key,
        label: item.label,
        path: item.path,
      }));
    }
    return items;
  };

  return (
    <div >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', marginBottom:'25px' }}>
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
          {[...formsItems, ...viewsItems, ...technicianItems, ...inhouseItems, ...commonItems].map(item => (
            <Route key={item.key} path={`/${item.path}`} element={<item.component />} />
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
            },
          }}
        >
          <Box sx={{ width: 250 }}>
            <Menu
              theme="dark"
              onClick={(e) => onClick(e.key, e.item.props.path)}
              style={{ width: '100%' }}
              defaultOpenKeys={['sub1']}
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
          </Box>
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







// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Menu } from 'antd';
// import { AppstoreOutlined, MailOutlined, SettingOutlined, HomeOutlined, DashboardOutlined, LoginOutlined } from '@ant-design/icons';

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
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const [userDetails, setUserDetails] = useState({});
//   const [current, setCurrent] = useState('1');

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
//     { key: 'f1', label: 'Customer Detail', component: <CustomerDetail /> },
//     { key: 'f2', label: 'Technician Detail', component: <TechnicianDetail /> },
//     { key: 'f3', label: 'Product Master', component: <ProductMaster /> },
//     { key: 'f4', label: 'Spare Parts and Stocks', component: <SparePartsAndStocks /> },
//     { key: 'f5', label: 'Ticket Creation', component: <TicketCreation /> },
//   ];

//   const viewsItems = [
//     { key: 'v1', label: 'View Customer Details', component: <ViewCustomerDetails /> },
//     { key: 'v2', label: 'View Ticket', component: <ViewTicket /> },
//     { key: 'v3', label: 'View Technician Details', component: <ViewTechnicianDetails /> },
//     { key: 'v4', label: 'View Product', component: <ViewProduct /> },
//     { key: 'v5', label: 'View Invoice', component: <ViewInvoice /> },
//     { key: 'v6', label: 'View Spares', component: <ViewSpares /> },
//     { key: 'v7', label: 'View Scrap', component: <ViewScrap /> },
//     { key: 'v8', label: 'View List of Spares', component: <ViewListOfSpares /> },
//     { key: 'v9', label: 'Inhouse View', component: <InhouseView /> },
//     { key: 'v10', label: 'Invoice Form', component: <InvoiceForm /> },
//   ];

//   const technicianItems = [
//     { key: 't1', label: 'Technician View', component: <TechnicianView roleEmail={userEmail}/> },
//     { key: 't2', label: 'Dispatch View', component: <DispatchView roleEmail={userEmail}/> },
//   ];

//   const inhouseItems = [
//     { key: 'i1', label: 'Inhouse View', component: <InhouseView /> },
//   ];

//   const onClick = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//     const allItems = [
//       { key: 'home', label: 'Home', component: <Home /> },
//       { key: 'dashboard', label: 'Dashboard', component: <Dashboard /> },
//       { key: 'login', label: 'Login Details', component: <LoginDetails userDetails={userDetails}/> },
//       ...formsItems,
//       ...viewsItems,
//       ...technicianItems,
//       ...inhouseItems
//     ];
//     const selectedItem = allItems.find(item => item.key === e.key);
//     if (selectedItem) {
//       setSelectedComponent(selectedItem.component);
//     }
//     setDrawerOpen(false);
//   };

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const getMenuItems = () => {
//     const commonItems = [
//       { key: 'home', icon: <HomeOutlined />, label: 'Home' },
//       { key: 'dashboard', icon: <DashboardOutlined />, label: 'Dashboard' },
//       { key: 'login', icon: <LoginOutlined />, label: 'Login Details' },
//     ];

//     if (userRole === 'App Administrator') {
//       return [
//         ...commonItems,
//         {
//           key: 'sub1',
//           label: 'Forms',
//           icon: <MailOutlined />,
//           children: formsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//         {
//           key: 'sub2',
//           label: 'Views',
//           icon: <AppstoreOutlined />,
//           children: viewsItems.map(item => ({
//             key: item.key,
//             label: item.label,
//           })),
//         },
//       ];
//     } else if (userRole === 'Technician') {
//       return [
//         ...commonItems,
//         ...technicianItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//       ];
//     } else if (userRole === 'Inhouse') {
//       return [
//         ...commonItems,
//         ...inhouseItems.map(item => ({
//           key: item.key,
//           label: item.label,
//         })),
//       ];
//     }
//     return commonItems;
//   };

//   return (
//     <Router basename="/app">
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
//         {selectedComponent || <Home />}
//         <Drawer
//           anchor="right"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//           PaperProps={{
//             sx: {
//               backgroundColor: '#001529', // Ant Design's default dark theme color
//             },
//           }}
//         >
//           <Box sx={{ width: 250 }}>
//             <Menu
//               theme="dark"
//               onClick={onClick}
//               style={{ width: '100%' }}
//               defaultOpenKeys={['sub1']}
//               selectedKeys={[current]}
//               mode="inline"
//               items={getMenuItems()}
//             />
//           </Box>
//         </Drawer>
//       </div>
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/login-details" element={<LoginDetails userDetails={userDetails}/>} />
//         {userRole === 'App Administrator' && (
//           <>
//             {[...formsItems, ...viewsItems].map(item => (
//               <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//             ))}
//           </>
//         )}
//         {userRole === 'Technician' && (
//           <>
//             {technicianItems.map(item => (
//               <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//             ))}
//           </>
//         )}
//         {userRole === 'Inhouse' && (
//           <>
//             {inhouseItems.map(item => (
//               <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//             ))}
//           </>
//         )}
//         <Route path="*" element={<Navigate to="/home" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;






// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
// import DispatchView from './components/Views/DispatchView';
// import InhouseView from './components/Views/InhouseView';
// import Home from './components/Views/Home';
// import Dashboard from './components/Views/Dashboard';

// const App = () => {
//   const [userType, setUserType] = useState('');
//   const [ userEmail,setUserEmail] = useState('')

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get('/server/waterheater_1_function/getuser');
//         setUserType(res.data.role_details.role_name);
//         console.log(res.data)
//         setUserEmail(res.data.email_id)

//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const adminRoutes = [
//     { path: '/view-invoice', label: 'View Invoice', component: <ViewInvoice /> },
//     { path: '/view-list-of-spares', label: 'View List of Spares', component: <ViewListOfSpares /> },
//     { path: '/view-logs', label: 'View Logs', component: <ViewLogs /> },
//     { path: '/view-feedback', label: 'View Feedback', component: <ViewFeedback /> },
//     { path: '/view-problem', label: 'View Problem', component: <ViewProblem /> },
//     { path: '/view-product', label: 'View Product', component: <ViewProduct /> },
//     { path: '/view-scrap', label: 'View Scrap', component: <ViewScrap /> },
//     { path: '/view-spares', label: 'View Spares', component: <ViewSpares /> },
//     { path: '/view-technician-details', label: 'View Technician Details', component: <ViewTechnicianDetails /> },
//     { path: '/view-customer-details', label: 'View Customer Details', component: <ViewCustomerDetails /> },
//     { path: '/view-ticket', label: 'View Ticket', component: <ViewTicket /> },
//     { path: '/ticket-creation', label: 'Ticket Creation', component: <TicketCreation /> },
//     { path: '/feedback-form', label: 'Feedback Form', component: <FeedbackForm /> },
//     { path: '/problem-statement', label: 'Problem Statement', component: <ProblemStatement /> },
//     { path: '/product-master', label: 'Product Master', component: <ProductMaster /> },
//     { path: '/spare-parts-and-stocks', label: 'Spare Parts and Stocks', component: <SparePartsAndStocks /> },
//     { path: '/customer-detail', label: 'Customer Detail', component: <CustomerDetail /> },
//     { path: '/technician-detail', label: 'Technician Detail', component: <TechnicianDetail /> },
//     { path: '/login-details', label: 'Login Details', component: <LoginDetails /> },
//     { path: '/dashboard', label: 'Dashboard', component: <Dashboard /> },
//   ];

//   const technicianRoutes = [
//     { path: '/logindetails', label: 'Login Details', component: <LoginDetails /> },
//     { path: '/technician-view', label: 'Technician View', component: <TechnicianView roleEmail={userEmail}/> },
//     { path: '/dispatch-view', label: 'Dispatch View', component: <DispatchView roleEmail={userEmail}/> },
//     { path: '/invoice-form', label: 'Invoice Form', component: <InvoiceForm /> },
//   ];

//   const inhouseRoutes = [
//     { path: '/logindetails', label: 'Login Details', component: <LoginDetails /> },
//     { path: '/inhouse-view', label: 'Inhouse View', component: <InhouseView /> },
//   ];

//   const getRoutes = () => {
//     switch (userType) {
//       case 'App Administrator':
//         return adminRoutes;
//       case 'Technician':
//         return technicianRoutes;
//       case 'Inhouse':
//         return inhouseRoutes;
//       default:
//         return [];
//     }
//   };

//   return (
//     <Router>
//       <div>
//         {/* Navigation links */}
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             {userType === 'App Administrator' && adminRoutes.map(route => (
//               <li key={route.path}>
//                 <Link to={route.path}>{route.label}</Link>
//               </li>
//             ))}
//             {userType === 'Technician' && technicianRoutes.map(route => (
//               <li key={route.path}>
//                 <Link to={route.path}>{route.label}</Link>
//               </li>
//             ))}
//             {userType === 'Inhouse' && inhouseRoutes.map(route => (
//               <li key={route.path}>
//                 <Link to={route.path}>{route.label}</Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Routing */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {getRoutes().map(route => (
//             <Route key={route.path} path={route.path} element={route.component} />
//           ))}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;









// import React from 'react';
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

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
//   return (
//     <BrowserRouter>
//       <div>
//         {/* Navigation links */}
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/dashboard">Dashboard</Link>
//             </li>
//             <li>
//               <Link to="/view-invoice">View Invoice</Link>
//             </li>
//             <li>
//               <Link to="/view-list-of-spares">View List of Spares</Link>
//             </li>
//             <li>
//               <Link to="/view-logs">View Logs</Link>
//             </li>
//             <li>
//               <Link to="/view-feedback">View Feedback</Link>
//             </li>
//             <li>
//               <Link to="/view-problem">View Problem</Link>
//             </li>
//             <li>
//               <Link to="/view-product">View Product</Link>
//             </li>
//             <li>
//               <Link to="/view-scrap">View Scrap</Link>
//             </li>
//             <li>
//               <Link to="/view-spares">View Spares</Link>
//             </li>
//             <li>
//               <Link to="/view-technician-details">View Technician Details</Link>
//             </li>
//             <li>
//               <Link to="/view-customer-details">View Customer Details</Link>
//             </li>
//             <li>
//               <Link to="/view-ticket">View Ticket</Link>
//             </li>
//             <li>
//               <Link to="/invoice-form">Invoice Form</Link>
//             </li>
//             <li>
//               <Link to="/ticket-creation">Ticket Creation</Link>
//             </li>
//             <li>
//               <Link to="/feedback-form">Feedback Form</Link>
//             </li>
//             <li>
//               <Link to="/problem-statement">Problem Statement</Link>
//             </li>
//             <li>
//               <Link to="/product-master">Product Master</Link>
//             </li>
//             <li>
//               <Link to="/spare-parts-and-stocks">Spare Parts and Stocks</Link>
//             </li>
//             <li>
//               <Link to="/customer-detail">Customer Detail</Link>
//             </li>
//             <li>
//               <Link to="/technician-detail">Technician Detail</Link>
//             </li>
//             <li>
//               <Link to="/login-details">Login Details</Link>
//             </li>
//             <li>
//               <Link to="/technician-view">Technician View</Link>
//             </li>
//             <li>
//               <Link to="/dispatch-view">Dispatch View</Link>
//             </li>
//             <li>
//               <Link to="/inhouse-view">Inhouse View</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Routing */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/view-invoice" element={<ViewInvoice />} />
//           <Route path="/view-list-of-spares" element={<ViewListOfSpares />} />
//           <Route path="/view-logs" element={<ViewLogs />} />
//           <Route path="/view-feedback" element={<ViewFeedback />} />
//           <Route path="/view-problem" element={<ViewProblem />} />
//           <Route path="/view-product" element={<ViewProduct />} />
//           <Route path="/view-scrap" element={<ViewScrap />} />
//           <Route path="/view-spares" element={<ViewSpares />} />
//           <Route path="/view-technician-details" element={<ViewTechnicianDetails />} />
//           <Route path="/view-customer-details" element={<ViewCustomerDetails />} />
//           <Route path="/view-ticket" element={<ViewTicket />} />
//           <Route path="/invoice-form" element={<InvoiceForm />} />
//           <Route path="/ticket-creation" element={<TicketCreation />} />
//           <Route path="/feedback-form" element={<FeedbackForm />} />
//           <Route path="/problem-statement" element={<ProblemStatement />} />
//           <Route path="/product-master" element={<ProductMaster />} />
//           <Route path="/spare-parts-and-stocks" element={<SparePartsAndStocks />} />
//           <Route path="/customer-detail" element={<CustomerDetail />} />
//           <Route path="/technician-detail" element={<TechnicianDetail />} />
//           <Route path="/login-details" element={<LoginDetails />} />
//           <Route path="/technician-view" element={<TechnicianView />} />
//           <Route path="/dispatch-view" element={<DispatchView />} />
//           <Route path="/inhouse-view" element={<InhouseView />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;







// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Button from '@mui/material/Button';

// // Import your components (unchanged)
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
//   const [userDetails, setUserDetails] = useState({});
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [selectedComponent, setSelectedComponent] = useState(null);

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const res = await axios.get('/server/waterheater_1_function/getuser');
//         setUserRole(res.data.role_details.role_name);
//         setUserDetails(res.data);
//       } catch (err) {
//         console.error('Error fetching user role:', err);
//       }
//     };
//     fetchUserRole();
//   }, []);

//   const getItems = () => {
//     if (userRole === 'App Administrator') {
//       return [...formsItems, ...viewsItems];
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
//     { key: '6', label: 'View Customer Details', component: <ViewCustomerDetails /> },
//     { key: '7', label: 'View Ticket', component: <ViewTicket /> },
//     { key: '8', label: 'View Technician Details', component: <ViewTechnicianDetails /> },
//     { key: '9', label: 'View Product', component: <ViewProduct /> },
//     { key: '10', label: 'View Invoice', component: <ViewInvoice /> },
//     { key: '11', label: 'View Spares', component: <ViewSpares /> },
//     { key: '12', label: 'View Scrap', component: <ViewScrap /> },
//     { key: '13', label: 'View List of Spares', component: <ViewListOfSpares /> },
//     { key: '14', label: 'Login Details', component: <LoginDetails /> },
//     { key: '15', label: 'Inhouse View', component: <InhouseView /> },
//     { key: '16', label: 'Dashboard', component: <Dashboard /> },
//     { key: '1', label: 'Technician View', component: <TechnicianView user={userDetails}/> },
//     { key: '2', label: 'Invoice Form', component: <InvoiceForm/> },

//   ];

//   const technicianItems = [
//     { key: '1', label: 'Technician View', component: <TechnicianView user={userDetails}/> },
//     { key: '2', label: 'Invoice Form', component: <InvoiceForm/> },
//     { key: '3', label: 'Login Details', component: <LoginDetails /> },
//     { key: '4', label: 'Dispatch View', component: <DispatchView user={userDetails}/> },
//   ];

//   const inhouseItems = [
//     { key: '1', label: 'Inhouse View', component: <InhouseView /> },
//     { key: '2', label: 'Login Details', component: <LoginDetails /> },
//   ];

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const handleItemClick = (component) => {
//     setSelectedComponent(component);
//     setDrawerOpen(false);
//   };

//   const list = () => (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         {getItems().map((item) => (
//           <ListItem key={item.key} disablePadding>
//             <ListItemButton onClick={() => handleItemClick(item.component)}>
//               <ListItemText primary={item.label} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Router basename="/app">
//       <div>
//         <Button onClick={toggleDrawer(true)}>Open Menu</Button>
//         {selectedComponent || <Home />}
//         <Drawer
//           anchor="left"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//         >
//           {list()}
//         </Drawer>
//       </div>
//       <Routes>
//         {userRole === 'App Administrator' && (
//           <>
//             {[...formsItems, ...viewsItems].map(item => (
//               <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//             ))}
//             {/* Additional routes specifically for App Administrator */}
//             <Route path="/invoice-form" element={<InvoiceForm />} />
//             <Route path="/technician-view" element={<TechnicianView user={userDetails} />} />
//           </>
//         )}
//         {userRole === 'Technician' && (
//           <>
//             <Route path="/technician-view" element={<TechnicianView user={userDetails}/>} />
//             <Route path="/invoice-form" element={<InvoiceForm />} />
//             <Route path="/login-details" element={<LoginDetails />} />
//             <Route path="/dispatch-view" element={<DispatchView user={userDetails}/>} />
//           </>
//         )}
//         {userRole === 'Inhouse' && (
//           <>
//             <Route path="/inhouse-view" element={<InhouseView />} />
//             <Route path="/login-details" element={<LoginDetails />} />
//           </>
//         )}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;











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


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Button from '@mui/material/Button';

// // Import your components (unchanged)

// const App = () => {
//   const [userRole, setUserRole] = useState('');
//   const [userDetails, setUserDetails] = useState({});
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const [activeButton, setActiveButton] = useState('Home');

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const res = await axios.get('/server/waterheater_1_function/getuser');
//         setUserRole(res.data.role_details.role_name);
//         setUserDetails(res.data);
//       } catch (err) {
//         console.error('Error fetching user role:', err);
//       }
//     };
//     fetchUserRole();
//   }, []);

//   const getItems = () => {
//     switch (activeButton) {
//       case 'Forms':
//         return formsItems;
//       case 'Views':
//         return viewsItems;
//       case 'Profile':
//         return [{ key: 'profile', label: 'Login Details', component: <LoginDetails /> }];
//       default:
//         return [];
//     }
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
//     { key: '9', label: 'Inhouse View', component: <InhouseView /> },
//   ];

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const handleItemClick = (component) => {
//     setSelectedComponent(component);
//     setDrawerOpen(false);
//   };

//   const handleButtonClick = (buttonName) => {
//     setActiveButton(buttonName);
//     if (buttonName === 'Home') {
//       setSelectedComponent(<Home />);
//     } else if (buttonName === 'Profile') {
//       setSelectedComponent(<LoginDetails />);
//     } else {
//       setDrawerOpen(true);
//     }
//   };

//   const list = () => (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         {getItems().map((item) => (
//           <ListItem key={item.key} disablePadding>
//             <ListItemButton onClick={() => handleItemClick(item.component)}>
//               <ListItemText primary={item.label} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const renderButtons = () => {
//     const buttons = ['Home', 'Views', 'Profile'];
//     if (userRole === 'App Administrator') {
//       buttons.splice(1, 0, 'Forms');
//     }
//     return buttons.map((buttonName) => (
//       <Button 
//         key={buttonName} 
//         onClick={() => handleButtonClick(buttonName)}
//         variant={activeButton === buttonName ? 'contained' : 'outlined'}
//         style={{ margin: '0 5px' }}
//       >
//         {buttonName}
//       </Button>
//     ));
//   };

//   return (
//     <Router basename="/app">
//       <div>
//         <div style={{ marginBottom: '20px' }}>
//           {renderButtons()}
//         </div>
//         {selectedComponent || <Home />}
//         <Drawer
//           anchor="left"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//         >
//           {list()}
//         </Drawer>
//       </div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login-details" element={<LoginDetails />} />
//         {userRole === 'App Administrator' && (
//           <>
//             {[...formsItems, ...viewsItems].map(item => (
//               <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//             ))}
//           </>
//         )}
//         {(userRole === 'Technician' || userRole === 'Inhouse') && (
//           <>
//             {viewsItems.map(item => (
//               <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//             ))}
//           </>
//         )}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;




// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Button from '@mui/material/Button';

// // Import your components
// import Home from './components/Views/Home';
// import CustomerDetail from './components/Forms/CustomerDetail';
// import TechnicianDetail from './components/Forms/TechnicianDetail';
// import ProductMaster from './components/Forms/ProductMaster';
// import SparePartsAndStocks from './components/Forms/SparePartsAndStocks';
// import TicketCreation from './components/Forms/TicketCreation';
// import ViewCustomerDetails from './components/Views/ViewCustomerDetails';
// import ViewTicket from './components/Views/ViewTicket';
// import ViewTechnicianDetails from './components/Views/ViewTechnicianDetails';
// import ViewProduct from './components/Views/ViewProduct';
// import ViewInvoice from './components/Views/ViewInvoice';
// import ViewSpares from './components/Views/ViewSpares';
// import ViewScrap from './components/Views/ViewScrap';
// import ViewListOfSpares from './components/Views/ViewListOfSpares';
// import InhouseView from './components/Views/InhouseView';
// import LoginDetails from './components/Views/LoginDetails';

// const App = () => {
//   const [userRole, setUserRole] = useState('');
//   const [userDetails, setUserDetails] = useState({});
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [activeComponent, setActiveComponent] = useState(<Home />);
//   const [activeButton, setActiveButton] = useState('Home');

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const res = await axios.get('/server/waterheater_1_function/getuser');
//         setUserRole(res.data.role_details.role_name);
//         setUserDetails(res.data);
//       } catch (err) {
//         console.error('Error fetching user role:', err);
//       }
//     };
//     fetchUserRole();
//   }, []);

//   const getItems = () => {
//     switch (activeButton) {
//       case 'Forms':
//         return formsItems;
//       case 'Views':
//         return viewsItems;
//       case 'Profile':
//         return [{ key: 'profile', label: 'Login Details', component: <LoginDetails /> }];
//       default:
//         return [];
//     }
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
//     { key: '9', label: 'Inhouse View', component: <InhouseView /> },
//   ];

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const handleItemClick = (component) => {
//     setActiveComponent(component);
//     setDrawerOpen(false);
//   };

//   const handleButtonClick = (buttonName) => {
//     setActiveButton(buttonName);
//     if (buttonName === 'Home') {
//       setActiveComponent(<Home />);
//     } else if (buttonName === 'Profile') {
//       setActiveComponent(<LoginDetails />);
//     } else {
//       setDrawerOpen(true);
//     }
//   };

//   const list = () => (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         {getItems().map((item) => (
//           <ListItem key={item.key} disablePadding>
//             <ListItemButton onClick={() => handleItemClick(item.component)}>
//               <ListItemText primary={item.label} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const renderButtons = () => {
//     const buttons = ['Home', 'Views', 'Profile'];
//     if (userRole === 'App Administrator') {
//       buttons.splice(1, 0, 'Forms');
//     }
//     return buttons.map((buttonName) => (
//       <Button 
//         key={buttonName} 
//         onClick={() => handleButtonClick(buttonName)}
//         variant={activeButton === buttonName ? 'contained' : 'outlined'}
//         style={{ margin: '0 5px' }}
//       >
//         {buttonName}
//       </Button>
//     ));
//   };

//   return (
//     <Router basename="/app">
//       <div>
//         <div style={{ marginBottom: '20px' }}>
//           {renderButtons()}
//         </div>
//         {activeComponent}
//         <Drawer
//           anchor="left"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//         >
//           {list()}
//         </Drawer>
//       </div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login-details" element={<LoginDetails />} />
//         {userRole === 'App Administrator' && (
//           <>
//             {[...formsItems, ...viewsItems].map(item => (
//               <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//             ))}
//           </>
//         )}
//         {(userRole === 'Technician' || userRole === 'Inhouse') && (
//           <>
//             {viewsItems.map(item => (
//               <Route key={item.key} path={`/${item.label.toLowerCase().replace(/\s+/g, '-')}`} element={item.component} />
//             ))}
//           </>
//         )}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App; 














// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Button from '@mui/material/Button';

// // Import your components
// import Home from './components/Views/Home';
// import CustomerDetail from './components/Forms/CustomerDetail';
// import TechnicianDetail from './components/Forms/TechnicianDetail';
// import ProductMaster from './components/Forms/ProductMaster';
// import SparePartsAndStocks from './components/Forms/SparePartsAndStocks';
// import TicketCreation from './components/Forms/TicketCreation';
// import ViewCustomerDetails from './components/Views/ViewCustomerDetails';
// import ViewTicket from './components/Views/ViewTicket';
// import ViewTechnicianDetails from './components/Views/ViewTechnicianDetails';
// import ViewProduct from './components/Views/ViewProduct';
// import ViewInvoice from './components/Views/ViewInvoice';
// import ViewSpares from './components/Views/ViewSpares';
// import ViewScrap from './components/Views/ViewScrap';
// import ViewListOfSpares from './components/Views/ViewListOfSpares';
// import InhouseView from './components/Views/InhouseView';
// import LoginDetails from './components/Views/LoginDetails';
// import Dashboard from './components/Views/Dashboard';

// const App = () => {
//   const [userRole, setUserRole] = useState('');
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [activeComponent, setActiveComponent] = useState(<Home />); // Initialize with default component
//   const [activeButton, setActiveButton] = useState('Home'); // Initialize with default button

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

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const handleItemClick = (component) => {
//     setActiveComponent(component);
//     setDrawerOpen(false);
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
//     { key: '9', label: 'Inhouse View', component: <InhouseView /> },
//     { key: '10', label: 'Dashboard', component: <Dashboard /> },

//   ];

//   const getItems = () => {
//     switch (activeButton) {
//       case 'Forms':
//         return formsItems;
//       case 'Views':
//         return viewsItems;
//       case 'Profile':
//         return [{ key: 'profile', label: 'Login Details', component: <LoginDetails /> }];
//       default:
//         return [];
//     }
//   };

//   const handleButtonClick = (buttonName) => {
//     setActiveButton(buttonName);
//     if (buttonName === 'Home') {
//       setActiveComponent(<Home />);
//     } else if (buttonName === 'Profile') {
//       setActiveComponent(<LoginDetails />);
//     } else {
//       setDrawerOpen(true);
//     }
//   };

//   const list = () => (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         {getItems().map((item) => (
//           <ListItem key={item.key} disablePadding>
//             <ListItemButton onClick={() => handleItemClick(item.component)}>
//               <ListItemText primary={item.label} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const renderButtons = () => {
//     const buttons = ['Home', 'Views', 'Profile'];
//     if (userRole === 'App Administrator') {
//       buttons.splice(1, 0, 'Forms');
//     }
//     return buttons.map((buttonName) => (
//       <Button 
//         key={buttonName} 
//         onClick={() => handleButtonClick(buttonName)}
//         variant={activeButton === buttonName ? 'contained' : 'outlined'}
//         style={{ margin: '0 5px' }}
//       >
//         {buttonName}
//       </Button>
//     ));
//   };

//   return (
//     <Router basename="/app">
//       <div>
//         <div style={{ marginBottom: '20px' }}>
//           {renderButtons()}
//         </div>
//         {activeComponent}
//         <Drawer
//           anchor="left"
//           open={drawerOpen}
//           onClose={() => setDrawerOpen(false)}
//         >
//           {list()}
//         </Drawer>
//       </div>
//     </Router>
//   );
// };

// export default App;
