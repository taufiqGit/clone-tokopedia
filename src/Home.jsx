import Navbar from "./components/organisms/Navbar"
import SliderHero from "./components/organisms/SliderHero"
import TopNavbar from "./components/organisms/TopNavbar"
import TopUp from "./components/organisms/TopUp"

function Home() {

  return (
    <div className="font-OpenSauceOneRegular">
      <TopNavbar/>
      <Navbar/>
      <SliderHero/>
      <TopUp/>
    </div>
    
  )
}

export default Home
