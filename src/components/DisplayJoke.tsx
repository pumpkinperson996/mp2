import styled from "styled-components";
import { Joke } from "../interfaces/Jokes.ts";

const AllJokesDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: Azure;
`;

const SingleJokeDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
  margin: 1%;
  background-color: CadetBlue;
  border: 3px solid black;
  text-align: center;
  color: white;
`;

export default function JokeDisplay(props: { data: Joke[] }) {
  return (
    <AllJokesDiv>
      {props.data.map((joke: Joke) => (
        <SingleJokeDiv key={joke.id}>
            <h1>Type: {joke.type}</h1>
            <h2>Setup: {joke.setup}</h2>
            <p>Punchline: {joke.punchline}</p>
        </SingleJokeDiv>
        ))}

    </AllJokesDiv>
  );
}
