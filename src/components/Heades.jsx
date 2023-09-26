import React from 'react'
import logo from "../assets/logo.png"
import SVG from "../assets/my.svg"
const Header = () => {
  return (
     <>
     <div className='cursor' ></div>
     <a href="/" className="logo" >
        <img src={logo} alt=""  data-cursorBtn={true}/>
     </a>
     
     <a href="/" className="franchies" data-cursorBtn={true}>get a franchies</a>

     <img src={SVG} alt="mouse" className='mouse'/>

     </>
  )
}

export default Header