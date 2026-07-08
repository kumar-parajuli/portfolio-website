import React, { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
  AdaptiveDpr,
  AdaptiveEvents,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import useDeviceType from "../../hooks/useDeviceType";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;

  return (
    <Float
      speed={isMobile ? 1 : 1.75}
      rotationIntensity={isMobile ? 0.5 : 1}
      floatIntensity={isMobile ? 1 : 2}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow scale={isMobile ? 2 : 2.75}>
        <icosahedronGeometry args={[1, isMobile ? 0 : 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const { isMobile } = useDeviceType();

  return (
    <Canvas
      frameloop='demand'
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      gl={{
        preserveDrawingBuffer: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      <Suspense fallback={<CanvasLoader />}>
        {!isMobile && <OrbitControls enableZoom={false} />}
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
