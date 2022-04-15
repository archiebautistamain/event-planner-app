import React, { Component } from "react";
import classes from "./Home.module.css";
import HomeComponents from "./PageComponents/HomeComponents";
import BG from "../Resources/videos/BG.mp4";
function Home() {
  return (
    <div>
      <video autoPlay loop muted className={classes.bgVideo}>
        <source src={BG} type="video/mp4" />
      </video>
      <div className={classes.head}>
        <div className={classes.content}>
          <h1>[My Event Planner]</h1>
          <p>Make any occasion unforgettable</p>
        </div>
      </div>
      <HomeComponents />
    </div>
  );
}

export default Home;
