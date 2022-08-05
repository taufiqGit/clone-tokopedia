import keamananA from '../../../img/img-footer/a.webp'
import keamananB from '../../../img/img-footer/b.png'
import iconFb from '../../../img/social/fb.svg'
import iconTw from '../../../img/social/tw.svg'
import iconPn from '../../../img/social/pn.svg'
import iconIg from '../../../img/social/ig.svg'
import imgFooter from '../../../img/img-footer/bg.png'
import imgAndroid from '../../../img/22.png'
import imgIos from '../../../img/23.png'

export default function Footer(){
    return (
        <footer className="container mx-auto w-auto max-w-screen-xl px-10 pb-16 mt-24 flex justify-between">
            <div className="min-w-[220px]">
                <div>
                    <h3 className="text-black-1 text-lg font-semibold">Tokopedia</h3>
                    <a href="" className="text-gray-400 text-sm hover:text-green-1 block my-2">Tentang Tokopedia</a>
                    <a href="" className="text-gray-400 text-sm hover:text-green-1 block my-2">Hak Kekayaan Intelektual</a>
                    <a href="" className="text-gray-400 text-sm hover:text-green-1 block my-2">Karir</a>
                    <a href="" className="text-gray-400 text-sm hover:text-green-1 block my-2">Blog</a>
                    <a href="" className="text-gray-400 text-sm hover:text-green-1 block my-2">Bridestory</a>
                    <a href="" className="text-gray-400 text-sm hover:text-green-1 block my-2">Tokopedia Parents</a>
                    <a href="" className="text-gray-400 text-sm hover:text-green-1 block my-2">Mitra Blog</a>
                    <a href="" className="text-gray-400 text-sm hover:text-green-1 block my-2">Tokopedia Affiliate Program</a>
                    <a href="" className="text-gray-400 text-sm hover:text-green-1 block my-2">Tokopedia B2B Digital</a>
                </div>
                <div>
                    <h3 className="text-black-1 text-lg font-semibold mt-4">Beli</h3>
                    <a href="" className="text-gray-400 text-sm hover:text-green-1 block my-2">Tagihan Topup</a>
                    <a href="" className="text-gray-400 text-sm hover:text-green-1 block my-2">Tokopedia COD</a>
                    <a href="" className="text-gray-400 text-sm hover:text-green-1 block my-2">Tukar Tambah Handphone</a>
                </div>                
            </div>
            <div className="min-w-[220px]">
                <div>
                    <h3 className="text-black-1 text-lg font-semibold">Jual</h3>
                    <a href="" className="text-gray-400 text-sm hover:text-green-1 block my-2">Pusat Edukasi Seller</a>
                    <a href="" className="text-gray-400 text-sm hover:text-green-1 block my-2">Mitra Toppers</a>
                    <a href="" className="text-gray-400 text-sm hover:text-green-1 block my-2">Daftar Official Store</a>
                </div>
                <div>
                    <h3 className="text-black-1 text-lg font-semibold mt-4">Bantuan dan Panduan</h3>
                    <a href="" className="text-gray-400 text-sm hover:text-green-1 block my-2">Tagihan Topup</a>
                    <a href="" className="text-gray-400 text-sm hover:text-green-1 block my-2">Tokopedia COD</a>
                    <a href="" className="text-gray-400 text-sm hover:text-green-1 block my-2">Tukar Tambah Handphone</a>
                </div>  
                <div>
                    <h3 className="text-black-1 text-lg font-semibold mt-4">Keamanan & Privasi</h3>
                    <div className='flex mt-4'>
                        <img className='w-24' src={keamananA} alt="aa" />
                        <img className='w-32 ml-3' src={keamananB} alt="aa" />
                    </div>
                </div>              
            </div>
            <div className="min-w-[220px]">
                <h3 className="text-black-1 text-lg font-semibold mt-4">Keamanan & Privasi</h3>
                <div className='flex mt-3'>
                    <img className='w-6' src={iconFb} alt="aa" />
                    <img className='w-6 ml-2' src={iconTw} alt="aa" />
                    <img className='w-6 ml-2' src={iconPn} alt="aa" />
                    <img className='w-6 ml-2' src={iconIg} alt="aa" />
                </div>
            </div>
            <div className="min-w-[220px]">
                <img className='w-112' src={imgFooter} alt="" />
                <div className='flex w-full justify-center mt-3'>
                    <img className='w-32 mx-2' src={imgAndroid} alt="" />
                    <img className='w-32 mx-2' src={imgIos} alt="" />
                </div>
                <p className='text-gray-500 font-semibold text-[15px] text-center mt-3'>© 2009 - 2022, PT. Tokopedia.</p>
                <div className='flex w-64 mx-auto mt-4 bg-gray-100 rounded-md p-0.5'>
                    <button className='font-semibold flex-1 py-1 rounded-md bg-green-1 text-white'>Indonesia</button>
                    <button className='font-semibold flex-1 py-1 text-gray-600'>English</button>
                </div>
            </div>
        </footer>
    )
}