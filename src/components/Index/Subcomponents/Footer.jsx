import React from "react";

import facebookImg from "../assets/social/facebook-white.svg";
import twitterImg from "../assets/social/twitter-white.svg";
import instagramImg from "../assets/social/instagram-white.svg";

import appStoreImg from "../assets/store/app-store.svg";
import playStoreImg from "../assets/store/play-store.svg";
import windowsStoreImg from "../assets/store/windows-store.svg";

const footerLinks = [
  "Home",
  "Terms and Conditions",
  "Privacy Policy",
  "Collection Statement",
  "Help",
  "Manage Account",
];

const SocialImage = ({ src, alt, size = 32 }) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: size,
      height: size,
    }}
  />
);

const Footer = () => (
  <footer
    style={{
      background: "#222",
      color: "#fff",
      padding: "1rem 1rem",
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: "1 rem",
      }}
    >
      <div style={{ display: "flex", gap: "8px" }}>
        <SocialImage src={facebookImg} alt="Facebook" size={30} />
        <SocialImage src={twitterImg} alt="Twitter" size={30} />
        <SocialImage src={instagramImg} alt="Instagram" size={30} />
      </div>
      <div style={{ display: "flex", gap: "8px", marginLeft: "auto" }}>
        <img src={appStoreImg} alt={"appStoreImg"} />
        <img src={playStoreImg} alt={"appStoreImg"} />
        <img
          src={windowsStoreImg}
          alt={"appStoreImg"}
          style={{
            width: 110,
            height: 150,
          }}
        />
      </div>
    </div>
  </footer>
);

export default Footer;
