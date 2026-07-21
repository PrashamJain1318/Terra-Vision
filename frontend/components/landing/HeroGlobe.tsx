'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const GlobeMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Rotate globe slowly
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 32, 32]} />
      {/* Wireframe standard material for a tech premium placeholder globe */}
      <meshStandardMaterial
        color="#6366f1"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
};

export const HeroGlobe = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <GlobeMesh />
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
};

export default HeroGlobe;
