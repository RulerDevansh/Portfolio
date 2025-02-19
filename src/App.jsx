import {Nav,Hero,About,TechBalls,Project, Contact, Stars} from './components'
import { motion } from "framer-motion";
import {github , linkedln} from './assets'

function App() {
  return (
    <div>
        {/* <h1 className="">Hello </h1> */}
      <Nav />

      <Hero />
      <a href='#about'>
        <div className='absolute  w-full flex justify-center items-center -mt-11 '>
            <div className='w-[30px] h-[45px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-2 rounded-full bg-secondary'
              />
            </div>
        </div>
      </a>

      <About />
      <TechBalls/>
      <Project/>

      <div className='relative z-0'>
        <Contact/>
        <Stars />
      </div>
    
    <footer>
      <div className='flex justify-evenly items-center h-8 sm:h-16 text-slate-400'>
        <p >&copy; 2025 Devansh Srivastava</p> 
        <div className='flex gap-4'>
          <span>Social</span>
          <img onClick={() => window.open("https://github.com/RulerDevansh", "_blank")} className='h-auto w-6 cursor-pointer' src={github} alt="github" />
          <img onClick={() => window.open("https://www.linkedin.com/in/devansh-srivastava-387574297/", "_blank")} className='h-auto w-6 cursor-pointer' src={linkedln} alt="linkedln" />
        </div>
      </div>
    </footer>
    </div>
  )
}

export default App