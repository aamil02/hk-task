import React from 'react'
import white from '../public/Design White.png'

const About = () => {
  return (
    <section className='w-full h-screen  bg-[#121111]  justify-between  overflow-hidden pt-20'>
      <div className='w-[3rem] h-[3rem] relative rounded-full bg-[#2D2B2B] ml-[20rem] '>
        <h2 className='absolute text-[1.3rem] text-[#A2A5A6] pt-2 pl-5'>About</h2>
      </div>
      <div className='w-[50rem] pr-80 xl:pr-0 xl:w-[100rem] xl:h-[25rem] pt-[7rem]  '>
        <img  className='h-full w-full object-cover '  src="/public/Design White.png" alt="" />
      </div>
      <div className='text-[#A2A5A6] px-10 xl:pl-[50rem] pt-[5rem]'>
        <h3 className='xl:w-[26.5rem]'>Architecture is the learned game,correct and magnificent,of forms assembled in the light. So keeping this in mind we started with our work. We are a team of 5 Architects with a clean and white vision.</h3>
        <h5 className='underline'>Read More +</h5>
      </div>
    </section>
  )
}

export default About