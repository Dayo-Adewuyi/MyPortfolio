import './topbar.scss'
import {Person, Mail} from "@material-ui/icons"
export default function Topbar({open, isOpen}) {

    
  return (
    <div className={'topbar ' + (open && 'active')} id='topbar'>
        <div className="wrapper">
        
            <div className="left">
                <a href="#intro" className='logo'>Dayo.</a>
                <div className="itemContainer">
                  <Person className="icon"/>
                  <span ><a className="html" href="tel:2349060992729">+234-906-099-2729</a></span>
                  </div>
                  <div className="itemContainer">
                  <Mail className="icon"/>
                  <span ><a className="html" href = "mailto:dayoadewuyi@protonmail.com">dayoadewuyi@protonmail.com</a></span>
                  </div>
                  </div>
                  
            <div className="right">
            <div className="hamburger" onClick={()=>isOpen(!open)}>
              <span classsName="line1"></span>
              <span classsName="line2"></span>
              <span classsName="line3"></span>
            </div>
            </div>
        </div>
    </div>
  )
}
