
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface FloatingShapeProps {
  position: [number, number, number];
  scale: number;
  rotation: [number, number, number];
}

export default function FloatingShape({ position, scale = 1, rotation }: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Use a simple shape since we don't have a GLTF to load
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Subtle floating animation
    meshRef.current.position.y += Math.sin(state.clock.getElapsedTime() * 0.5) * 0.002;
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.001;
  });

  return (
    <group position={position}>
      <mesh 
        ref={meshRef} 
        rotation={rotation}
        scale={scale}
      >
        {/* Using a dodecahedron for an interesting shape */}
        <dodecahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#7E69AB"
          speed={3}
          distort={0.3}
          roughness={0.4}
          metalness={0.5}
          clearcoat={0.2}
        />
      </mesh>
    </group>
  );
}
