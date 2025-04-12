import { useState } from "react";
import { SelectedProduct } from "../App";
import { Header } from "../Header";
import { Container } from "../helpers/Container";
import { Product, ProductPreview } from "./ProductPreview";
import { productMock } from "../helpers/productMock";

type MainPageProps = {
  currencySymbol: string;
  selectedProducts: SelectedProduct[];
  addSelectedProduct: (product: Product) => void;
};

export const MainPage = (props: MainPageProps) => {
  const products = productMock

  return (
    <Container style={{ height: "600px" }}>
      <Header selectedProducts={props.selectedProducts} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            backgroundColor: "rgba(245, 245, 245, 0.9)",
            height: "100%",
            width: "90%",
            display: "flex",
            justifyContent: "space-around",
            padding: "20px",
          }}
        >
          {products.map((product) => (
            <ProductPreview
              product={product}
              currencySymbol={props.currencySymbol}
              addSelectedProduct={props.addSelectedProduct}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
