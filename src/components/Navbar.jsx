import Logo from '../images/logo-Florescer.png'
import Sobre from '../components/sobre'
import Login from '../components/login'
import Unidades from '../pages/unidades'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar () {
    return(
        <>
        <img src={Logo} width={300} height={300} alt="" />
        <h1>Seu psicólogo a qualquer hora, em qualquer lugar.
        </h1>
        <Router>
        <div className="navbar-container">
        <nav className="navbar">
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/unidades'>Unidades</Link>
                <Link to='/login'>Login</Link>
            </nav>
            </div>

            <Routes>
                <Route path='/' element={<home/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/unidades' element={<Unidades/>}/>
                <Route path='/login' element={<Login/>}/>    
            </Routes>

            <Link to='/unidades'><button type='click'>Buscar Ajuda Agora</button></Link>
        </Router>
        </>
        
    )
}

export default Navbar;