
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useScroll } from "framer-motion";

export default function Particles({ count = 1000 }) {
  const scroll = useScroll();
  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);

  // Generate random positions, speeds, and colors
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 10; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
      
      // Color
      const r = Math.random() * 0.3 + 0.7; // Purple-ish
      const g = Math.random() * 0.2 + 0.4;
      const b = Math.random() * 0.3 + 0.7;
      
      colors[i * 3] = r;
      colors[i * 3 + 1] = g;
      colors[i * 3 + 2] = b;
      
      // Speed
      speeds[i] = Math.random() * 0.01;
    }
    
    return { positions, colors, speeds };
  }, [count]);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    
    // Update light position based on cursor
    if (light.current) {
      light.current.position.x = state.pointer.x * 5;
      light.current.position.y = state.pointer.y * 5;
    }
    
    // Update particle positions
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Add slight movement
      positions[i3 + 1] -= particles.speeds[i] + (scroll.scrollY.get() * 0.0005);
      
      // Reset particles that go out of bounds
      if (positions[i3 + 1] < -5) {
        positions[i3 + 1] = 5;
      }
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group>
      <pointLight ref={light} distance={10} intensity={2} color="#9b87f5" />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={particles.positions}
            count={count}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            array={particles.colors}
            count={count}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          vertexColors
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </group>
  );
}
