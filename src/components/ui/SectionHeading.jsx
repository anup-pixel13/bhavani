export default function SectionHeading({ label, title, description }) {
  return (
    <div className="section-heading">
      {label ? <span className="pill-label">{label}</span> : null}
      {title ? <h2>{title}</h2> : null}
      {description ? <p>{description}</p> : null}
    </div>
  );
}