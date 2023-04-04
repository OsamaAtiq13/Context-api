import React from "react";
import { FirstName, LastName } from "./App";
function Component1() {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <>
              <LastName.Consumer>
                {(lname) => {
                  return (
                    <>
                      <h1>
                        {fname} {lname}
                      </h1>
                    </>
                  );
                }}
              </LastName.Consumer>
            </>
          );
        }}
      </FirstName.Consumer>

      <div>Component1</div>
    </>
  );
}

export default Component1;
