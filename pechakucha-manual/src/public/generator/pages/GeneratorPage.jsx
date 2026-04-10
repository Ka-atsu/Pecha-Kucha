import { Link } from "react-router";

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <div className="section-eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {text && <p className="section-text">{text}</p>}
    </div>
  );
}

export default function GeneratorPage() {
  return (
    <section className="landing-page">
      <div className="hero-banner">
        <div className="hero-grid generator-hero-grid">
          <div>
            <div className="hero-badge">Official resource</div>

            <h1 className="hero-title">
              Continue your
              <br />
              PechaKucha journey
            </h1>

            <p className="hero-description">
              This website is focused on helping you understand the PechaKucha
              format through tutorials, guides, tips, and examples. To explore
              the official PechaKucha platform, visit their main website.
            </p>

            <div className="hero-actions">
              <a
                href="https://www.pechakucha.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                Visit PechaKucha
              </a>

              <Link to="/manual" className="btn btn-light">
                Back to Manual
              </Link>
            </div>
          </div>

          <div className="landing-card">
            <div className="format-label">THIS PAGE IS FOR</div>

            <div className="quick-sections">
              <div className="quick-card">
                <div className="quick-card-title">Learning the format</div>
                <div className="quick-card-text">
                  Understand how the 20×20 presentation style works.
                </div>
              </div>

              <div className="quick-card">
                <div className="quick-card-title">Exploring examples</div>
                <div className="quick-card-text">
                  Study sample ideas, structure, and presentation flow.
                </div>
              </div>

              <div className="quick-card">
                <div className="quick-card-title">
                  Finding the official site
                </div>
                <div className="quick-card-text">
                  Visit the PechaKucha website for broader community and
                  platform access.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SectionHeading
          eyebrow="About this page"
          title="This project serves as a tutorial guide."
          text="Instead of generating live presentation outlines, this section now directs users to the official PechaKucha website while keeping your project focused on education."
        />

        <div className="featured-grid">
          <div className="landing-card">
            <div className="featured-type">LEARN</div>
            <h3 className="featured-title">Study the format</h3>
            <p className="featured-description">
              Use the manual, tips, and examples in this project to understand
              how a PechaKucha presentation works.
            </p>
          </div>

          <div className="landing-card">
            <div className="featured-type">EXPLORE</div>
            <h3 className="featured-title">Visit the official platform</h3>
            <p className="featured-description">
              The official website gives users access to the wider PechaKucha
              experience beyond this tutorial-based project.
            </p>
          </div>

          <div className="landing-card">
            <div className="featured-type">FOCUS</div>
            <h3 className="featured-title">Keep your thesis scope clear</h3>
            <p className="featured-description">
              This keeps your website focused on teaching and guiding users,
              instead of trying to replicate the official platform.
            </p>
          </div>
        </div>
      </div>

      <div className="cta-banner">
        <div className="cta-label">OFFICIAL WEBSITE</div>

        <h2 className="cta-title">Ready to explore more about PechaKucha?</h2>

        <p className="cta-text">
          Use this tutorial site to learn the basics, then continue to the
          official PechaKucha website for the full platform experience.
        </p>

        <div>
          <a
            href="https://www.pechakucha.com/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-light"
          >
            Open PechaKucha
          </a>
        </div>
      </div>
    </section>
  );
}
