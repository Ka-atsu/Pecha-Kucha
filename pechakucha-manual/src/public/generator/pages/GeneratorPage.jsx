import { useMemo, useState } from "react";

function buildSlides(topic, audience, goal) {
  const subject = topic || "Your topic";
  const target = audience || "your audience";
  const result = goal || "your main goal";

  return [
    `Hook: why ${subject} matters`,
    `${subject} in one sentence`,
    `The problem ${target} faces`,
    `Why this problem matters now`,
    `A quick personal or real-world story`,
    `Key insight #1`,
    `Key insight #2`,
    `Key insight #3`,
    `A surprising fact or observation`,
    `What people usually get wrong`,
    `Your approach or perspective`,
    `Simple example #1`,
    `Simple example #2`,
    `What changed after applying it`,
    `Big takeaway for ${target}`,
    `How this connects to ${result}`,
    `One thing to remember`,
    `One thing to try`,
    `Final emotional point`,
    `Closing message`,
  ];
}

export default function GeneratorPage() {
  const [topic, setTopic] = useState("");
  const [audience, setAudience] = useState("");
  const [goal, setGoal] = useState("");

  const slides = useMemo(
    () => buildSlides(topic, audience, goal),
    [topic, audience, goal],
  );

  return (
    <section>
      <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>
        Outline Generator
      </h1>

      <div
        style={{
          display: "grid",
          gap: "1rem",
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "16px",
          marginBottom: "1.5rem",
        }}
      >
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Topic"
          style={{
            padding: "0.85rem 1rem",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
          }}
        />

        <input
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          placeholder="Audience"
          style={{
            padding: "0.85rem 1rem",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
          }}
        />

        <input
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Main goal"
          style={{
            padding: "0.85rem 1rem",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
          }}
        />
      </div>

      <div style={{ display: "grid", gap: "0.75rem" }}>
        {slides.map((slide, index) => (
          <div
            key={slide + index}
            style={{
              background: "#fff",
              padding: "1rem 1.25rem",
              borderRadius: "12px",
            }}
          >
            <strong>Slide {index + 1}:</strong> {slide}
          </div>
        ))}
      </div>
    </section>
  );
}
