import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Character from "./components/Character";
//all imports go above

const baseUrl = "https://swapi.dev/api/people";
//API call url

//styled h1 component
const StyledHeader = styled.h1`
  border: 2px solid #2ff924;
`;

//styled-component for main section of Character components
const StyledCharactersSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: space-evenly;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charactersData, setCharactersData] = useState([]);
  //charactersData is state data that will be set with the API call
  //initialize with empty array b/c the .map is an array method

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => {
        console.log("RES.data.", res.data);
        setCharactersData(res.data);
      })
      .catch((err) => console.log("Oh no :(", err));
  }, []);
  //API call, set response data to state
  //response was an array of star wars character objects

  return (
    <div className="App">
      <StyledHeader className="Header">Star Wars Characters</StyledHeader>
      <StyledCharactersSection className="characters-section">
        {charactersData.map((characterData) => {
          return (
            <Character key={characterData.url} characterData={characterData} />
          );
        })}
      </StyledCharactersSection>
    </div>
  );
};
//returned JSX with props passed down where necessary. mapped over state data which was set from API response and created a Character component from each array index.
//Each character has a unique key from their url
//Each character gets their character's data object passed down as props

export default App;
