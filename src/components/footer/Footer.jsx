import React from "react";
import "./footer.scss";
import { Copyrigth } from "../copyright/Copyright";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_input_wrap">
          <input type="text" placeholder="Enter your mail" />
          <button>Subscribe</button>
        </div>
        <Copyrigth />
      </div>
      <svg
        version="1.0"
        className="footer_bg"
        viewBox="0 0 1440.000000 183.000000"
      >
        <linearGradient id="linear-gradient">
          <stop offset="0" stopColor="#255d8b" />
          <stop offset="96.79%" stopColor=" #3a80ba" />
        </linearGradient>
        <g
          transform="translate(0.000000,183.000000) scale(0.100000,-0.100000)"
          fill="url(#linear-gradient)"
          stroke="none"
        >
          <path d="M11425 1824 c-27 -2 -129 -8 -225 -15 -194 -12 -464 -41 -610 -65 -163 -27 -293 -63 -457 -125 -602 -230 -1416 -478 -1902 -579 -337 -71 -457 -80 -854 -69 -449 13 -796 45 -1171 110 -296 51 -480 96 -1051 254 -440 123 -587 145 -948 145 -659 0 -1179 -84 -2215 -360 -259 -68 -394 -90 -598 -97 -409 -14 -863 80 -1257 258 -62 28 -118 53 -124 56 -10 4 -13 -133 -13 -666 l0 -671 7200 0 7200 0 0 824 0 825 -42 5 c-24 3 -140 8 -258 10 -335 9 -671 37 -975 82 -304 45 -358 52 -485 64 -115 11 -1096 22 -1215 14z" />
        </g>
      </svg>
    </footer>
  );
};
