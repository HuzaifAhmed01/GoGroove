import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        height: "80vh",
        display: "grid",
        placeItems: "center",
        backgroundColor: "hsl(223, 10%, 90%)",
        color: "hsl(223, 10%, 10%)",
        font: '1em/1.5 "DM Sans", sans-serif',
        margin: 0,
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "20em", width: "100%" }}>
        <svg
          className="cart"
          style={{
            display: "block",
            margin: "0 auto 1.5em auto",
            width: "8em",
            height: "8em",
          }}
          role="img"
          aria-label="Shopping cart line animation"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          >
            {/* Track */}
            <g
              className="cart__track"
              style={{
                stroke: "hsla(223, 10%, 10%, 0.1)",
                transition: "stroke 0.3s",
              }}
            >
              <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
              <circle cx="43" cy="111" r="13" />
              <circle cx="102" cy="111" r="13" />
            </g>
            {/* Animated Lines */}
            <g
              className="cart__lines"
              style={{
                animation: "cartLines 5s ease-in-out infinite",
                stroke: "black",
              }}
            >
              <polyline
                className="cart__top"
                points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80"
                style={{
                  animation: "cartTop .9s ease-in-out infinite",
                  strokeDasharray: 338,
                  strokeDashoffset: 0,
                }}
              />
              <g
                className="cart__wheel1"
                style={{
                  animation: "cartWheel1 7s infinite linear",
                  transformOrigin: "43px 111px",
                }}
              >
                <circle cx="43" cy="111" r="13" />
              </g>
              <g
                className="cart__wheel2"
                style={{
                  animation: "cartWheel2 2s infinite linear",
                  transformOrigin: "102px 111px",
                }}
              >
                <circle cx="102" cy="111" r="13" />
              </g>
            </g>
          </g>
        </svg>
      </div>

      {/* Embedding Keyframes in a <style> tag */}
      <style>{`
        @keyframes cartLines {
          from, to { opacity: 0; }
          8%, 92% { opacity: 1; }
        }
        @keyframes cartTop {
          from { stroke-dashoffset: -338; }
          50% { stroke-dashoffset: 0; }
          to { stroke-dashoffset: 338; }
        }
        @keyframes cartWheel1 {
          from { transform: rotate(-0.25turn); }
          to { transform: rotate(2.75turn); }
        }
        @keyframes cartWheel2 {
          from { transform: rotate(0.25turn); }
          to { transform: rotate(3.25turn); }
        }
      `}</style>
    </div>
  );
};

export default Loader;
