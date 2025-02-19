
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";


const HigherOrderComponent = (Component, idName ,bool) => // HIGHER ORDER FUNCTION 
  function LowerOrderComponent() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{once: bool, amount: 0.25 }}
        className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default HigherOrderComponent;
