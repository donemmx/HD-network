/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/hd-logo.svg";
import { useEffect, useRef, useState } from "react";

export default function Header({ timeline, ease }) {
  const date = new Date().getFullYear();

  const [open, setOpen] = useState(false);
  let logoData = useRef(null);
  let NavLink1 = useRef(null);
  let NavLink2 = useRef(null);
  let NavLink3 = useRef(null);
  let NavLink4 = useRef(null);
  let NavLink5 = useRef(null);
  let NavLink6 = useRef(null);
  let hamburger = useRef(null);
  useEffect(() => {
    if (logoData.current) {
      return;
    }
    // otherwise, record that we're running it now and continue...
    logoData.current = true;

    timeline.from(logoData, 1, {
      opacity: 0,
      y: 100,
    });
    timeline.from(hamburger, 1, {
      opacity: 0,
      y: -100,
    });

    timeline.from([NavLink1, NavLink2, NavLink3, NavLink4, NavLink5, NavLink6], 2, {
      opacity: 0,
      y: -200,
      stagger: {
        amount: 0.6,
      },
      ease: ease,
    });
  }, []);

  const openModal = () => {
    setOpen(!open);
  };
  return (
    <div className="flex w-full ">
      <div className=" w-[90%] lg:w-[85%] mx-auto flex items-center justify-between">
        <NavLink to="/" className="logo h-[80px]">
          <img
            src={logo}
            alt=""
            className="w-full h-full object-contain"
            ref={(el) => (logoData = el)}
          />
        </NavLink>
        <div className="NavLinks hidden lg:flex gap-10">
          <NavLink to="/" href="" ref={(el) => (NavLink1 = el)}>
            Home
          </NavLink>
          <NavLink to="/about" href="" ref={(el) => (NavLink2 = el)}>
            About
          </NavLink>
          <NavLink to="/services" href="" ref={(el) => (NavLink3 = el)}>
            Services
          </NavLink>
          <NavLink to="/news" href="" ref={(el) => (NavLink4 = el)}>
            News
          </NavLink>
          <a
            href="https://promo.hd-networks.com/"
            target="_blank"
            className="gradient_text font-bold"
            rel="noreferrer"
            ref={(el) => (NavLink5 = el)}
          >
            Promo
          </a>
        </div>
        <NavLink
          to="/contact"
          className="sec__btn p-2 px-8 hidden lg:block rounded-md text-sm"
          ref={(el) => (NavLink6 = el)}
        >
          Contact
        </NavLink>
        <div className=" lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            ref={(el) => (hamburger = el)}
            onClick={openModal}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
        {open ? (
          <>
            <div
              className=" fixed left-0 top-0 h-full w-full bg-white z-50 "
              style={{
                backgroundImage:
                  "url(https://res.cloudinary.com/dzrrdkd7i/image/upload/v1691387564/dish_ckcetw.webp)",
                backgroundSize: "18rem",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 30rem",
                backgroundBlendMode: "luminosity",
              }}
            >
              <div className="container">
                <div className="header flex items-center justify-between">
                  <NavLink to="/" className="logo h-[80px]">
                    <img
                      src={logo}
                      alt=""
                      className={({ isActive }) =>
                        isActive
                          ? " text-[2rem] transition-all ease-in-out medium hover:bold hover:text-[2rem]"
                          : "text-[1.5rem] transition-all ease-in-out medium hover:bold hover:text-[2rem]"
                      }
                      ref={(el) => (logoData = el)}
                    />
                  </NavLink>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                    onClick={openModal}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="grid gap-3 w-[90%] mt-10  mx-auto">
                  <NavLink
                    to="/"
                    href=""
                    className={({ isActive }) =>
                      isActive
                        ? "text-[2rem] w-fit border-b-2 border-blue-900 gradient_text transition-all ease-in-out medium hover:bold before:absolute before:left-0 before:w-[90%] before:rounded-r-lg before:h-12 before:z-[-1] z-20  hover:text-[2rem]"
                        : "text-[1.5rem] transition-all ease-in-out medium hover:bold hover:text-[2rem]"
                    }
                    onClick={openModal}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    href=""
                    className={({ isActive }) =>
                      isActive
                        ? "text-[2rem]  w-fit border-b-2 border-blue-900 gradient_text transition-all ease-in-out medium hover:bold before:absolute before:left-0 before:w-[90%] before:rounded-r-lg before:h-12 before:z-[-1] z-20  hover:text-[2rem] after:"
                        : "text-[1.5rem] transition-all ease-in-out medium hover:bold hover:text-[2rem]"
                    }
                    onClick={openModal}
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/services"
                    href=""
                    className={({ isActive }) =>
                      isActive
                        ? "text-[2rem]  w-fit border-b-2 gradient_text border-blue-900 transition-all ease-in-out medium hover:bold before:absolute before:left-0 before:w-[90%] before:rounded-r-lg before:h-12 before:z-[-1] z-20  hover:text-[2rem]"
                        : "text-[1.5rem] transition-all ease-in-out medium hover:bold hover:text-[2rem]"
                    }
                    onClick={openModal}
                  >
                    Services
                  </NavLink>
                  <NavLink
                    to="/news"
                    href=""
                    className={({ isActive }) =>
                      isActive
                        ? "text-[2rem]  w-fit border-b-2 border-blue-900 gradient_text transition-all ease-in-out medium hover:bold before:absolute before:left-0 before:w-[90%] before:rounded-r-lg before:h-12  before:z-[-1] z-20 hover:text-[2rem]"
                        : "text-[1.5rem] transition-all ease-in-out medium hover:bold hover:text-[2rem]"
                    }
                    onClick={openModal}
                  >
                    News
                  </NavLink>
                  <a
                    href="https://promo.hd-networks.com/"
                    target="_blank"
                    className="text-[1.5rem] font-bold transition-all ease-in-out medium hover:bold hover:text-[2rem]"
                    onClick={openModal}
                    rel="noreferrer"
                  >
                    Promo
                  </a>
                  <NavLink
                    to="/contact"
                    href=""
                    className={({ isActive }) =>
                      isActive
                        ? "text-[2rem]  w-fit border-b-2 border-blue-900 gradient_text transition-all ease-in-out medium hover:bold before:absolute before:left-0 before:w-[90%] before:rounded-r-lg before:h-12 text-white before:z-[-1] z-20 before:gradient_text hover:text-[2rem]"
                        : "text-[1.5rem] transition-all ease-in-out medium hover:bold hover:text-[2rem]"
                    }
                    onClick={openModal}
                  >
                    Contact
                  </NavLink>
                </div>
                <div className=" absolute bottom-20 flex flex-col gap-2">
                  <div className="bold">Follow Us On</div>
                  <div className="mt-5 text-sm flex gap-2">
                    <a
                      href="https://www.facebook.com/hdnnetworks"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://res.cloudinary.com/dzrrdkd7i/image/upload/v1691397679/facebook.svg"
                        alt=""
                        width={40}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/hd-networks-ltd"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://res.cloudinary.com/dzrrdkd7i/image/upload/v1691397679/linkedin.svg"
                        alt=""
                        width={40}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/invites/contact/?i=pkyrr5n60o4h&utm_content=s5sjcf5"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://res.cloudinary.com/dzrrdkd7i/image/upload/v1691397902/instagram.svg"
                        alt=""
                        width={40}
                      />
                    </a>
                  </div>
                </div>
                <div className=" absolute bottom-5 copyright text-center mt-20 text-sm">
                  Copyright @ {date} HD-networks. | Privacy Policy
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
