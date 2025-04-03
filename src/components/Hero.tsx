import Reveal from "./utils/Reveal"

const Hero = () => {
  return (
    <section className='flex flex-col  gap-7  max-w-[1150px] m-auto p-[2.4rem] sm:p-[7.2rem] xl:p-[9.6rem] z-10'>
        <Reveal>
            <h1 className=" text-5xl sm:text-8xl font-extrabold">Hey, I'm Norbert<span className="text-yellow-200">.</span></h1>
        </Reveal>
        <Reveal>
            <p className="text-2xl sm:text-4xl">I'm a <span className="text-yellow-200">Front End Developer</span></p>
        </Reveal>
        <Reveal>
            <p className="text-lg sm:text-xl font-extralight">I'm currently on my journey to become a front-end-developer. Checkout my cool projects. I also love making video games . Let's connect!</p>
        </Reveal>
        <Reveal>
            <button className="bg-yellow-200 text-lg rounded-sm text-black pt-2 pb-2 pr-4 pl-4 hover:bg-yellow-200/90 cursor-pointer duration-200">Contact Me</button>
        </Reveal>
    </section>
  )
}

export default Hero