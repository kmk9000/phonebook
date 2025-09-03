import React from "react";
const Persons = ({ personsToShow }) => {
  return (
    <ul>
      {personsToShow.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}{" "}
          <button onClick={() => console.log("button clicked")}>delete</button>
        </li>
      ))}
    </ul>
  );
};
export default Persons;
