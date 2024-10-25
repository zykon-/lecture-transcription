"use client";

import { useEffect, useRef } from "react";

export default function AudioVisualizer({ isRecording }: { isRecording: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const bars = 60;
    const barWidth = (canvas.width / bars) - 2;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (isRecording) {
        // Simulate audio visualization with random heights
        for (let i = 0; i < bars; i++) {
          const height = isRecording ? Math.random() * canvas.height * 0.8 : 2;
          const x = i * (barWidth + 2);
          const y = (canvas.height - height) / 2;
          
          const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
          gradient.addColorStop(0, "hsl(var(--primary))");
          gradient.addColorStop(1, "hsl(var(--primary) / 0.5)");
          
          ctx.fillStyle = gradient;
          ctx.fillRect(x, y, barWidth, height);
        }
      } else {
        // Draw a flat line when not recording
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.strokeStyle = "hsl(var(--primary) / 0.5)";
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isRecording]);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={100}
      className="w-full rounded-lg border bg-muted/10"
    />
  );
}