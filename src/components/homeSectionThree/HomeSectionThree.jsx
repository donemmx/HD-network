/* eslint-disable react/prop-types */
import Card from "../card/Card";
import data from "../../assets/data/data.json";
export default function HomeSectionThree() {

  return (
    <div className="pt-[15vh] relative">
      <div className="container">
        <h2 className="head__two bold lg:w-[50%] leading-[1.15]" data-aos="fade-down" >
          We’ve Got Everything You Need To
          <span className=" text-[#ee3123]"  > Launch</span> And
          <span className="text-[#ee3123]"> Grow</span> Your Business
        </h2>
        <div className=" mt-5 lg:w-[85%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((res) => (
            <>
              <Card
                key={res.id}
                title={res.title}
                content={res.content}
                link={res.link}
              />
            </>
          ))}
        </div>
      </div>
      <div className="sideImg hidden lg:block  w-[18%] h-[60%] top-[35%] absolute right-0">
        <img src='https://res.cloudinary.com/dzrrdkd7i/image/upload/v1691387564/dish_ckcetw.webp' alt="" className="w-full h-full object-contain" />
      </div>
    </div>
  );
}
