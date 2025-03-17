import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar.jsx';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets.js';
import { PlayerContext } from '../Context/PlayerContext'


const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const {playWithId}=useContext(PlayerContext)


  const [likes, setLikes] = useState(0);
  const [daysAgoList, setDaysAgoList] = useState([]);

  useEffect(() => {
    const randomLikes = Math.floor(Math.random() * (500000 - 100000 + 1)) + 100000;
    setLikes(randomLikes.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ","));

    const randomDaysArray = songsData.map(() => {
      return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    });
    setDaysAgoList(randomDaysArray);
  }, []);

  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center md:flex-row gap-5 mt-5'>
        <img src={albumData.image} className='w-50 h-50 rounded-lg' />
        <div className='gap-2 flex flex-col'>
          <p>Playlist</p>
          <h2 className='text-5xl font-bold'>{albumData.name}</h2>
          <h4>{albumData.desc}</h4>
          <div className='flex gap-2 items-center'>
            <img src={assets.spotify_logo} className='w-5 h-5' />
            <b>Spotify</b>
            <span className='text-gray-400'>• {likes} likes</span>
            <span className='text-gray-400'>• <b>{songsData.length} songs</b></span>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 md:grid-cols-4 gap-2 text-gray-400 m-2 my-3 items-center p-2'>
        <p><b className='mr-4'>#</b>Title</p>
        <p className='ml-10'>Album</p>
        <p className='hidden md:block'>Date Added</p>
        <img src={assets.clock_icon} className='m-auto w-5 h-5' />
      </div>
      <hr className='text-gray-400' />

      {songsData.map((item, index) => (
        <div onClick={()=>playWithId(item.id)} key={index} className='cursor-default hover:bg-[#111111] grid grid-cols-3 md:grid-cols-4 text-gray-400 gap-2 m-2 items-center p-2'>
          <p className='flex items-center'>
            <b className='mr-2'>{index + 1}</b>
            <img src={item.image} className='w-11 mr-4' />
            <p >{item.name}</p>

            
          </p>
          <p className='ml-10'>{albumData.name}</p>
          <p className='hidden md:block'>{daysAgoList[index]} days ago</p>
          <p className='text-center'>{item.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
