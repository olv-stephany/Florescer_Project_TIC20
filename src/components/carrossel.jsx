import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import image1 from '../images/img1 - carrossel.jpg'
import image2 from '../images/img2 - carrossel.jpg'
import image3 from '../images/img3 - carrossel.jpg'

{/* swiper = biblioteca de animaçoes e slides */ }

export default function Carrossel() {
    const slides = [image1, image2, image3]
    return (
        <div className='carrossel-container'>
            <Swiper modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                spaceBetween={0}
                slidesPerView={1}>
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img src={slide} width={1100}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}



