import React from "react";
import { Link } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Popular Series",
    image:
      "https://streamcoimg-a.akamaihd.net/000/129/01/12901-PosterArt-b18cb05ecda13ea274c4e32a2d6ea427.jpg",
    link: "/series",
  },
  {
    id: 2,
    title: "Popular Movies",
    image:
      "https://streamcoimg-a.akamaihd.net/000/110/1196/1101196-PosterArt-c47d98ddca64ef18cf79c78d6ab8b3ad.jpg",
    link: "/movies",
  },
];

const IntroGrid = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      padding: "2rem",
      gap: 0,
      justifyContent: "flex-start",
      alignItems: "flex-start",
    }}
  >
    {movies.map((movie) => (
      <Link
        to={movie.link}
        key={movie.id}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div
          key={movie.id}
          style={{
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            padding: "1rem",
            width: "220px",
            textAlign: "left",
            marginRight: 0,
          }}
        >
          <img
            src={movie.image}
            alt={movie.title}
            style={{
              width: "200px",
              height: "300px",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <h3 style={{ margin: "1rem 0 0 0" }}>{movie.title}</h3>
        </div>
      </Link>
    ))}
  </div>
);

export default IntroGrid;
