import React from 'react'
import { Hero , About , Fondasi, Linimasa } from './content/'
import Game from '../../components/game/Game'
// import FlippableCard from '../../components/card/flippable-card'

const Home = () => {
  return (
    <div>
<Hero />
   <About />
<Linimasa />
   <Game />
   <Fondasi />
    </div>
  
  )
}

export default Home