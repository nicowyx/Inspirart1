import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Perfil/Perfil.css';

function Perfil() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        idUsuario: null,
        nome: '',
        email: '',
        senha: '',
        bio: '', // Inicializa com string vazia
    });

    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem('usuarioLogado'));
        if (storedUserData && storedUserData.idUsuario) {
            loadUserData(storedUserData.idUsuario);
        } else {
            alert('Nenhum usuário logado encontrado. Você será redirecionado para a página de login.');
            navigate('/');
        }
    }, [navigate]);

    const loadUserData = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:8080/usuarios/${userId}`);
            // Garante que todos os campos do usuário estão definidos
            setUserData({
                idUsuario: response.data.idUsuario || null,
                nome: response.data.nome || '',
                email: response.data.email || '',
                senha: response.data.senha || '',
                bio: response.data.bio || '', // Define como string vazia se for undefined
            });
        } catch (error) {
            console.error('Erro ao carregar as informações do usuário:', error);
            alert('Erro ao carregar as informações do usuário.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        try {
            if (userData.idUsuario) {
                const response = await axios.put(`http://localhost:8080/usuarios/${userData.idUsuario}`, userData);
                localStorage.setItem('usuarioLogado', JSON.stringify(response.data));
                alert('Perfil atualizado com sucesso!');
            } else {
                alert('Erro ao carregar as informações do usuário. ID do usuário não encontrado.');
            }
        } catch (error) {
            console.error('Erro ao atualizar perfil:', error);
            alert('Erro ao atualizar perfil.');
        }
    };

    const handleDelete = async () => {
        try {
            if (userData.idUsuario) {
                await axios.delete(`http://localhost:8080/usuarios/${userData.idUsuario}`);
                alert('Usuário deletado com sucesso.');
                localStorage.removeItem('usuarioLogado');
                navigate('/');
            } else {
                alert('Erro ao deletar usuário. ID do usuário não encontrado.');
            }
        } catch (error) {
            console.error('Erro ao deletar usuário:', error.response ? error.response.data : error.message);
            alert('Erro ao deletar usuário: ' + (error.response && error.response.data ? error.response.data : error.message));
        }
    };

    return (
        <div className='perfil'>
            <div className="perfil-container">
                <h2>Meu Perfil</h2>
                <div className="perfil-info">
                    <div className="info-item">
                        <label>Nome:</label>
                        <input type="text" name="nome" value={userData.nome || ''} onChange={handleChange} />
                    </div>
                    <div className="info-item">
                        <label>Email:</label>
                        <input type="email" name="email" value={userData.email || ''} onChange={handleChange} />
                    </div>
                    <div className="info-item">
                        <label>Senha:</label>
                        <input type="password" name="senha" value={userData.senha || ''} onChange={handleChange} />
                    </div>
                    <div className="info-item">
                        <label>Bio:</label>
                        <textarea name="bio" value={userData.bio || ''} onChange={handleChange} />
                    </div>
                    <button className="save-button" onClick={handleSave}>Salvar Alterações</button>
                    <button className="save-button" onClick={handleDelete} style={{ backgroundColor: '#dc3545', marginTop: '10px' }}>Deletar Conta</button>
                </div>
            </div>
        </div>
    );
}

export default Perfil;
