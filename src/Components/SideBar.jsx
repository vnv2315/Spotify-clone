import React from 'react'
import Home from '../assets/home.png'
import Search from '../assets/search.png'
import Stack from '../assets/stack.png'
import Plus from '../assets/plus.png'
import Arrow from '../assets/arrow.png'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {

    const navigate=useNavigate();


  return (
    <div className='hidden w-[25%] h-full md:flex flex-col justify-center p-2 gap-2'>
        <div className='bg-[#121212] p-2  pl-7 flex flex-col  h-[15%] rounded gap-5'>
            <div onClick={()=>navigate('/')} className="flex gap-3 items-center  text-white ">
                <img className='w-5 cursor-pointer' src={Home} alt="home" />
                <h1 className='font-semibold cursor-pointer '>Home</h1>
            </div>
            <div className="flex gap-3 items-center  text-white ">
                <img className='w-5 cursor-pointer' src={Search} alt="search" />
                <h1 className='font-semibold cursor-pointer'>Search</h1>
            </div>
        </div>
        <div className="flex flex-col h-[85%] rounded  bg-[#121212]  p-2 gap-5">
            <div className='flex justify-between items-center'>
                <div className='flex w-auto text-white items-center gap-2'>
                    <img className='w-7' src={Stack} alt="stack" />
                    <p className='font-semibold cursor-default'>Your Library</p>
                </div>
                <div className='flex gap-2 '>
                    <img className='w-5 h-5 cursor-pointer' src={Arrow} alt="arrow" />
                    <img className='w-5 h-5 cursor-pointer' src={Plus} alt="plus" />
                </div>
            </div>
            <div className=" rounded flex flex-col p-5 items-start bg-[#212121] text-white gap-2">
                <h1 className='font-semibold'>Create your Playlist</h1>
                <h1 className=' text-gray-300 text-sm mb-5'>We will help you</h1>
                <button className='bg-white rounded-full text-black  px-3 py-2 text-sm font-semibold cursor-pointer hover:scale-110 ease-in-out duration-300'>+ Playlist</button>
            </div>
            <div className=" rounded flex flex-col p-4 items-start bg-[#212121] text-white gap-2">
                <h1 className='font-semibold'>Lets find some Podcast</h1>
                <h1 className=' text-gray-300 text-sm mb-5 text-wrap'>We will keep you updated on new episodes</h1>
                <button className='bg-white rounded-full text-black px-3 py-2 text-sm font-semibold cursor-pointer hover:scale-110 ease-in-out duration-300'>Browse Podcasts</button>
            </div>

        </div>
    
    </div>
  )
}

export default SideBar
