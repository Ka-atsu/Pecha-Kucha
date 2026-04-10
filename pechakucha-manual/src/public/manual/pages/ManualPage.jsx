const sections = [
  {
    title: "1. Understand the format",
    text: "A PechaKucha talk uses exactly 20 slides, and each slide stays on screen for 20 seconds.",
  },
  {
    title: "2. Pick one clear message",
    text: "Your whole presentation should revolve around one central idea, not many unrelated points.",
  },
  {
    title: "3. Use visual slides",
    text: "Use images, short phrases, and minimal text. The speaker should do most of the explaining.",
  },
  {
    title: "4. Practice the timing",
    text: "Because slides auto-advance, you need to rehearse your pacing carefully.",
  },
  {
    title: "5. End with a strong takeaway",
    text: "The final slides should leave the audience with one memorable point or action.",
  },
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

export default function ManualPage() {
  return (
    <section className="landing-page">
      <div className="hero-banner">
        <div className="hero-grid manual-hero-grid">
          <div>
            <div className="hero-badge">Step-by-step guide</div>

            <h1 className="hero-title">
              Learn how to build
              <br />a PechaKucha talk
            </h1>

            <p className="hero-description">
              Follow this simple manual to understand the format, shape your
              message, design visual slides, and present with better timing and
              confidence.
            </p>
          </div>

          <div className="landing-card">
            <div className="format-label">QUICK OVERVIEW</div>
            <div className="quick-sections">
              <div className="quick-card">
                <div className="quick-card-title">20 slides</div>
                <div className="quick-card-text">
                  A fixed structure keeps the presentation focused.
                </div>
              </div>

              <div className="quick-card">
                <div className="quick-card-title">20 seconds each</div>
                <div className="quick-card-text">
                  Auto-advancing slides make pacing part of the design.
                </div>
              </div>

              <div className="quick-card">
                <div className="quick-card-title">Clear message</div>
                <div className="quick-card-text">
                  Every slide should support one central idea.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SectionHeading
          eyebrow="Manual"
          title="Build your talk one step at a time."
          text="Use these sections as a simple guide for planning, designing, and rehearsing your presentation."
        />

        <div className="manual-list">
          {sections.map((section, index) => (
            <div key={section.title} className="landing-card manual-card">
              <div className="manual-number">{index + 1}</div>
              <div>
                <h3 className="featured-title">{section.title}</h3>
                <p className="featured-description">{section.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-banner">
        <div className="cta-label">NEXT STEP</div>
        <h2 className="cta-title">
          Turn the guide into your own 20-slide talk.
        </h2>
        <p className="cta-text">
          Once you understand the format, you can start outlining your topic and
          building a stronger presentation flow.
        </p>
      </div>
    </section>
  );
}
