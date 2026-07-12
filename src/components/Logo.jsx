export default function Logo({ className = "" }) {
  return (
    <span className={`font-display text-2xl tracking-tight ${className}`}>
      <span className="text-espresso">DM</span>{" "}
      <span className="text-bronze">Digital</span>
    </span>
  );
}
