import { AddIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineRight, AiOutlineStar } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { Employee } from "../../Components/Employee";
import classes from "./Company.module.css";
export const Company = () => {
  return (
    <div>
      <div className={classes.navbar1}>
        <div style={{ marginLeft: "20px" }}>
          <HStack spacing="35px">
            <h2>Company Structure</h2>
            <h2>Employees</h2>

            <h2>
              Time and reports
              <ChevronDownIcon w={5} h={5} mt="3px" ml="2px" />
            </h2>
            <h2>Knowledge base</h2>
            <h2>Video Confrencing</h2>

            <h2>More</h2>
          </HStack>
        </div>
        <ChevronDownIcon w={5} h={5} mt="3px" ml="2px" />
      </div>
      <div className={classes.navbar2}>
        <HStack spacing="550px">
          <div
            style={{
              display: "flex",
              gap: "5px",
              width: "25%",
            }}
          >
            <p style={{ fontSize: "25px", color: "white", fontWeight: "200" }}>
              Company Structure
            </p>
            <AiOutlineStar
              color="grey"
              size="30px"
              style={{ marginTop: "5px" }}
            />
          </div>

          <div className={classes.inviteDiv}>
            <Button
              style={{ textAlign: "center", cursor: "pointer" }}
              bg="#3AC6F4"
              w="140px"
              h="38px"
              p="8px"
              color="white"
              colorScheme="twitter"
            >
              INVITE USER
            </Button>
            <Button
              style={{ textAlign: "center", cursor: "pointer" }}
              bg="#3AC6F4"
              w="170px"
              h="38px"
              p="8px"
              color="white"
              colorScheme="twitter"
            >
              ADD DEPARTMENT
            </Button>
          </div>
        </HStack>
      </div>
      <div className={classes.userDetail}>
        <div className={classes.employeeDiv}>
          <div className={classes.employeeDiv2}>
            <Employee p1="Krishan" bg="rgb(237,245,250)" title="Bitrix" />
          </div>
          <div className={classes.employeeDiv2}>
            <Employee
              bg="rgb(243,236,231)"
              title="Accounts Department"
              p1="Shivansh Kumar"
              p2="Lavnish Kumar"
              p3="Adarsh Yadav"
            />
            <Employee
              bg="rgb(243,236,231)"
              title="Marketing Department"
              p1="Raju Kumar"
              p2="Shivam Dubey"
              p3="Akshit Jain"
            />

            <Employee
              p1="Hemanth Kumar"
              p2="Priya Kumar"
              p3="Anurag Pawar"
              bg="rgb(243,236,231)"
              title="Sales Department"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
