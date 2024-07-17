import React, { useState } from "react";
import useMousePosition from "./components/useMousePosition";

const App = () => {
  const [tracking, setTracking] = useState();
  const {x, y} = useMousePosition();

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
    </>
  )
}
export default App;