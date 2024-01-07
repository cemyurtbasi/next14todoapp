import React, { FC, MouseEventHandler, memo } from "react";

type ButtonProps = {
  text?: string;
  loadingActive?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
};

export const Button: FC<ButtonProps> = ({
  text,
  loadingActive = false,
  onClick,
  //İcon vb custom elementler için
  children,
}) => {
  return (
    <div className={"button"}>
      <button onClick={onClick} disabled={loadingActive} type="button">
        {text}
        {children}
      </button>
      {loadingActive && <Loading />}
    </div>
  );
};

//Dış bir komponent yapılabilir
const Loading = memo(() => {
  return <div className={"loading "}>...</div>;
});
