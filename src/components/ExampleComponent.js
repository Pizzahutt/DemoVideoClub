import React from "react";
import MoviesGrid from "./Index/Inicio";
import Footer from "./Index/Footer";




const Home = () => (
  <div>
    <header
      style={{
    background: "linear-gradient(180deg, #6dd5ed 0%,rgb(8, 108, 133) 100%)", // vertical, light blue top to dark blue bottom
        color: "white",
        padding: "2rem 1rem 1rem 1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0, textAlign: "left" }}> Demo Streaming </h1>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <span style={{ color: "white", fontWeight: "bold" }}>Login</span>
        <button
          style={{
            background: "#444",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Start your free trial
        </button>
      </div>
    </header>
    <div
      style={{
        background: "#f0f0f0",
        color: "#333",
        padding: "1rem",
        textAlign: "left",
      }}
    >
      <h2 style={{ margin: 0 }}> Popular titles </h2>
    </div>
    <MoviesGrid />

    <Footer />
  </div>
);

export default Home;