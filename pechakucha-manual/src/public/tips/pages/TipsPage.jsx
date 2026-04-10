const tips = [
  "Start with a story, not a definition.",
  "Use one idea per slide.",
  "Keep text very short.",
  "Use strong visuals that support your narration.",
  "Practice until your timing feels natural.",
  "Avoid reading directly from the screen.",
];

export default function TipsPage() {
  return (
    <section>
      <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>
        Presentation Tips
      </h1>

      <div style={{ display: "grid", gap: "1rem" }}>
        {tips.map((tip, index) => (
          <div
            key={tip}
            style={{
              background: "#fff",
              padding: "1rem 1.25rem",
              borderRadius: "14px",
            }}
          >
            <strong>Tip {index + 1}:</strong> {tip}
          </div>
        ))}
      </div>
    </section>
  );
}
