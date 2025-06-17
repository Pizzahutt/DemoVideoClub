import React, { useState } from "react";
import data from "../../../data/sample.json";

const placeholder = "https://placehold.co/300x200/EEE/31343C?text= ";

const SeriesCard = ({ series }) => {
  const [imgSrc, setImgSrc] = useState(
    series.images &&
      series.images["Poster Art"] &&
      series.images["Poster Art"].url
      ? series.images["Poster Art"].url
      : placeholder
  );

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        padding: "1rem",
        width: "220px",
        textAlign: "left",
      }}
    >
      <img
        src={imgSrc}
        alt={series.title}
        style={{
          width: "200px",
          height: "300px",
          borderRadius: "4px",
          objectFit: "cover",
        }}
        onError={() => setImgSrc(placeholder)}
      />
      <h3 style={{ margin: "1rem 0 0 0" }}>{series.title}</h3>
      <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.9rem", color: "#666" }}>
        {series.releaseYear}
      </p>
    </div>
  );
};

const SeriesGrid = () => {
  const seriesList = data.entries
    .filter(
      (entry) => entry.programType === "series" && entry.releaseYear >= 2010
    )
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        padding: "2rem",
        justifyContent: "flex-start",
      }}
    >
      {seriesList.map((series, idx) => (
        <SeriesCard key={idx} series={series} />
      ))}
    </div>
  );
};

export default SeriesGrid;
