import React, { useState } from "react";
import logo from "../assets/images/Logo.png";
import { FaLaptop, FaPlus } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { FiCornerUpRight, FiCornerUpLeft } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";

import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";

function SecondLayout() {
  const [inputValue, setInputValue] = useState("");
  const [savedValues, setSavedValues] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue !== "") {
      setSavedValues(inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" style={{ borderBottom: "3px solid" }}>
        <div className="container-fluid">
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" width={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Nav className="d-flex align-items-center">
              <Button
                variant="primary"
                className="btn-sm"
                style={{ width: "fit-content" }}
              >
                <FaPlus />
              </Button>
              <span className="px-2">
                <RiPencilFill size={20} />
              </span>
              <span className="px-2">
                <FiCornerUpLeft className="text-secondary" size={20} />
              </span>
              <span className="px-2">
                <FiCornerUpRight className="text-secondary" size={20} />
              </span>
              <span className="px-2">
                <HiMenu size={20} />
              </span>
            </Nav>
            <div className="d-flex align-items-center justify-content-center flex-grow-1">
              <input
                type="text"
                className="form-control"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{
                  maxWidth: "35%",
                  background: "lightgray",
                  borderRadius: "4px",
                  border: "none",
                }}
              />
            </div>
            <div
              className="d-flex justify-content-center align-items-center py-2"
              style={{ margin: "0 auto" }}
            >
              <span className="px-3">Save draft</span>
              <span className="px-3">
                <FaLaptop />
              </span>
              <button className="btn btn-sm btn-primary">Publish</button>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Container className="text-center my-5">
        <h1 className="text-secondary">{savedValues}</h1>
      </Container>
    </div>
  );
}

export default SecondLayout;
