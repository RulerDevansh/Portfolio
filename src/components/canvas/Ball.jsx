import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Decal, Float, useTexture } from "@react-three/drei";

/**
 * BallScene — used inside a shared single Canvas (desktop & mobile TechBalls).
 *
 *  - `position` is on a <group> OUTSIDE <Float> so Float's internal
 *    matrix doesn't warp the world-space offset.
 *  - Drag is handled at the canvas DOM level by BallGrid, so it never
 *    breaks when the pointer moves faster than the raycast.
 *  - `rotationRef.current[ballIndex]` holds {x,y} accumulator written by
 *    BallGrid's DOM listener and read here each frame.
 */
export const BallScene = ({ imgUrl, position = [0, 0, 0], rotationRef, ballIndex, onDragStart }) => {
  const decal = useTexture(imgUrl);
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current && rotationRef) {
      meshRef.current.rotation.y = rotationRef.current[ballIndex].y;
    }
  });

  return (
    <group position={position}>
      <Float speed={2.0} rotationIntensity={0} floatIntensity={1.2} floatingRange={[-0.22, 0.22]}>
        <mesh
          ref={meshRef}
          castShadow
          receiveShadow
          scale={2.1}
          onPointerDown={(e) => {
            e.stopPropagation();
            onDragStart && onDragStart(e.clientX, e.clientY);
          }}
        >
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#fff1db"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
            emissive="#fff0d6"
            emissiveIntensity={0.1}
          />
          <Decal position={[0, 0, 1]} rotation={[Math.PI * 2, 0, 6.25]} scale={1} map={decal} flatShading />
        </mesh>
      </Float>
    </group>
  );
};

