export default function Card({ children, className = "", variant = "default" }) {
  return (
    <div className={`card card-${variant} ${className}`.trim()}>
      {children}
    </div>
  );
}