import React from "react";

function Button(props) {
  // const handleClick = () => setCounter(counter+1);

  return (
    <button className="Button" onClick={props.onClickFunction}>
      Call API
    </button>
  );
}

export default Button;
