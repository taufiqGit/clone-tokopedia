import Navbar from "./components/organisms/Navbar"
import SliderHero from "./components/organisms/SliderHero"
import TopNavbar from "./components/organisms/TopNavbar"
import CategoryTopUp from "./components/organisms/CategoryTopUp"
import { useContext } from "react"
import BlackShadow from "./components/molecules/blackShadow"
import BoxMenu from "./components/organisms/boxMenu"
import { UIContext } from "./context"

function Home() {
  const { openOverlay, openModalCategory } = useContext(UIContext)

  return (
    <div className="font-OpenSans h-auto pb-20 relative">

      {openOverlay ? <BlackShadow/> : ''}

      <header className="fixed z-20 left-0 right-0 top-0">
        <TopNavbar/>
        <Navbar/>
        {openModalCategory ? <BoxMenu/> : ''}
      </header>
      <SliderHero/>
      <CategoryTopUp/>
    </div>
  )
}

export default Home
