import { motion } from 'framer-motion'

const Header = () => {
    

  return (
    <header className='flex justify-between gap-5 sm:gap-0 items-center pt-5 pb-5 pl-8 pr-8 sticky top-0 left-0 z-20' style={{backdropFilter: `blur(10px)`}}>
        <div className='flex gap-5'>
            <motion.a 
            initial={{y: -30}}
            animate={{y:0}}
            transition={{duration: 0.4, ease:'easeInOut'}}
            target="_blank"  href="https://www.linkedin.com/in/norbert-koka-9b1a82307/">
                <i className="fa-brands fa-linkedin text-xl opacity-50 hover:text-yellow-200 hover:opacity-100"></i>
            </motion.a>
            <motion.a 
            initial={{y: -30}}
            animate={{y:0}}
            transition={{duration: 0.4, ease:'easeInOut', delay:0.1}}
            target="_blank"  href="https://github.com/Norberthue">
                <i className="fa-brands fa-github text-xl opacity-50 hover:text-yellow-200 hover:opacity-100"></i>
            </motion.a>
            <motion.a  
            initial={{y: -30}}
            animate={{y:0}}
            transition={{duration: 0.4, ease:'easeInOut', delay:0.2}}
            target="_blank"  href="https://www.instagram.com/norek343/">
                <i className="fa-brands fa-instagram  text-xl opacity-50 hover:text-yellow-200 hover:opacity-100"></i>
            </motion.a>
            <motion.a 
            initial={{y: -30}}
            animate={{y:0}}
            transition={{duration: 0.4, ease:'easeInOut', delay:0.3}}
            target="_blank" rel="nofollow" href="https://www.codepen.io">
                <i className="fa-brands fa-codepen text-xl opacity-50 hover:text-yellow-200 hover:opacity-100"></i>
            </motion.a>
        </div>
            <a href='https://norbert-koka-resume.netlify.app/' target="_blank" >
                <motion.button 
                initial={{y: -80}}
                animate={{y:0}}
                transition={{duration: 0.4, type:'spring', damping:10, bounce:0.25, delay:0.3}}
                className='cursor-pointer border-2 pl-4 pr-4 pt-2 pb-2 sm:text-lg rounded-lg border-yellow-200 text-yellow-200 hover:text-black hover:bg-yellow-200 duration-200 transition-colors'>
                    My resume
                </motion.button>
            </a>        
    </header>
  )
}

export default Header
