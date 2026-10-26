import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  depth: number; // 1 (far), 2 (mid), 3 (close)
  color: string;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  decay: number;
  width: number;
}

export const StarfieldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    // Mouse coordinates for parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalized between -1 and 1
      targetMouseX = (e.clientX / width - 0.5) * 2;
      targetMouseY = (e.clientY / height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };
    window.addEventListener('resize', handleResize);

    // Generate Stars
    const starColors = ['#FFFFFF', '#E2E8F0', '#8CCEFF', '#A8DCFF', '#D8E2F0'];
    let stars: Star[] = [];

    const initStars = () => {
      const starCount = Math.floor((width * height) / 3600); // Responsive density
      stars = [];
      for (let i = 0; i < starCount; i++) {
        const depth = Math.random() < 0.6 ? 1 : Math.random() < 0.85 ? 2 : 3;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: depth === 1 ? Math.random() * 0.8 + 0.3 : depth === 2 ? Math.random() * 1.1 + 0.8 : Math.random() * 1.6 + 1.2,
          baseAlpha: depth === 1 ? 0.3 + Math.random() * 0.3 : depth === 2 ? 0.5 + Math.random() * 0.3 : 0.8 + Math.random() * 0.2,
          alpha: Math.random(),
          twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
          depth,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    };

    initStars();

    // Meteors
    let meteors: Meteor[] = [];
    let lastMeteorTime = Date.now();

    const spawnMeteor = () => {
      const startX = Math.random() * (width * 1.2) - width * 0.1;
      meteors.push({
        x: startX,
        y: -10,
        length: Math.random() * 100 + 80,
        speed: Math.random() * 12 + 10,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 degrees
        alpha: 1,
        decay: Math.random() * 0.015 + 0.01,
        width: Math.random() * 1.5 + 1,
      });
    };

    // Render loop
    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      // Parallax smooth interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Clear with deep space black
      ctx.fillStyle = '#03050B';
      ctx.fillRect(0, 0, width, height);

      // Draw faint deep space nebula glow
      const grad = ctx.createRadialGradient(width * 0.5, height * 0.35, 10, width * 0.5, height * 0.35, width * 0.7);
      grad.addColorStop(0, 'rgba(14, 28, 58, 0.25)');
      grad.addColorStop(0.5, 'rgba(8, 15, 29, 0.15)');
      grad.addColorStop(1, 'rgba(3, 5, 11, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Draw Constellation connection lines (only for depth >= 2 within close range)
      const maxDist = 90;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < stars.length; i += 3) {
        const s1 = stars[i];
        if (s1.depth < 2) continue;
        const s1X = s1.x + mouseX * s1.depth * 15;
        const s1Y = s1.y + mouseY * s1.depth * 15;

        for (let j = i + 1; j < Math.min(i + 12, stars.length); j++) {
          const s2 = stars[j];
          if (s2.depth < 2) continue;
          const s2X = s2.x + mouseX * s2.depth * 15;
          const s2Y = s2.y + mouseY * s2.depth * 15;

          const dx = s1X - s2X;
          const dy = s1Y - s2Y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.12 * Math.min(s1.alpha, s2.alpha);
            ctx.strokeStyle = `rgba(140, 206, 255, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(s1X, s1Y);
            ctx.lineTo(s2X, s2Y);
            ctx.stroke();
          }
        }
      }

      // Draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!prefersReducedMotion) {
          star.alpha += star.twinkleSpeed;
          if (star.alpha > 1 || star.alpha < 0.2) {
            star.twinkleSpeed = -star.twinkleSpeed;
          }
        }

        // Parallax offset
        const px = star.x + mouseX * star.depth * 18;
        const py = star.y + mouseY * star.depth * 18;

        ctx.save();
        ctx.globalAlpha = star.alpha * star.baseAlpha;
        ctx.fillStyle = star.color;

        ctx.beginPath();
        ctx.arc(px, py, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Extra glow on foreground stars
        if (star.depth === 3 && star.alpha > 0.7) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#8CCEFF';
          ctx.fill();
        }
        ctx.restore();
      }

      // Spawn meteors periodically
      const now = Date.now();
      if (!prefersReducedMotion && now - lastMeteorTime > 5000 + Math.random() * 4000) {
        spawnMeteor();
        lastMeteorTime = now;
      }

      // Render meteors
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.alpha -= m.decay;

        if (m.alpha <= 0 || m.x > width + 100 || m.y > height + 100) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const mGrad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        mGrad.addColorStop(0, `rgba(255, 255, 255, ${m.alpha})`);
        mGrad.addColorStop(0.2, `rgba(140, 206, 255, ${m.alpha * 0.8})`);
        mGrad.addColorStop(1, 'rgba(140, 206, 255, 0)');

        ctx.save();
        ctx.strokeStyle = mGrad;
        ctx.lineWidth = m.width;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Head bright spot
        ctx.fillStyle = `rgba(255, 255, 255, ${m.alpha})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.width * 1.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render(0);
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: '#03050B' }}
      aria-hidden="true"
    />
  );
};
