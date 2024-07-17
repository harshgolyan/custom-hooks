import React, { useState } from "react";
import useMousePosition from "./components/useMousePosition";
import useOnline from "./components/useOnline";

const App = () => {
  const [tracking, setTracking] = useState();
  const {x, y} = useMousePosition();
  const isOnline = useOnline;

  const trackingHandler = () => {
    setTracking(true);
  }
  return(
    <>
      <div>
        <button onClick={trackingHandler}>useMousePosition</button>
        {tracking && (
          <div>mouse is at position of {x} in x and {y} in y</div>
        )}
      </div>

      <div>
        <button>
          status : {isOnline ? "online": "offline"}
        </button>
        
      </div>
    </>
  )
}
export default App;