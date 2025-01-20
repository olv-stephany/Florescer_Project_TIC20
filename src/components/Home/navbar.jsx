import './navbar.css'
import { Link } from 'react-router-dom';
import Logo from './images/logo-florescer.png'

export default function navbar() {
    return (
        <>
            <div>
                <img src={Logo} width={80} height={80} alt="" />
                <h1>Florescer</h1>
                <ul className='abas-container'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/unidades">Unidades</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
            <hr />
            <button type='click'><Link to="/unidades">Buscar Ajuda Agora</Link></button>
        </>
    )
}
