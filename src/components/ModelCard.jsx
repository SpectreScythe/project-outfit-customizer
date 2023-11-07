import React from "react";
import ModelShirt from "./ModelShirt";
import ModelJeans from "./ModelJeans";
import { ModelsContainer } from "../styles/StylesCanvas";
import ModelShoes from "./ModelShoes";

const ModelCard = () => {
  return (
    <>
      <ModelsContainer>
        <ModelShirt />
        <ModelJeans />
        <ModelShoes />
      </ModelsContainer>
    </>
  );
};

export default ModelCard;
