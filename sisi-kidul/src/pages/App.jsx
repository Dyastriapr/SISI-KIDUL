import React, { useEffect } from "react";
import { Routing } from "../config/"; 
import { Nav } from "../components/navbar/Nav";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { CSSTransition } from 'react-transition-group';



function App() {
  useEffect(() => {
    AOS.init({ duration: 500 }); 
  }, []);
  return (
    <div className="font-poppins bg-slate-50">
      <div style={{ marginBottom: "30px" }}>
        <Nav />
      </div>
      <div>
        <Routing />
      </div>
    </div>
  );
}

export default App;
