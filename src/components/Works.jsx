import React from 'react'
import vms01 from '../assets/projects/Visitor-system/register-system-01.png' ;
import vms02 from '../assets/projects/Visitor-system/register-system-02.png' ;
import vms03 from '../assets/projects/Visitor-system/register-system-07.png' ;
import Dashboard01 from '../assets/projects/Dashboard/Dashboard-01.png';
import Dashboard02 from '../assets/projects/Dashboard/Dashboard-02.png';
import Dashboard03 from '../assets/projects/Dashboard/Dashboard-03.png';
import Dashboard04 from '../assets/projects/Dashboard/Dashboard-04.png';
import Dashboard05 from '../assets/projects/Dashboard/Dashboard-05.png';
import Dashboard06 from '../assets/projects/Dashboard/Dashboard-06.png';
import Dashboard07 from '../assets/projects/Dashboard/Dashboard-07.png';
import Elementor01 from '../assets/projects/Elementor/Elementor-01.png';
import Elementor02 from '../assets/projects/Elementor/Elementor-02.png';

function Works() {
  return (
    <div name='works' className='bg-[#0c1016] text-gray-300 '> 
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4  border-blue-700'>Works</p>
            <p className='py-4'>// Check out some of my recent work </p>
        </div>

        <div className=' max-w-[1200px] mx-auto p-1 flex flex-col justify-center w-full h-full  items-center'>
  
 
  <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 pt-4'>
    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex jusitfy-center items-center mx-auto content-div'>
      <div>
         <img src={Dashboard06} className='border-solid border-1 border-indigo-600 rounded-xl' />
      </div>
    </div>
    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex jusitfy-center items-center mx-auto content-div'>
      <div>
         <img src={Dashboard07} className='border-solid border-1 border-indigo-600 rounded-xl' />
      </div>
    </div>

  </div>
  <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 pt-4'>
    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex jusitfy-center items-center mx-auto content-div'>
      <div>
         <img src={Dashboard03} className='border-solid border-1 border-indigo-600 rounded-xl' />
      </div>
    </div>
    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex jusitfy-center items-center mx-auto content-div'>
      <div>
         <img src={Dashboard04} className='border-solid border-1 border-indigo-600 rounded-xl' />
      </div>
    </div>

  </div>
  <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 pt-4'>
    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex jusitfy-center items-center mx-auto content-div'>
      <div>
         <img src={Dashboard02} className='border-solid border-1 border-indigo-600 rounded-xl' />
      </div>
    </div>
    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex jusitfy-center items-center mx-auto content-div'>
      <div>
         <img src={Dashboard01} className='border-solid border-1 border-indigo-600 rounded-xl' />
      </div>
    </div>

  </div>

  <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex jusitfy-center items-center mx-auto content-div'>
      <div>
         <img src={vms01} className='border-solid border-1 border-indigo-600 rounded-xl'  />
   
      </div>
    </div>
    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex jusitfy-center items-center mx-auto content-div'>
      <div>
         <img src={vms02} className='border-solid border-1 border-indigo-600 rounded-xl' />
      </div>
    </div>

  </div>
  <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 pt-4'>
    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex jusitfy-center items-center mx-auto content-div'>
      <div>
         <img src={vms03} className='border-solid border-1 border-indigo-600 rounded-xl' />
      </div>
    </div>
    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex jusitfy-center items-center mx-auto content-div'>
      <div>

      <img src={Dashboard05} className='border-solid border-1 border-indigo-600 rounded-xl' />
      </div>
    </div>

  </div>

  <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 pt-4'>
    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex jusitfy-center items-center mx-auto content-div'>
      <div>
         <img src={Elementor02} className='border-solid border-1 border-indigo-600 rounded-xl' />
      </div>
    </div>
    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex jusitfy-center items-center mx-auto content-div'>
      <div>
         <img src={Elementor01} className='border-solid border-1 border-indigo-600 rounded-xl' />
      </div>
    </div>

  </div>

  </div>

        </div>
    </div>
  )
}

export default Works
