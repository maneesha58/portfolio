"use client";

import { useEffect, useRef, useState } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
};

function parseColor(color: string): [number, number, number] {
  if (color.startsWith("#")) {
    const h = color.replace("#", "");
    const full =
      h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
    return [
      parseInt(full.slice(0, 2), 16),
      parseInt(full.slice(2, 4), 16),
      parseInt(full.slice(4, 6), 16),
    ];
  }

  const rgbMatch = color.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
  if (rgbMatch) {
    return [
      parseInt(rgbMatch[1], 10),
      parseInt(rgbMatch[2], 10),
      parseInt(rgbMatch[3], 10),
    ];
  }

  return [10, 10, 26];
}

function lerpColor(a: string, b: string, t: number): string {
  const [r1, g1, b1] = parseColor(a);
  const [r2, g2, b2] = parseColor(b);
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const bl = Math.round(b1 + (b2 - b1) * t);
  return `rgb(${r}, ${g}, ${bl})`;
}

const SKY_PALETTE = [
  "#0a0a1a",
  "#0f1035",
  "#1a1a4e",
  "#2d1b69",
  "#1e3a5f",
  "#0d2137",
  "#1a0a2e",
  "#0a0a1a",
];

function CanvasSky() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let time = 0;
    let stars: Star[] = [];

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const starCount = prefersReducedMotion
        ? 120
        : window.innerWidth < 768
          ? 200
          : 350;

      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.75,
        size: Math.random() * 2 + 0.3,
        opacity: 0.3 + Math.random() * 0.7,
        twinkleSpeed: 0.5 + Math.random() * 2,
        twinklePhase: Math.random() * Math.PI * 2,
      }));
    };

    const getSkyColor = (t: number) => {
      const cycle = t * 0.015;
      const idx = Math.floor(cycle) % SKY_PALETTE.length;
      const next = (idx + 1) % SKY_PALETTE.length;
      const frac = cycle - Math.floor(cycle);
      return lerpColor(SKY_PALETTE[idx], SKY_PALETTE[next], frac);
    };

    const drawMountains = (w: number, h: number, baseY: number, alpha: number) => {
      ctx.fillStyle = `rgba(5, 8, 20, ${alpha})`;
      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let i = 0; i <= 14; i++) {
        const x = (w / 14) * i;
        const peak = h * (baseY + Math.sin(i * 0.8 + 1) * 0.04 + Math.cos(i * 1.3) * 0.03);
        ctx.lineTo(x, peak);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fill();
    };

    const drawMilkyWay = (w: number, h: number, t: number) => {
      const cx = w * 0.55 + Math.sin(t * 0.1) * w * 0.05;
      const cy = h * 0.35;

      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.45);
      grad.addColorStop(0, "rgba(180, 160, 255, 0.12)");
      grad.addColorStop(0.3, "rgba(120, 100, 200, 0.06)");
      grad.addColorStop(0.6, "rgba(80, 60, 150, 0.03)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-0.35 + Math.sin(t * 0.05) * 0.05);
      const band = ctx.createLinearGradient(-w * 0.5, 0, w * 0.5, 0);
      band.addColorStop(0, "rgba(255,255,255,0)");
      band.addColorStop(0.3, "rgba(200,190,255,0.04)");
      band.addColorStop(0.5, "rgba(255,250,240,0.08)");
      band.addColorStop(0.7, "rgba(200,190,255,0.04)");
      band.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = band;
      ctx.fillRect(-w * 0.5, -h * 0.08, w, h * 0.16);
      ctx.restore();
    };

    const animate = () => {
      time += prefersReducedMotion ? 0 : 0.016;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      const skyTop = getSkyColor(time);
      const skyBottom = lerpColor(skyTop, "#050510", 0.6);

      const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
      skyGrad.addColorStop(0, skyTop);
      skyGrad.addColorStop(0.6, skyBottom);
      skyGrad.addColorStop(1, "#030308");
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, h);

      drawMilkyWay(w, h, time);

      stars.forEach((star) => {
        const twinkle = prefersReducedMotion
          ? star.opacity
          : star.opacity * (0.5 + 0.5 * Math.sin(time * star.twinkleSpeed + star.twinklePhase));
        ctx.globalAlpha = twinkle;
        ctx.fillStyle = star.size > 1.5 ? "#e8e0ff" : "#ffffff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      const horizonY = h * 0.62;
      drawMountains(w, h, 0.58, 0.95);
      drawMountains(w, h, 0.62, 0.7);

      const waterY = horizonY;
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, waterY, w, h - waterY);
      ctx.clip();

      ctx.globalAlpha = 0.35;
      ctx.scale(1, -1);
      ctx.translate(0, -waterY * 2);
      drawMountains(w, h, 0.58, 0.5);
      drawMountains(w, h, 0.62, 0.35);
      ctx.restore();

      const waterGrad = ctx.createLinearGradient(0, waterY, 0, h);
      waterGrad.addColorStop(0, "rgba(10, 15, 40, 0.5)");
      waterGrad.addColorStop(1, "rgba(3, 3, 8, 0.9)");
      ctx.fillStyle = waterGrad;
      ctx.fillRect(0, waterY, w, h - waterY);

      if (!prefersReducedMotion) {
        ctx.globalAlpha = 0.03 + Math.sin(time * 0.8) * 0.02;
        ctx.fillStyle = getSkyColor(time + 10);
        ctx.fillRect(0, 0, w, h);
        ctx.globalAlpha = 1;
      }

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

export function SkyBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    fetch("/sky-bg.mp4", { method: "HEAD" })
      .then((res) => {
        if (res.ok && res.headers.get("content-type")?.includes("video")) {
          setUseVideo(true);
        }
      })
      .catch(() => setUseVideo(false));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {useVideo ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster=""
            onCanPlay={() => setVideoReady(true)}
            onError={() => setUseVideo(false)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          >
            <source src="/sky-bg.mp4" type="video/mp4" />
          </video>
          {!videoReady && <CanvasSky />}
        </>
      ) : (
        <CanvasSky />
      )}

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-transparent to-black/60"
        aria-hidden="true"
      />
    </div>
  );
}
