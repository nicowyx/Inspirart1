import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Login2.css";

function Login2() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("normal");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        console.log("Nome:", name);  // Verifique o valor do nome aqui
    
        const newUser = {
            nome: name, // Use 'nome' ao invés de 'name' para corresponder ao modelo
            email: username,
            senha: password,
            userType
        };

        try {
            const response = await axios.post("http://localhost:8080/usuarios", newUser);
            if (response.status === 201) {
                alert("Usuário cadastrado com sucesso!");
                navigate('/');
            }
        } catch (error) {
            // Logando o erro completo
            console.error("Erro:", error);
            if (error.response) {
                console.error("Dados do erro do servidor:", error.response.data);
                alert("Erro ao cadastrar usuário: " + (error.response.data.message || error.response.data));
            } else if (error.request) {
                console.error("Erro na requisição:", error.request);
                alert("Erro ao cadastrar usuário: Não houve resposta do servidor.");
            } else {
                console.error("Erro ao configurar a requisição:", error.message);
                alert("Erro ao cadastrar usuário: " + error.message);
            }
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
                            value={name}              
                            onChange={(e) => setName(e.target.value)} 
                            required
                        />
                        <FaUser className="icon" />
                    </div>

                    <div className="input-field">
                        <input 
                            type="email" 
                            placeholder='Email' 
                            value={username}          
                            onChange={(e) => setUsername(e.target.value)} 
                            required
                        />
                        <FaUser className="icon" />
                    </div>

                    <div className="input-field">
                        <input 
                            type="password" 
                            placeholder='Senha' 
                            value={password}          
                            onChange={(e) => setPassword(e.target.value)} 
                            required
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
                    
                    <button type="submit" >Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login2;
