import React from "react";
import classes from "./MainPage.module.css";
import { RightSlider } from "../../Components/Right Slider/RightSlider";
import { SearchBar } from "../../Components/SearchBar";
import { RealTime } from "../../Components/RealTime";
export const MainPage = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftSlider}>
        
      </div>
      <div className={classes.middleContainer}>
        <div className={classes.navbar}>
          <div className={classes.bitrixLogo}>
            <span className={classes.logoSpan}>Bitrix</span>
            <span className={classes.logoSpan2}>24</span>
          </div>
          <div className={classes.navbar_search}>
            <SearchBar />
          </div>
          <div className={classes.real_time}>
            <RealTime />
          </div>
        </div>
      </div>
      <div className={classes.rightSlider}>
        <RightSlider />
      </div>
    </div>
  );
};
