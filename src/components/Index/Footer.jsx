import React from "react";

const footerLinks = [
  "Home",
  "Terms and Conditions",
  "Privacy Policy",
  "Collection Statement",
  "Help",
  "Manage Account",
];

const Footer = () => (
  <footer
    style={{
      background: "#222",
      color: "#fff",
      padding: "1rem 2rem",
    }}
  >
    <div style={{ textAlign: "left" }}>
      {footerLinks.map((link, idx) => (
        <span key={link}>
          {link}
          {idx < footerLinks.length - 1 && (
            <span style={{ margin: "0 0.5rem" }}>|</span>
          )}
        </span>
      ))}
    </div>
    <div
      style={{
        color: "#ccc",
        marginTop: "1rem",
        textAlign: "left",
        fontSize: "0.95rem",
      }}
    >
      Copyright @ 2016 DEMO Streaming. All Rights Reserved
    </div>
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        padding: 0,
        margin: 0,
      }}
    >
      <li>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
            alt="Facebook"
            style={{
              width: 32,
              height: 32,
              display: "block",
              backgroundColor: "#fff",
              padding: 6,
              borderRadius: "50%",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg"
            alt="Twitter"
            style={{
              width: 32,
              height: 32,
              display: "block",
              backgroundColor: "#fff",
              padding: 6,
              borderRadius: "50%",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          />
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
            alt="Instagram"
            style={{
              width: 32,
              height: 32,
              display: "block",
              backgroundColor: "#fff",
              padding: 6,
              borderRadius: "50%",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          />
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
            alt="LinkedIn"
            style={{
              width: 32,
              height: 32,
              display: "block",
              backgroundColor: "#fff",
              padding: 6,
              borderRadius: "50%",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
