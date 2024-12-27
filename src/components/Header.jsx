import React, { useEffect, useState } from 'react'
import './Header.css';
import { switchSideNav } from '../redux/slices/authSlice'; 
import { useDispatch } from 'react-redux';


function Header() {

    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


    return (
        <div className={`header ${isActive ? "active" : ""}`}>
            <div className="headeWrapper">
                <div className="left">
                    <div className="hamburger" onClick={() => dispatch(switchSideNav())}>
                        <img src="/menu.png" alt="icon" />
                    </div>
                    <div className="companyLogo">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="center">
                    <div className="creater">
                        <a href="">for Creators</a>
                    </div>
                    <div className="business">
                        <a href="">for Business</a>
                    </div>
                    <div className="explore">
                        <a href="">Start exploring</a>
                    </div>
                </div>
                <div className="right">
                    <div className="signIn">
                        <button>Sign In</button>
                    </div>
                    <div className="getStarted">
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
