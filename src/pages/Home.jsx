import React from "react";
import Header from '../components/Header';
import LandingBody from "../components/LandingBody";
import './Home.css';
import SideNav from "../components/SideNav";

const Home = () => {
  return (
    <div className="home-page">
      <div className = "backgroundImg">
        <Header/>
        <SideNav/>
        <LandingBody/>
      </div>
      <div className="random">heyy</div>
    </div>
  );
};

export default Home;
