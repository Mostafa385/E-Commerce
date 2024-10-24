import React, { useState } from "react";

function Counter({ count, setcount, price }) {
  const inc = () => {
    if (count == 3) {
      setcount(3);
    } else {
      setcount(count + 1);
    }
  };

  const dec = () => {
    if (count >= 1) {
      setcount(1);
    } else {
      setcount(count - 1);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-end align-items-center gap-3 my-4 py-3">
        <button onClick={dec} className="btn btn-secondary px-3 py-2 fs-4">
          -
        </button>
        <h5 className="m-0 px-3">{count}</h5>
        <button onClick={inc} className="btn btn-warning px-3 py-2 fs-4">
          +
        </button>
      </div>
      <h3>Total: {price*count}</h3>
    </>
  );
}

export default Counter;
