import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useRef, useState } from "react";
import iconPrev from '../../../img/prev.svg'
import iconNext from '../../../img/next.svg'
import ItemEtalaseProduct from "../../molecules/itemEtalaseProduct";
import ItemFake from "../../molecules/itemEtalaseProduct/fakeItem";
import BgLeft from "../../../img/product/bg-left.webp"


export default function EtalaseProduct({ title, imgLeft, bgColorLeft }) {
    const [numSlide, setNumSlide] = useState(0)
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <div className="container mx-auto w-auto max-w-screen-xl px-10 mt-10">
            <div>
                <h2 className='text-black-1 text-xl font-bold'>{title} <a className='text-base text-green-1' href=''>Lihat Semua</a></h2>
            </div>
            <Swiper 
                modules={[Navigation]}
                slidesPerView={6}
                spaceBetween={15}
                slidesPerGroup={6}
                noSwiping={true}
                noSwipingClass="swiper-slide"
                navigation= {{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current
                }}
                onInit={swiper => {
                    swiper.params.navigation.prevEl = prevRef.current
                    swiper.params.navigation.nextEl = nextRef.current
                    swiper.navigation.init()
                    swiper.navigation.update()
                }}
                className="px-2 mt-3.5"
            >
            <div className={`h-[25.5rem] w-72 flex justify-start items-center rounded-lg  overflow-hidden absolute top-[14px] ${numSlide > 0 ? '-translate-x-full ml-[-8px]' : ''}`} style={{backgroundColor: bgColorLeft}}>
                <img className="w-2/3" src={imgLeft} alt="tat" />
            </div>
                <SwiperSlide className="my-8">
                    <ItemFake/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide  className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide  className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <SwiperSlide className="my-8">
                    <ItemEtalaseProduct/>
                </SwiperSlide>
                <button ref={prevRef} onClick={()=> setNumSlide(numSlide - 1)} className={`z-20 bg-white shadow-1 w-8 h-8 rounded-full absolute left-[-4px] top-[40%] ${numSlide > 0 ? 'inline-block' : 'hidden'}`}>
                    <img src={iconPrev} className="mx-auto " alt="prev" />
                </button>     
                <button ref={nextRef} onClick={()=> numSlide < 3 ? setNumSlide(numSlide + 1) : setNumSlide(3)} className={`z-20 bg-white shadow-1 w-8 h-8 rounded-full right-0 absolute top-[40%] ${numSlide >= 3 ? 'hidden' : 'inline-block'}`}>
                    <img src={iconNext}  className=" mx-auto" alt="next" />
                </button>
            </Swiper>
        </div>
    )
}