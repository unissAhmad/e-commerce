import React from "react";
import { styled } from "@mui/material/styles";

const PrImage = ({ path, alt }) => {
  return <ImgWrapper src={path} alt={alt} />;
};

const ImgWrapper = styled("img")(({ theme }) => ({
  height: "100%",
  width: "100%",
  objectFit: "cover",
}));
export default PrImage;
