import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Features from './components/Features';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Product from './components/Product';
import Footer from './components/Footer';
import Video from './Video/IntroVideo.mp4';


function App() {
  
  const [videoPlayed, setVideoPlayed] = useState(true);

  const handleVideoEnd = () => {
    setVideoPlayed(false);
  }
  return (
    <div className="appContainer">
    {videoPlayed ? (
      <div className={`videoPlayer ${videoPlayed ? '' : 'hidden'}`}>
        <video 
        src={Video}
        muted
        autoPlay
        onEnded={handleVideoEnd} 
        className="actualVideo"
        />
      </div>
    ) :
    (<Router className={`routerContent ${videoPlayed ? 'visible' : ''}`}>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/features" element={<Features />} /> 
          <Route path="/product" element={<Product />} />   
          <Route path="/contact" element={<Contact />}/>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
    </Router>)}
    </div>
    );
}

export default App;
