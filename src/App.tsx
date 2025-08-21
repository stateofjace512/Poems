import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ArticlesHomePage from './pages/ArticlesHomePage';
import NotFound from './pages/NotFound';

// Import all song components
import TSTT from '/src/pages/page/TSTT';
import TNG from '/src/pages/page/TNG';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticlesHomePage />} />


        {/* Catch-all for unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
