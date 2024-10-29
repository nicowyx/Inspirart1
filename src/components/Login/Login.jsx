import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Para fazer a requisição ao backend
import "./Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Função de autenticação
    async function handleSubmit(event) {
        event.preventDefault();

        try {
            // Envia os dados de login para a API
            const response = await axios.post("http://localhost:8080/usuarios/login", {
                email: username,
                senha: password
            });

            // Verifica se o login foi bem-sucedido
            if (response.status === 200) {
                alert("Login bem-sucedido!");
                navigate('/Home'); // Redireciona para a página inicial
            }
        } catch (error) {
            alert("Erro no login: Verifique suas credenciais.");
            console.error("Erro de autenticação:", error);
        }
    }

    return (
        <div className="bg-img">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Acesse o sistema</h1>

                    <div className="input-field">
                        <input
                            type="email"
                            placeholder='Email'
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <FaUser className="icon" />
                    </div>

                    <div className="input-field">
                        <input
                            type="password"
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <FaLock className="icon" />
                    </div>

                    <div className="recall-forget">
                        <label>
                            <input type="checkbox" />
                            Lembre de mim
                        </label>
                        <a href="#">Esqueceu a senha?</a>
                    </div>

                    <button type="submit">Entrar</button>

                    <div className="signup-link">
                        <p>Não tem uma conta? <a href="Login2">Registrar</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
