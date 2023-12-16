import React, { useState } from "react";

function CountAdd() {
  const [add, setAdd] = useState(0);
  const handleAdd = () => {
    setAdd(add + 1);
  };
  return (
    <>
      <p>child compont</p>
      <div>
        {" "}
        count {add}
        <button onClick={handleAdd}>+</button>
      </div>
    </>
  );
}

export default CountAdd;
