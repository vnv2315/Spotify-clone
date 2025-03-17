import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { PlayerContext } from '../Context/PlayerContext'

const player = () => {

    const {track,seekBar,seekBg,playStatus,play,pause,time,next,previous,seekSong}=useContext(PlayerContext);

    return (<div className='w-full  h-[10%] bg-black flex items-center justify-center p-3'>
            <div className=' bg-black flex items-center justify-between text-white'>
                <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
                    <img className='w-13 h-13 rounded' src={track.image} alt="img" />
                    <div className='hidden md:block'>
                        <h1 >{track.name}</h1>
                        <p >{track.desc.slice(0,12)}</p>

                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center bg-black text-white m-auto gap-1'>
                <div className='flex items-center gap-4'>
                    <img className='w-4' src={assets.shuffle_icon} alt="img" />
                    <img onClick={previous} className='w-4' src={assets.prev_icon} alt="img" />
                    {playStatus
                    ?<img onClick={pause} className='w-4' src={assets.pause_icon} alt="img" />
                    :<img onClick={play} className='w-4' src={assets.play_icon} alt="img" />
                    }
                    <img onClick={next} className='w-4' src={assets.next_icon} alt="img" />
                    <img className='w-4' src={assets.loop_icon} alt="img" />
                </div>
                <div className='flex items-center gap-2'>
                    <h1 className='text-sm'>{time.currentTime.minute}:{time.currentTime.second}</h1>
                    <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px]  bg-white rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1  border-none bg-green-500 rounded-full'/>
                    </div>
                    <h1 className='text-sm'>{time.totalTime.minute}:{time.totalTime.second}</h1>
                    </div>
            </div>
            <div className=' hidden lg:flex items-center gap-3 opacity-75'>
                <img className='w-4' src={assets.plays_icon} alt="" />
                <img className='w-4' src={assets.mic_icon} alt="" />
                <img className='w-4' src={assets.queue_icon} alt="" />
                <img className='w-4' src={assets.speaker_icon} alt="" />
                <img className='w-4' src={assets.volume_icon} alt="" />
                <div className='w-[10vw] h-1 max-w-[60px]  bg-white rounded-full cursor-pointer'></div>
                <img className='w-4' src={assets.mini_player_icon} alt="" />
                <img className='w-4' src={assets.zoom_icon} alt="" />
            </div>
        </div>
    )
}

export default player
