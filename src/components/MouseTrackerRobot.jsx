import { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { MouseTrackerRobotVid } from "../assets";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isInView, setIsInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [isMobile]);

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
        <div
          ref={containerRef}
          className="relative w-full h-screen flex items-center justify-center"
        >
          {isInView && isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-30">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#0e8ec1]" />
            </div>
          )}

          {isInView && (
            <Spline
              scene="https://prod.spline.design/9A21Z5cMGPwm-wgV/scene.splinecode"
              onLoad={() => setIsLoading(false)}
            />
          )}
        </div>
      )}
    </>
  );
}
