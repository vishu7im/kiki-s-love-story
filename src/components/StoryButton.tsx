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
        px-8 py-3 rounded-full font-body font-semibold text-lg
        transition-all duration-300 transform hover:scale-105 active:scale-95
        ${
          variant === "primary"
            ? "bg-primary text-primary-foreground animate-pulse-glow shadow-lg"
            : "bg-secondary text-secondary-foreground hover:bg-rose-medium/30 shadow-md"
        }
      `}
    >
      {label}
    </button>
  );
};

export default StoryButton;
