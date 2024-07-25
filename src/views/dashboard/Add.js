import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const Add = () => {
  const [inputValue, setInputValue] = useState("");
  const [savedValues, setSavedValues] = useState([]);
  const [showInput, setShowInput] = useState(true);
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue !== "") {
      setSavedValues(inputValue);
      setShowInput(false);
    }
  };

  return (
    <>
      <div className="col-md-12">
        {showInput ? (
          <input
            type="text"
            className="form-control"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <h2>{savedValues}</h2>
        )}
      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-end">
          <div className="card  w-25 " style={{ minHeight: "30vh" }}>
            <div className="d-flex justify-content-around">
              <div class="border card w-25" style={{ minHeight: "10vh" }}></div>
              <div class="border card w-25" style={{ minHeight: "10vh" }}>
                <p>|</p>
              </div>
              <div class="border card w-25" style={{ minHeight: "10vh" }}>
                <p>|</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="d-flex justify-content-end mt-3">
        <FaEdit />
      </p>
    </>
  );
};

export default Add;
