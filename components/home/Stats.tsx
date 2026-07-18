"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { targetNumber: 10000, suffix: "K+", divisor: 1000, label: "Developers" },
  { targetNumber: 2500, suffix: "K+", divisor: 1000, label: "Projects Shared" },
  { targetNumber: 15000, suffix: "K+", divisor: 1000, label: "Connections Made" },
  { targetNumber: 120, suffix: "+", divisor: 1, label: "Technologies" },
];

function LoopCountingNumber({ 
  targetNumber, 
  suffix, 
  divisor, 
  animationKey 
}: { 
  targetNumber: number; 
  suffix: string; 
  divisor: number; 
  animationKey: number; 
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Reset counter to 0 whenever the parent loop restarts
    setCurrent(0);

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds counting duration

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Smooth easeOutQuad progress
      const easeProgress = progress * (2 - progress);
      const nextValue = easeProgress * targetNumber;

      setCurrent(nextValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    // Delay counting slightly to let the card slide up completely first
    const delayTimeout = setTimeout(() => {
      window.requestAnimationFrame(step);
    }, 400);

    return () => clearTimeout(delayTimeout);
  }, [animationKey, targetNumber]);

  const value = current / divisor;

const formatted = divisor === 1000 && targetNumber % 1000 !== 0
  ? value.toFixed(1) + suffix
  : Math.floor(value) + suffix;

  return <span>{formatted}</span>;
}

export default function Stats() {
  const [loopKey, setLoopKey] = useState(0);

  return (
    <section className="bg-[var(--color-surface)] py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Outer Container: Handles the complete entry, float, fade-out, and reset loop */}
        <motion.div 
          key={loopKey}
          animate={{
            // Timeline: Hidden & Down -> Smooth Slide Up -> Slow Float -> Fade Out & Down
            opacity: [0, 1, 1, 1, 0],
            y: [40, 0, -8, 0, 40],
          }}
          transition={{
            duration: 8, // Full cycle length in seconds
            ease: "easeInOut",
            times: [0, 0.1, 0.5, 0.9, 1], // Timing distribution across states
          }}
          onAnimationComplete={() => {
            // Increments the key to instantly trigger a clean component re-render
            setLoopKey((prev) => prev + 1);
          }}
          className="grid grid-cols-2 gap-8 rounded-3xl border border-[var(--color-border)] bg-white/60 p-8 backdrop-blur lg:grid-cols-4 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="bg-gradient-to-r from-amber-700 to-orange-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
                <LoopCountingNumber 
                  targetNumber={stat.targetNumber} 
                  suffix={stat.suffix} 
                  divisor={stat.divisor} 
                  animationKey={loopKey}
                />
              </h3>

              <p className="mt-3 text-sm font-medium uppercase tracking-widest text-[var(--color-text-light)]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}