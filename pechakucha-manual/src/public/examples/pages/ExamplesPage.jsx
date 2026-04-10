const examples = [
  {
    title: "My Design Journey",
    description:
      "A visual storytelling talk about growth, projects, and lessons learned.",
  },
  {
    title: "How We Built Our Thesis Prototype",
    description:
      "A short narrative showing the problem, process, challenges, and result.",
  },
  {
    title: "Why Public Speaking Matters",
    description: "A motivational talk with examples and practical advice.",
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

export default function ExamplesPage() {
  return (
    <section className="landing-page">
      <div className="hero-banner">
        <div className="hero-grid examples-hero-grid">
          <div>
            <div className="hero-badge">Sample topics</div>

            <h1 className="hero-title">
              Explore example
              <br />
              PechaKucha talks
            </h1>

            <p className="hero-description">
              These examples show how different topics can be turned into a
              short, visual, and well-paced presentation.
            </p>
          </div>

          <div className="landing-card">
            <div className="format-label">WHY EXAMPLES HELP</div>

            <div className="quick-sections">
              <div className="quick-card">
                <div className="quick-card-title">See possible topics</div>
                <div className="quick-card-text">
                  Learn how different ideas can fit the 20×20 format.
                </div>
              </div>

              <div className="quick-card">
                <div className="quick-card-title">Study structure</div>
                <div className="quick-card-text">
                  Notice how each talk can have a beginning, middle, and end.
                </div>
              </div>

              <div className="quick-card">
                <div className="quick-card-title">Get inspiration</div>
                <div className="quick-card-text">
                  Use examples to shape your own topic and presentation flow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SectionHeading
          eyebrow="Examples"
          title="Different topics, same clear structure."
          text="Each example below shows a possible presentation idea that can work well in a PechaKucha format."
        />

        <div className="examples-grid">
          {examples.map((example, index) => (
            <div key={example.title} className="landing-card example-card">
              <div
                className={`featured-image featured-image-${(index % 3) + 1}`}
              />
              <div className="featured-type">EXAMPLE</div>
              <h3 className="featured-title">{example.title}</h3>
              <p className="featured-description">{example.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-banner">
        <div className="cta-label">BUILD YOUR OWN</div>
        <h2 className="cta-title">
          Turn your topic into a short and engaging presentation.
        </h2>
        <p className="cta-text">
          Use these examples as inspiration, then create your own 20-slide talk
          with a clear story and stronger pacing.
        </p>
      </div>
    </section>
  );
}
