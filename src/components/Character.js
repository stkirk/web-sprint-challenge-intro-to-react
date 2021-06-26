// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div``;

export default function Character(props) {
  const { characterData } = props;
  return (
    <StyledCharacter className="character">
      <h2>{characterData.name}</h2>
      <p>Birth-Year: {characterData.birth_year}</p>
      <p>Height: {characterData.height}</p>
      <p>Mass: {characterData.mass}</p>
    </StyledCharacter>
  );
}
