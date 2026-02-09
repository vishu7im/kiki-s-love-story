import { useCallback, useEffect, useMemo, useState } from "react";

const FloatingHearts = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 12 + Math.random() * 20,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 10,
        emoji: ["❤️", "🌸", "💕", "✨", "🌹", "💗"][i % 6],
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-float-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
