import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import Work from "./Components/Pages/Work";
import Blog from "./Components/Pages/Blog";
import Contact from "./Components/Pages/Contact";

import Menu from "./Components/NavBar/menu";
import { Route, Routes } from "react-router-dom";


function App() {
   return (
    <>
      <Menu/>
      <div className="route-container">
        {/* <AnimatedCursor color="0,240,255" outerAlpha={1} outerSize={"15px"} innerSize={"30px"} /> */}
        <Routes >
          <Route path="/" element={<div><Home/></div>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
