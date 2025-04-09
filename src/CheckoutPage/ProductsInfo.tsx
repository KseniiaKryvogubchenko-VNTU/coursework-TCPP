import { SelectedProduct } from "../App";
import { CartItem } from "../CartPage/CartItem";

type ProductsInfoProps = {
  selectedProducts: SelectedProduct[];
  currencySymbol: string;
};

export const ProductsInfo = (props: ProductsInfoProps) => {
  return (
    <div>
      {props.selectedProducts.map((product) => (
        <CartItem product={product} currencySymbol={props.currencySymbol} />
      ))}
    </div>
  );
};
