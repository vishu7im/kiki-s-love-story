interface SpecialCardProps {
  emoji: string;
  title: string;
  description: string;
  delay: number;
}

const SpecialCard = ({ emoji, title, description, delay }: SpecialCardProps) => {
  return (
    <div
      className={`bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-border
        animate-slide-up-fade hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
      style={{ animationDelay: `${delay}s` , opacity: 0, animationFillMode: 'forwards' }}
    >
      <div className="text-4xl mb-3">{emoji}</div>
      <h3 className="font-display text-xl text-primary mb-2">{title}</h3>
      <p className="font-body text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default SpecialCard;
