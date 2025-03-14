import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { MouseTrackerRobotVid } from "../assets";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isLoading, setIsLoading] = useState(true);

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
        <div className="relative w-full h-screen flex items-center justify-center">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#0e8ec1]"></div>
            </div>
          )}
          <Spline 
            scene="https://prod.spline.design/9A21Z5cMGPwm-wgV/scene.splinecode"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      )}
    </>
  );
}
