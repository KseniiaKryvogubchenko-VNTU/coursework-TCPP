import { SelectedProduct } from "../App";

type QuantityButtonsProps = {
  modifySelectedProductQuantity: (
    productId: string,
    action: "increase" | "decrease"
  ) => void;
  product: SelectedProduct;
};

export const QuantityButtons = (props: QuantityButtonsProps) => {
  const isDisableDecrease = props.product.quantity === 1;

  return (
    <div
      style={{
        display: "flex",
        border: "1px lightgray solid",
        height: "min-content",
      }}
    >
      <div
        style={{
          backgroundColor: isDisableDecrease ? "whitesmoke" : "white",
          color: isDisableDecrease ? "lightgray" : "black",
          padding: "0 5px",
          cursor: isDisableDecrease ? "auto" : "pointer",
        }}
        onClick={
          isDisableDecrease
            ? undefined
            : () =>
                props.modifySelectedProductQuantity(
                  props.product.id,
                  "decrease"
                )
        }
      >
        -
      </div>
      <div
        style={{
          backgroundColor: "white",
          borderRight: "1px lightgray solid",
          borderLeft: "1px lightgray solid",
          padding: "0 5px",
        }}
      >
        {props.product.quantity}
      </div>
      <div
        style={{
          backgroundColor: "white",
          padding: "0 5px",
          cursor: "pointer",
        }}
        onClick={() =>
          props.modifySelectedProductQuantity(props.product.id, "increase")
        }
      >
        +
      </div>
    </div>
  );
};
