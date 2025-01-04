import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        width:"100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#fff",
        color: "hsl(223, 10%, 10%)",
        font: '1em/1.5 "DM Sans", sans-serif',
        margin: 0,
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "20em", width: "100%" }}>
        <div
          className="loader-text"
          style={{ marginBottom: "1.5em", fontSize: "1.5em", fontWeight: "bold" }}
        >
          Loading products...
        </div>
        <div
          className="spinner"
          style={{
            border: "4px solid transparent",
            borderTop: "4px solid hsl(223, 10%, 10%)",
            borderRadius: "50%",
            width: "4em",
            height: "4em",
            animation: "spin 1s linear infinite",
            margin: "0 auto",
          }}
        ></div>
      </div>

      {/* Embedding Keyframes for spinner animation */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
