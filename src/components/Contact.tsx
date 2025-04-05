import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import Reveal from './utils/Reveal';

interface ContactProps {
  setSectionActive: (section: string) => void;
}

const Contact = ({setSectionActive}:ContactProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            setSectionActive('contact')
        }
    },[isInView])


    return (
    <section id='contact' ref={ref} className='flex flex-col items-center gap-5 max-w-[1150px] m-auto p-[2.4rem] sm:p-[5.2rem] xl:p-[7.6rem]'>
        <Reveal>
            <h1 className='text-4xl sm:text-8xl font-extrabold'>Contact<span className='text-yellow-200'>.</span></h1>
        </Reveal>
        <Reveal>
            <p className='text-xl'>Shoot me an email if you want to connect! You can also find me on 
                <span className='text-yellow-200'> Linkedin</span> or 
            </p>
        </Reveal>
        <Reveal>
            <p className='text-xl'>
                <span className='text-yellow-200'> Instagram</span> If that's more your speed.
            </p>
        </Reveal>
        <Reveal>
             <p className='text-xl flex items-center gap-2'><i className="fa-solid fa-envelope text-yellow-200"></i> kokanorbert9@gmail.com</p>
        </Reveal>
    </section>
  )
}

export default Contact