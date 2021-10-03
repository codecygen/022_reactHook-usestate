// import React from "react";
import React, { useState } from "react";

const App = () => {

  // const [count, setCount] = React.useState(0);
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  const [initialTime, setTime] = useState('Time');
  const getTime = () => {
    let timeNow = new Date().toLocaleTimeString();
    setTime(timeNow);
    setInterval(getTime, 1000);
  };

    return(
      <div>
        <div className="container">
          <h1>{count}</h1>
          <button onClick={decrease}>-</button>
          <button onClick={increase}>+</button>
        </div>
        <div className="container">
          <h1 class='watch'>{initialTime}</h1>
          <button onClick={getTime} class="time-btn">Get Time</button>
        </div>
      </div>
    );
}


export default App;
