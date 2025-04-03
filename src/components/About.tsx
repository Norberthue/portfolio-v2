import React from 'react'
import Reveal from './utils/Reveal'

const About = () => {
  return (
    
    <section className='relative overflow-hidden flex flex-col gap-7 max-w-[1150px] m-auto p-[2.4rem] sm:p-[7.2rem] xl:p-[9.6rem] z-10' style={{flex: "flex-direction:row-reverse"}}>
        
        <div className='flex items-center gap-4 mb-[2.4rem]'>
            <h3>
            <Reveal > 
                <span className='text-4xl  sm:text-6xl font-extrabold '>About<span className='text-yellow-200'>.</span></span>
            </Reveal>
            </h3>
            <div className='h-[0.5px] w-full bg-[#b4b4b450]'></div>
        </div>
        
        <div style={{gridTemplateColumns: "1fr 300px"}}>
            <div>

            </div>
            <div>

            </div>
        </div>
    </section>
  )
}

export default About