import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumData from './AlbumData'
import SongData from './SongData'

const DisplayHome = () => {
  return (
    <div>
      <Navbar/>
      <div className='my-5 font-bold '>
        <h1 className=' text-xl mb-2'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((data,index)=>(
            <AlbumData key={index}
              image={data.image}
              id={data.id}
              desc={data.desc}
              name={data.name}
            />))}
        </div>
      </div>
      <div className='my-5 font-bold '>
        <h1 className=' text-xl mb-2'>Todays biggest hits</h1>
        <div className='flex overflow-auto'>
          {songsData.map((data,index)=>(
            <SongData key={index}
              image={data.image}
              id={data.id}
              desc={data.desc}
              name={data.name}
            />))}
        </div>
      </div>
    </div>
  )
}

export default DisplayHome
