import { Container, Row, Col, Card } from "react-bootstrap";
import SectionHeading from "../../../components/SectionHeading";

const sections = [
  {
    title: "Understand the 20×20 rule",
    text: "A PechaKucha talk uses exactly 20 slides, and each slide stays visible for 20 seconds.",
  },
  {
    title: "Choose one strong message",
    text: "Your presentation should revolve around one clear central idea instead of several unrelated points.",
  },
  {
    title: "Build visual slides",
    text: "Use images, short phrases, and minimal text so the audience listens to you instead of reading the screen.",
  },
  {
    title: "Organize your story",
    text: "Plan a beginning, middle, and end so the talk feels like a short story instead of random information.",
  },
  {
    title: "Practice the timing",
    text: "Because slides move automatically, rehearsal is essential if you want the delivery to feel natural.",
  },
  {
    title: "Finish with one takeaway",
    text: "End with a clear final point so the audience remembers the purpose of your talk.",
  },
];

export default function ManualPage() {
  return (
    <div className="pk-page">
      <Container>
        <section className="pk-hero">
          <Row className="g-4 align-items-stretch">
            <Col lg={7}>
              <span className="pk-badge">Step-by-step guide</span>

              <h1 className="pk-title">
                Build your talk
                <br />
                one step at a time
              </h1>

              <p className="pk-description">
                Use this guide to understand the format, shape your message,
                organize your story, and prepare a presentation that is short,
                visual, and easy to follow.
              </p>
            </Col>

            <Col lg={5}>
              <Card className="pk-card h-100">
                <Card.Body>
                  <div className="small-label">Quick overview</div>
                  <div className="pk-mini-grid">
                    <div className="pk-mini-card">
                      <div className="pk-mini-title">Fixed structure</div>
                      <div className="pk-mini-text">
                        20 slides keeps the talk focused.
                      </div>
                    </div>
                    <div className="pk-mini-card">
                      <div className="pk-mini-title">Auto timing</div>
                      <div className="pk-mini-text">
                        20 seconds per slide shapes the pacing.
                      </div>
                    </div>
                    <div className="pk-mini-card">
                      <div className="pk-mini-title">One message</div>
                      <div className="pk-mini-text">
                        Every slide should support the same core idea.
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="pk-section">
          <SectionHeading
            eyebrow="Manual"
            title="A cleaner guide for first-time users."
            text="These steps make the page feel like an actual tutorial instead of just a list of random notes."
          />

          <Row className="g-4">
            {sections.map((section, index) => (
              <Col md={6} key={section.title}>
                <Card className="pk-card h-100 manual-card">
                  <Card.Body>
                    <div className="manual-step-number">{index + 1}</div>
                    <h3 className="feature-title mt-3">{section.title}</h3>
                    <p className="feature-text mb-0">{section.text}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  );
}
