import { useState, useRef, useEffect } from "react";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(true);
  const [pulsing, setPulsing] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/music/romantic.mp3");
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    // Autoplay — browsers may block, so handle gracefully
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked — wait for first user interaction
        setPlaying(false);
        const resumeOnClick = () => {
          audio.play().then(() => setPlaying(true)).catch(() => {});
          document.removeEventListener("click", resumeOnClick);
        };
        document.addEventListener("click", resumeOnClick);
      });
    }

    return () => {
      audio.pause();
      audio.src = "";
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
    setPulsing(false);
  };

  return (
    <button
      onClick={toggle}
      className={`fixed top-4 right-4 z-50 bg-card/90 backdrop-blur-md border border-primary/20
        rounded-full w-14 h-14 flex items-center justify-center shadow-xl
        hover:scale-110 active:scale-95 transition-all duration-300
        ${pulsing && playing ? "animate-pulse-glow" : ""}
      `}
      aria-label="Toggle music"
    >
      <span className="text-2xl">{playing ? "🎵" : "🔇"}</span>
      {playing && (
        <span className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping opacity-30" />
      )}
    </button>
  );
};

export default MusicToggle;
