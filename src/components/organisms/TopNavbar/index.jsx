import phoneImg from '../../../img/1.png'
import BtnListSmall from '../../atoms/BtnListSmall'

export default function TopNavbar() {
    return(
        <nav className='w-full flex justify-between px-10 h-9 bg-gray-2'>
            <div className='flex items-center'>
                <img src={phoneImg} className="w-3.5" alt="logo hape" />
                <p className='text-gray-1 ml-1.5 text-tiny hover:text-green-1 cursor-pointer'>Download Tokopedia App</p>
            </div>
            <div className='flex items-center'>
                <BtnListSmall menuName="Tentang Tokopedia"/>
                <BtnListSmall menuName="Mitra Tokopedia"/>
                <BtnListSmall menuName="Mulai Berjualan"/>
                <BtnListSmall menuName="Promo"/>
                <BtnListSmall menuName="Tokopedia Care"/>
            </div>
        </nav>
    )
}