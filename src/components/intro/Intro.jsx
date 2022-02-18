import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
import Name from '../name/Name';
import { motion } from 'framer-motion'


export default function Intro() {

  const textRef = useRef();
useEffect(()=>{
  init(textRef.current,
     { showCursor: true,
      backDelay:1500,
       strings: ['Frontend Developer','Content Creator', 'Blockchain Developer' ] })
   

},[])

  return (
    <div className='intro' id='intro'>
    <div className='left'>
    <motion.div className="imageContainer"
      initial={{ x: '-100vw'}}
      animate={{x: 0}}
      transition={{type: 'string', duration: 2, bounce: 0.3}}>
        <img src="asset/godabeg.png" alt="dayo"/>
      </motion.div>
    </div>
      
    <div className='right'>
      <div className="wrapper">
        <h2>Hello, I'm </h2>
        <Name/>
        <h3>Freelance <span ref={textRef}></span></h3>
         </div>
          <a href="#portfolio">
            <img src="asset/down.png" alt = "down arrow"/>
          </a>
    </div>


    </div>
  )
}
 