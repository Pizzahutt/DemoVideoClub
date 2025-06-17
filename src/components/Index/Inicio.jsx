import React from "react";
import { Link } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Popular Series",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    link: "/series",
  },
  {
    id: 2,
    title: "Popular Movies",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    link: "/movies",
  },
];

const MoviesGrid = () => (
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

export default MoviesGrid;
