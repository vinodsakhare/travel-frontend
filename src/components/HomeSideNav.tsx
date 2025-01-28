import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./HomeSideNav.css";
import { switchSideNav } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";

interface Props {}

function HomeSideNav(props: Props) {
  const {} = props;
  const isMenuOpen = useSelector((state: any) => state.auth.isMenuOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("isMenuOpen", isMenuOpen);
  }, [isMenuOpen]);

  return (
    <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`}>
      <nav className={`menu-content ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-header">
          <img src="./Close.png" alt="Close" className="close-icon" onClick={() => dispatch(switchSideNav())}/>
        </div>
        <div className="menu-body">
          <div>
            <a href="">Start chating</a>
          </div>
          <div>
            <a href="">Get inspired</a>
          </div>
          <div>
            <a href="">Personalize</a>
          </div>
          <div>
            <a href="">for Creators</a>
          </div>
          <div>
            <a href="">for Business</a>
          </div>
          <div>
            <a href="">Partner with us</a>
          </div>
        </div>
        <div className="menu-footer">
          <button className="sign-in">Sign in</button>
          <button className="get-started">Get started</button>
        </div>
      </nav>
    </div>
  );
}

export default HomeSideNav
