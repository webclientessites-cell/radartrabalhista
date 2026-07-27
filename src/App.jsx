import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Home from './pages/Home';
import Bancarios from './pages/Bancarios';
import Farmacia from './pages/Farmacia';
import Acidentes from './pages/Acidentes';
import Comercio from './pages/Comercio';
import Industria from './pages/Industria';
import Agro from './pages/Agro';
import Servicos from './pages/Servicos';
import Saude from './pages/Saude';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bancarios" element={<Bancarios />} />
          <Route path="/farmacia" element={<Farmacia />} />
          <Route path="/acidentes" element={<Acidentes />} />
          <Route path="/comercio" element={<Comercio />} />
          <Route path="/industria" element={<Industria />} />
          <Route path="/agro" element={<Agro />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/saude" element={<Saude />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
