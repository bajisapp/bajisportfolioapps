import React, {useState} from 'react'
import Logo from '../assets/logo-my.jpg'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {Link} from 'react-scroll'

function Newbar() {
 const [nav, setNav] = useState(false)
 const handleclick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{height:'50px'}} />
      </div>
      
        <ul className='hidden md:flex'>
            <li>
            <Link to="home" smooth={true} duration={500} >
            Home
        </Link>
            </li>
                    <li>
                    <Link to="skills" smooth={true} duration={500} >
            Skills
        </Link>
                    </li>
            <li> <Link to="works" smooth={true} duration={500} >
            Works
        </Link></li>
   
        <li> <Link to="contact" smooth={true} duration={500} >
            Contact
        </Link></li>
        </ul>
      

      {/* Hamburger */}
      <div onClick={handleclick} className='md:hidden z-10'>
       {!nav ?<FaBars /> : <FaTimes /> }
      </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>  
             <Link onClick={handleclick} to="home" smooth={true} duration={500} >
            Home
        </Link></li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleclick}  to="skills" smooth={true} duration={500} >
            Skills
        </Link></li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleclick}  to="works" smooth={true} duration={500} >
            Works
        </Link></li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleclick}  to="contact" smooth={true} duration={500} >
            Contact
        </Link>
            </li>
        </ul>

        {/* Social Icons */}
        <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[140px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077b5]'>
                <a className='flex justify-between items-center w-full text-gray-300' href='/'>Linkedin <FaLinkedin className='h-[60px]' /> </a>
            </li>
            <li className='w-[140px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]'>
                <a className='flex justify-between items-center w-full text-gray-300' href='/'>GitHub <FaGithub className='h-[60px]' /> </a>
            </li>
        </ul>
        </div>

    </div>
  )
}

export default Newbar
