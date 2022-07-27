import iconArrowDown from '../../../img/icon-arrow.svg'

export default function ItemTabTopupPulsaKuota() {
    return (
        <div className="w-full flex py-4 px-3">
            <div className="flex flex-col flex-1">
                <label className="text-[13px] font-semibold text-black-1" htmlFor="">Nomor Telepon</label>
                <input className="focus:outline-none focus:border-green-1 w-full h-9 text-black-1 mt-2 border rounded-xl text-xs px-3 py-2" type="number" placeholder="081234567890"/>                
            </div>
            <div className="flex flex-col ml-2 flex-1">
                <label className="text-[13px] font-semibold text-black-1">Nominal</label>
                <div className="rounded-xl relative mt-2 w-full h-9 bg-gray-4 cursor-pointer">
                    <img className='w-5 absolute right-[10px] top-[8px]' src={iconArrowDown} alt="ksk" />
                </div>               
            </div>
            <div className="ml-2 mt-7 ">
                <button className="rounded-xl text-sm font-semibold bg-gray-4 h-9 w-20 text-black-1">Beli</button>
            </div>
        </div>
    )
}