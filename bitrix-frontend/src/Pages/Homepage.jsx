import React from "react";
import Carousel from "../Components/Carousel";
import { Homenavbar } from "../Components/HomeNavbar";
import { HomepageCard } from "../Components/HomepageCard";
import { Button } from "@chakra-ui/react";

export const Homepage = () => {
  return (
    <div>
      <Homenavbar />
      <div
        style={{
          width: "90%",
          margin: "auto",
          height: "auto",
          marginTop: "30px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginTop: "10px",
            color: "#262626",
            fontSize: "46px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Bitrix24. Your ultimate workspace.
        </h2>
        <Carousel />
      </div>
      <img src="https://i.postimg.cc/DydryWv3/Bitrix-6.png" alt="" />
      <HomepageCard />
      <img
        src="https://i.postimg.cc/h4kv8LBx/Bitrix-7.png"
        alt=""
        style={{ marginTop: "40px", marginBottom: "30px" }}
      />
      <hr />
      <img
        src="https://i.postimg.cc/XvjpGn0z/Bitrix-8.png"
        alt=""
        style={{ marginTop: "30px", marginBottom: "40px" }}
      />
      <h2
        style={{
          textAlign: "center",
          marginTop: "10px",
          color: "#262626",
          fontSize: "40px",
          fontWeight: "600",
          marginBottom: "20px",
        }}
      >
        Ready to try?
      </h2>
      <Button
        colorScheme="whatsapp"
        ml="500px"
        w="130px"
        height="40px"
        mb="40px"
      >
        Register Free
      </Button>
      <img
        src="https://i.postimg.cc/28mRfGNC/Bitrix-9.png"
        alt=""
        style={{ marginTop: "35px" }}
      />
      <img src="https://i.postimg.cc/J00XyJ90/Bitrix-10.png" alt="" />
    </div>
  );
};
