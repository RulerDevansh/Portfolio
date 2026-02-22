import { useEffect, useMemo, useRef, useState, Suspense } from "react";
import { SectionWrapper } from "../HigherOrderComponent";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { BallScene } from "./canvas";
import CanvasLoader from "./Loader";
import { css, git, html, javascript, reactjs, redux, tailwind, threejs, typescript, mongodb, nodejs, postgresql, tensorflow, python } from "../assets";

const technologies = [
  { name: "MongoDB",      icon: mongodb     },
  { name: "Node JS",      icon: nodejs      },
  { name: "PostgreSQL",   icon: postgresql  },
  { name: "React JS",     icon: reactjs     },
  { name: "Redux Toolkit",icon: redux       },
  { name: "Tailwind CSS", icon: tailwind    },
  { name: "TypeScript",   icon: typescript  },
  { name: "HTML 5",       icon: html        },
  { name: "CSS 3",        icon: css         },
  { name: "JavaScript",   icon: javascript  },
  { name: "Three JS",     icon: threejs     },
  { name: "TensorFlow",   icon: tensorflow  },
  { name: "Python",       icon: python      },
  { name: "git",          icon: git         },
];

const PER_ROW = 7;

/**
 * BallGrid — lives inside the Canvas so it can use useThree().
 *
 * Drag architecture:
 *  - onPointerDown on each BallScene (R3F raycast) registers the active ball index
 *  - pointermove / pointerup are listened on the raw canvas DOM element so the
 *    drag NEVER breaks regardless of how fast the pointer moves
 */
function BallGrid() {
  const { viewport, gl } = useThree();

  // Shared rotation accumulators for all balls: [{ x, y }, ...]
  const rotations   = useRef(technologies.map(() => ({ x: 0, y: 0 })));
  const velocities  = useRef(technologies.map(() => ({ x: 0, y: 0 })));
  const dragTarget  = useRef(null);   // index of currently-dragged ball, or null
  const prevPointer = useRef({ x: 0, y: 0 });

  // Attach move/up to the canvas DOM element once — no raycasting involved
  useEffect(() => {
    const canvas = gl.domElement;

    const onMove = (e) => {
      if (dragTarget.current === null) return;
      const idx = dragTarget.current;
      const dx = e.clientX - prevPointer.current.x;
      const vy = dx * 0.018;
      rotations.current[idx].y += vy;
      // store last delta as velocity for inertia after release (Y axis only)
      velocities.current[idx].y = vy;
      prevPointer.current = { x: e.clientX, y: e.clientY };
    };
    const onUp = () => {
      // clear drag but keep velocity — useFrame will coast it to a stop
      dragTarget.current = null;
    };

    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerup',   onUp);
    canvas.addEventListener('pointerleave', onUp);
    return () => {
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerup',   onUp);
      canvas.removeEventListener('pointerleave', onUp);
    };
  }, [gl]);

  // Apply inertia every frame: rotate by velocity, then dampen
  useFrame(() => {
    for (let i = 0; i < technologies.length; i++) {
      if (dragTarget.current === i) continue; // being dragged — skip
      const vel = velocities.current[i];
      if (Math.abs(vel.y) > 0.0004) {
        rotations.current[i].y += vel.y;
        vel.y *= 0.93;  // friction — 0.93 ≈ ~1.5 s coast-down
      } else {
        vel.y = 0;
      }
    }
  });

  const positions = useMemo(() => {
    const rowCount = Math.ceil(technologies.length / PER_ROW);
    // Leave generous margin (0.72 / 0.52) so balls never clip any edge
    const usableW  = viewport.width  * 0.72;
    const usableH  = viewport.height * 0.52;
    const xStep    = usableW  / (PER_ROW - 1);
    const yStep    = rowCount > 1 ? usableH / (rowCount - 1) : 0;

    return technologies.map((_, i) => {
      const row   = Math.floor(i / PER_ROW);
      const col   = i % PER_ROW;
      const inRow = Math.min(PER_ROW, technologies.length - row * PER_ROW);
      const rowW  = (inRow - 1) * xStep;
      const x     = col * xStep - rowW / 2;
      const y     = (rowCount - 1) * yStep / 2 - row * yStep;
      return [x, y, 0];
    });
  }, [viewport.width, viewport.height]);

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight intensity={0.85} position={[5, 5, 5]} />
      {technologies.map((tech, i) => (
        <BallScene
          key={tech.name}
          imgUrl={tech.icon}
          position={positions[i]}
          rotationRef={rotations}
          ballIndex={i}
          onDragStart={(cx, cy) => {
            dragTarget.current = i;
            prevPointer.current = { x: cx, y: cy };
          }}
        />
      ))}
    </>
  );
}

