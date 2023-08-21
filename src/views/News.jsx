import HeroThree from "../components/hero-three/HeroThree";

export default function News() {
  return (
    <div className="">
       <HeroThree
        heroImg={'https://res.cloudinary.com/dzrrdkd7i/image/upload/v1691383413/news.avif'}
        headingOne={"Latest News Updates "}
        headingTwo={"- HD networks"}
        content={
          "Stay updated with our promos and latest packages."
        }
      />
      <div className="container min-h-full">
        <iframe
          src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/176765"
          frameBorder="0"
          scrolling="no"
          width="100%"
          className="min-h-full w-full h-[510vh] lg:h-[390vh] my-10 "
        ></iframe>
      </div>
    </div>
  );
}
