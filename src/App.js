import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Features from './components/Features';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Product from './components/Product';


function App() {
  return (
    <Router>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/features" element={<Features />} /> 
          <Route path="/product" element={<Product />} />   
          <Route path="/contact" element={<Contact />}/>
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </Router>
    );
}

export default App;
