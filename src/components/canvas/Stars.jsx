import { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();

  // 3000 points — good density with less GPU work
  const sphere = useMemo(() => random.inSphere(new Float32Array(3000 * 3), { radius: 1.2 }), []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.1;
      ref.current.rotation.y -= delta * 0.066;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  // On mobile skip WebGL entirely — no GPU needed for background
  if (window.innerWidth < 768) {
    return <div className='w-full h-full absolute inset-0 z-[-1]' />;
  }

  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas dpr={[1, 1]} camera={{ position: [0, 0, 1] }} gl={{ preserveDrawingBuffer: false, antialias: false }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
