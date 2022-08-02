import productImgB from '../../../img/product/b.webp'
import icoLoc from '../../../img/14.png'
import icoStar from '../../../img/star.svg'

export default function ItemEtalaseProduct() {
    return(
        <div className='w-full overflow-hidden bg-white shadow-lg rounded-lg p'>
            <img className='w-full h-48' src={productImgB} alt="" />
            <div className='p-1.5'>
                <h3 className='text-sm text-black-2'>Bsdsd Jhdufh Dhfu Rhusdh Ushdu Rhusdh Ushdu.</h3>
                <span className='mt-1 text-black-2 font-bold block'>Rp. 30.400</span>
                <div className='mt-1'>
                    <span className='p-1 bg-red-100 text-red-500 text-xs font-semibold rounded'>35%</span>
                    <span className='text-xs ml-2 text-gray-1 line-through'>Rp. 23.700</span>
                </div>
                <div>
                    <img className='w-4 inline-block' src={icoLoc} alt="" />
                    <span className='text-[13px] ml-1.5 text-gray-1'>Kota Semarang</span>
                </div>
                <div>
                    <img className='w-4 inline-block' src={icoStar} alt="" />
                    <span className='ml-1.5 text-[13px] text-gray-1'>4.8 | 3 rb+</span>   
                </div>             
            </div>
        </div>
    )
}