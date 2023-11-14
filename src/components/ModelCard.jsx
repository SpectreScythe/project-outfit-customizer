import React, { useState } from "react";
import ModelShirt from "./ModelShirt";
import ModelJeans from "./ModelJeans";
import { ModelsContainer } from "../styles/StylesCanvas";
import ModelShoes from "./ModelShoes";

const ModelCard = () => {
  const [color, setColor] = useState("#000000");
  const colorHandler = (e) => {
    setColor(e.target.value);
    console.log(e.target.value)
  };

  return (
    <>
    Choose Color:
      <input type="color" value={color} onChange={colorHandler} />
      <ModelsContainer>
        <ModelShirt color={color} />
        <ModelJeans color={color} />
        <ModelShoes />
      </ModelsContainer>
    </>
  );
};

export default ModelCard;
