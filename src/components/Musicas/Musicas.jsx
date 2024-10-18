import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Musicas/Musicas.css'; // Importando o CSS
import img1 from '../../assets/img-1.jpeg';
import img2 from '../../assets/img-2.jpeg';
import img3 from '../../assets/img-3.jpeg';
import img4 from '../../assets/img-4.jpeg';
import img5 from '../../assets/img-5.jpeg';
import img6 from '../../assets/img-6.jpeg';
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { FaComments } from "react-icons/fa";




function Musicas() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const showMessage = (action) => {
    alert('Você clicou em ' + action);
  };

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className='allMusicas'>
    <div className="-SCREen">
      <div className="-TOP-Bar">
        <div className="-PROFile-button" onClick={toggleMenu}></div>
        <div className="-MENU-container">
          <span>Rap</span>
          <span>Hip Hop</span>
          <span>Rock</span>
          <span>Funk</span>
          <span>Samba</span>
        </div>
      </div>

      {/* Menu Dropdown */}
      <div className={`-MENU ${isMenuVisible ? 'show' : 'hide'}`}>
        <Link to="Musicas">Musica</Link>
        <Link to="Filmes">Filme</Link>
        <Link to="Artes Digitais">Artes Digitais</Link>
        <Link to="Artes Fisicas">Artes Físicas</Link>
        <Link to="Fotos">Fotografis</Link>
        <Link to="Perfil">Perfil</Link>

        
      </div>

      <div className="-VIDEo-grid">
      {images.map((url, index) => (
    <div className="-VIDEo" key={index}>
      <img 
        src={url} 
        alt={index + 1} 
        style={{ width: '480px', height: '270px' }} 
      />
      
            <div className="-VIDEo-icons">
              <div onClick={() => showMessage('Comunidade')}>👥</div>
              <div onClick={() => showMessage('Curtir')}>❤️</div>
              <div onClick={() => showMessage('Seguir')}>⭐</div>
            </div>
          </div>
        ))}
      </div>

      <div className="-BOTTom-bar">
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

export default Musicas;