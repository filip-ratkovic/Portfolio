import React from "react";
import Home from "./pages/Home/Home";
import Layout from "./containers/Layout";
import "./App.css"
import PreLoader from "./pages/Preloader/PreLoader";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
 <>
 <PreLoader/>
 <Layout>
      <Home />
      <About/>
      <Projects/>
    </Layout>
    </>
  );
}

export default App;
