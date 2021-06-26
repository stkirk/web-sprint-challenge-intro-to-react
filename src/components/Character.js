// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div``;

export default function Character(props) {
  const { characterData } = props;
  return <div className="character"></div>;
}
