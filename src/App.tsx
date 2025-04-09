import { Route, Routes } from "react-router";
import { MainPage } from "./MainPage";
import React, { useEffect, useState } from "react";
import { CartPage } from "./CartPage";
import { Product } from "./MainPage/ProductPreview";
import "./App.css";
import { CheckoutPage } from "./CheckoutPage";

export interface SelectedProduct extends Product {
  quantity: number;
}

export const App = () => {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    []
  );

  const addSelectedProduct = (product: Product) => {
    let updatedProducts = [...selectedProducts];

    const existingProductIndex = selectedProducts.findIndex(
      (p) => p.id === product.id
    );

    if (existingProductIndex > -1) {
      updatedProducts[existingProductIndex].quantity++;
    } else {
      updatedProducts = [...updatedProducts, { ...product, quantity: 1 }];
    }

    setSelectedProducts(updatedProducts);
  };

  const removeSelectedProduct = (product: SelectedProduct) => {
    let updatedProducts = [...selectedProducts];
    updatedProducts = updatedProducts.filter((p) => p.id !== product.id);

    setSelectedProducts(updatedProducts);
  };

  const modifySelectedProductQuantity = (
    productId: string,
    action: "increase" | "decrease"
  ) => {
    let updatedProducts = [...selectedProducts];
    const productIndex = updatedProducts.findIndex((p) => p.id === productId);

    action === "increase"
      ? updatedProducts[productIndex].quantity++
      : updatedProducts[productIndex].quantity--;

    setSelectedProducts(updatedProducts);
  };

  const clearSelectedProducts = () => {
    setSelectedProducts([]);
  };

  const currencySymbol = "$";

  useEffect(() => {
    const storageProducts = localStorage.getItem("selectedProducts");
    if (storageProducts) setSelectedProducts(JSON.parse(storageProducts));
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPage
            currencySymbol={currencySymbol}
            selectedProducts={selectedProducts}
            addSelectedProduct={addSelectedProduct}
          />
        }
      />
      <Route
        path="cart"
        element={
          <CartPage
            selectedProducts={selectedProducts}
            currencySymbol={currencySymbol}
            removeSelectedProduct={removeSelectedProduct}
            modifySelectedProductQuantity={modifySelectedProductQuantity}
          />
        }
      />
      <Route
        path="checkout"
        element={
          <CheckoutPage
            currencySymbol={currencySymbol}
            selectedProducts={selectedProducts}
            clearSelectedProducts={clearSelectedProducts}
          />
        }
      />
    </Routes>
  );
};
