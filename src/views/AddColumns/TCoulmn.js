import React, { useState } from "react";

const SCoulmn = () => {
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);

  const handleFirstPlusClick = () => {
    setShowFirstSection(true);
  };

  const handleSecondPlusClick = () => {
    setShowSecondSection(true);
  };
  const handleThirdPlusClick = () => {
    setShowThirdSection(true);
  };

  return (
<div className="">
  <div className="row w-100">
  <div className="col-md-4 d-flex flex-column justify-content-center align-items-center vh-100 position-relative">
      {showFirstSection && (
        <div className="border border-3 p-2 mb-2 w-75 d-flex justify-content-center position-absolute" style={{ top: '30%' }}>
          <div className="d-flex justify-content-start mb-2">
            <button className="btn btn-outline-secondary me-2">☰</button>
            <button className="btn btn-outline-secondary me-2">⬚</button>
            <button className="btn btn-outline-secondary me-2">&lt;&gt;</button>
            <button className="btn btn-outline-secondary me-2">T</button>
            <button className="btn btn-outline-secondary">⋮</button>
          </div>
        </div>
      )}
      <div
        className="border border-3 w-50 d-flex justify-content-center btn position-relative"
        onClick={handleFirstPlusClick}
      >
        <button className="border-0 bg-transparent">+</button>
      </div>
    </div>
    <div className="col-md-4 d-flex flex-column justify-content-center align-items-center vh-100 position-relative">
      {showSecondSection && (
        <div className="border border-3 p-2 mb-2 w-75 d-flex justify-content-center position-absolute" style={{ top: '30%' }}>
          <div className="d-flex justify-content-start mb-2">
            <button className="btn btn-outline-secondary me-2">☰</button>
            <button className="btn btn-outline-secondary me-2">⬚</button>
            <button className="btn btn-outline-secondary me-2">&lt;&gt;</button>
            <button className="btn btn-outline-secondary me-2">T</button>
            <button className="btn btn-outline-secondary">⋮</button>
          </div>
        </div>
      )}
      <div
        className="border border-3 w-50 d-flex justify-content-center btn position-relative"
        onClick={handleSecondPlusClick}
      >
        <button className="border-0 bg-transparent">+</button>
      </div>
    </div>
    <div className="col-md-4 d-flex flex-column justify-content-center align-items-center vh-100 position-relative">
      {showThirdSection && (
        <div className="border border-3 p-2 mb-2 w-75 d-flex justify-content-center position-absolute" style={{ top: '30%' }}>
          <div className="d-flex justify-content-start mb-2">
            <button className="btn btn-outline-secondary me-2">☰</button>
            <button className="btn btn-outline-secondary me-2">⬚</button>
            <button className="btn btn-outline-secondary me-2">&lt;&gt;</button>
            <button className="btn btn-outline-secondary me-2">T</button>
            <button className="btn btn-outline-secondary">⋮</button>
          </div>
        </div>
      )}
      <div
        className="border border-3 w-50 d-flex justify-content-center btn position-relative"
        onClick={handleThirdPlusClick}
      >
        <button className="border-0 bg-transparent">+</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default SCoulmn;
