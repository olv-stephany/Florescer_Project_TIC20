import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../css/depoimentos.css'

export default function Depoimentos() {
    return (
        <div>
            <h2>Depoimentos Anônimos</h2>{/*ficaria legal uma linha abaixo desse h2, dividindo os depoimentos, do titulo */}
            <div className="depoimentos-container">
                <div className="depoimento">
                    <div className="depoimento-header">
                        <FontAwesomeIcon icon={faUser} className='style-icon'/>
                        <h3>User_01</h3>
                    </div>
                    <p>Ótimo atendimento dos profissionais! Faço terapia há um tempo pela Florescer e é incrível o quanto mudou minha vida.</p>
                </div>
                <div className="depoimento">
                    <div className="depoimento-header">
                        <FontAwesomeIcon icon={faUser}  className='style-icon'/>
                        <h3>User_011</h3>
                    </div>
                    <p>É sempre bom contar com ajuda psicologica em momentos dificeis! As consultas online são muito atenciosas.</p>
                </div>
            </div>

        </div>
    )
}
