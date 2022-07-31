import BtnCatMenu from "../../atoms/BtnCatMenu";
import BtnCatMenuSide from "../../atoms/BtnCatMenuSide";
import ContentMenu from "./contentMenu";


export default function BoxMenu() {
    return (
        <div className="w-full h-auto bg-white">
            <div className="border-t flex w-full overflow-x-scroll">
                <BtnCatMenu isActive>Belanja</BtnCatMenu>
                <BtnCatMenu>Featured</BtnCatMenu>
                <BtnCatMenu>Brand Unggulan</BtnCatMenu>
                <BtnCatMenu>Halal Corner</BtnCatMenu>
                <BtnCatMenu>Investasi Asuransi & Pinjaman</BtnCatMenu>
                <BtnCatMenu>Pajak</BtnCatMenu>
                <BtnCatMenu>Pendidikan</BtnCatMenu>
                <BtnCatMenu>Tagihan</BtnCatMenu>
                <BtnCatMenu>Top-Up</BtnCatMenu>
                <BtnCatMenu>Travel & Entertainment</BtnCatMenu>
                <BtnCatMenu>OS Popular</BtnCatMenu>
                <BtnCatMenu>Lainnya</BtnCatMenu>
            </div>
            <div className="w-full h-112 flex">
                <div className="w-64 pl-8 pr-1 py-2.5 h-full overflow-y-scroll flex flex-col">
                    <BtnCatMenuSide isActive>Buku</BtnCatMenuSide>
                    <BtnCatMenuSide>Dapur</BtnCatMenuSide>
                    <BtnCatMenuSide>Elektronik</BtnCatMenuSide>
                    <BtnCatMenuSide>Fashion Anak & Bayi</BtnCatMenuSide>
                    <BtnCatMenuSide>Fashion Muslim</BtnCatMenuSide>
                    <BtnCatMenuSide>Fashion Pria</BtnCatMenuSide>
                    <BtnCatMenuSide>Fashion Wanita</BtnCatMenuSide>
                    <BtnCatMenuSide>Film & Musik</BtnCatMenuSide>
                    <BtnCatMenuSide>Gaming</BtnCatMenuSide>
                    <BtnCatMenuSide>Handphone & Tablet</BtnCatMenuSide>
                    <BtnCatMenuSide>Ibu & Bayi</BtnCatMenuSide>
                    <BtnCatMenuSide>Kamera</BtnCatMenuSide>
                    <BtnCatMenuSide>Kecantikan</BtnCatMenuSide>
                    <BtnCatMenuSide>Kesehatan</BtnCatMenuSide>
                </div>
                <ContentMenu/>
            </div>
        </div>
    )
}