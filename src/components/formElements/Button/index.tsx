import React, { FC, MouseEventHandler, memo } from "react";
import variables from "./button.module.scss";
import { cx } from "@/shared/utlis/concatClasses";

type ButtonProps = {
  text?: string;
  loadingActive?: boolean;
  type?: ButtonTypes;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
  customClass?: string;
};

export enum ButtonTypes {
  primary = "primary",
  secondary = "secondary",
}

export const Button: FC<ButtonProps> = ({
  text,
  loadingActive = false,
  onClick,
  type = ButtonTypes.primary,
  customClass = ButtonTypes.primary,
  children,
}) => {
  return (
    <div className={cx(variables.buttonContainer, customClass)}>
      <button
        className={cx(variables.button, variables[type])}
        onClick={onClick}
        disabled={loadingActive}
        type="button"
      >
        {text}
        {children}
      </button>
      {loadingActive && <Loading />}
    </div>
  );
};

//Dış bir komponent yapılabilir
const Loading = memo(() => {
  return <div className={variables.loading}>...</div>;
});
