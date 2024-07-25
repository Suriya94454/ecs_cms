import React, { useState } from "react";

const FCoulmn = () => {
  const [showFirstSection, setShowFirstSection] = useState(false);

  const handleFirstPlusClick = () => {
    setShowFirstSection(true);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="row w-100">
        <div className="col-md-12 d-flex flex-column align-items-center mb-2">
          {showFirstSection && (
            <div className="border border-3 p-2 mb-2 w-25 d-flex justify-content-center">
              <div className="d-flex justify-content-start mb-2">
                <button className="btn btn-outline-secondary me-2">☰</button>
                <button className="btn btn-outline-secondary me-2">⬚</button>
                <button className="btn btn-outline-secondary me-2">
                  &lt;&gt;
                </button>
                <button className="btn btn-outline-secondary me-2">T</button>
                <button className="btn btn-outline-secondary">⋮</button>
              </div>
            </div>
          )}
          <div
            className="border border-3 w-25 d-flex justify-content-center btn"
            onClick={handleFirstPlusClick}
          >
            <button className="border-0 bg-transparent">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FCoulmn;
