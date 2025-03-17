import React, { use, useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext'

const SongData = ({image,id,name,desc}) => {

  const {playWithId}=useContext(PlayerContext)
  return (
    <div>
      <div onClick={()=>playWithId(id)} className=' min-w-[160px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded ' src={image} alt="img" />
        <p className=' font-bold pt-2 pb-1'>{name}</p>
        <p className=' text-slate-200 text-sm font-light'>{desc}</p>
    </div>
    </div>
  )
}

export default SongData
