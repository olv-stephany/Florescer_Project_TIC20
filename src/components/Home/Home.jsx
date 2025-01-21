import Carrossel from './carrossel'
import Estagios from './estagios'
import Depoimentos from './depoimentos'
import Sobre from './sobre'
import Login from './login'
import Navbar from '../Navbar'


const Home = () => {
  return (
    <>
    <body>
        <header>
            <Navbar/>
        </header>
        <main>
            <section>
                <Carrossel/>
            </section>
            <section>
                <Estagios/>
            </section>
            <section>
                <Depoimentos/>
            </section>
            <section>
                <Sobre/>
            </section>
            <section>
                <Login/>
            </section>
        </main>
        <footer>
          <p>Florescer@2025</p>  
        </footer>
    </body>
    </>
  )
}

export default Home;
