import TopUpTab from './TopupTab'
import CategorySlider from './CategorySlider'
import ItemSlideCategory from '../../molecules/itemSlideCategory'

import iconKategori from '../../../img/slide-cat/1.png'
import iconHpTab from '../../../img/slide-cat/2.png'
import iconTopupTagi from '../../../img/slide-cat/3.png'
import iconTravel from '../../../img/slide-cat/4.png'
import iconAnjg from '../../../img/slide-cat/5.png'
import iconDuit from '../../../img/slide-cat/6.png'
import iconPc from '../../../img/slide-cat/7.png'


export default function CategoryTopUp() {
    return (
        <section className='container mx-auto max-w-screen-xl px-10 mt-8 '>
            <div className='shadow-1 rounded-lg p-5'>
                <div className='flex gap-x-1.5 w-full'>
                    <div className='w-1/2'>
                        <h2 className='text-black-1 text-xl font-bold'>Kategori Pilihan</h2>
                        <CategorySlider/>
                    </div>
                    <div className='w-1/2'>
                        <h2 className='text-black-1 text-xl font-bold'>Top Up & Tagihan <a className='text-base text-green-1' href=''>Lihat Semua</a></h2>
                        <TopUpTab/>
                    </div>
                </div>  
                <div className='w-full mt-5 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 overflow-x-scroll'>
                      <div className='flex w-auto pb-5'>
                        <ItemSlideCategory icon={iconKategori} text="Kategori"/>
                        <ItemSlideCategory icon={iconHpTab} text="Handphone & Tablet"/>
                        <ItemSlideCategory icon={iconTopupTagi} text="Topup & Tagihan"/>
                        <ItemSlideCategory icon={iconTravel} text="Travel & Entertaiment"/>
                        <ItemSlideCategory icon={iconAnjg} text="Perawatan Hewan"/>
                        <ItemSlideCategory icon={iconDuit} text="Keuangan"/>
                        <ItemSlideCategory icon={iconPc} text="Komputer & Laptop"/>                           
                      </div>
                </div>              
            </div>
        </section>
    )
}