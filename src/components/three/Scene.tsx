
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Particles from "./Particles";
import FloatingShape from "./FloatingShape";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Scene() {
  return (
    <div className="h-[100vh] w-full absolute top-0 left-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Particles count={2000} />
          <FloatingShape position={[-2, 1, 0]} scale={0.6} rotation={[0, 0, 0]} />
          <FloatingShape position={[2, -1, -2]} scale={0.8} rotation={[0, 1, 0]} />
          <FloatingShape position={[0, -2, -5]} scale={1.2} rotation={[1, 0.5, 0.5]} />
          <Environment preset="city" />
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5} 
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
