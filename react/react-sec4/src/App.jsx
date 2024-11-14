import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimals() {
  const animals = ["bird", "cat", "cow", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}
console.log(getRandomAnimals());

function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    let newAnimal = getRandomAnimals();
    setAnimals([newAnimal, ...animals]);
  };
  return (
    <>
      <h1>show me list of animals</h1>
      <button onClick={handleClick}>Add Animal</button>
      <p>
        Number of Animals:{" "}
        {animals.map((animal, index) => {
          return <AnimalShow animal={animal} />;
        })}
      </p>
    </>
  );
}

export default App;
