import React from 'react'


const Footer = () => {
  const footerLinks=(element)=>{
    const allFooterA=document.querySelectorAll(".footerLinks")

    switch (element) {
        case 0:
            allFooterA.forEach((item,index)=>
            index === 0? (item.style.opacity=1):(item.style.opacity=0.2))
            break;
        case 1:
            allFooterA.forEach((item,index)=>
            index === 1?(item.style.opacity=1) : (item.style.opacity=0.2))
            break;
        case 2:
            allFooterA.forEach((item,index)=>
            index === 2?(item.style.opacity=1) : (item.style.opacity=0.2))
            break;
        case 3:
            allFooterA.forEach((item,index)=>
            index === 3?(item.style.opacity=1) : (item.style.opacity=0.2))
            break;
        case 4:
            allFooterA.forEach((item,index)=>
            index === 4?(item.style.opacity=1) : (item.style.opacity=0.2))
            break;
    
        default:
         allFooterA.forEach((item,index)=>(item.style.opacity=1))
            break;
    }

  }

  const backtonormal=()=>{
    const allFooterA=document.querySelectorAll(".footerLinks")

    allFooterA.forEach((item)=>(item.style.opacity=1))
  }


  return (
    <>
    <footer>
    <div>
        <h1>Lets
        <br/>
        #ConnectOnCutting</h1>
    </div>
    <aside onMouseLeave={backtonormal}>
        <a href="/" className="footerLinks" data-cursorBtnn={true} onMouseOver={()=>footerLinks(0)}>Home</a>
        <a href="/francies" className="footerLinks" data-cursorBtnn={true} onMouseOver={()=>footerLinks(1)}>francies</a>
        <a href="/Media" className="footerLinks" data-cursorBtnn={true} onMouseOver={()=>footerLinks(2)}>Media</a>
        <a href="/Events" className="footerLinks" data-cursorBtnn={true} onMouseOver={()=>footerLinks(3)}>Events</a>
        <a href="/chaiwala" className="footerLinks"data-cursorBtnn={true} onMouseOver={()=>footerLinks(4)}>Chai Wala Cares</a>
    </aside>

    <div>
        <h5>Emails</h5>
        <a href="mailto: MBACHAIWALA@GMAIL.COM">MBACHAIWALA@GMAIL.COM</a>
        <a href="mailto: MBACHAIWALA@GMAIL.COM">PRAFULLMBACHAIWALA@GMAIL.COM</a>
    </div>
    <div>
        <h5>Phone</h5>
        <a href="tel: +918287562288">+918287562288 </a>
    </div>

   <p>&#169; MADE BY SURAJ X 6PACK</p>
   </footer>
   <div className="footerDiv"></div>
    </>
    
  )
}

export default Footer