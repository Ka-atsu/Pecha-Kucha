import { Container, Row, Col, Card } from "react-bootstrap";
import SectionHeading from "../../../components/SectionHeading";

const formatRules = [
  {
    title: "20 slides",
    text: "The structure stays fixed, which makes the presentation easier to plan and easier to follow.",
  },
  {
    title: "20 seconds each",
    text: "Slides auto-advance, so timing and rehearsal become part of the presentation design.",
  },
  {
    title: "6 minutes 40 seconds total",
    text: "The short duration pushes the speaker to stay focused, visual, and clear.",
  },
];

const identityCards = [
  {
    label: "THIS SITE IS",
    title: "A learning and planning tool",
    text: "It teaches the format, gives examples, and helps users sketch their own 20-slide talk.",
  },
  {
    label: "THIS SITE IS NOT",
    title: "The official PechaKucha platform",
    text: "It does not need to copy the full community network, event system, or platform ecosystem.",
  },
  {
    label: "WHY THAT MATTERS",
    title: "Your thesis scope stays clear",
    text: "A focused prototype is easier to defend, easier to design, and more believable as an academic project.",
  },
];

export default function AboutSection() {
  return (
    <div className="pk-page">
      <Container>
        <section className="pk-hero">
          <Row className="g-4 align-items-stretch">
            <Col lg={7}>
              <span className="pk-badge">About the format</span>

              <h1 className="pk-title">
                What is
                <br />
                PechaKucha?
              </h1>

              <p className="pk-description">
                PechaKucha is a presentation style built around speed, timing,
                and visual storytelling. Speakers use exactly 20 slides, and
                each slide stays on screen for 20 seconds.
              </p>

              <div className="pk-actions">
                <a href="#manual" className="brand-btn">
                  Read the Manual
                </a>
                <a href="#examples" className="ghost-btn">
                  View Examples
                </a>
              </div>
            </Col>

            <Col lg={5}>
              <Card className="pk-card h-100">
                <Card.Body>
                  <div className="small-label">Format summary</div>
                  <div className="pk-stat">20 × 20</div>

                  <div className="pk-mini-grid">
                    {formatRules.map((item) => (
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
            eyebrow="Project direction"
            title="This website should explain, not imitate."
            text="The strongest version of your project is a clear educational prototype that teaches the format and helps users plan their own presentation."
          />

          <Row className="g-4">
            {identityCards.map((item) => (
              <Col md={6} lg={4} key={item.title}>
                <Card className="pk-card h-100">
                  <Card.Body>
                    <div className="feature-tag">{item.label}</div>
                    <h3 className="feature-title">{item.title}</h3>
                    <p className="feature-text">{item.text}</p>
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
                    eyebrow="Why the format works"
                    title="A structure built for focus."
                    text="Because the slide timing is fixed, presenters are forced to choose only the most important visuals and ideas."
                  />
                  <p className="feature-text mb-0">
                    That makes PechaKucha especially useful for school reports,
                    creative work, portfolios, concept pitches, and thesis
                    presentations where clarity matters.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="pk-card h-100">
                <Card.Body>
                  <SectionHeading
                    eyebrow="What users get here"
                    title="A simpler learning path."
                    text="Users move through the site in a clean flow: understand the format, study the guide, review examples, then plan their own talk."
                  />
                  <div className="pk-stack">
                    <div className="pk-note">About → understand the format</div>
                    <div className="pk-note">
                      Manual + Tips → improve delivery
                    </div>
                    <div className="pk-note">
                      Examples + Planner → apply what they learned
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
}