/**
 * MobileBallGrid — single Canvas for mobile, 2-column grid of 6 balls.
 * Accepts a `techs` array (the 6 randomly selected items).
 */
function MobileBallGrid({ techs }) {
  const { viewport } = useThree();

  const rotations   = useRef(techs.map(() => ({ x: 0, y: 0 })));
  const velocities  = useRef(techs.map(() => ({ x: 0, y: 0 })));
  const dragTarget    = useRef(null);
  const prevPointer   = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Mobile uses ONLY document touch events.
    // No canvas pointer listeners — pointerleave would null dragTarget
    // mid-drag and kill velocity before the finger lifts.
    const onTouchMove = (e) => {
      if (dragTarget.current === null) return;
      e.preventDefault();
      const t = e.touches[0];
      const idx = dragTarget.current;
      const dx = t.clientX - prevPointer.current.x;
      const vy = dx * 0.018;
      rotations.current[idx].y += vy;
      velocities.current[idx].y = vy;
      prevPointer.current = { x: t.clientX, y: t.clientY };
    };
    const onTouchEnd = () => { dragTarget.current = null; };

    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend',  onTouchEnd);
    document.addEventListener('touchcancel', onTouchEnd);
    return () => {
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend',  onTouchEnd);
      document.removeEventListener('touchcancel', onTouchEnd);
    };
  }, []);

  useFrame(() => {
    for (let i = 0; i < techs.length; i++) {
      if (dragTarget.current === i) continue;
      const vel = velocities.current[i];
      if (Math.abs(vel.y) > 0.0004) {
        rotations.current[i].y += vel.y;
        vel.y *= 0.93;
      } else {
        vel.y = 0;
      }
    }
  });

  const COLS = 2;
  const positions = useMemo(() => {
    const rowCount = Math.ceil(techs.length / COLS);
    const usableW  = viewport.width  * 0.45;
    const usableH  = viewport.height * 0.62;
    const xStep    = COLS > 1 ? usableW / (COLS - 1) : 0;
    const yStep    = rowCount > 1 ? usableH / (rowCount - 1) : 0;

    return techs.map((_, i) => {
      const row = Math.floor(i / COLS);
      const col = i % COLS;
      const x   = col * xStep - usableW / 2;
      const y   = (rowCount - 1) * yStep / 2 - row * yStep;
      return [x, y, 0];
    });
  }, [viewport.width, viewport.height, techs]);

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight intensity={0.85} position={[5, 5, 5]} />
      {techs.map((tech, i) => (
        <BallScene
          key={tech.name}
          imgUrl={tech.icon}
          position={positions[i]}
          rotationRef={rotations}
          ballIndex={i}
          onDragStart={(cx, cy) => {
            dragTarget.current = i;
            prevPointer.current = { x: cx, y: cy };
          }}
        />
      ))}
    </>
  );
}

function TechBalls() {
  // Lazy init — correct value on first render, no flash
  const [isMobile] = useState(() => window.innerWidth < 768);
  const [mobileTechs, setMobileTechs] = useState([]);

  useEffect(() => {
    if (isMobile) {
      const shuffled = [...technologies].sort(() => 0.5 - Math.random());
      setMobileTechs(shuffled.slice(0, 6));
    }
  }, [isMobile]);

  // ── Mobile: single WebGL canvas, 2-col grid of 6 random balls ─────────
  if (isMobile) {
    return (
      <>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="m-2 text-violet-200 text-[20px] max-w-3xl leading-[30px]">
          Have fun spinning the Tech balls around !!
        </motion.p>
        <div className="w-full h-[520px] cursor-pointer">
          <Canvas
            frameloop="always"
            dpr={[1, 1.5]}
            orthographic
            camera={{ zoom: 22, position: [0, 0, 10] }}
            gl={{ preserveDrawingBuffer: false, antialias: false }}
          >
            <Suspense fallback={<CanvasLoader />}>
              <MobileBallGrid techs={mobileTechs} />
            </Suspense>
            <Preload all />
          </Canvas>
        </div>
      </>
    );
  }

  // ── Desktop: single WebGL canvas, positions fill the rectangle ──────────
  return (
    <>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="m-2 text-violet-200 text-[20px] max-w-3xl leading-[30px]">
        Have fun spinning the Tech balls around !!
      </motion.p>
      <div className="w-full h-[460px] cursor-pointer">
        <Canvas
          frameloop="always"
          dpr={[1, 1.5]}
          orthographic
          camera={{ zoom: 28, position: [0, 0, 10] }}
          gl={{ preserveDrawingBuffer: false, antialias: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <BallGrid />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </>
  );
}

export default SectionWrapper(TechBalls, "about");
