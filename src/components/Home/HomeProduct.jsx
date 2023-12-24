import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import PrImage from "../Image";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const HomeProducts = ({ id, title, price, rating, image }) => {
  let name = title;
  return (
    <Wrapper item xs={6} sm={4} md={3} lg={2}>
      <PrductWrapper>
        <Link to={`/product/${id}`}>
          <Image>
            <PrImage path={image} alt={title} />
          </Image>
        </Link>
        <Link to={`/product/${id}`}>
          <Title>{name.length > 50 ? name.slice(0, 50) + ".." : name}</Title>
        </Link>
        <Rating name="half-rating-read" defaultValue={rating.rate} precision={0.5} readOnly sx={{ fontSize: "1rem" }} />
        <Price>₹ {price}</Price>
      </PrductWrapper>
    </Wrapper>
  );
};

const Price = styled("p")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 500,
  color: theme.palette.black.main,
}));
const Image = styled(Box)(() => ({
  height: "10rem",
}));
const PrductWrapper = styled(Box)(() => ({
  padding: ".4rem",
  // width: "100%",
  minHeight: "15rem",
}));
const Title = styled("p")(({ theme }) => ({
  fontSize: ".9rem",
  fontWeight: 500,
  color: theme.palette.primary.main,
  marginTop: ".5rem",
  height: "3rem",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
}));
const Wrapper = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  border: ".025rem solid #eeeeee",
}));
export default HomeProducts;
