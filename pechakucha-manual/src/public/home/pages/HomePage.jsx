import { Link } from "react-router";

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
    <div style={{ marginBottom: "1.25rem" }}>
      <div
        style={{
          display: "inline-block",
          padding: "0.35rem 0.7rem",
          borderRadius: "999px",
          background: "#fff",
          border: "1px solid rgba(17,17,17,0.08)",
          fontSize: "0.78rem",
          fontWeight: 700,
          letterSpacing: "0.04em",
          marginBottom: "0.9rem",
        }}
      >
        {eyebrow}
      </div>

      <h2
        style={{
          margin: 0,
          fontSize: "2.3rem",
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
        }}
      >
        {title}
      </h2>

      {text && (
        <p
          style={{
            marginTop: "0.85rem",
            maxWidth: "720px",
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "#5f5f5f",
          }}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "24px",
        padding: "1.4rem",
        border: "1px solid rgba(17,17,17,0.08)",
        boxShadow: "0 16px 34px rgba(0,0,0,0.05)",
      }}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <section style={{ display: "grid", gap: "1.5rem" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f3ece1 100%)",
          borderRadius: "32px",
          padding: "2rem",
          border: "1px solid rgba(17,17,17,0.08)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.35fr 0.9fr",
            gap: "1.5rem",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                marginBottom: "1rem",
                padding: "0.45rem 0.8rem",
                borderRadius: "999px",
                background: "#111111",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "0.8rem",
              }}
            >
              20 × 20 storytelling
            </div>

            <h1
              style={{
                fontSize: "4.2rem",
                lineHeight: 0.95,
                letterSpacing: "-0.06em",
                margin: 0,
                maxWidth: "700px",
              }}
            >
              Discover stories,
              <br />
              ideas, and presentations.
            </h1>

            <p
              style={{
                fontSize: "1.06rem",
                lineHeight: 1.8,
                color: "#5f5f5f",
                maxWidth: "690px",
                marginTop: "1.2rem",
              }}
            >
              A PechaKucha-inspired prototype for learning the format, reading a
              manual, finding examples, and generating a fast 20-slide talk
              outline.
            </p>

            <div
              style={{
                display: "flex",
                gap: "0.85rem",
                flexWrap: "wrap",
                marginTop: "1.4rem",
              }}
            >
              <Link
                to="/manual"
                style={{
                  textDecoration: "none",
                  padding: "0.95rem 1.2rem",
                  borderRadius: "14px",
                  background: "#111111",
                  color: "#ffffff",
                  fontWeight: 700,
                }}
              >
                Explore the Manual
              </Link>

              <Link
                to="/generator"
                style={{
                  textDecoration: "none",
                  padding: "0.95rem 1.2rem",
                  borderRadius: "14px",
                  background: "#ffffff",
                  color: "#111111",
                  fontWeight: 700,
                  border: "1px solid rgba(17,17,17,0.08)",
                }}
              >
                Generate a Talk
              </Link>
            </div>
          </div>

          <Card>
            <div
              style={{ color: "#777", fontSize: "0.82rem", fontWeight: 700 }}
            >
              PRESENTATION FORMAT
            </div>

            <div
              style={{
                marginTop: "1rem",
                fontSize: "4rem",
                lineHeight: 0.9,
                fontWeight: 900,
                letterSpacing: "-0.06em",
              }}
            >
              20 × 20
            </div>

            <div
              style={{
                marginTop: "1rem",
                display: "grid",
                gap: "0.9rem",
              }}
            >
              {quickSections.map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "0.9rem 1rem",
                    borderRadius: "18px",
                    background: "#f8f4ed",
                  }}
                >
                  <div style={{ fontWeight: 800, marginBottom: "0.25rem" }}>
                    {item.title}
                  </div>
                  <div
                    style={{
                      color: "#666",
                      lineHeight: 1.6,
                      fontSize: "0.95rem",
                    }}
                  >
                    {item.text}
                  </div>
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
          }}
        >
          {featuredTalks.map((item, index) => (
            <Card key={item.title}>
              <div
                style={{
                  height: "170px",
                  borderRadius: "18px",
                  background:
                    index === 0
                      ? "linear-gradient(135deg, #111111, #4b5563)"
                      : index === 1
                        ? "linear-gradient(135deg, #d9c7a5, #f0e7d8)"
                        : "linear-gradient(135deg, #d7e4f2, #f8fbff)",
                  marginBottom: "1rem",
                }}
              />

              <div
                style={{
                  display: "inline-block",
                  fontSize: "0.74rem",
                  fontWeight: 800,
                  color: "#666",
                  marginBottom: "0.7rem",
                }}
              >
                {item.type}
              </div>

              <h3
                style={{
                  margin: 0,
                  fontSize: "1.25rem",
                  lineHeight: 1.2,
                  letterSpacing: "-0.03em",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{ color: "#666", lineHeight: 1.7, marginTop: "0.8rem" }}
              >
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: "1rem",
        }}
      >
        <Card>
          <SectionHeading
            eyebrow="How It Works"
            title="A format built on rhythm."
            text="Keep this section simple and educational so first-time users understand the rules immediately."
          />

          <div style={{ display: "grid", gap: "0.9rem" }}>
            {[
              "Choose one clear topic.",
              "Plan a 20-slide visual sequence.",
              "Keep text minimal and image-led.",
              "Practice for 20 seconds per slide.",
              "Deliver with strong pacing and energy.",
            ].map((step, index) => (
              <div
                key={step}
                style={{
                  display: "flex",
                  gap: "0.85rem",
                  alignItems: "center",
                  padding: "0.9rem 1rem",
                  borderRadius: "16px",
                  background: "#f8f4ed",
                }}
              >
                <div
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "999px",
                    background: "#111111",
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </div>
                <div style={{ fontWeight: 600 }}>{step}</div>
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

          <div style={{ display: "grid", gap: "0.9rem" }}>
            {eventCards.map((item) => (
              <div
                key={item.city}
                style={{
                  padding: "1rem 1.05rem",
                  borderRadius: "18px",
                  background: "#ffffff",
                  border: "1px solid rgba(17,17,17,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#777",
                    fontWeight: 800,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    marginTop: "0.35rem",
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {item.city}
                </div>
                <p style={{ color: "#666", lineHeight: 1.7, marginBottom: 0 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div
        style={{
          background: "#111111",
          color: "#ffffff",
          borderRadius: "30px",
          padding: "2rem",
          display: "grid",
          gap: "1rem",
        }}
      >
        <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "#d0d0d0" }}>
          READY TO BUILD
        </div>
        <h2
          style={{
            margin: 0,
            fontSize: "2.5rem",
            lineHeight: 1.05,
            letterSpacing: "-0.05em",
            maxWidth: "700px",
          }}
        >
          Turn your topic into a fast 20-slide presentation outline.
        </h2>
        <p style={{ color: "#d1d5db", maxWidth: "720px", lineHeight: 1.75 }}>
          Keep the home page focused on discovery and action. Your generator
          becomes the main conversion point for users who are ready to create.
        </p>

        <div>
          <Link
            to="/generator"
            style={{
              textDecoration: "none",
              display: "inline-block",
              padding: "0.95rem 1.2rem",
              borderRadius: "14px",
              background: "#ffffff",
              color: "#111111",
              fontWeight: 800,
            }}
          >
            Open Generator
          </Link>
        </div>
      </div>
    </section>
  );
}
