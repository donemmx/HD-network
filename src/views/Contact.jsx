import ContactCard from "../components/contactCard/ContactCard";
import contactData from "../assets/data/contact.json";
import ContactForm from "../components/contactForm/ContactForm";
export default function Contact() {
  return (
    <div>
      <div className="container">
        <div className="h-[30vh] lg:h-[50vh] flex flex-col justify-center items-center">
          <h2 className="head__two bold lg:w-[90%] mx-auto text-center leading-[1.15]">
            <span className="text-[#666666]">Contact our</span> <br /> Friendly
            Team
          </h2>
          <p className="text-center">Let us know how we can help</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 ">
          {contactData.map((res) => (
            <div className="" key={res.id}>
              <ContactCard
                title={res.title}
                content={res.content}
                links={res.links}
              />
            </div>
          ))}
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
