import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
  Image,
  Box,
  useToast,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

function SignupModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSignup = async () => {
    console.log(username, email, password);
    var user = {
      username,
      email,
      password,
    };

    await fetch("https://stormy-caverns-19491.herokuapp.com/signup", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        setUsername("");
        setEmail("");
        setPassword("");
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        onClose();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Button onClick={onOpen}>Sign up</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader p={"2em"}>
            {/* <Box boxSize="sm"> */}
            <Image
              src="https://static.wpsocket.com/plugin/integration-with-bitrix24/banner-772x250.png"
              alt="bitrix24"
            />
            {/* </Box> */}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                ref={initialRef}
                placeholder="enter username"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={initialRef}
                placeholder="enter email"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="enter password"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSignup} colorScheme="blue" mr={3}>
              Signup now!
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignupModal;
