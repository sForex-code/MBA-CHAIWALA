import React from 'react'
import "../styles/section.scss"
import {easeIn,motion} from "framer-motion"


const h3Motion={
  initial:{
    y:"-100%",
    opacity:0
  },
  whileInView:{
    y:"0",
    opacity:1,
  }
}

const textMotion={
  ...h3Motion,
  transition:{
    delay:0.3,
  }
}

const btnMotion={
  initial:{
    y:"100%",
    opacity:0
  },
  whileInView:{
    y:"0",
    opacity:1,
  },
  transition:{
    delay:0.3,
    ease:"easeIn"
  }
}
const imgMotion={
  initial:{
    scale:0.1,
    opacity:0
  },
  whileInView:{
    scale:1,
    opacity:1,
  },
  transition:{
    delay:0.5,
  }
}


const Section = ({h3,text,button,imgSrc,h3Clr,textClr,btnBgClr,btnClr,imgSize="70%",bgclr,btn=true}) => {
  return (
    <section style={{backgroundColor:bgclr}}>
        <div>
            <motion.h3 style={{color:h3Clr}} {...h3Motion}>{h3}</motion.h3>
            <motion.p {...textMotion} style={{color:textClr}}>{text}</motion.p >
            {
              btn && <motion.button {...btnMotion} data-cursorBtn={true} style={{color:btnClr,backgroundColor:btnBgClr,}}>{button}</motion.button>
            }
        <div>
            <motion.img  {...imgMotion} src={imgSrc} alt="imghere"  style={{width:imgSize}}/>
        </div>
        </div> 
    </section>
  )
}

export default Section