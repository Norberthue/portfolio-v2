import { motion } from "framer-motion"

interface NavbarProps {
  sectionActive: string;
}

const Navbar = ({sectionActive}: NavbarProps) => {
  return (
    <motion.nav
    initial={{x: -100}}
    animate={{x:0}}
    transition={{duration: 0.8, ease:'easeInOut'}}
    className='flex flex-col h-screen  bg-[#080808] items-center pr-2 pt-5 sticky top-0 left-0  z-20 '>
        <div className='text-2xl bg-[#111] pl-2 pr-2  pb-2 rounded-lg font-semibold mb-5'>
            <p>N<span className='text-amber-200 text-4xl'>.</span></p>
        </div>
        <motion.a href='#about'
        initial={{x: -100}}
        animate={{x:0}}
        transition={{duration: 0.8, ease:'easeInOut', delay:0.1}}
        className={`${sectionActive === 'about' ? 'border-r-1 bg-[#141414] text-[#fdfdfdbe]' : '' } cursor-pointer text-lg text-[#fdfdfd63] p-5 border-yellow-200 hover:text-[#fdfdfdbe] hover:border-r-1 hover:bg-[#141414] transition-colors duration-200`}
         style={{writingMode: 'vertical-lr'}}
         >
          About
        </motion.a>
        <motion.a href="#projects"
        initial={{x: -100}}
        animate={{x:0}}
        transition={{duration: 0.8, ease:'easeInOut', delay:0.2}}
        className={`${sectionActive === 'projects' ? 'border-r-1 bg-[#141414] text-[#fdfdfdbe]' : '' } cursor-pointer text-lg text-[#fdfdfd63] p-5 border-yellow-200 hover:text-[#fdfdfdbe] hover:border-r-1 hover:bg-[#141414] transition-colors duration-200`} 
        style={{writingMode: 'vertical-lr'}}
        >
          Projects
        </motion.a>
        {/* <motion.a 
        initial={{x: -100}}
        animate={{x:0}}
        transition={{duration: 0.8, ease:'easeInOut', delay:0.3}}
        className={`${sectionActive === 'exp' ? 'border-r-1 bg-[#141414] text-[#fdfdfdbe]' : '' } cursor-pointer text-lg text-[#fdfdfd63] p-5 border-yellow-200 hover:text-[#fdfdfdbe] hover:border-r-1 hover:bg-[#141414] transition-colors duration-200`} 
        style={{writingMode: 'vertical-lr'}}
        >
          Exp.
        </motion.a> */}
        <motion.a href="#contact"
        initial={{x: -100}}
        animate={{x:0}}
        transition={{duration: 0.8, ease:'easeInOut', delay:0.4}}
        className={`${sectionActive === 'contact' ? 'border-r-1 bg-[#141414] text-[#fdfdfdbe]' : '' } cursor-pointer text-lg text-[#fdfdfd63] p-5 border-yellow-200 hover:text-[#fdfdfdbe] hover:border-r-1 hover:bg-[#141414] transition-colors duration-200`} 
        style={{writingMode: 'vertical-lr'}}
        >
          Contact
        </motion.a>
    </motion.nav>
    
  )
}

export default Navbar