import React, { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  AdaptiveDpr,
  AdaptiveEvents,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import useDeviceType from "../../hooks/useDeviceType";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  const { viewport } = useThree();
  const isMobile = viewport.width < 8;

  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 1.5 : 3.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  const { isMobile } = useDeviceType();

  return (
    <div className='w-full h-full'>
      <Canvas
        shadows
        frameloop='demand'
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{
          preserveDrawingBuffer: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        camera={{
          fov: isMobile ? 60 : 45,
          near: 0.1,
          far: 200,
          position: isMobile ? [0, 0, 8] : [-3, 2, 6],
        }}
      >
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            autoRotateSpeed={isMobile ? 1 : 2}
            enableZoom={false}
            enablePan={false}
            enableRotate={!isMobile}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
