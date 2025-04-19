import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contacts from './components/pages/Contacts';  
import AddContact from './components/pages/AddContact';  
import EditContact from './components/pages/EditContact';  
import ContactDetails from './components/pages/ContactDetails';  

function App() {
  return (
      
    <Router>
      <Routes>
      <Route path="/" element={<Contacts />} />

        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/add-contact" element={<AddContact />} />
        <Route path="/update-contact/:id" element={<EditContact />} />
        <Route path="/contact/:id" element={<ContactDetails />} />
      </Routes>
    </Router>
  );
}

export default App;



