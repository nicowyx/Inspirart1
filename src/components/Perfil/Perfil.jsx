import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Perfil/Perfil.css'; // Importando o CSS
import { FaHome, FaPlus, FaComments } from "react-icons/fa";
import { CiSearch, CiBellOn } from "react-icons/ci";
import img1 from '../../assets/img-1.jpeg';
import img2 from '../../assets/img-2.jpeg';
import img3 from '../../assets/img-3.jpeg';
import img4 from '../../assets/img-4.jpeg';
import img5 from '../../assets/img-5.jpeg';
import img6 from '../../assets/img-6.jpeg';

function Perfil() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const images = [img1, img2, img3, img4, img5, img6];

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const showMessage = (action) => {
    alert('Você clicou em ' + action);
  };

  return (
    <div className='all'>
      <div className="screen">
        <div className="top-bar">
          <div className="Perfil-button"></div>
          <div className="menu-container">
            {/* Adicione aqui o conteúdo do menu, se necessário */}
          </div>
        </div>

        <div className='user'>
          <div className='content-user'>
            <h1>
              <strong>Bio:</strong><br />
              <hr />
              Inverso<br />
              Artista<br />
              TACA TINTA NESSE CINZA<br />
              SP/ZO 📍<br />
              Disponível para:<br />
              Encomendas | Grafite/muralismo | Design<br />
              Contato: 11974461940
            </h1>
            <div className='publicacao'>
              <div className='content-publicacao'>
                <span>Publicações</span>
                <hr />
                <div className="video-grid">
                  {images.map((url, index) => (
                    <div className="video" key={index}>
                      <img 
                        src={url} 
                        alt={`Imagem ${index + 1}`} 
                        style={{ width: '480px', height: '270px' }} 
                      />
                      <div className="video-icons">
                        <div onClick={() => showMessage('Comunidade')}>👥</div>
                        <div onClick={() => showMessage('Curtir')}>❤️</div>
                        <div onClick={() => showMessage('Seguir')}>⭐</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-bar">
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

export default Perfil;
