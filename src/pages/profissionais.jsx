import '../css/profissionais.css'
import image1 from '../images/psicologa1.jpg'
import image2 from '../images/psicologo2.jpg'
import image3 from '../images/psicologa3.jpg'
import image4 from '../images/psicologa4.jpg'
import image5 from '../images/psicologo5.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function profissionais() {
  const cards = [
    {
      image: image1,
      name: 'Dra. Carla Silva',
      description: 'Especialista em Psicologia Infantil.',
      buttons: [
        { label: 'Agendar Consulta' },
      ],
    },
    {
      image: image2,
      name: 'Dr. João Augusto',
      description: 'Psicólogo Clínico com foco em Terapia Cognitivo-Comportamental.',
      buttons: [
        { label: 'Agendar Consulta'},
      ],
    },
    {
      image: image3,
      name: 'Dra. Ana Costa',
      description: 'Especialista em Terapia de Casais e Família.',
      buttons: [
        { label: 'Agendar Consulta' },
      ],
    },
    {
      image: image4,
      name: 'Dra. Fernanda Cavalcante',
      description: 'Psicóloga Escolar ajudando crianças e adolescentes.',
      buttons: [
        { label: 'Agendar Consulta'},
      ],
    },
    {
      image: image5,
      name: 'Dr. Ricardo Correia',
      description: 'Especialista em Psicoterapia e Desenvolvimento Pessoal.',
      buttons: [
        { label: 'Agendar Consulta'},
      ],
    },
  ];


  return (
    <div className='cards-container' >
      <Swiper modules={[Pagination, Navigation]}
        pagination={{ clickable: false }}
        navigation
        spaceBetween={10}
        slidesPerView={3}>

        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <img src={card.image} className='cards-syle' alt={card.name} />

            <div className="info-style">
              <h3>{card.name}</h3>
              <p>{card.description}</p>
              {/*botao diferente para cada profissional */}

              <div className="card-buttons">
                {card.buttons.map((button, buttonIndex) => (
                  <button key={buttonIndex}>
                    {button.label}
                  </button>
                ))}
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  )
}
