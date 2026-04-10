import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import SectionHeading from "../../../components/SectionHeading";

const siteSections = [
  {
    label: "LEARN",
    title: "Understand the format",
    text: "Start with the rules, structure, and purpose of the 20×20 presentation style.",
    to: "/about",
  },
  {
    label: "PRACTICE",
    title: "Improve your delivery",
    text: "Use the tips and manual pages to build better pacing, stronger visuals, and clearer narration.",
    to: "/tips",
  },
  {
    label: "PLAN",
    title: "Map your own talk",
    text: "Use the planner page to turn one topic into a clean 20-slide presentation flow.",
    to: "/generator",
  },
];

const audiences = [
  "Students preparing reports, demos, or thesis presentations",
  "Design and media presenters who want stronger visual storytelling",
  "Beginners who need a simple way to structure a short presentation",
];

const quickFocus = [
  {
    title: "Guide",
    text: "Explains what PechaKucha is and how the format works.",
  },
  {
    title: "Examples",
    text: "Shows sample topics that fit the 20-slide structure well.",
  },
  {
    title: "Planner",
    text: "Helps users sketch a presentation flow before building slides.",
  },
];

export default function HomePage() {
  return (
    <div className="pk-page">
      <Container>
        <section className="pk-hero">
          <Row className="g-4 align-items-stretch">
            <Col lg={7}>
              <span className="pk-badge">PechaKucha Guide + Planner</span>

              <h1 className="pk-title">
                Build better
                <br />
                20×20 presentations
              </h1>

              <p className="pk-description">
                This website helps students and presenters understand the
                PechaKucha format, improve their delivery, and plan a stronger
                talk using a clear 20-slide structure.
              </p>

              <div className="pk-actions">
                <Link to="/manual" className="brand-btn">
                  Start with the Manual
                </Link>

                <Link to="/generator" className="ghost-btn">
                  Open Talk Planner
                </Link>
              </div>
            </Col>

            <Col lg={5}>
              <Card className="pk-card h-100">
                <Card.Body>
                  <div className="small-label">Website focus</div>
                  <div className="pk-stat">Learn • Practice • Plan</div>

                  <div className="pk-mini-grid">
                    {quickFocus.map((item) => (
                      <div key={item.title} className="pk-mini-card">
                        <div className="pk-mini-title">{item.title}</div>
                        <div className="pk-mini-text">{item.text}</div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="pk-section">
          <SectionHeading
            eyebrow="What you can do here"
            title="A clearer website structure."
            text="Instead of trying to feel like the official platform, this version focuses on teaching the format and helping users plan their own talk."
          />

          <Row className="g-4">
            {siteSections.map((item) => (
              <Col md={6} lg={4} key={item.title}>
                <Card className="pk-card h-100">
                  <Card.Body>
                    <div className="feature-tag">{item.label}</div>
                    <h3 className="feature-title">{item.title}</h3>
                    <p className="feature-text">{item.text}</p>
                    <Link to={item.to} className="section-link">
                      Explore page
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <section className="pk-section">
          <Row className="g-4">
            <Col lg={6}>
              <Card className="pk-card h-100">
                <Card.Body>
                  <SectionHeading
                    eyebrow="Who this is for"
                    title="Made for school and presentation practice."
                    text="This project works best as a learning and planning tool for academic, creative, and short-form presentation use."
                  />

                  <ul className="pk-list">
                    {audiences.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="pk-card h-100">
                <Card.Body>
                  <SectionHeading
                    eyebrow="Why this direction works"
                    title="Less confusion, better identity."
                    text="The site now has one strong purpose: guide users through the PechaKucha format and help them prepare a better talk."
                  />

                  <div className="pk-stack">
                    <div className="pk-note">
                      Clear purpose instead of mixed messaging
                    </div>
                    <div className="pk-note">
                      Better visual branding with a dark-purple theme
                    </div>
                    <div className="pk-note">
                      React-Bootstrap layout with custom CSS personality
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="pk-cta">
          <div className="cta-label">READY TO START?</div>
          <h2 className="cta-title">
            Learn the rules first, then plan your own 20-slide talk.
          </h2>
          <p className="cta-text">
            This makes the website feel focused, useful, and much more
            presentable for a thesis prototype.
          </p>
          <div className="pk-actions">
            <Link to="/about" className="brand-btn">
              Understand PechaKucha
            </Link>
            <Link to="/generator" className="ghost-btn">
              Go to Planner
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
