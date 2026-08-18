export default function Logo({ light = false }) {
  return (
    <span className="font-sans font-bold text-2xl tracking-tight">
      <span className={light ? "text-white" : "text-secondary"}>DM</span>{" "}
      <span className="text-primary">Digital</span>
    </span>
  );
}
