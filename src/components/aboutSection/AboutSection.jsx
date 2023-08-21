import data from "../../assets/data/about.json";
import AboutCard from "../aboutCard/AboutCard";

export default function AboutSection() {
  return (
    <div className="">
      <div className="container">
        <div className="my-[10vh]" style={{backgroundImage: "url(https://res.cloudinary.com/dzrrdkd7i/image/upload/v1691387564/dish_ckcetw.webp)", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: 'right'}}>
        
          <h4 className="head__four leading-[1.15]" data-aos='fade'>
            <span className="text-[#666666]"> Why choose </span> <br />
            HD Networks
          </h4>
          <div className="mt-[10vh] ">
            <div className=" grid lg:grid-cols-3 gap-1">
              {data.map((res) => (
                <>
                  <div className=" w-full" data-aos='fade-up' key={res.id}>
                    <AboutCard title={res.title} content={res.content} />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* <div className="mt-[10vh] bg-dotBg bg-[#090c97] p-10 py-12 rounded-lg">
<div className=" grid lg:grid-cols-3 gap-8">
{data.map((res) => (
  <>
    <div className=" lg:p-10" key={res.id}>
    <div className="title lg:text-[20px] bold">{res.title}</div>
      <p className="lg:text-[16px] pt-3 leading-[1.8] light">{res.content}</p> 
    </div>
  </>
))}
</div>
 </div> */
