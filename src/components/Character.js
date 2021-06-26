// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  padding: 4% 0;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  h2 {
    font-size: 3rem;
    padding: 2% 0;
  }

  p {
    font-size: 1.8rem;
  }
`;

export default function Character(props) {
  const { characterData } = props;
  return (
    <StyledCharacter className="character">
      <div className="name-year-container">
        <h2>{characterData.name}</h2>
        <p>Birth-Year: {characterData.birth_year}</p>
      </div>
      <div className="details-container">
        <p>Height: {characterData.height}</p>
        <p>Mass: {characterData.mass}</p>
      </div>
    </StyledCharacter>
  );
}
