import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className=" h-screen bg-[hsl(0_0%_98%)]">
      <Header />
      <Main />
    </div>
  );
}

export default App;
