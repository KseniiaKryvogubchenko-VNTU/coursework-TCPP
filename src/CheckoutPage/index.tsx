// @ts-nocheck
import React, { useState } from "react";
import { Header } from "../Header";
import { WithBackButton } from "../helpers/WithBackButton";
import { Container } from "../helpers/Container";
import { CheckoutForm, UserInfo } from "./CheckoutForm";
import { ProductsInfo } from "./ProductsInfo";
import { SelectedProduct } from "../App";
import { OrderThanks } from "./OrderThanks";

type CheckoutPageProps = {
  selectedProducts: SelectedProduct[];
  currencySymbol: string;
  clearSelectedProducts: () => void;
};

export const CheckoutPage = (props: CheckoutPageProps) => {
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [previewProducts, _] = useState(props.selectedProducts);

  const handleSubmit = (userData: UserInfo) => {
    setUserInfo(userData);
    setIsOrderCompleted(true);
    props.clearSelectedProducts();
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <Header selectedProducts={props.selectedProducts} />
      <div style={{ backgroundColor: "whitesmoke", height: "100%" }}>
        <WithBackButton
          label={isOrderCompleted ? "Back to main page" : "Back to cart"}
          path={isOrderCompleted ? "/" : "/cart"}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            {isOrderCompleted ? (
              <OrderThanks
                selectedProducts={previewProducts}
                currencySymbol={props.currencySymbol}
                userInfo={userInfo}
              />
            ) : (
              <>
                <ProductsInfo
                  selectedProducts={props.selectedProducts}
                  currencySymbol={props.currencySymbol}
                />
                <CheckoutForm onSubmit={handleSubmit} />
              </>
            )}
          </div>
        </WithBackButton>
      </div>
    </Container>
  );
};
