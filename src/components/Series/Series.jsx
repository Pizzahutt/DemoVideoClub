import React from "react";
import Header from "../Index/Subcomponents/Header";
import SeriesGrid from "./sucomponents/SeriesGrid";
import Footer from "../Index/Subcomponents/Footer";
import "./Series.css";

const Series = () => (
  <div className="app-container">
    <Header />
    <SeriesGrid className="main-content" />
    <Footer />
  </div>
);

export default Series;
