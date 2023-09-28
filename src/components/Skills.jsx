import React from 'react'

import CSS from '../assets/tailwind.png'
import firebase from '../assets/firebase.png'
import bootstrap from '../assets/bootstrap.png'
import photoshops from '../assets/Photoshop.png'
import aspnet from '../assets/asp.png'
import sql from '../assets/SQL SERVER.png'


function Skills() {
  return (
    <div name='skills' className='bg-[#142133] text-gray-300 '> 

    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4  border-blue-700'>Experience</p>
            <p className='py-4'>// These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto' src={CSS} alt='CSS Icon' />
                <p>Tailwind CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto' src={firebase} alt='CSS Icon' />
                <p>Firebase</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto' src={bootstrap} alt='CSS Icon' />
                <p>Bootstrap</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto' src={photoshops} alt='CSS Icon' />
                <p>Photoshop</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto' src={aspnet} alt='CSS Icon' />
                <p>ASP.net</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                <img className='w-20 mx-auto' src={sql} alt='CSS Icon' />
                <p>SQL Server</p>
            </div>

        </div>

    </div>      
    </div>
  )
}

export default Skills
