import ItemCatSearch from './itemCatSearch';

import Thumbnail1 from '../../../img/modal-search/a.jpg'
import Thumbnail2 from '../../../img/modal-search/b.jpg'
import Thumbnail3 from '../../../img/modal-search/c.jpg'
import Thumbnail4 from '../../../img/modal-search/d.jpg'
import Thumbnail5 from '../../../img/modal-search/e.jpg'
import Thumbnail6 from '../../../img/modal-search/f.jpg'

export default function BoxSearch(params) {
    return (
        <div className='w-full absolute z-10 rounded-lg h-64 overflow-y-auto bg-white p-3'>
            <h2 className='text-black-1 text-xl font-extrabold'>Pencarian Popular <a className='text-base text-green-1' href=''>Refresh</a></h2>
            <div className='mt-3 grid grid-cols-2'>
                <ItemCatSearch thumbnail={Thumbnail1} text="Elektronik"/>
                <ItemCatSearch thumbnail={Thumbnail2} text="Fashion Pria"/>
                <ItemCatSearch thumbnail={Thumbnail3} text="Fashion Muslim"/>
                <ItemCatSearch thumbnail={Thumbnail4} text="Kesehatan"/>
                <ItemCatSearch thumbnail={Thumbnail5} text="Komputer & Laptop"/>
                <ItemCatSearch thumbnail={Thumbnail6} text="Dapur"/>
            </div>
            <h2 className='text-black-1 text-xl font-extrabold mt-3'>Pencarian Popular <a className='text-base text-green-1' href=''>Refresh</a></h2>
            <div className='mt-3 grid grid-cols-2'>
                <ItemCatSearch thumbnail={Thumbnail1} text="Elektronik"/>
                <ItemCatSearch thumbnail={Thumbnail2} text="Fashion Pria"/>
                <ItemCatSearch thumbnail={Thumbnail3} text="Fashion Muslim"/>
                <ItemCatSearch thumbnail={Thumbnail4} text="Kesehatan"/>
                <ItemCatSearch thumbnail={Thumbnail5} text="Komputer & Laptop"/>
                <ItemCatSearch thumbnail={Thumbnail6} text="Dapur"/>
            </div>
        </div>
    )
}