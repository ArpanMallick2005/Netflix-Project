import React from 'react'

const VideoBackground1 = () => {
  return (
    <div className='w-screen'>
      <iframe 
      className='w-screen aspect-video'
      src="https://www.youtube.com/embed/8aulMPhE12g?si=O1SBeJJFTv08z8v_&autoplay=1&mute=1" 
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

export default VideoBackground1;