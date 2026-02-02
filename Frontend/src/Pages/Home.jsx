import React from "react";
import About from "./About"; // make sure path is correct

const Home = (props) => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <h1>Name: {props.name}</h1>
      <button onClick={handleClick}>Go to About page</button>

      {/* Pass props.name to About */}
      <About name={props.name} />
      <About name={props.name} />
      <About name={props.name} />
    </div>
  );
};

export default Home;
