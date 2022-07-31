import { useContext } from 'react';
import { UIContext } from '../../../context';
import iconSearch from '../../../img/3.png'
import BoxSearch from './boxSearch';

export default function InputSearch() {
    const { dispatch, openModalSearch } = useContext(UIContext)

    const handleModalSearch =()=>{
        dispatch({
            type: 'OPEN_MODAL_SEARCH',
        })     
    }

    return (
        <div className='w-6/10 min-w-150px h-8 relative'>
            <input onFocus={()=> handleModalSearch()} className='w-full h-full text-tiny text-gray-3 border rounded-lg px-2.5 py-2 focus:outline-none' placeholder='Lontong Sate' type="text" />
            <button className='absolute bg-gray-2 h-8 w-11 rounded-r-lg right-0 z-10'>
                <img className='w-5 h-5 inline-block' src={iconSearch} alt="asd asd" />
            </button>
            {
                openModalSearch ? <BoxSearch/> : ''
            }
        </div>
    )
}