import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from "../utils/motion";
import { CodeChef, CodeForces } from '../assets';

function Rating() {
  const [CodeChefRating, setCodeChefRating] = useState({ current: 1462, max: 1522 });// Setting initial (In case of error)
  const [CodeForcesRating, setCodeForcesRating] = useState({ current: 942, max: 942 });

  useEffect(() => {
    const corsProxy = "https://api.allorigins.win/get?url=";

    // Fetch CodeChef Rating
    fetch(`${corsProxy}${encodeURIComponent("https://www.codechef.com/users/devansh158")}`)
      .then(response => response.json())
      .then(data => {
        const html = data.contents;

        // Extract current rating
        const currentMatch = html.match(/class=['"]rating['"]>(\d+)/);

        // Extract max rating
        const maxMatch = html.match(/\(Highest Rating (\d+)\)/);

        if (currentMatch && maxMatch) {
          setCodeChefRating({
            current: currentMatch[1],
            max: maxMatch[1],
          });
        }
      })
      .catch(error => console.error("Error fetching CodeChef data:", error));

    // Fetch CodeForces Rating
    fetch(`${corsProxy}${encodeURIComponent("https://codeforces.com/profile/de_vil158")}`)
      .then(response => response.json())
      .then(data => {
        const html = data.contents;

        // Extract current rating
        const currentMatch = html.match(/Contest rating:\s*<span[^>]*>(\d+)<\/span>/);

        // Extract max rating
        const maxMatch = html.match(/max\..*?<span[^>]*>(\d+)<\/span>/);

        if (currentMatch && maxMatch) {
          setCodeForcesRating({
            current: currentMatch[1],
            max: maxMatch[1],
          });
        }
      })
      .catch(error => console.error("Error fetching CodeForces data:", error));

  }, []);

  const Rating = [
    {
      title: `CodeChef Rating: ${CodeChefRating.current} Max: ${CodeChefRating.max}`,
      icon: CodeChef,
    },
    {
      title: `CodeForces Rating: ${CodeForcesRating.current} Max: ${CodeForcesRating.max}`,
      icon: CodeForces,
    },
  ];

  const SkillsCard = ({ index, title, icon }) => (
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
  );

  return (
    <div className='mt-10 flex flex-wrap align-center justify-center gap-10'>
      {Rating.map((item, index) => (
        <SkillsCard key={item.title} index={index} {...item} />
      ))}
    </div>
  );
}

export default Rating;
