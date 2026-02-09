import { useState, useCallback } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import StoryButton from "@/components/StoryButton";
import SpecialCard from "@/components/SpecialCard";
import MemoryGallery from "@/components/MemoryGallery";

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
    }, 400);
  }, []);

  const next = () => goTo(section + 1);

  return (
    <div className="min-h-screen bg-romantic-gradient relative">
      <FloatingHearts />

      <div
        className={`relative z-20 transition-opacity duration-400 ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Section 0: Landing */}
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
  <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 gap-8">
    <div className="animate-gentle-bob">
      <span className="text-6xl">🎂</span>
    </div>
    <h1 className="font-display text-5xl sm:text-7xl text-romantic animate-slide-up-fade">
      Happy Birthday Khushi ❤️
    </h1>
    <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-md animate-slide-up-fade stagger-2">
      This is not just a website, it's my heart 💗
    </p>
    <div className="animate-slide-up-fade stagger-3">
      <StoryButton label="Start the Journey 🌸" onClick={onStart} />
    </div>
  </section>
);

const HowWeMetSection = ({ onNext }: { onNext: () => void }) => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-8">
    <div className="max-w-lg w-full space-y-6 section-enter">
      <p className="text-center text-sm font-body text-muted-foreground tracking-widest uppercase">
        Chapter One
      </p>
      <h2 className="font-display text-4xl sm:text-5xl text-center text-primary">
        How We Met 💫
      </h2>
      <p className="font-body text-center text-muted-foreground text-sm">
        19 December 2023
      </p>
      <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-rose-soft animate-slide-up-fade stagger-1">
        <img src="/images/1.jpg" alt="How we met" className="w-full aspect-[4/3] object-cover" />
      </div>
      <p className="font-body text-foreground/80 leading-relaxed text-center animate-slide-up-fade stagger-2">
        Some people search their whole lives for what I found on that winter day.
        The universe conspired to bring us together — and the moment I saw you,
        everything changed. I didn't know it then, but that day, 19th December 2023,
        was the day my life truly began. ✨
      </p>
      <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-rose-soft animate-slide-up-fade stagger-3">
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
      <p className="text-center text-sm font-body text-muted-foreground tracking-widest uppercase">
        Chapter Two
      </p>
      <h2 className="font-display text-4xl sm:text-5xl text-center text-primary">
        When You Became Mine 💕
      </h2>
      <p className="font-body text-center text-muted-foreground text-sm">
        27 December 2024
      </p>
      <div className="relative">
        <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-rose-soft animate-slide-up-fade stagger-1">
          <img src="/images/3.jpg" alt="Together" className="w-full aspect-[4/3] object-cover" />
        </div>
        <div className="absolute -top-3 -right-3 text-4xl animate-gentle-bob">💗</div>
        <div className="absolute -bottom-3 -left-3 text-3xl animate-gentle-bob" style={{ animationDelay: "1s" }}>🌹</div>
      </div>
      <p className="font-body text-foreground/80 leading-relaxed text-center animate-slide-up-fade stagger-2">
        A whole year of knowing you, of falling deeper every single day —
        and then, on 27th December 2024, you said yes. My heart still
        skips a beat thinking about that moment. You weren't just someone
        I liked anymore — you became my person, my safe place, my everything.
        That day, I became the luckiest person alive. 💖
      </p>
      <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-rose-soft animate-slide-up-fade stagger-3">
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
      <p className="text-center text-sm font-body text-muted-foreground tracking-widest uppercase">
        Chapter Three
      </p>
      <h2 className="font-display text-4xl sm:text-5xl text-center text-primary">
        Why You're Special 🌸
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SpecialCard
          emoji="😊"
          title="Your Smile"
          description="It lights up my darkest days. One smile from you and the whole world feels right."
          delay={0.1}
        />
        <SpecialCard
          emoji="🤗"
          title="Your Care"
          description="The way you care for everyone around you — it makes you the most beautiful soul I know."
          delay={0.3}
        />
        <SpecialCard
          emoji="😤"
          title="Your Anger"
          description="Even when you're mad, you're the cutest thing in the world. I can't help but smile."
          delay={0.5}
        />
        <SpecialCard
          emoji="💪"
          title="Your Support"
          description="You lift me up when I can't find the strength. You believe in me even when I don't."
          delay={0.7}
        />
      </div>
      <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-rose-soft animate-slide-up-fade stagger-4">
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
      <p className="text-center text-sm font-body text-muted-foreground tracking-widest uppercase">
        Chapter Four
      </p>
      <h2 className="font-display text-4xl sm:text-5xl text-center text-primary">
        My Birthday Wish for You 🎂
      </h2>
      <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-rose-soft animate-slide-up-fade stagger-1">
        <img src="/images/6.jpg" alt="Birthday" className="w-full aspect-[4/3] object-cover" />
      </div>
      <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-md animate-slide-up-fade stagger-2">
        <p className="font-body text-foreground/85 leading-relaxed text-center italic">
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
      <p className="text-center text-sm font-body text-muted-foreground tracking-widest uppercase">
        Chapter Five
      </p>
      <h2 className="font-display text-4xl sm:text-5xl text-center text-primary">
        Our Memory Gallery 📸
      </h2>
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
  <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-8 text-center">
    <div className="max-w-lg w-full space-y-8 section-enter">
      <div className="animate-gentle-bob">
        <span className="text-7xl">❤️</span>
      </div>
      <h2 className="font-display text-3xl sm:text-5xl text-romantic animate-slide-up-fade stagger-1">
        I choose you.
        <br />
        Today. Tomorrow. Always.
      </h2>
      <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-primary/30 animate-slide-up-fade stagger-2">
        <img src="/images/13.jpg" alt="Us forever" className="w-full aspect-[4/3] object-cover" />
      </div>
      <h1 className="font-display text-4xl sm:text-6xl text-primary animate-slide-up-fade stagger-3">
        Happy Birthday
        <br />
        My Love, Khushi (Kiki) ❤️
      </h1>
      <p className="font-body text-muted-foreground animate-slide-up-fade stagger-4">
        Forever yours, with all my heart 💗🌹
      </p>
      <div className="animate-slide-up-fade stagger-5">
        <StoryButton label="🔄 Replay from Start" onClick={onReplay} variant="soft" />
      </div>
    </div>
  </section>
);

export default Index;
