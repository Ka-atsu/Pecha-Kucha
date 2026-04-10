const sections = [
  {
    title: "1. Understand the format",
    text: "A PechaKucha talk uses exactly 20 slides, and each slide stays on screen for 20 seconds.",
  },
  {
    title: "2. Pick one clear message",
    text: "Your whole presentation should revolve around one central idea, not many unrelated points.",
  },
  {
    title: "3. Use visual slides",
    text: "Use images, short phrases, and minimal text. The speaker should do most of the explaining.",
  },
  {
    title: "4. Practice the timing",
    text: "Because slides auto-advance, you need to rehearse your pacing carefully.",
  },
  {
    title: "5. End with a strong takeaway",
    text: "The final slides should leave the audience with one memorable point or action.",
  },
];

export default function ManualPage() {
  return (
    <section>
      <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>Manual</h1>

      <div style={{ display: "grid", gap: "1rem" }}>
        {sections.map((section) => (
          <div
            key={section.title}
            style={{
              background: "#fff",
              padding: "1.25rem",
              borderRadius: "16px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: "0.5rem" }}>
              {section.title}
            </h3>
            <p style={{ margin: 0, lineHeight: 1.7 }}>{section.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
