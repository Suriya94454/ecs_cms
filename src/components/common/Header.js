  import React from 'react';
  import "../../styles/dashboard.css";

  const Header = () => {
    return (
      <div className="header d-flex align-items-center justify-content-between pt-2 pb-2 px-2">
        <h4>Dashboard</h4>
        <div className="header-right">
          <span>Howdy, Suriya</span>
        </div>
      </div>
    );
  };

  export default Header;
