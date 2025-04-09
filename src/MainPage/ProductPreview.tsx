import React from "react";
import { Button } from "@mui/material";

export interface Product {
  id: string;
  name: string;
  description: string;
  cost: number;
  imageUrl: string;
}

type ProductPreviewProps = {
  product: Product;
  currencySymbol: string;
  addSelectedProduct: (product: Product) => void;
};

export const ProductPreview = (props: ProductPreviewProps) => {
  return (
    <div
      style={{
        width: "150px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: "10px",
        boxShadow: "0px 0px 5px 0px rgba(145,145,145,1)",
        height: "fit-content",
      }}
    >
      <div style={{ height: "150px", display: "flex", alignItems: "center" }}>
        <img
          src={props.product.imageUrl}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <span>
            <b>{props.product.name}</b>
          </span>
          <span>{props.product.description}</span>
        </div>
        <span>
          {props.currencySymbol}
          {props.product.cost}
        </span>
      </div>
      <Button
        color="primary"
        variant="contained"
        style={{ width: "50%", alignSelf: "center" }}
        onClick={() => props.addSelectedProduct(props.product)}
        sx={{ color: "white" }}
        data-testid="buy-button"
      >
        Buy
      </Button>
    </div>
  );
};
