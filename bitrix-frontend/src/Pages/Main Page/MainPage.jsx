import React from "react";
import classes from "./MainPage.module.css";
import { RightSlider } from "../../Components/Right Slider/RightSlider";
import { SearchBar } from "../../Components/SearchBar";
import { RealTime } from "../../Components/RealTime";
import { Avatar, Select, WrapItem } from "@chakra-ui/react";
export const MainPage = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftSlider}></div>
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
          <div className={classes.navbar_email}>
            <div style={{paddingLeft:"10px",paddingTop:"5px"}}>
              <Avatar size="sm" src="https://bit.ly/broken-link" />
            </div>
            <div>
              <Select
                style={{ border: "none", fontSize: "15px",outline:"none" }}
                placeholder="krishankumarsafi7..."
              ></Select>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.rightSlider}>
        <RightSlider />
      </div>
    </div>
  );
};
