import React, { useState } from "react";
import login from "./Images/login.png";
import zoom from "./Images/zoom.png";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Divider,
  Text,
  Center,
  Box,
} from "@chakra-ui/react";
import {
  FaApple,
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaSnapchat,
  FaFacebook,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdQrCodeScanner } from "react-icons/md";
import styles from "./login.module.css";

export default function SplitScreen() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleSubmit = async () => {
    const payload = {
      email,
      password,
    };
    await fetch("https://firstback12.herokuapp.com/signup", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // navigate("/");
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={login} />
      </Flex>
      <Flex
        direction={"column"}
        p={8}
        flex={1}
        align={"center"}
        justify={"center"}
        // border={"1px solid black"}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          //   border={"1px solid red"}
          mt="-20%"
        >
          <Heading fontSize={"4xl"} textAlign={"left"} fontWeight={"normal"}>
            Bitrix24 Login
          </Heading>
          <Divider />
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="name" onChange={handleOnChange} />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={handleOnChange} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={handleOnChange} />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
            <Button
              colorScheme={"blue"}
              variant={"solid"}
              onClick={handleSubmit}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
        <Divider m="10px" />

        <Stack
          w={"full"}
          maxW={"xl"}
          //   border={"1px solid red"}
          direction={"column"}
        >
          <Text>Log in with</Text>
          <Stack
            w={"full"}
            maxW={"xl"}
            border={"1px solid #c4c4c4"}
            direction="row"
            borderRadius="10px"
            backgroundColor={"#f4f7f8"}
            justifyContent={"space-between"}
            height="150px"
            p={6}
          >
            <stack direction="column" backgroundColor={"#f4f7f8"}>
              <Flex w="350px" mb="15px" justifyContent={"space-around"}>
                <Box mr={"15px"}>
                  <a href="https://www.facebook.com">
                    <FaFacebook id={styles.ficon} />
                  </a>
                </Box>
                <Box mr={"15px"}>
                  <Button
                    // w={"full"}
                    // maxW={"md"}
                    variant={"outline"}
                    leftIcon={<FcGoogle />}
                  >
                    <Center>
                      <Text>Google</Text>
                    </Center>
                  </Button>
                </Box>
                <Box mr={"15px"}>
                  <a href="https://apps.apple.com">
                    <FaApple id={styles.apcon} />
                  </a>
                </Box>
                <Box mr={"15px"}>
                  <a href="https://in.pinterest.com">
                    <FaPinterest id={styles.ticon} />
                  </a>
                </Box>
              </Flex>
              <Flex directio="row" justifyContent={"center"}>
                <Box>
                  <a href="https://www.twitter.com">
                    <FaTwitterSquare id={styles.ticon} />
                  </a>
                </Box>
                <Box>
                  <a href="">
                    <Image
                      id={styles.ticon}
                      alt={"Login Image"}
                      objectFit={"cover"}
                      src={zoom}
                    />
                  </a>
                </Box>
              </Flex>
            </stack>
            <Divider orientation="vertical" />
            <stack>
              <flex justifyContent={"center"}>
                <Box justifyContent={"center"}>
                  <a href="https://apps.apple.com">
                    <MdQrCodeScanner id={styles.qrcode} />
                  </a>
                </Box>
                <Text fontSize={"13px"} fontWeight="semibold">
                  Log in with QR
                </Text>
                <Text fontSize={"13px"} fontWeight="semibold">
                  code
                </Text>
              </flex>
            </stack>
          </Stack>
        </Stack>
      </Flex>
      {/* <Divider>Or</Divider> */}
    </Stack>
  );
}
