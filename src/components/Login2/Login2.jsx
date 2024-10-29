import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importação do axios
import "./Login2.css";

function Login2() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("normal");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Dados a serem enviados para o backend
        const newUser = {
            name,
            email: username,
            phone,
            password,
            userType
        };

        try {
            // Envio da requisição de cadastro para o backend
            const response = await axios.post("http://localhost:8080/usuarios", newUser);
            if (response.status === 200) {
                alert("Usuário cadastrado com sucesso!");
                navigate('/Home');
            }
        } catch (error) {
            alert("Erro ao cadastrar usuário.");
            console.error("Erro:", error);
        }
    };

    return (
        <div className="bg-img">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Cadastrar</h1>

                    <div className="input-field">
                        <input 
                            type="text" 
                            placeholder='Nome' 
                            onChange={(e) => setName(e.target.value)} 
                        />
                        <FaUser className="icon" />
                    </div>

                    <div className="input-field">
                        <input 
                            type="email" 
                            placeholder='Email' 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                        <FaUser className="icon" />
                    </div>

                    <div className="input-field">
                        <input 
                            type="text" 
                            placeholder='Telefone' 
                            onChange={(e) => setPhone(e.target.value)} 
                        />
                    </div>

                    <div className="input-field">
                        <input 
                            type="password" 
                            placeholder='Senha' 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <FaLock className="icon" />
                    </div>  

                    <div className="user-type">
                        <label className={`user-option ${userType === "normal" ? "selected" : ""}`}>
                            <input 
                                type="radio" 
                                value="normal" 
                                checked={userType === "normal"} 
                                onChange={() => setUserType("normal")} 
                            />
                            Usuário Normal
                        </label>
                        <label className={`user-option ${userType === "vip" ? "selected" : ""}`}>
                            <input 
                                type="radio" 
                                value="vip" 
                                checked={userType === "vip"} 
                                onChange={() => setUserType("vip")} 
                            />
                            Usuário Artista
                        </label>
                    </div>

                    <div className="recall-forget">
                        <label>
                            <input type="checkbox" />
                            Lembre de mim
                        </label>
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                    
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login2;
