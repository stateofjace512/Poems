import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ArticlesHomePage from './pages/ArticlesHomePage';
import NotFound from './pages/NotFound';
import TNGFixer from './components/TNGFixer';

// Import all song components
import TSTT from './pages/page/TSTT.jsx';
import TNG from './pages/page/TNG.jsx';

function App() {
  return (
    <BrowserRouter>
      <TNGFixer />
      <Routes>
        <Route path="/" element={<ArticlesHomePage />} />
        <Route path="/page/tng/" element={<TNG />} />
        <Route path="/page/tstt/" element={<TSTT />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
