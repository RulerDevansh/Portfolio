import { useMemo, useCallback } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from "../utils/motion";
import { CodeChef, CodeForces } from '../assets';

function Rating() {
  const CodeChefRating = { current: 1684, max: 1855 };
  const CodeForcesRating = { current: 842, max: 1032 };

  const ratingItems = useMemo(() => [
    {
      title: `CodeChef Rating: ${CodeChefRating.current}   Max: ${CodeChefRating.max}`,
      icon:  CodeChef,
    },
    {
      title: `CodeForces Rating: ${CodeForcesRating.current}   Max: ${CodeForcesRating.max}`,
      icon:  CodeForces,
    },
  ], []);

  const SkillsCard = useCallback(({ index, title, icon }) => (
    <Tilt className='w-56'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 sm:min-h-48 flex justify-evenly items-center flex-col'>
          <img src={icon} alt='Technology Card' className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[18px] sm:text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  ), []);

  return (
    <div className='flex flex-wrap align-center justify-center gap-10'>
      {ratingItems.map((item, index) => (
        <SkillsCard key={item.title} index={index} {...item} />
      ))}
    </div>
  );
}

export default Rating;
