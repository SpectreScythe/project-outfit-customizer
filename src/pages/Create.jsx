import React from "react";
import * as PS from "../styles/StylesPage";
import ModelCard from "../components/ModelCard";

const Create = () => {
  return (
    <PS.PageContainer>
      <PS.PageTopTitle>Design your own Outfit</PS.PageTopTitle>
      <ModelCard />
    </PS.PageContainer>
  );
};

export default Create;
