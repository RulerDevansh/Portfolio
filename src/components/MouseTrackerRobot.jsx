import React, { lazy, Suspense, useState, useEffect } from "react";
import { MouseTrackerRobotVid } from "../assets";

// Lazy import Spline component
const LazySpline = lazy(() => import("@splinetool/react-spline"));

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Suspense>
      {isMobile ? (
        <video src={MouseTrackerRobotVid} autoPlay loop muted className="w-full h-full  object-cover" />
      ) : (
        <LazySpline scene="https://prod.spline.design/9A21Z5cMGPwm-wgV/scene.splinecode" />
      )}
    </Suspense>
  );
}