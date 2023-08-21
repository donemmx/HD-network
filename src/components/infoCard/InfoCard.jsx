import { useEffect, useRef } from "react";

/* eslint-disable react/prop-types */
export default function InfoCard({ timeline, ease }) {
  let title = useRef(null);
  let image1 = useRef(null);
  let image2 = useRef(null);
  let text = useRef(null);

  useEffect(() => {
    if (text.current || title.current ) { return; }
    // otherwise, record that we're running it now and continue...
    text.current = true;
    title.current = true;

    timeline.from([title,  text], 1, {
      opacity: 0,
      y: -100,
      stagger: {
        amount: 0.3,
      },
      ease: ease
    });
    timeline.from([image1,  image2], 1, {
      opacity: 0,
      y: 100,
      stagger: {
        amount: 0.3,
      },
      ease: ease
    });

  });
  return (
    <div className=" mt-[70vh] md:mt-10">
      <div className="container bg-[#F4F4F4] p-5 lg:p-10 rounded-lg lg:rounded-[60px]">
        <h4 className="head__four pt-3 text-center leading-[1.2] lg:w-[50%] mx-auto" ref={el => title = el}>
          <span className=" text-[#666]" > We Are HD-Networks </span> <br/> Think
          Possibilities
        </h4>
        <p className=" text-md w-full lg:w-[70%] font-thin pt-5 text-center mx-auto" ref={el => text = el}>
        We support dozens of organizations, ranging from SMEs to enterprise-size companies in Europe and Africa. We provide proactive IT support services, responsive 24/7 helpdesk support, and services that reduce downtime
        </p>
        <div className=" flex item-center flex-wrap gap-2 py-10 lg:w-[80%]  lg:h-[300px] lg:flex-nowrap mx-auto">
          <img src='https://res.cloudinary.com/dzrrdkd7i/image/upload/v1689929175/satellite_wffqt1.webp' alt="" ref={el => image2 = el} className="w-full h-full object-contain" />
          <img src='https://res.cloudinary.com/dzrrdkd7i/image/upload/v1689929175/it-support_vh86vc.webp' alt="" ref={el => image1 = el} className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}
