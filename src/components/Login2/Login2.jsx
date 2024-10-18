import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login2.css";

function Login2() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("normal"); // Tipo de usuário
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Enviando os Dados: " + name + ", " + username + ", " + phone + ", " + password + ", Tipo: " + userType);
        handleNavigate();
    };

    const handleNavigate = () => {
        navigate('/Home');
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
                            type="tel" 
                            placeholder='Telefone' 
                            onChange={(e) => setPhone(e.target.value)} 
                        />
                        <FaUser className="icon" />
                    </div>
                    
                    <div className="input-field">
                        <input 
                            type="password" 
                            placeholder='Senha' 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <FaLock className="icon" />
                    </div>  

                  {/* Opção de tipo de usuário */}
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

                    <div className="signup-link">
                          
                    </div> 
                </form>
            </div>
        </div>
    );
}

export default Login2;
