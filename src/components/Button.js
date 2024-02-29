import React from "react";

const Button = ({ text }) => {
  return (
    <button style={{ background: "green", width: "230px" }}>
      {text || "hello world jfjfjjfjfjjj"}
    </button>
  );
};

export default Button;
