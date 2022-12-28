import React from "react";
import { useMemo, useState } from "react";

enum Color {
  green = "green",
  red = "red",
}

function Tomato() {
  const [color, setColor] = useState(Color.green);

  function handleClick() {
    switch (color) {
      case Color.green: {
        setColor(Color.red);
        break;
      }
      case Color.red: {
        setColor(Color.green);
        break;
      }
      default: {
        setColor(Color.green);
        break;
      }
    }
  }

  const style = useMemo(() => {
    const myStyle = {
      backgroundColor: "green",
    };

    switch (color) {
      case Color.green: {
        myStyle.backgroundColor = Color.green;
        break;
      }
      case Color.red: {
        myStyle.backgroundColor = Color.red;
        break;
      }
      default: {
        myStyle.backgroundColor = Color.green;
        break;
      }
    }
    return myStyle;
  }, [color]);

  return (
    <div onClick={handleClick} style={style}>
      i'm {color} tomato!
    </div>
  );
}

export default Tomato;
