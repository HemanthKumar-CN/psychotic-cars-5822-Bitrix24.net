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
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { FaUserCircle } from "react-icons/fa";
import { getTask } from "../Redux/AppReducer/action";

export const Tasktable = () => {
  const tasks = useSelector((state) => state.AppReducer.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTask());
  }, []);
  console.log(tasks);
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
            {tasks.length>0?tasks.map((e) => {
              return (
                <Tr>
                  <Td>
                    <div style={{ display: "flex", gap: "5px" }}>
                      <IconButton icon={<EditIcon />} size="xs" />
                      <IconButton icon={<DeleteIcon />} size="xs" />
                      {e.name}
                    </div>
                  </Td>
                  <Td> {e.active}</Td>
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
                      <FaUserCircle size="20px" /> {e.createdby}
                    </div>
                  </Td>
                  <Td>
                    <div style={{ display: "flex", gap: "5px" }}>
                      <FaUserCircle size="20px" /> {e.res}
                    </div>
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
            }):null}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
