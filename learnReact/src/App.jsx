

import { useState } from 'react'

function App() {
   let [counter,setCounter] = useState(0);
  
   const IncreaseCounter = () => {
    if(counter >= 20){
      return;
    }
       setCounter(counter+1);
   }

   const DecreaseCounter = () =>{
    if(counter <= 0){
      return;
    }

    setCounter(counter-1);
   }
  return (
    <>
     <h1>Learn React.JS</h1>
     <h2>Counter</h2>
     <br />
     <h2>{counter}</h2>

     <button
      onClick={IncreaseCounter}
     >Add</button>
     <br />
     <button
     onClick={DecreaseCounter}
     >Sub</button>  
    </>
  )
}

export default App
