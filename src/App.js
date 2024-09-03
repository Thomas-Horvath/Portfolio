import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Projects from './pages/ProjectPage/ProjectPage';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/info/:category" element={<Projects />} />
            <Route path="/blog/:id" element={<Projects />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </div>
  );
}

export default App;
