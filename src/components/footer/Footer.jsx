/* eslint-disable no-unused-vars */
import jsonp from "jsonp";
import logo from "../../assets/logo/hd-logo.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Footer() {
  const date = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const url =
      "https://hd-networks.us21.list-manage.com/subscribe/post-json?u=82b2763173ff2438ebb141fd0&amp;id=45e4e8fcd2&amp;f_id=004e62e1f0";
    jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {
      const { msg, result } = data;
      // do something with response
      toast.success(msg);
      setEmail("");
      setLoading(false);
    });
  };
  return (
    <div className=" w-full">
      <div className="subscribe h-[50vh] lg:h-[50vh] flex justify-center flex-col">
        <div className="container">
          <h4 className="head__four text-center">
            Subscribe to Our Newsletter!
          </h4>
          <p className="text-center">
            We’ll send you best offers of our Products once every week.
          </p>
      
          <div className="form flex items-center justify-center my-8 gap-4">
          {emailError && (
              <small className="text-red-500 text-[12px] pl-2">
                Email is Invalid
              </small>
            )}
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => {
                if (!isValidEmail(e.target.value)) {
                  setEmailError("Enter a valid Email");
                } else {
                  setEmailError(null);
                }
                setEmail(e.target.value);
              }}
              id="mce-EMAIL"
              className="border p-3 w-full  lg:w-[30%] outline-none text-sm border-[#D6D8DC] rounded-md"
            />

            {loading ? (
              <button
                disabled={email}
                className="text-sm flex items-center gap-2 bg-gray-500 p-3 px-5 placeholder:text-sm rounded-md text-white"
              >
                {loading ? (
                  <div
                    className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-gray-50 rounded-full"
                    role="status"
                    aria-label="loading"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  ""
                )}
                subscribe
              </button>
            ) : (
              <button
                className="text-sm flex items-center gap-2 bg-[#FF2200] disabled:bg-gray-400 p-3 px-5 placeholder:text-sm rounded-md text-white"
                disabled={emailError}
                onClick={onSubmit}
              >
                {loading ? (
                  <div
                    className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-gray-50 rounded-full"
                    role="status"
                    aria-label="loading"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  ""
                )}
                subscribe
              </button>
              
            )}
            

           
          </div>
        </div>
        
      </div>
      <div className="footer  lg:h-[50vh] flex items-center justify-center bg-[#FBFBFB]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <img src={logo} alt="" />
            <div className="flex flex-col gap-2">
              <div className="bold">Contact Details</div>
              <div className="mt-5 text-sm">UK: (+44)-745-6171-838 </div>
              <div className=" text-sm">UK: (+44)-160-4346-000</div>
              <div className="text-sm">NG: (+234)-817-7621-233 </div>
              <div className="text-sm">NG: (+234)-812-2245-121</div>
              <div className="text-sm">sales@hd-networks.com </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bold">Address</div>
              <div className="mt-5 text-sm">
                Kemp House 160 City Road, London EC1V 2NX
              </div>
              <div className="text-sm">Magodo Phase 2 Lagos. Nigeria.</div>
            </div>
            <div className="flex flex-col gap-2">
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
                    width={30}
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
                    width={30}
                  />
                </a>
                <a
                  href="https://www.instagram.com/hd__networks/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://res.cloudinary.com/dzrrdkd7i/image/upload/v1691397902/instagram.svg"
                    alt=""
                    width={30}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="copyright text-center mt-20 text-sm">
            Copyright @ {date} HD-networks. |{" "}
            <Link to="/privacy-policy"> Privacy Policy </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
