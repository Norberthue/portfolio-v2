import Reveal from './utils/Reveal'
import {motion} from 'framer-motion'
const About = () => {
  return (
    
    <section className='relative overflow-hidden flex flex-col gap-2 max-w-[1150px] m-auto p-[2.4rem] sm:p-[5.2rem] xl:p-[7.6rem] z-10' style={{flex: "flex-direction:row-reverse"}}>
        
        <div className='flex items-center gap-4 mb-[2.4rem]'>
            <h3>
            <Reveal > 
                <span className='text-4xl  sm:text-6xl font-extrabold '>About<span className='text-yellow-200'>.</span></span>
            </Reveal>
            </h3>
            <div className='h-[0.5px] w-full bg-[#b4b4b450]'></div>
        </div>
        
        <div className='grid gap-10 grid-cols-1 xl:grid-cols-[1fr_230px]' >
            <div className='flex flex-col gap-4 text-sm sm:text-lg font-extralight'>
                <Reveal> 
                    <p className=''>I’m a self-taught frontend developer with a strong passion for building responsive, user-friendly websites and interactive experiences.
                       I love turning ideas into clean, functional code and bringing designs to life in the browser.</p>
                </Reveal>
                <Reveal>
                  <p>In addition to web development, I have a growing interest in game development and am currently exploring backend technologies to expand my skill set and become a well-rounded developer.</p>
                </Reveal>
                <Reveal>
                  <p>Outside of tech, I value quality time with family and friends, enjoy playing video games, and stay active by playing basketball.</p>
                </Reveal>
                <Reveal>
                  <p>I’m always eager to learn, grow, and take on new challenges. Let’s build something great together.</p>
                </Reveal>
                <Reveal> 
                  <div className='flex gap-4 items-center'>
                    
                  <p className='text-yellow-200 font-semibold'>My links <i className="fa-solid ml-2 fa-arrow-right"></i></p>
                  <a target="_blank"  href="https://www.linkedin.com">
                      <i className="fa-brands fa-linkedin text-xl opacity-50 hover:text-yellow-200 hover:opacity-100"></i>
                  </a>
                  <a
                  target="_blank"  href="https://github.com/Norberthue">
                      <i className="fa-brands fa-github text-xl opacity-50 hover:text-yellow-200 hover:opacity-100"></i>
                  </a>
                  <a  target="_blank"  href="https://www.instagram.com/norek343/">
                      <i className="fa-brands fa-instagram  text-xl opacity-50 hover:text-yellow-200 hover:opacity-100"></i>
                  </a>
                  <a target="_blank" rel="nofollow" href="https://www.codepen.io">
                      <i className="fa-brands fa-codepen text-xl opacity-50 hover:text-yellow-200 hover:opacity-100"></i>
                  </a>
                  </div>
                </Reveal>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-5'>
                    <Reveal>
                        <h1 className='text-2xl sm:text-2xl font-extrabold flex items-center gap-2'>
                            <i className="fa-solid fa-code mr-2 text-yellow-200"></i>WebDev
                        </h1>
                    </Reveal>
                    <Reveal>
                        <div className='flex flex-wrap gap-2'>
                            <span className='bg-[#232323] hover:bg-yellow-200 hover:text-black duration-200 p-2 rounded-2xl'>HTML</span>
                            <span className='bg-[#232323] hover:bg-yellow-200 hover:text-black duration-200 p-2 rounded-2xl'>JavaScript</span>
                            <span className='bg-[#232323] hover:bg-yellow-200 hover:text-black duration-200 p-2 rounded-2xl'>Css</span>
                            <span className='bg-[#232323] hover:bg-yellow-200 hover:text-black duration-200 p-2 rounded-2xl'>React</span>
                            <span className='bg-[#232323] hover:bg-yellow-200 hover:text-black duration-200 p-2 rounded-2xl'>Redux</span>
                            <span className='bg-[#232323] hover:bg-yellow-200 hover:text-black duration-200 p-2 rounded-2xl'>GitHub</span>
                            <span className='bg-[#232323] hover:bg-yellow-200 hover:text-black duration-200 p-2 rounded-2xl'>TypeScript</span>
                            <span className='bg-[#232323] hover:bg-yellow-200 hover:text-black duration-200 p-2 rounded-2xl'>TailwindCss</span>
                            <span className='bg-[#232323] hover:bg-yellow-200 hover:text-black duration-200 p-2 rounded-2xl'>FireBase</span>
                            <span className='bg-[#232323] hover:bg-yellow-200 hover:text-black duration-200 p-2 rounded-2xl'>Figma</span>
                        </div>
                    </Reveal>
                </div>

                <div className='flex flex-col gap-5'>
                    <Reveal>
                        <h1 className='text-2xl sm:text-2xl font-extrabold flex items-center gap-2'>
                        <i className="fa-solid mr-2 text-yellow-200 fa-face-smile"></i>Others
                        </h1>
                    </Reveal>
                    <Reveal>
                        <div className='flex flex-wrap gap-2'>
                            <span className='bg-[#232323] hover:bg-yellow-200 hover:text-black duration-200 p-2 rounded-2xl'>Python</span>
                            <span className='bg-[#232323] hover:bg-yellow-200 hover:text-black duration-200 p-2 rounded-2xl'>Pygame</span>
                            <span className='bg-[#232323] hover:bg-yellow-200 hover:text-black duration-200 p-2 rounded-2xl'>C</span> 
                            <span className='bg-[#232323] hover:bg-yellow-200 hover:text-black duration-200 p-2 rounded-2xl'>Django</span>
                            <span className='bg-[#232323] hover:bg-yellow-200 hover:text-black duration-200 p-2 rounded-2xl'>Godot</span>
                        </div>
                    </Reveal>
                </div>

            </div>
        </div>
    </section>
  )
}

export default About