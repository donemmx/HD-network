import HeroTwo from "../components/hero-two/HeroTwo";
import HomeSectionThree from "../components/homeSectionThree/HomeSectionThree";
import InfoCard from "../components/infoCard/InfoCard";
import { gsap, Power3 } from "gsap";
export default function Home() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  return (
    <div>
      <HeroTwo timeline={tl} ease={ease} />
      <InfoCard timeline={tl} ease={ease} />
      <HomeSectionThree timeline={tl} ease={ease} />
      <div className="container">
      <h4 className="head__four leading-[1.15] pt-20" data-aos='fade'>
            <span className="text-[#666666]"> Latest News </span> <br />
            HD Networks
          </h4>
        <iframe
          src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/176765"
          frameBorder="0"
          scrolling="no"
          width="100%"
          style={{ height: "120vh" }}
          seamless="seamless"
          className="w-full my-10 no-scrollbar "
        ></iframe>
      </div>
      <div className=" distribution bg-center h-[80vh]"></div>
    </div>
  );
}
