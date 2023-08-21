/* eslint-disable react/prop-types */

import { HashLink } from "react-router-hash-link";

export default function Card({ title, content, link }) {


  return (
    <div className="card p-8 w-full h-[220px]" data-aos='fade-up'>
      <div className="font-bold pt-4">{title}</div>
      <div className=" pt-4 text-sm">{content}</div>
      <HashLink
        to={link}
        smooth
        className="w-fit border mt-5 flex ml-auto p-2 text-[11px] rounded text-[#FF2200] border-[#FFAAAA] hover:bg-[#FF2200] hover:text-white hover:border-[#FF2200]"
      >
        View More
      </HashLink>
    </div>
  );
}
