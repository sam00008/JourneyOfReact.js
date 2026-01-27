import { useState } from "react";
import ColorBar from "./components/ColorBar.jsx";

function App() {
   const [color,setColor] = useState("white");

  return (
    <>
    <div 
    style={{backgroundColor : color}}
    className="bg-white w-full h-screen">
      <ColorBar  setColor = {setColor} />
    </div>
      
    </>
  )
}

export default App
