import React from "react";
import styled from "styled-components";

export default function CharacterDetail(props) {
  const { characterData } = props;
  return (
    <div className="detail-container">
      <div className="details">
        <p className="height">Height: {characterData.height}cm</p>
        <p>Mass: {characterData.mass}kg</p>
      </div>
      <div className="details">
        <p className="height">Height: {characterData.height}cm</p>
        <p>Mass: {characterData.mass}kg</p>
      </div>
    </div>
  );
}
