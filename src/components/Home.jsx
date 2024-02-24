import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import loginscreen from '../assets/LoginScreen.jpeg'
import loginscreen2 from '../assets/LoginScreen2.jpg'


const Home = () => {
  return (
    <div name='home' className='w-full  bg-[#020e1f]'>
        {/* container */}
    


        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-4" style={{paddingTop:'10%', paddingBottom:'10%'}}> 
  <div className="col-span-3 sm:col-span-1">
    <div class="h-full p-4">
      <div>
        <p class="text-blue-600">Hi, my name is</p>
        <h1 class="text-2xl sm:text-2xl font-bold text-[#ccd6f6] animate-typing">Balaji K</h1>
        <h2 class="text-2xl sm:text-3xl font-bold text-[#515974] animate-typing">I'm a web designer.</h2>
        <p class="text-[#8892b0] py-4 max-w-[500px] animate-typing">I have a background in Web and Graphics designing and experience of successfully designing a website's layout, usability, and appearance. Over the last few years, I’ve had the opportunity to work for several companies; this has given me extensive Front-end web development / Graphics Design knowledge and technical skills.</p>
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
  <div className="col-span-3 sm:col-span-1">
  <div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={loginscreen} alt="Login Screen" style={{ height: '500px',    borderRadius:'10px' }} />
  </div>
</div>
<div className="col-span-3 sm:col-span-1" >
<div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={loginscreen2} alt="Login Screen" style={{ height: '500px' ,   borderRadius:'10px'}} />
    
  </div>

  <a className='flex justify-between items-center w-full text-gray-300' target="_blank" href='https://resaleapp.onrender.com/'> Go to ResaleAPP . </a>

</div>
<div className="col-span-3 sm:col-span-1" style={{textalign: 'center'}}>
<div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={loginscreen} alt="Login Screen" style={{ height: '500px',   borderRadius:'10px' }} />
  </div>
</div>
</div>
    

    </div>
  )
}

export default Home
