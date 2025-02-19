import React from 'react'
import { Ball } from './canvas'
import { SectionWrapper } from '../HigherOrderComponent';
import {css, git, html, javascript, reactjs, redux, spline, tailwind, threejs,} from '../assets'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
function TechBalls() {
    const technologies = [
        {
          name: "HTML 5",
          icon: html,
        },
        {
          name: "CSS 3",
          icon: css,
        },
        {
          name: "JavaScript",
          icon: javascript,
        },
        {
          name: "React JS",
          icon: reactjs,
        },
        {
          name: "Redux Toolkit",
          icon: redux,
        },
        {
          name: "Tailwind CSS",
          icon: tailwind,
        },
        {
          name: "Three JS",
          icon: threejs,
        },
        {
          name: "Spline",
          icon: spline,
        },
        {
          name: "git",
          icon: git,
        },
      ];


  return (
    <>
      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='m-2 text-violet-200 text-[20px] max-w-3xl leading-[30px] '
      >
        Have fun spinning the Tech balls around! &nbsp;&nbsp; <span className='text-secondary text-sm'>Hold and drag!! </span> 
      </motion.p>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 cursor-pointer' key={technology.name}>
          <Ball icon={technology.icon} />
        </div>
      ))}
      </div>
    </>
  )
}

export default SectionWrapper(TechBalls, 'techBalls')