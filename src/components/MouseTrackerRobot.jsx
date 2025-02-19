import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";

export default function App() {
  const [sceneUrl, setSceneUrl] = useState(
    "https://prod.spline.design/fDPs3zoRtSzvnTzf/scene.splinecode"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSceneUrl("https://prod.spline.design/ZimybNvdtGlnnbjn/scene.splinecode");
      } else {
        setSceneUrl("https://prod.spline.design/fDPs3zoRtSzvnTzf/scene.splinecode");
      }
    };

    
    handleResize();

    
    window.addEventListener("resize", handleResize);

    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <Spline scene={sceneUrl} />;
}
