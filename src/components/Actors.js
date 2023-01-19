import React from "react";
import { actors } from "../data";

const actorsData = (actor) => {
  return (
    <div key={actor.name}>
      <h4>{actor.name}</h4>
      <ul>
        {actor.movies.map((movie) => {
          return <li  key={movie}>{movie}</li>;
        })}
      </ul>
    </div>
  );
};

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor) => ActorsData(actor))}
    </div>
  );
}

export default Actors;
