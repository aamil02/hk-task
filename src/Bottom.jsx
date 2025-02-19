import React from 'react'

function Bottom() {
  return (
    <section className='w-full h-screen bg-[#121111] overflow-hidden'>
        <div className=' xl:w-[100rem] h-[40rem] flex-col xl:p-60 bg-aber-300 max-sm:flex items-center justify-center'>
            <h1 className='text-[#EEF3F7] font-thin text-[4rem] xl:text-[7rem] '>White Architectures</h1>
            <div className='flex gap-12'>
            <h2 className='text-[#EEF3F7] font-thin text-[1.4rem]'>Instagram </h2>
            <h2 className='text-[#EEF3F7] font-thin text-[1.4rem]'>Twitter</h2>
            </div>
        </div>
        <div className='xl:w-[85rem] h-[0.5px] bg-white'></div>
        <div className=' flex justify-between p-10'>
            <h2 className='text-[#EEF3F7]'>Skillmix2021</h2>
            <h2 className='text-[#EEF3F7]'>Top</h2>
            <h2 className='text-[#EEF3F7]'>skillmix2021@gamil.com</h2>
        </div>
    </section>
  )
}

export default Bottom