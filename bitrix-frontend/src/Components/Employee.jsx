import React, { useState } from "react";
import styled from "styled-components";
const Div = styled.div`
  border: 1px solid teal;
  margin: auto;
  width: 230px;
  height: 75%;
`;
const SecondaryDiv = styled.div`
  border-bottom: 0.5px solid teal;
  width: 100%;
  height: 30px;
  color: blue;
`;
export const Employee = ({ title, bg, p1, p2, p3 }) => {
  return (
    <Div style={{ backgroundColor: `${bg}` }}>
      <SecondaryDiv>
        <span style={{ paddingLeft: "10px" }}>{title}</span>
      </SecondaryDiv>
      <div style={{ marginLeft: "10px" }}>
        <span> {p1}</span>
        <br></br>
        <span> {p2}</span>
        <br></br>
        <span> {p3}</span>
        <br></br>
      </div>
    </Div>
  );
};
