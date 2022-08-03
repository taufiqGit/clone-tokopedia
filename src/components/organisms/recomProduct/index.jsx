import ItemEtalaseProduct from "../../molecules/itemEtalaseProduct";
import ItemTabRecomProduct from "../../molecules/itemTabRecomProduct";

export default function RecomProduct(params) {
    return (
        <div  className="container mx-auto w-auto max-w-screen-xl px-10 mt-10">
            <div className="flex gap-x-2">
                <ItemTabRecomProduct text="For You" bgColor="bg-tab-recom-a"/>
                <ItemTabRecomProduct text="Special Discount" bgColor="bg-tab-recom-b"/>
                <ItemTabRecomProduct text="Baju Renang Muslim" bgColor="bg-tab-recom-c"/>
                <ItemTabRecomProduct text="Susu & Olahan Susu" bgColor="bg-tab-recom-a"/>
                <ItemTabRecomProduct text="Mobil" bgColor="bg-tab-recom-d"/>
            </div>
            <div className="mt-8 grid gap-4 grid-cols-6">
                <ItemEtalaseProduct/>
                <ItemEtalaseProduct/>
                <ItemEtalaseProduct/>
                <ItemEtalaseProduct/>
                <ItemEtalaseProduct/>
                <ItemEtalaseProduct/>
                <ItemEtalaseProduct/>
                <ItemEtalaseProduct/>
                <ItemEtalaseProduct/>
                <ItemEtalaseProduct/>
                <ItemEtalaseProduct/>
                <ItemEtalaseProduct/>
                <ItemEtalaseProduct/>
                <ItemEtalaseProduct/>
                <ItemEtalaseProduct/>
                <ItemEtalaseProduct/>
                <ItemEtalaseProduct/>
                <ItemEtalaseProduct/>
            </div>
            <div className="mt-8 mb-6 flex justify-center">
                <button className="border rounded-md font-bold border-green-1 text-green-1 h-12 w-80">Muat Lebih Banyak</button>
            </div>
        </div>
    )
}