import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Fotos/Fotos.css'; // Importando o CSS
import Foto1 from '../../assets/Foto1.jpg'
import Foto2 from '../../assets/Foto2.avif'
import Foto3 from '../../assets/Foto3.jpg'
import Foto4 from '../../assets/Foto4.png'
import Foto5 from '../../assets/Foto5.jpg'
import Foto6 from '../../assets/Foto6.jpeg'
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { FaComments } from "react-icons/fa";




function Fotos() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const showMessage = (action) => {
    alert('Você clicou em ' + action);
  };

  const images = [Foto1,Foto2,Foto3,Foto4,Foto5,Foto6];

  return (
    <div className='allFotos'>
    <div className="-SCReen">
      <div className="-TOP-bar">
        <div className="-PROfile-button" onClick={toggleMenu}></div>
        <div className="-MENu-container">
                <span>Terror</span>
                <span>Comedia</span>
                <span>Drama</span>
                <span>Ação </span>
                <span>Ficção</span>
        </div>
      </div>

      {/* Menu Dropdown */}
      <div className={`-MENu ${isMenuVisible ? 'show' : 'hide'}`}>
        <Link to="Musicas">Musica</Link>
        <Link to="Filmes">Filme</Link>
        <Link to="Artes Digitais">Artes Digitais</Link>
        <Link to="Artes Fisicas">Artes Físicas</Link>
        <Link to="Fotos">Fotografis</Link>
        <Link to="Perfil">Perfil</Link>
        
      </div>

      <div className="-VIDeo-grid">
      {images.map((url, index) => (
    <div className="-VIDeo" key={index}>
      <img 
        src={url} 
        alt={index + 1} 
        style={{ width: '480px', height: '270px' }} 
      />
      
            <div className="-VIDeo-icons">
              <div onClick={() => showMessage('Comunidade')}>👥</div>
              <div onClick={() => showMessage('Curtir')}>❤️</div>
              <div onClick={() => showMessage('Seguir')}>⭐</div>
            </div>
          </div>
        ))}
      </div>

      <div className="-BOTtom-bar">
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

export default Fotos;