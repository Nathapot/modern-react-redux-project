// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const pottoText = {
    text: "Potto eiei",
  };

  return (
    <div>
      <h1
        style={{
          backgroundColor: "blue",
          color: "red",
        }}
      >
        Hi {pottoText.text}!
      </h1>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
