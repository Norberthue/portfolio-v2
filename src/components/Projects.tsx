import React from 'react'
import Reveal from './utils/Reveal'

const Projects = () => {
  return (
    <section className='flex flex-col gap-2 max-w-[1150px] m-auto p-[2.4rem] sm:p-[5.2rem] xl:p-[7.6rem] z-10'> 
        <div className='flex items-center gap-4 mb-[2.4rem]'>
            <div className='h-[0.5px] w-full bg-[#b4b4b450]'></div>
            <h1>
            <Reveal>
                <span className='text-4xl  sm:text-6xl font-extrabold '>Projects<span className='text-yellow-200'>.</span></span>
            </Reveal>
            </h1>
        </div>
    </section>
  )
}

export default Projects