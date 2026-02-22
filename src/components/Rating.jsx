import { useState, useEffect, useMemo, useCallback } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from "../utils/motion";
import { CodeChef, CodeForces } from '../assets';

const CF_HANDLE   = "de_vil158";
const CC_USERNAME = "devansh_iiitp";

// Both platforms are fetched via CORS proxy — Codeforces blocks direct browser requests
const CORS_PROXIES = [
  "https://corsproxy.io/?",
  "https://api.allorigins.win/get?url=",
];

async function fetchViaProxy(url) {
  for (const proxy of CORS_PROXIES) {
    try {
      const res = await fetch(`${proxy}${encodeURIComponent(url)}`, {
        signal: AbortSignal.timeout(9000),
      });
      if (!res.ok) continue;
      // Always read as text first:
      //   corsproxy.io  → returns the raw response body (HTML or JSON text) directly
      //   allorigins.win → returns a JSON wrapper: { contents: "<raw body>", status: {...} }
      const text = await res.text();
      try {
        const json = JSON.parse(text);
        // allorigins.win path — unwrap the contents field
        return json.contents ?? text;
      } catch {
        // corsproxy.io path — text IS the raw body, use it directly
        return text;
      }
    } catch {
      // try next proxy
    }
  }
  throw new Error("All CORS proxies failed");
}

function Rating() {
  // Fallback values shown while loading or on error
  const [CodeChefRating,   setCodeChefRating]   = useState({ current: 1572, max: 1572 });
  const [CodeForcesRating, setCodeForcesRating] = useState({ current: 1362, max: 1362 });
  const [loading, setLoading] = useState(true);

  const fetchCodeForces = useCallback(async () => {
    // Codeforces blocks direct CORS requests from browsers — use proxy to reach the API
    const text = await fetchViaProxy(`https://codeforces.com/api/user.info?handles=${CF_HANDLE}`);
    const data = JSON.parse(text);
    if (data.status !== "OK") throw new Error(`CF API status: ${data.status}`);
    const user = data.result[0];
    setCodeForcesRating((prev) => ({
      current: user.rating    ?? prev.current,
      max:     user.maxRating ?? prev.max,
    }));
  }, []);

  const fetchCodeChef = useCallback(async () => {
    // 1. Try the unofficial CodeChef JSON API (no proxy/CORS needed, returns clean JSON)
    try {
      const res = await fetch(`https://codechef-api.vercel.app/${CC_USERNAME}`, {
        signal: AbortSignal.timeout(9000),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.status === "Success" && data.rating) {
          setCodeChefRating({
            current: Number(data.rating),
            max:     Number(data.highest_rating ?? data.rating),
          });
          return;
        }
      }
    } catch {
      // fall through to proxy-based scraping
    }

    // 2. Fallback: fetch the profile page via CORS proxy and parse embedded HTML
    const html = await fetchViaProxy(`https://www.codechef.com/users/${CC_USERNAME}`);

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
