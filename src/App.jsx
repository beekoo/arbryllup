import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage';
import PlaceStayPage from './pages/PlaceStayPage';


function App() {

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [imageSrc, setImageSrc] = useState('/arbryllup/img/compressed_tre.jpeg');

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth <= 768) {
        setImageSrc('/arbryllup/img/compressed_en.jpeg');
      } else {
        setImageSrc('/arbryllup/img/compressed_tre.jpeg');
      }
    };

    
    updateImage();

    window.addEventListener('resize', updateImage);

    
    return () => window.removeEventListener('resize', updateImage);
  }, []);

  return (
    <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <div className='main-container'>
            
            <section className="left-sec">
              <img src={imageSrc} alt="couple" className="weddingImg" />
              <div className="left-text">
                <h1>Aslak & Ragnhild</h1>
                <p>Me gifte oss!</p>
              </div>
            </section>

            <section className='right-sec'>
              <Routes>
                <Route path="/" element={<HomePage isLargeScreen={isLargeScreen} />} />
                <Route path="/program" element={<SchedulePage isLargeScreen={isLargeScreen} />} />
                <Route path="/opphold" element={<PlaceStayPage isLargeScreen={isLargeScreen} />} />
              </Routes>
            </section>
          </div>
        </div>
    </BrowserRouter>
    
  )
}

export default App;
