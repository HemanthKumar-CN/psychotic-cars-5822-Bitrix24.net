import React from "react";
import classes from "./Marketing.module.css";
import { RightSlider } from "../Components/Right Slider/RightSlider";

import { SearchBar } from "../Components/SearchBar";
import { RealTime } from "../Components/RealTime";
import { Avatar, Select, WrapItem } from "@chakra-ui/react";

import { LeftSlider } from "../Components/LeftSlider";
import image_facebook_ad from "../images/a_facebook_ad.png"
import image_audio_call from "../images/a_audio_call.png"
import image_email_camp from "../images/a_email_campaign.png"
import image_facebook_looklike from "../images/a_facebook_looklike.png"
import image_google_adword from "../images/a_google_adword.png"
import image_instagram_ad from "../images/a_instagram_ads.png"
import image_sms_campaign from "../images/a_sms_campaign.png"
import image_voice_broad from "../images/a_voice_broadcasting.png"
import image_messenger from "../images/a_messengers.png"

export const Marketing = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftSlider}>
        <LeftSlider/>
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

        <div className={classes.anv_small_navbar} >
            <h4>Start</h4>
            <h4>Campaigns</h4>
            <h4>Ads</h4>
            <h4>Segments</h4>
            <h4>Sales Boost</h4>
            <h4>My Templates</h4>
            <h4>Black List</h4>
            <h4>More</h4>
        </div>

        <div className={classes.anv_create_campaign} >
            <div><h3>Create Campaign</h3></div>
            <div className={classes.anv_campaign_images} >
                <img width="180px" height="120px" src={image_facebook_ad} />
                <img width="180px" height="120px" src={image_sms_campaign} />
                <img width="180px" height="120px" src={image_messenger} />
                <img width="180px" height="120px" src={image_voice_broad} />
                <img width="180px" height="120px" src={image_audio_call} />
            </div>
        </div>
        <div className={classes.anv_create_campaign} >
            <div><h3>Create Audience</h3></div>
            <div className={classes.anv_campaign_images} >
                <img width="180px" height="120px" src={image_google_adword} />
                <img width="180px" height="120px" src={image_facebook_ad} />
                <img width="180px" height="120px" src={image_facebook_looklike} />
            </div>
        </div>
        <div className={classes.anv_create_campaign} >
            <div><h3>Retargeting in Ad Networks</h3></div>
            <div className={classes.anv_campaign_images} >
                <img width="180px" height="120px" src={image_instagram_ad} />
                <img width="180px" height="120px" src={image_facebook_ad} />
            </div>
        </div>

      </div>
      
      <div className={classes.rightSlider}>
        <RightSlider />
      </div>
    </div>
  );
};
