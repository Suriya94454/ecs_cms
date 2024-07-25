import React from "react";
import { HiOutlineViewColumns } from "react-icons/hi2";
import { MdOutlineRectangle } from "react-icons/md";
import { GoColumns } from "react-icons/go";
import { BsLayoutThreeColumns } from "react-icons/bs";
import { TbColumns1 } from "react-icons/tb";
import { LuRectangleVertical } from "react-icons/lu";
import { Link } from "react-router-dom";
import group1 from "../../assets/brand/Group 1.png";
import group2 from "../../assets/brand/Group 2.png";
import group3 from "../../assets/brand/Group 3.png";
import group5 from "../../assets/brand/Group 5.png";
import group6 from "../../assets/brand/Group 6.png";
import group4 from "../../assets/brand/Rectangle 1.png";

export default function AddCoulmns() {
  return (
    <div className="d-flex justify-content-center">
      <div className="card w-50 border-2 p-4" style={{ minHeight: "50vh" }}>
        <div className="d-flex align-items-center">
          <span>
            <HiOutlineViewColumns />
          </span>
          <span className="text-black ms-2">Columns</span>
        </div>
        <p className="text-black">Divide into Columns, select a layout</p>
        <div className="d-flex gap-3">
          <div>
            <Link to="/fcoulmn" className="text-decoration-none text-black">
              <p>
                <img className="img-fluid" src={group4} alt="100% width" />
              </p>
              <p>100</p>
            </Link>
          </div>
          <div>
            <Link to="/scoulmn" className="text-decoration-none text-black">
              <p>
                <img className="img-fluid" src={group1} alt="50/50 layout" />
              </p>
              <p>50/50</p>
            </Link>
          </div>
          <div>
            <Link to="/tcoulmn" className="text-decoration-none text-black">
              <p>
                <img className="img-fluid" src={group2} alt="33/33/33 layout" />
              </p>
              <p>33/33/33</p>
            </Link>
          </div>
          <div>
            <div>
              <Link to="/fcoulmn" className="text-decoration-none text-black">
                <p>
                  <img className="img-fluid" src={group3} alt="33/66 layout" />
                </p>
                <p>33/66</p>
              </Link>
            </div>
          </div>
          <div>
            <Link to="/scoulmn" className="text-decoration-none text-black">
              <p>
                <img className="img-fluid" src={group5} alt="66/33 layout" />
              </p>
              <p>66/33</p>
            </Link>
          </div>
          <div>
            <Link to="/tcoulmn" className="text-decoration-none text-black">
              <p>
                <img className="img-fluid" src={group6} alt="25/50/25 layout" />
              </p>
              <p>25/50/25</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
