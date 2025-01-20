import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import image1 from '../Home/images/img1 - carrossel.png'
import image2 from '../Home/images/img2 - carrossel.png'
import image3 from '../Home/images/img3 - carrossel.png'
import './carousel.css'

{/* swiper = biblioteca de animaçoes e slides */ }

export default function carousel() {
    const slides = [image1, image2, image3]
    return (
        <div className='carousel-container'>
            <Swiper modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                spaceBetween={0}
                slidesPerView={1}>
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <img src={slide} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}



