import '../css/login.css'
import Image from '../images/img- login.png'

export default function login() {
  return (
    <div className='main-container'>
      <div className='login-container'>
        <h2>Bem vindo(a) de volta</h2>

        <form className='login-paciente-container'>
          <h3>Pacientes</h3>
          <div>
            <label name="nome" >Nome:</label>
            <input type="text" id='nome' placeholder='Digite seu nome aqui' required />
          </div>
          <div>
            <label name="Email" >Email:</label>
            <input type="email" id='Email' placeholder='Digite seu email aqui' required />
          </div>
          <div>
            <label name="senha" >Senha:</label>
            <input type="password" id='senha' placeholder='Digite sua senha aqui' required />
          </div>
          <button type='click'><a href="#">Enviar</a></button>
        </form>

        <p>Não possui um cadastro?<a href="#"> Cadastre-se aqui.</a></p>

        <form className='login-profissional-container'>
          <h3>Profissionais</h3>
          <div>
            <label name="nome" >Nome:</label>
            <input type="text" id='nome' placeholder='Digite seu nome aqui' required />
          </div>
          <div>
            <label name="Email" >Email:</label>
            <input type="email" id='Email' placeholder='Digite seu email aqui' required />
          </div>
          <div>
            <label name="senha" >Senha:</label>
            <input type="password" id='senha' placeholder='Digite sua senha aqui' required />
          </div>
          <button type='click'><a href="#">Confirmar</a></button>
        </form>

        <p>Faça parte de nossa comunidade,<a href="#"> Cadastre-se aqui.</a></p>
      </div>
      <img src={Image} width={400} alt="login image" />
    </div>
  )
}

