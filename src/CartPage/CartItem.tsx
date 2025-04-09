import { SelectedProduct } from "../App";
import CancelIcon from "@mui/icons-material/Cancel";
import { QuantityButtons } from "./QuantityButtons";

type CartItemProps = {
  product: SelectedProduct;
  currencySymbol: string;
  removeSelectedProduct?: (product: SelectedProduct) => void;
  modifySelectedProductQuantity?: (
    productId: string,
    action: "increase" | "decrease"
  ) => void;
  editable?: boolean;
};

export const CartItem = (props: CartItemProps) => {
  return (
    <div
      style={{
        display: "flex",
        borderBottom: "1px solid lightgray",
        justifyContent: "space-between",
        padding: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <img
          src={props.product.imageUrl}
          style={{
            height: "50px",
            width: "50px",
            objectFit: "contain",
            backgroundColor: "white",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
          }}
        >
          <span>{props.product.name}</span>
          <span>{props.product.description}</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          {props.currencySymbol}
          {props.product.cost}
        </div>
        {props.editable && props.modifySelectedProductQuantity ? (
          <>
            <QuantityButtons
              modifySelectedProductQuantity={
                props.modifySelectedProductQuantity
              }
              product={props.product}
            />
            <span
              style={{ cursor: "pointer", height: "min-content" }}
              onClick={() => props.removeSelectedProduct?.(props.product)}
            >
              <CancelIcon color="primary" />
            </span>
          </>
        ) : (
          <div style={{ color: "gray" }}>x{props.product.quantity}</div>
        )}
      </div>
    </div>
  );
};
