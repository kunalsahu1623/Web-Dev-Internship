import { useState } from "react";

function Counter() {
     let [count,setCount] = useState(0)
      // here count is a simple varaible which does not provide memory
      // let count = 0

      // count is a state which provide memory and functiion setCounter to update count state
      // let [mystate, setMyState] = useState(default value)

     return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)} >Click me</button>
        </div>
     )
}

export { Counter }