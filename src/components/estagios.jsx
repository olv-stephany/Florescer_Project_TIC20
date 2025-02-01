import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import '../css/estagios.css'


export default function Estagios() {
  return (
    <div className='estagios-container'>
      <div className='agendamento-container'>
        <h2>1</h2>
        <FontAwesomeIcon icon={faCalendarDays} className='style'/>
        <h3>Agendamento</h3>
        <p></p>
        <p>Busque um psicólogo que você se identifique no site e escolha o melhor dia e horário. Seja para consulta presencial ou online via site ou aplicativo em seu smartphone.</p>
      </div>
      <div className='acolhimento-container'>
        <h2>2</h2>
        <FontAwesomeIcon  icon={faHandHoldingHeart} className='style'/>
        <h3>Acolhimento</h3>
        <p></p>
        <p>Com empatia e experiência, oferecemos um espaço acolhedor, onde profissionais especializados unem suas habilidades para promover o bem-estar emocional e o autoconhecimento.</p>
      </div>
      <div className='posConsulta-container'>
        <h2>3</h2>
        <FontAwesomeIcon  icon={faStethoscope} className='style'/>
        <h3>Pós-Consulta</h3>
        <p></p>
        <p>A psicoterapia é uma jornada de transformação pessoal, onde você pode explorar e compreender suas emoções, pensamentos e comportamentos. </p>
      </div>
    </div>
  )
}
