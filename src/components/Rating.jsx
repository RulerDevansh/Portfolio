import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from "../utils/motion";
import { CodeChef, CodeForces } from '../assets';

function Rating() {
  const [CodeChefRating, setCodeChefRating] = useState({ current: 1462, max: 1522 });// INITIAL RATING (in case of error)
  const [CodeForcesRating, setCodeForcesRating] = useState({ current: 942, max: 942 });

  const corsProxy = "https://api.allorigins.win/get?url=";

  const fetchRatings = useCallback(async (url, site) => {
    try {
      const response = await fetch(`${corsProxy}${encodeURIComponent(url)}`);
      const data = await response.json();
      const html = data.contents;

      if (site === "codechef") {
        const currentMatch = html.match(/class=['"]rating['"]>(\d+)/);
        const maxMatch = html.match(/\(Highest Rating (\d+)\)/);

        if (currentMatch && maxMatch) {
          setCodeChefRating(prev => 
            prev.current !== currentMatch[1] || prev.max !== maxMatch[1]
              ? { current: currentMatch[1], max: maxMatch[1] }
              : prev
          );
        }
      } else if (site === "codeforces") {
        const currentMatch = html.match(/Contest rating:\s*<span[^>]*>(\d+)<\/span>/);
        const maxMatch = html.match(/max\..*?<span[^>]*>(\d+)<\/span>/);

        if (currentMatch && maxMatch) {
          setCodeForcesRating(prev => 
            prev.current !== currentMatch[1] || prev.max !== maxMatch[1]
              ? { current: currentMatch[1], max: maxMatch[1] }
              : prev
          );
        }
      }
    } catch (error) {
      console.error(`Error fetching ${site} data:`, error);
    }
  }, []);

  useEffect(() => {
    fetchRatings("https://www.codechef.com/users/devansh158", "codechef");
    fetchRatings("https://codeforces.com/profile/de_vil158", "codeforces");
  }, [fetchRatings]);

  const Rating = useMemo(() => [
    {
      title: `CodeChef Rating: ${CodeChefRating.current} Max: ${CodeChefRating.max}`,
      icon: CodeChef,
    },
    {
      title: `CodeForces Rating: ${CodeForcesRating.current} Max: ${CodeForcesRating.max}`,
      icon: CodeForces,
    },
  ], [CodeChefRating, CodeForcesRating]);

  const SkillsCard = useMemo(() => ({ index, title, icon }) => (
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
    <div className='mt-10 flex flex-wrap align-center justify-center gap-10'>
      {Rating.map((item, index) => (
        <SkillsCard key={item.title} index={index} {...item} />
      ))}
    </div>
  );
}

export default Rating;
