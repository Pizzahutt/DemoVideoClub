import React from "react";
import Header from "./Index/Subcomponents/Header";
import IntroGrid from "./Index/Inicio";
import Footer from "./Index/Subcomponents/Footer";
import "./Home.css";



const Home = () => (
  <div className="app-container">
    <Header/>
    <IntroGrid className="main-content"/>
    <Footer />
  </div>
);

export default Home;