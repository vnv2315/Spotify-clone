import React,{useState} from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import menu from '../assets/menu.png'
import Home from '../assets/home.png';
import Search from '../assets/search.png';


const Navbar = () => {
    const navigate=useNavigate();
    const [menuBar,setMenuBar]=useState(false);
  return (<>
        <div className='flex justify-between items-center w-full font-semibold mb-3'>
            <div className='flex items-center gap-2'>
                <img onClick={()=>navigate(-1)} className='w-8 rounded-full bg-black p-2 cursor-pointer' src={assets.arrow_left} alt="" />
                <img onClick={()=>navigate(1)} className='w-8 rounded-full bg-black p-2 cursor-pointer' src={assets.arrow_right} alt="" />
            </div>
            <div className=' hidden md:flex items-center gap-2'>
                <p className='cursor-pointer bg-white text-black rounded-full py-1 px-2 text-sm'>Explore Premium</p>
                <p className='cursor-pointer bg-black text-white rounded-full py-1 px-2 text-sm'>Install App</p>
                <button className='cursor-pointer text-white bg-blue-800 rounded-full px-2 text-xl '>V</button>
            </div>
            <span className='block md:hidden cursor-pointer w-8'><img onClick={()=>setMenuBar(true)} src={menu} alt="menu" /></span>
            
        </div>
        <div className={`bg-black/60 backdrop-blur-md text-white fixed justify-between w-auto h-screen flex flex-col top-0 right-0 p-8 z-10 md:hidden transition-transform ease-in-out duration-700 transform ${menuBar? 'translate-x-0': 'translate-x-full'}`}>
            <ul className=' flex flex-col gap-9'><span className='block md:hidden cursor-pointer w-8'><img onClick={()=>setMenuBar(false)} src={menu} alt="menu" /></span>
            <li onClick={()=>navigate('/')} className="flex gap-3 items-center  text-white ">
                <img className='w-5 cursor-pointer' src={Home} alt="home" />
                <h1 className='font-semibold cursor-pointer '>Home</h1>
            </li>
            <li className="flex gap-3 items-center  text-white ">
                <img className='w-5 cursor-pointer' src={Search} alt="search" />
                <h1 className='font-semibold cursor-pointer'>Search</h1>
            </li>
            <button className='bg-white rounded-full text-black  px-3 py-2 text-sm font-semibold cursor-pointer hover:scale-110 ease-in-out duration-300'>+ Playlist</button>
            <button className='bg-white rounded-full text-black px-3 py-2 text-sm font-semibold cursor-pointer hover:scale-110 ease-in-out duration-300'>Browse Podcasts</button>
            </ul>
            <div className=' flex flex-col items-center gap-6 '>
                <p className='cursor-pointer bg-white text-black rounded-full py-1 px-2 text-sm'>Explore Premium</p>
                <div className='flex w-full items-center justify-between'>
                    <p className='cursor-pointer text-white text-sm'>Install App</p>
                    <p className='cursor-pointer text-white bg-blue-800 rounded-full px-2 text-xl '>V</p>
                </div>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <p className='cursor-pointer bg-white text-black rounded-full py-1 px-3 text-sm'>All</p>
            <p className='cursor-pointer bg-black text-white rounded-full py-1 px-3 text-sm'>Music</p>
            <p className='cursor-pointer bg-black text-white rounded-full py-1 px-3 text-sm'>Podcasts</p>
        </div>
        
    
    </>
  )
}

export default Navbar
