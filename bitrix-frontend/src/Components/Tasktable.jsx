import React from "react";
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
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { FaUserCircle } from "react-icons/fa";

export const Tasktable = () => {
  return (
    <div>
      <TableContainer>
        <Table variant="simple" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th>
                <div style={{ display: "flex", gap: "5px" }}>
                  <IconButton icon={<EditIcon />} size="xs" />
                  <IconButton icon={<DeleteIcon />} size="xs" />
                  <h2 style={{ paddingTop: "6px" }}>Name</h2>
                </div>
              </Th>
              <Th>Active</Th>
              <Th> Deadline</Th>
              <Th> Created by</Th>
              <Th> Responsible person</Th>
              <Th> Tags</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <div style={{ display: "flex", gap: "5px" }}>
                  <IconButton icon={<EditIcon />} size="xs" />
                  <IconButton icon={<DeleteIcon />} size="xs" />
                  Go to the store
                </div>
              </Td>
              <Td> August 26, 12:28 am</Td>
              <Td>
                <Tag
                  backgroundColor="rgb(241,184,59)"
                  color="white"
                  variant="solid"
                >
                  No deadline
                </Tag>
              </Td>
              <Td>
                <div style={{ display: "flex", gap: "5px" }}>
                  <FaUserCircle size="20px" /> Manikandan
                </div>
              </Td>
              <Td>
                <div style={{ display: "flex", gap: "5px" }}>
                  <FaUserCircle size="20px" /> Manikandan
                </div>
              </Td>
              <Td>
                <Tag
                  backgroundColor="rgb(232,234,239)"
                  color="gray"
                  variant="solid"
                >
                  personal
                </Tag>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
