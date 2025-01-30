/* nav bar alterações */
import Logo from '../images/logo-Florescer.png'
import IconHome from '../images/icon-home.png'
import IconSobre from '../images/icon-sobre.png'
import IconUnidades from '../images/icon-unidades.png'
import IconLogin from '../images/icon-login.png'
import '../css/Navbar.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

  const handleAnchorClick = (section) => {
    navigate("/"); 
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

    return (
        <>
        <div className="navbar-container">
            <nav className="navbar">
                <Link to='/'><img src={IconHome} alt="" width={40} />Home</Link>
                <a href='#Sobre' onClick={() => handleAnchorClick("Sobre")}><img src={IconSobre} alt="" width={40}/>Sobre</a>
                <Link to='/unidades'><img src={IconUnidades} alt="" width={40} />Unidades</Link>
                <a href='#login' onClick={() => handleAnchorClick("login")}><img src={IconLogin} alt="" width={40}/>Login</a>
            </nav>
            <img src={Logo} width={300} height={300} alt="" />
            <h1 className='navbartext'>Seu psicólogo a qualquer hora, em qualquer lugar.</h1>
            <Link to='/unidades'><button type='click' className='navbarbotton'>Buscar Ajuda Agora</button></Link>
        </div>
        </>
    )
}

export default Navbar;