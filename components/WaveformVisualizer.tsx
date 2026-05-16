'use client';

import { useEffect, useRef } from 'react';

export default function WaveformVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let time = 0;

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw waveform
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 2;
      ctx.beginPath();

      const points = 100;
      for (let i = 0; i < points; i++) {
        const x = (i / points) * canvas.width;
        const y = canvas.height / 2 + Math.sin(i * 0.1 + time * 0.02) * 40 + Math.sin(i * 0.05 + time * 0.015) * 20;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Draw additional waveforms
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      
      for (let i = 0; i < points; i++) {
        const x = (i / points) * canvas.width;
        const y = canvas.height / 2 + Math.sin(i * 0.15 + time * 0.01) * 30;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      time++;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-24 rounded-lg border border-accent/20 bg-secondary"
    />
  );
}
