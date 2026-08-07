import React from "react";
import "./PlanPage.css";

const PlanPage: React.FC = () => {
  return (
    <div className="plan-container">
      <div className="plan-card">
       <div className="plan-inner">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-wrapper">
            {/* Pixel Grid Logo */}
            <div className="pixel-logo">
              {/* Top-left 3x3 block */}
              <div className="grid-block top-left">
                <span className="sq red" />
                <span className="sq red" />
                <span className="sq gray" />
                <span className="sq red" />
                <span className="sq gray" />
                <span className="sq gray" />
                <span className="sq red" />
                <span className="sq red" />
                <span className="sq gray" />
              </div>

              {/* Diamond */}
              <div className="diamond">
                <span className="d-sq" />
                <span className="d-sq" />
                <span className="d-sq" />
                <span className="d-sq" />
              </div>
            </div>

            {/* Bottom rows */}
            <div className="bottom-grid">
              {Array.from({ length: 18 }).map((_, i) => (
                <span
                  key={i}
                  className={`sq ${bottomPattern[i] ? "red" : "gray"}`}
                  style={{ animationDelay: `${0.5 + i * 0.05}s` }}
                />
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="brand-text">
            <h1 className="cft">
              <span>C</span>
              <span>F</span>
              <span>T</span>
            </h1>
            <h2 className="machineries">Machineries</h2>
          </div>
        </div>

        {/* Website Button */}
        <div className="website-btn">
          <span className="url">www.charanfoodtech.com</span>
          <span className="arrow-circle">↗</span>
        </div>
       </div>
      </div>
    </div>
  );
};

// Pattern for bottom grid (true = red, false = gray)
const bottomPattern = [
  true, true, true, true, true, true,
  true, false, false, true, false, true,
  true, false, false, true, true, true,
];

export default PlanPage;