import React from 'react'
import cu1 from '../public/CU1.png'
import cu2 from '../public/CU2.png'
import cu3 from '../public/CU3.png'

function Contact() {
  return (
    <section className='w-full h-screen grid grid-cols-2 xl:grid-cols-3 gap-x-50 bg-[#EEF3F7]'>
        <div className='col-span-1'>
            <div className='w-[3rem] h-[3rem] relative rounded-full bg-[#E0E8EF] float-right'>
                <h2 className='absolute text-[1.3rem] text-[#2d2b2bb6] pt-2 pl-5 w-30'>Contact Us</h2>
            </div>
        </div>
        <div className='flex gap-20 flex-col col-span-2 pl-10 xl:pl-0'>
            <div className='flex'>
                <img className='w-[5rem] h-[5rem] opacity-40' src="/CU1.png" alt="" />
                <h2 className='text-[#2d2b2bfb] w-80 absolute p-12'>White Architectures 2787 Street,Fremont California <br />94538</h2>
            </div>
            <div className='flex'>
                <img className='w-[5rem] h-[5rem] opacity-40' src="/CU2.png" alt="" />
                <h2 className='text-[#2d2b2bfb] absolute p-12 '>Wagetintouch@whitearch.com </h2>
            </div>
            <div className='flex'>
                <img className='w-[5rem] h-[5rem] opacity-40' src="/CU3.png" alt="" />
                <h2 className='text-[#2d2b2bfb] absolute p-12 '>510-979-9360 </h2>
            </div>
        </div>
    </section>
  )
}

export default Contact