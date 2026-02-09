import { useState, useCallback } from "react";

interface MemoryGalleryProps {
  images: string[];
}

const MemoryGallery = ({ images }: MemoryGalleryProps) => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [lightbox, setLightbox] = useState(false);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 250);
  }, []);

  const next = () => goTo((current + 1) % images.length);
  const prev = () => goTo((current - 1 + images.length) % images.length);

  return (
    <>
      {/* Main Gallery */}
      <div className="flex flex-col items-center gap-6">
        {/* Image Container */}
        <div className="relative w-full max-w-md group">
          <div
            className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-rose-soft
              bg-muted cursor-pointer relative"
            onClick={() => setLightbox(true)}
          >
            <img
              src={images[current]}
              alt={`Memory ${current + 1}`}
              className={`w-full h-full object-cover transition-all duration-300 ${
                fading ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            />
            {/* Overlay hint */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <span className="font-body text-primary-foreground text-sm bg-primary/70 backdrop-blur-sm px-4 py-2 rounded-full">
                Tap to expand ✨
              </span>
            </div>
          </div>

          {/* Prev / Next Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
              bg-card/80 backdrop-blur-sm border border-border shadow-md
              flex items-center justify-center text-primary text-xl
              hover:bg-primary hover:text-primary-foreground transition-all duration-200
              opacity-80 hover:opacity-100"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
              bg-card/80 backdrop-blur-sm border border-border shadow-md
              flex items-center justify-center text-primary text-xl
              hover:bg-primary hover:text-primary-foreground transition-all duration-200
              opacity-80 hover:opacity-100"
            aria-label="Next"
          >
            ›
          </button>

          {/* Corner decorations */}
          <span className="absolute -top-2 -left-2 text-2xl animate-gentle-bob pointer-events-none">🌸</span>
          <span className="absolute -bottom-2 -right-2 text-2xl animate-gentle-bob pointer-events-none" style={{ animationDelay: "1.5s" }}>💕</span>
        </div>

        {/* Counter */}
        <p className="font-body text-muted-foreground text-sm">
          {current + 1} / {images.length}
        </p>

        {/* Dot navigation */}
        <div className="flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-3 bg-primary"
                  : "w-3 h-3 bg-rose-medium/40 hover:bg-rose-medium/70"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 overflow-x-auto max-w-full pb-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                i === current
                  ? "border-primary scale-110 shadow-md"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={src} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
        >
          <div className="relative max-w-2xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[current]}
              alt={`Memory ${current + 1}`}
              className={`w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl transition-all duration-300 ${
                fading ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            />
            {/* Close */}
            <button
              onClick={() => setLightbox(false)}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground
                flex items-center justify-center text-lg shadow-lg hover:scale-110 transition-transform"
            >
              ✕
            </button>
            {/* Lightbox arrows */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                bg-card/90 backdrop-blur-sm border border-border shadow-lg
                flex items-center justify-center text-primary text-2xl
                hover:bg-primary hover:text-primary-foreground transition-all"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                bg-card/90 backdrop-blur-sm border border-border shadow-lg
                flex items-center justify-center text-primary text-2xl
                hover:bg-primary hover:text-primary-foreground transition-all"
            >
              ›
            </button>
            {/* Counter */}
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-body text-primary-foreground text-sm
              bg-primary/70 backdrop-blur-sm px-4 py-1 rounded-full">
              {current + 1} / {images.length} ✨
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MemoryGallery;
