import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import N1 from '../public/N1.png'
import N2 from '../public/N2.png'
import N3 from '../public/N3.png'
import N4 from '../public/N4.png'
import N5 from '../public/N5.png'

function swiper() {

    const data = [
        {
            image: "/public/N1.png",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nemo aut, ducimus cumque velit nulla labore maxime deserunt alias consectetur.",
            date: "20 Jun 2020"
        },
        {
            image: "/public/N2.png",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nemo aut, ducimus cumque velit nulla labore maxime deserunt alias consectetur.",
            date: "20 Jun 2020"
        },
        {
            image: "/public/N3.png",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nemo aut, ducimus cumque velit nulla labore maxime deserunt alias consectetur.",
            date: "20 Jun 2020"
        },
        {
            image: "/public/N4.png",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nemo aut, ducimus cumque velit nulla labore maxime deserunt alias consectetur.",
            date: "20 Jun 2020"
        },
        {
            image: "/public/N5.png",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nemo aut, ducimus cumque velit nulla labore maxime deserunt alias consectetur.",
            date: "20 Jun 2020"
        },
    ]

  return (
    <section className='w-full h-screen bg-[#121111]'>
        <div className='pt-10 pl-5 xl:pl-140 mb-10'>
        <div className='w-[3rem] h-[3rem]  relative rounded-full bg-[#2d2b2bb6]'>
            <h2 className=' absolute text-[1.3rem] text-[#E0E8EF] pt-2 pl-5'>News</h2>
        </div>
        </div>
        <div className='w-full h-full px-5 xl:px-0'>
        <Swiper
            breakpoints={{
                0: { slidesPerView: 1 },  // Small screens (Mobile)
                768: { slidesPerView: 2 },  // Medium screens (Tablets)
                1024: { slidesPerView: 3 }, // Large screens (Desktops)
                1280: { slidesPerView: 4 }, // Extra large screens
            }}
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
            clickable: true,
            }}
            // modules={[Pagination]}
            className="mySwiper h-130 w-full bgamber-300"
        >
        {
            data.map((elem,index)=>{
                return(
                    <SwiperSlide key={index} className='w-135 h-full bgamber-950'>
                        <div className='h-90 bg-black'>
                        <img className='object-cover' src={elem.image} alt="" />
                        </div>
                        <div className=' '>
                            <h2 className='text-[#EEF3F7] mb-4'>{elem.desc}</h2>
                            <div className='flex items-center gap-5'>
                                <div className='w-10 h-[1px] bg-amber-100'></div>
                                <h3 className='text-[#EEF3F7] '>{elem.date}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })
        }
        
      </Swiper>
        </div>
    </section>
  )
}

export default swiper