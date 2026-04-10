import { Link } from "react-router";

const formatHighlights = [
  {
    title: "20 Slides",
    text: "Each presentation uses exactly 20 slides, creating a fixed structure that is easy to understand and plan.",
  },
  {
    title: "20 Seconds Each",
    text: "Every slide advances automatically after 20 seconds, which helps speakers focus on pacing and timing.",
  },
  {
    title: "6 Minutes 40 Seconds",
    text: "The total talk length stays short, making PechaKucha ideal for energetic, focused, and memorable presentations.",
  },
];

const benefits = [
  "Encourages clear and concise storytelling",
  "Helps presenters avoid overcrowded slides",
  "Improves pacing and audience engagement",
  "Works well for portfolios, pitches, and class reports",
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

function Card({ children }) {
  return <div className="landing-card">{children}</div>;
}

export default function AboutPKPage() {
  return (
    <section className="landing-page">
      <div className="hero-banner">
        <div className="hero-grid">
          <div>
            <div className="hero-badge">About the format</div>

            <h1 className="hero-title">
              What makes
              <br />
              PechaKucha different?
            </h1>

            <p className="hero-description">
              PechaKucha is a presentation format built around speed, clarity,
              and visual storytelling. Instead of long slide decks filled with
              text, speakers present 20 slides for 20 seconds each.
            </p>

            <div className="hero-actions">
              <Link to="/manual" className="btn btn-dark">
                Read the Manual
              </Link>

              <Link to="/generator" className="btn btn-light">
                Try the Generator
              </Link>
            </div>
          </div>

          <Card>
            <div className="format-label">FORMAT OVERVIEW</div>

            <div className="format-value">20 × 20</div>

            <div className="quick-sections">
              {formatHighlights.map((item) => (
                <div key={item.title} className="quick-card">
                  <div className="quick-card-title">{item.title}</div>
                  <div className="quick-card-text">{item.text}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div className="split-grid">
        <Card>
          <SectionHeading
            eyebrow="Why It Works"
            title="A format built for focus."
            text="PechaKucha keeps presentations short and structured, so speakers are pushed to communicate only the most important ideas."
          />

          <p className="section-text">
            Because slides move automatically, presenters need to think about
            rhythm, transitions, and storytelling. This creates talks that feel
            more dynamic and engaging for the audience.
          </p>
        </Card>

        <Card>
          <SectionHeading
            eyebrow="Best Uses"
            title="Ideal for creative and academic presentations."
            text="This format works especially well when you want to explain an idea visually without relying too much on text."
          />

          <div className="steps-list">
            {benefits.map((item, index) => (
              <div key={item} className="step-item">
                <div className="step-number">{index + 1}</div>
                <div className="step-text">{item}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div>
        <SectionHeading
          eyebrow="About This Prototype"
          title="Learn the format, then build your own talk."
          text="This project is designed to help users understand PechaKucha, explore examples, and quickly generate a structured presentation outline."
        />

        <div className="featured-grid">
          <Card>
            <div className="featured-type">LEARN</div>
            <h3 className="featured-title">Understand the rules</h3>
            <p className="featured-description">
              Discover how the 20×20 structure works and why it creates stronger
              pacing and storytelling.
            </p>
          </Card>

          <Card>
            <div className="featured-type">EXPLORE</div>
            <h3 className="featured-title">See practical applications</h3>
            <p className="featured-description">
              Use the format for portfolios, classroom reports, design pitches,
              and short public presentations.
            </p>
          </Card>

          <Card>
            <div className="featured-type">CREATE</div>
            <h3 className="featured-title">Draft a presentation faster</h3>
            <p className="featured-description">
              The generator helps users turn one topic into a 20-slide flow with
              a clearer structure from beginning to end.
            </p>
          </Card>
        </div>
      </div>

      <div className="cta-banner">
        <div className="cta-label">START YOUR PRESENTATION</div>

        <h2 className="cta-title">
          Build a simple, fast, and engaging 20-slide talk.
        </h2>

        <p className="cta-text">
          Use this page to explain the format first, then guide users toward the
          manual or generator as the next action.
        </p>

        <div>
          <Link to="/generator" className="btn btn-light">
            Open Generator
          </Link>
        </div>
      </div>
    </section>
  );
}
