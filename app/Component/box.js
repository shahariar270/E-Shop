import React from 'react'
import Countdown from './UI/Countdown'
import Image from 'next/image'

export default function Box() {
  return (
    <div className='m-auto mt-10 w-[100%] h-[500px] bg-black grid grid-cols-1 md:grid-cols-2 '>
        <div className="p-[56px] text-start">
            <h1 className='text-success text-[16px] font-semibold '>Categories</h1>
            <h1 className='text-white text-5xl font-semibold pt-8'>Enhance Your Music Experience</h1>
            <Countdown/>
            <button className='bg-success py-4 px-12 mt-7 text-white text-[16px] rounded'>Buy Now!</button>
        </div>


        <div className="flex justify-center">
            <Image
                src='/box.png'
                alt=''
                width={600}
                height={480}
                
            />
        </div>
    </div>
  )
}
