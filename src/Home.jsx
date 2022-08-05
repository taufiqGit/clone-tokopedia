import Navbar from "./components/organisms/Navbar"
import SliderHero from "./components/organisms/SliderHero"
import TopNavbar from "./components/organisms/TopNavbar"
import CategoryTopUp from "./components/organisms/CategoryTopUp"
import { useContext, useEffect } from "react"
import BlackShadow from "./components/molecules/blackShadow"
import BoxMenu from "./components/organisms/boxMenu"
import { UIContext } from "./context"
import EtalaseProduct from "./components/organisms/EtalaseProduct"
import EtalaseProductWithoutPromo from "./components/organisms/EtalaseProductWithoutBgLeft"

import imgLeft1 from './img/product/bg-left.webp'
import imgLeft2 from './img/product/bg-left-2.webp'
import imgLeft3 from './img/product/bg-left-3.webp'
import EtalaseProductWithoutBgLeft from "./components/organisms/EtalaseProductWithoutBgLeft"
import RecomProduct from "./components/organisms/recomProduct"
import CariTabTab from "./components/organisms/CariTabTab"
import axios from "axios"
import AboutText from "./components/organisms/AboutText"
import Footer from "./components/organisms/footer"

function Home() {

  return (
    <div className="font-OpenSans h-auto relative">

      {openOverlay ? <BlackShadow/> : ''}

      <header className="fixed z-20 left-0 right-0 top-0">
        <TopNavbar/>
        <Navbar/>
        {openModalCategory ? <BoxMenu/> : ''}
      </header>
      <SliderHero/>
      <CategoryTopUp/>
      <hr className="container mx-auto w-auto max-w-screen-xl px-10 mt-10"/>
      <EtalaseProduct title="Traktiran Pengguna Baru" imgLeft={imgLeft1} bgColorLeft='rgb(227, 102, 187)'/>
      <hr className="container mx-auto w-auto max-w-screen-xl px-10 mt-10"/>
      <EtalaseProduct title="Kejar Diskon Cantik" imgLeft={imgLeft2} bgColorLeft="rgb(109, 171, 248)"/>
      <hr className="container mx-auto w-auto max-w-screen-xl px-10 mt-10"/>
      <EtalaseProduct title="Official Store" imgLeft={imgLeft3} bgColorLeft="rgb(105, 212, 29)"/>
      <hr className="container mx-auto w-auto max-w-screen-xl px-10 mt-10"/>
      <EtalaseProductWithoutBgLeft title="Elektronik pilihan"/>
      <hr className="w-full h-2.5 bg-gray-200 mt-8"/>
      <RecomProduct/>
      <CariTabTab/>
      <AboutText/>
      <Footer/>
    </div>
  )
}

export default Home
