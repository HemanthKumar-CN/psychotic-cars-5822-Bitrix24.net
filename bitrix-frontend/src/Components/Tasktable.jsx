import React, { useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  Tag,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { FaUserCircle } from "react-icons/fa";
import { deleteTask, getTask } from "../Redux/AppReducer/action";

export const Tasktable = () => {
  const tasks = useSelector((state) => state.AppReducer.tasks);
  const toast = useToast();

  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTask(token));
  }, []);
  // console.log(tasks);

  const handleDelete = async (id) => {
    // console.log("Delete", id);
    dispatch(deleteTask(id, token)).then((r) => {
      // console.log(r);

      if (r == "Delete_TASK") {
        toast({
          title: "Task Deleted",
          description: "Deleted the task",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      }
    });
  };

  const handleEdit = (id) => {
    console.log("edit", id);
  };

  return (
    <div>
      <TableContainer>
        <Table variant="simple" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th pl="70px">Name</Th>
              <Th>Active</Th>
              <Th> Deadline</Th>
              <Th> Created by</Th>
              <Th> Responsible person</Th>
              <Th> Tags</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tasks.length > 0
              ? tasks.map((e) => {
                  return (
                    <Tr key={e._id}>
                      <Td>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <IconButton
                            onClick={() => handleEdit(e._id)}
                            icon={<EditIcon />}
                            size="xs"
                          />
                          <IconButton
                            onClick={() => handleDelete(e._id)}
                            icon={<DeleteIcon />}
                            size="xs"
                          />
                        </div>
                        {e.title}
                      </Td>
                      <Td> active</Td>
                      <Td>
                        <Tag
                          backgroundColor="rgb(241,184,59)"
                          color="white"
                          variant="solid"
                        >
                          {e.deadline}
                        </Tag>
                      </Td>
                      <Td>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <FaUserCircle size="20px" />
                        </div>
                        {e.creator}
                      </Td>
                      <Td>
                        <div style={{ display: "flex", gap: "5px" }}>
                          <FaUserCircle size="20px" />
                        </div>
                        {e.assigned.map((el, index) => {
                          return <p key={index}>{el}</p>;
                        })}
                      </Td>
                      <Td>
                        <Tag
                          backgroundColor="rgb(232,234,239)"
                          color="gray"
                          variant="solid"
                        >
                          {e.tag}
                        </Tag>
                      </Td>
                    </Tr>
                  );
                })
              : null}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
