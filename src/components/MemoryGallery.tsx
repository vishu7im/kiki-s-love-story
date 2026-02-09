import { useState } from "react";

interface MemoryGalleryProps {
  images: string[];
}

const MemoryGallery = ({ images }: MemoryGalleryProps) => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (idx: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 300);
  };

  const next = () => goTo((current + 1) % images.length);
  const prev = () => goTo((current - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-4 border-rose-soft cursor-pointer" onClick={next}>
        <img
          src={images[current]}
          alt={`Memory ${current + 1}`}
          className={`w-full h-full object-cover transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-foreground/40 to-transparent p-4">
          <p className="text-primary-foreground text-center font-body text-sm">
            Tap to see next memory ✨ ({current + 1}/{images.length})
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary scale-125" : "bg-rose-medium/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoryGallery;
