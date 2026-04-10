const examples = [
  {
    title: "My Design Journey",
    description:
      "A visual storytelling talk about growth, projects, and lessons learned.",
  },
  {
    title: "How We Built Our Thesis Prototype",
    description:
      "A short narrative showing the problem, process, challenges, and result.",
  },
  {
    title: "Why Public Speaking Matters",
    description: "A motivational talk with examples and practical advice.",
  },
];

export default function ExamplesPage() {
  return (
    <section>
      <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>Examples</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1rem",
        }}
      >
        {examples.map((example) => (
          <div
            key={example.title}
            style={{
              background: "#fff",
              padding: "1.25rem",
              borderRadius: "16px",
            }}
          >
            <h3 style={{ marginTop: 0 }}>{example.title}</h3>
            <p style={{ marginBottom: 0, lineHeight: 1.7 }}>
              {example.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
