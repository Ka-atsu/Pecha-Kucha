export default function AboutPKPage() {
  return (
    <section>
      <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>
        About PechaKucha
      </h1>

      <div
        style={{
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "16px",
          lineHeight: 1.8,
        }}
      >
        <p>
          PechaKucha is a presentation format where the speaker shows 20 slides,
          each for 20 seconds. The format keeps talks short, visual, and
          energetic.
        </p>

        <p>
          It works well for storytelling, portfolios, design presentations,
          classroom talks, and creative pitch decks because it forces clarity
          and pacing.
        </p>

        <p>
          In this prototype, the goal is to help users understand the format and
          quickly draft a presentation structure.
        </p>
      </div>
    </section>
  );
}
