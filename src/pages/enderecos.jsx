import '../css/enderecos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

export default function enderecos() {
    return (
        <>
            <div>
                <h3>Unidade 1 - Maraponga</h3>
                <p> Rua das Flores, 123 -  Cidade Azul, Maraponga</p>
                <button><FontAwesomeIcon icon={faPhone} /></button>
                <button><FontAwesomeIcon icon={faCalendarDays}/></button>
            </div>
            <div>
                <h3>Unidade 2 - Montese</h3>
                <p>Avenida dos Sonhos, 456 - Jardim Esperança, Montese</p>
                <button><FontAwesomeIcon icon={faPhone} /></button>
                <button><FontAwesomeIcon icon={faCalendarDays}/></button>
            </div>
            <div>
                <h3>Unidade 3 - Aldeota</h3>
                <p>Travessa do Horizonte, 789 - Bairro das Estrelas, Aldeota</p>
                <button><FontAwesomeIcon icon={faPhone} /></button>
                <button><FontAwesomeIcon icon={faCalendarDays}/></button>
            </div>
            <div>
                <h3>Unidade 4 - Benfica</h3>
                <p> Alameda das Palmeiras, 101 - Parque Sereno, Benfica</p>
                <button><FontAwesomeIcon icon={faPhone} /></button>
                <button><FontAwesomeIcon icon={faCalendarDays}/></button>
            </div>
        </>
    )
}
