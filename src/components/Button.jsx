import React from "react";

function Button({
  children,
  border,
  width = "",
  bg = "",
  textColor = "black",
}) {
  const styles = { backgroundColor: bg, border: border, color: textColor };
  return (
    <button
      style={styles}
      className={` w-[${width}%] py-2 px-4 rounded-2xl box-border `}
    >
      {children}
    </button>
  );
}

export default Button;
