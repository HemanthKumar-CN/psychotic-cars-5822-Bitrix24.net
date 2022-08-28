import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Box,
  Input,
  FormLabel,
  Textarea,
  Button,
  useDisclosure,
  Checkbox,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import styles from "./Tags.module.css";
import { addTask } from "../../Redux/AppReducer/action";
import { ADD_TASK_SUCCESS } from "../../Redux/AppReducer/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AddTask() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuth = useSelector((state) => state.AuthReducer.data.isAuth);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [highPriority, sethighPriority] = useState(false);
  const [description, setDescription] = useState("");
  const [creator, setCreator] = useState("");
  const [assigned, setAssigned] = useState([]);
  const [deadline, setDeadline] = useState("");
  const [project, setProject] = useState("");
  const [time, setTime] = useState("");
  const [tag, setTag] = useState("");
  const token = localStorage.getItem("token");
  const addTaskHandler = async () => {
    let new_task = {
      title,
      description,
      time,
      creator,
      assigned,
      tag,
      highPriority,
      project,
      deadline,
    };
    // console.log(payload);

    // await fetch("https://stormy-caverns-19491.herokuapp.com/tasks", {
    //   method: "POST",
    //   body: JSON.stringify(new_task),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));

    dispatch(addTask(new_task, token)).then((r) => {
      // console.log(r);
      if (r === ADD_TASK_SUCCESS) {
        onClose();
        setTitle("");
        setDescription("");
        setAssigned([]);
        setCreator("");
        setTime("");
        setProject("");
        setDeadline("");
      }
    });
  };

  const handleKeyDown = (e) => {
    // console.log(e.key)
    if (e.key !== "Enter") return;
    console.log(e.target.value);
    const value = e.target.value;
    // if(value.trim()) return
    setAssigned([...assigned, value]);
    e.target.value = "";
  };

  // if(!isAuth) {
  //   return <Navigate to='/login' />
  // }

  return (
    <>
      <Button bgColor={"#bbed21"} borderRadius="none" onClick={onOpen}>
        NEW TASK
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px" backgroundColor={"#f4f7f8"}>
              New task
            </DrawerHeader>
            <DrawerBody>
              <Stack spacing="24px">
                <Flex justifyContent={"space-between"}>
                  <Input
                    id="title"
                    placeholder="Things to do"
                    width="60%"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Checkbox
                    checked={highPriority}
                    onChange={(e) => {
                      sethighPriority(e.target.checked);
                    }}
                  >
                    Priority
                  </Checkbox>
                </Flex>
                <Box>
                  <FormLabel htmlFor="desc">Description</FormLabel>
                  <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Box>
                <Box w="60%" alignItems={"left"}>
                  <Flex justifyContent={"space-between"}>
                    <FormLabel htmlFor="username">Created by</FormLabel>
                    <Input
                      ml="50px"
                      id="creator"
                      placeholder="Add"
                      width="80%"
                      value={creator}
                      onChange={(e) => setCreator(e.target.value)}
                    />
                  </Flex>
                </Box>
                <Box w="80%">
                  <Flex justifyContent={"space-between"}>
                    <FormLabel mt="10px">Responsible person</FormLabel>
                    <div className={styles.tagsbox}>
                      {assigned.map((tag, index) => (
                        <div key={index} className={styles.tagsitem}>
                          <span className={styles.text}>{tag}</span>
                          <span className={styles.close}>&times;</span>
                        </div>
                      ))}
                      <input
                        onKeyDown={handleKeyDown}
                        type="text"
                        placeholder="+ Add more"
                        className={styles.tagsinput}
                      />
                    </div>
                  </Flex>
                </Box>
                <Box w="60%">
                  <Flex justifyContent={"space-between"}>
                    <FormLabel htmlFor="username">Deadline</FormLabel>
                    <Input
                      ml={"65px"}
                      type="date"
                      id="deadline"
                      width="80%"
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                    />
                  </Flex>
                </Box>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left" width="50%">
                          More
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Stack spacing={"24px"}>
                        <Box w="60%" alignItems={"left"}>
                          <Flex ml="-1.5px" justifyContent={"space-between"}>
                            <FormLabel htmlFor="username">Project</FormLabel>
                            <Input
                              id="project"
                              placeholder="Add"
                              width="70%"
                              value={project}
                              onChange={(e) => setProject(e.target.value)}
                            />
                          </Flex>
                        </Box>
                        <Box w="60%" alignItems={"left"}>
                          <Flex ml="-1.5px" justifyContent={"space-between"}>
                            <FormLabel htmlFor="time">Time tracking</FormLabel>
                            <Input
                              type="time"
                              id="time"
                              width="70%"
                              value={time}
                              onChange={(e) => setTime(e.target.value)}
                            />
                          </Flex>
                        </Box>
                        <Box w="60%" alignItems={"left"}>
                          <Flex ml="-1.5px" justifyContent={"space-between"}>
                            <FormLabel htmlFor="username">Tag</FormLabel>
                            <Input
                              id="tag"
                              placeholder="Add"
                              width="70%"
                              value={tag}
                              onChange={(e) => setTag(e.target.value)}
                            />
                          </Flex>
                        </Box>
                      </Stack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                bgColor={"#bbed21"}
                borderRadius="3px"
                onClick={() => {
                  addTaskHandler();
                }}
              >
                ADD TASK
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
export default AddTask;
