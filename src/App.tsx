import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Booking from './pages/Booking';
import Footer from './components/common/Footer';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/booking/:id" element={<Booking />} />
        </Routes>
      </Router>
      <Footer /> 
    </div>
    
  );
}

export default App;

