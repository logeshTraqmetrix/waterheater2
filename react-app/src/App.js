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

function App() {
  return (
    <div>

    {/* <CustomerDetail/> */}
    {/* <TechnicianDetail /> */}
    {/* <SparePartsAndStocks /> */}
    {/* <ProblemStatement /> */}
    {/* <FeedbackForm /> */}
    <InvoiceSubForm />
    
    {/* Image Included Forms */}
    {/* <ProductMaster /> */}
    {/* <ScrapInwardForm /> */}
    {/* <TicketCreation /> */}
    {/* <InvoiceForm /> */}

    { /*Reports*/}
    {/* <ViewCustomerDetails />
    <ViewTicket />
    <ViewTechnicianDetails />
    <ViewFeedback />
    <ViewProblem />
    <ViewLogs />
    <ViewProduct />
    <ViewInvoice />
    <ViewSpares />
    <ViewScrap />
    <ViewListOfSpares /> */}
    </div>
  );
}

export default App;
