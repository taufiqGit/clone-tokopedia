import logo from '../../../img/2.png'
import iconCart from '../../../img/4.png'
import locationIcon from '../../../img/location.svg'
import BtnListSmall from '../../atoms/BtnListSmall'
import ButtonAuth from '../../atoms/ButtonAuth'
import InputSearch from '../../molecules/InputSearch'

export default function Navbar(params) {
    return (
        <div className='w-full shadow-md shadow-gray-2 py-3.5'>
            <nav className='w-full flex items-center px-10'>
                <img src={logo} className='w-40 h-10' alt="logo tokped" />
                <div className='text-gray-3 mx-4 text-xs'>Kategori</div>
                <InputSearch/>
                <button className='w-6 mx-7'>
                    <img className='w-full' src={iconCart} alt="cart" />
                </button>
                <div className='border-l-2 pl-2'>
                    <ButtonAuth outline>
                        Masuk
                    </ButtonAuth>
                    <ButtonAuth>
                        Daftar
                    </ButtonAuth>
                </div>
            </nav>   
            <div className='px-10 w-full'>
                <div className='w-full relative flex mt-1 '>
                    <div className='relative' style={{left: '220px'}}>
                        <BtnListSmall menuName="Tempered Glass Iphone 11"/>
                        <BtnListSmall menuName="Cover Angin Ac"/>
                        <BtnListSmall menuName="Macbook Air M2"/>
                        <BtnListSmall menuName="Lem Taco"/>
                        <BtnListSmall menuName="Iphone 11"/>
                        <BtnListSmall menuName="Iphone 12"/>
                    </div>
                    <div className='absolute flex' style={{ right: '30px', top: '8px'}}>
                        <img className='' src={locationIcon} alt="sss" />
                        <p className='text-gray-1 ml-1 text-xs'>Dikirim Ke <span className='font-semibold text-black'>Timika</span></p>
                    </div>
                </div>                 
            </div>
        
        </div>

    )
}