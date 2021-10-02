import React from "react";
import ReactDOM from "react-dom";

const App = () => {

  let count = 0;

  let increase = () => {
    count++;
    ReactDOM.render(
      <div className="container">
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
      </div>,
      document.getElementById("root")
    );
    
  }
  
    return(
      <div className="container">
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
      </div>
    )
}


export default App;
