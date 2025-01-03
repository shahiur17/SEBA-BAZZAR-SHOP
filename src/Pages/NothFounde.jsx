import React from "react";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1 style={{ fontSize: "4rem", color: "#ff4d4d" }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <a href="/" style={{ color: "#007bff", textDecoration: "underline" }}>
        Go back to Home
      </a>
    </div>
  );
};

export default NotFound;
