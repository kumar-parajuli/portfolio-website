import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  Preload,
  AdaptiveDpr,
  AdaptiveEvents,
} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

import useDeviceType from "../../hooks/useDeviceType";

const Stars = (props) => {
  const ref = useRef();
  const { viewport } = useThree();
  const isMobile = viewport.width < 8;
  const count = isMobile ? 2000 : 5000;

  const sphere = useMemo(
    () => random.inSphere(new Float32Array(count), { radius: 1.2 }),
    [count]
  );

  useFrame((_, delta) => {
    const d = Math.min(delta, 0.1);
    ref.current.rotation.x -= d / 10;
    ref.current.rotation.y -= d / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={isMobile ? 0.0015 : 0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const { isMobile } = useDeviceType();

  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
