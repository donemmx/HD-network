import HeroThree from "../components/hero-three/HeroThree";
import ServicesSection from "../components/servicesSection/ServicesSection";
import data from "../assets/data/data.json";
import ServiceCard from "../components/serviceCard/ServiceCard";
export default function Services() {
  return (
    <div>
      <HeroThree
        heroImg={'https://res.cloudinary.com/dzrrdkd7i/image/upload/v1692639868/services-bg-2-1_tur5al.webp'}
        headingOne={"We’ve got everything you need "}
        headingTwo={"to Launch and Grow your Business"}
        content={
          "Whether your organisation is looking for a proactive gaming broadcast solution, IT support services, managed services, unified communications or consultancy."
        }
      />
      <ServicesSection />
      <div className="flex flex-col gap-3 lg:gap-10">
        {data.map((res) => (
          <>
            <div className="">
              <ServiceCard
                bgImage={res.image}
                content={res.content}
                title={res.title}
                reverse={res.reverse}
                sectionId={res.sectionId}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
