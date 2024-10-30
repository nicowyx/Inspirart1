import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css';
import img1 from '../../assets/img-1.jpeg';
import img2 from '../../assets/img-2.jpeg';
import img3 from '../../assets/img-3.jpeg';
import img4 from '../../assets/img-4.jpeg';
import img5 from '../../assets/img-5.jpeg';
import img6 from '../../assets/img-6.jpeg';
import { FaHome, FaUserFriends, FaUsers, FaUser } from "react-icons/fa";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').slice(2); // Ignora "home" na URL

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isPostVisible, setIsPostVisible] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isCommunityVisible, setIsCommunityVisible] = useState(false);
  const [showDescription, setShowDescription] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [newPost, setNewPost] = useState({ description: '', user: '', file: null });
  const [notifications, setNotifications] = useState([]);

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);
  const toggleSearch = () => {
    closeAllModals();
    setIsSearchVisible(true);
  };
  const togglePost = () => {
    closeAllModals();
    setIsPostVisible(true);
  };
  const toggleNotification = () => {
    closeAllModals();
    setIsNotificationVisible(true);
  };
  const toggleCommunity = () => setIsCommunityVisible(!isCommunityVisible);

  const closeAllModals = () => {
    setIsSearchVisible(false);
    setIsPostVisible(false);
    setIsNotificationVisible(false);
    setIsCommunityVisible(false);
    setShowDescription({});
  };

  const images = [
    { src: img1, name: "Imagem 1", description: "Uma bela paisagem durante o pôr do sol.", user: "Usuário 1", info: "Criador apaixonado por fotografia." },
    { src: img2, name: "Imagem 2", description: "Uma impressionante obra de arte moderna.", user: "Usuário 2", info: "Artista contemporâneo." },
    { src: img3, name: "Imagem 3", description: "Um momento divertido em uma festa.", user: "Usuário 3", info: "Amante de festas." },
    { src: img4, name: "Imagem 4", description: "Uma imagem serena de uma floresta.", user: "Usuário 4", info: "Apaixonado pela natureza." },
    { src: img5, name: "Imagem 5", description: "Uma vista da cidade à noite.", user: "Usuário 5", info: "Fotógrafo urbano." },
    { src: img6, name: "Imagem 6", description: "Um evento esportivo emocionante.", user: "Usuário 6", info: "Fã de esportes." },
  ];

  const handleCaioClick = (index) => {
    setShowDescription((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleProfileClick = (user) => {
    alert(`Abrindo perfil de ${user}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePostChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setNewPost({ ...newPost, file: e.target.files[0] });
  };

  const handlePublish = () => {
    if (newPost.description && newPost.user) {
      const updatedImages = [...images, { ...newPost, src: img1, name: `Nova Imagem ${images.length + 1}` }];
      setNotifications(prev => [...prev, `Novo post de ${newPost.user}: ${newPost.name}`]); // Mudança aqui
      setNewPost({ description: '', user: '', file: null });
      closeAllModals();
      alert('Publicação feita com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const handleFollow = (user) => {
    setNotifications(prev => [...prev, `Você seguiu ${user}`]);
    alert(`Você seguiu ${user}`);
  };

  const handleLike = (name) => { // Mudança aqui
    setNotifications(prev => [...prev, `Você curtiu: ${name}`]); // Mudança aqui
    alert(`Você curtiu: ${name}`); // Mudança aqui
  };

  const filteredImages = images.filter(image => 
    image.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='all'>
      <div className="screen">
        <div className="top-bar">
          <div className="profile-button" onClick={toggleMenu}></div>
          <div className="menu-container"></div>
        </div>

        <div className={`menu ${isMenuVisible ? 'show' : 'hide'}`}>
          <Link to="Musicas">Música</Link>
          <Link to="Filmes">Filme</Link>
          <Link to="Artes Digitais">Artes Digitais</Link>
          <Link to="Artes Fisicas">Artes Físicas</Link>
          <Link to="Fotos">Fotografias</Link>
          <Link to="Perfil">Perfil</Link>
        </div>

        <div className="video-grid">
          {images.map((image, index) => (
            <div className="video" key={index} style={{ position: 'relative', margin: '10px' }}>
              <img
                src={image.src}
                alt={`Imagem ${index + 1}`}
                style={{ width: '480px', height: '270px', cursor: 'pointer' }}
                onClick={() => handleCaioClick(index)}
              />
              <div className="video-icons">
                <div onClick={toggleCommunity}>👥</div>
                <div onClick={() => handleFollow(image.user)}>✔️</div>
                <div onClick={() => handleLike(image.name)}>❤️</div> {/* Mudança aqui */}
                <div onClick={() => handleCaioClick(index)}>📰</div>
              </div>
              {showDescription[index] && (
                <div className="image-description" style={{ padding: '15px', backgroundColor: '#f9f9f9', border: '1px solid #ccc', borderRadius: '5px', marginTop: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                  <p style={{ margin: '0 0 10px' }}><strong>{image.name}</strong></p>
                  <p style={{ margin: '0 0 10px' }}><strong>Descrição:</strong> {image.description}</p>
                  <div style={{ borderTop: '1px solid #ddd', paddingTop: '10px' }}>
                    <span role="img" aria-label="usuario" style={{ cursor: 'pointer', color: 'blue' }} onClick={() => handleProfileClick(image.user)} title={image.info}>
                      😀 {image.user}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {(isSearchVisible || isPostVisible || isNotificationVisible) && (
          <div className="modal-overlay" style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
          }}>
            <div className="modal-content" style={{
              backgroundColor: '#fff', padding: '20px', borderRadius: '8px', width: '400px', boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>
              {isSearchVisible && (
                <>
                  <h2>Pesquisa</h2>
                  <input 
                    type="text" 
                    placeholder="Digite sua pesquisa..." 
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }} 
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <div className="search-results">
                    {filteredImages.map((image, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <img src={image.src} alt={`Imagem ${index}`} style={{ width: '80px', height: '45px', marginRight: '10px' }} />
                        <p>{image.description}</p>
                      </div>
                    ))}
                  </div>
                  <button style={{ padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' }}>Buscar</button>
                </>
              )}

              {isPostVisible && (
                <>
                  <h2>Publicar</h2>
                  <input 
                    type="text" 
                    name="user" 
                    placeholder="Seu nome..." 
                    value={newPost.user} 
                    onChange={handlePostChange} 
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }} 
                  />
                  <textarea 
                    name="description" 
                    placeholder="Escreva sua publicação..." 
                    value={newPost.description} 
                    onChange={handlePostChange} 
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }} 
                    rows="4"
                  />
                  <input type="file" onChange={handleFileChange} style={{ marginBottom: '10px' }} />
                  <button onClick={handlePublish} style={{ padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' }}>Publicar</button>
                </>
              )}

              {isNotificationVisible && (
                <>
                  <h2>Notificações</h2>
                  {notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                      <p key={index}>{notification}</p>
                    ))
                  ) : (
                    <p>Você não tem novas notificações.</p>
                  )}
                </>
              )}
              <button onClick={closeAllModals} style={{ marginTop: '10px', padding: '10px', backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '5px' }}>Fechar</button>
            </div>
          </div>
        )}

        <div className="bottom-bar">
          <FaHome />
          <CiSearch onClick={toggleSearch} />
          <FaPlus onClick={togglePost} />
          <CiBellOn onClick={toggleNotification} />
          <FaComments onClick={toggleCommunity} />
        </div>
      </div>
    </div>
  );
}

export default Home;
