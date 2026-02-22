
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";


const HigherOrderComponent = (Component, idName, viewportAmount = 0.20) => // HIGHER ORDER FUNCTION 
  function LowerOrderComponent() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{once:true, amount: viewportAmount}}
        className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
        id={idName}
      >
        <span className='hash-span'>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default HigherOrderComponent;