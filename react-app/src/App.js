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







import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Segmented, Tabs } from 'antd';

// Import your components for views and forms
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
import InvoiceSubForm from './components/Forms/InvoiceSubForm.jsx';
import TicketCreation from './components/Forms/TicketCreation.jsx';
import ScrapInwardForm from './components/Forms/ScrapInwardForm';
import FeedbackForm from './components/Forms/FeedbackForm';
import ProblemStatement from './components/Forms/ProblemStatement';
import ProductMaster from './components/Forms/ProductMaster';
import SparePartsAndStocks from './components/Forms/SparePartsAndStocks';
import CustomerDetail from './components/Forms/CustomerDetail';
import TechnicianDetail from './components/Forms/TechnicianDetail';

const App = () => {
  const [selectedTab, setSelectedTab] = React.useState('Home');
  const [subTabItems, setSubTabItems] = React.useState([]);

  const handleSegmentedChange = (value) => {
    setSelectedTab(value);
    if (value === 'Forms') {
      setSubTabItems(formsItems);
    } else if (value === 'Views') {
      setSubTabItems(viewsItems);
    } else {
      setSubTabItems([]);
    }
  };

  const formsItems = [
    { key: '1', label: 'Customer Detail', component: <CustomerDetail /> },
    { key: '2', label: 'Technician Detail', component: <TechnicianDetail /> },
    { key: '3', label: 'Product Master', component: <ProductMaster /> },
    { key: '4', label: 'Spare Parts and Stocks', component: <SparePartsAndStocks /> },
    { key: '5', label: 'Problem Statement', component: <ProblemStatement /> },
    { key: '6', label: 'Feedback Form', component: <FeedbackForm /> },
    { key: '7', label: 'Scrap Inward Form', component: <ScrapInwardForm /> },
    { key: '8', label: 'Invoice Sub Form', component: <InvoiceSubForm /> },
    { key: '9', label: 'Ticket Creation', component: <TicketCreation /> },
    { key: '10', label: 'Invoice Form', component: <InvoiceForm /> }
  ];

  const viewsItems = [
    { key: '1', label: 'View Customer Details', component: <ViewCustomerDetails /> },
    { key: '2', label: 'View Ticket', component: <ViewTicket /> },
    { key: '3', label: 'View Technician Details', component: <ViewTechnicianDetails /> },
    { key: '4', label: 'View Feedback', component: <ViewFeedback /> },
    { key: '5', label: 'View Problem', component: <ViewProblem /> },
    { key: '6', label: 'View Logs', component: <ViewLogs /> },
    { key: '7', label: 'View Product', component: <ViewProduct /> },
    { key: '8', label: 'View Invoice', component: <ViewInvoice /> },
    { key: '9', label: 'View Spares', component: <ViewSpares /> },
    { key: '10', label: 'View Scrap', component: <ViewScrap /> },
    { key: '11', label: 'View List of Spares', component: <ViewListOfSpares /> }
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Router basename="/app">
      <div>
        <Segmented
          defaultValue="Home"
          style={{ marginBottom: 8 }}
          onChange={handleSegmentedChange}
          options={['Home', 'Forms', 'Views']}
        />
        {selectedTab === 'Home' && <h2>Welcome to Home</h2>}
        {selectedTab !== 'Home' && (
          <Tabs
            defaultActiveKey="1"
            items={subTabItems.map(item => ({
              key: item.key,
              label: item.label,
              children: item.component
            }))}
            onChange={onChange}
          />
        )}
      </div>
      <Routes>
        {/* Routes for forms */}
        <Route path="/forms/customer-detail" element={<CustomerDetail />} />
        <Route path="/forms/technician-detail" element={<TechnicianDetail />} />
        <Route path="/forms/product-master" element={<ProductMaster />} />
        <Route path="/forms/spare-parts-stocks" element={<SparePartsAndStocks />} />
        <Route path="/forms/problem-statement" element={<ProblemStatement />} />
        <Route path="/forms/feedback-form" element={<FeedbackForm />} />
        <Route path="/forms/scrap-inward-form" element={<ScrapInwardForm />} />
        <Route path="/forms/invoice-sub-form" element={<InvoiceSubForm />} />
        <Route path="/forms/ticket-creation" element={<TicketCreation />} />
        <Route path="/forms/invoice-form" element={<InvoiceForm />} />

        {/* Routes for views */}
        <Route path="/views/customer-details" element={<ViewCustomerDetails />} />
        <Route path="/views/ticket" element={<ViewTicket />} />
        <Route path="/views/technician-details" element={<ViewTechnicianDetails />} />
        <Route path="/views/feedback" element={<ViewFeedback />} />
        <Route path="/views/problem" element={<ViewProblem />} />
        <Route path="/views/logs" element={<ViewLogs />} />
        <Route path="/views/product" element={<ViewProduct />} />
        <Route path="/views/invoice" element={<ViewInvoice />} />
        <Route path="/views/spares" element={<ViewSpares />} />
        <Route path="/views/scrap" element={<ViewScrap />} />
        <Route path="/views/list-of-spares" element={<ViewListOfSpares />} />
      </Routes>
    </Router>
  );
};

export default App;
