import HeroThree from "../components/hero-three/HeroThree";
import AboutSection from "../components/aboutSection/AboutSection";

export default function About() {
  return (
    <div>
      <HeroThree
        heroImg={'https://res.cloudinary.com/dzrrdkd7i/image/upload/v1689929174/about-bg_xq8beh.webp'}
        headingOne={"What makes us"}
        headingTwo={"different"}
        content={' Our helpdesk is available 24/7, ensuring we’re there to assist whenever you need us. We’ll take the stress so you can concentrate on running your business. '}
      />
      <AboutSection />
    </div>
  );
}
