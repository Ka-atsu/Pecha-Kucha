import { Container, Row, Col, Card } from "react-bootstrap";
import SectionHeading from "../../../components/SectionHeading";

const tips = [
  "Start with a story, question, or striking point instead of a dictionary-style definition.",
  "Keep one idea per slide so the audience can follow your presentation more easily.",
  "Use short text only. Let your voice do most of the explanation.",
  "Choose images that support the narration instead of decorating the slide without purpose.",
  "Practice out loud until the timing feels natural with the automatic slide changes.",
  "Do not read directly from the screen. Speak to the audience and use the slide as support.",
];

export default function TipsSection() {
  return (
    <div className="pk-page">
      <Container>
        <section className="pk-hero">
          <Row className="g-4 align-items-stretch">
            <Col lg={7}>
              <span className="pk-badge">Presentation advice</span>

              <h1 className="pk-title">
                Small presentation fixes,
                <br />
                big improvement
              </h1>

              <p className="pk-description">
                Strong PechaKucha talks depend on pacing, clarity, confidence,
                and visuals. These tips help users make their slides easier to
                present and easier to remember.
              </p>
            </Col>

            <Col lg={5}>
              <Card className="pk-card h-100">
                <Card.Body>
                  <div className="small-label">Quick reminder</div>
                  <div className="pk-mini-grid">
                    <div className="pk-mini-card">
                      <div className="pk-mini-title">Keep it visual</div>
                      <div className="pk-mini-text">
                        The slide should support the speaker, not replace them.
                      </div>
                    </div>
                    <div className="pk-mini-card">
                      <div className="pk-mini-title">Keep it focused</div>
                      <div className="pk-mini-text">
                        One idea per slide keeps the rhythm clean.
                      </div>
                    </div>
                    <div className="pk-mini-card">
                      <div className="pk-mini-title">Keep it practiced</div>
                      <div className="pk-mini-text">
                        Timing matters because slides auto-advance.
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
            eyebrow="Tips"
            title="Better delivery starts with simple habits."
            text="These cards work better visually than the old plain tip blocks and fit the new dark theme much more naturally."
          />

          <Row className="g-4">
            {tips.map((tip, index) => (
              <Col md={6} lg={4} key={tip}>
                <Card className="pk-card h-100">
                  <Card.Body>
                    <div className="tip-label">Tip {index + 1}</div>
                    <p className="feature-text mb-0 mt-3">{tip}</p>
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
