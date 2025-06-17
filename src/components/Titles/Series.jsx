import React from "react";
import Header from "../Index/Subcomponents/Header";
import GenericGrid from "./subcomponents/GenericGrid";
import Footer from "../Index/Subcomponents/Footer";
import DataLoader from "./subcomponents/DataLoader";
import "./Series.css";

const Series = () => (
  <div className="app-container">
    <Header />
    <DataLoader programType="series">
      {(moviesData) => <GenericGrid items={moviesData} />}
    </DataLoader>
    <Footer />
  </div>
);

export default Series;
