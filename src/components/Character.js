// Write your Character component here
import React, { useState } from "react";
import styled from "styled-components";
import CharacterDetail from "./CharacterDetail";

const StyledCharacter = styled.div`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  margin: 1.5% 0;
  padding: 2% 0;
  border: 2px solid #2ff924;
  border-radius: 10px;

  .name-year-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-weight: bold;
    font-size: 3rem;
    padding: 1% 0;
    margin-left: 3%;
  }

  p {
    color: whitesmoke;
    font-size: 1.8rem;
    margin-right: 3%;
    padding: 0 2%;
    border: 1px solid whitesmoke;
    border-radius: 5px;
    background-color: #696969;
  }
`;

export default function Character(props) {
  const { characterData } = props;

  const [detailView, setDetailView] = useState(false);

  const toggleDetailView = () => {
    setDetailView(!detailView);
  };

  return (
    <StyledCharacter className="character">
      <div className="name-year-container">
        <h2>{characterData.name}</h2>
        <p>Birth-Year: {characterData.birth_year}</p>
      </div>
      {detailView && <CharacterDetail characterData={characterData} />}
    </StyledCharacter>
  );
}
