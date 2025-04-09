import React from "react";
import { CartItem } from "./CartItem";
import { Header } from "../Header";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import { WithBackButton } from "../helpers/WithBackButton";
import { Container } from "../helpers/Container";
import { SelectedProduct } from "../App";

type CartPageProps = {
  selectedProducts: SelectedProduct[];
  removeSelectedProduct: (product: SelectedProduct) => void;
  currencySymbol: string;
  modifySelectedProductQuantity: (
    productId: string,
    action: "increase" | "decrease"
  ) => void;
};

export const CartPage = (props: CartPageProps) => {
  const navigate = useNavigate();

  const productsAmount = props.selectedProducts.length;

  return (
    <Container style={{ height: "600px" }}>
      <Header selectedProducts={props.selectedProducts} />
      <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>
        <WithBackButton label="Back to main page" path="/">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "30px",
              width: "90%",
            }}
          >
            {productsAmount ? (
              props.selectedProducts.map((product) => (
                <CartItem
                  product={product}
                  currencySymbol={props.currencySymbol}
                  removeSelectedProduct={props.removeSelectedProduct}
                  key={product.id}
                  modifySelectedProductQuantity={
                    props.modifySelectedProductQuantity
                  }
                  editable
                />
              ))
            ) : (
              <>No items yet...</>
            )}
          </div>
          {!!productsAmount && (
            <div>
              <h3 style={{ margin: "20px" }}>{`Total: ${
                props.currencySymbol
              }${props.selectedProducts.reduce(
                (prev, cur) => prev + cur.cost * cur.quantity,
                0
              )}`}</h3>
              <Button
                color="primary"
                variant="contained"
                style={{
                  width: "150px",
                  height: "50px",
                  justifySelf: "center",
                  margin: "20px",
                  color: "white",
                }}
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </Button>
            </div>
          )}
        </WithBackButton>
      </div>
    </Container>
  );
};
