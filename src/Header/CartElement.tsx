import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router";
import { SelectedProduct } from "../App";

type CartElementProps = {
  selectedProducts: SelectedProduct[];
};

export const CartElement = (props: CartElementProps) => {
  const navigate = useNavigate();

  const productQuantity = props.selectedProducts.reduce(
    (prev, current) => prev + current.quantity,
    0
  );

  return (
    <div
      style={{
        display: "flex",
        width: "90px",
        height: "30px",
        background: "whitesmoke",
        alignItems: "center",
        padding: "0 5px",
        gap: "5px",
        cursor: "pointer",
      }}
      onClick={() => navigate("/cart")}
    >
      <ShoppingCartIcon />
      Cart ({productQuantity})
    </div>
  );
};
