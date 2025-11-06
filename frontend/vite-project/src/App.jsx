import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { PaginaPrincipal } from './pages/PaginaPrincipal'
import './App.css';
import { Productos} from './pages/Productos';
import IniciarSesion  from './pages/IniciarSesion'
import { Carrito } from './pages/Carrito';
import { CuidadoPersonal } from './pages/CuidadoPersonal';
import  Registrarse from './pages/Registrarse';


function App() {
  
  return (
   
   <Router>
    <Header />
    <Routes>
    <Route path='/' element={<PaginaPrincipal/>}/>
    <Route path='/Productos' element={<Productos/>}/>
    <Route path='/IniciarSesion' element={<IniciarSesion/>}/>
    <Route path='/Carrito' element={<Carrito/>}/>
    <Route path='/CuidadoPersonal' element={<CuidadoPersonal/>}/>
     <Route path='/Registrarse' element={<Registrarse/>}/>
     </Routes>
     <Footer />
   </Router>
  )
}

export default App
