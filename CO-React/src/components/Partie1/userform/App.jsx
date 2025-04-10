import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './components/userform/UserForm';
import DisplayCard from './components/userform/DisplayCard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route path="/display" element={<DisplayCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;