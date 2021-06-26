import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

const baseUrl = "https://swapi.dev/api/people";

const StyledCharacters = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => {
        console.log("RES.data.", res.data);
        setCharacterData(res.data);
      })
      .catch((err) => console.log("Oh no :(", err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledCharacters className="main-section"></StyledCharacters>
    </div>
  );
};

export default App;
