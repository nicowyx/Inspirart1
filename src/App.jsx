import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Perfil from './components/Perfil/Perfil';
import Digitais from './components/Artes Digitais/Digitais';
import Fisicas from './components/Artes Fisicas/Fisicas';
import Filmes from './components/Filmes/Filmes';
import Fotos from './components/Fotos/Fotos';
import Musicas from './components/Musicas/Musicas';
import Login2 from './components/Login2/Login2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Páginas principais */}
          <Route path="/" element={<Login />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/perfil" element={<Perfil />} />

          {/* Seções específicas */}
          <Route path="/home/filmes" element={<Filmes />} />
          <Route path="/home/musicas" element={<Musicas />} />
          <Route path="/home/fisicas" element={<Fisicas />} />
          <Route path="/home/digitais" element={<Digitais />} />
          <Route path="/home/fotos" element={<Fotos />} />

          {/* Rota dinâmica para capturar qualquer rota extra em "/home" */}
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
