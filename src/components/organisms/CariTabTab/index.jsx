import ItemBtnTabCari from "../../molecules/ItemBtnTabCari";
import iconArrow from '../../../img/icon-arrow.svg'
import imgBg from '../../../img/17.png'
import { useState } from "react";
import ListMenu from "./listMenu";

export default function CariTabTab(params) {
   const [posArrow, setPosArrow] = useState('left')
    return (
        <div className="container mx-auto w-auto max-w-screen-xl px-10 mt-10">
            <h2 className="text-black-1 font-bold text-2xl">Cari Semua di Tokopedia!</h2>
            <div className="mt-4 w-full h-16 overflow-x-hidden relative">
                <div className={`flex absolute transition-all duration-300 ${posArrow === 'left' ? 'left-0' : 'right-0'}`}>
                    <ItemBtnTabCari isActive>Promo</ItemBtnTabCari>
                    <ItemBtnTabCari>Tiket Pesawat</ItemBtnTabCari>
                    <ItemBtnTabCari>Tiket Kereta</ItemBtnTabCari>
                    <ItemBtnTabCari>Hotel</ItemBtnTabCari>
                    <ItemBtnTabCari>Kartu Prakerja</ItemBtnTabCari>
                    <ItemBtnTabCari>Food & Voucher</ItemBtnTabCari>
                    <ItemBtnTabCari>Produk Digital</ItemBtnTabCari>
                    <ItemBtnTabCari>Fintech</ItemBtnTabCari>
                    <ItemBtnTabCari>Tokopedia Salam</ItemBtnTabCari>
                    <ItemBtnTabCari>Tokopedia Find</ItemBtnTabCari>
                    <ItemBtnTabCari>Tokopedia Blog</ItemBtnTabCari>
                </div>
                {
                    posArrow === 'left' ? (
                        <button 
                            onClick={() => setPosArrow('right')}
                            className="w-9 z-30 shadow-md rounded-full absolute top-1 right-[-3px] bg-white">
                            <img className="w-full -rotate-90" src={iconArrow} alt="" />
                        </button>                      
                    ) : (      
                        <button 
                            onClick={() => setPosArrow('left')}
                            className="w-9 z-30 shadow-md rounded-full absolute top-1 left-[-3px] bg-white">
                            <img className="w-full rotate-90" src={iconArrow} alt="" />
                        </button>                    
                    )
                }
            </div>
            <ListMenu/>
            <div className="w-full mt-5 flex justify-between items-center">
                <div>
                    <h2 className="text-orange-1 text-lg font-bold">Punya Toko Online? Buka cabangnya di Tokopedia</h2>
                    <p className="my-4 text-gray-1 text-[13px]">Mudah, nyaman dan bebas Biaya Layanan Transaksi. <span className="font-bold">GRATIS</span></p>
                    <div>
                        <button className="bg-green-1 rounded-lg font-semibold text-[13px] w-36 py-2.5 text-white">Buka Toko GRATIS</button>
                        <a className="text-green-1 ml-2 text-[13px] font-semibold " href="">Pelajari lebih lanjut</a>
                    </div>
                </div>   
                <img className="w-1/3" src={imgBg} alt="dd" />                 
            </div>

        </div>
    )
}