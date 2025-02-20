import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { MouseTrackerRobotVid } from "../assets";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <video 
          src={MouseTrackerRobotVid} 
          autoPlay 
          loop 
          muted 
          className="w-full h-full object-cover" 
        />
      ) : (
        <Spline scene="https://prod.spline.design/9A21Z5cMGPwm-wgV/scene.splinecode" />
      )}
    </>
  );
}
