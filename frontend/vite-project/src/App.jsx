import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { PaginaPrincipal } from './pages/PaginaPrincipal'
import './App.css';
import { Productos} from './pages/Productos';
import IniciarSesion  from './pages/IniciarSesion'


function App() {

  return (
   <Router>
    <Header />
    <Routes>
    <Route path='/' element={<PaginaPrincipal/>}/>
    <Route path='/Productos' element={<Productos/>}/>
    <Route path='/IniciarSesion' element={<IniciarSesion/>}/>
     </Routes>
     <Footer />
   </Router>
  )
}

export default App
