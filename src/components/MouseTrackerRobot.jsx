import { useState, useEffect, lazy, Suspense } from "react";

// Using lazy loading for optimization
const LazySpline = lazy(() => import("@splinetool/react-spline"));

export default function App() {
  const [sceneUrl, setSceneUrl] = useState(
    "https://prod.spline.design/9A21Z5cMGPwm-wgV/scene.splinecode" 
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSceneUrl("https://prod.spline.design/e99FgxLyrb54wIT5/scene.splinecode");
      } else {
        setSceneUrl("https://prod.spline.design/9A21Z5cMGPwm-wgV/scene.splinecode" );
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Suspense fallback={<div>Loading 3D Scene...</div>}>
      <LazySpline scene={sceneUrl} />
    </Suspense>
  );
}