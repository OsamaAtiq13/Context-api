
import React, { createContext } from "react";
import Component2 from './Component2';
import Component1 from "./Component1";
import Component3 from "./Component3";
const FirstName = createContext();
const LastName = createContext();
function App() {
  return (
    <>
      <FirstName.Provider value={"Ali"}>
        <LastName.Provider value={"Ahmad"}>
        <Component3 />
       
        </LastName.Provider>
      
      </FirstName.Provider>

      
    </>
  );
}

export default App;

export { FirstName ,LastName };