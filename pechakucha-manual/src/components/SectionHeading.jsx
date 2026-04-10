export default function SectionHeading({
  eyebrow,
  title,
  text,
  className = "",
}) {
  return (
    <div className={`section-heading ${className}`}>
      <div className="section-eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {text && <p className="section-text">{text}</p>}
    </div>
  );
}
