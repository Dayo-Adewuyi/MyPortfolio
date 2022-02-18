import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {

  const textRef = useRef();
useEffect(()=>{
  init(textRef.current,
     { showCursor: true,
      backDelay:1500,
       strings: ['Frontend Developer','Content Creator', 'Blockchain Developer' ] })
   

},[])

  return (
    <div className='intro' id='intro '>
    <div className='left'>
    <div className="imageContainer">
        <img src="asset/godabeg.png" alt="dayo"/>
      </div>
    </div>
      
    <div className='right'>
      <div className="wrapper">
        <h2>Hello, I'm</h2>
        <h1>Dayo Adewuyi</h1>
        <h3>Freelance <span ref={textRef}></span></h3>
         </div>
          <a href="#portfolio">
            <img src="asset/down.png" alt = "down arrow"/>
          </a>
    </div>


    </div>
  )
}
 