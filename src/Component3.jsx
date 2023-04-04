import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
function Component3() {
  return (
    <div>
      <Component2 />
      <Component1/>
    </div>
  );
}

export default Component3;
