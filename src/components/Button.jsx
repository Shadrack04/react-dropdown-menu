import React from "react";

function Button({ children, border }) {
  return (
    <button className={`${border} py-2 px-4 rounded-2xl box-border `}>
      {children}
    </button>
  );
}

export default Button;
