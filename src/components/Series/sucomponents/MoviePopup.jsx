import React from "react";

const MoviePopup = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: 24,
          borderRadius: 8,
          maxWidth: 400,
        }}
      >
        <h2>{movie.title}</h2>
        <img
          src={
            movie.images?.["Poster Art"]?.url || "https://placehold.co/300x450"
          }
          alt={movie.title}
          style={{ width: "100%", marginBottom: 16 }}
        />
        <p>
          <strong>Año:</strong> {movie.releaseYear}
        </p>
        <p>{movie.description}</p>
        <button onClick={onClose} style={{ marginTop: 16 }}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default MoviePopup;
