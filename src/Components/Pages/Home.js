import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import Page1 from "./home/page1";
import Page2 from "./home/page2";
import Page3 from "./home/page3";

export default function Home() {
  return (
    <div>
      <Fullpage>
        <FullPageSections>
          <FullpageSection
            style={{
              backgroundColor: "#8000ff",
              height: "100vh",
              padding: "0em",
            }}
          >
            <Page1 />
          </FullpageSection>
          <FullpageSection
            style={{
              backgroundColor: "#F75C03",
              height: "100vh",
              padding: "0em",
            }}
          >
            <Page2 />
          </FullpageSection>
          <FullpageSection
            style={{
              backgroundColor: "#343E3D",
              height: "100vh",
              padding: "0em",
            }}
          >
            <Page3 />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}
