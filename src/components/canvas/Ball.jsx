import React, { Suspense, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const decal = useTexture(imgUrl);
  const meshRef = useRef();

  const geometry = useMemo(() => <icosahedronGeometry args={[1, 1]} />, []);
  const material = useMemo(
    () => (
      <meshStandardMaterial
        color="#fff1db"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
        emissive="#fff0d6"
        emissiveIntensity={0.1}
      />
    ),
    []
  );

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5} floatingRange={[-0.25, 0.25]}>
      <ambientLight intensity={0.3} /> 
      <directionalLight intensity={0.85} position={[0, 0, 0.05]}/> 
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        {geometry}
        {material}
        <Decal
          position={[0, 0, 1]}
          rotation={[Math.PI * 2, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="always" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

