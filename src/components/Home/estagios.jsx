import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import './estagios.css'


export default function Estagios() {
  return (
    <div className='estagios-container'>
      <div className='agendamento-container'>
        <h2>1</h2>
        <FontAwesomeIcon icon={faCalendarDays} className='style'/>
        <h3>Agendamento</h3>
        <p></p>
      </div>
      <div className='acolhimento-container'>
        <h2>2</h2>
        <FontAwesomeIcon  icon={faHandHoldingHeart} className='style'/>
        <h3>Acolhimento</h3>
        <p></p>
      </div>
      <div className='posConsulta-container'>
        <h2>3</h2>
        <FontAwesomeIcon  icon={faStethoscope} className='style'/>
        <h3>Pós-Consulta</h3>
        <p></p>
      </div>
    </div>
  )
}
