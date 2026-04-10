import { Container, Row, Col, Card } from "react-bootstrap";
import SectionHeading from "../../../components/SectionHeading";

const examples = [
  {
    category: "DESIGN",
    title: "My Design Journey",
    description:
      "A visual storytelling talk about growth, projects, mistakes, and lessons learned over time.",
  },
  {
    category: "THESIS",
    title: "How We Built Our Thesis Prototype",
    description:
      "A presentation showing the problem, the process, the revisions, and the final result.",
  },
  {
    category: "MOTIVATION",
    title: "Why Public Speaking Matters",
    description:
      "A short persuasive talk with practical examples and clear audience takeaways.",
  },
  {
    category: "PROCESS",
    title: "From Idea to Final Output",
    description:
      "A step-by-step story showing how one concept became a finished design, app, or product.",
  },
  {
    category: "PORTFOLIO",
    title: "Five Projects That Shaped My Style",
    description:
      "A project-based talk where each group of slides reflects one stage of creative growth.",
  },
  {
    category: "EDUCATION",
    title: "What I Learned During Our Research",
    description:
      "A concise academic talk focused on insights, methods, and the most important findings.",
  },
];

export default function ExamplesPage() {
  return (
    <div className="pk-page">
      <Container>
        <section className="pk-hero">
          <Row className="g-4 align-items-stretch">
            <Col lg={7}>
              <span className="pk-badge">Sample topics</span>

              <h1 className="pk-title">
                Example talks
                <br />
                that fit the format
              </h1>

              <p className="pk-description">
                These examples show how different topics can still follow the
                same 20-slide structure. The goal is not to copy them exactly,
                but to use them as inspiration for your own talk.
              </p>
            </Col>

            <Col lg={5}>
              <Card className="pk-card h-100">
                <Card.Body>
                  <div className="small-label">Why examples help</div>
                  <div className="pk-mini-grid">
                    <div className="pk-mini-card">
                      <div className="pk-mini-title">See topic range</div>
                      <div className="pk-mini-text">
                        Different subjects can still fit the same format.
                      </div>
                    </div>
                    <div className="pk-mini-card">
                      <div className="pk-mini-title">Study structure</div>
                      <div className="pk-mini-text">
                        Notice how each talk still has a beginning, middle, and
                        end.
                      </div>
                    </div>
                    <div className="pk-mini-card">
                      <div className="pk-mini-title">Get inspiration</div>
                      <div className="pk-mini-text">
                        Use the examples to shape your own topic and flow.
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
            eyebrow="Examples"
            title="Different topics, same storytelling logic."
            text="This grid feels more useful because it gives users practical topic direction instead of decorative filler."
          />

          <Row className="g-4">
            {examples.map((example, index) => (
              <Col md={6} lg={4} key={example.title}>
                <Card className="pk-card h-100 example-card">
                  <Card.Body>
                    <div
                      className={`example-visual example-visual-${(index % 3) + 1}`}
                    />
                    <div className="feature-tag mt-3">{example.category}</div>
                    <h3 className="feature-title">{example.title}</h3>
                    <p className="feature-text mb-0">{example.description}</p>
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
