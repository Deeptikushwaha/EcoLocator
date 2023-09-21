import React,{useState} from 'react'
//import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import "../Navbar/Navbar.css"
const Navbar= () => {
  const [isOpen, setIsOpen] = useState(true)

   const move = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='nav'>
      <div className="header">
        {/* <h1>
          <div className='profile'>
            <Link onClick={move} activeClass="active" to="intro" spy={true} smooth={true} offset={-80} duration={500}>
              <img src='/images/profile.jpeg' alt='deep'></img>
            </Link>
          </div>
        </h1> */}
        <div className='menu'>
            <ul>
                <li><Link onClick={move} activeClass="active" to="know" spy={true} smooth={true} offset={-80} duration={"500"}>About</Link> </li>
                <li><Link onClick={move} activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={"500"} > LogIn/Register</Link></li>
                <li><Link onClick={move}  activeClass="active" to="projects" spy={true} smooth={true} offset={-80} duration={"500"}> LocateCentres</Link></li>
                <li><Link onClick={move}  activeClass="active" to="blog" spy={true} smooth={true} offset={-80} duration={"500"}> Dashboard</Link></li>
                {/* <li><div className={`theme-switch ${!isDarkMode ?'light' : ''}`} onClick={handleToggle}><FaRegMoon /></div></li> */}
            </ul>
        </div>
      </div>
    </div>




    // <div>
    //     <nav>
    //   <ul>
    //     {/* Other navigation links */}
    //     <li>
    //       <Link to="/login">Login</Link>
    //     </li>
    //   </ul>
    // </nav>
    // </div>
  )
}

export default Navbar 
    
