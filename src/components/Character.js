// Write your Character component here
import React, { useState } from "react";
import styled from "styled-components";
import CharacterDetail from "./CharacterDetail";
//All imports for Character component

//create styled-component for the div that wraps the Character component
//styles not coming from CSS reset and CSS base styles in App.css are added here
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

  p,
  .toggle-icon {
    color: whitesmoke;
    font-size: 1.8rem;
    margin-right: 3%;
    padding: 0 2%;
    border: 1px solid whitesmoke;
    border-radius: 5px;
    background-color: #696969;
  }
  .toggle-icon {
    font-weight: bold;
    width: 10%;
    margin: 0 auto;
    &:hover {
      background-color: whitesmoke;
      color: #696969;
      border: 1px solid #696969;
      transition: all 0.35s ease-in-out;
    }
    transition: all 0.35s ease-in-out;
  }
`;

//Each character gets a characterData object as props
export default function Character(props) {
  const { characterData } = props;

  //new slice of state to toggle the CharacterDetail component on and off
  const [detailView, setDetailView] = useState(false);

  //helper function to be used as a click handler
  const toggleDetailView = () => {
    setDetailView(!detailView);
  };

  //returns a Character component with name and birth year showing from props
  //logic included to toggle the Detail component on and off using detailView slice of state
  //the click handler on the button it the helper function above and sets detailView state to the opposite of what it currently is
  //ternary switched button text to be + or - depending on if CharacterDetail is open of closed
  return (
    <StyledCharacter className="character">
      <div className="name-year-container">
        <h2>{characterData.name}</h2>
        <p>Birth-Year: {characterData.birth_year}</p>
      </div>
      <button className="toggle-icon" onClick={toggleDetailView}>
        {detailView ? "-" : "+"}
      </button>
      {detailView && <CharacterDetail characterData={characterData} />}
    </StyledCharacter>
  );
}
