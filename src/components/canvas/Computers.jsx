import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";

import CanvasLoader from "../Loader";

// === 3D Model ===
const Computers = ({ isMobile }) => {
  // Make sure the file is in /public/desktop_pc/scene.gltf
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  const groupRef = useRef();

  // Entrance: slide from right + ease into final rotation/scale
  const { position, rotation, scale } = useSpring({
    from: {
      position: [5, isMobile ? -3 : -3.25, isMobile ? -2.2 : -1.5],
      rotation: [-0.01, 0.8, -0.1],
      scale: isMobile ? 0.65 : 0.7,
    },
    to: {
      position: [0, isMobile ? -3 : -3.25, isMobile ? -2.2 : -1.5],
      rotation: [-0.01, -0.2, -0.1],
      scale: isMobile ? 0.7 : 0.75,
    },
    config: { mass: 1, tension: 120, friction: 20 },
    reset: true, // re-run if isMobile changes
  });

  // Idle rotation after it settles (gentle, not too fast)
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      {/* Keep lights OUTSIDE the animated group so they don't scale */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      {/* Animated group that carries the model */}
      <a.group ref={groupRef} position={position} rotation={rotation} scale={scale}>
        <primitive object={scene} />
      </a.group>
    </>
  );
};

useGLTF.preload("/desktop_pc/scene.gltf");

// === Canvas Wrapper ===
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 500px)");
    setIsMobile(mq.matches);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <Canvas
      // Remove frameloop="demand" so springs/rotation are smooth
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          // lock vertical orbit like your original
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          // keep manual rotation enabled; set to false if you want only auto spin
          // enableRotate={false}
        />
        <Computers isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
