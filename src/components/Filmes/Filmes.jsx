import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Filmes/Filmes.css'; // Importando o CSS
import Filme1 from '../../assets/Filme1.jpg';
import Filme2 from '../../assets/Filme2.jpg';
import Filme3 from '../../assets/Filme3.webp';
import Filme4 from '../../assets/Filme4.webp';
import Filme5 from '../../assets/Filme5.jpeg';
import Filme6 from '../../assets/Filme6.jpeg';
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { FaComments } from "react-icons/fa";




function Filmes() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const showMessage = (action) => {
    alert('Você clicou em ' + action);
  };

  const images = [Filme1,Filme2,Filme3,Filme4,Filme5,Filme6];

  return (
    <div className='allFilmes'>
    <div className="-SCreen">
      <div className="-TOp-bar">
        <div className="-PRofile-button" onClick={toggleMenu}></div>
        <div className="-MEnu-container">
                <span>Terror</span>
                <span>Comedia</span>
                <span>Drama</span>
                <span>Ação </span>
                <span>Ficção</span>
        </div>
      </div>

      {/* Menu Dropdown */}
      <div className={`-MEnu ${isMenuVisible ? 'show' : 'hide'}`}>
        <Link to="Home/Musicas">Musica</Link>
        <Link to="Filmes">Filme</Link>
        <Link to="Artes Digitais">Artes Digitais</Link>
        <Link to="Artes Fisicas">Artes Físicas</Link>
        <Link to="Fotografis">Fotografis</Link>
        <Link to="Perfil">Perfil</Link>

        
      </div>

      <div className="-VIdeo-grid">
      {images.map((url, index) => (
    <div className="-VIdeo" key={index}>
      <img 
        src={url} 
        alt={index + 1} 
        style={{ width: '480px', height: '270px' }} 
      />
      
            <div className="-VIdeo-icons">
              <div onClick={() => showMessage('Comunidade')}>👥</div>
              <div onClick={() => showMessage('Curtir')}>❤️</div>
              <div onClick={() => showMessage('Seguir')}>⭐</div>
            </div>
          </div>
        ))}
      </div>

      <div className="-BOttom-bar">
      <Link to="/Home"><FaHome /></Link>
        <CiSearch />
        <FaPlus />
        <CiBellOn />
        <FaComments />

      </div>
    </div>
    </div>
  );
}

export default Filmes;