import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ProductsInfo } from "./ProductsInfo";
import { SelectedProduct } from "../App";
import { UserInfo } from "./CheckoutForm";

type OrderThanksProps = {
  selectedProducts: SelectedProduct[];
  currencySymbol: string;
  userInfo: UserInfo;
};

export const OrderThanks = (props: OrderThanksProps) => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <CheckCircleIcon color="primary" fontSize="large" />
        <h2>Thanks for your order!</h2>
      </div>
      <ProductsInfo
        selectedProducts={props.selectedProducts}
        currencySymbol={props.currencySymbol}
      />
      <div>
        <h3>Delivery details:</h3>
        <div>
          {props.userInfo.firstName} {props.userInfo.lastName}
        </div>
        <div>{props.userInfo.email}</div>
        <div>
          {props.userInfo.city}, {props.userInfo.country}
        </div>
        <div>{props.userInfo.address}</div>
        <div>{props.userInfo.phone}</div>
      </div>
    </div>
  );
};
