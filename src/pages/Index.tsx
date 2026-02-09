import { useState, useCallback } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import StoryButton from "@/components/StoryButton";
import SpecialCard from "@/components/SpecialCard";
import MemoryGallery from "@/components/MemoryGallery";
import MusicToggle from "@/components/MusicToggle";
import LoveCountdown from "@/components/LoveCountdown";

const TOTAL_SECTIONS = 7;

const Index = () => {
  const [section, setSection] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((target: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setSection(target);
      setTransitioning(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);
  }, []);

  const next = () => goTo(section + 1);

  return (
    <div className="min-h-screen bg-romantic-gradient relative">
      <MusicToggle />
      <FloatingHearts />

      {/* Progress Indicator */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {Array.from({ length: TOTAL_SECTIONS }, (_, i) => (
          <div
            key={i}
            className={`progress-dot rounded-full ${i === section ? "active" : "inactive"}`}
          />
        ))}
      </div>

      <div
        className={`relative z-20 transition-all duration-500 ${
          transitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {section === 0 && <LandingSection onStart={next} />}
        {section === 1 && <HowWeMetSection onNext={next} />}
        {section === 2 && <BecameMineSection onNext={next} />}
        {section === 3 && <WhySpecialSection onNext={next} />}
        {section === 4 && <BirthdayWishSection onNext={next} />}
        {section === 5 && <GallerySection onNext={next} />}
        {section === 6 && <FinalSection onReplay={() => goTo(0)} />}
      </div>
    </div>
  );
};

/* ─── Section Components ─── */

const LandingSection = ({ onStart }: { onStart: () => void }) => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 gap-6">
    {/* Decorative rings */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="w-[500px] h-[500px] rounded-full border border-primary/10 animate-rotate-slow" />
      <div className="absolute w-[350px] h-[350px] rounded-full border border-accent/10 animate-rotate-slow" style={{ animationDirection: "reverse", animationDuration: "15s" }} />
    </div>

    <div className="animate-heartbeat">
      <span className="text-7xl">🎂</span>
    </div>
    <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-romantic animate-slide-up-fade animate-text-glow">
      Happy Birthday Khushi ❤️
    </h1>
    <div className="romantic-divider animate-slide-up-fade stagger-1">
      <span className="text-primary/60 font-display text-lg">10 February 2026</span>
    </div>
    <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-md animate-slide-up-fade stagger-2 leading-relaxed">
      This is not just a website, it's my heart 💗
    </p>
    <div className="w-full max-w-sm animate-slide-up-fade stagger-3">
      <LoveCountdown />
    </div>
    <div className="animate-slide-up-fade stagger-4">
      <StoryButton label="Start the Journey 🌸" onClick={onStart} />
    </div>
    {/* Scroll hint */}
    <div className="animate-gentle-bob stagger-5 animate-slide-up-fade">
      <span className="text-muted-foreground/50 text-sm font-body">tap to begin our story</span>
    </div>
  </section>
);

const SectionHeader = ({ chapter, title }: { chapter: string; title: string }) => (
  <div className="text-center space-y-2">
    <div className="romantic-divider">
      <span className="text-sm font-body text-muted-foreground tracking-widest uppercase">{chapter}</span>
    </div>
    <h2 className="font-display text-4xl sm:text-5xl text-primary animate-text-glow">{title}</h2>
  </div>
);

const DateBadge = ({ date }: { date: string }) => (
  <div className="flex justify-center">
    <span className="inline-block bg-primary/10 text-primary font-body text-sm px-5 py-1.5 rounded-full border border-primary/20 animate-sway">
      {date}
    </span>
  </div>
);

const HowWeMetSection = ({ onNext }: { onNext: () => void }) => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-8">
    <div className="max-w-lg w-full space-y-6 section-enter">
      <SectionHeader chapter="Chapter One" title="How We Met 💫" />
      <DateBadge date="19 December 2023" />

      <div className="image-romantic animate-slide-up-fade stagger-1">
        <img src="/images/1.jpg" alt="How we met" className="w-full aspect-[4/3] object-cover" />
      </div>

      <div className="glass-card p-6 animate-slide-up-fade stagger-2">
        <p className="font-body text-foreground/80 leading-relaxed text-center">
          Some people search their whole lives for what I found on that winter day.
          The universe conspired to bring us together — and the moment I saw you,
          everything changed. I didn't know it then, but that day, 19th December 2023,
          was the day my life truly began. ✨
        </p>
      </div>

      <div className="image-romantic animate-slide-up-fade stagger-3">
        <img src="/images/2.jpg" alt="First moments" className="w-full aspect-[4/3] object-cover" />
      </div>

      <div className="flex justify-center pt-4 animate-slide-up-fade stagger-4">
        <StoryButton label="Next →" onClick={onNext} variant="soft" />
      </div>
    </div>
  </section>
);

const BecameMineSection = ({ onNext }: { onNext: () => void }) => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-8">
    <div className="max-w-lg w-full space-y-6 section-enter">
      <SectionHeader chapter="Chapter Two" title="When You Became Mine 💕" />
      <DateBadge date="27 December 2024" />

      <div className="relative">
        <div className="image-romantic animate-slide-up-fade stagger-1">
          <img src="/images/3.jpg" alt="Together" className="w-full aspect-[4/3] object-cover" />
        </div>
        <div className="absolute -top-4 -right-4 text-4xl animate-heartbeat">💗</div>
        <div className="absolute -bottom-4 -left-4 text-3xl animate-sway">🌹</div>
        <div className="absolute -top-3 left-8 text-2xl animate-gentle-bob" style={{ animationDelay: "0.5s" }}>✨</div>
      </div>

      <div className="glass-card p-6 animate-slide-up-fade stagger-2">
        <p className="font-body text-foreground/80 leading-relaxed text-center">
          A whole year of knowing you, of falling deeper every single day —
          and then, on 27th December 2024, you said yes. My heart still
          skips a beat thinking about that moment. You weren't just someone
          I liked anymore — you became my person, my safe place, my everything.
          That day, I became the luckiest person alive. 💖
        </p>
      </div>

      <div className="image-romantic animate-slide-up-fade stagger-3">
        <img src="/images/4.jpg" alt="Us together" className="w-full aspect-[4/3] object-cover" />
      </div>

      <div className="flex justify-center pt-4 animate-slide-up-fade stagger-4">
        <StoryButton label="Next →" onClick={onNext} variant="soft" />
      </div>
    </div>
  </section>
);

const WhySpecialSection = ({ onNext }: { onNext: () => void }) => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-8">
    <div className="max-w-lg w-full space-y-6 section-enter">
      <SectionHeader chapter="Chapter Three" title="Why You're Special 🌸" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SpecialCard emoji="😊" title="Your Smile" description="It lights up my darkest days. One smile from you and the whole world feels right." delay={0.1} />
        <SpecialCard emoji="🤗" title="Your Care" description="The way you care for everyone around you — it makes you the most beautiful soul I know." delay={0.3} />
        <SpecialCard emoji="😤" title="Your Anger" description="Even when you're mad, you're the cutest thing in the world. I can't help but smile." delay={0.5} />
        <SpecialCard emoji="💪" title="Your Support" description="You lift me up when I can't find the strength. You believe in me even when I don't." delay={0.7} />
      </div>

      <div className="image-romantic animate-slide-up-fade stagger-4">
        <img src="/images/5.jpg" alt="Special moments" className="w-full aspect-[4/3] object-cover" />
      </div>

      <div className="flex justify-center pt-4 animate-slide-up-fade stagger-5">
        <StoryButton label="Next →" onClick={onNext} variant="soft" />
      </div>
    </div>
  </section>
);

const BirthdayWishSection = ({ onNext }: { onNext: () => void }) => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-8">
    <div className="max-w-lg w-full space-y-6 section-enter">
      <SectionHeader chapter="Chapter Four" title="My Birthday Wish for You 🎂" />

      <div className="image-romantic animate-slide-up-fade stagger-1">
        <img src="/images/6.jpg" alt="Birthday" className="w-full aspect-[4/3] object-cover" />
      </div>

      <div className="glass-card p-8 animate-slide-up-fade stagger-2 relative">
        {/* Corner decorations */}
        <span className="absolute -top-3 -left-3 text-2xl animate-gentle-bob">🌹</span>
        <span className="absolute -top-3 -right-3 text-2xl animate-gentle-bob" style={{ animationDelay: "1s" }}>🌸</span>
        <span className="absolute -bottom-3 -left-3 text-2xl animate-sway">💐</span>
        <span className="absolute -bottom-3 -right-3 text-2xl animate-sway" style={{ animationDelay: "1.5s" }}>🌷</span>

        <p className="font-body text-foreground/85 leading-loose text-center italic text-[15px]">
          "Happy Birthday, my Kiki 🎂❤️
          <br /><br />
          On this special day, I want you to know — you are the most incredible
          thing that has ever happened to me. You are my sunshine on cloudy days,
          my calm in every storm, my reason to smile.
          <br /><br />
          I wish you all the happiness in the world — every dream fulfilled,
          every prayer answered, every wish come true. May this year bring
          you closer to everything your beautiful heart desires.
          <br /><br />
          You deserve the moon, the stars, and everything in between.
          But until I can give you those, I give you my heart — fully,
          completely, forever.
          <br /><br />
          Happy Birthday, my love. Today and every day, I celebrate you. 🌹✨"
        </p>
      </div>

      <div className="flex justify-center pt-4 animate-slide-up-fade stagger-3">
        <StoryButton label="Next Surprise 🎁" onClick={onNext} />
      </div>
    </div>
  </section>
);

const GallerySection = ({ onNext }: { onNext: () => void }) => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-8">
    <div className="max-w-lg w-full space-y-6 section-enter">
      <SectionHeader chapter="Chapter Five" title="Our Memory Gallery 📸" />

      <p className="font-body text-center text-muted-foreground animate-slide-up-fade stagger-1">
        A little collection of our beautiful moments together ✨
      </p>

      <div className="animate-slide-up-fade stagger-2">
        <MemoryGallery
          images={[
            "/images/7.jpg",
            "/images/8.jpg",
            "/images/9.jpg",
            "/images/10.jpg",
            "/images/11.jpg",
            "/images/12.jpg",
          ]}
        />
      </div>

      <div className="flex justify-center pt-4 animate-slide-up-fade stagger-3">
        <StoryButton label="One Last Thing →" onClick={onNext} variant="soft" />
      </div>
    </div>
  </section>
);

const FinalSection = ({ onReplay }: { onReplay: () => void }) => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-8 text-center relative">
    {/* Big decorative heart rings */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="w-[600px] h-[600px] rounded-full border-2 border-primary/10 animate-rotate-slow" />
      <div className="absolute w-[400px] h-[400px] rounded-full border border-accent/10 animate-rotate-slow" style={{ animationDirection: "reverse" }} />
      <div className="absolute w-[200px] h-[200px] rounded-full border border-rose-medium/15 animate-rotate-slow" style={{ animationDuration: "10s" }} />
    </div>

    <div className="max-w-lg w-full space-y-8 section-enter relative z-10">
      <div className="animate-heartbeat">
        <span className="text-8xl">❤️</span>
      </div>

      <h2 className="font-display text-3xl sm:text-5xl text-romantic animate-slide-up-fade stagger-1 animate-text-glow">
        I choose you.
        <br />
        Today. Tomorrow. Always.
      </h2>

      <div className="relative animate-slide-up-fade stagger-2">
        <div className="image-romantic border-4 border-primary/30">
          <img src="/images/13.jpg" alt="Us forever" className="w-full aspect-[4/3] object-cover" />
        </div>
        <span className="absolute -top-4 -right-4 text-3xl animate-heartbeat">💕</span>
        <span className="absolute -bottom-4 -left-4 text-3xl animate-sway">🌹</span>
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl animate-gentle-bob">👑</span>
      </div>

      <h1 className="font-display text-4xl sm:text-6xl text-primary animate-slide-up-fade stagger-3 animate-text-glow">
        Happy Birthday
        <br />
        My Love, Khushi (Kiki) ❤️
      </h1>

      <p className="font-body text-muted-foreground animate-slide-up-fade stagger-4 text-lg">
        Forever yours, with all my heart 💗🌹
      </p>

      <div className="animate-slide-up-fade stagger-5">
        <StoryButton label="🔄 Replay from Start" onClick={onReplay} variant="soft" />
      </div>
    </div>
  </section>
);

export default Index;
