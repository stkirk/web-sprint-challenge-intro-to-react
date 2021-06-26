import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Character from "./components/Character";

const baseUrl = "https://swapi.dev/api/people";

const StyledCharactersSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charactersData, setCharactersData] = useState([]);

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

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
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

export default App;
