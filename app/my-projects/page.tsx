'use client'
import React from 'react'
import { Projects } from '@/constants'
import Head from 'next/head'

import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import  'swiper/css/pagination'
import 'swiper/css/free-mode'
import { FreeMode,Pagination } from 'swiper/modules'
import Link from 'next/link'
import Image from 'next/image'

function project() {
  return (

    <main>
    <div className='h-screen w-screen flex items-center justify-center bg-cover bg-center' style={{ backgroundImage: "url(/bg-3.jpg)" }}>
    <Swiper 
      breakpoints={{
        340:{
          slidesPerView:2,
          spaceBetween:15
        },
        700:{
          slidesPerView:3,
          spaceBetween:15
        }
      }}
      freeMode={true}
      pagination={{
        clickable:true
      }}
      modules={[FreeMode,Pagination]
      }
      className='max-w-[90%] lg:max-w-[80%]'
      >
    <div className='flex items-center justify-center flex-col h-screen'>
    <div className='container mx-auto py-36 px-8 '>
      
      {Projects.map(card=>(
        <div key={card.title} className='flex flex-col  group relative shadow-lg text-white rounded-xl  px-6 py-8 h-[250px] w-[215] lg:h-[400px] lg:w-[350px]'> 
        <SwiperSlide key = {card.title}>
        
        <div className='shadow-lg rounded-lg  '>
          <Image  className=' rounded-t-lg' src={card.src} alt =""/>
          
          <div className='p-5'>
          <h3 className='text-3xl font-bold text-slate-300'>{card.title}</h3>
          <p className='text-lg font-normal text-slate-400'>{card.text}</p>
          <Link key={card.title} href={card.srccode} className="mb-5 pl-4 min-w-[20%]">
           
           <button key={card.title} className= "bg-transparent hover:bg-gray-600 text-white font-semibold hover:text-white py-2 px-4 border border-gray-400 y-500 hover:border-transparent rounded">
           sourcecode 
           </button>
           
            </Link>
          </div>
          
        </div>
        
        </SwiperSlide>
        </div>
        ))}
       
    </div>
    </div>
    </Swiper>
    </div>
    </main>
  )
}

export default  project