import { useEffect } from "react";
import Intro from "./components/Intro";
import Section from "./components/Section";
import src from "./assets/academy.png"
import src2 from "./assets/story.png"
import tedtalkimg from "./assets/in-the-news.gif"
import franchiseimg from "./assets/franchise.gif"
import baratimg from "./assets/image1.png"
import mapimg from "./assets/locations.png"
import coursesimg from "./assets/image2.png"
import chaiwalaimg from "./assets/mba-cares.gif"
import albumimg from "./assets/image3.png"
import "./styles/App.scss"
import "./styles/intro.scss"
import "./styles/footer.scss"
import "./styles/Heades.scss"
import "./styles/mediaQuerry.scss"
import data from "./data/data.json"
import Footer from "./components/Footer";
import Header from "./components/Heades"

const yellow ="#ffff00",pink="#d410a6",white="#ffff",brown="#823e0e"


function App() {
  const {freshTopic,freshTopic2,tedTalks,franchise,map,courses,album,barat,chaiwala}=data
  
const cursorr=(e)=>{
  const cursor= document.querySelector(".cursor")
  cursor.style.top=`${e.pageY - 14}px`
  cursor.style.left=`${e.pageX - 14}px`

  const element=e.target

  if(element.getAttribute("data-cursorBtn")){
    cursor.classList.add("cursorHover")
  }
  else if(element.getAttribute("data-cursorBtnn")){
    cursor.classList.add("cursorHovermini")
  }
  else{
    cursor.classList.remove("cursorHover")
    cursor.classList.remove("cursorHovermini")
  }
}

  useEffect(() => {

  window.addEventListener("mousemove",cursorr)
    return () => {
      window.removeEventListener("mousemove",cursorr)
    }
  }, [])
  

  return (
    <div >
      <Intro/>
      {/* freshTopics */}
      <Section h3={freshTopic.heading} 
      text={freshTopic.text}
      button={freshTopic.btn}
      imgSrc={src}
      h3Clr={yellow}
      textClr={yellow}
      btnBgClr={yellow}
      btnClr={pink}
      bgclr={pink}
      />
       {/* freshTopics2 */}
       <Section h3={freshTopic2.heading} 
      text={freshTopic2.text}
      button={freshTopic2.btn}
      imgSrc={src2}
      h3Clr={yellow}
      textClr={yellow}
      btnBgClr={yellow}
      btnClr={pink}
      bgclr={pink} />
         {/* tedtalks */}
         <Section h3={tedTalks.heading} 
      text={tedTalks.text}
      button={tedTalks.btn}
      imgSrc={tedtalkimg}
      h3Clr={pink}
      textClr={pink}
      btnBgClr={pink}
      btnClr={yellow}
      bgclr={yellow} />
    {/* francies*/}
    <Section h3={map.heading} 
      text={map.text}
      button={ "OWN A FRANCHISE"}
      imgSrc={franchiseimg}
      h3Clr={pink}
      textClr={pink}
      btnBgClr={brown}
      btnClr={yellow}
      bgclr={white} />

      {/*map*/}

      <Section h3={franchise.heading} 
      text={franchise.text}
      button={franchise.btn}
      imgSrc={mapimg}
      h3Clr={yellow}
      textClr={yellow}
      btnBgClr={brown}
      btnClr={yellow}
      bgclr={pink}
      btn={false} />

      {/*courser*/}

      <Section h3={courses.heading} 
      text={courses.text}
      button={courses.btn}
      imgSrc={coursesimg}
      h3Clr={pink}
      textClr={pink}
      btnBgClr={pink}
      btnClr={yellow}
      bgclr={yellow}
       imgSize="25%" />

      {/*courser*/}

      <Section h3={album.heading} 
      text={album.text}
      button={album.btn}
      imgSrc={albumimg}
      h3Clr={pink}
      textClr={brown}
      btnBgClr={brown}
      btnClr={yellow}
      bgclr={white}/>

      {/*barat*/}

      <Section h3={barat.heading} 
      text={barat.text}
      button={barat.btn}
      imgSrc={baratimg}
      h3Clr={yellow}
      textClr={yellow}
      btnBgClr={yellow}
      btnClr={pink}
      bgclr={pink}
      imgSize="45%"/>

      {/*chaiwala*/}

      <Section h3={chaiwala.heading} 
      text={chaiwala.text}
      button={chaiwala.btn}
      imgSrc={chaiwalaimg}
      h3Clr={pink}
      textClr={brown}
      btnBgClr={brown}
      btnClr={yellow}
      bgclr={white}
      />

      <Footer/>
      <Header/>

    </div>
  );
}

export default App;
