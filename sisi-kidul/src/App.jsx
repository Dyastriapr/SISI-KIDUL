import { Hero , About } from "./components/home/"
import Fondasi from "./components/home/content/Fondasi"
import { Nav } from "./components/navbar/Nav"

function App() {
  return (
    <div className="font-poppins">
     <div>
      <Nav />
    </div>
    <div className="mt-16">
    <Hero />
    <About />
    <Fondasi />
    </div>


    </div>
  
  )
}

export default App
