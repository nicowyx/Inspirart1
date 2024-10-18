import {FaUser, FaLock} from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./Login.css";

function Login () {

    const [username, setUsername] = useState("")
     const [password, setPassword] = useState("")

     function handleSubmit ()  {
        event.preventDefault();
        
        alert("Enviando os Dados:" + username + " - " + password);
     };




  {/*navegaçao entre as paginas atraves do botao*/}
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Home');
  };


  
  {/*funçao criada para o botao conseguir fazer as duas coisas ao mesmo tempo*/}
  const chamarAmbasFuncoes = () =>{
     handleSubmit();
     handleNavigate();
  }


  return (
    <div className="bg-img">
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>
            
            <div className="input-field">
                <input type="email" placeholder='Email' 
                onChange={(e) => setUsername(e.target.value)}/>
                <FaUser className="icon"/>
            </div>
            
            <div className="input-field">
                <input type="password" placeholder='Password' 
                onChange={(e) => setPassword(e.target.value)} />
                <FaLock className="icon"/>
            </div>  

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>
            
            {/*Botao "Entrar", linkado com a página 'Home'*/}
            <button onClick={chamarAmbasFuncoes}>Entrar</button> 

            <div className="signup-link">
                 <p>
                     Nao tem uma conta? <a href="Login2">Registrar</a>    
                     </p>
                   

            </div> 

            
                  
        </form>
    </div>
    </div>
  )
}

export default Login
