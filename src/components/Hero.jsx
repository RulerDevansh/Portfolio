
import MouseTrackerRobot from "./MouseTrackerRobot";
import { motion } from "framer-motion";

function hero() {
  return (
    <section className='hero relative w-full h-screen mx-auto overflow-y-hidden overflow-x-hidden z-0'>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto p-6 sm:p-16 flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white`}>
            Hello I am <span className='text-[#0e8ec1]'>Devansh</span>
          </h1>
          <p className={`font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100`}>
            Welcome to my Portfolio Website
          </p>
          
        </div>
      </div>
        <div className='h-[80%] w-[100%] sm:w-[150%] mt-20 absolute  bottom-0 z-[-1]'>
            <MouseTrackerRobot/>
        </div>
        <div className='absolute bottom-3 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.0,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default hero