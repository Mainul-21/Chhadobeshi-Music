'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function VisualizerBars() {
  const groupRef = useRef<THREE.Group>(null);
  const barsRef = useRef<THREE.Mesh[]>([]);
  const audioRef = useRef<any>(null);
  const dataArrayRef = useRef<Uint8Array>(new Uint8Array(64));

  useEffect(() => {
    // Create audio context and analyzer
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const analyzer = audioContext.createAnalyser();
    analyzer.fftSize = 128;
    
    audioRef.current = { analyzer, dataArray: dataArrayRef.current };

    const animate = () => {
      requestAnimationFrame(animate);
      
      if (groupRef.current && barsRef.current.length > 0) {
        const dataArray = new Uint8Array(analyzer.frequencyBinCount);
        analyzer.getByteFrequencyData(dataArray);

        barsRef.current.forEach((bar, i) => {
          const scale = (dataArray[i] || 0) / 255;
          bar.scale.y = Math.max(0.1, scale * 3);
        });
      }
    };

    animate();
  }, []);

  return (
    <group ref={groupRef}>
      {Array.from({ length: 16 }).map((_, i) => (
        <mesh
          key={i}
          position={[i * 0.7 - 5.25, 0, 0]}
          ref={(el) => {
            if (el) barsRef.current[i] = el;
          }}
        >
          <boxGeometry args={[0.5, 1, 0.5]} />
          <meshStandardMaterial
            color={`hsl(${i * 22.5}, 100%, 50%)`}
            emissive={`hsl(${i * 22.5}, 100%, 30%)`}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function AudioVisualizer() {
  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden border border-accent/20">
      <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <VisualizerBars />
        <Environment preset="studio" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
      </Canvas>
    </div>
  );
}
