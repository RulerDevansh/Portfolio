import { Suspense, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earthRef = useRef();
  const { scene } = useGLTF("./planet/scene.gltf");

  const memoizedEarth = useMemo(() => {
    return <primitive object={scene} scale={2.3} position={[0, -0.5, 0]} />;
  }, [scene]);

  return <group ref={earthRef}>{memoizedEarth}</group>;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: false}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
         autoRotate
         enableZoom={false} 
         autoRotateSpeed={2.5}
         maxPolarAngle={Math.PI / 2}
         minPolarAngle={Math.PI / 2} 
         />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
