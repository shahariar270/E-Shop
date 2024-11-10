
import React from 'react'

export default async function  Top({headingOne,headingTwo}) {



  return (
    <div className='mt-10 w-[385] h-32 flex flex-col justify-start'>

        <div className="flex flex-row  h-10 justify-start  ">
            <div className="bg-primary w-5 rounded"></div>
            <h1 className='text-xl text-primary font-semibold py-2 pl-7'>
                {headingOne}
            </h1>
           
        </div>

        <div className="flex justify-start py-5">
            <h1 className='text-4xl font-semibold '>{headingTwo}</h1>
    
        </div>
    </div>
  )
}
