import { Navigation } from "swiper";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemCategorySlider from "../../molecules/ItemCategorySlider";
import iconPrev from '../../../img/prev.svg'
import iconNext from '../../../img/next.svg'
import 'swiper/css';
import 'swiper/css/navigation'

export default function CategorySlider() {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    return (
        <div className="mt-4">
            <Swiper
            className="pl-3"
                modules={[Navigation]}
                spaceBetween={2}
                slidesPerView={4}
                loop
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current
                }}
                onInit={swiper =>{
                    swiper.params.navigation.prevEl = prevRef.current
                    swiper.params.navigation.nextEl = nextRef.current
                    swiper.navigation.init()
                    swiper.navigation.update()
                }}           
            >
                <SwiperSlide>
                    <ItemCategorySlider/>
                </SwiperSlide>       
                <SwiperSlide>
                    <ItemCategorySlider/>
                </SwiperSlide>         
                <SwiperSlide>
                    <ItemCategorySlider/>
                </SwiperSlide>        
                <SwiperSlide>
                    <ItemCategorySlider/>
                </SwiperSlide>        
                <SwiperSlide>
                    <ItemCategorySlider/>
                </SwiperSlide>        
                <SwiperSlide>
                    <ItemCategorySlider/>
                </SwiperSlide>          
                <button ref={prevRef} className="z-20 bg-white shadow-1 w-8 h-8 rounded-full absolute" style={{ top: '45px',left: '-5px' }}>
                    <img src={iconPrev} className="mx-auto " alt="prev" />
                </button>
                <button ref={nextRef} className="z-20 bg-white shadow-1 w-8 h-8 rounded-full right-0 absolute"  style={{ top: '45px' }}>
                    <img src={iconNext} className=" mx-auto" alt="next" />
                </button>
            </Swiper>
        </div>
    )
}