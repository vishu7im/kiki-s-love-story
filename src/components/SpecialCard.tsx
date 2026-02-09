interface SpecialCardProps {
  emoji: string;
  title: string;
  description: string;
  delay: number;
}

const SpecialCard = ({ emoji, title, description, delay }: SpecialCardProps) => {
  return (
    <div
      className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-border
        animate-slide-up-fade hover:shadow-xl hover:-translate-y-2 transition-all duration-300
        hover:border-primary/30 relative overflow-hidden"
      style={{ animationDelay: `${delay}s`, opacity: 0, animationFillMode: "forwards" }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300 inline-block">
          {emoji}
        </div>
        <h3 className="font-display text-xl text-primary mb-2">{title}</h3>
        <p className="font-body text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default SpecialCard;
