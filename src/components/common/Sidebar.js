import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Nav } from "react-bootstrap";
import "../../styles/sidebar.css";
import Logo from "../../assets/images/Logo.png";

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const userRole = sessionStorage.getItem("userName");

  const [menuItems, setMenuItems] = useState([]);

  const handleMenuClick = (index) => {
    if (index === null) {
      // If Home is clicked, deactivate all menus
      setMenuItems(menuItems.map((item) => ({ ...item, isOpen: false })));
      setActiveMenu(null);
    } else {
      const updatedMenuItems = menuItems.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            isOpen: !item.isOpen,
          };
        } else {
          return {
            ...item,
            isOpen: false,
          };
        }
      });
      setMenuItems(updatedMenuItems);
      setActiveMenu(
        updatedMenuItems[index].isOpen ? updatedMenuItems[index].title : null
      );
    }
  };

  return (
    <div className="sidebar">
      <div
        className="logo-details"
        style={{
          backgroundColor: "#6675de",
          position: "sticky",
          top: "0",
          zIndex: "100",
        }}
      >
        <ul className="nav-links p-0" id="logo-ul">
          <li className="p-1">
            <NavLink to="/" onClick={() => handleMenuClick(null)}>
              <img src={Logo} alt="Logo" width={30} height={30} />
              <span class="logo_name text-center ms-3">
                <p class="HomeInsteadHeading">CMS</p>
              </span>
            </NavLink>
          </li>
        </ul>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/dashboard" onClick={() => handleMenuClick(null)}>
            <i class="bx bx-home-alt"></i>
            <span className="links_name">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={() => handleMenuClick(null)}>
            <i class="bx bx-home-alt"></i>
            <span className="links_name">Home</span>
          </NavLink>
        </li>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Nav.Link
              to="#"
              onClick={() => handleMenuClick(index)}
              className={activeMenu === item.title ? "active" : ""}
            >
              <div
                className="w-100 d-flex justify-content-between"
                style={{ overflow: "hidden", whiteSpace: "nowrap" }}
              >
                <span>
                  <i className={item.icon}></i>
                  <span className="links_name">{item.title}</span>
                </span>
                <span>
                  <i
                    className={`bx bx-chevron-down arrow ${
                      item.isOpen ? "open" : ""
                    }`}
                    style={{
                      paddingRight: "5px",
                      minWidth: "0px",
                      fontWeight: "700",
                    }}
                  ></i>
                </span>
              </div>
            </Nav.Link>

            <Collapse in={item.isOpen}>
              <ul className="submenu">
                {item.subMenus.map(
                  (subMenu, subIndex) =>
                    // Check if subMenu.title is truthy before rendering the list item
                    subMenu.title && (
                      <li key={subIndex}>
                        <NavLink
                          to={subMenu.path}
                          className="links_name"
                          activeClassName="active-submenu"
                        >
                          {/* Render the radio icon and title */}
                          <i className="bx bx-radio-circle-marked ps-3"></i>
                          <span className="links_name links_names">
                            {subMenu.title}
                          </span>
                        </NavLink>
                      </li>
                    )
                )}
              </ul>
            </Collapse>
          </li>
        ))}
        {(userRole === "Admin" || userRole === "Super Admin") && (
          <li>
            <NavLink to="/employeeadmin" onClick={() => handleMenuClick(null)}>
              <i class="bx bx-male-female"></i>
              <span className="links_name">Updates</span>
            </NavLink>
          </li>
        )}
        {(userRole === "Admin" || userRole === "Super Admin") && (
          <li>
            <NavLink to="/em" onClick={() => handleMenuClick(null)}>
              <i class="bx bx-male-female"></i>
              <span className="links_name">Media</span>
            </NavLink>
          </li>
        )}
        {(userRole === "Admin" || userRole === "Super Admin") && (
          <li>
            <NavLink to="/employ" onClick={() => handleMenuClick(null)}>
              <i class="bx bx-male-female"></i>
              <span className="links_name">Pages</span>
            </NavLink>
          </li>
        )}
        {(userRole === "Admin" || userRole === "Super Admin") && (
          <li>
            <NavLink to="/employ" onClick={() => handleMenuClick(null)}>
              <i class="bx bx-male-female"></i>
              <span className="links_name">Comments</span>
            </NavLink>
          </li>
        )}
        {(userRole === "Admin" || userRole === "Super Admin") && (
          <li>
            <NavLink to="/employ" onClick={() => handleMenuClick(null)}>
              <i class="bx bx-male-female"></i>
              <span className="links_name">Astra</span>
            </NavLink>
          </li>
        )}
        {(userRole === "Admin" || userRole === "Super Admin") && (
          <li>
            <NavLink to="/employ" onClick={() => handleMenuClick(null)}>
              <i class="bx bx-male-female"></i>
              <span className="links_name">Appearance</span>
            </NavLink>
          </li>
        )}
        {(userRole === "Admin" || userRole === "Super Admin") && (
          <li>
            <NavLink to="/employ" onClick={() => handleMenuClick(null)}>
              <i class="bx bx-male-female"></i>
              <span className="links_name">Pludins</span>
            </NavLink>
          </li>
        )}
        
      </ul>
    </div>
  );
}

export default Sidebar;
