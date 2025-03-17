import React, { useContext } from 'react'
import { PlayerContext } from './Context/PlayerContext';
import SideBar from './Components/SideBar'
import Player from './Components/player'
import Display from './Components/Display'

const App = () => {

  const {audioRef,track}=useContext(PlayerContext)

  return (<div className='bg-black h-screen '>
    <div className="flex h-[90%]">
      <SideBar/>
      <Display/>
    </div>
    <Player/>
    <audio ref={audioRef} src={track.file} preload='auto'></audio>

  </div>
  )
}

export default App
