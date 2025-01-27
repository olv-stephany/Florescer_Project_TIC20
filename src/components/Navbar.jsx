import Logo from '../images/logo-Florescer.png'
import Sobre from '../components/sobre'
import Login from '../components/login'
import Unidades from '../pages/unidades'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'

function Navbar () {
    return(
        <>
        <Router>
            <nav>
                <Link to='/' className='home'>Home</Link>
                <Link to='/sobre' className='sobre'>Sobre</Link>
                <Link to='/unidades' className='unidades'>Unidades</Link>
                <Link to='/login' className='login'>Login</Link>
            </nav>

            <img src={Logo} width={300} height={300} alt="" />

            <Routes>
                <Route path='/' element={<home/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/unidades' element={<Unidades/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
            <h1>Seu psicólogo a qualquer hora, em qualquer lugar.</h1>
            <Link to='/unidades'><button type='click'>Buscar Ajuda Agora</button></Link>
        </Router>
        </>
    )
}

export default Navbar;