import { useMemo } from "react";

const FloatingHearts = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 22,
        duration: 7 + Math.random() * 10,
        delay: Math.random() * 15,
        emoji: ["❤️", "🌸", "💕", "✨", "🌹", "💗", "🩷", "🦋", "💐", "🌷"][i % 10],
        type: i % 3 === 0 ? "petal" : "heart",
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className={`absolute ${p.type === "petal" ? "animate-float-petal" : "animate-float-heart"}`}
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.emoji}
        </span>
      ))}
      {/* Ambient sparkles */}
      {Array.from({ length: 8 }, (_, i) => (
        <span
          key={`sparkle-${i}`}
          className="absolute animate-sparkle text-xl"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        >
          ✨
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
