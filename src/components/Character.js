// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div``;

export default function Character(props) {
  //   const { characterData } = props;
  return (
    <StyledCharacter className="character">
      <h2>name</h2>
      <p>birth_year</p>
      <p>height</p>
      <p>mass</p>
      <p>homeworld</p>
      <p>species</p>
    </StyledCharacter>
  );
}
