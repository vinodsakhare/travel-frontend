import React from "react";
import HomeHeader from '../components/HomeHeader';
import HomeLandingBody from "../components/HomeLandingBody";
import './Home.css';
import HomeSideNav from "../components/HomeSideNav";

const Home = () => {
  return (
    <div className="home-page">
      <div className = "backgroundImg">
        <HomeHeader/>
        <HomeSideNav/>
        <HomeLandingBody/>
      </div>
      <div className="random">heyy</div>
    </div>
  );
};

export default Home;
