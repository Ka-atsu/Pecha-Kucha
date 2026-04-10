import { Link } from "react-router";
import "../../0_css/LandingPage.css";

const featuredTalks = [
  {
    title: "How to Make a Great 20x20",
    type: "PRESENTATION",
    description:
      "A simple introduction to the PechaKucha format and how to keep your slides visual and your story sharp.",
  },
  {
    title: "Designing with Constraints",
    type: "FEATURED",
    description:
      "Explore how strict timing can create better pacing, clarity, and audience engagement.",
  },
  {
    title: "From Idea to Storyboard",
    type: "GUIDE",
    description:
      "Turn one topic into a complete presentation flow with a clear beginning, middle, and ending.",
  },
];

const quickSections = [
  {
    title: "20 Slides",
    text: "Every talk has exactly 20 slides, which keeps the structure focused and easy to plan.",
  },
  {
    title: "20 Seconds Each",
    text: "Slides auto-advance every 20 seconds, so pacing and rehearsal become part of the design.",
  },
  {
    title: "400 Seconds Total",
    text: "You only have 6 minutes and 40 seconds, so every visual and every sentence has to count.",
  },
];

const eventCards = [
  {
    city: "Tokyo",
    label: "Official City Event",
    text: "See how local creative communities use short-form storytelling to bring people together.",
  },
  {
    city: "Manila",
    label: "Community Night",
    text: "Prototype your own event section where users can browse city-based PechaKucha gatherings.",
  },
  {
    city: "Student Showcase",
    label: "Campus Format",
    text: "Ideal for thesis talks, portfolio storytelling, classroom presentations, and public speaking.",
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

function Card({ children }) {
  return <div className="landing-card">{children}</div>;
}

export default function HomePage() {
  return (
    <section className="landing-page">
      <div className="hero-banner">
        <div className="hero-grid">
          <div>
            <div className="hero-badge">20 × 20 storytelling</div>

            <h1 className="hero-title">
              Discover stories,
              <br />
              ideas, and presentations.
            </h1>

            <p className="hero-description">
              A PechaKucha-inspired prototype for learning the format, reading a
              manual, finding examples, and generating a fast 20-slide talk
              outline.
            </p>

            <div className="hero-actions">
              <Link to="/manual" className="btn btn-dark">
                Explore the Manual
              </Link>

              <Link to="/generator" className="btn btn-light">
                Generate a Talk
              </Link>
            </div>
          </div>

          <Card>
            <div className="format-label">PRESENTATION FORMAT</div>

            <div className="format-value">20 × 20</div>

            <div className="quick-sections">
              {quickSections.map((item) => (
                <div key={item.title} className="quick-card">
                  <div className="quick-card-title">{item.title}</div>
                  <div className="quick-card-text">{item.text}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div>
        <SectionHeading
          eyebrow="Featured Presentations"
          title="Start with examples people actually want to watch."
          text="Use large cards, short descriptions, and a simple editorial layout so the home page feels like a discovery platform, not a dashboard."
        />

        <div className="featured-grid">
          {featuredTalks.map((item, index) => (
            <Card key={item.title}>
              <div className={`featured-image featured-image-${index + 1}`} />
              <div className="featured-type">{item.type}</div>
              <h3 className="featured-title">{item.title}</h3>
              <p className="featured-description">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="split-grid">
        <Card>
          <SectionHeading
            eyebrow="How It Works"
            title="A format built on rhythm."
            text="Keep this section simple and educational so first-time users understand the rules immediately."
          />

          <div className="steps-list">
            {[
              "Choose one clear topic.",
              "Plan a 20-slide visual sequence.",
              "Keep text minimal and image-led.",
              "Practice for 20 seconds per slide.",
              "Deliver with strong pacing and energy.",
            ].map((step, index) => (
              <div key={step} className="step-item">
                <div className="step-number">{index + 1}</div>
                <div className="step-text">{step}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeading
            eyebrow="Communities & Events"
            title="Make the prototype feel social."
            text="The official site highlights city events and community discovery, so your home page should also suggest a global storytelling network."
          />

          <div className="event-list">
            {eventCards.map((item) => (
              <div key={item.city} className="event-card">
                <div className="event-label">{item.label}</div>
                <div className="event-city">{item.city}</div>
                <p className="event-text">{item.text}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="cta-banner">
        <div className="cta-label">READY TO BUILD</div>

        <h2 className="cta-title">
          Turn your topic into a fast 20-slide presentation outline.
        </h2>

        <p className="cta-text">
          Keep the home page focused on discovery and action. Your generator
          becomes the main conversion point for users who are ready to create.
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
