import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home, Product, Products, About, ErrorPage } from "./pages";
import Layout from "./Layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="*" errorElement={<ErrorPage />} />
      <Route path="" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/shop" element={<Products />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);
