import { SelectedProduct } from "../App";
import { CartElement } from "./CartElement";

type HeaderProps = {
  selectedProducts: SelectedProduct[];
};

export const Header = (props: HeaderProps) => {
  return (
    <div
      style={{
        height: "100px",
        backgroundImage:
          "url(https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2024-1704560007-SGQ6F/wallpaper-1704971338-5UOez/wl15-1708500763-ihgZL.jpg)",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      }}
    >
      <CartElement selectedProducts={props.selectedProducts} />
    </div>
  );
};
