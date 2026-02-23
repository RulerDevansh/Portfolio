import { useState, useEffect, useMemo, useCallback } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from "../utils/motion";
import { CodeChef, CodeForces } from '../assets';

const CF_HANDLE   = "de_vil158";
const CC_USERNAME = "devansh_iiitp";

/**
 * Fetch a URL through allorigins.win CORS proxy.
 * Returns the raw body (HTML / JSON text) of the target URL.
 */
async function fetchViaAllOrigins(url) {
  const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
  const res = await fetch(proxyUrl, { signal: AbortSignal.timeout(12000) });
  if (!res.ok) throw new Error(`allorigins proxy returned ${res.status}`);
  const wrapper = await res.json();          // { contents: "...", status: {...} }
  return wrapper.contents;
}

function Rating() {
  // Fallback values shown while loading or on error
  const [CodeChefRating,   setCodeChefRating]   = useState({ current: 1572, max: 1572 });
  const [CodeForcesRating, setCodeForcesRating] = useState({ current: 1362, max: 1362 });
  const [loading, setLoading] = useState(true);

  const fetchCodeForces = useCallback(async () => {
    // Codeforces API supports CORS (Access-Control-Allow-Origin: *) — fetch directly
    const res = await fetch(
      `https://codeforces.com/api/user.info?handles=${CF_HANDLE}`,
      { signal: AbortSignal.timeout(10000) },
    );
    if (!res.ok) throw new Error(`CF API returned ${res.status}`);
    const data = await res.json();
    if (data.status !== "OK") throw new Error(`CF API status: ${data.status}`);
    const user = data.result[0];
    setCodeForcesRating((prev) => ({
      current: user.rating    ?? prev.current,
      max:     user.maxRating ?? prev.max,
    }));
  }, []);

  const fetchCodeChef = useCallback(async () => {
    // Scrape CodeChef profile page via allorigins CORS proxy and parse rating from HTML
    const html = await fetchViaAllOrigins(`https://www.codechef.com/users/${CC_USERNAME}`);

    // Current rating  →  class="rating-number">XXXX
    const currentMatch = html.match(/class="rating-number">(\d+)/);
    // Highest rating  →  "Highest Rating XXXX)" in a <small> tag
    const maxMatch = html.match(/Highest Rating\s+(\d+)\)/);

    if (!currentMatch) throw new Error("CC rating not found in page");

    setCodeChefRating({
      current: Number(currentMatch[1]),
      max:     maxMatch ? Number(maxMatch[1]) : Number(currentMatch[1]),
    });
  }, []);

  useEffect(() => {
    setLoading(true);

    Promise.allSettled([
      fetchCodeForces(),
      fetchCodeChef(),
    ]).then(() => setLoading(false));
  }, [fetchCodeForces, fetchCodeChef]);

  const ratingItems = useMemo(() => [
    {
      title: `CodeChef Rating: ${CodeChefRating.current}   Max: ${CodeChefRating.max}`,
      icon:  CodeChef,
    },
    {
      title: `CodeForces Rating: ${CodeForcesRating.current}   Max: ${CodeForcesRating.max}`,
      icon:  CodeForces,
    },
  ], [CodeChefRating, CodeForcesRating]);

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
      {loading && <p className="text-white">Loading ratings...</p>}
      {!loading &&
        ratingItems.map((item, index) => (
          <SkillsCard key={item.title} index={index} {...item} />
        ))}
    </div>
  );
}

export default Rating;
