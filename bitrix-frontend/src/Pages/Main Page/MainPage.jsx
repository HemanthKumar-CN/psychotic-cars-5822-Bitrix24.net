import React from "react";
import classes from "./MainPage.module.css";
import { BiHelpCircle } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { MailLogo } from "../../Components/MailLogo";
import { RightSlider } from "../../Components/Right Slider/RightSlider";
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
        </div>
      </div>
      <div className={classes.rightSlider}>
        <RightSlider/>
      </div>
    </div>
  );
};
