
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Perfil from './components/Perfil/Perfil'
import Digitais from './components/Artes Digitais/Digitais'
import Fisicas from './components/Artes Fisicas/Fisicas'
import Filmes from './components/Filmes/Filmes'
import Fotos from './components/Fotos/Fotos'
import Musicas from './components/Musicas/Musicas'
import Login2 from './components/Login2/Login2'



function App() {

  return (
    <div className="App">
         <BrowserRouter>
           <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/Login2' element={<Login2/>}/>
              <Route path='/Home' element={<Home/>}/>
              <Route path='/Home/Perfil' element={<Perfil/>}/>
              
              
              <Route path='/Home/Filmes' element={<Filmes/>}/>
              <Route path='/Home/Artes Fisicas/Filmes' element={<Filmes/>}/>
              <Route path='/Home/Musicas/Filmes' element={<Filmes/>}/>
              <Route path='/Home/Artes Digitais/Filmes' element={<Filmes/>}/>
              <Route path='/Home/Fotos/Filmes' element={<Filmes/>}/>

              <Route path='/Home/Musicas' element={<Musicas/>}/>
              <Route path='/Home/Artes Fisicas/Musicas' element={<Musicas/>}/>
              <Route path='/Home/Artes Digitais/Musicas' element={<Musicas/>}/>
              <Route path='/Home/Filmes/Musicas' element={<Musicas/>}/>
              <Route path='/Home/Fotos/Musicas' element={<Musicas/>}/>

              <Route path='/Home/Artes Fisicas' element={<Fisicas/>}/>
              <Route path='/Home/Artes Digitais/Artes Fisicas' element={<Fisicas/>}/>
              <Route path='/Home/Musicas/Artes Fisicas' element={<Fisicas/>}/>
              <Route path='/Home/Filmes/Artes Fisicas' element={<Fisicas/>}/>
              <Route path='/Home/Fotos/Artes Fisicas' element={<Fisicas/>}/>

              <Route path='/Home/Artes Digitais' element={<Digitais/>}/>
              <Route path='/Home/Artes Fisicas/Artes Digitas' element={<Digitais/>}/>
              <Route path='/Home/Musicas/Artes Digitais' element={<Digitais/>}/>
              <Route path='/Home/Filmes/Artes Digitais' element={<Digitais/>}/>
              <Route path='/Home/Fotos/Artes Digitas' element={<Digitais/>}/>

              <Route path='/Home/Fotos' element={<Fotos/>}/>
              <Route path='/Home/Artes Fisicas/Fotos' element={<Fotos/>}/>
              <Route path='/Home/Musicas/Fotos' element={<Fotos/>}/>
              <Route path='/Home/Filmes/Fotos' element={<Fotos/>}/>
              <Route path='/Home/Artes Digitais/Fotos' element={<Fotos/>}/>
           </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App
