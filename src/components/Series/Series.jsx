import React from "react";
import Header from "../Index/Subcomponents/Header";
import SeriesGrid from "./sucomponents/SeriesGrid";
import Footer from "../Index/Subcomponents/Footer";
import DataLoader from "./sucomponents/DataLoader";
import "./Series.css";

const Series = () => (
  <div className="app-container">
    <Header />
    <DataLoader programType="series">
      {(moviesData) => <SeriesGrid items={moviesData} />}
    </DataLoader>
    <Footer />
  </div>
);

export default Series;
