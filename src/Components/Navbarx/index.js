import React,{useState} from 'react'
import './style.css';
export default function Navbar(){

    let [nav_active,setActiveNav] = useState(false);
    let [haveStyle,setStyle] = useState({});
    let [isToggle,setToggle] = useState('')


    function openCloseNav(){
        if(nav_active){
            setActiveNav(false);
            setStyle({});
            setToggle('')
        }else{
            setActiveNav(true);
            setStyle({animation : '0.5s ease 0.5s 1 normal forwards running navlinkFade'});
            setToggle('toggle')
        }
    }

    return(
        <nav>
            <div className="logo">
                <h4>PRO CODE</h4>
            </div>
            <ul className={'nav-links' + (nav_active ? ' nav-active' : '')}>
                <li style={haveStyle} ><a href="#">HOME</a></li>
                <li style={haveStyle} ><a href="#">ABOUT</a></li>
                <li style={haveStyle} ><a href="#">PROJECTS</a></li>
                <li style={haveStyle} ><a href="#">CONTACT</a></li>
            </ul>
            <div className={'burger ' + isToggle} onClick={()=>{openCloseNav()}}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}