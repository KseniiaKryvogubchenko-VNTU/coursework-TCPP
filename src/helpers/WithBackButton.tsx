import { ReactNode } from "react";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { useNavigate } from "react-router";

type WithBackButtonProps = {
  label: string;
  path: string;
  children: ReactNode;
};

export const WithBackButton = (props: WithBackButtonProps) => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "20%",
          display: "flex",
          justifyItems: "center",
          padding: "20px 10px",
          height: "min-content",
          cursor: "pointer",
        }}
        onClick={() => navigate(props.path)}
      >
        <KeyboardReturnIcon />
        {props.label}
      </div>
      {props.children}
    </div>
  );
};
