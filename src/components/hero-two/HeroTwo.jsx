/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

export default function HeroTwo({ timeline, ease }) {
  let videoData = useRef(null);
  let title = useRef(null);
  let subtitle = useRef(null);
  let text = useRef(null);
  let video =
    "https://res.cloudinary.com/dzrrdkd7i/video/upload/v1691590221/hd-video_nqodw1_cl3tuf.mp4";
  useEffect(() => {
    if (text.current || subtitle.current || title.current) {
      return;
    }
    // otherwise, record that we're running it now and continue...
    text.current = true;
    title.current = true;
    subtitle.current = true;

    timeline.from([subtitle, title, text], 1, {
      opacity: 0,
      y: 150,
      stagger: {
        amount: 0.6,
      },
      ease: ease,
    });
    timeline.from(videoData, 1.5, {
      opacity: 0,
      y: 250,
      ease: ease,
    });
  }, []);

  // useEffect(() => {
  //   videoRef.current.play();
  //   videoRef2.current.play();
  // }, [videoRef, videoRef2]);
  return (
    <div className="flex item-center w-full relative justify-center heroTwo">
      <div className="container mt-10">
        <h3 className="head__four text-center" ref={(el) => (subtitle = el)}>
          HD Networks
        </h3>
        <h1 className="head__one text-center" ref={(el) => (title = el)}>
          Think Possibilities...
        </h1>
        <p
          className="paragraph text-center w-full lg:w-[50%] mx-auto"
          ref={(el) => (text = el)}
        >
          HD Networks is a 
          <span className="bold" ref={(el) => (text = el)}> leading IT solutions provider </span>
           with branches in the <br/> United Kingdom and Nigeria
        </p>
        <div
          className="hidden md:flex relative lg:h-[75.5%] items-center "
          ref={(el) => (videoData = el)}
        >
          <img
            src="https://res.cloudinary.com/dzrrdkd7i/image/upload/v1691583501/tv_stb-1_xi7ydt.webp"
            alt=""
            className="w-full h-full"
          />
          <div className="videoPoistion ">
            <ReactPlayer
              url={video}
              className=" react-player"
              playing
              loop={true}
              muted
            />
          </div>
        </div>
      </div>
      <div className="absolute h-[55vh] w-full top-[120%] md:hidden overflow-hidden">
        <ReactPlayer
          url={video}
          className=" react-player border-b-2 "
          playing
          loop={true}
          muted
          playsinline={true}
        />
      </div>
    </div>
  );
}
