import { SelectedProduct } from "../App";
import { CartItem } from "../CartPage/CartItem";

type ProductsInfoProps = {
  selectedProducts: SelectedProduct[];
  currencySymbol: string;
};

export const ProductsInfo = (props: ProductsInfoProps) => {
  return (
    <div style={{ width: "70%" }}>
      <h3>Your order:</h3>
      {props.selectedProducts.map((product) => (
        <CartItem product={product} currencySymbol={props.currencySymbol} />
      ))}
      <h3>
        Total: {props.currencySymbol}
        {props.selectedProducts.reduce(
          (prev, current) => prev + current.cost * current.quantity,
          0
        )}
      </h3>
    </div>
  );
};
