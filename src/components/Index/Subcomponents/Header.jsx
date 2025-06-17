import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header
        style={{
          background:
            "linear-gradient(180deg, #6dd5ed 0%,rgb(8, 108, 133) 100%)",
          color: "white",
          padding: "2rem 1rem 1rem 1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1 style={{ margin: 0, textAlign: "left" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#fff"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 2 7.5V14a1 1 0 0 0 1 1h3.5a.5.5 0 0 0 .5-.5V11a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 0 .5.5H13a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-.146-.354l-6-6z" />
            </svg>{" "}
            Demo Streaming
          </h1>
        </Link>

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
    </>
  );
};

export default Header;
