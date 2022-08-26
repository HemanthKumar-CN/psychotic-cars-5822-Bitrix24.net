import React from "react";
import { BiHelpCircle, BiMessageSquareCheck } from "react-icons/bi";
import { BsChatDots, BsSearch } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MailLogo } from "../MailLogo";
import { HelpDrawer } from "../HelpDrawer";
import classes from "./RightSlider.module.css";
export const RightSlider = () => {
  return (
    <div>
      <div className={classes.rightIcon}>
        {/* <HelpDrawer /> */}
        <div className={classes.logoBorder}>
          <BiHelpCircle
            onClick={() => console.log("krishan")}
            style={{ paddingTop: "5px",margin:"auto" }}
          />
        </div>
      </div>
      <div className={classes.rightIcon}>
        <div className={classes.logoBorder}>
          <IoIosNotificationsOutline style={{ paddingTop: "5px",margin:"auto" }} />
        </div>
      </div>
      <div className={classes.rightIcon}>
        <div className={classes.logoBorder}>
          <BsChatDots style={{ paddingTop: "5px",margin:"auto" }} />
        </div>
      </div>
      <div className={classes.rightIcon}>
        <div className={classes.logoBorder}>
          <BiMessageSquareCheck style={{ paddingTop: "5px",margin:"auto" }} />
        </div>
      </div>
      <div className={classes.rightIcon}>
        <MailLogo style={{ paddingTop: "5px" }} />
      </div>
    </div>
  );
};
