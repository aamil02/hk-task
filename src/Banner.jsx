import React from 'react'
import logo from '../public/Logo.png'
import backimg from '../public/P1.jpg'
const Banner = () => {
  return (
    <section  className='w-full h-screen bg-[url("/public/P1.jpg")] bg-cover bg-top overflow-x-hidden'  >
        <section  className='w-full h-screen bg-black/75 '>
        <nav className='flex w-full h-fit fixed items-center justify-between xl:p-15'>
             <img className='h-15 opacity-60' src={'/public/Logo.png'} alt="" /> 
             <div className='text-[#A2A5A6] hidden xl:flex items-center justify-between gap-20' >
                <h4>Projects</h4>
                <h4>About</h4>
                <h4>News</h4>
                <h4>Services</h4>
                <h4>Contact</h4>
             </div>
        </nav>
        <div className=' h-full xl:flex items-center' >
            <div className='w-[47rem] xl:flex items-center justify-between'>
            <div className='w-70 xl:h-[0.5px] bg-white opacity-55'/>
            <div className='text-[#767779] hidden xl:block'>
                <h2 className=' text-xl xl:text-[35px] w-80 tracking-wide '>Sharp & Beautiful The Edge Building</h2>
                <h4>Madrid, Spain </h4>
            </div>
            </div>
            <div className='w-[35rem] xl:flex items-center justify-between'>
                <img className='h-[30rem] w-[22rem] pt-40 xl:pt-10 ' src={'/public/P1.jpg'} alt="" />
                <div>
                  <h2 className='text-[#A2A5A6] text-[1.5rem] ' >1/5</h2>
                </div>
            </div>
        </div>
        </section>
    </section>
  )
}

export default Banner