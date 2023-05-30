import React from "react";
import Logo2 from "./logo2";

export default function Page3() {
  return (
    <div className="part-1">
      <div className="box111">
        <div className="logo-container2">
          <Logo2 />
        </div>
      </div>
      <div className="box222">
        <div className="text-holder">
          <div className="tLine1">
            <div className="text1">Get in</div>
            <div className="text2">&nbsp;touch&nbsp;</div>
          </div>
          <div className="text3">with us</div>
        </div>
        <div className="con1">
          <div className="c-i">
            <i class="fa-solid fa-phone"/>
          </div>
          <div>+91-9012-5109-96</div>
        </div>
        <div className="con2">
          <div className="c-i">
          <i class="fa-solid fa-envelope"/>
          </div>
          <div>nexgenmansion@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
