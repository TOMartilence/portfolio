import React from "react";
import Navbar from "../components/Navbar";
import pfp from "../assets/profile.jpeg"
import "../css/Home.css"
function Home() {
  return (
    <div className="home">
        <div className="image">
        <img style={{ zIndex: 10000 , width:"150px",borderRadius:"50%"}} src={pfp} alt="Profile" />
        </div>
      <div className="home-content">
        <h1 className="home-title">Welcome to My Portfolio</h1>
        <p className="home-subtitle">
          A showcase of creativity, skill, and passion.
        </p>
        <button className="home-button">Explore</button>
      </div>
    </div>
  );
}

export default Home;
