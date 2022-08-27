import React from "react";
import classes from "./MainPage.module.css";
import { RightSlider } from "../../Components/Right Slider/RightSlider";

import { SearchBar } from "../../Components/SearchBar";
import { RealTime } from "../../Components/RealTime";
import { Avatar, Button, Select, WrapItem } from "@chakra-ui/react";
import { LeftSlider } from "../../Components/LeftSlider";
import { MdBuild } from "react-icons/md";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const MainPage = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftSlider}>
        <LeftSlider />
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
          <div className={classes.navbar_email}>
            <div style={{ paddingLeft: "10px", paddingTop: "5px" }}>
              <Avatar size="sm" src="https://bit.ly/broken-link" />
            </div>
            <div>
              <Select
                style={{ border: "none", fontSize: "15px", outline: "none" }}
                placeholder="krishankumarsafi7..."
              ></Select>
            </div>
          </div>
          <div className={classes.upgrade_button}>
            <Button
              style={{
                width: "130px",
                margin: "auto",
                backgroundColor: "rgb(235,165,28)",
                color: "white",
                fontWeight: "bold",
                borderRadius: "15px",
                height: "35px",
              }}
              // colorScheme="yellow"
              size="md"
              rightIcon={<ChevronDownIcon />}
            >
              Upgrade
            </Button>
          </div>
          <div className={classes.upgrade_button}>
            <Button
              style={{
                width: "100px",
                margin: "auto",
                backgroundColor: "rgb(20,191,213)",
                color: "white",
                fontWeight: "bold",
                borderRadius: "15px",
                height: "35px",
              }}
              rightIcon={<ChevronDownIcon />}
            >
              {" "}
              Invite
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.rightSlider}>
        <RightSlider />
      </div>
    </div>
  );
};
