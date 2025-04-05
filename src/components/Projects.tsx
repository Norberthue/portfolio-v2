import { useEffect, useRef } from 'react'
import Reveal from './utils/Reveal'
import { useInView } from 'framer-motion'

interface ProjectsProps {
    setSectionActive: (section: string) => void;
}

const Projects = ({setSectionActive}:ProjectsProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {amount: 0.5})

    useEffect(() => {
        if (isInView) {
            setSectionActive('projects')
        }
    },[isInView])

    return (
    <section ref={ref} id='projects' className='relative flex flex-col gap-2 max-w-[1150px] m-auto p-[2.4rem] sm:p-[5.2rem] xl:p-[7.6rem] z-10'> 
        <div className='flex items-center gap-4 mb-[2.4rem]'>
            <div className='h-[0.5px] w-full bg-[#b4b4b450]'></div>
            <h3>
            <Reveal>
                <span className='text-4xl  sm:text-6xl font-extrabold '>Projects<span className='text-yellow-200'>.</span></span>
            </Reveal>
            </h3>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2  gap-10'>
            <div className='flex flex-col gap-4'>
                <Reveal width='100%'>
                  <a href='https://ucg-site.netlify.app/' target='_blank'>
                    <div className='relative w-full bg-[#232323] group rounded-lg aspect-[16/9] overflow-hidden'>
                        <img className='cursor-pointer absolute bottom-0 left-[50%] group-hover:w-[90%] group-hover:rotate-2 -translate-x-[50%] translate-y-[5%] w-[85%] duration-200' src='./src/assets/images/ucg.png'></img>
                    </div>
                  </a>
                </Reveal>
                <Reveal width='100%'>
                  <div className='flex items-center gap-4 '>
                      <p className='text-xl font-extrabold '>UltraClothGang</p>
                      <div className='h-[0.5px] w-full bg-[#b4b4b450]'></div>
                      <a href='https://github.com/Norberthue/react-cloth-site' target='_blank'>
                        <i className="fa-brands fa-github text-xl opacity-50 hover:text-yellow-200 hover:opacity-100"></i>
                      </a>
                      <a href='https://ucg-site.netlify.app/' target='_blank'>
                        <i className="fa-solid text-xl opacity-50 hover:text-yellow-200 hover:opacity-100 fa-right-from-bracket"></i>
                      </a>
                  </div>
                </Reveal>
                <Reveal>
                  <span className='text-yellow-200 text-lg'>React - Js - Html - TailwindCss - Redux</span>
                </Reveal>
                <Reveal>
                  <p className='text-sm sm:text-md font-extralight'>An e-commerce website for luxury streetwear with add to cart functionality ,
                     fully responsive design , built using React and Tailwind... <a href='https://ucg-site.netlify.app/' target='_blank' className='text-yellow-200 duration-200 underline-offset-4 hover:underline'> Show More {'>'} </a></p>
                </Reveal>
            </div>

            <div className='flex flex-col gap-4'>
                <Reveal width='100%'>
                    <a href='https://hippopomotodoapp.netlify.app/' target='_blank'>
                        <div className='relative w-full bg-[#232323] group rounded-lg aspect-[16/9] overflow-hidden'>
                            <img className='cursor-pointer absolute bottom-0 left-[50%] group-hover:w-[90%] group-hover:rotate-2 -translate-x-[50%] translate-y-[5%] w-[85%] duration-200' src='./src/assets/images/pomotodo.png'></img>
                        </div>
                    </a>
                </Reveal>
                <Reveal width='100%'>
                  <div className='flex items-center gap-4 '>
                      <p className='text-xl font-extrabold '>HippoPomoTodo</p>
                      <div className='h-[0.5px] w-full bg-[#b4b4b450]'></div>
                      <a href='https://github.com/Norberthue/pomo-todo-app' target='_blank'>
                        <i className="fa-brands fa-github text-xl opacity-50 hover:text-yellow-200 hover:opacity-100"></i>
                      </a>
                      <a href='https://hippopomotodoapp.netlify.app/' target='_blank'>
                        <i className="fa-solid text-xl opacity-50 hover:text-yellow-200 hover:opacity-100 fa-right-from-bracket"></i>
                      </a>
                  </div>
                </Reveal>
                <Reveal>
                  <span className='text-yellow-200 text-lg'>React - Html - Tailwind - FireBase - TypeScript</span>
                </Reveal>
                <Reveal>
                  <p className='text-sm sm:text-md font-extralight'>A website with login & register functionality for managing projects and tasks. Where you can create multiple templates for your own projects.
                    Inside your project you can create columns and tasks with timer and description. <a href='https://hippopomotodoapp.netlify.app/' target='_blank'
                      className='text-yellow-200 duration-200 underline-offset-4 hover:underline'>Show More {'>'} </a></p>
                </Reveal>
            </div>

            <div className='flex flex-col gap-4'>
                <Reveal width='100%'>
                <a href='https://the-poke-site.netlify.app/' target='_blank'>
                  <div className='relative w-full bg-[#232323] group rounded-lg aspect-[16/9] overflow-hidden'>
                      <img className='cursor-pointer absolute bottom-0 left-[50%] group-hover:w-[90%] group-hover:rotate-2 -translate-x-[50%] translate-y-[5%] w-[85%] duration-200' src='./src/assets/images/PokeApi.png'></img>
                  </div>
                </a>
                </Reveal>
                <Reveal width='100%'>
                  <div className='flex items-center gap-4 '>
                      <p className='text-xl font-extrabold w-[180px]'>ThePokeSite</p>
                      <div className='h-[0.5px] w-full bg-[#b4b4b450]'></div>
                      <a href='https://github.com/Norberthue/pokemon-site-v2' target='_blank'>
                        <i className="fa-brands fa-github text-xl opacity-50 hover:text-yellow-200 hover:opacity-100"></i>
                      </a>
                      <a href='https://the-poke-site.netlify.app/' target='_blank'>
                        <i className="fa-solid text-xl opacity-50 hover:text-yellow-200 hover:opacity-100 fa-right-from-bracket"></i>
                      </a>
                  </div>
                </Reveal>
                <Reveal>
                  <span className='text-yellow-200 text-lg'>React - Js - Html - TailwindCss - REST API</span>
                </Reveal>
                <Reveal>
                  <p className='text-sm sm:text-md font-extralight'>A website for a pokemon community, where you can filter pokemons by type or you can search for a specific pokemon.
                    <a  href='https://the-poke-site.netlify.app/' target='_blank' className='text-yellow-200 duration-200 underline-offset-4 hover:underline'> Show More {'>'} </a></p>
                </Reveal>
            </div>
            <div className='flex flex-col gap-4'>
                <Reveal width='100%'>
                    <a href='https://simplewood.netlify.app/' target='_blank'>
                        <div className='relative w-full bg-[#232323] group rounded-lg aspect-[16/9] overflow-hidden'>
                            <img className='cursor-pointer absolute bottom-0 left-[50%] group-hover:w-[90%] group-hover:rotate-2 -translate-x-[50%] translate-y-[5%] w-[85%] duration-200' src='./src/assets/images/simplewood.png'></img>
                        </div>
                    </a>
                </Reveal>
                <Reveal width='100%'>
                  <div className='flex items-center gap-4 '>
                      <p className='text-xl font-extrabold w-[180px]'>SimpleWood</p>
                      <div className='h-[0.5px] w-full bg-[#b4b4b450]'></div>
                      <a href='https://github.com/Norberthue/react-shop-site' target='_blank'>
                        <i className="fa-brands fa-github text-xl opacity-50 hover:text-yellow-200 hover:opacity-100"></i>
                      </a>
                      <a href='https://simplewood.netlify.app/' target='_blank'>
                        <i className="fa-solid text-xl opacity-50 hover:text-yellow-200 hover:opacity-100 fa-right-from-bracket"></i>
                      </a>
                  </div>
                </Reveal>
                <Reveal>
                  <span className='text-yellow-200 text-lg'>React - Js - Html - TailwindCss - Redux</span>
                </Reveal>
                <Reveal>
                  <p className='text-sm sm:text-md font-extralight'>An e-commerce website for wood furniture with add to cart functionality ,
                  fully responsive design , built using React and Tailwind...<a href='https://simplewood.netlify.app/' target='_blank' className='text-yellow-200 duration-200 underline-offset-4 hover:underline'> Show More {'>'} </a></p>
                </Reveal>
            </div>
        </div>
    </section>
  )
}

export default Projects