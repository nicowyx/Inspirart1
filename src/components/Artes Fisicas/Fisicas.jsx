import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Artes Fisicas/Fisicas.css'; // Importando o CSS
import img4 from '../../assets/img-4.jpeg';
import Fisi1 from '../../assets/Fisi1.jpeg';
import Fisi2 from '../../assets/Fisi2.jpeg';
import Fisi3 from '../../assets/Fisi3.jpeg';
import Fisi5 from '../../assets/Fisi5.jpeg';
import Fisi6 from '../../assets/Fisi6.jpeg';
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { FaComments } from "react-icons/fa";




function Fisicas() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const showMessage = (action) => {
    alert('Você clicou em ' + action);
  };

  const images = [Fisi1,Fisi2,Fisi3,img4,Fisi5,Fisi6];

  return (
    <div className='allFisicas'>
    <div className="-Screen">
      <div className="-Top-bar">
        <div className="-Profile-button" onClick={toggleMenu}></div>
        <div className="-Menu-container">
                <span>Abstrato</span>
                <span>De Rua</span>
                <span>Releitura</span>
                <span>Realidade </span>
                <span>Cartoon</span>
        </div>
      </div>

      {/* Menu Dropdown */}
      <div className={`-Menu ${isMenuVisible ? 'show' : 'hide'}`}>
        <Link to="Musicas">Musica</Link>
        <Link to="Filmes">Filme</Link>
        <Link to="Artes Digitais">Artes Digitais</Link>
        <Link to="Artes Fisicas">Artes Físicas</Link>
        <Link to="Fotos">Fotografis</Link>
        <Link to="Perfil">Perfil</Link>

        
      </div>

      <div className="-Video-grid">
      {images.map((url, index) => (
    <div className="-Video" key={index}>
      <img 
        src={url} 
        alt={index + 1} 
        style={{ width: '480px', height: '270px' }} 
      />
      
            <div className="-Video-icons">
              <div onClick={() => showMessage('Comunidade')}>👥</div>
              <div onClick={() => showMessage('Curtir')}>❤️</div>
              <div onClick={() => showMessage('Seguir')}>⭐</div>
            </div>
          </div>
        ))}
      </div>

      <div className="-Bottom-bar">
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

export default Fisicas;