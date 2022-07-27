import { useState } from "react";
import BtnTabTopup from "../../atoms/BtnTabTopup";
import ItemTabPln from "../../molecules/itemTabPln";
import ItemTabTopupPulsaKuota from "../../molecules/ItemTabTopupPulsaKuota";

export default function TopUpTab(params) {
    const [ open, setOpen ] = useState('pulsa')

    const handleClickTab =(tab)=>{
        setOpen(tab)
    }
    return (
        <div className='h-auto border rounded-xl mt-3'>
            <nav className="w-full flex">
                <BtnTabTopup isActive={open === 'pulsa' ? true : false} handleClickTab={()=> handleClickTab('pulsa')}>Pulsa</BtnTabTopup>
                <BtnTabTopup isActive={open === 'kuota' ? true : false} handleClickTab={()=> handleClickTab('kuota')}>Paket Data</BtnTabTopup>
                <BtnTabTopup isActive={open === 'pln' ? true : false} handleClickTab={()=> handleClickTab('pln')}>Listrik PlN</BtnTabTopup>
                <BtnTabTopup redirect="https://www.tokopedia.com/flight">Flight</BtnTabTopup>
                <button className="w-10 border-b border-l">
                    <img className="mx-auto inline-block" src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/aba76d66.svg" alt="" />
                </button>
            </nav>
            {
                open === "pulsa" || open === "kuota" ? <ItemTabTopupPulsaKuota/> : <ItemTabPln/>
            }
        </div>        
    )
}