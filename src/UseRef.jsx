import React, { useRef, useEffect, useState } from "react";

function UseRef() {
  const [inputValue, setInputValue] = useState("");
  const myref = useRef("");
  const count = useRef(0);
  useEffect(() => {
    myref.current.focus();
  });

  useEffect(() => {
    count.current = count.current + 1;
  });
  const changeStyle = () => {
    myref.current.style.backgroundColor = "#82E0AA";
  };

  return (
    <>
      <h1>Hello World</h1>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
     <h1>Render Count: {count.current}</h1>

      <div ref={myref}> hndsjbdh</div>

      <button onClick={changeStyle}> Change Color</button>
    </>
  );
}

export default UseRef;
