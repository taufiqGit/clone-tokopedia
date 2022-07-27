import iconArrowDown from '../../../img/icon-arrow.svg'

export default function ItemTabPln(params) {
    return (
        <div className="w-full flex py-4 px-3">
            <div className="flex flex-col flex-1">
                <label className="text-[13px] font-semibold text-black-1">Jenis Produk Listrik</label>
                <div className="rounded-xl px-1.5 flex items-center justify-between mt-2 w-full h-9 border cursor-pointer">
                    <p className='text-xs font-light text-black-1'>Token Listrik</p>
                    <img className='w-5' src={iconArrowDown} alt="ksk" />
                </div>               
            </div>
            <div className="flex flex-col ml-2 flex-1">
                <label className="text-[13px] font-semibold text-black-1" htmlFor="">No. Meter/ID Pel</label>
                <input className="focus:outline-none focus:border-green-1 w-full h-9 text-black-1 mt-2 border rounded-xl text-xs px-3 py-2" type="number" placeholder="14311203175"/>                
            </div>
            <div className="flex flex-col ml-2 flex-1">
                <label className="text-[13px] font-semibold text-black-1">Nominal</label>
                <div className="rounded-xl px-1.5 flex items-center justify-between mt-2 w-full h-9 border cursor-pointer">
                    <p className='text-xs font-light text-black-1'>Rp 20.000</p>
                    <img className='w-5' src={iconArrowDown} alt="ksk" />
                </div>               
            </div>
            <div className="ml-2 mt-7 ">
                <button className="rounded-xl text-sm font-semibold bg-gray-4 h-9 w-20 text-black-1">Bayar</button>
            </div>
        </div>
    )
}