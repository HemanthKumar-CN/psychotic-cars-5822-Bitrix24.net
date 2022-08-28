import { AddIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineRight, AiOutlineStar } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";

import classes from "./Sites.module.css";
import Image from "../../images/bitrixsites.png";
import { SearchBar } from "../../Components/SearchBar";
import { RealTime } from "../../Components/RealTime";
import { Avatar, Select } from "@chakra-ui/react";

import { LeftSlider } from "../../Components/LeftSlider";

export const SitesStore = () => {
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
        </div>

        <div className={classes.navbar1}>
          <div className={classes.sites2}>
            <h2 className={classes.sites} style={{ color: "#1058d0" }}>
              Sites{" "}
            </h2>
            <AiOutlineRight
              className={classes.sites}
              size="13px"
              style={{ marginTop: "5px" }}
            />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <HStack spacing="35px">
              <h2>Online Store</h2>
              <h2>
                Inventory
                <ChevronDownIcon w={5} h={5} mt="3px" ml="2px" />
              </h2>

              <h2>
                Customers
                <ChevronDownIcon w={5} h={5} mt="3px" ml="2px" />
              </h2>
              <h2>CRM forms</h2>
              <h2>
                Payment System and delivery
                <ChevronDownIcon w={5} h={5} mt="3px" ml="2px" />
              </h2>
              <h2>
                Setting
                <ChevronDownIcon w={5} h={5} mt="3px" ml="2px" />
              </h2>
              <h2>More</h2>
            </HStack>
          </div>
          <ChevronDownIcon w={5} h={5} mt="3px" ml="2px" />
        </div>
        <div className={classes.navbar2}>
          <HStack spacing="25px">
            <div className={classes.outliner}>
              <p>Sites</p>
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
              w="150px"
              h="40px"
            >
              <IconButton
                aria-label="Add to friends"
                h="40px"
                icon={<AddIcon />}
              />
              <Button
                color={"#535C69"}
                fontSize="12px"
                fontWeight="700"
                w="90px"
                h="40px"
              >
                Create a site
              </Button>
            </ButtonGroup>
            <InputGroup
              style={{ outline: "none" }}
              bg="white"
              size="md"
              w="650px"
              h="40px"
            >
              <Input type="tel" placeholder="Filter and search" color="white" />
              <InputRightElement children={<SearchIcon color="white" />} />
            </InputGroup>
            <Box
              style={{ textAlign: "center", cursor: "pointer" }}
              bg="#FFFFFF26"
              w="140px"
              h="38px"
              p="8px"
              color="white"
            >
              Recycle Bin
            </Box>
            <Box
              style={{ cursor: "pointer" }}
              bg="#FFFFFF26"
              w="38px"
              h="38px"
              p="8px"
              color="white"
            >
              <IoMdSettings color="white" size="23px" />
            </Box>
          </HStack>
        </div>
        <Divider />
        <div className={classes.ads}>
          <div className={classes.ads2}>
            <img src={Image}></img>
          </div>
          <div className={classes.ads3}>
            <img src="https://b24-chnk01.bitrix24.in/bitrix/components/bitrix/landing.site_tile/templates/.default/images/empty_page_en.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
