import { useEffect } from "react";
import { Grid } from "@mui/material";
import { useThunk } from "../hook/use-thunk";
import { useSelector } from "react-redux";
import { HomeProduct } from "../components";
import { homeProductsThunk } from "../store";

const Home = () => {
  const [doFetchProducts, isFEtching] = useThunk(homeProductsThunk);
  const { products, limit } = useSelector((state) => {
    return { products: state.home.products };
  });
  useEffect(() => {
    products.length < 1 && doFetchProducts({ limit });
    // eslint-disable-next-line
  }, []);

  return isFEtching ? (
    <p>Loading..</p>
  ) : products.length < 1 ? null : (
    <Grid container>
      {products.map((pr) => {
        return <HomeProduct id={pr.id} title={pr.title} key={pr.id} image={pr.image} price={pr.price} rating={pr.rating} />;
      })}
    </Grid>
  );
};
export default Home;
