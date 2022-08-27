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
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

function SignupModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSignup = () => {
    console.log(email, password);
    onClose();
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
