import React from "react";
import styled from "styled-components";

const StyledDetail = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .details {
    margin: 1% 0;
  }

  .left-p {
    margin-left: 3%;
  }
`;

export default function CharacterDetail(props) {
  const { characterData } = props;
  return (
    <StyledDetail className="detail-container">
      <div className="details">
        <p className="left-p">Height: {characterData.height}cm</p>
        <p>Mass: {characterData.mass}kg</p>
      </div>
      <div className="details">
        <p className="left-p">Hair Color: {characterData.hair_color}</p>
        <p>Eye Color: {characterData.eye_color}</p>
      </div>
      <div className="details">
        <p className="left-p">Gender: {characterData.gender}</p>
        <p>Number of Films: {characterData.films.length}</p>
      </div>
    </StyledDetail>
  );
}
