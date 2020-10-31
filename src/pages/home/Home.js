import React from "react";
import Hero from "../../components/hero/Hero";
import Five from "../../components/Sections/five/Five";
import One from "../../components/Sections/one/One";
import Two from "../../components/Sections/two/Two";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Hero />

      <div className="home__main">
        {/* <Five /> */}
        <One />
        <Two />
      </div>
      <div className="home__footer"></div>
    </div>
  );
}

export default Home;
