// src/components/canvas/StarsCanvas.jsx
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const StarsCanvas = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ alpha: true }}
      >
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
