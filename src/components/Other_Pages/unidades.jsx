import './unidades.css'
import Map from './map'

const unidades = () => {
    return (
        <div>
            <header>
                <h1>Unidades de Apoio</h1>
            </header>
            <main>
                <section className="map-container">
                    <Map></Map>
                </section>
                <section>
                    <div className='localidades-container'>
                        <div>
                            <h3>Unidade 1 - Maraponga</h3>
                            <p>(endereço ficticio)</p>
                        </div>
                        <div>
                            <h3>Unidade 2 - Montese</h3>
                            <p>(endereço ficticio)</p>
                        </div>
                        <div>
                            <h3>Unidade 3 - Aldeota</h3>
                            <p>(endereço ficticio)</p>
                        </div>
                        <div>
                            <h3>Unidade 4 - Benfica</h3>
                            <p>(endereço ficticio, telefone ficticio)</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default unidades