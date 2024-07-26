import React, { useState } from "react";
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../components/index";
import SecondLayout from "./SecondLayout";

const DefaultLayout = () => {
  const [showSecondScreen, setShowSecondScreen] = useState(false);

  const handleSecondScreenClick = () => {
    setShowSecondScreen(true);
  };

  const handleMainScreenClick = () => {
    setShowSecondScreen(false);
  };

  return (
    <div>
      {!showSecondScreen ? (
        <div>
          <AppSidebar />
          <div className="wrapper d-flex flex-column min-vh-100">
            <AppHeader onSecondScreenClick={handleSecondScreenClick} />
            <div className="body flex-grow-1">
              <AppContent />
            </div>
            <AppFooter />
          </div>
        </div>
      ) : (
        <div>
          <SecondLayout onMainScreenClick={handleMainScreenClick} />
        </div>
      )}
    </div>
  );
};

export default DefaultLayout;
