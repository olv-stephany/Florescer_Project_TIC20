import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './depoimentos.css'

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
                    <p>otimo atendimento!</p>
                </div>
                <div className="depoimento">
                    <div className="depoimento-header">
                        <FontAwesomeIcon icon={faUser}  className='style-icon'/>
                        <h3>User_011</h3>
                    </div>
                    <p>sempre bom contar com ajuda psicologica em momentos dificeis.</p>
                </div>
            </div>

        </div>
    )
}
