import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Logo from "./logo";

export default function Page1() {
  return (
    <div className="part-1">
      <div className="box1">
        We are the
        <Typewriter
          words={[" creative", " efficient", " ideal"]}
          loop={10000}
          typeSpeed={150}
          deleteSpeed={50}
          delaySpeed={2000}
        />
        &nbsp;digital media agency for your business
      </div>
      <div className="box2">
        <div className="logo-container">
          <Logo />
        </div>
      </div>
    </div>
  );
}
