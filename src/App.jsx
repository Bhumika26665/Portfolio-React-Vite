import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Correct import for v6
import Home from './pages/homePage';
import About from './components/about'; // Example of another page
import ProjectDetail from './pages/ProjectDetail';
// import Preloader from './components/Preloader'; // Assuming you have a Preloader component

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading for 2 seconds (replace this with actual logic as needed)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time for example
  }, []);

  return (
    <BrowserRouter>
      {/* {loading && <Preloader />} */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />  {/* v6 uses 'element' instead of 'component' */}
          <Route path="/about" element={<About />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;