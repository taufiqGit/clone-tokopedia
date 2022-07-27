import Navbar from "./components/organisms/Navbar"
import SliderHero from "./components/organisms/SliderHero"
import TopNavbar from "./components/organisms/TopNavbar"
import CategoryTopUp from "./components/organisms/CategoryTopUp"

function Home() {

  return (
    <div className="font-OpenSans">
      <header className="fixed z-20 left-0 right-0 top-0">
        <TopNavbar/>
        <Navbar/>
      </header>
      <SliderHero/>
      <CategoryTopUp/>
    </div>
    
  )
}

export default Home
