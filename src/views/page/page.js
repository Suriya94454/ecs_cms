import React, { useState } from 'react';
import { AiFillPlusSquare } from "react-icons/ai";
import { FaParagraph, FaHeading } from "react-icons/fa";
import { CiImageOn, CiViewColumn } from "react-icons/ci";
import { TfiGallery } from "react-icons/tfi";
import { GoTasklist } from "react-icons/go";

function Page() {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("text");

  const handleInputChange = (e) => {
    if (inputType === "file") {
      setInputValue(e.target.files[0].name);
    } else {
      setInputValue(e.target.value);
    }
  };

  const handleIconClick = (type) => {
    setInputType(type);
    setInputValue("");
  };

  return (
    <section>
      <div>
        {inputValue ? (
          <div className="input-value-display mb-2">
            {inputValue}
          </div>
        ) : null}
        <div className="container d-flex flex-column align-items-center">
          <div className="row d-flex align-items-center">
            <input
              type={inputType}
              className="custom-input"
              placeholder="Type / to choose a block"
              value={inputType === "text" ? inputValue : undefined}
              onChange={handleInputChange}
              {...(inputType === "file" && { multiple: true })}
            />
            <div className="dropdown">
              <button className="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <AiFillPlusSquare />
              </button>
              <ul className="dropdown-menu">
                <div className='m-2'>
                  <input type="search" className="form-control" />
                </div>
                <div className="d-flex">
                  <div className="row">
                    <li>
                      <div className="dropdown-item" onClick={() => handleIconClick("text")}>
                        <FaParagraph />
                        <p>Paragraph</p>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item" onClick={() => handleIconClick("file")}>
                        <CiImageOn />
                        <p>Image</p>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item">
                        <CiViewColumn />
                        <p>Column</p>
                      </div>
                    </li>
                  </div>
                  <div className="row">
                    <li>
                      <div className="dropdown-item">
                        <FaHeading />
                        <p>Heading</p>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item">
                        <TfiGallery />
                        <p>Gallery</p>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item">
                        <GoTasklist />
                        <p>List</p>
                      </div>
                    </li>
                  </div>
                </div>
                <div className='m-2'>
                  <button className="btn btn-secondary">Browse all</button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
