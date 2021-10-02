import React from "react";
// import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {

  let state = React.useState();
  // let state = useState();

  console.log(state);

  let increase = () => {
    // count++;
  }
  
    return(
      <div className="container">
        <h1>0</h1>
        <button onClick={increase}>+</button>
      </div>
    )
}


export default App;
