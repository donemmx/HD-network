/* eslint-disable react/prop-types */

export default function ServiceCard({
  bgImage,
  content,
  title,
  reverse,
  sectionId,
}) {
  return (
    <div className="" id={sectionId}>
      <div className="container">
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className={` ${
            reverse ? "flex flex-row-reverse" : " flex"
          } items-center justify-center gap-6 h-[35vh] lg:h-[55vh] rounded-[8px] lg:rounded-[20px]`}
        >
          <div className="w-full hidden lg:block lg:w-[50%] h-full"></div>
          <div className="p-2 text-white w-full lg:w-[30%]">
            <div className="title text-[25px] lg:text-[40px] bold">{title}</div>
            <p className="text-[17px] lg:text-[20px] pt-3 leading-[1.5] light">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
