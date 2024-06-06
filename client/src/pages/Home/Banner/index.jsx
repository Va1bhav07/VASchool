import React from "react";
import "./banner.css";
import Particle from "../../../components/Particle";

function Banner() {
  return (
    <section className="position-relative">
      <div className="banner w-100 m-0 p-0 overflow-hidden">
        <Particle />
      </div>
    </section>
  );
}

export default Banner;
