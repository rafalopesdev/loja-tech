import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './components/Produtos';
import Header from './components/Header';
import Footer from './components/Footer';
import Contato from './components/Contato';
import Produto from './components/Produto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />}></Route>
            <Route path="produto/:id" element={<Produto />}></Route>
            <Route path="contato" element={<Contato />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
