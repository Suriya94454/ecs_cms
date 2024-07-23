import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import "../../styles/dashboard.css";
import { FaHome, FaNewspaper, FaImages, FaFile, FaComment, FaBrush, FaPlug, FaUser, FaWrench, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setShow(!show);
  };

  const menuItems = [
    { icon: <FaHome />, label: 'Dashboard' },
    { icon: <FaNewspaper />, label: 'Posts' },
    { icon: <FaImages />, label: 'Media' },
    { icon: <FaFile />, label: 'Pages' },
    { icon: <FaComment />, label: 'Comments' },
    { icon: <FaBrush />, label: 'Appearance' },
    { icon: <FaPlug />, label: 'Plugins' },
    { icon: <FaUser />, label: 'Users' },
    { icon: <FaWrench />, label: 'Tools' },
    { icon: <FaCog />, label: 'Settings' },
  ];

  return (
    <>
      {/* Toggle button for mobile view */}
      <Button variant="primary" onClick={toggleSidebar} className="d-lg-none">
        <i className="bi bi-list"></i> Menu
      </Button>
      {isMobile ? (
        <Offcanvas show={show} onHide={toggleSidebar} className="d-lg-none">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index} onClick={toggleSidebar}>
                  {item.icon} {item.label}
                </li>
              ))}
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      ) : (
        <div className={`sidebar ${show ? 'active' : ''}`}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.icon} {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
