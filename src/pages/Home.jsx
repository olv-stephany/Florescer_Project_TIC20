import Carrossel from '../components/carrossel'
import Estagios from '../components/estagios'
import Depoimentos from '../components/depoimentos'
import Sobre from '../components/sobre'
import Login from '../components/login'
import '../css/home.css'


const Home = () => {
  return (
    <>
    <body>
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
            <section id='Sobre'>
                <Sobre/>
            </section>
            <section id='login' className='login-position'>
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
