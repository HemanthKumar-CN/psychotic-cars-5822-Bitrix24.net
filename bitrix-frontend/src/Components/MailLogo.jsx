import React from "react";
import styled from "styled-components";
const Div = styled.div`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  background-color: rgb(201, 124, 110);
  font-size: 21px;
`;
export const MailLogo = () => {
  const user = localStorage.getItem("email");
  const letter = user.charAt(1);
  // console.log(letter.toUpperCase());
  return <Div>{letter.toUpperCase()}</Div>;
};
