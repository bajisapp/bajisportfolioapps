import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#020e1f]'>
        {/* container */}
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
            <div>
        <p class="text-blue-600">Hi, my name is</p>
        <h1 class="text-2xl sm:text-2xl font-bold text-[#ccd6f6] animate-typing">Balaji K</h1>
        <h2 class="text-2xl sm:text-3xl font-bold text-[#515974] animate-typing">I'm a web designer</h2>
        <p class="text-[#8892b0] py-4 max-w-[500px] animate-typing">I have a background in Web and Graphics designing and experience of successfully designing a websites layout, usability and appearance. Over the last few years, I’ve had the opportunity of working for several companies, this has given me extensive Front-end web development / Graphics Design knowledge and technical skills.</p>
        <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-700 hover:border-blue-800'>View Works 
        <span className='group-hover:rotate-90 duration-300'>
        <HiArrowNarrowRight className='ml-4' /> 
        </span>
        </button>
        </div>
        </div>
        <div>
            <p>test</p>
        </div>
        </div>    
        </div>  
    </div>
  )
}

export default Home
