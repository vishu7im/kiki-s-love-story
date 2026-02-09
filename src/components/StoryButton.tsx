interface StoryButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "soft";
}

const StoryButton = ({ label, onClick, variant = "primary" }: StoryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        group relative px-10 py-4 rounded-full font-body font-semibold text-lg
        transition-all duration-300 transform hover:scale-105 active:scale-95
        overflow-hidden
        ${
          variant === "primary"
            ? "bg-primary text-primary-foreground animate-pulse-glow shadow-xl"
            : "bg-card/80 backdrop-blur-sm text-foreground border-2 border-primary/20 hover:border-primary/50 shadow-lg"
        }
      `}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700
        bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
      <span className="relative z-10">{label}</span>
    </button>
  );
};

export default StoryButton;
