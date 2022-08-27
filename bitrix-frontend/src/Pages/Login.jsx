import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import loginImg from "./Images/loginImg.png";
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
import { useDisclosure } from "@chakra-ui/react";

import {
  FaApple,
  FaTwitterSquare,
  FaPinterest,
  FaFacebook,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdQrCodeScanner } from "react-icons/md";
import styles from "./login.module.css";
import SignupModal from "../Components/SignupModal";

export default function SplitScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Must add Username af but for reqirs only email and pass
    if (username && email && password) {
      dispatch(login({ username, email, password })).then((r) => {
        console.log(r.payload.token);
        if (r.type === "USER_LOGIN_SUCCESS") {
          navigate(comingFrom, { replace: true });
        }
      });
    }
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={loginImg} />
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
            <Input type="name" onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
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
            <Text align={"center"}>Don't have an account..? </Text>

            <SignupModal />
          </Stack>
        </Stack>
        <Divider m="10px" />

        <Stack
          w={"full"}
          maxW={"xl"}
          //   border={"1px solid red"}
          direction={"column"}
        >
          {/* <Text>Log in with</Text> */}
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
            <Stack direction="column" backgroundColor={"#f4f7f8"}>
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
            </Stack>
            <Divider orientation="vertical" />
            <Stack>
              <Flex justifyContent={"center"}>
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
              </Flex>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
