import Logo from '../images/logo-Florescer.png'
import IconHome from '../images/icon-home.png'
import IconSobre from '../images/icon-sobre.png'
import IconUnidades from '../images/icon-unidades.png'
import IconLogin from '../images/icon-login.png'
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
            <nav>
                <Link to='/'><img src={IconHome} alt="" width={40}/>Home</Link>
                <Link to='/sobre'><img src={IconSobre} alt="" width={40}/>Sobre</Link>
                <Link to='/unidades'><img src={IconUnidades} alt="" width={40}/>Unidades</Link>
                <Link to='/login'><img src={IconLogin} alt="" width={40}/>Login</Link>
            </nav>

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