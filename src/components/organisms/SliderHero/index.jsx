// Import Swiper React components
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideSatu from '../../../img/slide/slide-satu.jpg.webp'
import SlideDua from '../../../img/slide/slide-dua.jpg.webp'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './custom-swiper.css'

export default function SliderHero(params) {
    return (
      <section className='container mx-auto w-auto max-w-screen-xl px-10 mt-8'>
        <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay
        loop={true}
        pagination={{ clickable: true }}
        navigation={{ }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide >
          <img className='w-full w-auto h-auto rounded-lg block' style={{minHeight: '240px'}} src={SlideSatu} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full w-auto h-auto rounded-lg block' style={{minHeight: '240px'}} src={SlideDua} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full w-auto  h-auto rounded-lg block' style={{minHeight: '240px'}} src={SlideSatu} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full  w-auto  h-auto rounded-lg block' style={{minHeight: '240px'}} src={SlideDua} alt="" />
        </SwiperSlide>
      </Swiper>        
      </section>

    )
}