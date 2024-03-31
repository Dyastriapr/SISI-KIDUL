import React from "react";
import { Routing } from "../config/"; 
import { Nav } from "../components/navbar/Nav";

function App() {
  return (
    <div className="font-poppins">
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
