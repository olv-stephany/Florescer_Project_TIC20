import React, { useState } from 'react';
import '../css/login.css';
import Image from '../images/image-login-app.png';
import Image2 from '../images/image-login-app2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAddressCard, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook, faSkype, faTelegram } from '@fortawesome/free-brands-svg-icons';

export default function Login() {
  
  const [activeClass, setActiveClass] = useState(false);

  const handleProfissionalClick = () => {
    setActiveClass(true);
  };

  const handlePacienteClick = () => {
    setActiveClass(false);
  };

  return (
    <div className={`main-container ${activeClass ? 'active' : ''}`}>

      <div className="login-container">
        <form className="login-box">
          <h1>Pacientes</h1>
          <div className="input-box">
            <FontAwesomeIcon icon={faUser} style={{ marginTop: '10px', marginRight: '5px', fontSize: '20px', color:'#7fb6cb' }} />
            <input type="email" id="Email" placeholder="Digite seu email aqui" required />
          </div>
          <div className="input-box">
            <FontAwesomeIcon icon={faLock} style={{ marginTop: '10px', marginRight: '5px', fontSize: '20px', color:'#7fb6cb'}} />
            <input type="password" id="senha" placeholder="Digite sua senha aqui" required />
          </div>
          <button type="button" className="btn-style">
            <a href="#" style={{ textDecoration: 'none' }}>Confirmar</a>
          </button>
          <p>ou faça login com uma dessas plataformas.</p>
          <div className="login-button">
            <button><FontAwesomeIcon icon={faGoogle} style={{ fontSize: '20px' }} /></button>
            <button><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '20px' }} /></button>
            <button><FontAwesomeIcon icon={faSkype} style={{ fontSize: '20px' }} /></button>
            <button><FontAwesomeIcon icon={faTelegram} style={{ fontSize: '20px' }} /></button>
          </div>
        </form>
      </div>

      <div className="profissionais-login">
        <div className="login-container">
          <form className="login-box">
            <h1>Profissionais</h1>
            <div className="input-box">
              <FontAwesomeIcon icon={faAddressCard} style={{ marginTop: '10px', marginRight: '5px', fontSize: '20px', color:'#7fb6cb' }} />
              <input type="text" id="Cpf" placeholder="Digite seu CPF aqui" required />
            </div>
            <div className="input-box">
              <FontAwesomeIcon icon={faUser} style={{ marginTop: '10px', marginRight: '5px', fontSize: '20px', color:'#7fb6cb' }} />
              <input type="email" id="Email" placeholder="Digite seu email aqui" required />
            </div>
            <div className="input-box">
              <FontAwesomeIcon icon={faLock} style={{ marginTop: '10px', marginRight: '5px', fontSize: '20px', color:'#7fb6cb' }} />
              <input type="password" id="senha" placeholder="Digite sua senha aqui" required />
            </div>
            <button type="button" className="btn-style">
              <a href="#" style={{ textDecoration: 'none' }}>Confirmar</a>
            </button>
          </form>
        </div>
      </div>

      <div className={`welcome-container ${activeClass ? 'active' : ''}`}>
        <div className="toggle-panel toggle-left">
          <h2>Bem vindo(a) de volta</h2>
          <img src={Image} width={300} style={{marginBottom:'10px'}} alt="login" />
          <p>Não possui um cadastro?
            <button className="btn-welcome-side"><a href="#" style={{ textDecoration: 'none', color: '#fff' }}> Cadastre-se aqui.</a></button>
          </p>
          <p>É um profissional?
            <button type="button" className="btn-welcome-side" onClick={handleProfissionalClick}>
            Clique aqui.
            </button>
          </p>
        </div>

        <div className="toggle-panel toggle-right">
          <h2>Olá, Bem vindo(a) de volta!</h2>
          <img src={Image2} width={250} style={{marginBottom:'10px'}} alt="login" />
          <p>Não possui um cadastro?
            <button className="btn-welcome-side"><a href="#" style={{ textDecoration: 'none', color: '#fff' }}> Cadastre-se aqui.</a></button>
          </p>
          <p>É um paciente?
            <button type="button" className="btn-welcome-side" onClick={handlePacienteClick}>
              Clique aqui.
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

