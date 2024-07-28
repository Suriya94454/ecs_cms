import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  useColorModes,
} from "@coreui/react";
import { AppHeaderDropdown } from "./header/index";

const AppHeader = ({ onSecondScreenClick }) => {
  const headerRef = useRef();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      headerRef.current &&
        headerRef.current.classList.toggle(
          "shadow-sm",
          document.documentElement.scrollTop > 0
        );
    });
  }, []);

  return (
    <CHeader
      position="sticky"
      className="mb-4 p-0 "
      ref={headerRef}
      style={{ background: "#212631" }}
    >
      <div
        className="border-bottom px-4 d-flex justify-content-start align-items-center"
        fluid
      >

        <CDropdown variant="nav-item">
          <CDropdownToggle
            placement="bottom-end"
            className="py-0 pe-0"
            caret={false}
          >
            <span style={{ color: "white" }}>
              <FaPlus />
            </span>
            <span style={{ color: "white" }} className="ms-2">New</span>
          </CDropdownToggle>
          <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem>
              <p className="mt-2">Post</p>
            </CDropdownItem>
            <CDropdownItem>
              <p className="mt-2">Media</p>
            </CDropdownItem>
            <CDropdownItem 
            to="/secondlayout"
            as={NavLink}
            onClick={(e)=>{
              e.preventDefault();
              onSecondScreenClick();
            }}
            >
              <p className="mt-2">Page</p>
          
            </CDropdownItem>
            <CDropdownItem>
              <p className="mt-2">User</p>
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        </div>
        <div
        className="border-bottom px-4 d-flex justify-content-end align-items-center"
        fluid
      >
        <CHeaderNav>
          {/* <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li> */}
          {/* <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              {colorMode === "dark" ? (
                <CIcon icon={cilMoon} size="lg" />
              ) : colorMode === "auto" ? (
                <CIcon icon={cilContrast} size="lg" />
              ) : (
                <CIcon icon={cilSun} size="lg" />
              )}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={colorMode === "light"}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode("light")}
              >
                <CIcon className="me-2" icon={cilSun} size="lg" /> Light
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === "dark"}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode("dark")}
              >
                <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === "auto"}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode("auto")}
              >
                <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown> */}
          <AppHeaderDropdown />
        </CHeaderNav>
      </div>
    </CHeader>
  );
};

export default AppHeader;
