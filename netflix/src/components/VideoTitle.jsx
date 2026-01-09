import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = () => {
  return (
    <div className='w-screen aspect-video absolute text-white pt-[18%] p-12'>
      <h1 className='text-3xl font-bold'>FATE</h1>
      <h4>THE WINX SAGA</h4>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
      <div className='flex mt-8'>
        <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:opacity-80'>
            <CiPlay1 size="20px"/>
            <span className='ml-1'>Play</span>
            </button>
        <button className='flex items-center mx-2 px-6 py-2 bg-gray-500 opacity-70 text-black rounded-md'>
            <IoMdInformationCircleOutline size="20px"/>
            <span className='ml-1'>Watch more</span>
            </button>
      </div>
    </div>
  )
}

export default VideoTitle;