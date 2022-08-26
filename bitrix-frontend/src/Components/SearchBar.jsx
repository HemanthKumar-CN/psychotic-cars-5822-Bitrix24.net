import React from "react";
import styled from "styled-components";
const Input = styled.input`
  background-color: rgb(47, 66, 104);
  width: 130px;
  height: 35px;
  box-sizing: border-box;
  border-radius: 15px;
  font-size: 16px;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  &:focus {
    outline: none;
    width:100%;
    background-color:white;
}
  }
`;
export const SearchBar = () => {
  return (
    <div>
      <Input type="text" name="search" placeholder="Search.."></Input>
    </div>
  );
};
