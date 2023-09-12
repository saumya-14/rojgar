
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Rojgar from './Components/ChatBot/Rojgar';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes, // Import Routes
  Route,
} from 'react-router-dom';
function App() {
  return (
   <>
   <Router>
   <Navbar/>
   <Routes>
   <Route path="/about" element={<About/>} />
   <Route path="/rojgar" element={<Rojgar/>} />
   </Routes>
   </Router>
   
   </>
  );
}

export default App;
