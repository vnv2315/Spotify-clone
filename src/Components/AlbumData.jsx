import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumData = ({image,name,desc,id}) => {

    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className=' min-w-[160px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded ' src={image} alt="img" />
        <p className=' font-bold pt-2 pb-1'>{name}</p>
        <p className=' text-slate-200 text-sm font-light'>{desc}</p>
    </div>
  )
}

export default AlbumData
