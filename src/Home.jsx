import Logo from './components/Home/images/logo-florescer.png'
import Carousel from './components/Home/carousel'
import Estagios from './components/Home/estagios'
import Depoimentos from './components/Home/depoimentos'
import Sobre from './components/Home/sobre'
import Login from './components/Home/login'
import Unidades from './components/Other_Pages/unidades'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <Router>
      <div>
        <nav className="navbar-container"> {/*barra de abas fixa */}
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
        </nav>
        <main>

          <Routes>
            {/*uma das rotas, abaixo é a principal */}
            <Route path='/'
              element={
                <>
                  <section>
                    <Carousel></Carousel>
                  </section>
                  <section>
                    <Estagios></Estagios>
                  </section>
                  <section>
                    <Depoimentos></Depoimentos>
                    <button type='click'><Link to="/unidades">Buscar Ajuda Agora</Link></button>
                  </section>
                  <article>
                    <Sobre></Sobre>
                  </article>
                  <section>
                    <Login></Login>
                  </section>
                </>} />
            {/*Demais rotas */}
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/login' element={<Login />} />
            <Route path='/unidades' element={<Unidades />} />
          </Routes>

        </main>
        <footer>
          <p>Florescer©2025</p>
        </footer>
      </div>
    </Router>
  )
}

export default Home;
