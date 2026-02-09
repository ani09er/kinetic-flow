import { useEffect, useRef } from "react";

const KineticBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let mouseX = 0;
    let mouseY = 0;
    let particles: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Spawn trail particles near cursor
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: mouseX + (Math.random() - 0.5) * 20,
          y: mouseY + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          life: 0,
          maxLife: 40 + Math.random() * 30,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Ambient grid lines
    const gridLines: { x: number; y: number; angle: number; speed: number; length: number; opacity: number }[] = [];
    for (let i = 0; i < 15; i++) {
      gridLines.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        angle: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.5,
        length: 40 + Math.random() * 80,
        opacity: 0.03 + Math.random() * 0.06,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines drifting
      gridLines.forEach((line) => {
        line.x += Math.cos(line.angle) * line.speed;
        line.y += Math.sin(line.angle) * line.speed;

        if (line.x < -100 || line.x > canvas.width + 100 || line.y < -100 || line.y > canvas.height + 100) {
          line.x = Math.random() * canvas.width;
          line.y = Math.random() * canvas.height;
          line.angle = Math.random() * Math.PI * 2;
        }

        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(
          line.x + Math.cos(line.angle) * line.length,
          line.y + Math.sin(line.angle) * line.length
        );
        ctx.strokeStyle = `rgba(0, 170, 255, ${line.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw and update particles
      particles = particles.filter((p) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.97;
        p.vy *= 0.97;

        const progress = p.life / p.maxLife;
        const alpha = 1 - progress;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5 * (1 - progress), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 187, 255, ${alpha * 0.5})`;
        ctx.fill();

        return p.life < p.maxLife;
      });

      // Keep particles manageable
      if (particles.length > 200) {
        particles = particles.slice(-200);
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default KineticBackground;
