import { useState, useEffect } from "react";

const TOGETHER_SINCE = new Date("2024-12-27T00:00:00");

const LoveCountdown = () => {
  const [elapsed, setElapsed] = useState(getElapsed());

  useEffect(() => {
    const interval = setInterval(() => setElapsed(getElapsed()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-md text-center space-y-3">
      <p className="font-body text-muted-foreground text-sm tracking-widest uppercase">Together for</p>
      <div className="flex justify-center gap-3 flex-wrap">
        <TimeUnit value={elapsed.days} label="Days" />
        <TimeUnit value={elapsed.hours} label="Hours" />
        <TimeUnit value={elapsed.minutes} label="Min" />
        <TimeUnit value={elapsed.seconds} label="Sec" />
      </div>
      <p className="font-display text-primary text-lg">…and counting forever 💕</p>
    </div>
  );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="bg-secondary/60 rounded-xl px-4 py-2 min-w-[60px]">
    <p className="font-body text-2xl font-bold text-primary">{value}</p>
    <p className="font-body text-xs text-muted-foreground">{label}</p>
  </div>
);

function getElapsed() {
  const now = Date.now();
  const diff = Math.max(0, now - TOGETHER_SINCE.getTime());
  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / 60000) % 60;
  const hours = Math.floor(diff / 3600000) % 24;
  const days = Math.floor(diff / 86400000);
  return { days, hours, minutes, seconds };
}

export default LoveCountdown;
