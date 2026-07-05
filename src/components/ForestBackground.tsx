"use client";

import { useEffect, useRef } from "react";

type Leaf = {
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  rotSpeed: number;
  swayPhase: number;
  color: string;
  opacity: number;
};

type Firefly = {
  x: number;
  y: number;
  size: number;
  phase: number;
  speed: number;
};

const LEAF_COLORS = ["#40916c", "#52b788", "#2d6a4f", "#74c69d", "#e9c46a", "#e76f51"];

export function ForestBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let time = 0;
    let leaves: Leaf[] = [];
    let fireflies: Firefly[] = [];

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const leafCount = prefersReducedMotion
        ? 0
        : window.innerWidth < 768
          ? 25
          : 45;

      leaves = Array.from({ length: leafCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 6 + Math.random() * 12,
        speed: 0.2 + Math.random() * 0.7,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.025,
        swayPhase: Math.random() * Math.PI * 2,
        color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
        opacity: 0.35 + Math.random() * 0.45,
      }));

      fireflies = Array.from({ length: prefersReducedMotion ? 0 : 12 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.7,
        size: 1.5 + Math.random() * 2,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 1.5,
      }));
    };

    const drawLeaf = (leaf: Leaf) => {
      ctx.save();
      ctx.translate(leaf.x, leaf.y);
      ctx.rotate(leaf.rotation);
      ctx.globalAlpha = leaf.opacity;
      ctx.fillStyle = leaf.color;

      ctx.beginPath();
      ctx.moveTo(0, -leaf.size);
      ctx.bezierCurveTo(
        leaf.size * 0.6,
        -leaf.size * 0.5,
        leaf.size * 0.6,
        leaf.size * 0.5,
        0,
        leaf.size
      );
      ctx.bezierCurveTo(
        -leaf.size * 0.6,
        leaf.size * 0.5,
        -leaf.size * 0.6,
        -leaf.size * 0.5,
        0,
        -leaf.size
      );
      ctx.fill();

      ctx.strokeStyle = leaf.color;
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = leaf.opacity * 0.6;
      ctx.beginPath();
      ctx.moveTo(0, -leaf.size * 0.8);
      ctx.lineTo(0, leaf.size * 0.8);
      ctx.stroke();

      ctx.restore();
    };

    const drawTrees = () => {
      const h = canvas.height;
      const w = canvas.width;

      ctx.fillStyle = "#052e16";
      ctx.globalAlpha = 0.85;
      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let i = 0; i <= 10; i++) {
        const x = (w / 10) * i;
        const y = h * (0.55 + Math.sin(i * 1.2) * 0.08);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "#0a3622";
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let i = 0; i <= 12; i++) {
        const x = (w / 12) * i;
        const y = h * (0.65 + Math.sin(i * 0.9 + 1) * 0.06);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fill();

      ctx.globalAlpha = 1;
    };

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, "#0a1a0f");
      grad.addColorStop(0.35, "#1b4332");
      grad.addColorStop(0.7, "#1a3d2e");
      grad.addColorStop(1, "#081c15");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const sunGrad = ctx.createRadialGradient(
        canvas.width * 0.75,
        canvas.height * 0.15,
        0,
        canvas.width * 0.75,
        canvas.height * 0.15,
        canvas.width * 0.35
      );
      sunGrad.addColorStop(0, "rgba(244, 162, 97, 0.15)");
      sunGrad.addColorStop(0.5, "rgba(244, 162, 97, 0.05)");
      sunGrad.addColorStop(1, "rgba(244, 162, 97, 0)");
      ctx.fillStyle = sunGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawTrees();

      fireflies.forEach((ff) => {
        const alpha = 0.3 + Math.sin(time * ff.speed + ff.phase) * 0.3;
        ctx.globalAlpha = Math.max(0, alpha);
        ctx.fillStyle = "#f4d35e";
        ctx.beginPath();
        ctx.arc(ff.x, ff.y, ff.size, 0, Math.PI * 2);
        ctx.fill();
      });

      leaves.forEach((leaf) => {
        leaf.y += leaf.speed;
        leaf.x += Math.sin(time + leaf.swayPhase) * 0.4;
        leaf.rotation += leaf.rotSpeed;

        if (leaf.y > canvas.height + 30) {
          leaf.y = -30;
          leaf.x = Math.random() * canvas.width;
        }

        drawLeaf(leaf);
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
