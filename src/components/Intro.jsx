import React from 'react'
import video from "../assets/MBA Chai Wala.mp4"

const Intro = (src) => {
  return (
    <div className='intro'>
    <video src={video} muted autoPlay loop controlsList='Nodownload'></video>
    <div></div>
    </div>
    
  )
}

export default Intro