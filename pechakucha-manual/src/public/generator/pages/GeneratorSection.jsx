import { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import SectionHeading from "../../../components/SectionHeading";

const slidePhases = [
  {
    range: "Slides 1–4",
    title: "Hook and context",
    text: "Introduce the topic, why it matters, and what the audience should care about.",
  },
  {
    range: "Slides 5–8",
    title: "Problem or challenge",
    text: "Show the issue, need, or question that drives the presentation.",
  },
  {
    range: "Slides 9–14",
    title: "Process or main points",
    text: "Explain the method, journey, evidence, or key stages of the story.",
  },
  {
    range: "Slides 15–18",
    title: "Results or insight",
    text: "Highlight what happened, what changed, or what the audience should notice.",
  },
  {
    range: "Slides 19–20",
    title: "Closing takeaway",
    text: "End with a final reflection, conclusion, or memorable call to action.",
  },
];

export default function GeneratorSection() {
  const [topic, setTopic] = useState("My presentation topic");
  const [audience, setAudience] = useState("Classmates / panelists");
  const [goal, setGoal] = useState("Explain one clear idea");

  return (
    <div className="pk-page">
      <Container>
        <section className="pk-hero">
          <Row className="g-4 align-items-stretch">
            <Col lg={7}>
              <span className="pk-badge">Talk planner</span>

              <h1 className="pk-title">
                Plan your
                <br />
                20-slide talk
              </h1>

              <p className="pk-description">
                Instead of redirecting users away, this page now supports the
                actual goal of the project: helping them map a topic into a
                stronger PechaKucha presentation flow.
              </p>

              <div className="pk-actions">
                <a href="#manual" className="brand-btn">
                  Review the Manual
                </a>
                <a href="#examples" className="ghost-btn">
                  See Example Topics
                </a>
              </div>
            </Col>

            <Col lg={5}>
              <Card className="pk-card h-100">
                <Card.Body>
                  <div className="small-label">Best use of this section</div>
                  <div className="pk-mini-grid">
                    <div className="pk-mini-card">
                      <div className="pk-mini-title">Choose a topic</div>
                      <div className="pk-mini-text">
                        Decide what one message your talk should communicate.
                      </div>
                    </div>
                    <div className="pk-mini-card">
                      <div className="pk-mini-title">Map the flow</div>
                      <div className="pk-mini-text">
                        Break the talk into opening, middle, result, and ending.
                      </div>
                    </div>
                    <div className="pk-mini-card">
                      <div className="pk-mini-title">Build slides later</div>
                      <div className="pk-mini-text">
                        Use the plan first, then create your visuals in
                        PowerPoint or Canva.
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="pk-section">
          <Row className="g-4">
            <Col lg={5}>
              <Card className="pk-card h-100">
                <Card.Body>
                  <SectionHeading
                    eyebrow="Planner input"
                    title="Set your topic, audience, and goal."
                    text="This makes the section feel more interactive even before you add a full generator feature."
                  />

                  <Form className="pk-form">
                    <Form.Group className="mb-3">
                      <Form.Label>Topic</Form.Label>
                      <Form.Control
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="Enter your topic"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Audience</Form.Label>
                      <Form.Control
                        type="text"
                        value={audience}
                        onChange={(e) => setAudience(e.target.value)}
                        placeholder="Who are you presenting to?"
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Main goal</Form.Label>
                      <Form.Control
                        type="text"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        placeholder="What should people understand?"
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={7}>
              <Card className="pk-card h-100">
                <Card.Body>
                  <div className="small-label">Suggested presentation flow</div>
                  <h3 className="planner-main-title">{topic}</h3>
                  <p className="section-text">
                    Audience: <strong>{audience}</strong>
                    <br />
                    Goal: <strong>{goal}</strong>
                  </p>

                  <div className="planner-grid">
                    {slidePhases.map((phase) => (
                      <div key={phase.range} className="planner-phase">
                        <div className="planner-range">{phase.range}</div>
                        <div className="planner-phase-title">{phase.title}</div>
                        <div className="planner-phase-text">{phase.text}</div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="pk-cta">
          <div className="cta-label">NEXT MOVE</div>
          <h2 className="cta-title">
            Use the planner first, then turn the flow into real slides.
          </h2>
          <p className="cta-text">
            This keeps the section aligned with your thesis scope while still
            feeling useful and interactive.
          </p>
        </section>
      </Container>
    </div>
  );
}
