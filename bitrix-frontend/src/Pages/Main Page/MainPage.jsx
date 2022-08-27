import React from "react";
import classes from "./MainPage.module.css";
import { RightSlider } from "../../Components/Right Slider/RightSlider";

import { SearchBar } from "../../Components/SearchBar";
import { RealTime } from "../../Components/RealTime";

import { LeftSlider } from "../../Components/LeftSlider";
import { MdBuild } from "react-icons/md";


import {
  Avatar,
  HStack,
  Select,
  Button,
  ButtonGroup,
  IconButton,
  InputGroup,
  InputLeftAddon,
  TagRightIcon,
  Tag,
  Input,
  TagLabel,
  InputRightElement,
  Box,
  Divider,
} from "@chakra-ui/react";
import { LeftSlider } from "../../Components/LeftSlider";
import { AiOutlineRight, AiOutlineStar } from "react-icons/ai";
import { MdFlashOn } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

import { ChevronDownIcon, SmallCloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Tasktable } from "../../Components/Tasktable";

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

        <div className={classes.navbar1}>
          <div
            style={{
              display: "flex",
              gap: "10px",
              borderRight: "2px solid black",
              width: "80px",
              height: "25px",
            }}
          >
            <h2 style={{ color: "#1058d0" }}>Tasks </h2>
            <AiOutlineRight size="13px" style={{ marginTop: "5px" }} />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <HStack spacing="35px">
              <h2>Projects</h2>
              <h2>Scrum</h2>
              <h2>Effieciency</h2>
              <h2>More</h2>
            </HStack>
          </div>
          <ChevronDownIcon w={5} h={5} mt="3px" ml="2px" />
        </div>

        <div className={classes.navbar2}>
          <HStack spacing="15px">
            <div style={{ display: "flex", gap: "5px", width: "16%" }}>
              <p
                style={{ fontSize: "25px", color: "white", fontWeight: "200" }}
              >
                My tasks
              </p>
              <AiOutlineStar
                color="grey"
                size="23px"
                style={{ marginTop: "10px" }}
              />
            </div>

            <ButtonGroup
              size="sm"
              isAttached
              variant="ghost"
              backgroundColor="#BBED21"
              w="110px"
              h="40px"
            >
              <Button
                color={"#535C69"}
                fontSize="12px"
                fontWeight="700"
                w="90px"
                h="40px"
              >
                NEW TASK
              </Button>
              <IconButton
                aria-label="Add to friends"
                h="40px"
                icon={<ChevronDownIcon />}
              />
            </ButtonGroup>
            <InputGroup size="md" w="650px" h="40px">
              <InputLeftAddon
                // pointerEvents="none"
                // size="sm"
                w="130px"
                backgroundColor="rgb(0,34,83)"
                children={
                  <Tag size={"xxl"} backgroundColor="#00BAF299" w="120px">
                    <TagLabel
                      w="95px"
                      h="30px"
                      color="white"
                      fontSize="13px"
                      pt="5px"
                      pl="8px"
                      fontWeight="0"
                    >
                      In progress
                    </TagLabel>
                    <TagRightIcon boxSize="12px" as={SmallCloseIcon} />
                  </Tag>
                }
              />
              <Input type="tel" placeholder="search" color="white" />
              <InputRightElement children={<SearchIcon color="white" />} />
            </InputGroup>
            <Box bg="#FFFFFF26" w="38px" h="38px" p="8px" color="white">
              <IoMdSettings color="white" size="23px" />
            </Box>
            <Box bg="#FFFFFF26" w="38px" h="38px" p="8px" color="white">
              <MdFlashOn color="white" size="23px" />
            </Box>
          </HStack>
        </div>
        <Divider />
        <div className={classes.tasks}>
          <Tasktable />
        </div>
      </div>
      <div className={classes.rightSlider}>
        <RightSlider />
      </div>
    </div>
  );
};
