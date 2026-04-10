import HomeSection from "../home/pages/HomeSection";
import AboutSection from "../about-pk/pages/AboutSection";
import ManualSection from "../manual/pages/ManualSection";
import TipsSection from "../tips/pages/TipsSection";
import ExamplesSection from "../examples/pages/ExamplesSection";
import GeneratorSection from "../generator/pages/GeneratorSection";

export default function LandingPage() {
  return (
    <>
      <section id="home">
        <HomeSection />
      </section>

      <section id="about-pk">
        <AboutSection />
      </section>

      <section id="manual">
        <ManualSection />
      </section>

      <section id="tips">
        <TipsSection />
      </section>

      <section id="examples">
        <ExamplesSection />
      </section>

      <section id="generator">
        <GeneratorSection />
      </section>
    </>
  );
}
