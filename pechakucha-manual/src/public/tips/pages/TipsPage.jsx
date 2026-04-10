const tips = [
  "Start with a story, not a definition.",
  "Use one idea per slide.",
  "Keep text very short.",
  "Use strong visuals that support your narration.",
  "Practice until your timing feels natural.",
  "Avoid reading directly from the screen.",
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <div className="section-eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {text && <p className="section-text">{text}</p>}
    </div>
  );
}

export default function TipsPage() {
  return (
    <section className="landing-page">
      <div className="hero-banner">
        <div className="hero-grid tips-hero-grid">
          <div>
            <div className="hero-badge">Presentation advice</div>

            <h1 className="hero-title">
              Tips for a clearer,
              <br />
              stronger talk
            </h1>

            <p className="hero-description">
              Good PechaKucha presentations rely on pacing, visuals, and
              confident delivery. Use these tips to make your slides more
              engaging and easier to present.
            </p>
          </div>

          <div className="landing-card">
            <div className="format-label">QUICK REMINDER</div>

            <div className="quick-sections">
              <div className="quick-card">
                <div className="quick-card-title">Keep it visual</div>
                <div className="quick-card-text">
                  Let your narration explain more than the slide text.
                </div>
              </div>

              <div className="quick-card">
                <div className="quick-card-title">Keep it focused</div>
                <div className="quick-card-text">
                  One idea per slide makes the presentation easier to follow.
                </div>
              </div>

              <div className="quick-card">
                <div className="quick-card-title">Keep it practiced</div>
                <div className="quick-card-text">
                  Timing matters because slides move automatically.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SectionHeading
          eyebrow="Tips"
          title="Small improvements make a big difference."
          text="These simple tips can help you create a presentation that feels more natural, more visual, and more memorable."
        />

        <div className="tips-list">
          {tips.map((tip, index) => (
            <div key={tip} className="landing-card tip-card">
              <div className="tip-number">Tip {index + 1}</div>
              <p className="tip-text">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-banner">
        <div className="cta-label">KEEP IMPROVING</div>
        <h2 className="cta-title">
          Practice the format and make every slide count.
        </h2>
        <p className="cta-text">
          Strong visuals, clear pacing, and confident delivery can turn a short
          presentation into something memorable.
        </p>
      </div>
    </section>
  );
}
