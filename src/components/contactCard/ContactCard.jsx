/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
export default function ContactCard({ links, title, content }) {
  return (
    <div>
      <div className="p-10 border rounded-[20px] h-[200px] leading-[1.5]">
        <div className="title medium  pb-2">{title}</div>
        <p className="text-sm">{content}</p>
        {links?.map((data) => (
          <div className="py-1">
            <div className="underline text-sm  font-bold">
             {data}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
