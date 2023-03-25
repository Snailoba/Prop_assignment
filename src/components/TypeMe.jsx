import React, { useState } from "react";

function TypeMe() {
  const [show, setShow] = useState(false);
  const handleBlur = () => {
    setShow(true);
  };
  return (
    <div className="containerType">
      <input type="text" onBlur={handleBlur}></input>
      {show && <p className="appear">Please type in here!</p>}
    </div>
  );
}

export default TypeMe;
