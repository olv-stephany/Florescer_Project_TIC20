import '../css/unidades.css'
import Map from '../pages/map'
import Profissionais from '../pages/profissionais'
import Enderecos from '../pages/enderecos'

const unidades = () => {
    return (
        <div>
            <header>
                <h1 className='tittle-style'>Unidades de Apoio</h1>
                <p>Encontre a unidade mais proxima de você.</p>
            </header>
            <main>
                <section className="map-container">
                    <Map></Map>
                </section>
                <section className='localidades-container'>
                    <Enderecos></Enderecos>
                </section>
                <section className='profissionais-container'>
                    <h2 className='other-options-style'>Ou Realize Sessões Online com Um de Nossos Profissionais:</h2>
                    <Profissionais></Profissionais>
                </section>
            </main>
        </div>
    )
}

export default unidades