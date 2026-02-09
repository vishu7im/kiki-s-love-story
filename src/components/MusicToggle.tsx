import { useState, useRef, useEffect } from "react";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/music/romantic.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 bg-card/80 backdrop-blur-sm border border-border
        rounded-full w-12 h-12 flex items-center justify-center shadow-lg
        hover:scale-110 transition-transform duration-200"
      aria-label="Toggle music"
    >
      <span className="text-xl">{playing ? "🔊" : "🔇"}</span>
    </button>
  );
};

export default MusicToggle;
