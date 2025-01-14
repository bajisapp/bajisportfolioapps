import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import loginscreen from '../assets/LoginScreen.jpeg'
import loginscreen2 from '../assets/LoginScreen2.jpg'
import ReactNativeDesign01 from '../assets/projects/Mobile/React-Native-01.gif'


const Home = () => {
  return (
    <div name='home' class='w-full  bg-[#020e1f]'>
        {/* container */}
    


<div className="container mx-auto grid grid-cols-1 sm:grid-cols-4" style={{paddingTop:'10%', paddingBottom:'10%'}}> 


<div class="col-span-1 sm:col-span-1"></div>
  <div className="col-span-3 sm:col-span-1">
    <div className="h-full p-4">
      <div>
        <p className="text-blue-600">Hi, my name is</p>
        <h1 className="text-2xl sm:text-2xl font-bold text-[#ccd6f6] animate-typing">Balaji K</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#515974] animate-typing">I'm a web designer.</h2>
        <p className="text-[#8892b0] py-4 max-w-[500px] animate-typing">I have a background in Web and Graphics designing and experience of successfully designing a website's layout, usability, and appearance. Over the last few years, I’ve had the opportunity to work for several companies; this has given me extensive Front-end web development / Graphics Design knowledge and technical skills.</p>
        <div>
          <Link to="works" smooth={true} duration={500} className='text-white border-2 hover:bg-blue-600 hover:border-blue-300 px-4 py-4 my-8 mx-auto flex items-center'>
            Works
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-4' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>


  <div className="col-span-3 sm:col-span-1" style={{textalign: 'center'}}>    
<div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={ReactNativeDesign01} alt="Login Screen" style={{ height: '500px',   borderRadius:'10px' }} />
  </div>
</div>


       {/* container
  <div className="col-span-3 sm:col-span-1">
  <div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={loginscreen} alt="Login Screen" style={{ height: '500px',    borderRadius:'10px' }} />
  </div>
</div>
 */}

   {/* container
<div className="col-span-3 sm:col-span-1" >
<div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={loginscreen2} alt="Login Screen" style={{ height: '500px' ,   borderRadius:'10px'}} />
    
  </div>

  <a className='flex justify-between items-center w-full text-gray-300' target="_blank" href='https://resaleapp.onrender.com/'> Go to ResaleAPP . </a>

</div> */}

</div>
    

    </div>
  )
}

export default Home
