import Logo from './Home/images/logo-Florescer.png'
import Sobre from './Home/sobre'
import Login from './Home/login'
import Unidades from './Other_Pages/unidades'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar () {
    return(
        <>
        <img src={Logo} width={80} height={80} alt="" />
        <h1>Florescer</h1>
        <Router>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/unidades'>Unidades</Link>
                <Link to='/login'>Login</Link>
            </nav>

            <Routes>
                <Route path='/' element={<home/>}/>
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/unidades' element={<Unidades/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </Router>
        <button type='click'>Buscar Ajuda Agora</button>
        </>
    )
}

export default Navbar;