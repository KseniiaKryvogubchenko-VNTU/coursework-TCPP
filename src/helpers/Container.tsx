import { CSSProperties, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  style?: CSSProperties;
};

export const Container = (props: ContainerProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", ...props.style }}>
      {props.children}
    </div>
  );
};
