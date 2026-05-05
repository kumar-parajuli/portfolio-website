import { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useTheme } from "../../context/ThemeContext";

const Stars = ({ count = 5000, size = 0.002 }) => {
  const ref = useRef();
  const { darkMode } = useTheme();

  const sphere = useMemo(
    () => random.inSphere(new Float32Array(count), { radius: 1.2 }),
    [count]
  );

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta * 0.03;
    ref.current.rotation.y -= delta * 0.02;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={darkMode ? "#f472b6" : "#60a5fa"}
          size={size}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};


const StarsCanvas = () => {
  const { darkMode } = useTheme();

  const isMobile = window.innerWidth < 640;
  const isTablet = window.innerWidth < 1024;

  const starCount = isMobile ? 1500 : isTablet ? 3000 : 6000;
  const starSize = isMobile ? 0.0015 : 0.002;
  const opacity = darkMode ? 1 : 0.35;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden"
      style={{
        background: darkMode
          ? "radial-gradient(ellipse at bottom, #050816 0%, #02010a 100%)"
          : "radial-gradient(ellipse at top, #eff6ff 0%, #ffffff 100%)",
      }}
    >
      <Canvas
        className="w-full h-full max-w-full"
        camera={{ position: [0, 0, 1] }}
        dpr={[1, isMobile ? 1 : 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ opacity }}
      >
        <Suspense fallback={null}>
          <Stars count={starCount} size={starSize} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
