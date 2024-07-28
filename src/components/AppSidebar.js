import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoHome } from "react-icons/io5";
import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { AppSidebarNav } from "../components/AppSidebarNav";
import { sygnet } from "../assets/brand/sygnet";
import ECSLOGO from "../assets/images/Logo.png";
import navigation from "../_nav";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      className="border-end "
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
          <div className="sidebar-brand-full">
            <img className="img-fluid w-25" alt="Logo" src={ECSLOGO} />
            <span><IoHome size={25}/>
            <span  className="ms-2">ECS_CMS</span>
            </span>
          </div>
          <div className="sidebar-brand-narrow">
            {/* <CIcon icon={sygnet} height={32} /> */}
          </div>
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: "set", sidebarShow: false })}
        />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() =>
            dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
          }
        />
      </CSidebarFooter>
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
