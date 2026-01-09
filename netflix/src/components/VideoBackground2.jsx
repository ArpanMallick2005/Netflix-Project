import React from 'react'

const VideoBackground2 = () => {
  return (
    <div className='w-screen'>
      <iframe
      className='w-screen aspect-video'
      src="https://www.youtube.com/embed/HVRzx17WHVk?si=mhXwhI8H_wbXNLyb&autoplay=1&mute=1" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; 
      autoplay; 
      clipboard-write; 
      encrypted-media; 
      gyroscope; 
      picture-in-picture; 
      web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen>
      </iframe>
    </div>
  )
}

export default VideoBackground2;