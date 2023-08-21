import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { gsap, Power3 } from "gsap";
export default function DefaultLayout() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut()


  return (
    <div>
      <Header timeline={tl} ease={ease} />
      <Outlet />
      <Footer />
    </div>
  );
}
